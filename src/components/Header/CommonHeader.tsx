import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
type HeaderProps = {
  onPress?: any;
  text?: string;
  imageType?: boolean;
  isRequired?: boolean;
  flexNumber?: number;
  isSearch?: boolean;
  isClose?: boolean;
};

const CommonHeader = ({
  onPress,
  text,
  imageType,
  isRequired,
  isSearch,
  isClose,
}: HeaderProps) => {
  const flexNumber = isRequired === true ? 1 : 0;
  return (
    <View style={styles.mainHeaderView}>
      <SafeAreaView style={styles.safeAreaColor} />
      <View style={[styles.iconView, {flex: flexNumber}]}>
        {imageType === true && (
          <Icon
            name="arrow-back"
            size={30}
            color={Colors.colorBlack}
            onPress={onPress}
          />
        )}
        <Text style={styles.headerText}>{text}</Text>
        {isSearch === true && (
          <Icon
            name="search-outline"
            size={25}
            color={Colors.colorWhite}
            onPress={onPress}
          />
        )}
        {isClose === true && (
          <Icon
            name="close-sharp"
            size={27}
            color={Colors.colorWhite}
            onPress={onPress}
            style={styles.closeIcon}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    color: Colors.colorBlack,
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
  },
  iconView: {
    flexDirection: 'row',
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  closeIcon: {
    alignContent: 'flex-start',
    marginLeft: 120,
    marginRight: 15,
  },
  mainHeaderView: {},
  safeAreaColor: {},
});

export default CommonHeader;
