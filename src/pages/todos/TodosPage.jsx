import React, {useEffect, useRef, useState} from 'react';
import './TodosPage.css'
import TodoItem from "../../components/TodoItem";

const TodosPage = () => {

    let todoCount = useRef(0)
    const inputTitle = useRef()
    const onFocus = () => {
        inputTitle.current.focus();
    }


    const [todoItem, setTodoItem] = useState({
        id: todoCount.current, title: "", body: ""
    });

    const {title, body} = todoItem;

    const [todoItems, setTodoItems] = useState([]);

    const handleOnChange = (event) => {
        const {value, name} = event.target;
        setTodoItem({
            ...todoItem, [name]: value,
        });
    };


    const handleChangeTodoItems = () => {
        const todo = {
            id: todoCount.current, completed: false, title, body
        }
        setTodoItems([...todoItems, todo])
        todoCount.current += 1
        setTodoItem({title: "", body: ""})
    }


    const handleRemoveTodoItems = (event) => {
        setTodoItems(todoItems.filter((item) => item.id !== event))
    }

    useEffect(() => {
        const getTodo = JSON.parse(localStorage.getItem('todo'));

        if (getTodo === null) {
            setTodoItems([])
        }

        if (getTodo !== null && getTodo.length) {
            const lastItem = getTodo.pop()
            todoCount.current = lastItem.id + 1
            setTodoItems(JSON.parse(localStorage.getItem('todo')))
        }

    }, []);


    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoItems))
    }, [todoItems]);


    return (<div>
        <div className="container">
            <div className="todo-header">
                <div className="todo-title">TODO List</div>
                <div className="todo-item-count">{todoItems.length}</div>
            </div>
            <div className="flex">
                <div className="todo-input">
                    <input type="text" name="title" value={title} className="todo-input-title" placeholder="Notes"
                           onChange={handleOnChange} onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                            handleChangeTodoItems()
                            onFocus();
                        }
                    }} ref={inputTitle}/>

                    <input type="text" name="body" value={body} className="todo-input-body" placeholder="Contents"
                           onChange={handleOnChange} onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                            handleChangeTodoItems()
                            onFocus();
                        }
                    }}/>
                </div>
            </div>


            {todoItems.length ? todoItems.map(todo => <TodoItem todo={todo} key={todo.id}
                                                                handleRemoveTodoItems={handleRemoveTodoItems}/>) :
                <div className="no-items">All Items Completed</div>}
        </div>

    </div>)
}

export default TodosPage