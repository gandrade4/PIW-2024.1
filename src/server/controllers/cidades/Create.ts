import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICidade{
    nome: string
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),

})

//aqui eu vou acessar os dados que receberei do front end - faz sentido com login e formulario de alugar quadra por exemplo
//la no isominia eu criei uma pasta para receber apenas nomes de cidade
//todas as variveis foram tipadas para não ficarem any
//instalamos o yup pra nao precisar fazer varios if elses em formulario

export const create = async (req: Request<{}, {}, ICidade>, res: Response) =>{

    let validadeData: ICidade | undefined = undefined;
    
    try{
        validadeData = await bodyValidation.validate(req.body);

    }catch (error){
        const yupError = error as yup.ValidationError;
        return res.json({
            errors:{
                default: yupError.message,
            }
        })
    }

    console.log(validadeData)


    return res.send('Create!');
}
