// app/auth/login/index.tsx

import { View, Text, TextInput, Button, Alert } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '~/utils/useAuth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  async function signInWithEmail() {
    setLoading(true);
    try {
      await signIn(email, password);
      router.replace('/dashboard/home'); // Changed from '/index' to '/' to match valid route
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Text className='text-4xl font-bold text-center text-[#2171CD] px-5 pt-16' style={{ fontFamily: 'LeagueSpartan_700Bold' }}>
          Bienvenido
        </Text>
        <Text className='text-xl font-bold text-center text-black px-5 pt-4' style={{ fontFamily: 'LeagueSpartan_400Regular' }}>
          Inicia sesión para continuar
        </Text>
        
        <View className="w-full px-5 mt-16">
          <TextInput
            className="w-full border border-gray-300 rounded-lg p-3 mb-12"
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          
          <TextInput
            className="w-full border border-gray-300 rounded-lg p-3 mb-12"
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <Button
            title={loading ? "Cargando..." : "Iniciar sesión"}
            onPress={signInWithEmail}
            disabled={loading}
          />
          <Button
            title={"Volver"}
            onPress={() => router.push('/')}
            disabled={loading}
          />
        </View>
      </View>
    </>
  );
}
