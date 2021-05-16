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

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
})

export default ExerciseRecommendations