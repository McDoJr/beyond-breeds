import {StyleSheet, Text, View, ViewProps} from 'react-native'
import React from 'react'
import InfoCard, {InfoCardProp} from "@/components/InfoCard";

type InfoGroupProps = {
    title: string,
    datas: InfoCardProp[]
}

const InfoGroup = ({ title, datas, style, ...props }: InfoGroupProps & ViewProps) => {
    return (
        <View style={[styles.container, style]} {...props} >
            <Text style={{
                fontFamily: "kameron-bold",
                fontSize: 25,
                marginTop: 20
            }}>{title}</Text>
            {datas.map((data, index) => <InfoCard {...data} key={index} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 20
    }
});

export default InfoGroup;
