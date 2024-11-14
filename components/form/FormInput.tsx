import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle} from 'react-native'
import React from 'react'
import {IOS} from "@/constants/constants";

type InputFieldProps = {
    type?: "text" | "password" | "email" | "number",
    name: string,
    onType?: (name: string, text: string) => void,
    children?: React.ReactNode,
    containerStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    direction?: "row" | "column",
    icon?: React.ReactNode
}

const FormInput = ({ children, style, containerStyle, labelStyle, name, type = "text", onType = () => {}, direction = "row", icon, ...props }: InputFieldProps & TextInputProps) => {

    const handleChange = (text: string) => {
        onType(name, text);
    }

    const paddingVertical = IOS ? 8 : 0;

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.text, labelStyle]}>{children}</Text>
            <View style={styles.inputContainer}>
                {icon}
                <TextInput onChangeText={handleChange}
                           style={[styles.input, style, {paddingVertical}]}
                           secureTextEntry={type === "password"}
                           {...props}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: 250
    },
    text: {
        marginBottom: 15,
        fontFamily: "inika-bold",
        fontSize: 16
    },
    inputContainer: {
        backgroundColor: "#E4E4E4",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    input: {
        fontFamily: "inika",
        fontSize: 14,
        marginLeft: 10,
        flex: 1
    }
});

export default FormInput;
