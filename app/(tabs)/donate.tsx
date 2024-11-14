import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ScrollAppView from "@/components/ScrollAppView";
import Header from "@/components/header/Header";
import {InfoCardProp} from "@/components/InfoCard";
import InfoGroup from "@/components/InfoGroup";

const Donate = () => {

    const datas: InfoCardProp[] = [
        {
            labels: ["House for Paws", "Butuan City"],
            button: "Donate",
            image: require("@/assets/images/img1.png")
        },
        {
            labels: ["Butuan Veterinary", "Clinic"],
            button: "Donate",
            image: require("@/assets/images/img2.png")
        },
        {
            labels: ["Pet Matters Animal", "Clinic", "GP Butuan"],
            button: "Donate",
            image: require("@/assets/images/img3.png")
        }

    ]

    return (
        <ScrollAppView contentContainerStyle={styles.container}>
            <Header />
            <Text style={{
                fontFamily: "kameron-bold",
                fontSize: 24,
                marginTop: 20
            }}>Donation Support</Text>
            <InfoGroup title="Adoption Center" datas={datas} />
        </ScrollAppView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingBottom: 160
    }
});

export default Donate;
