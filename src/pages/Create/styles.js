import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
    padding-top: ${Constants.statusBarHeight};
`;

export const IconView = styled.TouchableOpacity`
    padding: 10px;
    background-color: tomato;
`;

export const TitleInput = styled.View``;
