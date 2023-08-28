import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HeaderStyles = StyleSheet.create({
    header:{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 16
    },
    header_text:{
        fontSize: wp(7),
        fontWeight: 'bold',
        color: 'rgb(64, 64, 64)'
    },
    header_avatar:{
        height: wp(12),
        width: wp(12)
    },
})

export default HeaderStyles