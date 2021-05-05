import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:10,
    },
    image: {
        width: 100,
        height: 170,
        resizeMode: "contain",
        borderRadius: 8,
    },
    title:{
        marginBottom:8,
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    }
});

export default styles;