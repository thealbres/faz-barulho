import styled from 'styled-components/native';
import appColors from '../../styles/colors'


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
`;
export const Content = styled.View`
    height: 60%;
    width: 80%;
    border-radius: 10px;
    align-items: center;
    background-color: transparent;
`;
export const CloseModal = styled.View`
background-color: transparent;
width: 100%;

`
export const CloseModalButton = styled.TouchableOpacity`
  background-color: ${appColors.orange};
  width: 100%;
  height: 40px;
  border-radius: 20px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  box-shadow: 10px 15px;
  shadow-opacity: 1;
  elevation: 10;
`;
export const ButtonText = styled.Text`
  color:${appColors.white};
  font-size: 18px;
  text-align: center;

`;

export const Info = styled.View`
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    width: 250px;
    align-items: center;
    background-color: #E3EEF2;
`;
export const InfoContent = styled.View`
    border-radius: 10px;
    width: 220px;
    height: 100%;
    align-items: center;
    background-color: #CEF2EF;

`;
export const Title = styled.Text`
  color:${appColors.darkGreen};
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;
export const Text = styled.Text`
  color:${appColors.darkOrange};
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;

`;

export const Image = styled.Image`
  width: 150px;
  height: 250px;
`
export const Modal = styled.Modal`
`;

export const FlatList = styled.FlatList`
`