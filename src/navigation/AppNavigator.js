import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppTabNavigator from './MainTabNavigator';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator({
        Login: LoginScreen,
        Register: RegisterScreen,
    },
{
    defaultNavigationOptions: {
        header: null
    },
});

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: AppTabNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
