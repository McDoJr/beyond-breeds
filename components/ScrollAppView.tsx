import {StyleSheet, ScrollViewProps, ScrollView} from 'react-native'
import {IOS} from "@/constants/constants";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScrollAppView({ children, style, ...props }: ScrollViewProps) {

    const paddingTop = IOS ? 0 : 0;

    return (
        <SafeAreaView style={{flex: 1, paddingTop}}>
            <ScrollView style={[styles.container, style]} {...props} >
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
});
