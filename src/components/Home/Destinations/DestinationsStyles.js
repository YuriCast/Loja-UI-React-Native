import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DestinationsStyles = StyleSheet.create({
    container:{
        marginTop: 16,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    card:{
        width: wp(44),
        height: wp(65),
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        padding: 16,
        paddingVertical: 24,
        marginBottom: 20
    },
    card_image:{
        width: wp(44),
        height: wp(65),
        position: 'absolute',
        borderRadius: 35
    },
    item_title:{
        fontSize: wp(5),
        color: 'white',
        fontWeight: '600'
    },
    item_description:{
        fontSize: wp(2.2),
        color: 'white',
    },
    heart_icon:{
        backgroundColor: 'rgba(255,255,255,0.4)',
        position: 'absolute',
        top: 12,
        borderRadius: 100,
        padding: 12,
        right: 12

    },
    item_title:{
        fontSize: wp(4),
        color: 'white',
        fontWeight: '600'
    },
    item_description:{
        fontSize: wp(2.2),
        color: 'white',
    }
    
})

export default DestinationsStyles