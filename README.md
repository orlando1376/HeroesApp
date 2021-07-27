# HeroesApp

En aplicación es una App que nos muestra información de superhéroes que está almacenados en un archivo `JSON` que es servido mediante `JSON Server`.

Agradecimientos a Ferdando Herrera de [Udemy](https://www.udemy.com/course/angular-fernando-herrera/learn/lecture/23991264#overview) por este curso de Angular.

Aquí podremos ver funcionalidades de Listar, Crear, Modificar y Borrar superhéroes.

## Temas puntuales

- Rutas Hijas
- Rutas Principales
- LazyLoad
- Angular Material
- Interfaces y tipado
- Pipes personalizados
- Variables de entorno
- Autocomplete de AngularMaterial
- Peticiones HTTP
- JSON-Server
- Angular Flex y Flexbox
- Snacks
- Material Dialogs
- CRUD
  - Create
  - Read
  - Update
  - Delete
- Inyección de servicios
- Protección de rutas
  - Rutas privadas
  - Rutas públicas
  - Servicio de autenticación
  - Guards
  - CanActivate
  - Can Load

## Iniciar el JSON Server

Para iniciar el servidor se debe abrir una ventana de comandos e ir al directorio donde esté el archivo JSON de base de datos, en este caso `Servidor\db.json` y ejecutar el comando:

``` code
json-server --watch db.json
```

## Development server

Ejecute `ng serve` para un servidor de desarrollo. Vaya a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.
