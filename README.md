# SimpleCrud

This project is an application for access a simple crud for administration of car clients.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tests
To end-to-end test run `npm run cypressTest`
To unit tests run `npm run jestTest`

# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Build
``` docker
docker build -f dockerfile-dependencies -t ghcr.io/erickstorck/simple-crud/dependencies:latest .

docker push ghcr.io/erickstorck/simple-crud/dependencies:latest

docker build -f dockerfile -t ghcr.io/erickstorck/simple-crud:latest .

docker push  ghcr.io/erickstorck/simple-crud
```

* run it locally
``` docker
docker run --rm -it -p 80:80 --name simple-crud ghcr.io/erickstorck/simple-crud:latest
```

* run it 
``` docker
docker run --rm -it -p 80:80 --name simple-crud ghcr.io/erickstorck/simple-crud:latest
```