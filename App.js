import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import Nav from './scr/navigation/index'
import { StyleSheet, Text, View } from 'react-native';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <>
      <Nav />
      <FlashMessage position="bottom" />
    </>
  );
}
