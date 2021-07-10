import React, { useEffect, useState } from 'react';
import { Container, Card, ButtonForward, NothingToShow, Title, Row, ScrollView } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

const Remember = ({ navigation }) => {
    const [itens, setItens] = useState(null);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            async function getItens() {
                const itens = await AsyncStorage.getItem('@itens')
                const itensParsed = JSON.parse(itens);
                setItens(itensParsed)
            }
            getItens();
        });
        return unsubscribe;
    }, [navigation]);

    const clearHistory = async () => {
        await AsyncStorage.clear()
        setItens(null)
    }
    return (
        <Container>
            <ScrollView>
                {itens != undefined || itens != null ? itens.map((item, key) =>
                    <Card key={key}>
                        <Row color={"#F5F5F5"}>
                            <Title>Nome</Title>
                            <Title>{item.name}</Title>
                        </Row>
                        <Row color={"#F5F5F5"}>
                            <Title>Volume</Title>
                            <Title>{item.loudness}</Title>
                        </Row>
                        <Row color={item.color}>
                            <ButtonForward color={item.color} >
                              
                            </ButtonForward>
                        </Row>
                    </Card>
                )
                    : <NothingToShow>Nenhum item pra se lembrar </NothingToShow>}
            </ScrollView>
{/* 
            <RowExclude>
                <ButtonExclude onPress={() => clearHistory()}>
                    <ButtonTextExclude color={'#ffffff'}>
                        Limpar
                </ButtonTextExclude>
                </ButtonExclude>
            </RowExclude> */}

        </Container>
    );
}
export default Remember;