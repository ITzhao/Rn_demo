import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class TextComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>跳转测试</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    }
});