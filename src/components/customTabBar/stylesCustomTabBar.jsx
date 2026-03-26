import { StyleSheet } from 'react-native'
import { themes } from '../../global/themes'

export const style = StyleSheet.create({
    tabArea:{
        flexDirection:'row',
        height:60,
        justifyContent:'space-around',
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:themes.colors.primary
    }
})