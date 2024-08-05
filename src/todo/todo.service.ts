import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schema/todo.schema';
import { Model } from 'mongoose';

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

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
