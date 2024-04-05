import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home'
import Details from '../pages/details';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='Home'>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default AppRouter;
