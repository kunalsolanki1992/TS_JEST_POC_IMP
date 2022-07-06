import React from "react";
import { Text, View } from 'react-native';


import ParentContainer from "../../components/ParentContainer";
import ThemeButton from "../../components/ThemeButton";
import FormInput from "./components/FormInput";

const AuthScreen: React.FC = (props: any) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSignInPress = () => {
        // alert("Hello")
        props.navigation.navigate('List');
    }

    return (
        <ParentContainer>
            <FormInput
                placeholder={'Email'}
                value={email}
                onChangeText={(text: string) => setEmail(text)}
            />

            <FormInput
                placeholder={'Password'}
                value={password}
                onChangeText={(text: string) => setPassword(text)}
                secureTextEntry={true}
            />

            <ThemeButton
                text={"Sign in"}
                onPress={onSignInPress}
            />
        </ParentContainer>
    )
}

export default AuthScreen;