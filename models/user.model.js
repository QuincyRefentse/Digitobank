import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid'; // For generating unique account numbers

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
      }
    },

    accountNumber: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },
    balance: {  // Balance field to track the user's balance
          type: Number,
          default: 40000 // Set the default balance to R40,000
        },

    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    }
  },
  {
    timestamps: true
  }
);

// Virtual field for confirm password (not saved in DB)
UserSchema.virtual('confirmPassword')
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

// Custom validation before saving
UserSchema.pre('validate', function (next) {
  if (this.isNew && this.password !== this._confirmPassword) {
    this.invalidate('confirmPassword', 'Password and confirm password must match');
  }

  // If it's a new user, generate account number
  if (this.isNew && !this.accountNumber) {
    this.accountNumber = uuidv4(); // Generate a unique account number (UUID)
  }

  next();
});

// Hash the password before saving to the DB
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    // Salt and hash the password using bcrypt
    const salt = await bcrypt.genSalt(10); // 10 rounds of salt
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Compare entered password with hashed password (useful for login)
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
