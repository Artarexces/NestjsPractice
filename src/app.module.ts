import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HellowController } from './hellow/hellow.controller';



@Module({
  imports: [TasksModule, ProductsModule, AuthModule, UsersModule],
  controllers: [HellowController]
})
export class AppModule {}
