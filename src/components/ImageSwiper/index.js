import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as color from '../../assets/color';
import Swiper from 'react-native-swiper';

export default function ImageSwiper(props) {
  return (
    <View style={[styles.swiperContainer, props.style]}>
      <Swiper
        showsButtons={true}
        autoplay={true}
        dotColor="#fff"
        activeDotColor={color.red}>
        {props.images.map((data, index) => (
          <Image
            key={index}
            style={styles.sliderImage}
            source={{uri: data}}
            resizeMode="stretch"
          />
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: '35%',
    marginBottom: 6,
    borderRadius: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(118, 120, 122, 0.2)',
  },
  sliderImage: {
    flex: 1,
    // // height: "100%",
    width: '100%',
  },
});
