import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab:{ screen: HomeTab },
    Search:{ screen: SearchTab },
    AddMedia:{ screen: AddMediaTab },
    Likes:{ screen: LikesTab },
    Profile:{ screen: ProfileTab }
},  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                ios:{
                    backgroundColor:'white',
                }
            })
        },
        iconStyle: { height: 100 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    // navigationOptions 코드 추가
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    };

    render() {
        return <AppTabContainet/>; // AppTabContainet 컴포넌트를 리턴한다.
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
