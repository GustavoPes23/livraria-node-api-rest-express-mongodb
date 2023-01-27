import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {id: 1, 'titulo': 'Senhor dos Aneis'},
    {id: 2, 'titulo': 'O Hobbit'}
];

app.get('/', (_, res) => {
    res.status(200).send('Curso de Node');
});

app.get('/livros', (_, res) => {
    res.status(200).json(livros)
});

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso'); //status 201 é criação com sucesso
});

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params; //atribuição via desestruturação
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso!`);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;