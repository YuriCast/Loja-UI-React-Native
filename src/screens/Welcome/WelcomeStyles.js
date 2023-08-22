import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const WelcomeStyles = StyleSheet.create({
    
    main:{
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end'
    },
    bg_image:{
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    container:{
        padding: 20,
        paddingBottom: 40,
        gap: 32
    },
    linear_gadient:{
        position: 'absolute',
        bottom: 0,
        width: wp(100),
        height: hp(60)
    },
    texts_title:{
        color: 'white',
        fontWeight: '700',
        marginBottom: 14,
        fontSize: wp(12)
    },
    texts_description:{
        fontSize: wp(4),
        color: '#f1f1f1',
        fontWeight: '500'
    },
    button:{
        backgroundColor: '#ED7014',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 12,
        paddingLeft: 48,
        paddingRight: 48,
        borderRadius: '100%'
    },
    button_text:{
        color: 'white',
        fontWeight: '700',
        fontSize: wp(5.5)
    }
})

export default WelcomeStyles