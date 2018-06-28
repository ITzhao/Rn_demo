import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

/**
 *  navigator ---命令行：'npm  install   react-native-deprecated-custom-components  --save'
 */
import {Navigator} from "react-native-deprecated-custom-components";
import TabBar from './MainComponent'

export default class NavigatorComponent extends Component{
    render(){
        return(
            //有导航功能，没有类似iOS的导航条,二级界面隐藏 tabBar
            <Navigator
                style={styles.container}
                initialRoute = {{ name: 'TabBar', component: TabBar }}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
});