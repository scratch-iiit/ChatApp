import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatScreen from '../components/screens/ChatScreen';
import ChatsScreen from '../components/screens/ChatsScreen'
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {



    return (

        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
                <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="chat" component={ChatScreen} />
            </Stack.Navigator>

        </NavigationContainer>

    )



}

export default Navigator;