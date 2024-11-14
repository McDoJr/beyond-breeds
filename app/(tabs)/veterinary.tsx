import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ScrollAppView from "@/components/ScrollAppView";
import Header from "@/components/header/Header";
import {InfoCardProp} from "@/components/InfoCard";
import InfoGroup from "@/components/InfoGroup";

const Veterinary = () => {

    const datas: InfoCardProp[] = [
        {
            labels: ["House for Paws", "Butuan City"],
            button: "View",
            image: require("@/assets/images/img1.png")
        },

    ]

    const datas2: InfoCardProp[] = [
        {
            labels: ["Butuan Veterinary", "Clinic"],
            button: "View",
            image: require("@/assets/images/img2.png")
        },
        {
            labels: ["Pet Matters Animal", "Clinic", "GP Butuan"],
            button: "View",
            image: require("@/assets/images/img3.png")
        },
        {
            labels: ["Pet Matters Animal", "Clinic", "GP Butuan"],
            button: "View",
            image: require("@/assets/images/img3.png")
        },
        {
            labels: ["Pet Matters Animal", "Clinic", "GP Butuan"],
            button: "View",
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
            }}>Pet Center & Clinic's</Text>
            <InfoGroup title="Adoption Center" datas={datas} />
            <InfoGroup title="Clinic" datas={datas2} />
        </ScrollAppView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingBottom: 160
    }
});

export default Veterinary;
