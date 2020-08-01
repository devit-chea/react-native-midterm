import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
export default function ProductListScreen({navigation}) {
  const [productInfos] = useState([
    {
      id: '001',
      name: 'Table',
      price: '$200',
      description: 'This is the table for office',
      year: '2020',
      code: 'tab232',
    },
    {
      id: '002',
      name: 'Chair',
      price: '$32',
      description: 'This is the chair for meetting room',
      year: '2020',
      code: 'ch25',
    },
    {
      id: '003',
      name: 'Gaming Chair',
      price: '$232',
      description: 'This is the chair for meetting room',
      year: '2020',
      code: '00ch2225',
    },
  ]);

  const image = {uri: 'https://reactjs.org/logo-og.png'};

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Wellcome to Our Store</Text>
        </ImageBackground>
      </View>
      <FlatList
        style={{padding: 1, backgroundColor: 'gray'}}
        data={productInfos}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', item)}>
            <Text
              style={{
                backgroundColor: '#b0c4de',
                padding: 10,
                marginVertical: 8,
                marginHorizontal: 16,
                fontSize: 16,
                color: 'blue',
                borderRadius: 3,
              }}>
              {item.id + '-' + item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  // background

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
