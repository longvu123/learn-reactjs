import React from 'react';
import PropTypes from 'prop-types';
import Todolist from './components/Todolist';

TodoFeatues.propTypes = {

};

function TodoFeatues(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Sleep'
        },
        {
            id: 3,
            title: 'Code'
        }
    ];
    return (
        <div>
            <h1>test</h1>
            <Todolist todoListTest={todoList} />
        </div>
    );
}

export default TodoFeatues;