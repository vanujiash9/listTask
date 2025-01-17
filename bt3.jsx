import React, { useState } from "react";

const listTask = [
    {
        name: 'Lau nhà',
        isCheck: false
    },
    {
        name: 'Quét nhà',
        isCheck: false
    },
    {
        name: 'Rửa chén',
        isCheck: true
    }
];

function BT3() {
    const [list, setList] = useState(listTask);
    const [value, setValue] = useState('');

    const addTask = () => {
        if (value !== '') {
            const newTask = {
                name: value,
                isCheck: false,
            };
            const newList = [newTask, ...list];
            setList(newList);
            setValue('');
        } else {
            alert('Bạn chưa nhập gì cả!');
        }
    };

    const deleteTask = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const handleCheck = (index) => {
        const newList = [...list];
        newList[index].isCheck = !newList[index].isCheck;
        setList(newList);
    };

   

    const resetTask = () => {
        setList(listTask);
    };
    
    const clearTask= () => {
        const newList = list.filter(task => !task.isCheck);
        setList(newList);
    };
    return (
        <div className="w-full h-screen bg-gray-100 pt-8">
            <div className="bg-white p-3 max-w-md mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">ToDo App</h1>
                    <div className="mt-4 flex">
                        <input
                            className="w-80 border-b-2 border-gray-500 text-black"
                            type="text"
                            placeholder="Enter your task here"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button
                            className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                            onClick={addTask}
                        >
                            <svg className="h-6 w-6" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={9} />
                                <line x1={9} y1={12} x2={15} y2={12} />
                                <line x1={12} y1={9} x2={12} y2={15} />
                            </svg>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <ul>
                        {list.map((item, index) => (
                            <li className="p-2 rounded-lg" key={index}>
                                <div className="flex align-middle flex-row justify-between">
                                    <div className="p-2">
                                        <input
                                            type="checkbox"
                                            className="h-6 w-6"
                                            defaultValue="true"
                                            checked={item.isCheck}
                                            onChange={() => handleCheck(index)}
                                        />
                                    </div>
                                    <div className="p-2">
                                        <p className={`text-lg ${item.isCheck ? 'line-through text-gray-400' : 'text-black-400'}`}>
                                            {item.name}
                                        </p>
                                    </div>
                                    <button
                                        className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
                                        onClick={() => deleteTask(index)}
                                    >
                                        <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx={12} cy={12} r={10} />
                                            <line x1={15} y1={9} x2={9} y2={15} />
                                            <line x1={9} y1={9} x2={15} y2={15} />
                                        </svg>
                                        <span>Remove</span>
                                    </button>
                                </div>
                                <hr className="mt-2" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="border-2 border-red-500 p-2 text-red-500" onClick={clearTask}>Clear Completed Task</button>
                    <button className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4" onClick={resetTask}>Reset Todo List</button>
                </div>
            </div>
        </div>
    );
}

export default BT3;
