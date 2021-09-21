import { motion } from 'framer-motion'
import './style.css'
const DivAnimated = ({children}) =>{
    return(
        <motion.div className='animated-div'
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        whileHover={{ y:-20 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
        >
        { children } 
        </motion.div>
    )
}
export default DivAnimated