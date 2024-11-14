import {StyleSheet, View, ViewProps} from 'react-native'
import React from 'react'

const Form = ({ children, style, ...props }: ViewProps) => {
    return (
        <View style={[styles.container, style]} {...props} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Form;
