// this is the chat with a coach page

import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native';

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/carouselCardItem';
import { Text, View, ScrollView } from '../components/Themed';
import coaches from '../coaches';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabFourParamList } from '../types';

type TabFourNavigationProps = StackNavigationProp<TabFourParamList, "TabFourScreen">;
interface TabFourScreenProps {
  navigation: TabFourNavigationProps;
}

const TabFourScreen: React.FunctionComponent<TabFourScreenProps> = (props) => {
  const {navigation} = props
  const isCarousel = React.useRef(null)
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
      <TouchableOpacity
        style={styles.toggleBtn}
        onPress={() => {navigation.navigate("CoachInfoScreen", )}}
      >
        <Text style={styles.toggleBtnText}>Click to choose</Text>
      </TouchableOpacity>
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
    backgroundColor: "#51D0EC",
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
    color: "#fff",
  },
  carouselContainer: {
    paddingBottom: 20,
  },
  toggleBtn: {
    backgroundColor: "#51D0EC",
    alignContent: "center",
    paddingVertical: 5,
    borderRadius: 8,
    marginHorizontal: 30,
    marginVertical: 10,
    paddingBottom: 10,
  },
  toggleBtnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF"
  },
});

export default TabFourScreen
