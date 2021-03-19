import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImageSwiper from '../../components/ImageSwiper';
import images from '../../assets/images';
import Button from '../../components/Button';
import DetailsContainer from '../../components/DetailsContainer';
import ReviewAndPrice from '../../components/Review_Price_Container';
import * as color from '../../assets/color';

export default function HomeScreen() {
  const [balance, setbalance] = useState(550);
  const [selectedQty, setSelectedQty] = useState('');
  return (
    <View style={styles.container}>
      <ImageSwiper images={images} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.heading}>Product</Text>
        <Text style={{marginLeft: 10, fontSize: 12}}>by Company</Text>
        <ReviewAndPrice balance={balance} review={56} rating="5.0" />
        <View style={styles.buttonContainer}>
          <Icon
            name="minus"
            color={selectedQty === 'minus' ? color.red : color.black}
            style={{marginHorizontal: 15}}
            onPress={() => setSelectedQty('minus')}
          />
          <Button
            title="Add To Bag"
            onPress={() => {
              if (selectedQty) {
                selectedQty === 'minus'
                  ? setbalance(prevBal => prevBal - 10)
                  : setbalance(prevBal => prevBal + 10);
              } else alert('Please select Quantity');
            }}
          />
          <Icon
            name="plus"
            color={selectedQty === 'plus' ? color.red : color.black}
            style={{marginHorizontal: 15}}
            onPress={() => setSelectedQty('plus')}
          />
        </View>
        <DetailsContainer
          description={
            ' Lorem Ipsum is simply dummy text of the printing and type setting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10,backgroundColor:'#fff'},
  descriptionContainer: {flex: 1, borderWidth: 1, marginTop: 10, padding: 10},
  heading: {
    fontSize: 16,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    paddingHorizontal: 10,
    marginTop: -10,
    marginLeft: 10,
    zIndex: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
