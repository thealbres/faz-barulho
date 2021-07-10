import styled from 'styled-components/native';
import appColors from '../../styles/colors'
export const Container = styled.View`
    flex: 1;
    background-color: ${appColors.lightGreen};
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    color: ${appColors.white};
    text-align: center;
    font-size: 40px;
    padding-bottom: 30%;
`;
export const ButtonForward = styled.TouchableOpacity`
    background-color: ${appColors.darkGreen};
    width: 90%;
    height: 8%;
    position: absolute;
    top: 70%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;
export const ButtonText = styled.Text`
    color: ${props => props.color};
    font-size: 20px;
`;




