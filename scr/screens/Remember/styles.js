import styled from 'styled-components/native';
import appColors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;

`;
export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export const NothingToShow = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  padding-top: 50%;
`;
export const Row = styled.View`
  width: 100%;
  flex:1;
  justify-content: center;
  background-color: transparent;
`
export const Card = styled.View`
  background-color: #EFFBF9;
  height: 80px;
  align-self: center;
  flex-direction: row;
  border-radius: 30px;
  width: 90%;
  elevation: 2;
  margin-top: 15px
`
export const ButtonForward = styled.TouchableOpacity`
  background-color: ${props => props.color};
  width: 70px;
  height: 70px;
  border-radius: 70px;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  shadow-color: #000;
  box-shadow: 10px 15px;
  shadow-opacity: 1;
  elevation: 10;
`

export const ButtonText = styled.Text`
    color: ${props => props.color};
    font-size: 20px;
`
export const ButtonExclude = styled.TouchableOpacity`
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
export const ButtonTextExclude = styled.Text`
  color: ${props => props.color};
  font-size: 25px;
`;

export const RowExclude = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0px;
  background-color: transparent;
`
export const ScrollView = styled.ScrollView`
  flex-direction: column;
  width: 100%;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
`