import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  Welcome(@Res() res: Response) {
    const htmlFilePath = join(__dirname, '..', 'html', 'index.html');
    return res.sendFile(htmlFilePath);
  }
}
