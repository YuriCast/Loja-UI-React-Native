import { StyleSheet } from "react-native";

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
    texts:{
        gap: 3
    },
    texts_title:{
        color: 'white',
        fontWeight: '700',
        fontSize: 40
    },
    texts_description:{
        fontSize: 18,
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
        fontWeight: '700'
    }
})

export default WelcomeStyles