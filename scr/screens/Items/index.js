import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";
import * as SQLite from "expo-sqlite";

import {
    Container,
    Title,
    TextInput,
    ButtonForward,
    ButtonText,
    Row
} from './styles'



const Item = ({ route, navigation }) => {
    const db = SQLite.openDatabase("db.db");

    const { loudness, soundLevel, color } = route.params;
    const [name, setName] = useState('');

    const saveItem = async () => {
        if (name == "") {
            showMessage({
                message: "Por favor, escolha o nome",
                type: "danger",
            })
        } else {
            try {
                db.transaction(
                    (tx) => {
                        tx.executeSql("insert into items (name, loudness, soundLevel, color) values (?, ?, ?, ?)", [name, loudness, soundLevel, color]);
                    },
                    null,
                );
                navigation.navigate('Lembrar');

            } catch (e) {
                console.log("ERRO", e)
            }
        }
    }
    return (
        <Container>
            <Title>Nome</Title>
            <TextInput onChangeText={setName} placeholder="Escolha o nome" />
            <Title>dBFS</Title>
            <TextInput editable={false} value={loudness} placeholder="80" />
            <Title>Classificação </Title>
            <TextInput editable={false} value={soundLevel} placeholder="Não faz barulho!" />

            <Row color={'#F5F5F5'}>
                <ButtonForward onPress={() => saveItem()}>
                    <ButtonText color={'#F5F5F5'}>
                        Salvar
                </ButtonText>
                </ButtonForward>
            </Row>
        </Container>
    );
}
export default Item;
