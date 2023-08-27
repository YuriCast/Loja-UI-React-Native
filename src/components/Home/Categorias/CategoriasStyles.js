import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { theme } from "../../../theme";

const CategoriasStyles = StyleSheet.create({
    main:{
        gap: 20
    },
    container:{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container_text:{
        fontWeight: '600',
        color: 	'rgb(64 64 64)'
    },
    btn_text:{
        fontSize: wp(4),
        color: theme.text
    },
    slide_btn:{
        display: 'flex',
        alignItems: 'center',
    },
    slide_images:{
        marginRight: 16,
        borderRadius: 24,
        width: wp(20),
        height: wp(19)
    },
    images_title:{
        color: 'rgb(64 64 64)',
        marginRight: 16,
        paddingTop: 6,
        fontWeight: '600',
        fontSize: wp(3)

    }
})

export default CategoriasStyles