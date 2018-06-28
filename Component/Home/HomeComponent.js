import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class HomeComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>我是主页</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'cyan',
        justifyContent:'center',
        alignItems:'center'
    }
});