import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Todo {
  @Prop()
  task: string;

  @Prop({ default: false })
  isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
