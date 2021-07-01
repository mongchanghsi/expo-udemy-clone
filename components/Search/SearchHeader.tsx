import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../Themed';

const SearchHeader = () => {
  return (
    <View style={styles.background}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/images/adaptive-icon.png')}
      />
      <Text style={styles.title}>Discover Courses</Text>
      <Text style={styles.authorStyle}>
        Try discovering new courses with search or browse our categories
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  searchContainer: {
    top: 15,
  },
  title: {
    marginVertical: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  authorStyle: {
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#bebec8',
    textAlign: 'center',
  },
  imageStyle: {
    marginVertical: 30,
    height: 100,
    width: 180,
    borderRadius: 10,
  },
});

export default SearchHeader;
