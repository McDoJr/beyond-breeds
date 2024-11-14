import AppView from "@/components/AppView";
import {Image, View, Text, StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import {FontAwesome, Fontisto} from "@expo/vector-icons";
import LinkText from "@/components/LinkText";
import Button from "@/components/Button";
import {router} from "expo-router";
import {useState} from "react";
import {LoginDetails} from "@/constants/types";

export default function LandingPage() {

    const [formData, setFormData] = useState<LoginDetails>({
        email: "",
        password: ""
    });


    const handleSubmit = () => {

        const {email, password} = formData;

        if(email === "admin" && password === "1234") {
            router.push("/(admin)/pets");
            return;
        }

        router.push("/(tabs)/adopt");
    }

    const handleChange = (name: string, text: string) => {
        setFormData(prevState => ({...prevState, [name]: text}))
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
            </View>
            <Text style={{fontFamily: "inika", fontSize: 18, marginTop: 20}}>It's a pawty!</Text>
            <Text style={{fontFamily: "inika", fontSize: 18}}>Login to meet your new best friend.</Text>
            <Form style={{marginTop: 40}}>
                <FormInput name="email"
                           type="email"
                           onType={handleChange}
                           icon={<Fontisto name="email" size={16} color="gray" />}
                >Email</FormInput>
                <FormInput name="password"
                           type="password"
                           onType={handleChange}
                           icon={<FontAwesome name="lock" size={16} color="gray" />}
                           containerStyle={{marginTop: 20}}
                >Password
                </FormInput>
                <View style={{display: "flex", flexDirection: "row", gap: 4, alignItems: "center", marginTop: 5}}>
                    <Text>If you dont have an account?</Text>
                    <LinkText href="/register">Sign up here</LinkText>
                </View>
                <Button style={{paddingHorizontal: 40, marginTop: 20}} onPress={handleSubmit} >Login</Button>
            </Form>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Colors.primary,
        flex: 1
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        width: "100%",
        height: 400,
        backgroundColor: Colors.ellipse,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
    },
    imageBackground: {

        position: "absolute",
        left: 0,
        top: 0
    },
    logo: {
    }
})
