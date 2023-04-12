 import { View, Text } from 'react-native'
 import React from 'react'
 import { NavigationContainer } from '@react-navigation/native'
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './HomeScreen'

// Screen Names
const homeName = 'Home';
const Tab = createBottomTabNavigator();


 const NavigationContainer = () => {
   return (

    <NavigationContainer>
        <Tab.Navigator initialRouteName={homeName}
screenOptions= {({route}) => ({
    tabBarIcons: ({focused,color, size}) => {
let iconName;
let rn = route.name;
if (rn === homeName) {
    iconName = focused ? 'home': 'home-outline'
}else if (rn === den)


    }
})
}
        >

        </Tab.Navigator>
    </NavigationContainer>
   )
 }

 export default NavigationContainer