import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certification } from './entities/certification.entity';
import { DatabaseService } from './database.service';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env["AZURE_SQL_HOST"],
      port: parseInt(process.env["AZURE_SQL_PORT"]),
      username: process.env["AZURE_SQL_USERNAME"],
      password: process.env["AZURE_SQL_PASSWORD"],
      database: process.env["AZURE_SQL_DB"],
      entities: [Certification],
      synchronize: false,
      options: {
        encrypt: true,  // Ensure SSL encryption
        trustServerCertificate: false,  // Set to false for production
      },
    }),
    TypeOrmModule.forFeature([Certification])],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
