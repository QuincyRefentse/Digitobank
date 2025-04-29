import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.model.js';
import transactionRoutes from './routes/transaction.routes.js';
import userRoute from "./routes/user.routes.js";
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//
//routes
app.use("/api/users", userRoute);


//GET intial route API [CREATE]
app.get("/", (req, res) => {
  res.send("hello there");
});


// transcation routes

app.use('/api/transactions', transactionRoutes);
/*

//GET userS API [READ]
app.get("/api/users", async (req,res)=> {
try {
   const users = await User.find({});
   res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//GET user id API [READ]
app.get("/api/users/:id", async (req,res) =>{

    try {
         const { id } = req.params;
         const user = await User.findById(id);
         res.status(200).json(user);

     } catch (error) {
     res.status(500).json({ message: error.message});
    }

});


//POST  Add user api [CREATE]
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//PUT  update user api [UPDATE]
app.put("/api/users/:id", async (req,res)=> {

try {
        const {id} = req.params;
        const user =  await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updatedUser= await User.findById(id);

        res.status(200).json(updatedUser);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//DELETE delete user api [DELETE]

app.delete("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

*/

//Connection Strings
mongoose.connect('mongodb+srv://quincyrefentse:zclX4ZJI5i2hMbYi@cluster0.epsosok.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log("Server running on port 3000 🎉");
    });
  })
  .catch(() => {
    console.log('Connection failed');
  });
