import PropTypes from 'prop-types'
import styles from './Todos.module.css' 
import classnames from 'classnames' // untuk generate sebuah multiple class / dynamic class berdasarkan data tertentu
import PlusIcon from "../../assets/plus-icon.svg";
import MinusIcon from "../../assets/minus-icon.svg";


const Todos = ({todos, onAddSubtraction}) => {
    return (
        <div className={styles.todos}>
            {todos.map((todo,index,arr) => {
            return (
                <div key={index} 
                // className={`todo ${!(arr.length === index + 1) && styles.todoDivider}`}
                // Penerapan classnames
                className={classnames(styles.todo, {
                    //class todoDivider akan ditampilkan jika memenuhi kondisi tsb
                    [styles.todoDivider]:!(arr.length === index + 1)
                })}
                >
                {todo.title}
                <div className={styles.todoIconWrapper}>
                    <div className={styles.todoCount}>{todo.count}</div>
                    <button className={styles.todoActionButton} onClick={() => onAddSubtraction(index,'minus')}>
                    <img src={MinusIcon} alt="minus icon" />
                    </button>
                    <button className={styles.todoActionButton} onClick={() => onAddSubtraction(index,'plus')}>
                    <img src={PlusIcon} alt="plus icon" />
                    </button>
                </div>
                </div>
            )
            })}
        </div>
    )
}

Todos.propTypes = {
    // Membuat object pada props
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onAddSubtraction: PropTypes.func
}


export default Todos