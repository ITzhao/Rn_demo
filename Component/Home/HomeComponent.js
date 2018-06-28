import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import TextComponent from './TextComponent'

export default class HomeComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>{this._pushToDetail()}}
                >
                    <Text style={styles.textStyle}>我是主页</Text>
                </TouchableOpacity>
            </View>
        );
    }
    // 跳转，获取导航
    _pushToDetail(){
        this.props.navigator.push({
            component: TextComponent, // 目标组件
            title:'测试'// 标题
        })
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'cyan',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'brown',
        height:20,
        width:100,
        textAlign:'center'
    }
});