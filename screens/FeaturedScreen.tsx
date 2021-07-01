import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import HorizontalScrollList from '../components/HorizontalScrollList';
import data from '../utils/data/newcourses';

const FeaturedScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HorizontalScrollList title='Recommend for you' data={data} />
      <HorizontalScrollList title='Featured' data={data} />
      <HorizontalScrollList
        title='Because you viewed Introduction to Programming'
        data={data}
      />
      <HorizontalScrollList
        title='Because you viewed Python Programming'
        data={data}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default FeaturedScreen;
