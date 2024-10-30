# 📚 Especificaciones del Proyecto: Biblioteca de Libros Más Vendidos

Este documento detalla las especificaciones de la Fase I de la **Biblioteca de Libros Más Vendidos**. La aplicación tiene como objetivo presentar de manera eficiente las listas de libros más vendidos, proporcionando una experiencia de usuario fluida y atractiva.

---

## 🌟 Características Clave

### 1. Animación de Carga
- Se incluirá una **animación** que se mostrará mientras se cargan los datos desde la API. Esto mejorará la experiencia del usuario al hacer que la espera sea más agradable.

### 2. Listas de Libros
- Al cargar la página, se mostrarán **todas las listas de libros** con la siguiente información:
  - **Nombre completo de la lista**: Indica el título de la lista de libros más vendidos.
  - **Fecha del libro más antiguo en la lista**: Muestra la fecha de publicación del libro más antiguo en la lista.
  - **Fecha del último libro incorporado**: Indica cuándo se añadió el último libro a la lista.
  - **Frecuencia de actualización**: Especifica con qué frecuencia se actualizan los datos de la lista.
  - **Link para cargar la lista**: Un enlace que permite al usuario acceder a la lista específica.

### 3. Detalles de la Lista Específica
- Al hacer clic en el enlace de una lista específica, el DOM se actualizará para mostrar:
  - Un **botón para volver atrás** que permite regresar a la vista anterior y recargar la disposición original.
  - **Libros organizados** según el orden oficial de la lista, incluyendo:
    - **Carátula del libro**: Muestra la imagen de la portada del libro.
    - **Cantidad de semanas que lleva en la lista**: Indica cuánto tiempo ha estado el libro en la lista de más vendidos.
    - **Descripción**: Proporciona un resumen breve del libro.
    - **Título y posición en la lista**: Ejemplo de formato: `#1 Título...`, `#2 Título...`, etc.
    - **Link para comprar el libro en Amazon**: Un enlace que abre la página de compra del libro en Amazon en una nueva pestaña.

---

## 📄 Implementación Técnica

- **Tecnologías Utilizadas**: 
  - JavaScript puro para la manipulación del DOM.
  - Fetch API para obtener datos de la API de NYTimes.
  - CSS para el diseño y la animación de carga.

- **Estrategia de Desarrollo**: 
  - Seguir un enfoque **mobile first** para asegurar que la aplicación sea responsiva.
  - Asegurarse de que el código sea limpio y siga las buenas prácticas de desarrollo.

---

## 🚀 Próximos Pasos
- **Fase II**: Considerar la implementación de características adicionales como autenticación de usuarios, almacenamiento en Firebase, o mejoras en la interfaz.

