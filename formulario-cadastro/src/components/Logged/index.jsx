import { useEffect } from "react"
import { useHistory, useParams } from "react-router"
import DivAnimated from "../../Motion/DivAnimated"
import './style.css'
import { Button } from "@mui/material"
const Logged = ({ userData, setUserData }) =>{
    const data = useParams()
    const history = useHistory()
    useEffect(()=>{
        if(!userData){
            history.push('/')
        }
    })
    const handleClick = () =>{
        setUserData(null)
        history.push('/')
        console.log('teste')
    }
    return(
        <DivAnimated>
            <h1>Bem vindo,{data.name}!</h1>
            <Button onClick={()=> handleClick()}>Voltar</Button>
        </DivAnimated>
    )
}
export default Logged