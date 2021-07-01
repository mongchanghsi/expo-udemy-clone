import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { View, Text } from '../Themed';

interface IProps {
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
    paddingVertical: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonContent: {
    fontSize: 16,
    color: '#fff',
    marginTop: 2,
  },
});

export default Tabs;
