import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed';
import { ProfileScreenParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenNavigationProps = StackNavigationProp<ProfileScreenParamList, "ProfileScreen">;
interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProps,
}

const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = (props) => {
    const { navigation } = props
    return (
        <View>
            <Text>This is an stand in profile page!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
})

export default ProfileScreen
