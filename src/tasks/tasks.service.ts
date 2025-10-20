import { Injectable, NotFoundException } from '@nestjs/common';


export interface Task{
    id: number,
    title: string,
    status: boolean,
}


@Injectable()
export class TaskService {

    private tasks: Task[] = [];
    private currentID = 1;


     getTasks(){
        return this.tasks
    }

    getTaskById(id: number){
        const task = this.tasks.find(t => t.id === id)
        if(!task) throw new NotFoundException(`Tarea con id ${id} no encontrada`)
        return task
    }

    createTask(task: any){
        const newTask = {
            id: this.currentID++,
            ... task,
        }
        this.tasks.push(newTask)
        return newTask
    }


    updateTask(id: number, updateTask: any){
        const task = this.tasks.find(t => t.id === id)
        if(!task) throw new NotFoundException(`Tarea con id ${id} no encontrada`) 

        const newTask = {
            ...task,
            ...updateTask,
        }
        this.tasks = this.tasks.map(t => (t.id === id ? newTask : id ))
        return { 
            message: `Tarea con id ${id} actualizada correctamente`, 
            updateTask: newTask,
        }
    }

    patchTask(id: number, partialTask: any){
        const task = this.tasks.find(t => t.id === id)
        if(!task) throw new NotFoundException(`Tarea con id ${id} no encontrada`) 

        Object.assign(task, partialTask)
        return { 
            message: `Tarea con id ${id} actualizada correctamente`, 
            updateTask: task,
        }
    }


    deleteTask(id: number){
        const task = this.tasks.find(t => t.id === id)
        if(!task) throw new NotFoundException(`Tarea con id ${id} no encontrada`)
            this.tasks = this.tasks.filter(t => t.id !== id )
        return {
            message: `Tarea con id ${id} eliminada correctamente`,
            deletedTask: task
        }
    }

}
