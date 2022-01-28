 import Task from '../models/Task'


 export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean()
    //console.log(tasks[0])

    res.render("index", { tasks : tasks });
};

export const createTask =  async (req, res) => {
    try{
    const task = Task(req.body)
    
    await task.save();
    res.redirect("/");
    // const taskSaved =  await task.save()
    // console.log(taskSaved) 
    }catch (error){
        console.log(error)
    }
    //res.send("saved");  
}

export const renderTaskEdit= async (req, res) => {
    try {
      //console.log(req.params.id)
    const task = await Task.findById(req.params.id).lean()
    res.render("edit", {task});
    } catch (error) {
      console.log(error.message)
    }
}

export const editTask = async(req, res) => {
    // console.log(req.body)
    // console.log(req.params.id)
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body) // es una funcion dew mogoose es para ctualizar el id
    
    res.redirect("/")
    //res.send("received")
}

export const  deleteTask= async (req, res) => {
    const {id} = req.params;
   
    await Task.findByIdAndDelete(id)
   
    res.redirect("/")
}

export const taskToggleDone = async (req, res) => {
    const {id} = req.params;

    const task  = await Task.findById(id)

    task.done = !task.done; 
    await task.save();
    //console.log(task)

    //res.send("toogle")
    res.redirect("/");
}
