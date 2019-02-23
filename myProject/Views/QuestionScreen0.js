import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity,  TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import {FlatGrid} from "react-native-super-grid";
import ConstantsColorsCodes from "../ConstantsColorsCodes";

// TODO la couleur doit changer et rester changée à l'appui d'un bouton réponse

const triangle = '';
const diamondSquare = '';
const cercle = '';
const square = '';


export default class QuestionScreen0 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueToSave: '',
        }
    }
    render() {
        const items = [
            { name: 'triangle', code: ConstantsColorsCodes.INCORRECT_RED }, { name: 'diamond', code: ConstantsColorsCodes.MY_BLUE },
            { name: 'cercle', code: ConstantsColorsCodes.MY_ORANGE }, { name: 'square', code: ConstantsColorsCodes.CORRECT_GREEN },
        ];
        console.log("passé "+this.state.valueToSave);

        return (
            <FlatGrid
                itemDimension={130}
                items={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => this.setState({valueToSave: item.name})}>
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    }
    /*
        changeColor() {
            //this.setState({code: '#ddd'});
            console.log("passé "+this.state.item);
        }*/
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: '70%',// pour laisser la place à la question
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});