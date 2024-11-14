import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ScrollAppView from "@/components/ScrollAppView";
import Header from "@/components/header/Header";
import UserCard, {UserCardProps} from "@/components/users/UserCard";

const Users = () => {

    const datas: UserCardProps[] = [
        {
            adopter: "Devon Jasper",
            request_date: "August 13, 2024",
            email: "jasper@gmail.com"
        },
        {
            adopter: "Nielmar Pantin",
            request_date: "August 30, 2024",
            email: "nielmar@gmail.com"
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
            }}>Manage Users</Text>
            <View style={{
                width: "100%",
                flex: 1,
                gap: 20
            }}>
                {datas.map((data, index) => <UserCard {...data} key={index} />)}
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

export default Users;
