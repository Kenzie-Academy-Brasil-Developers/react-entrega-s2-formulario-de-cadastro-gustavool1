import { motion } from 'framer-motion'

const FormAnimated = ({ children }) =>{
    return(
        <motion.div
        initial={{opacity:0, y:-50}}
        transition={{ duration: 2}}
        animate={{opacity:1, y:0}}
      >
            { children }
        </motion.div>
    )
}
export default FormAnimated