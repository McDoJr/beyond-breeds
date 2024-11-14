import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {AdoptDetails, PetData} from "@/constants/types";
import {router} from "expo-router";

const AdoptItem = ({ admin = false, ...petData }: {admin?: boolean} & PetData) => {

    const { name, breed, age, image} = petData;

    const handlePress = () => {
        router.push({
            pathname: "/popups/pet-details",
            params: {data: JSON.stringify(petData)}
        });
    }

    return (
        <TouchableOpacity style={{
            display: "flex",
            position: "relative"
        }} onPress={handlePress}>
            <View>
                <Image source={typeof image === "string" ? {uri: image} : image} style={{
                    width: 160,
                    height: 220,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} />
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    backgroundColor: "#ACA3A3"
                }}>
                    <View style={{
                        borderRightWidth: 1,
                        borderColor: "gray",
                        padding: 5,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{fontFamily: "kameron-bold"}}>{name}</Text>
                    </View>
                    <View style={{
                        padding: 5,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{fontFamily: "kameron-bold"}}>{breed}</Text>
                        <Text style={{fontFamily: "kameron-bold"}}>{age}</Text>
                    </View>
                </View>
            </View>
            {admin && (
                <View style={{
                    backgroundColor: "#D573EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 5
                }}>
                    <Text style={{
                        fontFamily: "kameron-bold"
                    }}>Manage Pet</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({});

export default AdoptItem;
