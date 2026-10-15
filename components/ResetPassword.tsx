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

type Props = {
  onBack: () => void;
  onNext: () => void;
};

export default function ResetPassword({ onBack, onNext }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        {/* Артқа */}
        <Pressable
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        {/* Заголовок */}
        <Text style={styles.title}>
          Сбросить пароль
        </Text>

        <Text style={styles.subtitle}>
          Придумайте новый пароль для своего аккаунта
        </Text>

        {/* Новый пароль */}
        <View style={styles.inputContainer}>
          <Text style={styles.icon}>🔒</Text>

          <TextInput
            style={styles.input}
            placeholder="Новый пароль"
            placeholderTextColor="#B7B5BD"
            secureTextEntry={!showPassword}
          />

          <Pressable
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eye}>
              {showPassword ? '◉' : '○'}
            </Text>
          </Pressable>
        </View>

        {/* Повтор пароля */}
        <View style={styles.inputContainer}>
          <Text style={styles.icon}>🔒</Text>

          <TextInput
            style={styles.input}
            placeholder="Повторите пароль"
            placeholderTextColor="#B7B5BD"
            secureTextEntry={!showRepeatPassword}
          />

          <Pressable
            onPress={() =>
              setShowRepeatPassword(!showRepeatPassword)
            }
          >
            <Text style={styles.eye}>
              {showRepeatPassword ? '◉' : '○'}
            </Text>
          </Pressable>
        </View>

        {/* Кнопка */}
        <Pressable
          style={styles.button}
          onPress={onNext}
        >
          <Text style={styles.buttonText}>
            Сохранить пароль
          </Text>
        </Pressable>

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
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    marginBottom: 55,
  },

  backButtonText: {
    fontSize: 28,
    color: '#1B1923',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B1923',
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    color: '#AAA9B2',
    marginTop: 6,
    marginBottom: 18,
    maxWidth: 300,
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
    width: 25,
  },

  input: {
    flex: 1,
    fontSize: 13,
    color: '#1B1923',
  },

  eye: {
    fontSize: 15,
    color: '#B000E8',
  },

  button: {
    height: 44,
    backgroundColor: '#B000E8',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});