import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class MineComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>我是个人中心</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    }
});