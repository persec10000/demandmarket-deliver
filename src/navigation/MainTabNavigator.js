import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import ListScreen from '../screens/ListScreen';
import {createStackNavigator} from 'react-navigation-stack';
import CommentsScreen from '../screens/CommentsScreen';
import globalStyles from '../styles/global';
import AddScreen from '../screens/AddScreen';
import CodeScreen from '../screens/CodeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProductReviewScreen from '../screens/ProductReviewScreen';
import HelpScreen from '../screens/HelpScreen';
import MapScreen from '../screens/MapScreen';
import NearbyBusinessesScreen from '../screens/NearbyBusinessesScreen';
import ScanBarcodeScreen from '../screens/ScanBarcodeScreen';
import ImprovementScreen from '../screens/ImprovementScreen';

const TabBarIcon = props => <Icon
    name={props.name}
    size={26}
    style={{ marginBottom: -3 }}
/>;

const TabBarCenterIcon = props =>
    <LinearGradient
        colors={['#FCCC0B', '#DD2564']}
        locations={[0, 1]}
        useAngle={true}
        angle={203.07}
        angleCenter={{ x: 0.5, y: 0.5}}
        style={{ borderRadius: 20, height: 40, width: 40}}
    >
        <Icon
            name={props.name}
            size={26}
            style={{ textAlign: 'center', color: 'white', lineHeight: 40 }}
        />
    </LinearGradient>

const HomeStack = createStackNavigator({
        Home: {
            screen: HomeScreen,
        },
        Leaderboard: {
            screen: LeaderboardScreen,
        },
        Map: {
            screen: MapScreen
        },
        NearbyBusinesses: {
            screen: NearbyBusinessesScreen
        },
        Profile: {
            screen: ProfileScreen
        },
        Improvement: {
            screen: ImprovementScreen
        }
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
);

const AddStack = createStackNavigator({
        Add: {
            screen: AddScreen,
        },
        Code: {
            screen: CodeScreen,
        },
        ScanBarcode: {
            screen: ScanBarcodeScreen,
        },
        Review: {
            screen: ProductReviewScreen,
        }
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
);

const SearchStack = createStackNavigator({
        Search: {
            screen: SearchScreen,
        },
        ScanBarcode: {
            screen: ScanBarcodeScreen,
        },
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
);

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === 'ios' ? 'ios-home': 'md-home'}
                    />
                ),
            }
        },
        Search: {
            screen: SearchStack,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === 'ios' ? 'ios-search': 'md-search'}
                    />
                ),
            }
        },
        Add: {
            screen: AddStack,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarCenterIcon
                        focused={focused}
                        name={Platform.OS === 'ios' ? 'ios-add': 'md-add'}
                    />
                ),
            }
        },
        List: {
            screen: ListScreen,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === 'ios' ? 'ios-cart': 'md-cart'}
                    />
                ),
            }
        },
        Leaderboard: {
            screen: LeaderboardScreen,
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === 'ios' ? 'ios-person': 'md-person'}
                    />
                ),
            }
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#eb6e3d',
            showLabel: false,
            style: {...globalStyles.dropShadow, borderRadius: 20}
        }
    }
);

export default AppTabNavigator;
