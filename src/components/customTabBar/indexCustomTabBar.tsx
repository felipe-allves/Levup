import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from "./stylesCustomTabBar";
import {MaterialIcons, Ionicons, AntDesign, FontAwesome, SimpleLineIcons, Entypo } from '@expo/vector-icons'
import { themes } from "../../global/themes";

export default ({state, navigation}) => {
    const goRoutes = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>goRoutes("Home")}>
                <Ionicons name="home-outline" style={{opacity:state.index === 0?1:0.5, color:themes.colors.primary, fontSize:28}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={() => goRoutes("Sequence")}>
                <SimpleLineIcons name="fire" style={{opacity:state.index === 1?1:0.5, color:themes.colors.primary, fontSize:28}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={()=>goRoutes("User")}>
                <FontAwesome name="user-o" style={{opacity:state.index === 2?1:0.5, color:themes.colors.primary, fontSize:28}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={() => goRoutes("Settings")}>
                <Ionicons name="settings-outline" style={{opacity:state.index === 3?1:0.5, color:themes.colors.primary, fontSize:28}}/>
            </TouchableOpacity>
        </View>
    )
}