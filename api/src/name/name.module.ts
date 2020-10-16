import { Name } from './name.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Module } from '@nestjs/common';
import { NameController } from './name.controller';
import { NameService } from './name.service';

@Module({
  imports: [TypeOrmModule.forFeature([Name])],
  controllers: [NameController],
  providers: [NameService]
})
export class NameModule {}
