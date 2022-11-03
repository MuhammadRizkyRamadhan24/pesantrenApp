import {Image, ScrollView, View, TouchableOpacity} from 'react-native';
import {Text} from 'components/index';
import React from 'react';
import Styles from './style';
import {Colors} from 'src/utils/colors';
import Images from 'consts/Images';

const Profile = () => {
  return (
    <View style={Styles.container}>
      <View
        style={{
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Image
          source={{
            uri: 'https://www.meme-arsenal.com/memes/3405e81b80c1e9eaf1ca06d3febd453d.jpg',
          }}
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 100,
            borderRadius: 9999,
          }}
        />
        <Text
          size="m"
          weight="medium"
          color={Colors.white}
          style={{paddingTop: 10}}>
          John Doe
        </Text>
        <Text size="s" color={Colors.white} style={{paddingTop: 0}}>
          08123456678
        </Text>
        <Text size="s" color={Colors.white} style={{paddingTop: 0}}>
          email@email.com
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.white,
          }}>
          <Text
            weight="medium"
            size="xs"
            color={Colors.ironsideGrey}
            style={{paddingTop: 20, paddingHorizontal: 20}}>
            Akun
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.disabled,
            }}>
            <Image source={Images.editUser} style={{width: 24, height: 24}} />
            <Text
              weight="medium"
              size="s"
              color={Colors.black}
              style={{paddingHorizontal: 10}}>
              Edit Akun
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.disabled,
            }}>
            <Image
              source={Images.changePassword}
              style={{width: 24, height: 24}}
            />
            <Text
              weight="medium"
              size="s"
              color={Colors.black}
              style={{paddingHorizontal: 10}}>
              Ganti Password
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.white,
            marginTop: 10,
          }}>
          <Text
            weight="medium"
            size="xs"
            color={Colors.ironsideGrey}
            style={{paddingTop: 20, paddingHorizontal: 20}}>
            Lainya
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.disabled,
            }}>
            <Image source={Images.help} style={{width: 24, height: 24}} />
            <Text
              weight="medium"
              size="s"
              color={Colors.black}
              style={{paddingHorizontal: 10}}>
              Bantuan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.disabled,
            }}>
            <Image source={Images.logout} style={{width: 24, height: 24}} />
            <Text
              weight="medium"
              size="s"
              color={Colors.black}
              style={{paddingHorizontal: 10}}>
              Keluar
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.white,
            marginTop: 10,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text weight="semibold" size="m" color={Colors.ironsideGrey}>
            ECARTU
          </Text>
          <Text weight="italic" color={Colors.ironsideGrey}>
            Versi Aplikasi - 0.1
          </Text>
          <Text
            weight="medium"
            color={Colors.ironsideGrey}
            style={{paddingTop: 10}}>
            © 2022 PT. Blablabla
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
