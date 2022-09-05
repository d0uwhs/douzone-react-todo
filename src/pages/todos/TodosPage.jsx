import React, {useRef, useState} from 'react';
import './TodosPage.css'
import TodoItems from "../../components/input/TodoItems";

const TodosPage = () => {

    let todoCount = useRef(0)

    const [todoItem, setTodoItem] = useState({
        id: todoCount.current,
        completed: "",
        title: "",
        body: ""
    });

    const {completed, title, body} = todoItem;


    const [todoItems, setTodoItems] = useState([]);

    const handleOnChange = (event) => {
        const {value, name} = event.target;
        setTodoItem({
            ...todoItem,
            [name]: value,

        });
    };

    const handleChangeTodoItems = () => {
        const todo = {
            id:todoCount.current,
            completed,
            title,
            body
        }
        setTodoItems([...todoItems,
            todo])
        todoCount.current += 1
    }

    return (
        <div>
            <div className="">
                <div className="">Study</div>
                <div className=""></div>
                <input type="text" name="title" onKeyDown={
                    handleOnChange
                }/>
                <input type="text" name="body" onKeyDown={
                    handleOnChange
                }/>

                <button type="button" onClick={() => {
                    handleChangeTodoItems()
                }}>추가하기
                </button>

                {todoItems.length ? todoItems.map(item =>
                        <TodoItems item={item} key={item.id}/>)
                    : <div className="no-items">All Items Completed</div>
                }
                <div className="break-line"></div>
            </div>

        </div>
    )
}

export default TodosPage