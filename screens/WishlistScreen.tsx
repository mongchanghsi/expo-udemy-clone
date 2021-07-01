import * as React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';

import data from '../utils/data/newcourses';
import WishlistTab from '../components/WIshlistTab';

const WishlistScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        style={styles.listStyle}
        keyExtractor={(item) => item.title}
        renderItem={(item) => {
          return <WishlistTab courseDetail={item.item} />;
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  listStyle: {
    marginHorizontal: 15,
    paddingBottom: 30,
  },
});

export default WishlistScreen;
