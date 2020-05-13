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

export default CreateBoat = () => {
  return (
    <>
      <SafeAreaView>
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
            Create boat
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
                backgroundColor: '#fff',
              }}>
              <View style={styles.fullView}>
                <Text style={styles.label}>Ship name</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.fullView}>
                <Text style={styles.label}>Ship type</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.fullView}>
                <Text style={styles.label}>Owner</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.fullView}>
                <Text style={styles.label}>MMSI</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>IMO</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Vessel type</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Year built</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Status</Text>
                {/* <Picker style={styles.input}>
                  <Picker.Item label="Active" value="java" />
                  <Picker.Item label="Inactive" value="js" />
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
              <View style={styles.halfView}>
                <Text style={styles.label}>Call sign</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Width</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Height</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Flag</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Gross tonnage</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.halfView}>
                <Text style={styles.label}>Dead weight</Text>
                <TextInput style={styles.input} />
              </View>

              <View style={styles.fullView}>
                <Text style={styles.label}>Destination</Text>
                <TextInput style={styles.input} />
              </View>
              <View style={styles.fullView}>
                <Text style={styles.label}>Curent port</Text>
                <TextInput style={styles.input} />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 100,
                  paddingTop: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                  textAlign: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    height: 50,
                    marginTop: 10,
                    borderRadius: 4,
                    backgroundColor: '#2f95dc',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18, color: '#fff'}}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
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
