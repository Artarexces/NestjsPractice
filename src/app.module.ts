import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HellowController } from './hellow/hellow.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HellowController],
  providers: [UsersService]
})
export class AppModule {}
