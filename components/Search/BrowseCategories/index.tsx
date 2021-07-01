import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../../Themed';
import Tabs from './tabs';

// Mock Data
import Categories from '../../../utils/data/browsecategories';

const BrowseCategories = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Browse Categories</Text>
      <FlatList
        data={Categories}
        renderItem={(item: any) => (
          <Tabs icon={item.item.icon} text={item.item.title} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginBottom: 10,
  },
  title: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
});

export default BrowseCategories;
