import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,// 判断当前运行的系统
} from 'react-native';

/**
 *  导入第三方组件
 *  1，tabBar---- 命令行：'npm install react-native-tab-navigator --save'
 */
import TabNavigator from 'react-native-tab-navigator';

/**
 * 导入根组件
 */
import Home from '../Home/HomeComponent'
import Shop from '../Shop/ShopComponent'
import More from '../More/MoreComponent'
import Mine from '../Mine/MineComponent'



// iOS思路： tabBar ->  navigation -> contorller
// rn思路： navigator -> tabBar -> component (tabBar当做普通组件)
export default class MainComponent extends Component{
    // 状态机，记录选中的组件
    constructor(props){
        super(props);
        this.state={
            selectTab:'home'
        }
    }
    render(){
        return(
            <TabNavigator>
                {/*首页*/}
                {this._renderTabBarItem('首页','home','icon_tabbar_homepage','icon_tabbar_homepage_selected')}
                {/*商家*/}
                {this._renderTabBarItem('商家','shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected')}
                {/*我的*/}
                {this._renderTabBarItem('我的','mine','icon_tabbar_mine','icon_tabbar_mine_selected')}
                {/*更多*/}
                {this._renderTabBarItem('更多','more','icon_tabbar_misc','icon_tabbar_misc_selected')}
            </TabNavigator>
        );
    }

    // 抽出创建TabNavigator方法
    _renderTabBarItem(itemTitle,selectTabName,normalName,selectedName){
        return(
            <TabNavigator.Item
                title={itemTitle}
                selectedTitleStyle={styles.selectedTitleStyle}
                selected={this.state.selectTab=== selectTabName}
                renderIcon={()=><Image source={{uri:normalName}} style={styles.iconStyle}/>}
                renderSelectedIcon={()=><Image source={{url:selectedName}} style={styles.iconStyle}/>}
                onPress={()=>{
                    this.setState({
                        selectTab:selectTabName
                    })
                }}
            >
                {this._renderComponent(selectTabName)}
            </TabNavigator.Item>
        );
    }
    _renderComponent(index){
        if (index==='home'){
            return(<Home navigator={this.props.navigator}/>);
        } else if (index === 'shop'){
            return(<Shop navigator={this.props.navigator}/>);
        } else if (index === 'mine'){
            return(<Mine navigator={this.props.navigator}/>);
        } else {
            return(<More navigator={this.props.navigator}/>);
        }
    }
}
const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios'? 25:20,
        height:Platform.OS === 'ios'? 25:20,
    },
    selectedTitleStyle:{
        color:'orange'
    }
});