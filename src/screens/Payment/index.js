import React, { useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import form from 'helpers/form';
import { apiRequest } from 'helpers/form';
import endpoints from 'config/endpoints';
import LinearGradient from 'react-native-linear-gradient';

const Payment = () => {
  const auth = useSelector(state => state.auth.auth);

  async function handleLogin() {
    try {
      const result = await apiRequest(endpoints.getDetailUser, 'post');
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleLogin();
    console.log('hjahaha');
  }, []);
  

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
      color: Colors.shamrock,
    },
    {
      id: 2,
      icon: Images.water,
      title: 'PDAM',
      color: Colors.scooter,
    },
    {
      id: 3,
      icon: Images.flash,
      title: 'Listrik',
      color: Colors.yellow,
    },
    {
      id: 4,
      icon: Images.menu,
      title: 'Lainya',
      color: Colors.primary,
    },
  ];

  const cardBox = [
    {
      id: 1,
      image: 'https://storage.nu.or.id/storage/post/16_9/mid/santri2_1643967254.jpg',
      title: 'Pesantren',
      desc: 'Lorem Ipsum Sir Dolor amet, Lorem Ipsum Sir Dolor amet Lorellkk',
    },
    {
      id: 2,
      image: 'https://gobiz.co.id/pusat-pengetahuan/wp-content/uploads/2022/03/Metode-Pembayaran-7.jpg',
      title: 'Pembayaran',
      desc: 'Lorem Ipsum Sir Dolor amet, Lorem Ipsum Sir Dolor amet Lorellkk',
    },
    {
      id: 3,
      image: 'https://assets.tokko.io/b727ee1a-22ef-48eb-b596-855cd34001dc/products/images/7ea3e7d0-0a7b-460f-beab-dcc8d536a88e',
      title: 'Topup',
      desc: 'Lorem Ipsum Sir Dolor amet, Lorem Ipsum Sir Dolor amet Lorellkk',
    },
  ];

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={ Styles.container }>
      <ScrollView showsVerticalScrollIndicator={ false } nestedScrollEnabled={ true } stickyHeaderIndices={ [0] }>
        <View
          style={ Styles.containerNameUser }>
          <LinearGradient start={ { x: 0, y: 0 } } end={ { x: 1, y: 0 } } colors={ ['#08519e', '#0283d9', '#40d09c'] } style={ Styles.linearGradient } />
          <View style={ {
            paddingVertical: 10,
            flexDirection:'row',
            paddingHorizontal: 20,
            justifyContent:'space-between',
            alignItems:'center',
          } }>
            <View>
              { /* <Text size='s' color={ Colors.darkerBlack }>
                { auth?.full_name }
              </Text> */ }
              <Text weight='semibold' size='s' color={ Colors.darkerBlack }>
                { auth?.phone }
              </Text>
              <Text weight='medium' size='m' color={ Colors.darkerBlack }>
              Rp { form.stringToCurrency(auth?.saldo) }
              </Text>
            </View>
            <Image source={ Images.iconName } style={ { width: 80, height: 40, resizeMode:'center' } }/>
          </View>
        </View>

        <View style={ Styles.containerBottom }>
          <View
            style={ Styles.containerCoreMenu }>
            { dataMenu.map((d, i) => (
              <TouchableOpacity key={ d.id } activeOpacity={ 0.8 } onPress={ d.click }>
                <View
                  style={ {
                    backgroundColor: Colors.primary,
                    width: 66,
                    height: 66,
                    borderRadius: 66,
                    justifyContent: 'center',
                    alignItems: 'center',
                  } }>
                  <Image source={ d.icon } style={ { width: 30, height: 30 } } />
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
                      backgroundColor: item.color,
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

        { /* <View>
          <Text color={ Colors.primary } style={ { marginTop: 20, marginBottom: 10, marginLeft: 20 } } weight='semibold' size='m'>Saldo</Text>
          <View
            style={ {
              marginHorizontal: 25,
              backgroundColor: Colors.white,
              width: windowWidth - 50,
              flex: 1,
              height: 100,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity:  0.4,
              shadowRadius: 3,
              elevation: 2.5,
              marginBottom: 5,
              flexDirection: 'row',
            } }>
            <View style={ { width: '80%', padding: 15 } }>
              <Text size='s' color={ Colors.darkerBlack }>
                { auth?.full_name }
              </Text>
              <Text size='s' color={ Colors.darkerBlack }>
                { auth?.phone }
              </Text>
              <Text weight='semibold' size='m' color={ Colors.darkerBlack }>
              Rp { form.stringToCurrency(auth?.saldo) }
              </Text>
            </View>
            <View style={ { width: '20%', height: '100%', backgroundColor: Colors.primary, borderTopRightRadius: 10, borderBottomRightRadius: 10 } }/>
          </View>
        </View> */ }

        { /* <View>
          <Text color={ Colors.primary } style={ { marginTop: 20, marginBottom: 10, marginLeft: 20 } } weight='semibold' size='m'>Informasi</Text>
          <ScrollView horizontal={ true } style={ { marginBottom: 20, marginLeft: 15 } } showsHorizontalScrollIndicator={ false }>
            <FlatList
              data={ cardBox }
              scrollEnabled={ true }
              contentContainerStyle={ { flexDirection: 'row' } }
              renderItem={ ({ item }) => (
                <TouchableOpacity key={ item.id } style={ { backgroundColor: Colors.lightGrey, width: 220,  elevation: 0.5, borderRadius: 10, marginHorizontal: 5 } }>
                  <Image style={ { width: '100%', height: 100, resizeMode: 'cover' } } source={ { uri : `${item.image}` } } />
                  <View style={ { padding: 10 } }>
                    <Text style={ { maxWidth: 200 } } size='xs' weight='semibold'>{ item.title }</Text>
                    <Text maxLines={ 2 } style={ { maxWidth: 200 } }>{ item.desc }</Text>
                  </View>
                </TouchableOpacity>
              ) }
            />
          </ScrollView>
        </View> */ }

      </ScrollView>
    </View>
      
  );
};

export default Payment;
