import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './style';
import { Text } from 'components/index';
import { Colors } from 'src/utils/colors';
import Images from 'consts/Images';
import LinearGradient from 'react-native-linear-gradient';

const Cards = () => {
  const dataMenu = [
    {
      id: 1,
      icon: Images.addCard,
      title: 'Tambah',
    },
    {
      id: 2,
      icon: Images.deleteCard,
      title: 'Hapus',
    },
    {
      id: 3,
      icon: Images.blockCard,
      title: 'Blokir',
    },
  ];
  return (
    <View style={ Styles.container }>
      <LinearGradient
        start={ { x: 0, y: 0 } } end={ { x: 1, y: 0 } } colors={ ['#08519e', '#0283d9', '#40d09c'] }
        style={ Styles.containerTop }>
        <Image
          source={ Images.iconName }
          style={ Styles.logo }
        />
        <View style={ Styles.containerMenu }>
          { dataMenu.map((d, i) => (
            <TouchableOpacity key={ d.id } activeOpacity={ 0.8 }>
              <View
                style={ {
                  backgroundColor: Colors.lightGrey,
                  width: 65,
                  height: 65,
                  borderRadius: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                } }>
                <Image source={ d.icon } style={ { width: 34, height: 34 } } />
              </View>
              <Text
                size={ 'xxs' }
                weight={ 'medium' }
                style={ { textAlign: 'center', paddingTop: 10 } }
                color={ Colors.lightGrey }>
                { d.title }
              </Text>
            </TouchableOpacity>
          )) }
        </View>
      </LinearGradient>
    </View>
  );
};

export default Cards;
