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
import { useSelector } from 'react-redux';
import form from 'helpers/form';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

const Home = () => {
  const auth = useSelector(state => state.auth.auth);

  // async function handleLogin() {
  //   try {
  //     const result = await apiRequest(endpoints.getDetailUser, 'post');
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   handleLogin();
  // }, []);

  const cardStudent = [
    {
      id: 1,
      name: 'Muhammad John Doe',
      nisn: '3013 1172 2123 1111',
      image: 'https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png',
    },
    {
      id: 2,
      name: 'Ahmad John John',
      nisn: '3013 1172 2123 1191',
      image: 'https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?b=1&s=170667a&w=0&k=20&c=qr9IZO49bYbal9ID9FzvVDe_V6GdcZhY9a3eGbeL4E0=',
    },
    {
      id: 3,
      name: 'Ahmad John Doe',
      nisn: '3013 1112 2123 1191',
      image: 'https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1636100249202-5NY98C6ASRIFFPO9GZTU/Tom+Professional+Business+Headshot.jpg?format=500w',
    },
  ];

  const menu = [
    {
      id: 1,
      name: 'Akademis',
    },
    {
      id: 2,
      name: 'Non Akademis',
    },
    {
      id: 3,
      name: 'Report',
    },
    {
      id: 4,
      name: 'Jadwal',
    },
  ];

  const promo = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg?w=2000',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/premium-vector/sale-promotion-banner-template_74379-177.jpg',
    },
    {
      id: 3,
      image: 'https://www.shutterstock.com/image-vector/promo-merdeka-banner-design-vector-600w-1408869659.jpg',
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
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          } }>
            <Image source={ Images.iconName } style={ { width: 140, height: 55, resizeMode:'center' } }/>
          </View>
        </View>

        <View style={ Styles.containerBottom }>
          <View style={ { flexDirection:'row', marginHorizontal: 40 } }>
            <Text color={ Colors.primary }  style={ { width: '45%' } } size='m' maxLines={ 1 }>Selamat Datang,</Text>
            <Text color={ Colors.primary }  style={ { width: '55%' } } size='m' maxLines={ 1 } weight='semibold'>{ auth.full_name }</Text>
          </View>
          { /* Konten Atas */ }
          <View>
            <Carousel
              mode='parallax'
              loop
              width={ windowWidth }
              height={ windowWidth / 2.5 }
              // autoPlay={ true }
              data={ promo }
              scrollAnimationDuration={ 1000 }
              renderItem={ ({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={ 0.8 }
                  style={ {
                    flex: 1,
                    justifyContent: 'center',
                  } }
                >
                  <Image
                    source={ { uri: `${item.image}` } }
                    style={ {
                      width: '100%',
                      height:'100%',
                      hadowColor: '#000',
                      shadowOffset: { width: 1, height: 1 },
                      shadowOpacity:  0.4,
                      shadowRadius: 3,
                      elevation: 2.5,
                      borderRadius: 10,
                      resizeMode:'cover',
                    } }
                  />
                </TouchableOpacity>
              ) }
            />
          </View>

          <ScrollView style={ { padding: 20 } } horizontal>
            <FlatList
              data={ menu }
              contentContainerStyle={ {
                alignItems: 'center',
              } }
              numColumns={ 2 }
              renderItem={ ({ item }) =>
                <TouchableOpacity
                  activeOpacity={ 0.9 }
                  style={ {
                    width: (windowWidth / 2) - 30,
                    height: 70,
                    backgroundColor: Colors.white,
                    margin: 5,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity:  99,
                    shadowRadius: 3,
                    elevation: 2.5 } }>
                  <View style={ { height:'90%', flexDirection:'row', alignItems:'center', paddingHorizontal: 10 } }>
                    <View style={ { marginRight: '5%' } }>
                      <Image source={ Images.homeFocused } style={ { width: 30, height: 30 } }/>
                    </View>
                    <Text color={ Colors.darkerBlack } weight='medium' style={ { width: '70%', marginTop: 5 } } size='xs' maxLines={ 1 }>{ item.name }</Text>
                  </View>
                  <LinearGradient
                    start={ { x: 0, y: 0 } } end={ { x: 1.5, y: 0 } } colors={ [Colors.primary, Colors.scooter]  }
                    style={ { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, height: '10%' } }
                  />
                </TouchableOpacity> }
            />
          </ScrollView>
        </View>

        <View>
          <Text color={ Colors.primary } style={ { marginTop: 20, marginBottom: 10, marginLeft: 20 } } weight='semibold' size='m'>Kartu</Text>
          <ScrollView horizontal>
            <FlatList
              data={ cardStudent }
              renderItem={ ({ item }) =>
                <TouchableOpacity activeOpacity={ 0.9 }>
                  <LinearGradient
                    key={ item.id }
                    start={ { x: 0, y: 0 } } end={ { x: 1.5, y: 0 } } colors={ [Colors.primary, Colors.scooter] }
                    style={ {
                      marginHorizontal: 25,
                      backgroundColor: Colors.white,
                      width: windowWidth - 50,
                      flex: 1,
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: { width: 1, height: 1 },
                      shadowOpacity:  0.4,
                      shadowRadius: 3,
                      elevation: 2.5,
                      marginBottom: 10,
                      padding: 15,
                    } }>
                    { /* <Image source={ Images.iconName } style={ { width: 80, height: 30, resizeMode:'center', marginBottom: 15 } }/> */ }
                    <View style={ { flexDirection: 'row', flex: 1 } }>
                      <Image
                        source={ {
                          uri: `${item.image}`,
                        } }
                        style={ { width: 50, height: 50, borderRadius: 999 } }
                      />
                      <View style={ { marginLeft: 15 } }>
                        <Text size='s' weight='semibold' color={ Colors.white }>{ item.name }</Text>
                        <Text size='s' weight='medium' color={ Colors.white }>{ item.nisn }</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity> }
            />
          </ScrollView>
          
        </View>

        <View>
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
            <LinearGradient colors={ ['#0283d9', '#40d09c'] } style={ { width: '20%', height: '100%', backgroundColor: Colors.primary, borderTopRightRadius: 10, borderBottomRightRadius: 10 } }/>
          </View>
        </View>

        <View style={ { marginBottom: 50 } }>
          <Text color={ Colors.primary } style={ { marginTop: 20, marginBottom: 10, marginLeft: 20 } } weight='semibold' size='m'>Informasi</Text>
          <ScrollView horizontal={ true } style={ { marginBottom: 20, marginLeft: 15 } } showsHorizontalScrollIndicator={ false }>
            <FlatList
              data={ cardBox }
              scrollEnabled={ true }
              contentContainerStyle={ { flexDirection: 'row' } }
              renderItem={ ({ item }) => (
                <TouchableOpacity key={ item.id } style={ { backgroundColor: Colors.white, width: 220,  elevation: 0.5, borderRadius: 10, marginHorizontal: 5 } }>
                  <Image style={ { width: '100%', height: 100, resizeMode: 'cover' } } source={ { uri : `${item.image}` } } />
                  <View style={ { padding: 10 } }>
                    <Text style={ { maxWidth: 200 } } size='xs' weight='semibold'>{ item.title }</Text>
                    <Text maxLines={ 2 } style={ { maxWidth: 200 } }>{ item.desc }</Text>
                  </View>
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

