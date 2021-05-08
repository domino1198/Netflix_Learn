import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
    },
    header: {
        height: '15%',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    title: {
        padding: 3,
        fontWeight: 'bold',
        fontSize: 20,
    },
    progress: {
        color: '#04B404',
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
    containerAge: {
        backgroundColor: '#D7DF01',
        borderRadius: 3,
        padding: 3,
        marginHorizontal: 5,
    },
    year: {
        opacity: 0.7,
        marginHorizontal: 5,
    },
    btnLight: {
        backgroundColor: 'white',
        minWidth: '95%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
        color: 'black', 
        padding: 7, 
        fontWeight: 'bold',
        flexDirection:'row'
    },
    btnLightText:{
        color: 'black',
        fontSize: 18,
        padding: 2,
        fontWeight: 'bold'
    },
    btnDark:{
        backgroundColor: '#424242',
        minWidth: '95%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        padding: 7,
        fontWeight: 'bold',
        flexDirection: 'row'
    },
    btnDarkText:{
        fontSize: 18,
        padding: 2,
        fontWeight: 'bold'
    }
});

export default styles;