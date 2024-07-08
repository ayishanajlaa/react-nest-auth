import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hash } from 'bcrypt';

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop({ select: false })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next: Function) {
  this.password = await hash(this.password, 10);
  next();
});

export type UserResponseType = Omit<User, 'password'> & { token: string };
