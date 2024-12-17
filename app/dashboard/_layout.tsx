import { Redirect, Stack } from 'expo-router';
import { useAuth } from '~/utils/useAuth';
import { View, ActivityIndicator } from 'react-native';

export default function DashboardLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  if (!user && !loading) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          fontFamily: 'LeagueSpartan_700Bold',
        },
      }}
    >
      <Stack.Screen 
        name="home"
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen 
        name="two"
        options={{ title: 'Two' }}
      />
    </Stack>
  );
}
