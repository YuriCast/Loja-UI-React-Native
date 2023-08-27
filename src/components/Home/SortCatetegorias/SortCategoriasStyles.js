import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SortCategoriasStyles = StyleSheet.create({
    container:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 16,
        backgroundColor: '#F4F4F4',
        borderRadius: wp(5),
        padding: 12
    },
})

export default SortCategoriasStyles