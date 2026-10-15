import { useState } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import ConfirmCode from './components/ConfirmCode';
import Password from './components/Password';
import ResetPassword from './components/ResetPassword';
import Success from './components/Success';

export default function App() {
  const [screen, setScreen] = useState('login');


  if (screen === 'password') {
    return (
      <Password
        onBack={() => setScreen('login')}
        onNext={() => setScreen('confirm')}
      />
    );
  }


  if (screen === 'confirm') {
    return (
      <ConfirmCode
        onBack={() => setScreen('password')}
        onNext={() => setScreen('reset')}
      />
    );
  }


  if (screen === 'reset') {
    return (
      <ResetPassword
        onBack={() => setScreen('confirm')}
        onNext={() => setScreen('success')}
      />
    );
  }

 
  if (screen === 'success') {
    return (
      <Success
        onNext={() => setScreen('login')}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.icon}>☎</Text>

          <TextInput
            style={styles.input}
            placeholder="Номер телефона"
            placeholderTextColor="#B7B5BD"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.icon}></Text>

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#B7B5BD"
            secureTextEntry
          />

          <Text style={styles.eye}>◉</Text>
        </View>

        <Pressable
          style={styles.forgotButton}
          onPress={() => setScreen('password')}
        >
          <Text style={styles.forgotText}>
            Забыли пароль?
          </Text>
        </Pressable>

        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Войти
          </Text>
        </Pressable>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            У вас нет аккаунта?
          </Text>

          <Pressable>
            <Text style={styles.registerLink}>
              Зарегистрироваться
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 8,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: 45,
  },

  backButtonText: {
    fontSize: 25,
    color: '#1B1923',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1B1923',
  },

  subtitle: {
    fontSize: 12,
    color: '#AAA9B2',
    marginTop: 5,
    marginBottom: 22,
  },

  inputContainer: {
    height: 44,
    backgroundColor: '#F7F7F8',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  icon: {
    fontSize: 15,
    color: '#AAA9B2',
    width: 25,
  },

  input: {
    flex: 1,
    fontSize: 13,
    color: '#1B1923',
  },

  eye: {
    fontSize: 14,
    color: '#B000E8',
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 2,
    marginBottom: 18,
  },

  forgotText: {
    color: '#B000E8',
    fontSize: 12,
  },

  loginButton: {
    height: 44,
    backgroundColor: '#B000E8',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  registerContainer: {
    alignItems: 'center',
    marginTop: 15,
  },

  registerText: {
    fontSize: 11,
    color: '#AAA9B2',
  },

  registerLink: {
    fontSize: 11,
    color: '#B000E8',
    marginTop: 3,
  },
});