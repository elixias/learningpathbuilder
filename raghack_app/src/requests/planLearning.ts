import axios from "axios";

interface ICareerAdviceRequestbody {
    resume:string,
    jobDescription:string
}

export const getCareerAdvice = async (careerReqBody: ICareerAdviceRequestbody) => {
    try {
      const response = await axios.post('http://localhost:3000/advise/get_career_advice', careerReqBody);
      return response.data;
    } catch (error) {
      console.error('Error fetching career advice:', error);
      throw error;
    }
};
