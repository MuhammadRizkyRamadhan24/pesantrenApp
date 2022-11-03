import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Header, CustomTextInput, Button } from 'components/';
import Styles from './style';
import React, { useState } from 'react';
import { Colors } from 'src/utils/colors';

const Topup = () => {
  const [balance, setBalance] = useState('');
  const valueTopup = [
    {
      id:1,
      value: '50000',
    },
    {
      id:2,
      value: '100000',
    },
    {
      id:3,
      value: '200000',
    }, {
      id:4,
      value: '300000',
    },
    {
      id:5,
      value: '500000',
    },
    {
      id:6,
      value: '1000000',
    },
  ];

  return (
    <View style={ Styles.container }>
      <Header.Basic title='Top Up' size='m' />
      <View>
        <FlatList
          data={ valueTopup }
          contentContainerStyle={ {
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          } }
          numColumns={ 2 }
          renderItem={ ({ item }) => {
            return (
              <TouchableOpacity key={ item.id } onPress={ () => setBalance(item.value) } activeOpacity={ 0.8 } style={ { width: '47.5%', paddingVertical: 20, borderRadius: 10, margin: '1.25%', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightGrey, elevation: 1 } }>
                <Text size={ 25 } weight={ 'semibold' }>Rp { item.value }</Text>
              </TouchableOpacity>
            );
          } }
        />
        <View style={ { paddingHorizontal: 20 } }>
          <CustomTextInput
            onChangeText={ val => setBalance(val) }
            value={ balance }
            keyboardType='number-pad'
            isTopup
          />
          <Button
            text='Lanjutkan'
            mode='default'
            style={ Styles.btn }
          />
        </View>
      </View>
    </View>
  );
};

export default Topup;
