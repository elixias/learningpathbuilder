function evaluateSkills(candidateSkills: string[], requiredSkills: string[]): { 
    matchedSkills: string[], 
    missingSkills: string[],
    score: number 
  } {
    // Find the intersection between candidateSkills and requiredSkills
    const matchedSkills = candidateSkills.filter(skill => requiredSkills.includes(skill));
  
    // Find the skills in requiredSkills that are not in candidateSkills
    const missingSkills = requiredSkills.filter(skill => !candidateSkills.includes(skill));
  
    // Calculate the percentage of matched skills
    const score = ((matchedSkills.length / requiredSkills.length) * 100).toFixed(2);
  
    // Return the matched skills, missing skills, and the score
    return {
      matchedSkills,
      missingSkills,
      score: parseFloat(score) // Convert score back to a number after rounding
    };
  }
  
  export default evaluateSkills;
  