import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'

// Aplicacion App
import { AppController } from './app.controller';
import { AppService } from './app.service';



//Modules
import { CineFavouritesModule } from './cine-favourites/cine-favourites.module';
import { CineUserModule } from './cine-user/cine-user.module';
import { ShopCartModule } from './shop-cart/shop-cart.module';
import { ShopUserModule } from './shop-user/shop-user.module';
import { RedirectMiddleware } from './redirect.middleware';
import { ShopCart } from './shop-cart/entities/shop-cart.entity';
import { ShopUser } from './shop-user/entities/shop-user.entity';
import { CineUser } from './cine-user/entities/cine-user.entity';
import { CineFavourite } from './cine-favourites/entities/cine-favourite.entity';


@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: "postgres" as any,
      host: "dpg-cqbbng88fa8c73b5l5u0-a.oregon-postgres.render.com",
      port: 5432,
      username: "test_8q3z_user",
      password: "0pZwJMREZ5wNHMhlGToWYNT7yKsxvpQg",
      database: "test_8q3z",
      ssl: { rejectUnauthorized: false },
      synchronize: true,
      bigNumberStrings: true,
      entities: [ShopCart, ShopUser, CineUser, CineFavourite]
    }),
    CineFavouritesModule,
    CineUserModule,
    ShopCartModule,
    ShopUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RedirectMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.ALL }); // Aplica el middleware a todas las rutas
  }
}
