import { AnalyticsService } from './analytics.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageViewDto } from './page-view.dto';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Post('page-view')
  async saveView(@Body() pageViewDto: PageViewDto): Promise<void> {
    console.log(pageViewDto);
    await this.analyticsService.savePageView(pageViewDto.url);
    
    return;
  }
}
