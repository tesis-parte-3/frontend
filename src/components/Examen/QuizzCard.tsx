import { Button } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react'

interface IQuizzCard {
  level: 'grado2' | 'grado3' | 'grado5' | 'general';
}

interface IQuestions {
  level: string;
  question: string;
  answers: string[];
  correct_answer: string;
}

function QuizzCard({level}: IQuizzCard) {
  const [questions, setQuestions] = useState<IQuestions[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [failureCounter, setFailureCounter] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    axios.get(`https://api.ismoxpage.online/exams?level=${level}`).then((res) => {
      setQuestions(res.data)
      setLoading(false)
      console.log(res.data)
    }).catch(() => {
      setFailureCounter(failureCounter + 1)
    })
  }, [failureCounter])
  return (
    <>
      {loading ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <Button mx={5} key={index} onClick={() => {
                if (answer === questions[currentQuestion].correct_answer) {
                  setScore(score + 1)
                }
                setCurrentQuestion(currentQuestion + 1)
                console.log(score)
              }}>{answer}</Button>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default QuizzCard