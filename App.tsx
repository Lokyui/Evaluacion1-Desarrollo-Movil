import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles/App.styles';

// Componente principal de la app
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentTab, setCurrentTab] = useState<'home' | 'perfil'>('home');
  const [userEmail, setUserEmail] = useState('');

  // Valida la contraseña y hace el login
  const handleLogin = () => {
    if (password !== '1234') {
      Alert.alert('Error', 'Contraseña incorrecta');
      return;
    }

    setUserEmail(email);
    setIsLoggedIn(true);
  };

  // Si no esta logueado, muestra el login
  if (!isLoggedIn) {
    return (
      <View style={styles.loginContainer}>
        <StatusBar style="auto" />
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Si esta logueado, muestra los tabs
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StatusBar style="auto" />

      {/* Contenido de los tabs */}
      {currentTab === 'home' ? (
        <View style={styles.screenContainer}>
          <Text style={styles.screenTitle}>Bienvenido</Text>
          <Text style={styles.subtitle}>Esta es la pantalla principal</Text>
        </View>
      ) : (
        <View style={styles.screenContainer}>
          <Text style={styles.screenTitle}>Perfil</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.email}>{userEmail || 'No disponible'}</Text>
        </View>
      )}

      {/* Navegacion tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, currentTab === 'home' && styles.tabActive]}
          onPress={() => setCurrentTab('home')}
        >
          <Text style={[styles.tabText, currentTab === 'home' && styles.tabTextActive]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, currentTab === 'perfil' && styles.tabActive]}
          onPress={() => setCurrentTab('perfil')}
        >
          <Text style={[styles.tabText, currentTab === 'perfil' && styles.tabTextActive]}>
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
