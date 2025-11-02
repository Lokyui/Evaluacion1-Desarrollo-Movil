# Informe del Proyecto - App de Login

## ENLACE CON VIDEO DE PRUEBA: "https://www.youtube.com/shorts/uKmdMAMdMdc"

## Que hace la app

Es una app movil simple de login hecha con React Native y Expo. Basicamente pones tu email y contraseña, si la contraseña es "1234" te deja entrar, sino te muestra un error. Una vez que inicias sesion te lleva a una vista con tabs donde puedes ver Home y Perfil. En Perfil se muestra el email que ingresaste.

## Como organice el codigo

El codigo esta separado en archivos para mantenerlo ordenado.

- **App.tsx**: componente principal con toda la logica de login y tabs
- **styles/App.styles.ts**: todos los estilos de la app
- **index.ts**: punto de entrada de la app
- **app.json**: configuracion de Expo

## Explicacion de cada archivo

### App.tsx

Aca esta todo. Es un componente con varios estados:
- **isLoggedIn**: booleano que dice si el usuario esta logueado o no
- **email** y **password**: guardan lo que escribe el usuario en el login
- **currentTab**: cual tab esta activo ('home' o 'perfil')
- **userEmail**: guarda el email una vez que te logueaste

Tiene una funcion handleLogin que valida si la contraseña es "1234". Si no lo es muestra un Alert. Si es correcta guarda el email y cambia isLoggedIn a true.

Despues usa un if: si no estas logueado te muestra el formulario de login. Si ya estas logueado te muestra los tabs.

Los tabs los hice simples con botones en la parte de abajo. Cuando apretas uno cambia el estado currentTab y se muestra el contenido correspondiente.

Ademas use solo useState ya que no hay nada que necesitara persistencia, como por ejemplo guardar en memoria local los datos, ahi habria usado useEffect.

### styles/App.styles.ts

Todos los estilos de la app estan aca. Los separe del componente para que sea mas facil encontrarlos y modificarlos. Hay estilos para el login, los tabs, y las pantallas. Estan comentados para que sea facil entender que hace cada uno.

### index.ts

Punto de entrada simple. Solo registra el componente App con registerRootComponent.

## Tecnologias que use

- React Native
- TypeScript
- Expo
- useState de React
- SafeAreaView para que los tabs no se superpongan con los botones del sistema, ya que sin esto los botones del telefono se superponen con los tabs.

## Porque lo hice asi

Separe los estilos en su propia carpeta porque asi es mas facil mantenerlos. Si necesito cambiar colores o tamaños solo voy a ese archivo.

Use estados simples con useState para manejar el login y los tabs. No necesitaba nada mas complicado.

Los tabs los hice con botones normales, sin usar librerias externas. Es mas facil de entender y funciona bien.

Para la validacion solo chequeo si password === "1234" y listo. Use Alert.alert para mostrar el error.

Use SafeAreaView para que los botones de los tabs no se superpongan con los botones de navegacion del telefono.

## Que hace la app

- Pantalla de login con campo email y password
- Validacion de contraseña (debe ser "1234")
- Muestra error si la contraseña es incorrecta
- Navega a tabs si la contraseña es correcta
- Tab Home con pantalla de bienvenida
- Tab Perfil que muestra el email ingresado en el login
- Los tabs se pueden cambiar tocando los botones de abajo

## Como ejecutar la app

```
npm install
npm start
```

Despues escaneas el QR con Expo Go en el celular.

## Cosas que podria mejorar

Si tuviera mas tiempo:
- Validar que el email tenga formato correcto
- Agregar un boton de logout
- Guardar la sesion para que no tengas que loguearte cada vez
- Hacer los tabs mas bonitos con iconos

## Problemas que tuve

Al principio intente usar Expo Router pero me daba errores de "failed to download remote update" en Expo Go. Despues intente con React Navigation pero me daba errores de casting de tipos.

Me di cuenta que era mas simple hacer todo con estados en un solo componente. Asi funciona sin problemas y es mas facil de entender.

Tambien tuve que usar SafeAreaView porque los botones de los tabs se superponian con los botones del sistema del telefono.

## Ayuda de IA

Use Copilot para ayudarme con autocompletado, documentacion comentada y los estilos, ya que nunca he sido muy bueno con ellos.
