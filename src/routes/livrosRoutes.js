import express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/busca", LivrosController.listarLivroPorEditora) //ele prioriza as ações de cima para baixo, caso o busca ficasse abaixo do listarLivroPorId ele iria entender que busca?nome fosse um id - buscas mais específicas ficam em cima
    .get("/livros/:id", LivrosController.listarLivroPorId)    
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.excluirLivro);

export default router;