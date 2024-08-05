import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';
export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  readonly task: string;

  @IsBoolean()
  readonly isCompleted: boolean = false;
}
