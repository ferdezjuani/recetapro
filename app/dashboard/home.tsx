import { View, Text } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
import { useAuth } from '~/utils/useAuth';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Text className='text-4xl font-bold text-center text-[#2171CD] px-5 pt-16' style={{ fontFamily: 'LeagueSpartan_700Bold' }}>
          Bienvenido, {user?.email}
        </Text>
        <ScreenContent path="app/dashboard/home.tsx" title="Inicio" />
      </View>
    </>
  );
}
