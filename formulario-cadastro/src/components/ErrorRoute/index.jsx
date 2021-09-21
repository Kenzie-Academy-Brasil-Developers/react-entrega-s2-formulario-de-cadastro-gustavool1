import { Button } from "@mui/material"
import { useHistory } from "react-router"
import './style.css'
const ErrorRoute = () =>{
    const history = useHistory()
    const handleClick = () =>{
        history.push("/")
    }
    return (
        <div className='error-route'>
            <h1>Pagina inexistente</h1>
            <Button variant='contained' onClick={()=> handleClick()}>Voltar para pagina principal</Button>
        </div>
    )
}
export default ErrorRoute