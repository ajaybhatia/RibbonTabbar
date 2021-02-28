import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {t} from 'react-native-tailwindcss';

import Home from './screens/Home';
import Camera from './screens/Camera';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

import Tab from './components/Tab';

const {Navigator, Screen} = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            ...t.h15,
          },
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <Tab label="home" {...props} />,
          }}
        />
        <Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarButton: (props) => <Tab label="camera" {...props} />,
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarButton: (props) => <Tab label="profile" {...props} />,
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarButton: (props) => <Tab label="settings" {...props} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
