// import { MdClose } from "react-icons/md";
// import { useAppDispatch } from "../redux/hooks";
// import { addTask } from "../redux/features/todoSlice";
// import toast from "react-hot-toast";
// import { nanoid } from "@reduxjs/toolkit";

// export default function Edit ({setEdit}: any){
    
//     const currTask = {
//         id: nanoid(),
//         task: "",
//         priority: "",
//         category: ""
//     };

//     const dispatch = useAppDispatch();

//     let submitHandler = (e: any) =>{
//         e.preventDefault()
//         if(currTask.category=="" || currTask.priority==""){
//             toast.error('Fill All Details');
//             return
//         }
//         const payload ={...currTask}
//         dispatch(addTask(payload))
//         toast.success('Task Added');
//         setAdd(false)
//     }
//     return (
//         <div className="lg:w-screen h-screen  bg-gray-700 bg-opacity-70 fixed top-0 left-0">
//             <div className="w-screen h-full p-4 flex justify-center items-center flex-col">
//                 <div className="border border-black w-1/2 p-4 flex flex-col bg-white rounded-md">

//                 <div className="flex p-4 justify-between">
//                     <h3 className="text-xl  font-semibold font">Fill in Task Details</h3>
//                     <h4 className="text-2xl font-semibold cursor-pointer" onClick={() => setAdd(false)}><MdClose/></h4>

//                 </div>
//                 <form className="flex flex-col " onSubmit={submitHandler}>
//                     <label htmlFor="task" className="text-lg font-medium mt-2">Task:</label>
//                     <input type="text" name="task" id="task" required placeholder="Enter the task..." onChange={(e: any) => currTask.task = e.target.value} className="border-2 border-black font-medium rounded-lg p-2 " />
//                     <label htmlFor="prioriy" className="text-lg font-medium mt-2">Priority:</label>
//                     <select name="priority" id="priority" className="border-2 border-black p-2 w-2/5 rounded-lg" required onChange={(e: any) => currTask.priority = e.target.value} >
//                         <option value="low">Select Priority</option>
//                         <option value="high">high</option>
//                         <option value="mid">mid</option>
//                         <option value="low">low</option>
//                     </select>
//                     <label htmlFor="category" className="text-lg font-medium mt-2">Category:</label>
//                     <select name="category" id="category" className="border-2 border-black p-2 w-1/2 rounded-lg" required onChange={(e: any) => currTask.category = e.target.value} >
//                         <option value="Work">Select Category</option>
//                         <option value="Health">Health</option>
//                         <option value="Work">Work</option>
//                         <option value="Outdoor">Outdoor</option>
//                     </select>

//                     <button className="text-white bg-accent p-2 w-1/4 mt-4 rounded-xl">Add Task</button>
//                 </form>
                
//             </div>
//                 </div>

//         </div>
//     )
// }