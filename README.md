# SimpleCrud

This project is an application for access a simple crud for administration of car clients.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Overall organization 

###  Client Crud
The client-crud component handle all user inputs and validate them.

### Client List
The client-list component list all registered client and handle delete and update methods

### Main
The main component handle all options enabled on the project

# Development

* Run it for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
``` bash
ng serve
```

## Tests
* Run e2e test with cypress
``` bash
npm run cypressTest
```
* Run unit tests with jest
``` bash
npm run jestTest
```

## Deploy
* build it
``` docker
docker build -f dockerfile-dependencies -t ghcr.io/erickstorck/simple-crud/dependencies:latest .

docker build -f dockerfile -t ghcr.io/erickstorck/simple-crud:latest .
```

* update github registry
``` docker
docker push ghcr.io/erickstorck/simple-crud/dependencies:latest

docker push  ghcr.io/erickstorck/simple-crud
```

* run it
``` docker
docker run --rm -it -p 80:80 --name simple-crud ghcr.io/erickstorck/simple-crud:latest
```