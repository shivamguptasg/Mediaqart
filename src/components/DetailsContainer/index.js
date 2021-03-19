import React from 'react';
import {StyleSheet,Text, ScrollView} from 'react-native';
import * as color from '../../assets/color';

export default function DetailsContainer(props) {
  const {description} = props;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Details</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.red,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 13,
    color: color.grey,
    marginVertical: 5,
  },
});
