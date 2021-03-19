import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as color from '../../assets/color';

export default function ReviewAndPrice(props) {
  const {balance, review, rating} = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Icon name="star" color={color.lightGreen} size={15} />
        <Text style={styles.rating}>{rating}</Text>
        <View style={styles.reviewContainer} />
        <Text style={styles.review}>{review} Reviews</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon
          name="heart"
          color="#68d955"
          size={15}
          style={styles.favouritre}
        />
        <Text style={styles.balance}>INR {balance}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  infoContainer: {flexDirection: 'row', alignItems: 'center'},
  rating: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: color.grey,
  },
  reviewContainer: {height: 8, backgroundColor: color.grey, width: 1},
  review: {
    fontSize: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    color: color.grey,
  },
  favouritre: {
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  balance: {fontSize: 13, color: color.grey},
});
