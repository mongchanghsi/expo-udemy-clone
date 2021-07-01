import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';

const Tags = ({ name }) => {
  switch (name) {
    case 'Bestseller':
      return (
        <View style={styles.bestseller}>
          <Text style={styles.text}>{name}</Text>
        </View>
      );
    case 'Hot & new':
      return (
        <View style={styles.hotnew}>
          <Text style={styles.text}>{name}</Text>
        </View>
      );
    case 'New':
      return (
        <View style={styles.new}>
          <Text style={styles.text}>{name}</Text>
        </View>
      );
    default:
      return <View></View>;
  }
};

const styles = StyleSheet.create({
  bestseller: {
    marginTop: 5,
    backgroundColor: '#f5c151',
    width: 75,
    borderRadius: 5,
  },
  hotnew: {
    marginTop: 5,
    backgroundColor: '#eb5351',
    width: 75,
    borderRadius: 5,
  },
  new: {
    marginTop: 5,
    backgroundColor: '#49c18e',
    width: 45,
    borderRadius: 5,
  },
  text: {
    padding: 5,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Tags;
