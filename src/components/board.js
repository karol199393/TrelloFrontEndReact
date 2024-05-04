import React, { useState } from "react";

const Board = () => {
    const [taskId, setTaskId] = useState("");
    const [userId, setUserId] = useState("");

    const assignTaskToUser = async (taskId, userId) => {
        const response = await fetch(`http://localhost:8080/api/v1/tasks/${taskId}/assign/${userId}`, {
            method: "POST",
        });

        if (response.ok) {
            const task = await response.json();
            console.log(task);
        } else {
            console.log("Failed to assign task");
        }
    };

    const handleButtonClick = async () => {
        await assignTaskToUser(taskId, userId);
    };

    return (
        <div>
            <h1>Board</h1>
            <input type="text" value={taskId} onChange={e => setTaskId(e.target.value)} placeholder="Task ID" />
            <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" />
            <button onClick={handleButtonClick}>Assign Task</button>
        </div>
    );
};

export default Board;