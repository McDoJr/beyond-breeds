import {Text, TextProps} from 'react-native'
import React from 'react'
import {Href, router} from "expo-router";

const LinkText = ({ style, children, href, ...props }: TextProps & {href: Href<string | object>}) => {

    return <Text style={[{color: "blue", textDecorationLine: "underline"}, style]} {...props} onPress={() => router.push(href)} >{children}</Text>
}

export default LinkText;
