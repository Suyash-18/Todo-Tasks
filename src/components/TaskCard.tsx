import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useAppDispatch } from "../redux/hooks";
import { removeTask } from "../redux/features/todoSlice";
import toast from "react-hot-toast";

interface propsType {
    id: string;
    task: string;
    priority: string;
    category: string;
}

const TaskCard: React.FC<propsType> = ({ id, task, category, priority }) => {
    const [detail, setDetail] = useState(false);
    const dispatch = useAppDispatch();

    const deleteTask = () => {
        const payload = { id, task, category, priority };
        dispatch(removeTask(payload));
        toast.error("Task Deleted");
    };

    const taskC = priority === "high" ? (
        <div>
            {detail ? (
                <div className="w-2/3 p-4 h-36 border-green-300 border-2 bg-green-100 overflow-hidden rounded-lg transition-all ease-linear duration-500">
                    <div className="flex justify-between">
                        <div className="text-lg font-semibold w-3/4">
                            <p>{task}</p>
                        </div>
                        <RiArrowDropUpLine className="text-2xl" onClick={() => setDetail(false)} />
                    </div>
                    <div className="text-md font-medium mt-2 transition-all ease-linear duration-500">
                        Category:
                        <span className="ml-2 px-4 bg-accent rounded-full text-white">{category}</span>
                    </div>
                    <button className="text-white px-4 py-1 rounded-md bg-red-500 hover:opacity-80 mt-4 cursor-pointer" onClick={deleteTask}>Delete</button>
                </div>
            ) : (
                <div className="border-2 border-green-300 bg-green-100 w-2/3 p-4 h-14 overflow-hidden rounded-lg transition-all ease-linear duration-500">
                    <div className="flex justify-between">
                        <div className="text-lg font-semibold w-3/4">
                            <p>{task}</p>
                        </div>
                        <RiArrowDropDownLine className="text-2xl" onClick={() => setDetail(true)} />
                    </div>
                </div>
            )}
        </div>
    ) : 
    priority === "mid" ? (
        <div>
            {detail ? (
                <div className="w-2/3 p-4 h-36 border-yellow-300 border-2 bg-yellow-100 overflow-hidden rounded-lg transition-all ease-linear duration-500">
                    <div className="flex justify-between">
                        <div className="text-lg font-semibold w-3/4">
                            <p>{task}</p>
                        </div>
                        <RiArrowDropUpLine className="text-2xl" onClick={() => setDetail(false)} />
                    </div>
                    <div className="text-md font-medium mt-2 transition-all ease-linear duration-500">
                        Category:
                        <span className="ml-2 px-4 bg-accent rounded-full text-white">{category}</span>
                    </div>
                    <button className="text-white px-4 py-1 rounded-md bg-red-500 hover:opacity-80 mt-4 cursor-pointer" onClick={deleteTask}>Delete</button>
                </div>
            ) : (
                <div className="border-2 border-yellow-300 bg-yellow-100 w-2/3 p-4 h-14 overflow-hidden rounded-lg transition-all ease-linear duration-500">
                    <div className="flex justify-between">
                        <div className="text-lg font-semibold w-3/4">
                            <p>{task}</p>
                        </div>
                        <RiArrowDropDownLine className="text-2xl" onClick={() => setDetail(true)} />
                    </div>
                </div>
            )}
        </div>
    ) : (
        <div>
            {detail ? (
                <div className="w-2/3 p-4 h-36 border-red-300 border-2 bg-red-100 overflow-hidden rounded-lg transition-all ease-linear duration-500">
                    <div className="flex justify-between">
                        <div className="text-lg font-semibold w-3/4">
                            <p>{task}</p>
                        </div>
                        <RiArrowDropUpLine className="text-2xl" onClick={() => setDetail(false)} />
                    </div>
                    <div className="text-md font-medium mt-2 transition-all ease-linear duration-500">
                        Category:
                        <span className="ml-2 px-4 bg-accent rounded-full text-white">{category}</span>
                    </div>
                    <button className="text-white px-4 py-1 rounded-md bg-red-500 hover:opacity-80 mt-4 cursor-pointer" onClick={deleteTask}>Delete</button>
                </div>
            ) : (
                <div className="border-2 border-red-300 bg-red-100 w-2/3 p-4 h-14 overflow-hidden rounded-lg transition-all ease-linear duration-500">
                    <div className="flex justify-between">
                        <div className="text-lg font-semibold w-3/4">
                            <p>{task}</p>
                        </div>
                        <RiArrowDropDownLine className="text-2xl" onClick={() => setDetail(true)} />
                    </div>
                </div>
            )}
        </div>
    )

    return (
        <li id={id} className="mt-4">
            {taskC}
        </li>
    );
};

export default TaskCard;