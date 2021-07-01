import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../Themed';
import Tags from '../Tags';
import Stars from 'react-native-stars';
import { MaterialIcons } from '@expo/vector-icons';

const ItemTab = (props: any) => {
  const { title, author, rating, price, image, tag } = props.item;

  return (
    <View style={styles.background}>
      <Image style={styles.imageStyle} source={image} />
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.authorStyle}>{author}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
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
          <Text style={styles.currentPriceStyle}>${price.currentPrice}</Text>
          <Text style={styles.originalPriceStyle}>${price.originalPrice}</Text>
        </View>
      )}
      <Tags name={tag} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 250,
    width: 270,
    paddingRight: 10,
    marginTop: 15,
  },
  imageStyle: {
    height: 150,
    width: 250,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 6,
    paddingRight: 10,
    lineHeight: 21,
  },
  authorStyle: {
    fontSize: 12,
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
});

export default ItemTab;
