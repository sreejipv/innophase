import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#1960A8',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});