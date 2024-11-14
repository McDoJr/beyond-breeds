import {Dimensions, Image, ImageRequireSource, StyleSheet, Text, View, ViewProps} from 'react-native'
import React from 'react'

export type MutualCardProps = {
    name: string,
    age: string,
    tags: string[],
    image?: ImageRequireSource
}

const MutualCard = ({ name, age, tags, image, style, ...props }: MutualCardProps & ViewProps) => {

    const { width, height } = Dimensions.get("window");

    const cardHeight = height - 220;

    return (
        <View style={[styles.container, style, {width, height: cardHeight}]} {...props} >
            <View style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center"
            }}>
                <Image source={image} style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: 15,
                    zIndex: 0
                }} />
                <View style={{
                    width: "100%",
                    paddingHorizontal: 20
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 200,
                        gap: 10
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontFamily: "kameron-bold",
                            fontSize: 30
                        }}>{name}</Text>
                        <Text style={{
                            color: "#fff",
                            fontFamily: "kameron-bold",
                            fontSize: 20
                        }}>{age}</Text>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 15,
                        marginTop: 5
                    }}>
                        {tags.map((tag, index) => (
                            <View key={index} style={{
                                backgroundColor: "#848484",
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                borderRadius: 15
                            }}>
                                <Text key={index} style={{
                                    color: "#fff"
                                }} >{tag}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        position: "relative",
    }
});

export default MutualCard;
