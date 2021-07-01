import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../../Themed';

const Tabs = ({ text }) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
      <Text style={styles.buttonContent}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#13161d',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  buttonContent: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Tabs;
