import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login  from '../pages/login/index'
import BottomRoutes from "./botton.routes";
import { RootStackParamList } from '../global/navigation'

export default function Routes (){
    const Stack = createStackNavigator<RootStackParamList>()

    return(
        <Stack.Navigator id="root" initialRouteName="Login" screenOptions={{headerShown:false, cardStyle:{backgroundColor:"#0C0C0C"}}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
        </Stack.Navigator>
    )
}