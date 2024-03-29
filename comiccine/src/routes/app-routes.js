import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home'
import Details from '../pages/details';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Bem Vindo a ComicCine" }}
                />

                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{ title: "Sobre" }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default AppRouter;
