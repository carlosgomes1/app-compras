import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: #fff;
    padding-top: ${Constants.statusBarHeight};
`;

export const List = styled.ScrollView`
    padding: 4%;
`;

export const ListItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;

    padding: 8px;
    border-radius: 12px;

    margin-bottom: 10px;

    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;

export const ListItemMain = styled.TouchableOpacity`
    flex: 1;
`;

export const ListItemTitle = styled.Text`
    font-size: 20px;
    font-weight: 500;
`;

export const ListItemIcons = styled.View`
    margin-left: 10px;
`;

export const CreateNewListButton = styled.TouchableOpacity`
    margin-right: auto;
    margin-left: auto;
    margin-bottom: ${Constants.statusBarHeight};
    margin-top: ${Constants.statusBarHeight};

    background-color: #2baaff;

    justify-content: space-around;
    align-items: center;
    width: 75%;
    padding: 8px;

    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

    border-radius: 16px;

    flex-direction: row;
`;

export const TextButton = styled.Text`
    font-size: 24px;
    font-weight: bold;

    color: #fff;
`;
