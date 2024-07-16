import { Module } from '@nestjs/common';
import { ShopCartService } from './shop-cart.service';
import { ShopCartController } from './shop-cart.controller';
import { ShopCart } from './entities/shop-cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ShopCart])],

  controllers: [ShopCartController],
  providers: [ShopCartService],
  exports: [ShopCartService]

})
export class ShopCartModule {}
