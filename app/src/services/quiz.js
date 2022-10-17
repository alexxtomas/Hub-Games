

const getAllQuestions = async () => {
    const response = await fetch('http://localhost:8080/quiz')
    return response.json()
}

export default {getAllQuestions}