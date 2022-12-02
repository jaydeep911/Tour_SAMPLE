import React from 'react';
import {FlatList, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import styled from 'styled-components';
import CommonHeader from '../../components/Header/CommonHeader';
import Iconcheck from 'react-native-vector-icons/AntDesign';
import Iconwrong from 'react-native-vector-icons/AntDesign';
import Iconcircle from 'react-native-vector-icons/FontAwesome';
type ExperienceDetailsProps = {
  onPress: any;
  navigation: any;
};
const ExperienceDetails = ({navigation, onPress}: ExperienceDetailsProps) => {
  const ParentView = styled.View({
    flex: 1,
    backgroundColor: 'white',
  });
  const Container = styled.View({
    alignItems: 'center',
    justifyContent: 'center',
  });
  const StyledView = styled.View({
    padding: 10,
  });
  const StyledText = styled.Text({
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
    marginTop: 15,
    marginBottom: 17,
    marginLeft: 10,
    textAlign: 'left',
  });
  const StyledDetail = styled.Text({
    marginHorizontal: 15,
    marginVertical: 5,
    color: 'black',
    fontWeight: '300',
    fontSize: 17,
  });
  const KeyText = styled.Text({
    marginHorizontal: 15,
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
  });

  const StyledPromocode = styled.View({
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginTop: 15,
  });
  const Includes = styled.View({
    flexDirection: 'row',
    marginLeft: 15,
  });

  return (
    <ParentView>
      <ScrollView>
        <CommonHeader
          text={'Dubai'}
          imageType
          onPress={() => navigation.goBack()}
        />
        <Container>
          <StyledView>
            <StyledText>Highlights</StyledText>
            <Includes>
              <Iconcircle
                name="circle"
                size={12}
                color={'green'}
                style={{marginTop: 15}}
              />
              <StyledDetail>
                Listen to fascinating behind-the-scenes stories that made
                Broadway great
              </StyledDetail>
            </Includes>
            <Includes>
              <Iconcircle
                name="circle"
                size={12}
                color={'green'}
                style={{marginTop: 15}}
              />
              <StyledDetail>
                Listen to fascinating behind-the-scenes stories that made
                Broadway great
              </StyledDetail>
            </Includes>
            {/* <FlatList
                data={[
                  {
                    key: 'Listen to fascinating behind-the-scenes stories that made Broadway great',
                  },
                  {
                    key: 'Listen to fascinating behind-the-scenes stories that made Broadway great',
                  },
                  {
                    key: 'Learn insider perspectives on the audition process, and making it on Broadway',
                  },
                ]}
                renderItem={({item}) => (
                  <StyledDetail
                    style={{
                      padding: 1,
                      fontSize: 14,
                      height: 44,
                      marginVertical: 10,
                    }}>
                    {'\u2B24' + '  '}
                    {item.key}
                  </StyledDetail>
                )}
              /> */}

            <StyledPromocode />
            <StyledText>Full description</StyledText>
            <StyledDetail>
              Explore Broadway's backstage on a 1 hour and 45 minute walking
              tour of New York's famous Theater District! Discover not only the
              fascinating history of Broadway, but behind-the-scenes stories
              that brought the unforgettable productions to life. Accompanied by
              a professional actor guide, you'll also learn the secrets behind
              historic theaters from an insider's perspective, how the audition
              process works, and the tricks of making it in the business. Learn
              the story that created Times Square; from its origins as a horse
              trading district, to its transformation into the stage
              entertainment capital of the world! Trace the evolution of
              theaters after the Great Depression into the radio, and television
              studios of today – including where the Tonight Show first aired.
              Walk the edge of the notorious Hell's Kitchen, and hear how a
              'Real' West Side Story took place just blocks from the theater
              where it was playing. The tour also highlights the stories behind
              places such as Shubert Alley, 42nd Street, The Edison Hotel,
              'Smoky Mary's' church, and the George M. Cohan statue – as well as
              a few surprises along the way! Whether you're a serious student of
              the theater or someone who has never seen a Broadway show, this
              interactive tour will educate and entertain you!
            </StyledDetail>
            <StyledPromocode />
            <StyledText>Cancellation Policy</StyledText>
            <StyledDetail>
              Cancel up to 24 hours in advance to recieve a full refund.
            </StyledDetail>
            <StyledPromocode />
            <StyledText>Includes</StyledText>
            <Includes>
              <Iconcheck
                name="check"
                size={20}
                color={'green'}
                style={{marginRight: 4, marginTop: 5}}
              />
              <StyledDetail>Access to Times Square</StyledDetail>
            </Includes>
            <Includes>
              <Iconwrong
                name="close"
                size={20}
                color={'red'}
                style={{marginRight: 4, marginTop: 5}}
              />
              <StyledDetail>Live tour guide</StyledDetail>
            </Includes>
            <StyledPromocode />
            <StyledText>Spot Details</StyledText>
            <StyledDetail></StyledDetail>
            {/* <StyledPromocode />
            <StyledText>Important information</StyledText> */}
            {/* <KeyText
              style={{
                fontSize: 14,
              }}>
              Know before you go
            </KeyText> */}
            {/* <Includes>
              <Iconcircle
                name="circle"
                size={12}
                color={'green'}
                style={{marginTop: 15}}
              />
              <StyledDetail>
                Listen to fascinating behind-the-scenes stories that made
                Broadway great
              </StyledDetail>
            </Includes> */}
            {/* <FlatList
                data={[
                  {
                    key: 'Listen to fascinating behind-the-scenes stories that made Broadway great',
                  },
                ]}
                renderItem={({item}) => (
                  <StyledDetail
                    style={{
                      padding: 1,
                      fontSize: 14,
                      height: 44,
                      marginVertical: 10,
                    }}>
                    {'\u2B24' + '  '}
                    {item.key}
                  </StyledDetail>
                )}
              /> */}
            {/* </StyledDetail> */}
          </StyledView>
        </Container>
      </ScrollView>
    </ParentView>
  );
};

export default ExperienceDetails;
