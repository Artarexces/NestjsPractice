import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProductModule } from './products/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HellowController } from './hellow/hellow.controller';



@Module({
  imports: [TasksModule, ProductModule, AuthModule, UsersModule],
  controllers: [HellowController]
})
export class AppModule {}
