import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import AuthScreen from "../screens/auth";
import ListScreen from '../screens/list';
import TodosScreen from '../screens/TodosScreen';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Todos'}
            >
                <Stack.Screen
                    name="Auth"
                    component={AuthScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Todos"
                    component={TodosScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;