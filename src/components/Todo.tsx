export default function Todo({setAdd} : any){
    return(
        <div className="mt-4 ml-4"onClick={() => setAdd(true)}>
            <h3 className="text-xl font-semibold mb-2">Add Task</h3>
            <hr />
            <div className="w-36 h-36 border-2 rounded-xl border-dashed border-slate-500 flex justify-center items-center hover:border-accent text-4xl text-slate-500 mt-4 hover:text-accent cursor-pointer">
                +
            </div>
        </div>
    )
}