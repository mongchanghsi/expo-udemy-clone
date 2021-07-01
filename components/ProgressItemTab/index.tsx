import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../Themed';

const ProgressItemTab = (props: any) => {
  const { title, author, image, progress } = props.courseDetail;

  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Image style={styles.imageStyle} source={image} />
      <View style={styles.bodyContainer}>
        <View style={{ marginRight: '25%' }}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.authorStyle}>{author}</Text>
        </View>

        {progress > 0 ? (
          <View style={{ width: 250 }}>
            <View style={styles.progressBarStyle}>
              <View
                style={[
                  styles.progressInnerBarStyle,
                  {
                    width: `${progress}%`,
                  },
                ]}
              ></View>
            </View>
            <Text style={styles.progressTextStyle}>{progress}% completed</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.startCourseStyle}>START COURSE</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    maxWidth: '100%',
    marginHorizontal: 5,
  },
  bodyContainer: {
    paddingLeft: 15,
  },
  titleStyle: {
    fontSize: 15,
    color: '#e1e1e1',
    paddingBottom: 3,
    fontWeight: '600',
  },
  authorStyle: {
    fontSize: 10,
    color: '#bdc0c6',
    paddingBottom: 7,
  },
  progressBarStyle: {
    backgroundColor: '#282d3b',
    height: 4,
    width: '100%',
    borderRadius: 2,
  },
  progressInnerBarStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#01748d',
  },
  progressTextStyle: {
    paddingTop: 4,
    fontSize: 11,
    color: '#bdc0c6',
  },
  listStyle: {
    marginHorizontal: 15,
    paddingBottom: 30,
  },
  startCourseStyle: {
    fontSize: 12,
    color: '#79b6bc',
    fontWeight: '600',
  },
  imageStyle: {
    height: 65,
    width: 65,
  },
});

export default ProgressItemTab;
