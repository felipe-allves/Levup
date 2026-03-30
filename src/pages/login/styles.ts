import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        backgroundColor:themes.colors.bgScreen,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal:37
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width:150,
        height:150
    },
    text:{
        fontWeight: "bold",
        marginTop:30    ,
        fontSize:18,
        color:themes.colors.primary
    },
    button:{
        width:200,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.lightGray,
        borderRadius:10,
    },
    textButton:{
        fontSize:16,
        color: themes.colors.bgScreen,
        fontWeight: 'bold'
    },
    textBotton:{
        fontSize:16,
        color: themes.colors.gray,
    }
})