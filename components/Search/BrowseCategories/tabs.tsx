import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { View, Text } from '../../Themed';

interface IProps {
  icon: any;
  text: string;
}

const Tabs = (props: IProps) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ minWidth: 24 }}>{props.icon}</View>
        <Text style={styles.buttonContent}>{props.text}</Text>
      </View>
      <View style={{ marginTop: 7 }}>
        <AntDesign name='right' size={18} color='#fff' />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 3,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContent: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 15,
    marginTop: 2,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default Tabs;
