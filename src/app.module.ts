import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HellowController } from './hellow/hellow.controller';
import { UserService } from './users/users.service';


@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HellowController],
  providers: [UserService]
})
export class AppModule {}
