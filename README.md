# Tecopos - Tienda Online con React

Este proyecto es una aplicación de frontend para una tienda en línea desarrollada con React y Vite. Permite a los usuarios ver productos, filtrarlos por categoría, buscarlos, agregarlos a un carrito de compras y proceder a una página de pago con validación de formulario.

## Características

-   **Catálogo de Productos**: Muestra una lista de productos obtenidos desde la [Fake Store API](https://fakestoreapi.com/).
-   **Búsqueda y Filtros**: Permite buscar productos por nombre y filtrarlos por categoría.
-   **Detalle de Producto**: Página dedicada para ver los detalles de un producto específico.
-   **Carrito de Compras**: Funcionalidad completa para agregar, eliminar y actualizar la cantidad de productos en el carrito.
-   **Persistencia de Datos**: El contenido del carrito se guarda en el `localStorage` del navegador para persistir entre sesiones.
-   **Formulario de Checkout**: Una página de pago con validación de campos antes de finalizar la compra.
-   **Diseño Responsivo**: Interfaz estilizada con Tailwind CSS que se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

-   **React**: Biblioteca para construir la interfaz de usuario.
-   **Vite**: Herramienta de desarrollo para un inicio y recarga en caliente (HMR) rápidos.
-   **React Router**: Para el manejo de las rutas de la aplicación.
-   **Tailwind CSS**: Framework de CSS para un diseño rápido y moderno.
-   **React Hook Form**: Para la gestión y validación de formularios.

## Instalación y Puesta en Marcha

Sigue estos pasos para levantar el proyecto en tu entorno local.

### Prerrequisitos

-   [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada)
-   [npm](https://www.npmjs.com/) (generalmente se instala con Node.js)

### Pasos

1.  **Clona el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/tecocop-frontend-test.git
    ```
    *Recuerda reemplazar `tu-usuario` con tu nombre de usuario de GitHub.*

2.  **Navega al directorio del proyecto**
    ```bash
    cd tecocop-frontend-test
    ```

3.  **Instala las dependencias**
    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo**
    ```bash
    npm run dev
    ```

Una vez ejecutado, la aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite indique en la terminal).

## Scripts Disponibles

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
-   `npm run preview`: Sirve la compilación de producción localmente para