Informe del Proyecto - App de Tareas
ENLACE CON VIDEO DE PRUEBA: "https://www.youtube.com/shorts/uKmdMAMdMdc"

Que hace la app:
Ahora es una app más completa para gestionar tareas. Sigues teniendo el login (usuario: "carlos", pass: "1234"), pero ahora cuando entras puedes ver una lista de tus tareas pendientes. Puedes marcar tareas como completas, borrarlas y lo más importante: crear nuevas tareas.

Al crear una tarea puedes ponerle título, pero además puedes usar la cámara del celular para adjuntar una foto y el GPS para guardar la ubicación exacta de donde estabas. Todo esto se guarda en el teléfono, así que si cierras la app y vuelves a entrar, tus tareas siguen ahí.

Como organice el codigo:
Cambie bastante la estructura para usar Expo Router, que es lo moderno ahora.

app/: Aquí están todas las pantallas.
app/login.tsx: La pantalla de inicio de sesión.
app/(tabs)/index.tsx: La lista de tareas (Home).
app/create.tsx: La pantalla para crear nueva tarea (donde uso la cámara y el mapa).
storage/taskStorage.ts: Aquí manejo toda la lógica de guardar datos.
Explicacion de cada archivo
app/login.tsx:
Sigue parecido, valida el usuario. Si es correcto, guarda el ID del usuario en AsyncStorage y te manda a la pantalla principal usando router.navigate.

app/(tabs)/index.tsx:
Es la pantalla principal. Muestra un FlatList con las tareas. Uso useFocusEffect para recargar la lista cada vez que entras a la pantalla. Aquí puedes marcar tareas como listas o borrarlas.

app/create.tsx:
Esta es la parte interesante.
Uso Expo Camera para tomar fotos directamente en la app.
Uso Expo Location para obtener las coordenadas GPS.
Cuando guardas, se crea un objeto Task con todo eso y se manda al storage.

storage/taskStorage.ts:
Como necesitaba que los datos no se borraran, creé este archivo que usa AsyncStorage. Tiene funciones para guardar tareas, leerlas, borrarlas y actualizarlas. Todo se guarda como un JSON string.

Tecnologias que usamos:
React Native & Expo
TypeScript
Expo Router (para la navegación, mucho mejor que lo anterior)
AsyncStorage (para persistencia de datos)
Expo Camera (para las fotos)
Expo Location (para el GPS)
SafeAreaView (para que se vea bien en todos los celulares)
Porque lo hicimos asi:
Cambiamos a Expo Router porque facilita mucho la navegación basada en archivos, parecido a Next.js si vienes de web.

Para las fotos y ubicación, usamos las librerias nativas de Expo porque son las que mejor funcionan y son fáciles de integrar.

Decidimos separar la lógica de guardado (storage) de la vista para mantener el código más limpio. Así si mañana queremos cambiar AsyncStorage por una base de datos real, solo tocamos ese archivo.

Problemas que tuvimos:
Al principio nos costó configurar los permisos de la cámara y ubicación en el archivo app.json, a veces la app se cerraba si no los pedía bien.
También tuvimos que pelear un poco con el layout de la cámara para que se viera bien y no tapara los botones.
La navegación con Expo Router es genial pero tuvimos que aprender cómo pasar parámetros y cómo proteger rutas (el login).

Ayuda de IA:

Sigo usando Copilot y herramientas de IA para generar código repetitivo y ayudarme con los estilos, que siguen sin ser mi fuerte. 
