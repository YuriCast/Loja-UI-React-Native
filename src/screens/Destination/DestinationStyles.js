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
    container:{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 20,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 32,
        marginTop: -53,
        backgroundColor: 'white'
    },
    scroll:{
        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    title:{
        fontSize: wp(7),
        fontWeight: 'bold',
        flex: 1,
        color: 'rgb(64, 64, 64)',
    },
    price:{
        fontSize: wp(7),
        color: theme.text,
        fontWeight: '600',
    },
    description:{
        fontSize: wp(3.7),
        color: 'rgb(64, 64, 64)',
        letterSpacing: 0.4,
        marginBottom: 8,
        marginTop: 16
    },
    container_info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
        marginTop: 16
    },
    info:{
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    info_icon:{
        fontSize: wp(4.5),
        fontWeight: 'bold',
        color: 'rgb(64, 64, 64)',
        marginLeft: 6,
        textAlign: 'center'
    },
    info_text:{
        color: 'rgb(82, 82, 82)',
        letterSpacing: 0.4,
        marginLeft: 6,
        marginTop: 6,
        textAlign: 'center'
    },
    reservar:{
        backgroundColor: theme.bg(0.7),
        height: wp(15),
        width: wp(50),
        marginBottom: 32,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    reservar_text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: wp(5.5)
    }
})

export default DestinationStyles