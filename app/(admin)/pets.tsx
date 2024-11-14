import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {mockData} from "@/constants/constants";
import ScrollAppView from "@/components/ScrollAppView";
import Header from "@/components/header/Header";
import AdoptScroll from "@/components/adopt/AdoptScroll";

const Pets = () => {
    const datas = mockData;

    const scrollEnabled = mockData.length >= 6;

    return (
        <ScrollAppView scrollEnabled={scrollEnabled}
                       contentContainerStyle={styles.container}>
            <View style={{alignItems: "center", flex: 1}}>
                <Header />
                <View>
                    <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
                </View>
                <Text style={{fontFamily: "kameron-bold", fontSize: 20, marginVertical: 10, alignSelf: "flex-start"}}>Manage Pet List</Text>
            </View>
            <AdoptScroll datas={datas} admin={true} />
        </ScrollAppView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 160
    },
    logo: {
        width: 90,
        height: 90,
        marginBottom: 8
    }
});

export default Pets;
