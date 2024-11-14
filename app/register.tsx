import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import AppView from "@/components/AppView";
import {Colors} from "@/constants/Colors";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import {Feather, FontAwesome, Fontisto} from "@expo/vector-icons";
import Button from "@/components/Button";
import {router, useLocalSearchParams} from "expo-router";

const Register = () => {

    return (
        <AppView style={styles.container}>
            <View style={{
                paddingTop: 40,
                width: "70%",
                alignItems: "center"
            }}>
                <Feather name="x-circle" size={25} style={{alignSelf: "flex-end"}}
                         onPress={() => router.push("/")} />
                <Image source={require("@/assets/images/logo.png")} resizeMode="contain" style={styles.logo} />
            </View>
            <Text style={{
                fontFamily: "inika-bold",
                fontSize: 20,
                marginTop: 40
            }}>Sign Up</Text>
            <Form style={{
                marginTop: 40
            }}>
                <FormInput icon={<Fontisto name="email" size={16} color="gray" />} >Email</FormInput>
                <FormInput icon={<FontAwesome name="lock" size={16} color="gray" />} containerStyle={{
                    marginTop: 20
                }} >Password</FormInput>
                <FormInput icon={<FontAwesome name="lock" size={16} color="gray" />} containerStyle={{
                    marginTop: 20
                }} >Confirm Password</FormInput>
                <Button style={{paddingHorizontal: 40, marginTop: 40, backgroundColor: "#DEE3DE"}}>Confirm</Button>
            </Form>
        </AppView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    logo: {
        width: 150,
        height: 150
    }
});

export default Register;
