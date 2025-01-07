# WebdriverIO Test Library

Este proyecto es una biblioteca de pruebas automatizadas para aplicaciones web utilizando WebdriverIO. Está diseñada para facilitar la creación y ejecución de pruebas end-to-end, garantizando la calidad y funcionalidad de las aplicaciones web.

## Características

- **WebdriverIO**: Framework de automatización de pruebas para aplicaciones web y móviles. :contentReference[oaicite:0]{index=0}
- **Testing Library**: Utiliza las utilidades de Testing Library para fomentar buenas prácticas en las pruebas. :contentReference[oaicite:1]{index=1}
- **TypeScript**: Soporte para escritura de pruebas en TypeScript.
- **Allure Reports**: Generación de reportes de pruebas con Allure.

## Estructura del Proyecto

- **test/**: Contiene los casos de prueba automatizados.
- **reports/**: Directorio donde se generan los reportes de Allure.
- **wdio.conf.ts**: Archivo de configuración de WebdriverIO.
- **package.json**: Archivo de configuración de npm que gestiona las dependencias del proyecto.
- **tsconfig.json**: Archivo de configuración de TypeScript.

## Requisitos Previos

- **Node.js**: Versión 14 o superior.
- **npm**: Administrador de paquetes de Node.js.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/JonathanLopez0327/webdriverio-test-library.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd webdriverio-test-library
   ```
3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## Instalación

1. Asegúrate de que el servidor de la aplicación web que deseas probar esté en funcionamiento.
2. Ejecuta las pruebas utilizando WebdriverIO:
   ```bash
   npx wdio run wdio.conf.ts
   ```
