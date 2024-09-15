import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './services/app/app.service';
import { AdviseController } from './controllers/advise/advise.controller';
import { DatabaseModule } from './database/database.module';
import { AzureOpenAIInferenceService } from './services/llm/azureopenai.service';
import { AdviseService } from './services/advise/advise.service';


@Module({
  imports: [DatabaseModule],
  controllers: [AppController, AdviseController],
  providers: [AppService, AdviseService, AzureOpenAIInferenceService],
})
export class AppModule {}
