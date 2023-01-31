export const apiFetchQuestion = async (questionId) => {
    try {
      const response = await fetch(`https://quiz-api.com/questions/${questionId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const apiSubmitAnswer = async (answer) => {
    try {
      const response = await fetch(`https://quiz-api.com/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(answer)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };