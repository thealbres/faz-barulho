import styled from 'styled-components/native';
import appColors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${appColors.white};
  justify-content: flex-start;
`;
export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: 100px;
  justify-content: center;
  background-color: ${props => props.color};
`
export const Title = styled.Text`
  color:${appColors.darkOrange};
  text-align: left;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: appColors.lightGreen
})`
  background-color: #EFFBF9;
  width: 90%;
  height: 50px;
  font-size: 20px;
  elevation: 3;
  align-self: center;
  padding-left: 20px;
  border-radius: 15px;
  margin-bottom: 15px;
`

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
  background-color: ${appColors.orange};
  width: 100px;
  height: 100px;
  border-radius: 50px;
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
