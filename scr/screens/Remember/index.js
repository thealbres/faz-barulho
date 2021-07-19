import React, { useEffect, useState } from 'react';
import * as SQLite from "expo-sqlite";
import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    Card,
    ButtonForward,
    NothingToShow,
    Title,
    Row,
    ScrollView
} from './styles'

const Remember = ({ navigation }) => {
    const db = SQLite.openDatabase("db.db");
    const [itens, setItens] = useState(null);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            db.transaction(
                (tx) => {
                    tx.executeSql("select * from items", [], (_, { rows }) =>
                        setItens(rows._array)
                    );
                },
                null,
            );
        });
        return unsubscribe;
    }, [navigation]);

    const deleteItem = (id) => {
        db.transaction(
            (tx) => {
                tx.executeSql(`delete from items where id = ?;`, [id]);
            },
            null,
        )
        db.transaction(
            (tx) => {
                tx.executeSql("select * from items", [], (_, { rows }) =>
                    setItens(rows._array)
                );
            },
            null,
        );
    }
    return (
        <Container>
            <ScrollView>
                {itens != null && itens.length != 0 ? itens.map((item, key) =>
                    <Card key={key}>
                        <Row color={"#ffffff"}>
                            <Title>Nome</Title>
                            <Title>{item.name}</Title>
                        </Row>
                        <Row color={"#ffffff"}>
                            <Title>dBFS</Title>
                            <Title>{item.loudness}</Title>
                        </Row>
                        <Row color={item.color}>
                            <ButtonForward color={item.color} onPress={() => deleteItem(item.id)}>
                                <AntDesign name="close" size={24} color="#ffffff" />
                            </ButtonForward>
                        </Row>
                    </Card>
                )
                    : <NothingToShow>Nenhum item pra se lembrar </NothingToShow>}
            </ScrollView>
        </Container>
    );
}
export default Remember;