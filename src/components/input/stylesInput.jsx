import { StyleSheet } from 'react-native'
import { themes } from '../../global/themes'

export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderColor: themes.colors.gray,
        borderRadius: 10,
        marginTop:10,
        paddingHorizontal:5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input:{
        height:'100%',
        width: '90%',
        borderRadius: 10,
        color:themes.colors.gray
    },
    titleInput:{
        marginLeft:5,
        color:themes.colors.primary,
        marginTop:20,
    },
    icon:{
        width: '100%',
    },
    button:{
        width: '10%',
    }
})