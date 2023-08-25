import { StyleSheet } from "react-native";

const SearchBarStyles = StyleSheet.create({
    main:{
        marginHorizontal: 20,
        marginBottom: 16
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(245, 245, 245)',
        borderRadius: '100%',
        padding: 16,
        marginVertical: 8,
        paddingLeft: 24
    },
    text_input:{
        flex: 1,
        fontSize: 16,
        paddingLeft: 6,
        
    }
})

export default SearchBarStyles