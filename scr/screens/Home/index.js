import React, { useRef, useEffect } from 'react';
import logo from '../../../assets/faz-barulho.png'
import { Animated } from 'react-native'

import {
    Container,
    ButtonForward,
    ButtonText
} from './styles'

const Home = ({ navigation }) => {
    const anim = useRef(new Animated.Value(1));
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(anim.current, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(anim.current, {
                    toValue: 1.1,
                    duration: 1000,
                    useNativeDriver: true
                }),
            ])
        ).start();


    }, []);

    return (
        <Container>
            <Animated.Image source={logo} style={{ transform: [{ scale: anim.current }], height: '50%', width: '100%', position: 'absolute', top: '15%' }} />
            <ButtonForward onPress={() => navigation.navigate('App')}>
                <ButtonText color={'#F5F5F5'}>Continuar</ButtonText>
            </ButtonForward>
        </Container>
    );
}
export default Home;