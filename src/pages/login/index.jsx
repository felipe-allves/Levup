import react, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { style } from "./styles";
import Logo from '../../assets/android-icon-foreground.png'
import {MaterialIcons } from '@expo/vector-icons'
import { themes } from "../../global/themes";

export default function Login (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function getLogin() {
        try {
            setLoading(true)

            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigratórios')
            }

            setTimeout(()=>{
                Alert.alert('Logado com Sucesso')
            setLoading(false)
            },1000)
            

        } catch (error) {
            console.log(ErrorUtils)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Bem Vindo de Volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>

                <View style={style.boxInput}>
                <TextInput style={style.input} value={email} onChangeText={setEmail} />
                <MaterialIcons name="email" size="20" color={themes.colors.gray}/>
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <TextInput />

                <View style={style.boxInput}>
                <TextInput style={style.input} value={password} onChangeText={setPassword} />
                <MaterialIcons name="remove-red-eye" size="20" color={themes.colors.gray}/>
                </View>

            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>

                    {loading?<ActivityIndicator />:<Text style={style.textButton}>Entrar</Text>}

                </TouchableOpacity>
            </View>

            <Text style={style.textBotton}>Não tem conta? <Text style={{color:themes.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}