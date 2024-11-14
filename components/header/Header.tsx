import {StyleSheet, Text, View, ViewProps} from 'react-native'
import React from 'react'
import {FontAwesome5, Octicons} from "@expo/vector-icons";

const Header = ({ style, back = false, ...props }: {back?: boolean} & ViewProps) => {

    const justifyContent = back ? "space-between" : "flex-end";

    return (
        <View style={[styles.container, style, {justifyContent}]} {...props} >
            {back && <Octicons name="chevron-left" size={30} />}
            <FontAwesome5 name="user-circle" size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15
    },
    icon: {

    }
});

export default Header;
