import React from 'react';
import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text, Dimensions } from 'react-native';
import Header from '../components/loginHeader'
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import useEffect from 'react';

const Languages = [
    {
        id: 1,
        name: 'Hindi',
    },
    {
        id: 2,
        name: 'English',
    },
    {
        id: 3,
        name: 'Spanish',
    },
    {
        id: 4,
        name: 'Bengali',
    },
    {
        id: 5,
        name: 'Russian',
    },
    {
        id: 6,
        name: 'Japanese',
    },
    {
        id: 7,
        name: 'French',
    },
    {
        id: 8,
        name: 'Italian',
    },
    {
        id: 9,
        name: 'Indonesian',
    },
    {
        id: 10,
        name: 'Dutch',
    }
];

const numColumns = 3;

const formatData = (Languages, numColumns) => {
    const numberOfFullRows = Math.floor(Languages.length / numColumns);

    let numberOfElementsLastRow = Languages.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        Languages.push({ id: `blank-${numberOfElementsLastRow}`, name: true });
        numberOfElementsLastRow++;
    }
    return Languages;
};
console.log((formatData(Languages, numColumns)))




export default function App() {

    const getItem = (name) => {
        Alert.alert(name);
    }



    const ItemRender = ({ name }) => (
        <View style={name === true ? [styleSheet.item, styleSheet.itemInvisible] : styleSheet.item}>
            <Text
                style={styleSheet.itemText}
                // style={name===true ? [styleSheet.item, styleSheet.itemInvisible] : styleSheet.itemText}
                onPress={() => getItem(name)}>{name}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styleSheet.container}>
            <Header>Personal Habit</Header>
            <FlatList
                data={formatData(Languages, numColumns)}
                renderItem={({ item }) => <ItemRender name={item.name} />}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                nestedScrollEnabled
                style={styleSheet.container}
            />
        </SafeAreaView>
    );
}

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    item: {
        backgroundColor: '#E8E8F7',
        BorderColor: '#E8E8F7',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / numColumns, // approximate a square
        borderRadius: 50,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
        BorderColor: '#E8E8F7',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 50,

    },
    itemText: {
        color: '#4E53BA',
    },
});