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

# Deploy

Push changes to Github:
```
git add .
git commit -am "make it better"
git push origin main | git push
```

Heroku redeploy sin cambios:
```
git commit --allow-mpty -m "Tigger Heroku deploy"
git push heroku <master|main>
```
Push changes to heroku:
```
git push heroku main
```
Heroku logs on the console of the project:
```
heroku logs --tail
```

# Production Build
1. Create ```.env.prod```
2. Full the env variables to prod
3. Create the new image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

Run
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

Por defecto, docker-compose usa el archivo .env, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con


# Otros
Descargar imagen de Mongo 5.0.0 y postgres 14
```
docker pull mongo:5.0.0
docker pull postgres:14.3

npm i class-validator class-transformer
npm i @nestjs/mongoose mongoose

npm i axios
```

## Stack usado

* MongoDB
* Nest




