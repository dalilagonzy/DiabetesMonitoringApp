import React, {useState} from 'react'
import { StyleSheet, Image, TouchableOpacity, TextInput  } from 'react-native'
import { Text, View, ScrollView } from '../components/Themed';
import { TabFiveParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';


type ExerciseRecommendationsNavigationProps = StackNavigationProp<TabFiveParamList, "ExerciseRecommendationsScreen">;
interface ExerciseRecommendationsProps {
  navigation: ExerciseRecommendationsNavigationProps;
  recs: string,
}

const ExerciseRecommendations = (props: ExerciseRecommendationsProps) => {
    const recs = props.recs;

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMessage}> Welcome to your personalized exercise suggestions!
            </Text>

            <View style={styles.separator} />

            <Text style={styles.textNumber}> Exercise 1
            </Text>

            <Text style={styles.textStyle}> Exercise Name:
            </Text>

            <Text style={styles.textStyle}> Difficulty:
            </Text>

            <Text style={styles.textStyle}> Equipment Needed:
            </Text>

            <Image
            style={styles.stretch}
            source={require('../constants/Video.png')}
            />

            <View style={styles.miniSeparator} lightColor="#DA8EFF" darkColor="rgba(255,255,255,0.1)"/>

            <Text style={styles.textNumber}> Exercise 2
            </Text>

            <Text style={styles.textStyle}> Exercise Name:
            </Text>

            <Text style={styles.textStyle}> Difficulty:
            </Text>

            <Text style={styles.textStyle}> Equipment Needed:
            </Text>

            <Image
            style={styles.stretch}
            source={require('../constants/Video.png')}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
    },

    welcomeMessage: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '300',
     },

     separator: {
        marginVertical: 20,
        width: '80%',
      },

      miniSeparator: {
        marginVertical: 10,
        height: 3,
      },

    textNumber: {
       textAlign: 'left',
       fontSize: 25,
       color: '#DA8EFF',
    },

    textStyle: {
       textAlign: 'left',
       fontSize: 18,
       fontWeight: '300',
    },

    stretch: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
      },
})

export default ExerciseRecommendations