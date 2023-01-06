import DisplayTodos from './DisplayTodos';
import React,{Fragment} from 'react';
import "../css/main.css";
import { motion } from "framer-motion";
import Todos from './Todos';


function TodoAuthContent(props) {
  return (
    <Fragment>
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Todo App
          </motion.h1>
          <motion.button
            onClick={(e) => props.onAuthentication(e)}
            className="btn"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Sign Out
          </motion.button>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
           <Todos/>
          <DisplayTodos/>
          </motion.div>
        </Fragment>
  )
}

export default TodoAuthContent;