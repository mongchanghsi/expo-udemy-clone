import * as React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import AccountTab from '../components/AccountTab';
import {
  videoPreferenceOptions,
  accountSettingsOptions,
  supportOptions,
} from '../utils/data/accountdata';

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <EvilIcons
          name='user'
          size={200}
          color='white'
          style={{ marginVertical: 15 }}
        />
        <Text style={styles.nameStyle}>Eric Mong</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}
        >
          <AntDesign name='google' size={24} color='white' />
          <Text style={styles.emailStyle}>example@gmail.com</Text>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonStyle}>Become an instructor</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text style={styles.smallTextStyle}>Video preferences</Text>
        {videoPreferenceOptions.map((item: string) => {
          return (
            <View key={item}>
              <AccountTab text={item} />
            </View>
          );
        })}
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text style={styles.smallTextStyle}>Account settings</Text>
        {accountSettingsOptions.map((item: string) => {
          return (
            <View key={item}>
              <AccountTab text={item} />
            </View>
          );
        })}
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text style={styles.smallTextStyle}>Support</Text>
        {supportOptions.map((item: string) => {
          return (
            <View key={item}>
              <AccountTab text={item} />
            </View>
          );
        })}
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonStyle}>Sign Out</Text>
        </TouchableOpacity>

        <Text style={styles.smallTextStyle}>Udemy v7.15.0.859</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  nameStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e1e1e1',
  },
  emailStyle: {
    fontSize: 14,
    color: '#bdc0c6',
    marginLeft: 5,
  },
  buttonStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#07768f',
    marginVertical: 10,
  },
  smallTitleStyle: {
    fontSize: 12,
    color: '#bdc0c6',
  },
  smallTextStyle: {
    fontSize: 12,
    color: '#e1e1e1',
    marginVertical: 10,
  },
});

export default AccountScreen;
