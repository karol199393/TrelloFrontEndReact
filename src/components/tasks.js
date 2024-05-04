import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './task.css';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(err => {
                console.log(err);
            })      
    }, []);

     return ( 
        <div className='table'>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
     )
} 
export default Tasks;
