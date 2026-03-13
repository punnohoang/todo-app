import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // GET /todos
  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  // POST /todos
  @Post()
  create(@Body() body: { title: string }) {
    return this.todosService.create(body.title);
  }

  // DELETE /todos/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todosService.delete(Number(id));
  }
}