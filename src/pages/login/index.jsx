import react, { use, useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { style } from "./styles";
import Logo from '../../assets/levup-icon-escuro.png'
import {MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input/indexInput";
import { Button } from "../../components/button/indexButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login (){
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [loading, setLoading] = useState(false)

    async function getLogin() {
        try {
            setLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigratórios')
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]})

            setTimeout(()=>{
                console.log('Logado com Sucesso')
            },3000)
            

        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Bem Vindo de Volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Input title="ENDEREÇO DE E-MAIL" value={email} onChangeText={setEmail} IconRight={MaterialIcons} IconRightName="email" />
                <Input title="SENHA" value={password} onChangeText={setPassword} IconRight={Octicons} IconRightName={showPassword?"eye-closed":"eye"} secureTextEntry={showPassword} onIconRightPress={()=>setShowPassword(!showPassword)}/>                

            </View>

            <View style={style.boxBottom}>
                <Button text="ENTRAR" loading={loading} onPress={getLogin}/>
            </View>

            <Text style={style.textBotton}>Não tem conta? <Text style={{color:themes.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}