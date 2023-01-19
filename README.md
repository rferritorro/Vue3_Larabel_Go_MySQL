# UsedNapkin

_Proyecto de 2DAW sobre un resturante de sushi. Consiste en una pagina web del restaurante usedNapkin, donde puedes reservar cualquier mesa a tu disposición siempre y cuando la mesa este disponible en nuestro horario.
En este readme os presentamos las tecnologías que hemos gastado y unos videos básicos mostrando la funcionalidad de nuestra aplicación._

## Video presentación

### Primer video:
Acciones en la aplicación web sin haber iniciado sesión. No puedes crear ninguna reserva, solo observar el Home, About y Mesas disponibles:
https://user-images.githubusercontent.com/102309782/213531945-be4acd1b-bec4-467e-9742-14808828a5f7.mp4

### Segundo video:
Acciones en la aplicación web con el usuario iniciado ya sea cliente o admin le correspondera las diferentes acciones disponibles, reservar mesas, profile, administrador desde el panel dashboard puede crear, actualizar y eliminar las reservas, mesas y menus disponibles en nuestro restaurante.
https://user-images.githubusercontent.com/102309782/213532051-372eaece-7e62-4c7e-8b59-7fe661398051.mp4



## Comenzando 🚀

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_
| Imagen | Getting Started|
| --- | --- |
| ![image](https://user-images.githubusercontent.com/102603519/213492810-3b377cac-3839-47e0-9078-9fc8a4c7d464.png) | [Link](https://www.npmjs.com/) |
| ![image](https://user-images.githubusercontent.com/102603519/213493202-236b4461-b022-4779-8bbe-df4e162031c7.png) | [Link](https://vuejs.org/guide/introduction.html) |
| ![image](https://user-images.githubusercontent.com/102603519/213493551-75ab64e9-6a0b-4cdf-b6ea-cbdb839d8de9.png) | [Link](https://laravel.com/docs/4.2/quick) |
| ![image](https://user-images.githubusercontent.com/102603519/213493652-63389981-1e6a-4b5e-8cce-1139d35972a1.png) | [Link](https://go.dev/doc/tutorial/web-service-gin) |

### Instalación 

_Con el instalador de paquetes de Javascript NPM instalaremos todo lo que nos hace falta_

```
npm init
npm install
```

_Instalación de Composer para los paquetes PHP para laravel_

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
php composer-setup.php --install-dir=bin

```
_Instalación paquetes Laravel_

```
composer global require laravel/installer
laravel new test
composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run dev

```

_Instalación paquetes Go_

```
Instalar este paquete para windows [Link]( https://golang.org/doc/install)
```

_Instalación paquetes Vue_

```
npm install vue
```

## BBDD ⚙️

_Usamos Phpmyadmin para poder acceder a la base de datos y realizar las configuraciones_

### Despliegue 📦

![image](https://user-images.githubusercontent.com/102603519/213495698-94ff2f54-2afc-47ca-aa94-ac22097f21a1.png)

## ESTRUCTURA PROYECTO:
_Nuestro proyecto cuenta con dos apartados Backend y Frontend, en la parte de Frontend tenemos todo el proyecto de la parte cliente gastado con Vue, y dentro de Vue tenemos los distintos componentes, composables, views, store y rutas del proyecto en Vue. Y en la parte de Backend tenemos dos tecnologías como son Laravel y Go, laravel la gastamos para el panel admin donde el administrador podrá realizar varias acciones y en Go las acciones que realizará un cliente sin derechos a administrador._

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Rafa Ferri** - *rferritorro* - [rferritorro](https://github.com/rferritorro)
* **Sergi Biosca** - *sbiosca* - [sbiosca](https://github.com/sbiosca)

