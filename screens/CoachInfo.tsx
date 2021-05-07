import React, {useState} from 'react'
import { Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TabFourParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type CoachInfoNavigationProps = StackNavigationProp<TabFourParamList, "CoachInfoScreen">;
interface CoachInfoProps {
  navigation: CoachInfoNavigationProps;
  coach: string,
}

const CoachInfo = (props: CoachInfoProps) => {
    const coach = props.coach;
    return (
        <ScrollView>
            <Text>Hello!</Text>
            <Text>{coach}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default CoachInfo
