import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default function ProductDetailsScreen({route, navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>Product Name: {route.params.name}</Text>
      <Text>Discription: {route.params.description}</Text>
      <Text>Price: {route.params.price}</Text>
      <Text>Year: {route.params.year}</Text>
      <Text>Code: {route.params.code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
