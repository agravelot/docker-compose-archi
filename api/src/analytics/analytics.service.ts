import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from 'nestjs-redis/dist/redis.service';
import * as Redis from 'ioredis';

const pageKey = (url: string) => `pageview:${url}`

@Injectable()
export class AnalyticsService {
  client: Redis.Redis;
  logger: Logger;

  constructor(redisService: RedisService) { 
    this.client = redisService.getClient('redis')
    this.logger = new Logger(AnalyticsService.name)
  }

  async savePageView(url: string) {
    await this.client.incr(pageKey(url))
    this.logger.log(`Page with url "${url}" => view = ${await this.client.get(pageKey(url))}`);
  }
}
