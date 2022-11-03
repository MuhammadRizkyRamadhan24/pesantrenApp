import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Text } from 'components/';
import Styles from './style';
import Icon from 'react-native-vector-icons/Entypo';
import Images from 'consts/Images';
import { Colors } from 'src/utils/colors';

const Home = () => {
  const dataMenu = [
    {
      id: 1,
      icon: Images.topup,
      title: 'Topup',
    },
    {
      id: 2,
      icon: Images.card,
      title: 'Isi Kartu',
    },
    {
      id: 3,
      icon: Images.transfer,
      title: 'Transfer',
    },
  ];

  const dataFitur = [
    {
      id: 1,
      icon: Images.phone,
      title: 'Pulsa',
    },
    {
      id: 2,
      icon: Images.water,
      title: 'PDAM',
    },
    {
      id: 3,
      icon: Images.flash,
      title: 'Listrik',
    },
    {
      id: 4,
      icon: Images.bpjs,
      title: 'BPJS',
    },
    {
      id: 5,
      icon: Images.world,
      title: 'Paket Data',
    },
    {
      id: 6,
      icon: Images.telephone,
      title: 'Telkom',
    },
    {
      id: 7,
      icon: Images.receipt,
      title: 'Multifinance',
    },
    {
      id: 8,
      icon: Images.menu,
      title: 'lainnya',
    },
  ];

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={ Styles.container }>
      <View
        style={ {
          backgroundColor: Colors.primary,
          padding: 20,
          maxHeight: 270,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        } }>
        <View>
          <Text size='s' style={ { color: Colors.white } }>
            Selamat Datang ,
          </Text>
          <Text
            maxLines={ 1 }
            size='m'
            weight='semibold'
            style={ {
              color: Colors.white,
              maxWidth: 200,
              height: 30,
            } }>
            John Doe
          </Text>
        </View>
        <View style={ { paddingTop: 10 } }>
          <Text size='s' style={ { color: Colors.white } }>
            Balance
          </Text>
          <Text
            maxLines={ 1 }
            size='xl'
            weight='semibold'
            style={ {
              color: Colors.white,
              maxWidth: 200,
              height: 30,
            } }>
            Rp 2.000.000,00
          </Text>
        </View>
        <View style={ { paddingTop: 20 } }>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={ false }
            style={ { flexDirection: 'row', width: '100%' } }>
            <TouchableOpacity
              activeOpacity={ 0.9 }
              style={ {
                marginHorizontal: 5,
                backgroundColor: Colors.lightGrey,
                width: windowWidth - 50,
                flex: 1,
                height: 150,
                borderRadius: 10,
                elevation: 1,
                justifyContent: 'center',
                alignItems: 'center',
              } }>
              <Icon
                name='v-card'
                size={ 40 }
                color={ '#B6B6B6' }
                style={ { paddingBottom: 5 } }
              />
              <Text weight='semibold' color={ Colors.ironsideGrey }>
                Belum ada kartu aktif,
              </Text>
              <Text color={ Colors.ironsideGrey } weight='semibold'>
                ketuk untuk menambahkan kartu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={ 0.9 }
              style={ {
                marginHorizontal: 5,
                backgroundColor: Colors.lightGrey,
                width: windowWidth - 50,
                flex: 1,
                height: 150,
                borderRadius: 10,
                elevation: 1,
                justifyContent: 'center',
                alignItems: 'center',
              } }>
              <Icon
                name='v-card'
                size={ 40 }
                color={ '#B6B6B6' }
                style={ { paddingBottom: 5 } }
              />
              <Text weight='semibold' color={ Colors.ironsideGrey }>
                Belum ada kartu aktif,
              </Text>
              <Text color={ Colors.ironsideGrey } weight='semibold'>
                ketuk untuk menambahkan kartu
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={ {
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          } }>
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
                <Image source={ d.icon } style={ { width: 28, height: 28 } } />
              </View>
              <Text
                size={ 'xxs' }
                weight={ 'medium' }
                style={ { textAlign: 'center', paddingTop: 12 } }
                color={ Colors.darkerBlack }>
                { d.title }
              </Text>
            </TouchableOpacity>
          )) }
        </View>
        <View>
          <FlatList
            contentContainerStyle={ {
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 10,
              justifyContent: 'space-around',
            } }
            numColumns={ 4 }
            showsVerticalScrollIndicator={ false }
            data={ dataFitur }
            renderItem={ ({ item }) => (
              <TouchableOpacity
                key={ item.id }
                activeOpacity={ 0.8 }
                style={ {
                  width: windowWidth / 4.7,
                  paddingBottom: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                } }>
                <View
                  style={ {
                    backgroundColor: Colors.lightGrey,
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  } }>
                  <Image source={ item.icon } style={ { width: 24, height: 24 } } />
                </View>
                <Text
                  size={ 'xxs' }
                  weight={ 'medium' }
                  style={ { textAlign: 'center', paddingTop: 12 } }
                  color={ Colors.darkerBlack }>
                  { item.title }
                </Text>
              </TouchableOpacity>
            ) }
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
