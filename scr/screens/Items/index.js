import React, { useState } from 'react';
import { Container, Title, TextInput, ButtonForward, ButtonText, Row } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";

const Item = ({ route, navigation }) => {
    const { loudness, soundLevel, color } = route.params;
    const [name, setName] = useState('');

    const saveItem = async () => {
        if (name == "") {
            showMessage({
                message: "Por favor, escolha o nome",
                type: "danger",
            })
        } else {
            let item = {
                name: name,
                loudness: loudness,
                soundLevel: soundLevel,
                color: color,
            }
            try {
                const itens = await AsyncStorage.getItem('@itens')
                if (itens == null) {
                    const itens = []
                    itens.push(item)

                    var itensConverted = JSON.stringify(itens);
                    await AsyncStorage.setItem('@itens', itensConverted)
                    navigation.navigate('Remember');
                } else {
                    var itensParsed = JSON.parse(itens);
                    itensParsed.push(item)
                    var itensConverted = JSON.stringify(itensParsed);
                    await AsyncStorage.setItem('@itens', itensConverted)
                    navigation.navigate('Remember');

                }
            } catch (e) {
                console.log("ERRO", e)
            }
        }
    }
    return (
        <Container>
            <Title>Nome</Title>
            <TextInput onChangeText={setName} placeholder="Escolha o nome" />
            <Title>Volume</Title>
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
