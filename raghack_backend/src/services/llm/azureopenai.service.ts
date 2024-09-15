// import { AzureOpenAI } from "openai";
import { Injectable } from '@nestjs/common';
// import { AzureOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { JsonOutputParser } from "@langchain/core/output_parsers";

import { ChatOpenAI } from "@langchain/openai";

@Injectable()
export class AzureOpenAIInferenceService {
  // private client: AzureOpenAI;
  private client: ChatOpenAI;

  constructor() {

    //AzureOpenAI free tier has limits. Switched to ChatOpenAI for now.

    // Initialize AzureOpenAI client using configuration service
    // const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] || "https://raghackathon-openai.openai.azure.com/";
    // const apiKey = process.env["AZURE_OPENAI_API_KEY"];
    // const apiVersion = "2024-05-01-preview";
    // const deployment = process.env["AZURE_OPENAI_DEPLOYMENT"];

    // this.client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

    // const llm = new AzureOpenAI({
    //   model: "gpt-3.5-turbo",
    //   temperature: 0,
    //   maxTokens: undefined,
    //   timeout: undefined,
    //   maxRetries: 2,
    // });

    const llm = new ChatOpenAI(
      {
        apiKey: process.env.OPENAI_API_KEY,
        modelName: "gpt-4o",
      }
    )
    this.client = llm;
  }

  // Traditional way of calling AzureOpenAI

  // async azureopenaiInference(messages: ChatCompletionMessageParam[]): Promise<any> {
  //   const inputText = "AzureOpenAI is an AI company that ";
  //   const completion = await this.client.invoke(inputText);
  //   return completion;
  //   try {
  //     const result = await this.client.chat.advise.create({
  //       model: "gpt-3.5-turbo",
  //       messages: messages,
  //       max_tokens: 800,
  //       temperature: 0.7,
  //       top_p: 0.95,
  //       frequency_penalty: 0,
  //       presence_penalty: 0,
  //       stop: null,
  //     });

  //     return result.choices.map(choice => choice.message.content);
  //   } catch (error) {
  //     console.error('Azure OpenAI Inference Error:', error);
  //     throw new Error('Failed to get a response from Azure OpenAI');
  //   }
  // }

  // async getInformation(): Promise<any> {
  //   const messages: ChatCompletionMessageParam[] = [
  //     { role: "system", content: "You are an AI assistant that provides information." },
  //     { role: "user", content: "Tell me about the latest technology trends." }
  //   ];
  //   return this.azureopenaiInference(messages);
  // }

  async newTemplate(): Promise<any> {
    
    type jsonSchema = { output: string }

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "You are an information assistant. Answer in JSON format, containing one field: output "],
      ["user", "Give me information about {topic}"]
    ])

    const parser = new JsonOutputParser<jsonSchema>();
    
    const chain = prompt.pipe(this.client).pipe(parser)

    return await chain.invoke({topic:"cloud computing"})
  
  }

  async extractSkillsFromResume(resume: string): Promise<any> {

    type resumeSchema = {
      softskills: string[],
      techskills: string[],
    }

    const prompt = ChatPromptTemplate.fromMessages([
      ["system",
        `You are a job application bot. Extract and infer the soft and technical skills AS KEYWORDS from the resume below. Answer in JSON format: 
        {{
          "softskills": ["skill1", "skill2", ...],
          "techskills": ["skill1", "skill2", ...]
        }}
        Ensure the JSON format is correctly adhered to.
        `
      ],
      ["user", `Resume: ${resume}`]
    ])

    const parser = new JsonOutputParser<resumeSchema>();
    
    const chain = prompt.pipe(this.client).pipe(parser)

    return await chain.invoke({}) //wasn't injecting properly
  
  }

  async extractSkillsFromJobDesc(jobdesc: string): Promise<any> {
    
    type jdSchema = {
      softskills: string[],
      techskills: string[],
    }

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", 
        `You are a job application bot. Extract and infer the soft and technical skills AS KEYWORDS from the job description below. Answer in JSON format: 
        {{
          "softskills": ["skill1", "skill2", ...],
          "techskills": ["skill1", "skill2", ...]
        }}
        Ensure the JSON format is correctly adhered to.
        `
      ],
      ["user", `Job: ${jobdesc}`]
    ])

    const parser = new JsonOutputParser<jdSchema>();
    
    const chain = prompt.pipe(this.client).pipe(parser)

    return await chain.invoke({})
  
  }

  async getCertificationsPath(jobdesc: string, certificationsContext: string): Promise<any> {
    
    type certPathSchema = {
      key: number,
      reason: string
    }[];

    const prompt = ChatPromptTemplate.fromMessages([
      ["system",
        `Based on the provided certifications, select relevant certifications that applies to the job description and rerank them based on progression and difficulty.
        Create a learning path and provide a well thought out explanation what the job role requires and how the certifications meet the requirements specified. Make it convincing.
        DO NOT change the key id.
        Format the output as a JSON array in the following format:
        [
          {{
            key: <key id field of the certificate as an integer>,
            reason: "<why and what skills learnt in the certifications course apply to job>"
          }},
          ...
        ]
        Ensure the JSON format is correctly adhered to.
        `
      ],
      ["user", `\n\nJob Description: ${jobdesc}\n\nCertifications Available: ${certificationsContext}\n\n`]
    ])

    const parser = new JsonOutputParser<certPathSchema>();
    
    const chain = prompt.pipe(this.client).pipe(parser)

    return await chain.invoke({jobdesc, certificationsContext})
  
  }


  /*
  Mocked services
  */
 
  async mockExtractSkillsFromResume(resume: string): Promise<any> {
    return {
      softskills: [
        "problem-solving",
        "teamwork",
      ],
      techskills: [
        "Python",
        "JavaScript",
        "Java",
        "React",
        "Node.js",
        "Git",
        "MySQL",
        "MongoDB",
        "Data Structures",
        "Algorithms",
        "software development",
        "debugging",
        "troubleshooting",
      ],
    }
  }

  async mockExtractSkillsFromJobDesc(jobdesc: string): Promise<any> {
    return {
      softskills: [
        "collaboration",
        "communication",
        "problem-solving",
        "attention to detail",
      ],
      techskills: [
        "data analysis",
        "predictive modeling",
        "algorithm development",
        "Python",
        "R",
        "SQL",
        "data visualization",
        "Tableau",
        "machine learning",
        "statistical analysis",
      ],
    }
  }
  
  async mockGetCertificationsPath(jobdesc: string, certificationsContext: string): Promise<any> {
    return [
        {
            "key": 3,
            "reason": "The Azure AI Fundamentals certification introduces basic AI and machine learning concepts on Azure. Given its beginner level, this certification is ideal for candidates new to the field, serving as a foundation for more complex topics. This certification is beneficial for understanding AI workloads, machine learning principles, and Azure AI services, even for those without a technical background. It provides a solid grounding that is essential for more advanced roles, including data science and data engineering."
        },
        {
            "key": 5,
            "reason": "The Azure Data Engineer certification prepares candidates to integrate, transform, and consolidate data across structured and unstructured sources for analytical purposes. This certification, at the intermediate level, builds on the basics and delves into advanced data engineering tasks such as building secure data pipelines, using various Azure data services, and ensuring high-performance data operations. It’s crucial for any role involving extensive data manipulation and storage, providing the skills needed to handle large-scale datasets and create optimized data flows."
        },
        {
            "key": 7,
            "reason": "The Azure Data Scientist certification focuses on applying data science and machine learning techniques to build and deploy scalable solutions on Azure. It covers essential skills like designing ML solutions, exploring data, training models, and managing the deployment lifecycle. Candidates are expected to have experience with Azure ML and MLflow, making this certification ideal for roles that require machine learning expertise. It significantly enhances one's ability to implement and run machine learning workloads effectively."
        },
        {
            "key": 8,
            "reason": "The Azure Database Administrator Associate certification is essential for managing and optimizing database solutions using SQL Server and Azure SQL services. This certification equips candidates with the knowledge to handle the operational aspects of both cloud-native and hybrid data platforms, including securing and monitoring databases, automating tasks, and implementing high availability and disaster recovery solutions. This is crucial for roles that require robust database management and the ability to work alongside other Azure professionals."
        },
        {
            "key": 4,
            "reason": "The Azure Cosmos DB Developer Specialty certification focuses on designing, implementing, and monitoring cloud-native applications using Azure Cosmos DB. This certification is suitable for developers who need to work with NoSQL databases, optimize solutions for performance and security, and integrate with other Azure services. It prepares candidates to handle complex data requirements and create resilient, purpose-built database solutions."
        }
    ]
  }
  
}
