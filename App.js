/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import HomeScreen from './pages/HomeScreen';
import CreateBoat from './pages/CreateBoat';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#000"
        inactiveColor="#eee"
        barStyle={{backgroundColor: '#fff'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: <Text style={{fontSize: 17}}>Home</Text>,
          }}
        />
        <Tab.Screen
          name="Create Boat"
          component={CreateBoat}
          options={{
            tabBarLabel: <Text style={{fontSize: 17}}>Create boat</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    alignContent: 'flex-start',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flex: 1,
    // alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  fullView: {
    width: '100%',
    height: 100,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#eee',
    paddingLeft: 12,
    marginBottom: 10,
  },
  half: {
    width: '50%',
  },
  label: {
    fontSize: 20,
    color: '#545454',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 0,
  },
  fullView: {
    width: '100%',
    height: 100,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  halfView: {
    width: '50%',
    height: 100,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default App;

// react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/sr
// c/main/res
