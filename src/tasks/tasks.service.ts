import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks: any[] = [];
    
     getTasks(){
        return this.tasks
    }

    createTask(task: any){
        this.tasks.push(task)
        return task
    }

}
