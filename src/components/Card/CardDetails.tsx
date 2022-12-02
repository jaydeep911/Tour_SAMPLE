import React from 'react';
import styled from 'styled-components';
import Icons from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

const CardDetails = (props: {name: any; title: any}) => {
  const Container = styled.View({
    height: 320,
    width: 320,
  });
  const Card = styled.View`
    background: #fff;
    height: 300px;
    width: 300px;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  `;

  const Cover = styled.View`
    width: 100%;
    height: 180px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  `;

  const Image = styled.Image({
    height: '100%',
    width: '100%',
  });

  const Content = styled.View`
    padding-top: 10px;
    flex-direction: column;
    padding: 10px;
    height: 60px;
  `;

  const Title = styled.Text({
    color: '#3c4560',
    fontSize: 16,
    fontWeight: '700',
  });

  const PriceCaption = styled.Text({
    color: '#F65534',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  });

  const Ratingstar = styled.View({
    flexDirection: 'row',
  });

  const starArray = [...Array(5).keys()].map(i => i + 1);
  const Rating = ({}) =>
    starArray.map(i => (
      <Icons
        key={i}
        name="star"
        size={20}
        color={'#FDD938'}
        style={{margin: 1}}
      />
    ));

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Container>
        <Card>
          <Cover>
            <Image source={require('../../assets/image3.jpeg')} />
          </Cover>
          <Content>
            <Title>{props.name}</Title>
            <Ratingstar>
              <Rating />
            </Ratingstar>
            <PriceCaption>{props.title}</PriceCaption>
          </Content>
        </Card>
      </Container>
    </TouchableOpacity>
  );
};
export default CardDetails;
