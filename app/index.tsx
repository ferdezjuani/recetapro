// app/index.tsx

import { View, Image, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import logo from '../assets/icon.png';

export default function HomeScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-whites'>
      {/* Imagen del Logo */}
      <Image source={logo} className='w-32 h-32' />
      <View className='flex-row py-2'>
        <Text className='text-4xl font-bold text-center text-[#2171CD]' style={{ fontFamily: 'LeagueSpartan_400Regular' }}>receta</Text>
        <Text className='text-4xl font-bold text-center text-[#2171CD]' style={{ fontFamily: 'LeagueSpartan_700Bold' }}>pro</Text>
      </View>

      {/* Botón para Iniciar Sesión */}
      <View className='flex-col'>
        <TouchableOpacity
          className='bg-[#add5fc] py-3 px-6 rounded-full mb-4'
          onPress={() => router.push('/auth/login')}
      >
        <Text
          className='text-white text-lg font-semibold uppercase'
          style={{ fontFamily: 'LeagueSpartan_700Bold' }}
        >
          Iniciar Sesión
        </Text>
      </TouchableOpacity>

      {/* Botón para Registrarse */}
      <TouchableOpacity
        className='bg-green-500 py-3 px-6 rounded-full'
        onPress={() => router.push('/auth/register')}
      >
          <Text className='text-white text-lg font-semibold uppercase' style={{ fontFamily: 'LeagueSpartan_700Bold' }}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
