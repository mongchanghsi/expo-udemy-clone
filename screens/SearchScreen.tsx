import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import SearchBar from '../components/Search/SearchBar';
import SearchHeader from '../components/Search/SearchHeader';
import TopSearches from '../components/Search/TopSearches';
import BrowseCategories from '../components/Search/BrowseCategories';

const SearchScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <ScrollView style={styles.scrollContainer}>
        <SearchHeader />
        <TopSearches />
        <BrowseCategories />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    top: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 25,
    height: 1,
    width: '100%',
  },
  scrollContainer: {
    marginTop: 5,
  },
});

export default SearchScreen;
