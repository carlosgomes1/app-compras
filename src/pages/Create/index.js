import React from 'react';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, IconView, TitleInput } from './styles';

export default function Create({ navigation }) {
    return (
        <Container>
            <IconView onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} />
            </IconView>

            <TitleInput>
                <TextInput />
            </TitleInput>
        </Container>
    );
}
