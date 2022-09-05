<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __env.template__ y renombrar la copia a ```.env```

6. Llenar las varaibles de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en dev:
```
npm run start:dev
```

8. Reconstruir la BD con la semilla
```
localhost:3000/api/v2/seed
```

# Otros
Descargar imagen de Mongo 5.0.0 y postgres 14
```
docker pull mongo:5.0.0
docker pull postgres:14.3

npm i class-validator class-transformer
npm i @nestjs/mongoose mongoose

npm i axios
```

## Notas
Heroku redeploy sin cambios:
```
git commit --allow-mpty -m "Tigger Heroku deploy"
```

## Stack usado

* MongoDB
* Nest




