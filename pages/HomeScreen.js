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

export default (HomeScreen = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [activeBoat, setActiveBoat] = React.useState(null);
  const [etaTypes, setEtaTypes] = React.useState([
    '1 hour',
    '2 hours',
    '3 hours',
    'Other',
  ]);
  const [otherEta, setOtherEta] = React.useState(false);
  const [eta, setEta] = React.useState(null);

  const setVal = val => {
    console.log(val);
    setActiveBoat(val);
  };
  const setEtaVal = val => {
    if (val === 'Other') {
      setOtherEta(true);
    } else {
      setEta(val);
      setOtherEta(false);
    }
  };
  return (
    <>
      <SafeAreaView>
        {/* <StatusBar barStyle="dark-content" /> */}
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            color: '#ffffff',
            backgroundColor: '#2f95dc',
            display: 'flex',
            justifyContent: 'center',
            //   alignItems: 'center',
          }}>
          <Text style={{color: '#ffffff', fontSize: 20, marginLeft: 15}}>
            Start sailing
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#fff',
            padding: 12,
          }}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 40,
                marginTop: 12,
              }}>
              <View style={styles.fullView}>
                <Text
                  style={styles.label}
                  onPress={() => console.log('alalal')}>
                  Select boat
                </Text>
                <RNPickerSelect
                  style={{
                    inputIOS: {
                      width: '100%',
                      height: 50,
                      backgroundColor: '#eee',
                      paddingLeft: 12,
                      marginBottom: 10,
                      color: '#000',
                    },
                    inputAndroid: {
                      width: '100%',
                      height: 50,
                      backgroundColor: '#eee',
                      paddingLeft: 12,
                      marginBottom: 10,
                      color: '#000',
                    },
                  }}
                  onValueChange={value => console.log(value)}
                  items={[
                    {label: 'Boat 1', value: 'Boat 1'},
                    {label: 'Boat 2', value: 'Boat 2'},
                    {label: 'Boat 3', value: 'Boat 3'},
                  ]}
                />
              </View>
              <View style={styles.fullView}>
                <Text style={styles.label}>Destination</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.fullView}>
                <Text style={styles.label}>ETA</Text>
                {/* <Picker
                    style={styles.input}
                    selectedValue={eta}
                    onValueChange={(itemValue, itemIndex) =>
                      setEtaVal(itemValue)
                    }>
                    {etaTypes.map(val => (
                      <Picker.Item key="val" label={val} value={val} />
                    ))}
                  </Picker> */}
                <RNPickerSelect
                  style={{
                    inputIOS: {
                      width: '100%',
                      height: 50,
                      backgroundColor: '#eee',
                      paddingLeft: 12,
                      marginBottom: 10,
                      color: '#000',
                    },
                    inputAndroid: {
                      width: '100%',
                      height: 50,
                      backgroundColor: '#eee',
                      paddingLeft: 12,
                      marginBottom: 10,
                      color: '#000',
                    },
                  }}
                  onValueChange={value => setEtaVal(value)}
                  items={[
                    {label: '1 hour', value: '1 hour'},
                    {label: '2 hours', value: '2 hours'},
                    {label: '3 hours', value: '3 hours'},
                    {label: 'Others', value: 'Other'},
                  ]}
                />
              </View>
              {otherEta && (
                <View style={styles.fullView}>
                  <Text style={styles.label}>Enter ETA value</Text>
                  <TextInput style={styles.input} />
                </View>
              )}
              <View style={styles.fullView}>
                <Text style={styles.label}>Boat status</Text>
                {/* <Picker style={styles.input}>
                    <Picker.Item label="" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker> */}
                <RNPickerSelect
                  style={{
                    inputIOS: {
                      width: '100%',
                      height: 50,
                      backgroundColor: '#eee',
                      paddingLeft: 12,
                      marginBottom: 10,
                    },
                    inputAndroid: {
                      width: '100%',
                      height: 50,
                      backgroundColor: '#eee',
                      paddingLeft: 12,
                      marginBottom: 10,
                    },
                  }}
                  onValueChange={value => console.log(value)}
                  items={[
                    {label: 'Active', value: 'Active'},
                    {label: 'Inactive', value: 'Inactive'},
                  ]}
                />
              </View>
              <View style={styles.fullView}>
                <Text style={styles.label}>Draught</Text>
                <TextInput style={styles.input} keyboardType="numeric" />
              </View>
              <View style={styles.fullView}>
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: '100%',
                    marginTop: 10,
                    backgroundColor: '#2f95dc',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                  }}>
                  <Text style={{fontSize: 18, color: '#fff'}}>
                    Start sailing
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    alignContent: 'flex-start',
  },
  header: {
    backgroundColor: '#2f95dc',
    color: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
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
