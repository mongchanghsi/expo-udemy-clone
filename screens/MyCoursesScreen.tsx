import * as React from 'react';
import { StyleSheet, FlatList, ScrollView } from 'react-native';

import MyCoursesData from '../utils/data/mycourses';
import ProgressItemTab from '../components/ProgressItemTab';

const CoursesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={MyCoursesData}
        style={styles.listStyle}
        keyExtractor={(item) => item.title}
        renderItem={(item) => {
          return <ProgressItemTab courseDetail={item.item} />;
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

export default CoursesScreen;
