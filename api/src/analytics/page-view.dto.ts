import { IsString } from "class-validator";

export class PageViewDto {
  @IsString()
  url!: string
}