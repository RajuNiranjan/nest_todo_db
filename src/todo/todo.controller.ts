import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './schema/todo.schema';
import { query } from 'express';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/create_task')
  createTask(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTask(createTodoDto);
  }

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAllTasks();
  }

  @Get('/search_task')
  searchQuery(@Query() query: ExpressQuery): Promise<Todo[]> {
    return this.todoService.searchQuery(query);
  }

  @Patch('/update_task/:id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.updateTask(id, updateTodoDto);
  }

  @Delete('/delete_task/:id')
  removeTask(@Param('id') id: string): Promise<Todo> {
    return this.todoService.removeTask(id);
  }
}
