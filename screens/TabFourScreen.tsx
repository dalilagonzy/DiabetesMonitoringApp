// this is the chat with a coach page

import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel'

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/carouselCardItem';
import { Text, View, ScrollView } from '../components/Themed';
import coaches from '../coaches';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabFourParamList } from '../types';
import DropDownPicker from 'react-native-dropdown-picker';

type TabFourNavigationProps = StackNavigationProp<TabFourParamList, "TabFourScreen">;
interface TabFourScreenProps {
  navigation: TabFourNavigationProps;
}

var coachChosen = "";

const TabFourScreen: React.FunctionComponent<TabFourScreenProps> = (props) => {
  const { navigation } = props
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

      <View style={styles.dropdownBox}>
        <DropDownPicker
          items={[
            { label: 'Example 1', value: 'ch1' },
            { label: 'Person 2', value: 'ch2' },
            { label: 'Person 3', value: 'ch3' },
            { label: 'Person 4', value: 'ch4' }
          ]}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdownStyles}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => {
            coachChosen = item.label;
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.toggleBtn}
        onPress={() => { navigation.navigate("CoachInfoScreen",) }}
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
    paddingBottom: 10,
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
  dropdownBox: {
    alignItems: 'center',
  },
  dropdownContainer: {
    height: 40,
    width: Math.round(SLIDER_WIDTH * 0.8),
    alignItems: 'center',
    flex: 1,
  },
  dropdownStyles: {
    backgroundColor: '#fafafa',
  },
});

export default TabFourScreen
