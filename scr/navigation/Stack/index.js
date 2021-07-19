import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import {useDispatch } from 'react-redux'
import {setModalVisible} from '../../features/modal/modalSlice'
import appColors from '../../styles/colors'
import Home from '../../screens/Home/index'
import Remember from '../../screens/Remember/index'
import Discover from '../../screens/Discover/index'
import Item from '../../screens/Items/index'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        activeColor={'red'}
        barStyle={{ backgroundColor: `${appColors.white}` }}
        tabBarOptions={{
            activeTintColor: `${appColors.darkOrange}`,
            inactiveTintColor: `${appColors.darkGreen}`,
            labelStyle: {
                fontSize: 12,
                textAlign: 'center',
                display: 'flex',
                marginBottom: 10
            },
        }}
    >
        <Tab.Screen
            name="Descobrir"
            component={Discover}
            options={{
                tabBarIcon: () => <Ionicons name="recording-outline" size={24} color="#2A9D8F" />
            }}
        />
        <Tab.Screen
            name="Lembrar"
            component={Remember}
            options={{
                tabBarIcon: () => <FontAwesome5 name="list-alt" size={20} color="#2A9D8F" />
            }}
        />

    </Tab.Navigator>
);


export default function Nav() {
    const dispatch = useDispatch()
  
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
                <Stack.Screen options={{ headerTitle: "" }} name="App" component={TabNavigator}
                    options={{
                        headerTitle: () => <Text></Text>,
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => dispatch(setModalVisible(true))}>
                                <Feather name="help-circle" size={30} color="#ffffff" />
                            </TouchableOpacity>
                        ),
                    }}
                />
                <Stack.Screen options={{ headerTitle: "" }} name="Item" component={Item} />

            </Stack.Navigator>
           
        </NavigationContainer>
    );
}