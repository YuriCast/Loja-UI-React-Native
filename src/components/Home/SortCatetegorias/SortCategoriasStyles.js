import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SortCategoriasStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 16,
        backgroundColor: '#F4F4F4',
        borderRadius: wp(5),
        padding: 4
    },
    activeButtonStyle:{
        backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2 
    }
})

export default SortCategoriasStyles