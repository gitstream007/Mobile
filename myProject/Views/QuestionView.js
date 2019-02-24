import React, { Component } from 'react';
import { View, Button, Image, StyleSheet, FlatList, Text } from 'react-native';
import APIService from "../API/APIService";

export default class QuestionsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentWillMount(): void {
        APIService.FetchFunction()
            .then(response => {
                console.log('response0' +response);
                this.setState({
                    isLoading: false,
                    data: response.data});
                return Promise.resolve()
            })
            .catch(error => console.log(error));
        console.log('questionLabel 1:'+this.state.data.questionLabel);
    }

    render() {
        console.log("enters the QuestionsView render ");
        console.log("step QuestionsView render :" +this.state.data);

        return (
            <View  style={styles.base}>
                {this.state.data &&
            <FlatList
                data = { this.state.data}
                renderItem = {({item}) =>
                <Text> { item.questionLabel } </Text>
            }
                />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: 10,
        padding: 10,
        textAlign: 'center',
    }
});


{/*
<Image source = {require('./assets/cheval.png')}  style = {{ width: 200, height: 200 }} />
*/}
