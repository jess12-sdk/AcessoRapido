import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Give from '../pages/Give';
import Success from '../pages/Success';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Search" component={Search} />
                <Screen name="Profile" component={Profile} />
                <Screen name="Give" component={Give} />
                <Screen name="Success" component={Success} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;