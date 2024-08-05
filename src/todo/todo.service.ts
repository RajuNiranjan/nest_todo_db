import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schema/todo.schema';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async createTask(createTodoDto: CreateTodoDto): Promise<Todo> {
    const { task, isCompleted } = createTodoDto;
    if (!task) {
      throw new UnauthorizedException('task should not be empty');
    }
    const newTask = await this.todoModel.create({ task, isCompleted });
    return newTask;
  }

  async findAllTasks(): Promise<Todo[]> {
    const todo = await this.todoModel.find();

    return todo;
  }

  async searchQuery(query: Query): Promise<Todo[]> {
    const task = query.keyword
      ? {
          task: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    return await this.todoModel.find(task);
  }

  async updateTask(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const { task, isCompleted } = updateTodoDto;

    if (!task) {
      throw new UnauthorizedException('task should not be empty');
    }

    const updateTask = await this.todoModel.findByIdAndUpdate(
      id,
      { task, isCompleted },
      {
        new: true,
      },
    );

    return updateTask;
  }

  async removeTask(id: string): Promise<Todo> {
    const todo = await this.todoModel.findByIdAndDelete(id);
    return todo;
  }
}
