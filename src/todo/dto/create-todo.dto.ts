import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';
export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  readonly task: string;

  @IsBoolean()
  readonly isCompleted: boolean = false;
}
