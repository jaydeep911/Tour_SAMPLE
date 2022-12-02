import React, {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

const PageViewerDetail = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const refPagerView = useRef();

  return (
    <View style={{flex: 1}}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        ref={refPagerView}
        onPageSelected={event => {
          setCurrentPosition(event.nativeEvent.position);
        }}>
        <View key="0">
          <Text style={styles.title}>Time Blocking?</Text>
        </View>
        <View key="1">
          <Text style={styles.title}>How does it work?</Text>
        </View>
        <View key="2">
          <Text style={styles.title}>How does it work?</Text>
        </View>
      </PagerView>
      <View style={styles.dots}>
        <Dots
          marginHorizontal={6}
          passiveColor={'red'}
          activeColor={'blue'}
          length={3}
          active={currentPosition}
        />
      </View>
    </View>
  );
};
export default PageViewerDetail;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    color: 'white',
    backgroundColor: 'blue',
  },
  title: {
    marginTop: 140,
    fontSize: 20,
    fontWeight: '100',
    textAlign: 'center',
  },

  text: {
    color: 'white',
  },

  dots: {
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    marginBottom: 30,
  },
});
