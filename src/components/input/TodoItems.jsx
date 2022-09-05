import React, {useState} from 'react';

const TodoItems = ({item}) => {

    const [isCompleted, setIsCompleted] = useState(item.completed);

    const handleCompleted = (e) => {
        setIsCompleted(!isCompleted)
    }

    return (
        <div>
          <div>{item.id}</div>
            <button type="button" value={isCompleted} onClick={handleCompleted}>Check</button>
            {isCompleted? "Completed":""}
          <div>{item.title}</div>
          <div>{item.body}</div>
        </div>
    )
}

export default TodoItems