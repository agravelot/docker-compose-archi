import { Name } from './name.entity';
import { NameService } from './name.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NameDto } from './name.dto';

@Controller('names')
@ApiTags('names')
export class NameController {
  constructor(private service: NameService) {}

  @Get()
  async index(): Promise<Name[]> {
    return await this.service.list();
 }
  @Post()
  async save(@Body() nameDto: NameDto): Promise<void> {
    this.service.save(nameDto);
  }
}
