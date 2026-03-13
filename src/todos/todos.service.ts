import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  // Lưu tạm trong memory, chưa cần database
  private todos: { id: number; title: string; done: boolean }[] = [];
  private idCounter = 1;

  // Lấy tất cả todos
  findAll() {
    return this.todos;
  }

  // Tạo todo mới
  create(title: string) {
    const todo = {
      id: this.idCounter++,
      title,
      done: false,
    };
    this.todos.push(todo);
    return todo;
  }

  // Xóa todo
  delete(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    return { message: 'Deleted' };
  }
}