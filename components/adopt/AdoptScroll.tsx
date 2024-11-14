import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import AdoptItem from "@/components/adopt/AdoptItem";
import {PetData} from "@/constants/types";

const AdoptScroll = ({ datas, admin }: {datas: PetData[], admin?: boolean}) => {


    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20
        }}>
            {datas.map((data, index) => <AdoptItem {...data} admin={admin} key={index} />)}
        </View>
    )
}

const styles = StyleSheet.create({});

export default AdoptScroll;
