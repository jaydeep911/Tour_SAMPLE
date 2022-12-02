import React from 'react';
import styled from 'styled-components';

const CityCategoryDetail = props => {
  const Container = styled.View`
    background: #fff;
    height: 200px;
    width: 150px;
    border-radius: 14px;
    margin: 18px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  `;

  const Cover = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 14px;
    overflow: hidden;
  `;

  const Image = styled.Image`
    width: 100%;
    height: 100%;
  `;

  const Content = styled.View({
    position: 'absolute',
    bottom: 10,
    left: 14,
    right: 0,
  });

  const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  `;

  return (
    <Container>
      <Cover>
        <Image
          source={require('../../assets/image2.jpeg')}
          resizeMode={'cover'}
        />
      </Cover>
      <Content>
        <Title>{props.name}</Title>
      </Content>
    </Container>
  );
};
export default CityCategoryDetail;
