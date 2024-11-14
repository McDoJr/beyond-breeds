import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ScrollAppView from "@/components/ScrollAppView";
import Header from "@/components/header/Header";
import RequestCard, {RequestCardProps} from "@/components/requests/RequestCard";

const Requests = () => {
    const datas: RequestCardProps[] = [
        {
            adopter: "Devon Jasper"
        },
        {
            adopter: "Nielmar Pantin"
        }
    ]

    return (
        <ScrollAppView contentContainerStyle={styles.container}>
            <Header />
            <View>
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
            </View>
            <Text style={{
                fontFamily: "kameron-bold",
                fontSize: 20,
                alignSelf: "flex-start",
                marginVertical: 10
            }}>Manage Requests</Text>
            <View style={{
                width: "100%",
                flex: 1,
                gap: 20
            }}>
                {datas.map((data, index) => <RequestCard {...data} key={index} />)}
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

export default Requests;
