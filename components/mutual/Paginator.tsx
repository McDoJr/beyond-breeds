import {Animated, StyleSheet, TouchableOpacity, useWindowDimensions, View} from 'react-native'
import React from 'react'
import {MutualCardProps} from "@/components/mutual/MutualCard";

type PaginatorProps = {
    items: MutualCardProps[],
    scrollX: Animated.Value,
    scrollTo: (index: number) => void
}

const Paginator = ({ items, scrollX, scrollTo }: PaginatorProps) => {

    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            {items.map((_, index) => {

                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 10, 10],
                    extrapolate: "clamp"
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [.3, 1, .3],
                    extrapolate: "clamp"
                })

                return (
                    <TouchableOpacity onPress={() => scrollTo(index)} key={index.toString()}>
                        <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        flexDirection: "row",
        transform: [{translateY: 40}],
        zIndex: 100
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "gray",
        marginHorizontal: 8
    }
});

export default Paginator;
