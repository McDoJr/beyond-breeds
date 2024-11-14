import {Image, ImageRequireSource, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {AntDesign, Entypo, Feather, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

export type RequestCardProps = {
    image?: ImageRequireSource,
    adopter: string
}

const UserCard = ({ image, adopter }: RequestCardProps) => {

    const getImage = () => {
        return !image ? <FontAwesome5 name="user-alt" size={30} /> : <Image source={image} style={{width: 60, height: 60}} />
    }

    const getIcon = (icon: React.ReactNode, backgroundColor: string) => {
        return (
            <TouchableOpacity style={{
                width: 22,
                height: 22,
                borderRadius: 11,
                backgroundColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {icon}
            </TouchableOpacity>
        )
    }

    const message = `${adopter} just sent new request for pet adoption listing. Please review the details.`;

    return (
        <View style={styles.container}>
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 66,
                height: 66,
                borderRadius: 33,
                marginRight: 10,
                borderWidth: 1,
                borderColor: "#000"
            }}>
                {getImage()}
            </View>
            <View style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
            }}>
                {/*<Text style={[styles.text]}>{adopter}</Text>*/}
                <Text style={styles.text}>{message}</Text>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                right: 20,
                bottom: 10,
                gap: 10
            }}>
                {getIcon(<Entypo name="check" size={15} />, "#44E94B")}
                {getIcon(<Entypo name="minus" size={15} />, "#FA5252")}
                {getIcon(<Feather name="settings" size={15} />, "#c2c1c1")}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        padding: 10,

        // iOS Shadow Properties
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // Android Shadow (elevation)
        elevation: 5,
        position: "relative"
    },
    "text-heading": {
        fontFamily: "kanit-bold",
        fontSize: 12
    },
    text: {
        fontFamily: "kanit-light",
        fontSize: 13
    }
});

export default UserCard;
