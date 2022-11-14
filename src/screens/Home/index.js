import React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Text } from 'components/';
import Styles from './style';
import Images from 'consts/Images';
import { Colors } from 'src/utils/colors';
import { NavigationHelper } from 'helpers/';
import screenName from 'config/screenName';
import Icon from 'react-native-vector-icons/Entypo';


const Home = () => {
  const dataMenu = [
    {
      id: 1,
      icon: Images.topup,
      title: 'Topup',
      click: () => NavigationHelper.navigate(screenName.TOPUP),
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
      icon: Images.menu,
      title: 'Lainya',
    },
  ];

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={ Styles.container }>
      <ScrollView nestedScrollEnabled={ true } stickyHeaderIndices={ [1] }>
        <View
          style={ Styles.containerNameUser }>
          <Text size='s' color= { Colors.white } >
            Selamat Datang ,
          </Text>
          <Text
            maxLines={ 1 }
            size='m'
            weight='semibold'
            color= { Colors.white }
            style={ Styles.maxWidthTextBottom }>
            John Doe
          </Text>
        </View>

        <View
          style={ Styles.containerBalanceUser }>
          <Text size='s' color={ Colors.white }>
            Balance
          </Text>
          <Text
            maxLines={ 1 }
            size='xl'
            weight='semibold'
            color={ Colors.white }
            style={ Styles.maxWidthTextBottom }>
            Rp 2.000.000,00
          </Text>
        </View>
        <View
          style={ Styles.addOnContainerTop }
        />
        <View style={ Styles.containerBottom }>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={ false }
              style={ Styles.containerCard }>
              <TouchableOpacity
                activeOpacity={ 0.95 }
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
                  color={ Colors.primary }
                  style={ { paddingBottom: 5 } }
                />
                <Text weight='semibold' color={ Colors.darkerBlack }>
                Belum ada kartu aktif,
                </Text>
                <Text color={ Colors.darkerBlack } weight='semibold'>
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
            style={ Styles.containerCoreMenu }>
            { dataMenu.map((d, i) => (
              <TouchableOpacity key={ d.id } activeOpacity={ 0.8 } onPress={ d.click }>
                <View
                  style={ {
                    backgroundColor: Colors.primary,
                    width: 70,
                    height: 70,
                    borderRadius: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                  } }>
                  <Image source={ d.icon } style={ { width: 34, height: 34 } } />
                </View>
                <Text
                  size={ 'xs' }
                  weight={ 'medium' }
                  style={ { textAlign: 'center', paddingTop: 12 } }
                  color={ Colors.darkerBlack }>
                  { d.title }
                </Text>
              </TouchableOpacity>
            )) }
          </View>
          <ScrollView horizontal={ true }>
            <FlatList
              scrollEnabled={ false }
              contentContainerStyle={ Styles.containerSecondaryMenu }
              numColumns={ 4 }
              data={ dataFitur }
              renderItem={ ({ item }) => (
                <TouchableOpacity
                  key={ item.id }
                  activeOpacity={ 0.8 }
                  style={ {
                    width: (windowWidth - 40) / 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  } }>
                  <View
                    style={ {
                      backgroundColor: Colors.lightGrey,
                      width: 56,
                      height: 56,
                      borderRadius: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                    } }>
                    <Image source={ item.icon } style={ { width: 28, height: 28 } } />
                  </View>
                  <Text
                    size={ 'xxs' }
                    weight={ 'medium' }
                    style={ { textAlign: 'center', paddingVertical: 5 } }
                    color={ Colors.darkerBlack }>
                    { item.title }
                  </Text>
                </TouchableOpacity>
              ) }
            />
          </ScrollView>
        </View>
      </ScrollView>
      
    </View>
      
  );
};

export default Home;
