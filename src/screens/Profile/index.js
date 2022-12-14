import { Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, CustomModal } from 'components/index';
import React, { useState } from 'react';
import Styles from './style';
import { Colors } from 'src/utils/colors';
import Images from 'consts/Images';

import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.auth);
  const [modalVisible, setModalVisible] = useState(false);

  const accountMenu = [
    {
      id: 1,
      icon: Images.editUser,
      title: 'Edit Akun',
    },
    {
      id: 2,
      icon: Images.changePassword,
      title: 'Ganti Password',
    },
  ];
  const otherMenu = [
    {
      id: 1,
      icon: Images.help,
      title: 'Bantuan',
    },
    {
      id: 2,
      icon: Images.cs,
      title: 'Hubungi Customer Service',
    },
    {
      id: 3,
      icon: Images.logout,
      title: 'Keluar',
      click: () => setModalVisible(true),
    },
  ];

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    setModalVisible(false);
  };

  return (
    <View style={ Styles.container }>
      <View
        style={ Styles.containerTop }>
        <Image
          source={ {
            uri: 'https://www.meme-arsenal.com/memes/3405e81b80c1e9eaf1ca06d3febd453d.jpg',
          } }
          style={ Styles.imageUser }
        />
        <Text
          size='m'
          weight='medium'
          color={ Colors.white }>
          { auth?.full_name }
        </Text>
        <Text size='s' color={ Colors.white } >
          { auth?.phone }
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <View
          style={ Styles.containerMenu }>
          <Text
            weight='medium'
            size='xs'
            color={ Colors.ironsideGrey }
            style={ { paddingTop: 20, paddingHorizontal: 20 } }>
            Akun
          </Text>
          { accountMenu.map((v, i) => (
            <TouchableOpacity
              key={ v.id }
              activeOpacity={ 0.8 }
              style={ {
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.disabled,
              } }>
              <Image source={ v.icon } style={ { width: 24, height: 24 } } />
              <Text
                weight='medium'
                size='s'
                color={ Colors.black }
                style={ { paddingHorizontal: 10 } }>
                { v.title }
              </Text>
            </TouchableOpacity>
          )) }
        </View>
        <View
          style={ [Styles.containerMenu, { marginTop: 10 }] }>
          <Text
            weight='medium'
            size='xs'
            color={ Colors.ironsideGrey }
            style={ { paddingTop: 20, paddingHorizontal: 20 } }>
            Lainya
          </Text>
          { otherMenu.map((v, i) => (
            <TouchableOpacity
              onPress={ v.click }
              key={ v.id }
              activeOpacity={ 0.8 }
              style={ {
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.disabled,
              } }>
              <Image source={ v.icon } style={ { width: 24, height: 24 } } />
              <Text
                weight='medium'
                size='s'
                color={ Colors.black }
                style={ { paddingHorizontal: 10 } }>
                { v.title }
              </Text>
            </TouchableOpacity>
          )) }
        </View>
        <View
          style={ [Styles.containerMenu, Styles.containerDetail] }>
          <Image style={ Styles.icon } source={ Images.iconName } />
          <Text weight='italic' color={ Colors.ironsideGrey }>
            Versi Aplikasi - 0.1
          </Text>
          <Text
            weight='medium'
            color={ Colors.ironsideGrey }
            style={ { paddingTop: 10 } }>
            ?? 2022 PT. Blablabla
          </Text>
        </View>
      </ScrollView>
      <CustomModal
        type = 'choose'
        modalVisible={ modalVisible }
        titleOne='Apakah anda ingin keluar?'
        onCancel={ () => setModalVisible(false) }
        request={ () => setModalVisible(false) }
        onPress={ () => handleLogout() }
        textBtnCancel='Tidak'
        textBtnOk='Iya'
      />
    </View>
  );
};

export default Profile;
