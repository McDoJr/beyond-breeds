import {Image, ImageRequireSource, StyleSheet, Text, View, ViewProps} from 'react-native'
import React from 'react'
import Button from "@/components/Button";

export type InfoCardProp = {
    labels: string[],
    image?: ImageRequireSource,
    button: string
}

const InfoCard = ({ labels, image, button, style, ...props }: InfoCardProp & ViewProps) => {
    return (
        <View style={[styles.container, style]} {...props} >
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                height: "100%",
                width: 140,
            }}>
                <Image source={image} style={{
                    width: 100,
                    height: 90,
                    borderWidth: 1,
                    borderColor: "gray"
                }} />
            </View>
            <View style={{
                position: "relative",
                flex: 1,
                justifyContent: "center"
            }}>
                {labels.map((label, index) => <Text style={{
                    fontFamily: "kameron-bold",
                    fontSize: 18
                }} key={index}>{label}</Text>)}
                <Button style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10
                }}>{button}</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150,
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: "gray",
        backgroundColor: "#CECECE"
    }
});

export default InfoCard;
