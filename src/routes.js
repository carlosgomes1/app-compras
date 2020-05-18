import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Create from './pages/Create';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                initialRouteName="Main"
                screenOptions={{ headerShown: false }}
            >
                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="Create" component={Create} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
