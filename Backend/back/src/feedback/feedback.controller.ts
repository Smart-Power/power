import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto  } from './dto/update-feedback.dto';


@Controller('feedback')
export class FeedbackController {
  constructor(private FeedbackService: FeedbackService) {}

 
  @Get()
  findAll() {
    return this.FeedbackService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.FeedbackService.findOne(+id);
  }


  @Post('create')
   create(@Body() CreateFeedbackDto: CreateFeedbackDto):Promise<any> {
    return  this.FeedbackService.create(CreateFeedbackDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateFeedbackDto: UpdateFeedbackDto) {
    return this.FeedbackService.update(+id, UpdateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.FeedbackService.remove(+id);
  }

  // @Get(':Car_id')
  // findAllFeedback(@Param('Car_id') Car_id: string) {
  //   return this.FeedbackService.findAll();
  // }
}
