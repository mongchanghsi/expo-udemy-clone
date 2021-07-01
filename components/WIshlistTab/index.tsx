import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../Themed';
import Tags from '../Tags';
import Stars from 'react-native-stars';
import { MaterialIcons } from '@expo/vector-icons';

const WishlistTab = (props: any) => {
  const { title, author, image, price, rating, tag } = props.courseDetail;

  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Image style={styles.imageStyle} source={image} />
      <View style={styles.bodyContainer}>
        <View style={{ marginRight: '25%' }}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.authorStyle}>{author}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 5,
            }}
          >
            <Stars
              display={rating.currentRating}
              count={5}
              fullStar={<MaterialIcons name='star' size={20} color='#f5c151' />}
              halfStar={
                <MaterialIcons name='star-half' size={20} color='#f5c151' />
              }
              emptyStar={
                <MaterialIcons name='star-border' size={20} color='#f5c151' />
              }
            />
            <Text style={styles.ratingStyle}>
              {rating.currentRating} ({rating.numberOfReviews})
            </Text>
          </View>

          {price.originalPrice === price.currentPrice ? (
            <Text style={styles.currentPriceStyle}>{price.currentPrice}</Text>
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={styles.currentPriceStyle}>
                ${price.currentPrice}
              </Text>
              <Text style={styles.originalPriceStyle}>
                ${price.originalPrice}
              </Text>
            </View>
          )}
          <Tags name={tag} />
        </View>
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
    paddingBottom: 5,
  },
  listStyle: {
    marginHorizontal: 15,
    paddingBottom: 30,
  },
  ratingStyle: {
    marginLeft: 5,
    color: '#bdc0c6',
    fontSize: 11,
    fontWeight: '600',
  },
  currentPriceStyle: {
    fontSize: 16,
    color: '#e1e1e1',
    fontWeight: '600',
  },
  originalPriceStyle: {
    marginLeft: 3,
    fontSize: 11,
    color: '#bdc0c6',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  imageStyle: {
    height: 65,
    width: 65,
  },
});

export default WishlistTab;
