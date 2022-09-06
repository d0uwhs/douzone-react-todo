import React, {useState} from 'react';
import './TodoItem.css'
import "../style/animation/opacity.css";
import {ReactComponent as Xicon} from "../style/svg/x-solid.svg";


const TodoItem = ({todo, handleRemoveTodoItems, handleChangeValues}) => {

    const [todoItem, setTodoItem] = useState({
        id: todo.id,
        completed: todo.completed,
        title: todo.title,
        body: todo.body
    });

    const handleCompleted = () => {
        setTodoItem({
            ...todoItem,
            completed: !todoItem.completed,
        })
    }

    return (
        <div className="todo-item-container">
            <div className="todo-item-box">
                <div className="box-container">
                    <button type="button" className="todo-checkbox"
                            value={todoItem.completed}
                            onClick={() => {
                                handleCompleted()
                                handleChangeValues(todoItem)
                            }}>
                    </button>
                    {!todoItem.completed || <div className="todo-done" onClick={() => {
                        handleCompleted()
                        handleChangeValues(todoItem)
                    }}/>}
                </div>

                <div className="todo-item-inputbox">
                    <div className="todo-item-title">{todo.title}</div>
                    <div className="todo-item-body">{todo.body}</div>
                </div>
                <Xicon onClick={() => {
                    handleRemoveTodoItems(todo.id)
                }} fill="#C43C34" className="todo-item-remove">
                </Xicon>

            </div>
            <div className="break-line"></div>
        </div>
    )
}

export default TodoItem