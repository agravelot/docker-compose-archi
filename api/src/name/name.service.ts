import { Name } from './name.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';

@Injectable()
export class NameService {
  
  constructor(
    @InjectRepository(Name)
    private repository: Repository<Name>,
  ) {}

  list(): Promise<Name[]> {
    return  this.repository.find({});
  }

  async save(name: Partial<Name>) {
    return await this.repository.save(name);
  }
}
