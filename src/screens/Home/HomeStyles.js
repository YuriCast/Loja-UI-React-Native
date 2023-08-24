import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeStyles = StyleSheet.create({
    main:{
        display: 'flex',
        flex: 1,
        backgroundColor: 'white'
    },
    container:{
        marginTop: 12
    },
    header:{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40
    },
    header_text:{
        fontSize: wp(7),
        fontWeight: 'bold',
        color: 'rgb(64, 64, 64)'
    },
    header_image:{
        height: wp(12),
        width: wp(12)
    },
})

export default HomeStyles