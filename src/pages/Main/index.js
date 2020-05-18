import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,
    List,
    ListItem,
    ListItemMain,
    ListItemTitle,
    ListItemIcons,
    CreateNewListButton,
    TextButton,
} from './styles';

export default function Main({ navigation }) {
    return (
        <Container>
            <List>
                <ListItem>
                    <ListItemMain>
                        <ListItemTitle>Compras 15/04 PRIMOS</ListItemTitle>
                    </ListItemMain>

                    <ListItemIcons>
                        <TouchableOpacity>
                            <Icon name="trash" size={30} />
                        </TouchableOpacity>
                    </ListItemIcons>
                </ListItem>
            </List>
            <CreateNewListButton onPress={() => navigation.navigate('Create')}>
                <TextButton>Criar nova lista</TextButton>
                <Icon name="arrow-right" size={24} color="#fff" />
            </CreateNewListButton>
        </Container>
    );
}
