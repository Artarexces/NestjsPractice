import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TaskController {
    constructor(private readonly taskService:TasksService){}

    @Get('tasks')
    getTasks(): string[]{
        return this.taskService.getTasks()
    }

}