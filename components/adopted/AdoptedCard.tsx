import {Image, ImageRequireSource, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {IOS} from "@/constants/constants";

export type AdoptedCardProps = {
    image?: ImageRequireSource,
    adopter?: string,
    message: string
}

const AdoptedCard = ({ image, adopter, message }: AdoptedCardProps) => {


    const limit = IOS ? 95 : 80;
    const end = Math.min(message.length, limit);

    const trimmedMessage = message?.substring(0, end-1) + (message.length > limit ? "...more" : "");

    return (
        <View style={styles.container}>
            <View style={{
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image source={image} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "gray"
                }} />
            </View>
            <View style={{
                flex: 1,
                gap: 5,
                padding: 10
            }}>
                <Text style={{
                    fontFamily: "kanit-bold",
                    fontSize: 18
                }}>{adopter}</Text>
                <Text style={{
                    fontFamily: "kanit-light"
                }}>{trimmedMessage}</Text>
            </View>
            <View style={{
                paddingRight: 10
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "#29B637",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20
                }}>
                    <Text style={{
                        fontFamily: "kameron-bold",
                        fontSize: 8,
                        color: "#29B637",
                        transform: [{rotate: "30deg"}]
                    }}>Adopted</Text>
                    <Image source={require("@/assets/images/blackPaw.png")} style={{
                        position: "absolute",
                        bottom: -8
                    }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",

        // iOS Shadow Properties
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // Android Shadow (elevation)
        elevation: 5,
    }
});

export default AdoptedCard;
