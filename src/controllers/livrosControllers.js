import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (_, res) => {
        livros.find((_, livros) => {
            res.status(200).json(livros);
        });
    }

    static listarLivroPorId = (req, res) => {
        const {id} = req.params;

        livros.findById(id, (err, livro) => {
            if(err)
                res.status(400).send({message: `${err.message} - Id do livro não localizado`});
            else 
                res.status(200).send(livro);
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            else 
                res.status(201).send(livro.toJSON()); //status 201 é criação com sucesso
        });
    }

    static atualizarLivro = (req, res) => {
        const {id} = req.params; //atribuição via desestruturação

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao atualizar livro.`});
            else 
                res.status(201).send({message: 'Livro atualizado com sucesso'});
        });
    }

    static excluirLivro = (req, res) => {
        const {id} = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao remover o livro.`});
            else 
                res.status(200).send({message: 'Livro removido com sucesso'});
        });
    }

}

export default LivroController;