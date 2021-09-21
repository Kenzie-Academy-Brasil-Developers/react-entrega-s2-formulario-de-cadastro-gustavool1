import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from "react-router"
import "./style.css"
import FormAnimated from "../../Motion/FormAnimated"
const Form = ({ setUserData }) =>{
    const history = useHistory()
    const formScheme = yup.object().shape({
        name: yup.string().required("Nome obrigatório").min(4, 'Seu nome precisa ter no minimo 3 letras'),
        email: yup.string().required("Email obrigatório").email("Informe um email válido"),
        confirmEmail: yup.string().required("Confirmação de email obrigatória").oneOf([yup.ref('email')], 'Os email não são iguais'),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/, 'Sua senha precisa conter: no mínimo 8 caracteres. 1 letra maiúscula no mínimo. 1 Número. 1 símbolo &@#*$.'),
        confirmPassword: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref('password')], 'As senhas não são iguais')
    })

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(formScheme)
    })

    const onSubmit = (data)=>{
        setUserData(data)
        history.push(`/logged/${data.name}`)
    }
    console.log(errors)
    return(
        <FormAnimated>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField  id="outlined-basic" label="Nome *" variant="outlined" {...register("name")} error={!!errors.name} helperText={errors.name?.message}/> 
                <TextField id="outlined-basic" label="Email *" variant="outlined" {...register("email")} error={!!errors.email} helperText={errors.email?.message}/> 
                <TextField id="outlined-basic" label="Confirmar Email*" variant="outlined" {...register("confirmEmail")} error={!!errors.confirmEmail} helperText={errors.confirmEmail?.message}/> 
                <TextField className='password' type='password' id="outlined-basic" label="Senha * " variant="outlined" {...register("password")} error={!!errors.password} helperText={errors.password?.message}/> 
                <TextField id="outlined-basic" type='password' label="Confirmar Senha * " variant="outlined" {...register('confirmPassword')} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message}/> 
                <Button type='submit'>Cadastrar</Button>
            </form>
        </FormAnimated>
    )
}
export default Form