
import { Controller, Get, Query, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @UsePipes(new ValidationPipe({whitelist:true}))
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    groups:['update']
  })) body: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Get('new_route/:id/:slug')
  findOneMore(@Param('id') id: string,@Param('slug') slug: string) {
    return `This action returns a #${id} cat ${slug}`;
  }
  
}
