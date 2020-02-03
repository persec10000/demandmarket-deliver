import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';

const finalNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        AppNavigator: AppNavigator,
    },
    {
        initialRouteName: 'Splash',
    }
);


const AppContainer = createAppContainer(finalNavigator);


const App: () => React$Node = () => {
    return (
        <AppContainer/>
    );
};

export default App;
