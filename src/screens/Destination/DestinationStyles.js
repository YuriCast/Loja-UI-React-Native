import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { theme } from "../../theme";


const DestinationStyles = StyleSheet.create({
    main:{
        backgroundColor: 'white',
        flex: 1
    },
    image:{
        width: wp(100),
        height: hp(55)
    },
    btns:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        position: 'absolute'
    },
    voltar:{
        padding: 8,
        borderRadius: 100,
        marginLeft: 16,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    coracao:{
        padding: 8,
        borderRadius: 100,
        marginRight: 16,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    
})

export default DestinationStyles