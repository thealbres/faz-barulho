import React from 'react';
import data from './data'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { setModalVisible } from '../../features/modal/modalSlice'

import {
    Container,
    Modal,
    Title,
    Content,
    FlatList,
    Info,
    InfoContent,
    Image,
    Text,
    CloseModal,
    CloseModalButton,
    ButtonText
} from './styles'

const ModalItem = () => {
    const visible = useSelector(state => state.modal.value)
    const dispatch = useDispatch()
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <Container>
                <Content>
                    <FlatList
                        horizontal={true}
                        data={data}
                        renderItem={({ item, index, separators }) => (
                            <Info>
                                <InfoContent>
                                    <Title>{item.title}</Title>
                                    <Text>{item.text}</Text>
                                    {item.path != null ?
                                        <Image source={`${item.path}`} />
                                        :
                                        <Title></Title>
                                    }
                                    {item.key == '8' ?
                                        <CloseModal>
                                            <CloseModalButton onPress={() => dispatch(setModalVisible(false))}>
                                                <ButtonText>Continuar</ButtonText>
                                            </CloseModalButton>
                                        </CloseModal>

                                        : null
                                    }
                                </InfoContent>
                            </Info>
                        )}
                    />
                </Content>
            </Container>

        </Modal>

    );
}
export default ModalItem;