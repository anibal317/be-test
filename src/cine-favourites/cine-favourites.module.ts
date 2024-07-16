import { Module } from '@nestjs/common';
import { CineFavouritesService } from './cine-favourites.service';
import { CineFavouritesController } from './cine-favourites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CineFavourite } from './entities/cine-favourite.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CineFavourite])],
  controllers: [CineFavouritesController],
  providers: [CineFavouritesService],
  exports: [CineFavouritesService],
})
export class CineFavouritesModule {}
