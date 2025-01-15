import { useAppSelector } from "../redux/hooks";
import TaskCard from "./TaskCard";

export default function TaskList(){
    const taskList = useAppSelector((state) => state.todoReducer);

    return(
        <div className="mt-4 p-4 min-h-56">
            <h2 className="text-xl font-semibold">Tasks</h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            
        <ul className="p-2 border-2 overflow-auto  border-slate-300 rounded-md h-72">
            <h2 className="mb-4 text-xl font-medium">High Priority Tasks</h2>
            <hr />

            <div className="overflow-y-scroll h-56">


            {taskList.map((tl) => (
                tl.priority=="high"?
                <TaskCard 
                key={tl.id}
                id={tl.id}
                task={tl.task}
                category={tl.category}
                priority={tl.priority}
                />: <div></div>))}
            </div>
        </ul>
        <ul className="p-2 border-2 overflow-auto  border-slate-300 rounded-md min-h-72">
            <h2 className="mb-4 text-xl font-semibold">Medium Priority Tasks</h2>
            <hr />

            <div className="overflow-y-scroll h-56">


            {taskList.map((tl) => (
                tl.priority=="mid"?
                <TaskCard 
                key={tl.id}
                id={tl.id}
                task={tl.task}
                category={tl.category}
                priority={tl.priority}
                />: <div></div>))}
            </div>
        </ul>
        <ul className="p-2 border-2 overflow-auto  border-slate-300 rounded-md min-h-72">
            <h2 className="mb-4 text-xl font-semibold">Low Priority Tasks</h2>
            <hr />

            <div className="overflow-y-scroll h-56">


            {taskList.map((tl) => (
                tl.priority=="low"?
                <TaskCard 
                key={tl.id}
                id={tl.id}
                task={tl.task}
                category={tl.category}
                priority={tl.priority}
                />: <div></div>))}
            </div>
        </ul>
        </div>
        </div>
    )
}