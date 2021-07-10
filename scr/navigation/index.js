import * as React from 'react';
import appColors from '../styles/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index'
import Remember from '../screens/Remember/index'
import Discover from '../screens/Discover/index'
import Item from '../screens/Items/index'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        activeColor={'red'}
        barStyle={{ backgroundColor: `${appColors.white}` }}
        tabBarOptions={{
            activeTintColor: `${appColors.darkGreen}`,
            inactiveTintColor: `${appColors.darkOrange}`,
            labelStyle: {
                fontSize: 12,
                textAlign: 'center',
                display: 'flex',
                marginBottom: 10
            },
        }}
    >
        <Tab.Screen
            name="Discover"
            component={Discover}
            options={{
                tabBarIcon: () => <Ionicons name="recording-outline" size={24} color="#2A9D8F" />
            }}
        />
        <Tab.Screen
            name="Remember"
            component={Remember}
            options={{
                tabBarIcon: () => <FontAwesome5 name="list-alt" size={20} color="#2A9D8F" />
            }}
        />

    </Tab.Navigator>
);


export default function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: `${appColors.lightGreen}`,
                        elevation: 20,
                    },
                    headerTintColor: `${appColors.white}`,
                }}
            >
                <Stack.Screen options={{ headerShown: false, headerTitle: "" }} name="Home" component={Home} />
                <Stack.Screen options={{ headerTitle: "" }} name="App" component={TabNavigator} />
                <Stack.Screen options={{ headerTitle: "" }} name="Item" component={Item} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}