import { Injectable } from '@nestjs/common';
import { TasksModel } from './task.model';

@Injectable()
export class TasksService {
  tasks: TasksModel[] = [];

  getTasks() {
    return this.tasks;
  }

  createTasks(task: TasksModel): TasksModel {
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): TasksModel {
    return this.tasks.find(tlk => tlk.id === id);
  }

  deleteTask(id: string): void {
    const index = this.tasks.findIndex(tlk => tlk.id === id);
    this.tasks.slice(index);
  }

  updateTask(id: string, task: TasksModel): TasksModel {
    const dbTask = this.getTaskById(id);
    (dbTask.discription = task.discription),
      (dbTask.status = task.status),
      (dbTask.title = task.title),
      this.tasks.push(dbTask);
    return dbTask;
  }
}
