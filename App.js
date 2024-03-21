import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import CourseDetails from "./src/screens/CourseDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false,
        }
        }/>
         <Stack.Screen name="Course" component={Course}
         options={{
           
           headerTitleStyle:{
               fontSize:25,
               fontFamily: "Nunito_600SemiBold",
           },
          headerTitle:"Courses",
           headerTitleAlign:"center",
           
         }}
         
          />
          <Stack.Screen name="UserData" component={UserData}
           options={{
           headerTitleStyle:{
               fontSize:25,
               fontFamily: "Nunito_600SemiBold",
           },
           headerTitle: "Student Data",
           headerTitleAlign:"center",
           
         }}
           />
           <Stack.Screen name="Contact" component={Contact} 
            options={{
           headerTitleStyle:{
               fontSize:25,
               fontFamily: "Nunito_600SemiBold",
           },
            headerTitle: "Contact Us",
           headerTitleAlign:"center",
           
         }}
           />
            <Stack.Screen name="About" component={About}
             options={{
           headerTitleStyle:{
               fontSize:25,
               fontFamily: "Nunito_600SemiBold",
           },
           headerTitle: "About Us",
           headerTitleAlign:"center",
           
         }}
             />
              <Stack.Screen name="CourseDetails" component={CourseDetails}
             options={{
           headerTitleStyle:{
               fontSize:25,
               fontFamily: "Nunito_600SemiBold",
           },
           headerTitle: "Course Details",
           headerTitleAlign:"center",
           
         }}
             />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
