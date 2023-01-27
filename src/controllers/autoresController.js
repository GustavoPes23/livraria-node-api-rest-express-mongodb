import autores from "../models/Autor.js";

class AutoresController {

    static listarAutores = (_, res) => {
        autores.find((_, autores) => {
            res.status(200).json(autores);
        });
    }

    static listarAutorPorId = (req, res) => {
        const {id} = req.params;

        autores.findById(id, (err, autor) => {
            if(err)
                res.status(400).send({message: `${err.message} - Id do autor não localizado`});
            else 
                res.status(200).send(autor);
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`});
            else 
                res.status(201).send(autor.toJSON()); //status 201 é criação com sucesso
        });
    }

    static atualizarAutor = (req, res) => {
        const {id} = req.params; //atribuição via desestruturação

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao atualizar autor.`});
            else 
                res.status(201).send({message: 'autor atualizado com sucesso'});
        });
    }

    static excluirAutor = (req, res) => {
        const {id} = req.params;

        autores.findByIdAndDelete(id, (err) => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao remover o autor.`});
            else 
                res.status(200).send({message: 'autor removido com sucesso'});
        });
    }

}

export default AutoresController;