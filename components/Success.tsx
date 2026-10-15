import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  onNext: () => void;
};

export default function Success({ onNext }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <View style={styles.iconContainer}>
          <Text style={styles.check}>✓</Text>
        </View>

        <Text style={styles.title}>
          Пароль изменён!
        </Text>

        <Text style={styles.subtitle}>
          Ваш пароль был успешно изменён.
          Теперь вы можете войти в свой аккаунт.
        </Text>

        <Pressable
          style={styles.button}
          onPress={onNext}
        >
          <Text style={styles.buttonText}>
            Вернуться ко входу
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F4D9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },

  check: {
    fontSize: 38,
    color: '#B000E8',
    fontWeight: '700',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B1923',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 19,
    color: '#AAA9B2',
    textAlign: 'center',
    marginTop: 8,
    maxWidth: 290,
    marginBottom: 24,
  },

  button: {
    width: '100%',
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