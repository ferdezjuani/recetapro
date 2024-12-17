// app/auth/register/index.tsx

import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Registro</Text>
      <Button title="Volver a Login" onPress={() => router.push('/auth/login')} />
    </View>
  );
}
