# Prueba Tecnica Ingertec - API
![Node.js](https://shields.io/badge/BackEnd-Node.js-orange?logo=node.js&style=plastic)
![Express](https://shields.io/badge/BackEnd-Express-orange?logo=express&style=plastic)
![Heroku](https://custom-icon-badges.herokuapp.com/badge/status-deployed-violet.svg?logo=heroku-logo)

Servidor para proveer archivos estáticos para ser utilizado en la prueba tecnica Ingertec.

## Instrucciones para ejecutar el servidor de manera local:
`NOTA:` Se requiere de las siguientes versiones de **NODE** y **NPM** para poder ejecutar el servidor:
 * __Node__: 12.18.3 or higher
 * __NPM__: 6.14.16 or higher
 
Copiar el repositorio e instalar las dependencias necesarias:
 ```bash
git clone https://github.com/RomeroFederico/prueba-tecnica-ingertec-api.git
npm install
```
Crear en el directoria raiz el archivo `.env` con el siguiente formato:
 ```bash
NODE_ENV=development
PORT=3001
API_HOST=localhost
CORS=http://localhost:3000
```
* __PORT__: Puede modificarse el puerto a gusto.
* __CORST__: La ruta donde se alojara el cliente.

Para finalizar, iniciar el servidor.
 ```bash
npm run dev
```
