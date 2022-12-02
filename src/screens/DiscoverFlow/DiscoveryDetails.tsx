import React, {useRef, useState, useEffect} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import styled from 'styled-components';
import CardDetails from '../../components/Card/CardDetails';
import CityCategoryDetail from '../../components/CityCategory/CityCategoryDetail';
import PageViewerDetail from '../../components/PageViewer/PageViewerDetail';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import {ENDPOINT} from '../../constants/EndPoint';
import axios from 'axios';
type DiscoveryProps = {
  onPress: any;
  navigation: any;
};

const Items = [
  {
    id: '1',
    name: 'Dubai: Old Town,Creek, Souks and Street Food Guided Tour',
    title: 'From US$ 17.55 per person',
    image:
      'https://cdn.pixabay.com/photo/2020/01/25/10/36/ferris-wheel-4792152__340.jpg',
  },

  {
    id: '2',
    name: 'Dubai: Old Town,Creek, Souks and Street Food Guided Tour',
    title: 'From US$ 17.55 per person',
  },
  {
    id: '3',
    name: 'Dubai: Old Town,Creek, Souks and Street Food Guided Tour',
    title: 'From US$ 17.55 per person',
  },
  {
    id: '4',
    name: 'Dubai: Old Town,Creek, Souks and Street Food Guided Tour',
    title: 'From US$ 17.55 per person',
  },
];
const Citys = [
  {text: 'New York City'},
  {text: 'Chicago'},
  {text: 'Las Vegas'},
  {text: 'Atlanta'},
  {text: 'Chicago'},
  {text: 'Las Vegas'},
  {text: 'Atlanta'},
];
const BookingDetails = ({navigation, onPress}: DiscoveryProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const refPagerView = useRef();

  const ParentView = styled.View({
    flex: 1,
    backgroundColor: '#fff',
  });

  const StyledView = styled.View({
    marginHorizontal: 20,
  });
  const StyledText = styled.Text({
    color: 'black',
    fontWeight: '600',
    fontSize: 25,
  });

  const CardContainer = styled.View({
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
  });

  const Cover = styled.View({
    width: '100%',
    height: 200,
    paddingBottom: 10,
    overflow: 'hidden',
  });

  const Image = styled.Image`
    width: 100%;
    height: 100%;
  `;

  return (
    <ParentView>
      <ScrollView>
        <SafeAreaView>
          <StatusBar />
          <CardContainer>
            <Cover>
              <Image
                source={require('../../assets/image2.jpeg')}
                resizeMode={'cover'}
              />
            </Cover>
            <StyledView>
              <StyledText>Our favorite experiences worldwide</StyledText>
            </StyledView>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                padding: 20,
                paddingLeft: 12,
                flexDirection: 'row',
              }}
              data={Items}
              renderItem={({item}) => (
                <CardDetails
                  name={item.name}
                  title={item.title}
                  onPress={() => navigation.navigate('CityDetails')}
                />
              )}
              keyExtractor={item => item.id}
            />

            <StyledView>
              <StyledText>
                Get beneath the surface of these destinations
              </StyledText>
            </StyledView>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                paddingLeft: 12,
              }}
              showsHorizontalScrollIndicator={false}>
              {Citys.map((item, index) => (
                <CityCategoryDetail name={item.text} key={index} />
              ))}
            </ScrollView>
            {/* <PAginationView>
              <PageViewerDetail />
            </PAginationView> */}
          </CardContainer>
        </SafeAreaView>
      </ScrollView>
    </ParentView>
  );
};

export default BookingDetails;
