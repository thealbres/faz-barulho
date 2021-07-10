import styled from 'styled-components/native';
import appColors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${appColors.white};
  align-items: center;
  align-content:center;
  justify-content: center;
`;
export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  bottom: 40px;
  background-color: ${props => props.color};
`

export const Title = styled.Text`
  color:${appColors.white};
  text-shadow: 0 0 5px ${appColors.darkGreen};
  font-size: 25px;
`;

export const TitleBackground = styled.View`
  background-color: ${props => props.color};
  width: 200px;
  height: 200px;
  margin-bottom: 80px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  box-shadow: 10px 15px;
  shadow-opacity: 1;
  elevation: 10;
`
export const ButtonForward = styled.TouchableOpacity`
  background-color: ${props => props.color};
  width: 90px;
  height: 90px;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  box-shadow: 10px 15px;
  shadow-opacity: 1;
  elevation: 10;
`;
export const ButtonText = styled.Text`
  color: ${props => props.color};
  font-size: 25px;
`;
