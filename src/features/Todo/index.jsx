import React, { useState } from 'react';

import Todolist from './components/Todolist';

TodoFeatues.propTypes = {

};

function TodoFeatues(props) {
    const innittodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 1,
        },
        {
            id: 2,
            title: 'Sleep',
            status: 0,
        },
        {
            id: 3,
            title: 'Code',
            status: 1,
        }
    ];

    const [todoList, setTodoList] = useState(innittodoList);
    const [fillerStt, setFillerStt] = useState(2);
    const handleTodoClick = (todo, index) => {

        //clone 1 mảng hoặc obj mới ra
        const newTodoList = [...todoList];

        // thay đổi trạng thái state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 1 ? 0 : 1
        }
        //console.log(newTodoList[index]);
        //update todolist
        setTodoList(newTodoList);
    };

    const showAll = () => {
        setFillerStt(2);
    };
    const showSttrue = () => {
        setFillerStt(1);
    };
    const showSttfalse = () => {
        setFillerStt(0);
    };

    const renderTodolist = todoList.filter(todo => fillerStt === 2 || fillerStt === todo.status);
    return (
        <div>
            <h1>test</h1>
            <Todolist todoListTest={renderTodolist} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={showAll}>show all</button>
                <button onClick={showSttrue}>show status true</button>
                <button onClick={showSttfalse}>show status false</button>
            </div>
        </div>

    );
}

export default TodoFeatues;