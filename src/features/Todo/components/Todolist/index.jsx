import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todoListTest: PropTypes.array
};
Todolist.defaultProps = {
    todoListTest: []
}
function Todolist({ todoListTest }) {
    return (
        <div>
            <ul>
                {todoListTest.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;