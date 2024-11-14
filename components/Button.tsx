import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'
import React from 'react'

type ButtonProps = TouchableOpacityProps & {
    textStyle?: StyleProp<TextStyle>
}

const Button = ({ style, children, textStyle, ...props }: ButtonProps) => {

    return (
        <TouchableOpacity style={[styles.container, style]} {...props} >
            <Text style={[styles.text, textStyle]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#44E94B",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20
    },
    text: {
        color: "#000000",
        fontFamily: "inika-bold",
        fontSize: 16
    }
});

export default Button;
