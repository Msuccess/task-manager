import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksModel } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTask(): TasksModel[] {
    return this.tasksService.getTasks();
  }
}
