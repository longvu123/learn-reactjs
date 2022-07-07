import React, { useState } from 'react';

import Todolist from './components/Todolist';

TodoFeatues.propTypes = {

};

function TodoFeatues(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat',
            status: 1,
        },
        {
            id: 2,
            title: 'Sleep',
            status: 1,
        },
        {
            id: 3,
            title: 'Code',
            status: 1,
        }
    ];

    const [todo, setTodo] = useState(todoList);

    return (
        <div>
            <h1>test</h1>
            <Todolist todoListTest={todoList} />
        </div>
    );
}

export default TodoFeatues;