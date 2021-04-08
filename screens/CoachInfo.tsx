import React, {useState} from 'react'
import { Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { CoachParamList, TabFourParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type CoachInfoNavigationProps = StackNavigationProp<TabFourParamList, "CoachInfoScreen">;
interface CoachInfoProps {
  navigation: CoachInfoNavigationProps;
  data: CoachParamList,
}

const CoachInfo: React.FunctionComponent<CoachInfoProps> = (props) => {
    const { data } = props;
    return (
        <ScrollView>
            <Text>Hello!</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default CoachInfo
