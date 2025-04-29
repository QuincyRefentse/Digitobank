import React from "react";
import styled from "styled-components";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import Text from "../components/Text"; // Assuming Text component is correctly typed
import TouchScreens from '../../components/screens/TouchScreen'; // Import TouchScreen from components

const TouchScreen: React.FC = () => {
  return (
    <Container>
      <Text center heavy title color="#964ff0" margin="32px 0 0">
        mybank
      </Text>
      <Touch>
        <Circle>/Circles</Circle>
      </Touch>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #lelele;
`;

const Touch = styled.TouchableOpacity`
  // Add styles for Touch here if needed
`;

const Circle = styled.View`
  // Add styles for Circle here if needed
`;

export default TouchScreen;
