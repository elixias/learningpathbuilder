import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdviseService } from 'src/services/advise/advise.service';
import { AzureOpenAIInferenceService } from 'src/services/llm/azureopenai.service';
import compareSkills from 'src/utils/compareSkills'
import parseCertificationsContext from 'src/utils/parseCerts';

@Controller('advise')
export class AdviseController {
    constructor(
      private readonly adviseService: AdviseService,
      private readonly aiInferenceService: AzureOpenAIInferenceService
    ) {}

    @Get('text')
    getCompletions(): string {
      return 'This is the advise endpoint';
    }

    @Post('get_career_advice')
    async getCareerAdvice(
      @Body('resume') resume: string,
      @Body('jobDesc') jobDesc: string
    ): Promise<any> {

      //Enable the following lines to use Azure OpenAI

      // const candidateSkills = await this.aiInferenceService.extractSkillsFromResume(resume)
      // const requiredSkills = await this.aiInferenceService.extractSkillsFromJobDesc(jobDesc)
      // const softSkillsResults = compareSkills(candidateSkills['softskills'], requiredSkills['softskills'])
      // const techSkillsResults = compareSkills(candidateSkills['techskills'], requiredSkills['techskills'])
      // const certificationsContext = await this.adviseService.findCertifications(techSkillsResults['missingSkills']); //techSkillsResults['missingSkills'];
      // const certsAsString = parseCertificationsContext(certificationsContext)
      // const certificationsPath = await this.aiInferenceService.getCertificationsPath(jobDesc, certsAsString)

      //Disable the following lines if using Azure OpenAI
      //Mock methods doesn't call the cloud for economical reasons

      const candidateSkills = await this.aiInferenceService.mockExtractSkillsFromResume(resume)
      const requiredSkills = await this.aiInferenceService.mockExtractSkillsFromJobDesc(jobDesc)
      const softSkillsResults = compareSkills(candidateSkills['softskills'], requiredSkills['softskills'])
      const techSkillsResults = compareSkills(candidateSkills['techskills'], requiredSkills['techskills'])
      const certificationsContext = await this.adviseService.mockFindCertifications(); 
      const certsAsString = parseCertificationsContext(certificationsContext)
      const certificationsPath = await this.aiInferenceService.mockGetCertificationsPath(jobDesc, certsAsString)

      const response = {
        candidateSkills,
        requiredSkills,
        softSkillsResults,
        techSkillsResults,
        certificationsContext,
        certificationsPath
      }

      return response;
    }

}
