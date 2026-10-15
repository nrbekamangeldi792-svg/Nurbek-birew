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

export default function Password({ onBack, onNext }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Восстановление пароля
        </Text>

        <Text style={styles.subtitle}>
          Введите свой номер телефона, чтобы
          восстановить пароль
        </Text>

        <TextInput
          style={styles.input}
          placeholder="+7 (700) 555 77 55"
          placeholderTextColor="#AAA9B2"
          keyboardType="phone-pad"
        />

        <Pressable
          style={styles.button}
          onPress={onNext}
        >
          <Text style={styles.buttonText}>
            Продолжить
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
    alignItems: 'flex-start',
    marginBottom: 55,
  },

  backButtonText: {
    fontSize: 28,
    color: '#1B1923',
    fontWeight: '300',
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

  input: {
    height: 44,
    backgroundColor: '#F7F7F8',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 13,
    color: '#1B1923',
    marginBottom: 16,
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
});