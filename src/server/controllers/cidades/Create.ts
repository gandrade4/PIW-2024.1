import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface ICidade{
    nome: string
}

//aqui eu vou acessar os dados que receberei do front end - faz sentido com login e formulario de alugar quadra por exemplo
//la no isominia eu criei uma pasta para receber apenas nomes de cidade
//todas as variveis foram tipadas para não ficarem any

export const create = (req: Request<{}, {}, ICidade>, res: Response) =>{


    if(req.body.nome === undefined){
        return res.status(StatusCodes.BAD_REQUEST).send('Informe um >nome< válido)')
    }
    console.log(req.body.nome)


    return res.send('Create!');
}
