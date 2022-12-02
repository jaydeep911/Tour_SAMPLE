import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import CommonHeader from '../../components/Header/CommonHeader';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconcalendar from 'react-native-vector-icons/MaterialCommunityIcons';
import CityCategoryDetail from '../../components/CityCategory/CityCategoryDetail';

type CityDetailsProps = {
  onPress: any;
  navigation: any;
};
const CityDetails = ({navigation, onPress}: CityDetailsProps) => {
  const ParentView = styled.View({
    flex: 1,
    backgroundColor: 'white',
  });
  const Container = styled.View({
    padding: 10,
  });
  const StyledView = styled.View({
    // backgroundColor: 'yellow'
  });
  const SubContainer = styled.View({
    paddingBottom: 400,
  });
  const StyledDetail = styled.Text({
    marginVertical: 7,
    color: 'black',
    fontWeight: '300',
    fontSize: 14,
  });
  const Header = styled.View({});

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
  const Ratingstar = styled.View({
    marginTop: 13,
    flexDirection: 'row',
  });

  const ReviewText = styled.Text({
    fontSize: 14,
    color: 'blue',
    marginVertical: 10,
  });

  const BookingText = styled.Text({
    color: 'green',
    fontWeight: '500',
    fontSize: 14,
    marginVertical: 10,
  });

  const Description = styled.Text({
    color: 'black',
    fontSize: 16,
    marginVertical: 10,
  });

  const Activity = styled.View({});

  const ActCaption1 = styled.Text({
    color: 'black',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 10,
  });
  const ActCaption = styled.Text({
    marginVertical: 20,
    color: 'black',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 10,
    paddingBottom: 10,
  });

  const ActContainer = styled.View({
    flexDirection: 'row',
  });

  const ActIcon = styled.Text({marginVertical: 7});

  const ActSubCont = styled.View({
    marginVertical: 7,
    flexDirection: 'column',
    marginRight: 15,
  });
  const ActCap = styled.Text({
    marginHorizontal: 22,
    fontSize: 14,
    fontWeight: '600',
  });
  const ActSubHeading = styled.Text({
    marginHorizontal: 25,
    fontSize: 13,
    fontWeight: '400',
  });
  const ExpContainer = styled.View({
    flexDirection: 'row',
    marginLeft: 6,
    marginVertical: 8,
  });

  const ExpCaption = styled.Text({
    flex: 1,
    marginHorizontal: 22,
    fontSize: 15,
    fontWeight: '600',
  });

  const StyledPromocode = styled.View({
    borderBottomWidth: 1,
    borderColor: 'grey',
    margin: 5,
  });

  const CustomerReviews = styled.View({
    justifyContent: 'center',
    alignItems: 'center',
  });

  const CusText = styled.Text({
    marginVertical: 20,
    color: 'black',
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 10,
  });

  const starArray = [...Array(5).keys()].map(i => i + 1);
  const Rating = ({}) =>
    starArray.map(i => (
      <Iconstar
        key={i}
        name="star"
        size={20}
        color={'#FDD938'}
        style={{marginRight: 4}}
      />
    ));

  return (
    <ParentView>
      <CommonHeader
        text={'Dubai'}
        imageType
        onPress={() => navigation.goBack()}
      />
      <Header>
        <Cover>
          <Image
            source={require('../../assets/image2.jpeg')}
            resizeMode={'cover'}
          />
        </Cover>
        {/* <CarouselCards /> */}
      </Header>
      <Container>
        <StyledView>
          <ActCaption1>
            Dubai: Old Town,Creek, Souks and Street Food Guided Tour
          </ActCaption1>
        </StyledView>

        <ScrollView showsVerticalScrollIndicator={false}>
          <SubContainer>
            <StyledDetail>
              Activity provider: Inside Broadway Tours
            </StyledDetail>
            <Ratingstar>
              <Rating />
            </Ratingstar>
            <ReviewText>256 reviews</ReviewText>
            <BookingText>Booked 35 times yesterday</BookingText>
            <Description>
              Discover Broadway's backstage stories on a walking tour of New
              York's famous Theater District! Learn captivating
              behind-the-scenes history led by a Broadway actor guide, as you
              stroll along 42nd street, Hell's Kitchen, Shubert Alley, and more.
            </Description>
            <Activity>
              <ActCaption>About the activity</ActCaption>
              <ActContainer>
                <ActIcon>
                  <Iconcalendar
                    name="calendar-clock-outline"
                    size={29}
                    color={'#000'}
                    style={{margin: 1}}
                  />
                </ActIcon>
                <ActSubCont>
                  <ActCap>Free cancellation</ActCap>
                  <ActSubHeading>
                    Cancel up to 24 hours in advance to receive a full refund
                  </ActSubHeading>
                </ActSubCont>
              </ActContainer>
            </Activity>

            <ActCaption>Experience</ActCaption>
            <ExpContainer>
              <ExpCaption>Highlights</ExpCaption>
              <TouchableOpacity
                onPress={() => navigation.navigate('ExperienceDetails')}>
                <Iconstar
                  name="right"
                  size={20}
                  color={'#000'}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            </ExpContainer>
            <StyledPromocode />

            <ActCaption>Prepare for the activity</ActCaption>
            <ExpContainer>
              <ExpCaption>Important information</ExpCaption>
              <StyledPromocode />
              <TouchableOpacity
                onPress={() => navigation.navigate('ExperienceDetails')}>
                <Iconstar
                  name="right"
                  size={20}
                  color={'#000'}
                  style={{marginRight: 10}}
                />
              </TouchableOpacity>
            </ExpContainer>
            <StyledPromocode />

            <ActCaption>You might also like...</ActCaption>
            <CityCategoryDetail />
            <CustomerReviews>
              <CusText>Customer reviews</CusText>
              <Ratingstar>
                <Rating />
              </Ratingstar>
              <Description>256 reviews from verified customers</Description>
            </CustomerReviews>
          </SubContainer>
        </ScrollView>
      </Container>
    </ParentView>
  );
};

export default CityDetails;
