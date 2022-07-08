import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


Todolist.propTypes = {
    todoListTest: PropTypes.array,
    onTodoClick: PropTypes.func,
};
Todolist.defaultProps = {
    todoListTest: [],
    onTodoClick: null
}
function Todolist({ todoListTest, onTodoClick }) {
    const functionTestClick = (todo, index) => {
        if (!onTodoClick) {
            return;
        }
        onTodoClick(todo, index);
    };
    return (
        <div>
            <ul>
                {todoListTest.map((todo, index) => (
                    <li key={todo.id}
                        className={classnames({
                            'todo-item': true,
                            complete: todo.status === 1
                        })}
                        onClick={() => functionTestClick(todo, index)}
                    >{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;