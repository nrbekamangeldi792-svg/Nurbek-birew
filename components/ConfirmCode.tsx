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

export default function ConfirmCode({ onBack, onNext }: Props) {
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
          Подтвердите номер
        </Text>

        <Text style={styles.subtitle}>
          Мы только что отправили код на
        </Text>

        <Text style={styles.phone}>
          +7 (700) 555 77 55
        </Text>

        {/* Код */}
        <View style={styles.codeContainer}>

          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />

          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />

          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />

          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />

        </View>

        {/* Продолжить */}
        <Pressable
          style={styles.button}
          onPress={onNext}
        >
          <Text style={styles.buttonText}>
            Продолжить
          </Text>
        </Pressable>

        {/* Повторная отправка */}
        <Pressable style={styles.resendButton}>
          <Text style={styles.resendText}>
            Отправить код еще раз
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
    color: '#AAA9B2',
    marginTop: 6,
    textAlign: 'center',
  },

  phone: {
    fontSize: 13,
    color: '#1B1923',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 18,
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  codeInput: {
    width: 48,
    height: 48,
    backgroundColor: '#F7F7F8',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#1B1923',
  },

  button: {
    height: 44,
    backgroundColor: '#B000E8',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  resendButton: {
    alignItems: 'center',
    marginTop: 18,
  },

  resendText: {
    color: '#AAA9B2',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});