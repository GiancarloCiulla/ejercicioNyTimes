// Conexión con la API de NYTimes
const apiKey = 'KwCx0gWhrX55ne0bYo9JC1fNtNgx5KL0';
const baseUrl = 'https://api.nytimes.com/svc/books/v3';

// Funciones para mostrar y ocultar el spinner
function showLoadingSpinner() {
  const loadingSpinner = document.getElementById('loading');
  loadingSpinner.style.display = 'block'; // Muestra el spinner
}

function hideLoadingSpinner() {
  const loadingSpinner = document.getElementById('loading');
  loadingSpinner.style.display = 'none'; // Oculta el spinner
}

// Obtener todas las listas de libros
async function fetchLists() {
  showLoadingSpinner(); // Muestra el spinner antes de la llamada
  try {
    const response = await fetch(`${baseUrl}/lists/names.json?api-key=${apiKey}`);
    if (!response.ok) throw new Error('Error en la red'); // Manejo de errores de red
    const data = await response.json();
    renderDashboard(data.results); // Renderiza el dashboard con las listas
  } catch (error) {
    console.error('Error fetching lists:', error);
    alert('Hubo un problema al cargar las listas. Por favor, intenta nuevamente.');
  } finally {
    hideLoadingSpinner(); // Oculta el spinner después de la llamada
  }
}

// Inicializar la carga de listas al cargar el documento
document.addEventListener('DOMContentLoaded', fetchLists);

// Dashboard inicial: Renderizar el dashboard con todas las listas
function renderDashboard(lists) {
  const listsContainer = document.getElementById('lists-container');
  const booksContainer = document.getElementById('books-container');

  listsContainer.style.display = 'block'; // Muestra el contenedor de listas
  booksContainer.style.display = 'none'; // Oculta el contenedor de libros
  listsContainer.innerHTML = ''; // Limpia el contenedor

  lists.forEach((list) => {
    const listElement = document.createElement('div');
    listElement.classList.add('list-item');
    listElement.innerHTML = `
      <h2>${list.display_name}</h2>
      <p>Fecha más antigua: ${list.oldest_published_date}</p>
      <p>Última incorporación: ${list.newest_published_date}</p>
      <p>Frecuencia: ${list.updated}</p>
      <button onclick="loadList('${list.list_name_encoded}')">Ver Lista</button>
    `;
    listsContainer.appendChild(listElement);
  });
}

// Cargar y mostrar una lista específica de libros
async function loadList(listName) {
  showLoadingSpinner(); // Muestra el spinner antes de la llamada
  try {
    const response = await fetch(`${baseUrl}/lists/current/${listName}.json?api-key=${apiKey}`);
    if (!response.ok) throw new Error('Error en la red'); // Manejo de errores de red
    const data = await response.json();
    renderBookList(data.results.books); // Renderiza los libros en el DOM
  } catch (error) {
    console.error('Error fetching books list:', error);
    alert('Hubo un problema al cargar la lista de libros. Por favor, intenta nuevamente.');
  } finally {
    hideLoadingSpinner(); // Oculta el spinner después de la llamada
  }
}

// Renderizar la lista de libros en el DOM
function renderBookList(books) {
  const listsContainer = document.getElementById('lists-container');
  const booksContainer = document.getElementById('books-container');

  listsContainer.style.display = 'none'; // Oculta el contenedor de listas
  booksContainer.style.display = 'block'; // Muestra el contenedor de libros
  booksContainer.innerHTML = '<button onclick="fetchLists()">Atrás</button>'; // Botón de regreso

  books.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book-item');
    bookElement.innerHTML = `
      <h3>#${index + 1} - ${book.title}</h3>
      <img src="${book.book_image}" alt="Cover of ${book.title}">
      <p>Semanas en lista: ${book.weeks_on_list}</p>
      <p>${book.description}</p>
      <a href="${book.amazon_product_url}" target="_blank">Comprar en Amazon</a>
    `;
    booksContainer.appendChild(bookElement);
  });
}


//FIREBASE
// Configuración de Firebase
// Configuración de Firebase para el proyecto Biblioteca NYTimes
const firebaseConfig = {
    apiKey: "AIzaSyC7-9JI5y-8HJ5di4TMhNfGm3jBs8Dz6ew",
    authDomain: "biblioteca-nytimes-39f4b.firebaseapp.com",
    projectId: "biblioteca-nytimes-39f4b",
    storageBucket: "biblioteca-nytimes-39f4b.appspot.com",
    messagingSenderId: "377643391478",
    appId: "1:377643391478:web:abcdefghijklmno"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  