import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics/analytics.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private analyticsService: AnalyticsService) {}

  @Get()
  async getHello(): Promise<string> {
    await this.analyticsService.savePageView('/');
    return `
      ${this.appService.getHello()} \n
      pageviews = ${await this.analyticsService.getPageWiew('/')}
    `;
  }
}
