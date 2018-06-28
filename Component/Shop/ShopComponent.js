import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class ShopComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>商城</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    }
});