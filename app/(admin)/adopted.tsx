import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ScrollAppView from "@/components/ScrollAppView";
import Header from "@/components/header/Header";
import AdoptedCard, {AdoptedCardProps} from "@/components/adopted/AdoptedCard";

const Adopted = () => {

    const datas: AdoptedCardProps[] = [
        {
            image: require("@/assets/images/adonis.png"),
            adopter: "Devon Jasper",
            message: "Just brought this wonderful pup home, and my heart is already overflowing! Can’t wait to make so many happy memories together. Here’s to new beginnings and endless wagging tails"
        },
        {
            image: require("@/assets/images/scrubby.png"),
            adopter: "Nielmar Bano",
            message: "Our new furry friend has officially joined the family! Can’t wait for all the adventures and snuggles ahead. 🐾❤️"
        },
        {
            image: require("@/assets/images/blacky.png"),
            adopter: "Royce Arpon",
            message: "Just brought this charming kitty home, and our hearts are already purring with joy! Can’t wait for all the cozy cuddles and playful moments ahead."
        },
        {
            image: require("@/assets/images/drew.png"),
            adopter: "Jeff Guduyo",
            message: "Our new kitty has arrived, and we’re smitten! Looking forward to discovering all the quirks and joys of our newest family member."
        }
    ]

    return (
        <ScrollAppView scrollEnabled={datas.length > 4} contentContainerStyle={styles.container}>
            <Header />
            <View>
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
            </View>
            <Text style={{
                fontFamily: "kameron-bold",
                fontSize: 20,
                alignSelf: "flex-start",
                marginVertical: 10
            }}>Pet Adopted</Text>
            <View style={{
                width: "100%",
                flex: 1,
                gap: 20
            }}>
                {datas.map((data, index) => <AdoptedCard {...data} key={index} />)}
            </View>
        </ScrollAppView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 160,
        alignItems: "center"
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 8
    }
});

export default Adopted;
