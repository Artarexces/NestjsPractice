import { Body, Controller, Delete, Get, Param, Patch, Post, Put,UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTask } from "./DTO/create-task.dto";

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
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTask) {
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