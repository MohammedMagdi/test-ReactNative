import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center'
    },
    toolbar: {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: 'silver',
    },
});

export default class CounterComponent extends Component {
    render() {
        return (
            <View>
                <ToolbarAndroid style={styles.toolbar}
                    title="Counter Demo" />
                <Text>Counter Component</Text>
            </View>
        );
    }
}