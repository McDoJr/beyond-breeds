import {SafeAreaView, StyleSheet, View, ViewProps} from 'react-native'
import {IOS} from "@/constants/constants";

export default function AppView({ children, style, ...props }: ViewProps) {

    const paddingTop = IOS ? 0 : 40;

    return (
        <SafeAreaView style={{flex: 1, paddingTop}}>
            <View style={[styles.container, style]} {...props} >
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


