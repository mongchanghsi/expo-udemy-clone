import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';
import ItemTab from './ItemTab';
import { useNavigation } from '@react-navigation/native';

const HorizontalScrollList = (props: any) => {
  const { title, data } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        style={styles.listStyle}
        keyExtractor={(item) => item.title}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CourseDetail', { title: item.item.title })
              }
            >
              <ItemTab item={item.item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  listStyle: {
    marginHorizontal: 15,
    paddingBottom: 30,
  },
});

export default HorizontalScrollList;
