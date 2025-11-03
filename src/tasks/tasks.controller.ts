import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import type { CreateTask, Task } from "./DTO/task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService:TaskService){}

    @Get()
    getTasks(){
        return this.taskService.getTasks()
    }

    @Get(':id')
    getTaskById(@Param('id') id: string){
        return this.taskService.getTaskById(Number(id))
    }

    @Post()
    createTask(@Body() task: CreateTask): Task{
        return this.taskService.createTask(task)
    }


    @Put(':id')
    updateTask(@Param('id') id: string, @Body() updatedTaks: any){
        return this.taskService.updateTask(Number(id), updatedTaks)
    }

    @Patch(':id')
    patchTask(@Param('id') id: string, @Body() updatedTaks: any){
        return this.taskService.patchTask(Number(id), updatedTaks)
    }


    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(Number(id))
    }
    
}