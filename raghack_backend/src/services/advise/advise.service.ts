import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdviseService {
    constructor(private readonly databaseService: DatabaseService) {}
    
    async findCertifications(missingSkills:string[]): Promise<any>{
        return this.databaseService.freetextsearch(missingSkills,5);
    }

    async mockFindCertifications(): Promise<any>{
        return [
            {
              KEY: 7,
              RANK: 50,
              cert: "azure-data-scientist",
              level: "Intermediate",
              product: "Azure",
              role: "Data Scientist",
              subject: "Machine learning",
              renewal_frequency: "12 months",
              last_updated: "2024-07-16T16:00:00.000Z",
              retirement_date: null,
              overview: "As a candidate for this certification, you should have subject matter expertise in applying data science and machine learning to implement and run machine learning workloads on Azure. Your responsibilities for this role include: Designing and creating a suitable working environment for data science workloads.Exploring data.Training machine learning models.Implementing pipelines.Running jobs to prepare for production.Managing, deploying, and monitoring scalable machine learning solutions. As a candidate for this certification, you should have knowledge and experience in data science by using: Azure Machine LearningMLflow",
              skills_measured: "Design and prepare a machine learning solution, Explore data and train models, Prepare a model for deployment, Deploy and retrain a model",
              cert_id: 7,
            },
            {
              KEY: 8,
              RANK: 39,
              cert: "azure-database-administrator-associate",
              level: "Intermediate",
              product: "Azure",
              role: "Database Administrator",
              subject: "Databases",
              renewal_frequency: "12 months",
              last_updated: "2024-07-25T16:00:00.000Z",
              retirement_date: null,
              overview: "As a candidate for this certification, you should have subject matter expertise in building database solutions that are designed to support multiple workloads built with: SQL Server on-premisesAzure SQL services You’re a database administrator who manages on-premises and cloud databases built with SQL Server and Azure SQL services. As the Azure database administrator, you implement and manage the operational aspects of cloud-native and hybrid data platform solutions built on SQL Server and Azure SQL services. You use a variety of methods and tools to perform and automate day-to-day operations, including applying knowledge of using Transact-SQL (T-SQL) and other tools for administrative management purposes. You’re responsible for the following concerning database solutions: ManagementAvailabilitySecurityPerformance monitoring and optimization You evaluate and implement migration strategies for moving databases between Azure and on-premises. Plus, you work with Azure data engineers, Azure solution architects, Azure developers, data scientists, and other professionals to manage operational aspects of data platform solutions. As a candidate for this certification, you should have knowledge of and experience with: Azure SQL DatabaseAzure SQL Managed InstanceSQL Server on Azure Virtual Machines (Windows and Linux)",
              skills_measured: "Plan and implement data platform resources, Implement a secure environment, Monitor, configure, and optimize database resources, Configure and manage automation of tasks, Plan and configure a high availability and disaster recovery (HA/DR) environment",
              cert_id: 8,
            },
            {
              KEY: 4,
              RANK: 26,
              cert: "azure-cosmos-db-developer-specialty",
              level: "Intermediate",
              product: "Azure",
              role: "Developer",
              subject: "Data management",
              renewal_frequency: "12 months",
              last_updated: "2024-07-24T16:00:00.000Z",
              retirement_date: null,
              overview: "As a candidate for this certification, you should have subject matter expertise designing, implementing, and monitoring cloud-native applications that store and manage data. Your responsibilities for this role include: Designing and implementing data models and data distribution.Loading data into an Azure Cosmos DB database.Optimizing and maintaining the solution. As a professional in this role, you integrate the solution with other Azure services. You also design, implement, and monitor solutions that consider security, availability, resilience, and performance requirements. As a candidate for this certification, you must have solid knowledge and experience with: Developing apps for Azure.Working with Azure Cosmos DB database technologies.Creating server-side objects with JavaScript. You should be proficient at developing applications that use the Azure Cosmos DB for NoSQL API. You should be able to: Write efficient SQL queries for the API.Create appropriate indexing policies.Interpret JSON.Read C# or Java code.Use PowerShell. Additionally, you should be familiar with provisioning and managing resources in Azure.",
              skills_measured: "Design and implement data models, Design and implement data distribution, Integrate an Azure Cosmos DB solution, Optimize an Azure Cosmos DB solution, Maintain an Azure Cosmos DB solution",
              cert_id: 4,
            },
            {
              KEY: 5,
              RANK: 26,
              cert: "azure-data-engineer",
              level: "Intermediate",
              product: "Azure",
              role: "Data Engineer",
              subject: "Data engineering",
              renewal_frequency: "12 months",
              last_updated: "2024-07-24T16:00:00.000Z",
              retirement_date: null,
              overview: "As a candidate for this certification, you should have subject matter expertise in integrating, transforming, and consolidating data from various structured, unstructured, and streaming data systems into a suitable schema for building analytics solutions. As an Azure data engineer, you help stakeholders understand the data through exploration, and build and maintain secure and compliant data processing pipelines by using different tools and techniques. You use various Azure data services and frameworks to store and produce cleansed and enhanced datasets for analysis. This data store can be designed with different architecture patterns based on business requirements, including: Modern data warehouse (MDW)Big dataLakehouse architecture As an Azure data engineer, you also help to ensure that the operationalization of data pipelines and data stores are high-performing, efficient, organized, and reliable, given a set of business requirements and constraints. You help to identify and troubleshoot operational and data quality issues. You also design, implement, monitor, and optimize data platforms to meet the data pipelines. As a candidate for this certification, you must have solid knowledge of data processing languages, including: SQLPythonScala You need to understand parallel processing and data architecture patterns. You should be proficient in using the following to create data processing solutions: Azure Data FactoryAzure Synapse AnalyticsAzure Stream AnalyticsAzure Event HubsAzure Data Lake StorageAzure Databricks",
              skills_measured: "Design and implement data storage, Develop data processing, Secure, monitor, and optimize data storage and data processing",
              cert_id: 5,
            },
            {
              KEY: 3,
              RANK: 19,
              cert: "azure-ai-fundamentals",
              level: "Beginner",
              product: "Azure",
              role: "AI Engineer",
              subject: "Artificial intelligence",
              renewal_frequency: null,
              last_updated: "2024-04-24T16:00:00.000Z",
              retirement_date: null,
              overview: "This certification is an opportunity for you to demonstrate knowledge of machine learning and AI concepts and related Microsoft Azure services. As a candidate for this certification, you should have familiarity with the self-paced or instructor-led learning material. This certification is intended for you if you have both technical and non-technical backgrounds. Data science and software engineering experience are not required. However, you would benefit from having awareness of: Basic cloud conceptsClient-server applications You can use Azure AI Fundamentals to prepare for other Azure role-based certifications like Azure Data Scientist Associate or Azure AI Engineer Associate, but it’s not a prerequisite for any of them. You may be eligible for ACE college credit if you pass this certification. SeeACE college credit for certification examsfor details.",
              skills_measured: "Describe Artificial Intelligence workloads and considerations, Describe fundamental principles of machine learning on Azure, Describe features of computer vision workloads on Azure, Describe features of Natural Language Processing (NLP) workloads on Azure, Describe features of generative AI workloads on Azure",
              cert_id: 3,
            },
          ];
    }

}
