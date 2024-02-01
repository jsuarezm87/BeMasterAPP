# Be Master API

# Ejecutar proyecto

1. descomprimir proyecto / clonar
2. ```npm install```
3. Levantar projecto con ```npm start```

# Ejercicio 1: Consumo de APIs

1. Consultar repositorios mas populares del usuario google por Postman, request GET:
```
http://localhost:4000/api/github
```

# Ejercicio 2: Nomenclatura

1. función anterior:
```
function f(x, y, z) {
let a = x + y;
let b = a * z;
let c = Math.sin(b);
return c;
}
```

2. Nueva función cambiando la nomenclatura:
```
function calcularSumaProductoSeno(x, y, z) {
  let suma = x + y;
  let producto = suma * z;
  let seno = Math.sin(producto);
  return seno;
}
```

# Ejercicio 3: Pensamiento lógico
```
const oddNumbers = (number)=> {
    return (Number.isInteger(number) && number > 0) 
    ?  Array.from({ length: (number + 1) / 2 }, (_, index) => index * 2 + 1)   
    :  'Por favor, ingresa un número entero positivo.'; 
}
```

1. La función anterior resuelve el problema planteado.
2. Si se desea ejecutar se puede con un request GET por postman:
```
http://localhost:4000/api/oddNumber?number=9
```

# Ejercicio 4: Modelado de bases de datos
```
CREATE TABLE Usuarios (
    ID_Usuario NUMBER PRIMARY KEY,
    Nombre VARCHAR2(255),
    CorreoElectronico VARCHAR2(255),
    FechaRegistro DATE,
    TipoUsuario VARCHAR2(50) --  'Normal', 'Admin'
);

CREATE TABLE Autores (
    ID_Autor NUMBER PRIMARY KEY,
    Bio VARCHAR2(1000),
    RedesSociales VARCHAR2(500), -- enlaces a perfiles en redes sociales
    CONSTRAINT fk_usuario_autor FOREIGN KEY (ID_Autor) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Colaboradores (
    ID_Colaborador NUMBER PRIMARY KEY,
    Nombre VARCHAR2(255),
    Rol VARCHAR2(100), --  'Actor', 'Director', 'Productor'
    Experiencia VARCHAR2(500)
);

CREATE TABLE Videos (
    ID_Video NUMBER PRIMARY KEY,
    Titulo VARCHAR2(255),
    Descripcion VARCHAR2(1000),
    URL VARCHAR2(500),
    FechaPublicacion DATE,
    ID_Autor NUMBER,
    DuracionMinutos NUMBER, -- Duración del video en minutos
    CONSTRAINT fk_autor_video FOREIGN KEY (ID_Autor) REFERENCES Autores(ID_Autor)
);

CREATE TABLE Comentarios (
    ID_Comentario NUMBER PRIMARY KEY,
    Texto VARCHAR2(1000),
    FechaComentario DATE,
    ID_Usuario NUMBER,
    ID_Video NUMBER,
    Likes NUMBER, -- Número de likes recibidos por el comentario
    CONSTRAINT fk_usuario_comentario FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    CONSTRAINT fk_video_comentario FOREIGN KEY (ID_Video) REFERENCES Videos(ID_Video)
);

CREATE TABLE Reviews (
    ID_Review NUMBER PRIMARY KEY,
    Puntuacion NUMBER,
    Comentario VARCHAR2(1000),
    ID_Usuario NUMBER,
    ID_Video NUMBER,
    FechaReview DATE,
    CONSTRAINT fk_usuario_review FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    CONSTRAINT fk_video_review FOREIGN KEY (ID_Video) REFERENCES Videos(ID_Video)
);

```


# Ejercicio 5: Arquitectura del backend

1. Estructura de archivos y carpetas:
```
  - /src
    - /config
      - database.js
      - express.js
    - /controllers
      - productController.js
      - userController.js
    - /middlewares
      - authMiddleware.js
      - validationMiddleware.js
    - /models
      - Product.js
      - User.js
    - /routes
      - index.js
      - productRoutes.js
      - userRoutes.js
    - /services
      - productService.js
      - userService.js
    - /utils
      - errorHandler.js
      - logger.js
  - /tests
  - /node_modules
  - .env
  - app.js
  - package.json
```

2. Tecnologías y librerías:
```
 Express.js: Como framework principal para gestionar rutas, middlewares, y la lógica del servidor.
 
 Mongoose: Para interactuar con la base de datos MongoDB y definir modelos de datos.

JWT (JSON Web Tokens): Para la autenticación y autorización de usuarios.

Joi o Validator: Para la validación de datos en las solicitudes HTTP.

Bcrypt: Para el hash de contraseñas y la seguridad de la autenticación.

Morgan y Winston: Para el registro de eventos y la gestión de logs.

Dotenv: Para la gestión de variables de entorno.

Jest o Mocha/Chai: Para la escritura y ejecución de pruebas.
```

3. Configuración:
```
app.js: Archivo principal para la configuración del servidor Express y la conexión a la base de datos.

/config: Almacena archivos de configuración, como la configuración de la base de datos y la         configuración de Express.
```

4. Rutas y Controladores:
```
/routes: Define las rutas de la aplicación y utiliza controladores para manejar las solicitudes HTTP.

/controllers: Contiene lógica de controladores para manejar solicitudes y respuestas.
```

5. Modelos y Servicios:
```
/models: Define los modelos de datos utilizando Mongoose para interactuar con la base de datos.

/services: Implementa la lógica de negocio de la aplicación, interactuando con los modelos y realizando operaciones específicas.
```

6. Middlewares:
```
/middlewares: Contiene funciones middleware, como la autenticación, validación de datos, etc.
```

7. Utilidades y Manejo de Errores:
```
/utils: aqui van funciones de utilidad, como manejadores de errores y funciones de ayuda.
```

8. Pruebas:
```
/tests: Contiene pruebas unitarias y de integración para garantizar la fiabilidad del código.
```

9. Patrones de diseño:
```
MVC (Model-View-Controller): Patrón para separar la lógica de la aplicación en modelos, vistas y controladores.

Middleware Pattern: Emplea middleware para manejar la lógica de autenticación, validación, y otras operaciones entre la solicitud y la respuesta.

Servicios y Repositorios: Divide la lógica de negocio en servicios y utiliza repositorios para interactuar con la base de datos.
```

10. Variables de entorno:
```
Archivo .env para almacenar configuraciones sensibles como claves secretas, URL de bases de datos.
```

11. Seguridad:
```
Utilización de hash de contraseñas, validación de datos y autenticación basada en tokens.
```

# Ejercicio 6: Nomenclatura

Política de Nomenclatura del Equipo de Desarrollo en Node.js

Objetivo:
Establecer pautas claras y coherentes para la nomenclatura en el desarrollo de software en Node.js, promoviendo la consistencia, legibilidad y mantenibilidad del código y otros artefactos del proyecto.


1. Nombres Generales:
a. Utilizar nombres descriptivos y significativos.
b. Evitar abreviaturas no estándar o ambigüedades.

Ejemplo:
```
- Incorrecto
const a = 10;

- Correcto
const numberOfItems = 10;
```

2. Bases de Datos:
a. Prefijo del nombre de la base de datos con el nombre del proyecto.
b. Utilizar camelCase para los nombres de las tablas y columnas.
c. Evitar nombres genéricos y utilizar nombres que reflejen el propósito de la tabla o columna.

Ejemplo:
```
- Incorrecto
CREATE TABLE userTable (
    ID INT,
    UserName VARCHAR(255)
);

- Correcto
CREATE TABLE project_user (
    user_id INT,
    user_name VARCHAR(255)
);
```

3. Variables:
a. Utilizar camelCase para las variables.
b. Ser descriptivo en el nombre de la variable.
c. Evitar nombres demasiado cortos o crípticos.

Ejemplo:
```
- Incorrecto
const x = 5;

- Correcto
const numberOfUsers = 5;
```

4. Funciones:
a. Utilizar camelCase para los nombres de funciones.
b. Nombrar las funciones de manera que reflejen su propósito y comportamiento.
c. Evitar funciones demasiado extensas.

Ejemplo:
```
- Incorrecto
function calculate() {

}

- Correcto
function calculateTotalAmount() {

}
```

5. Clases:
a. Utilizar PascalCase para los nombres de clases.
b. Nombrar las clases de manera que reflejen claramente su responsabilidad.
c. Evitar clases con múltiples responsabilidades.

Ejemplo:
```
- Incorrecto
class data {

}

- Correcto
class UserManager {

}
```

6. Git:
a. Nombrar las ramas de forma descriptiva y utilizando kebab-case.
b. Utilizar commits pequeños y descriptivos.
c. Evitar nombres de ramas genéricos.

Ejemplo:
```
- Incorrecto
git checkout featureBranch

- Correcto
git checkout feature/adding-authentication
```

7. Comentarios:
a. Utilizar comentarios para explicar el propósito o la intención del código cuando sea necesario.
b. Evitar comentarios obvios o redundantes.

Ejemplo:
```
- Incorrecto
// Incremento en 1
counter += 1;

- Correcto
// Aumentar el contador en 1
counter += 1;
```

8. Idioma:
a. Utilizar un idioma común para la nomenclatura, preferiblemente en inglés.
b. Evitar mezclar idiomas dentro del código o los nombres de los archivos.


9. Revisión y Mantenimiento:
a. Realizar revisiones periódicas de la conformidad con estas pautas.
b. Actualizar la nomenclatura si se identifican oportunidades de mejora o cambios en los requisitos del proyecto.


10. Consistencia:
a. Mantener la consistencia en toda la base de código y otros activos del proyecto.


11. Ejemplos:
a. Proporcionar ejemplos específicos para ilustrar las pautas de nomenclatura en acción.


12. Constantes:
a. Utilizar MAYÚSCULAS_SNAKE_CASE para los nombres de constantes.
b. Ser descriptivo y evitar valores mágicos sin explicación.

Ejemplo:
```
- Incorrecto
const maxAttempts = 3;

- Correcto
const MAX_ATTEMPTS = 3;
```

13. Enumeraciones:
a. Utilizar PascalCase para los nombres de enumeraciones.
b. Agregar el sufijo "Enum" al nombre de la enumeración.

Ejemplo:
```
- Incorrecto
const status = {
    PENDING: "Pending",
    APPROVED: "Approved",
    REJECTED: "Rejected"
};

- Correcto
const StatusEnum = {
    PENDING: "Pending",
    APPROVED: "Approved",
    REJECTED: "Rejected"
};
```

14. Acrónimos y Abreviaturas:
a. Evitar acrónimos y abreviaturas poco claras; optar por la claridad sobre la brevedad.
b. Si se utilizan acrónimos, definirlos en un documento de referencia.

15. Test Unitarios:
a. Prefijo de los nombres de las pruebas con "test_".
b. Utilizar nombres descriptivos para las pruebas unitarias.

Ejemplo:
```
- Incorrecto
function calculateTest() {

}

- Correcto
function test_calculateTotalAmount() {

}
```

16. Interfaz de Usuario:
a. Utilizar camelCase para los nombres de variables y funciones relacionadas con la interfaz de usuario.
b. Nombrar los elementos de la interfaz de manera coherente con el diseño.

Ejemplo:
```
- Incorrecto
function updateUserInformation(user_name, user_age) {

}

- Correcto
function updateUserInfo(userName, userAge) {

}
```


17. Servicios y APIs:
a. Utilizar kebab-case para los nombres de rutas y servicios en APIs REST.
b. Ser explícito en los nombres de los servicios

Ejemplo:
```
- Incorrecto
app.get('/getUserProfile', (req, res) => {

});

- Correcto
app.get('/user-profile', (req, res) => {
    
});

```

18. Nombres de Proyectos y Repositorios:
a. Utilizar kebab-case para los nombres de proyectos y repositorios.
b. Evitar nombres genéricos y buscar reflejar el propósito del proyecto.

Ejemplo:
```
- Incorrecto
ProjectXYZ

- Correcto
nodejs-web-app
```


19. Documentación:
a. Incluir documentación detallada sobre la nomenclatura utilizada en el proyecto.
b. Mantener la documentación actualizada a medida que evoluciona el proyecto.