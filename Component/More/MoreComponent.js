import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class MoreComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>更多</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    }
});