import React, {useState } from 'react';
import { Audio } from 'expo-av';
import { Container, ButtonForward, ButtonText, Title, Row, TitleBackground } from './styles'
import { Foundation, FontAwesome5, AntDesign } from '@expo/vector-icons';
import appColors from '../../styles/colors';

const Discover = ({ navigation }) => {
    const [recording, setRecording] = useState('');
    const [loudness, setLoudness] = useState('');
    const [soundLevel, setSoundLevel] = useState('Aperte o Play!');
    const [RecoredUri, SetRecordedURI] = useState('');
    const [color, setColor] = useState('#e9c46a');
    const [buttonColor, setButtonColor] = useState(appColors.lightOrange);
    const [disable, setDisable] = useState(true);


    const addNewSound = async () => {
        let convertLoudness = Math.abs(loudness).toString()
        navigation.navigate('Item', {
            loudness: convertLoudness,
            soundLevel: soundLevel,
            color:color, 
        });
    }
    async function startRecording() {

        try {
            setSoundLevel('Escutando...')
            setColor('#e9c46a')
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording);
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        const response = await recording.getStatusAsync();
        setLoudness(response.metering)
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        SetRecordedURI(uri)

        setDisable(false)
        setButtonColor(appColors.orange)
        let convertLoudness = Math.abs(loudness)
        if (convertLoudness <= 10) {
            setSoundLevel("Faz barulho!")
            setColor('#E76F51')
        } else {
            setSoundLevel("Não faz barulho!")
            setColor('#2A9D8F')
        }
    }

    return (
        <Container>
            <TitleBackground color={color}>
                <Title>{soundLevel}</Title>
            </TitleBackground>
            <Row color={appColors.white}>
                
                <ButtonForward disabled={disable} color={buttonColor} onPress={() => addNewSound()}   >
                    <ButtonText color={'#F5F5F5'}>
                        <Foundation name="page-add" size={40} color={appColors.white} />
                    </ButtonText>
                </ButtonForward>
                <ButtonForward  color={appColors.orange} onPress={recording ? stopRecording : startRecording} >
                    <ButtonText color={'#F5F5F5'}>
                        {recording ? <FontAwesome5 name="stop-circle" size={40} color={appColors.white} /> : <AntDesign name="playcircleo" size={40} color={appColors.white} />}
                    </ButtonText>
                </ButtonForward>
            </Row>

        </Container>
    );
}
export default Discover;