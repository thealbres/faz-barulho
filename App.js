import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import Nav from './scr/navigation/Stack/index'
import FlashMessage from "react-native-flash-message";
import store from './scr/store'
import ModalItem from './scr/components/InfoModal'
import { database } from './scr/database'
export default function App() {
  useEffect(() => {
    const db = database.setupDatabase()

  }, [])
  return (
    <Provider store={store}>
      <Nav />
      <FlashMessage position="bottom" />
      <ModalItem>
      </ModalItem>
    </Provider>
  );
}
