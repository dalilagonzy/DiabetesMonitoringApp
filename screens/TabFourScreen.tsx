// this is the chat with a coach page

import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/carouselCardItem';
import { Text, View } from '../components/Themed';
import coaches from '../coaches';

export default function TabThreeScreen() {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  return (
    <ScrollView style={styles.container}>
      <View>
      <View style={styles.welcomeContainer}>
        <Text
          style={styles.welcomeText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Welcome! On the coach page, you can contact a certified coach to ask general questions such as recommendations for meals, exercise or even for support!
        </Text>
      </View>
      <View style={styles.getStartedContainer} >
        <Text style={styles.getStartedText}>
          To get started, choose one of the coaches below! Click on their pictures to learn more about them.
        </Text>
      </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={coaches}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginHorizontal: 25,
    paddingTop: 15,
  },
  welcomeText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  getStartedContainer: {
    marginTop: 30,
    backgroundColor: "#D9EAFD",
    borderRadius: 30,
    marginHorizontal: 25,
    margin: 20,
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 17,
    marginHorizontal: 20,
    marginVertical: 12,
    textAlign: 'center',
    color: "#000",
  },
  carouselContainer: {
    paddingBottom: 20,
  }
});
