import express from 'express';
import cors from 'cors';

const app = express();

const books = [
    {
      "id": 1,
      "title": "Cien años de soledad",
      "author": "Gabriel García Márquez",
      "year": 1967,
      "gender": "Realismo mágico"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "year": 1949,
      "gender": "Distopía"
    },
    {
      "id": 3,
      "title": "Rayuela",
      "author": "Julio Cortázar",
      "year": 1963,
      "gender": "Narrativa experimental"
    },
    {
      "id": 4,
      "title": "El nombre de la rosa",
      "author": "Umberto Eco",
      "year": 1980,
      "gender": "Misterio histórico"
    },
    {
      "id": 5,
      "title": "Orgullo y prejuicio",
      "author": "Jane Austen",
      "year": 1813,
      "gender": "Romance"
    }
];

app.use(cors());
app.use(express.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/search', (req, res) => { 
    const { title, author, year, gender } = req.query;
    //Filtro para que se obtenga cualquier libro que cumpla alguna de estas condiciones
    const filteredBooks = books.filter((b) =>
        b.title.toLowerCase().includes(title.toLowerCase()) ||
        b.author.toLowerCase().includes(author.toLowerCase()) ||
        b.year.toString().includes(year.toString()) ||
        b.gender.toLowerCase().includes(gender.toLowerCase())
    );

    if( filteredBooks.length == 0 ) { //filter() nunca devuelve null o undefined, siempre devuelve un array
        res.status(404).json({error: 'Libro no encontrado'});
    }

    res.json(filteredBooks);
});

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find((item) => item.id == id);
    if ( !book ) {
        res.status(404).json({error: 'Producto no encontrado'})
    }
    res.json(book);
});

app.post('/books', (req, res) => {
    const { title, author, year, gender } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author,
        year,
        gender
    }

    books.push(newBook);
    res.status(201).json(newBook);
});


app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const bookId = parseInt(id, 10);
    const booksIndex = books.findIndex((item) => item.id === bookId);

    if( booksIndex == -1 ) {
       res.status(404).json({error: 'Libro no encontrado'}); 
    }

    const { title, author, year, gender } = req.body;

    books[booksIndex] = { id: bookId, title, author, year, gender};
    res.json(books[booksIndex]);
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const bookId = parseInt(id, 10);
    const booksIndex = books.findIndex((item) => item.id === bookId);

    if( booksIndex == -1 ) {
        res.status(404).json({error: 'Libro no encontrado'}); 
     }

    books.splice(booksIndex, 1); 
    res.status(204).send();
});

app.use((req, res, next) => {
    res.status(404).json({error: 'Not Found'});
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});