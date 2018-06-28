import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

/**
 *  导入第三方组件
 *  1，tabBar---- 命令行：'npm install react-native-tab-navigator --save'
 *  2, navigator ---命令行：'npm  install   react-native-deprecated-custom-components  --save'
 */
import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from "react-native-deprecated-custom-components";

/**
 * 导入根组件
 */
import Home from '../Home/HomeComponent'
import Shop from '../Shop/ShopComponent'
import More from '../More/MoreComponent'
import Mine from '../Mine/MineComponent'


export default class MainComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>测试数据</Text>
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