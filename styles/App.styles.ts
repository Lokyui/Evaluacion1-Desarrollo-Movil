import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // contenedor principal cuando estas logueado
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  // contenedor del formulario de login
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  // titulo grande del login
  loginTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  // inputs de email y password
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  // boton de iniciar sesion
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  // texto del boton
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  // contenedor de las pantallas home y perfil
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // titulo de las pantallas
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // subtitulo gris
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  // etiqueta "Email:" en perfil
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  // el email que se muestra en perfil
  email: {
    fontSize: 20,
    fontWeight: '600',
  },
  // barra de tabs abajo
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  // cada tab individual
  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  // tab cuando esta seleccionado
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  // texto de los tabs
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  // texto del tab activo
  tabTextActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
