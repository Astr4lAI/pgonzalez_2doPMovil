import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./components/Inicio";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";

import React from 'react';
import ProjectForm from './screens/ProjectForm';
import ProjectList from './screens/ProjectList';

// const Navegador = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        
        
      >
        <Tab.Screen name="Add Project" component={ProjectForm} />
        <Tab.Screen name="Project List" component={ProjectList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};