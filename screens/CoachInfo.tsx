import React, {useState} from 'react'
import { StyleSheet, Image, TouchableOpacity, TextInput  } from 'react-native'
import { Text, View, ScrollView } from '../components/Themed';
import { TabFourParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { withTheme } from 'react-native-elements';

type CoachInfoNavigationProps = StackNavigationProp<TabFourParamList, "CoachInfoScreen">;
interface CoachInfoProps {
  navigation: CoachInfoNavigationProps;
  coach: string,
}

const CoachInfo = (props: CoachInfoProps) => {
    const coach = props.coach;
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Susan White</Text>
            <Text style={styles.rightBubble}>How does this work?</Text>
            <Text style={styles.leftBubble}>I’m glad you asked! You can message me here anytime you have a question or need support</Text>
            <Text style={styles.rightBubble}>Great. I want to make a healthy choice this morning. What should I eat for breakfast?</Text>
            <Text style={styles.leftBubble}>How about scrambled eggs with veggies? It’s low-carb and should fill you up without spiking your blood sugar.</Text>
            <View style={styles.inputDiv}>
                <TextInput 
                style={styles.input} 
                placeholder="Type your message..."/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
    header: {
        fontSize: 25,
        padding: 10,
    },
    leftBubble: {
        alignSelf: "flex-start",
        backgroundColor: "#51D0EC",
        width: "75%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 20,
    },
    rightBubble: {
        alignSelf: "flex-end",
        width: "75%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: "white",
        borderRadius: 20,
        backgroundColor: "#d3d3d3",
    },
    input: {
        bottom: "0%",
        width: "100%",
        backgroundColor: "#d3d3d3",
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginTop: "57%",
        position: "relative",
    },
    inputDiv: {

    }
})

export default CoachInfo
