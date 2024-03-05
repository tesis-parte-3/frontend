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

function QuizzCard({ level }: IQuizzCard) {
  const [questions, setQuestions] = useState<IQuestions[]>([]) //pregunta actual
  const [isFinished, setIsFinished] = useState(false); //para saber si hemos terminado

  const [loading, setLoading] = useState<boolean>(true)
  const [failureCounter, setFailureCounter] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0) //que numero de pregunta se esta mostrando
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

      <style>
        {`
       * {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
      }
      
      // body {
      
      //   color: #fff;
      //   background-color: #fcfcfc;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   min-height: 100vh;
      // }
     

      .container {

        
        margin-top: 30vh; 
        background-color: #252d4a;
        max-width: 650px;
        min-width: 450px;
        height: min-content;
        min-height: 200px;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: space-evenly;
      }
      @media(max-width:600px){
        .container{
          max-width: 90vw;
          min-width: 90vw;
          margin: 5vw auto;
          margin-top: 30vh;
        }
      }

      /* PREGUNTAS */
      .lado-izquierdo {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      
      .pregunta-numero {
        margin-bottom: 20px;
      }
      
      .pregunta-numero span {
        font-size: 28px;
      }
      
      .pregunta-titulo {
        margin-bottom: 12px;
      }
      
      .lado-derecho {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      /* FINALIZADO */
      .juego-terminado {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 24px;
        align-items: center;
      }
      
      /* GRAL */
      ul {
        width: 100%;
        font-size: 16px;
        color: #ffffff;
        background-color: #252d4a;
        border-radius: 15px;
        flex-direction: column; // Añadido para ordenar los elementos uno encima del otro
       
        
        
        border: 5px ;
        cursor: pointer;
        
      }

      button {
        
        margin: 0.4vh;
        

      }

  
      
      .tiempo-restante {
        font-size: 14px;
        color: #fcbf3d;
        margin-bottom: 20px;
      }
      
      .correct,
      .correct:hover {
        background-color: #2f922f;
      }
      
      .incorrect,
      .incorrect:hover {
        background-color: #ff3333;
      }
      
      ul {
        display: flex;
        justify-content: space-evenly;
      }
      
      ul :hover {
        background-color: #234668;
      }
      
      
      ul:focus {
        outline: none;
      }
      
      ul svg {
        margin-right: 5px;
      }
    
      
        `}
      </style>


      {loading ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (




        <div className='container'>

          <div className="lado-izquierdo">

            <div className="numero-pregunta">
              <span>pregunta {currentQuestion + 1}  de </span> {questions.length}
            </div>

            <div className="titulo-pregunta">
              <p>{questions[currentQuestion].question}</p>

            </div>

          </div>

          <div className="lado-derecho">

            <ul>

              {questions[currentQuestion].answers.map((answer, index) => (

                <Button key={index} onClick={() => {
                  if (answer === questions[currentQuestion].correct_answer) {
                    setScore(score + 1)
                  }
                  setCurrentQuestion(currentQuestion + 1)
                  console.log(score)
                }}>{answer}</Button>
              ))}
            </ul>

          </div>


        </div>







      )}




      {/* // <div>
    // //   <p>{questions[currentQuestion].question}</p>
    // //   <ul>
    // //     {questions[currentQuestion].answers.map((answer, index) => (
    // //       <Button mx={5} key={index} onClick={() => {
    // //         if (answer === questions[currentQuestion].correct_answer) {
    // //           setScore(score + 1)
    // //         }
    // //         setCurrentQuestion(currentQuestion + 1)
    // //         console.log(score)
    // //       }}>{answer}</Button>
    // //     ))}
    // //   </ul>
    // // </div>
    //   // )}
    // </> */}

    </>
  )
}

export default QuizzCard