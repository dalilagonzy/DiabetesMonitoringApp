import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import { CoachParamList } from '../types';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const CarouselCardItem = ({ item, index }: {item: CoachParamList, index: number}) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.name}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
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
  modalBody: {
    backgroundColor: "#FFF",
    alignContent: "center",
    margin: 40,
  },
  modalText: {

  },
})

export default CarouselCardItem