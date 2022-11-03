import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text} from 'components/';
import {NavigationHelper} from 'helpers/';
import Images from 'consts/Images';
import {Colors} from 'src/utils/colors';
import Styles from './style';
import {useSelector} from 'react-redux';

const Basic = ({title, size}) => {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.wrapperIcon}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => NavigationHelper.goBack()}>
          <Image style={{width: 25, height: 25}} source={Images.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={Styles.wrapperTitte}>
        <Text weight="semibold" color={Colors.darkerBlack} size={size}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const Home = () => {
  const auth = useSelector(state => state.auth.auth);

  return (
    <View style={Styles.header}>
      <View>
        <Text size="l" weight="semibold">
          Hi, {auth.USER_ID}
        </Text>
        <Text size="m">{auth.USER_ORIGIN}</Text>
      </View>
      <View style={Styles.divImage}>
        <Image source={Images.icon} style={Styles.image} />
      </View>
    </View>
  );
};

export default {Basic, Home};
