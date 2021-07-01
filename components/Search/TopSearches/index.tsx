import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Text, View } from '../../Themed';
import Tabs from './tabs';

// Mock Data
import TopSearchesData from '../../../utils/data/topsearches';

const TopSearches = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Top Searches</Text>
      {/* TODO: Fix FlatList with ScrollView
      https://github.com/facebook/react-native/issues/13939 */}
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={TopSearchesData}
        renderItem={(item: any) => <Tabs text={item.item} />}
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
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default TopSearches;
