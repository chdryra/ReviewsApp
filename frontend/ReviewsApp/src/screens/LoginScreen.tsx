import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import { AuthContext } from '../store/AuthContext'
import { firebaseAuth } from '../../firebase'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn, signUp } = useContext(AuthContext);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(firebaseAuth, email, password).then((creds: UserCredential) => {
            signUp({userId: creds.user.uid})
        }).catch((error) => {
          alert(error);
        })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(firebaseAuth, email, password).then((creds: UserCredential) => {
            signIn({userId: creds.user.uid})
         }).catch((error) => {
          alert(error);
        })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='email'
                    value={ email }
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='password'
                    value={ password }
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <Pressable
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
        },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})