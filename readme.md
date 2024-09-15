### **Landing Page Overview**

This is the landing page for the **Certification Learning Path Builder**. Initially, users will be able to upload their resume as a PDF document, but for now, we’ll use a textbox to capture that information. Users will also provide the job description for the role they’re interested in. This enables the system to identify skill gaps and recommend relevant courses or certifications.

The backend utilizes **Azure OpenAI** to extract key skills from both the job seeker's resume and the job description. It evaluates the matching and missing skills, performs a full-text search on an Azure SQL Database containing certification data, and retrieves relevant certifications.

The retrieved certifications and job description are sent to **Azure OpenAI**, which ranks and builds a personalized learning path, providing reasons for each recommendation.

---

### **Experience Using AI and RAG**

Building this solution with AI and RAG was relatively straightforward. Following the provided code examples allowed for quick setup of essential functionalities, such as initiating the client. Ingesting data into the SQL database using Azure Data Studio and creating a Full Text Search (FTS) index was easy once the setup was complete. Configuring Azure OpenAI took a bit longer, but reviewing sample code in the playground accelerated the process significantly.

---

### **Why This Entry?**

My friends and I are transitioning into data science and AI roles, many coming from non-tech backgrounds. One major challenge we faced was determining how to create a suitable learning path toward our ideal jobs.

The Microsoft certifications page required extensive self-exploration to piece together a learning path. This tool addresses that issue by streamlining the process, helping users identify the exact courses or certifications needed based on job requirements and skill gaps.

Additionally, I wanted to move beyond the typical chatbot interface common in RAG applications. This project showcases how RAG can be used in web applications to aid in data extraction, processing, and providing structured answers.

---

### **How RAG Helped Build This Solution**

Using RAG combined with Full Text Search, I was able to retrieve relevant certification information from the database based on required skills. The retrieved documents provided context for the learning path builder, which **Azure OpenAI** used to filter, re-rank, and generate a personalized response for the user.
