import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components';

const App = () => {
  const ParentView = styled.View({
    flex: 1,
  });
  const Container = styled.View({
    alignItems: 'center',
    justifyContent: 'center',
  });
  const StyledView = styled.View({
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
  });
  const StyledText = styled.Text({
    color: 'black',
    fontWeight: '400',
    fontSize: 19,
  });
  const StyledDetail = styled.Text({
    top: 20,
    color: 'black',
    fontWeight: '200',
    fontSize: 13,
  });

  return (
    <ParentView>
      <SafeAreaView>
        <StatusBar />
        <Container>
          <StyledView>
            <StyledText>Delight Tours</StyledText>
            <StyledDetail>
              India Tour - Delight Tours is an leading India Travel and Tour
              agency that offers luxurious India Travel Tour Package, Trip
              Holiday Vacation, North India Tours &amp; Travels Packages Trips
              Holidays, South And North India Tour
            </StyledDetail>
          </StyledView>
        </Container>
      </SafeAreaView>
    </ParentView>
  );
};

export default App;
