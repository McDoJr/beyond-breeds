import {Image, ImageRequireSource, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {AntDesign, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

export type UserCardProps = {
    image?: ImageRequireSource,
    adopter: string,
    "request_date": string,
    email: string
}

const UserCard = ({ image, adopter, request_date, email }: UserCardProps) => {

    const getImage = () => {
        return !image ? <FontAwesome5 name="user-alt" size={30} /> : <Image source={image} style={{width: 60, height: 60}} />
    }

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
                height: "100%",
                justifyContent: "space-between"
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <View style={{width: 110}}>
                        <Text style={[styles["text-heading"]]}>Name</Text>
                        <Text style={[styles.text]}>{adopter}</Text>
                    </View>
                    <View style={{width: 110}}>
                        <Text style={[styles["text-heading"]]}>Date</Text>
                        <Text style={[styles.text]}>{request_date}</Text>
                    </View>
                </View>
                <View>
                    <Text style={[styles["text-heading"]]}>Email</Text>
                    <Text style={[styles.text]}>{email}</Text>
                </View>
            </View>
            <View style={{
                display: "flex",
                width: 50,
                height: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: "auto",
                gap: 5
            }}>
                <Text style={[styles["text-heading"], {marginBottom: "auto"}]}>Action</Text>
                <AntDesign name="delete" size={15} />
                <MaterialIcons name="block" size={15} />
                <Ionicons name="stats-chart-sharp" style={{marginBottom: "auto"}} size={15} />
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
    },
    "text-heading": {
        fontFamily: "kanit-bold",
        fontSize: 14
    },
    text: {
        fontFamily: "kanit-light",
        fontSize: 14
    }
});

export default UserCard;
