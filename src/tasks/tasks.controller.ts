import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put,UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTask } from "./DTO/create-task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService:TaskService){}

    @Get()
    @HttpCode(200)
    getTasks(){
        return this.taskService.getTasks()
    }

    @Get(':id')
    @HttpCode(200)
    getTaskById(@Param('id') id: string){
        return this.taskService.getTaskById(Number(id))
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(201)
    createTask(@Body() task: CreateTask) {
        return this.taskService.createTask(task)
    }


    @Put(':id')
    @HttpCode(214)
    updateTask(@Param('id') id: string, @Body() updatedTaks: any){
        return this.taskService.updateTask(Number(id), updatedTaks)
    }

    @Patch(':id')
    @HttpCode(214)
    patchTask(@Param('id') id: string, @Body() updatedTaks: any){
        return this.taskService.patchTask(Number(id), updatedTaks)
    }


    @Delete(':id')
    @HttpCode(410)
    deleteTask(@Param('id') id: string){
        return this.taskService.deleteTask(Number(id))
    }
    
}