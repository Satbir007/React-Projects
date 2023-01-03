import React, {useRef} from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaCheckDouble, FaWindowClose } from "react-icons/fa";

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo} = props;

    const inputRef = useRef(true);

    const changeFocus = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    };
  
    const update = (id, value, event) => {
      if (event.which === 13) {
        updateTodo({ id, item: value });
        inputRef.current.disabled = true;
      }
    };

  return (
    <motion.li 

    initial={{x:"150vw",transition:{type:"spring",duration:2}}}
    animate={{x:0,transition:{type:"spring",duration:2}}}
     whileHover={{scale:0.9,transition:{type:"spring",duration:0.1}}}
     exit={{x:"-60vw",scale:[1,0], transition:{duration: 0.5}, backgroundColor: "rgba{255,0,0,1}" } }
    key={item.id} className="card">
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyPress={(event) =>
                  update(item.id, inputRef.current.value, event)
                }
              />
              <div class="btns">

              <motion.button  whileHover={{scale: 1.4}} whileTap={{scale:0.9}} onClick={() => changeFocus()} style={{color:"blue"}}><FaEdit/></motion.button>
              {
                item.completed === false && (<motion.button whileHover={{scale: 1.4}} whileTap={{scale:0.9}} style={{color:"green"}} onClick={() => completeTodo(item.id)}>
                <FaCheckDouble/>
                </motion.button>)
                
              }
              
              < motion.button whileHover={{scale: 1.4}} whileTap={{scale:0.9}} style={{color:"red"}} onClick={() => removeTodo(item.id)}><FaWindowClose/></motion.button>
              </div>
              {item.completed && <span className="completed">Done</span>}
            </motion.li>
  );
};

export default TodoItem