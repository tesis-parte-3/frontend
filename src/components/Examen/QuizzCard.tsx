import { Button } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Target, User } from 'tabler-icons-react';
import { useForm } from '@mantine/form'

interface IQuizzCard {
  level: 'grado2' | 'grado3' | 'grado5' | 'general';
}




interface IQuestions {
  level: string;
  question: string;
  answers: string[];
  correct_answer: string;
  exam_a: number;
  exam_r: number;
  picture: {
    url: string | null
  }
}

  // const handleChange = (values: IUser) => {
  //   axios.post(`https://api.ismoxpage.online/users/${user.id}`, {
  //     user: values
  //   }).then((res) => {
  //     localStorage.setItem("user", JSON.stringify({ user:values }))
  //     window.location.reload()
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }





function QuizzCard({ level }: IQuizzCard) {
  const [questions, setQuestions] = useState<IQuestions[]>([]) //pregunta actual
  const [isFinished, setIsFinished] = useState<boolean>(false) //para saber si hemos terminado

  const [loading, setLoading] = useState<boolean>(true) //para saber si estamos cargando
  const [failureCounter, setFailureCounter] = useState<number>(0) //para saber cuantas veces hemos fallado
  const [currentQuestion, setCurrentQuestion] = useState<number>(0) //que numero de pregunta se esta mostrando
  const [score, setScore] = useState<number>(0) //puntuacion
  const [tiempoRestante, setTiempoRestante] = useState<number>(20) //tiempo restante
  const [areDisabled, setAreDisabled] = useState<boolean>(false) //para saber si los botones estan deshabilitados
  const [answersShown, setAnswersShown] = useState<boolean>(false) //para saber si las respuestas se han mostrado

  function handleAnswerSubmit(answer: string, e: any) {

    //añadir puntuacion
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1)

    }

    //añadir estilos de pregunta

    e.target.classList.add(answer === questions[currentQuestion].correct_answer ? 'correct' : 'incorrect')
    setAreDisabled(true)
    // if (answer === questions[currentQuestion].correct_answer) {
    //   e.target.classList.add('correct')
    // } else {
    //   e.target.classList.add('incorrect')
    // }

    //pasar a la siguiente pregunta



    setTimeout(() => {
      if (currentQuestion == questions.length - 1) {
        setIsFinished(true)
      } else {
        setCurrentQuestion(currentQuestion + 1)
        e.target.classList.remove('correct')
        e.target.classList.remove('incorrect')
        setTiempoRestante(20)
        setAreDisabled(false)
      }
    }, 1000);

    console.log(score)


  }


  useEffect(() => {
    axios.get(`https://api.ismoxpage.online/exams?level=${level}`).then((res) => {
      setQuestions(res.data)
      setLoading(false)
      console.log(res.data)
    }).catch(() => {
      setFailureCounter(failureCounter + 1)
    })
  }, [failureCounter])

  useEffect(() => {
    if (currentQuestion === questions.length) {
      if (score >= 19) {
        axios.post(`https://api.ismoxpage.online/exams/approve_exam`,).then((res) => {
          console.log(res.data)
        })
      } else {
        axios.post(`https://api.ismoxpage.online/exams/reprove_exam`,).then((res) => {
          console.log(res.data)
        })
      }
    }
  })

  useEffect(() => {

    const intervalo = setInterval(() => {

      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1)
      if (tiempoRestante === 0) {
        setAreDisabled(true);
      }

    }, 1000)

    return () => clearInterval(intervalo)

  }, [tiempoRestante]);


  if (isFinished) return (
    <>

      <style>
        {`
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

  /* FINALIZADO */
  .juego-terminado {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 24px;
    align-items: center;
  }




`}

      </style>

    


      <div className="container">

        <div className="juego-terminado">

          <span>
            {" "}
            Has terminado el examen. Tu puntuación es: {score / 2} de {questions.length / 2}
            {" "}
          </span>

          <span>
            {" "}
            {score >= 19 ? "¡Felicidades! Has aprobado el examen" : "Lo siento, no has aprobado el examen"}
            {" "}
          </span>


          exam_a: exam_a + 1 

          <button onClick={() => window.location.href = "/Examen"}> hacer otro examen </button>

          <button onClick={() => {
            setIsFinished(false)
            setAnswersShown(true)
            setCurrentQuestion(0)
            
          }}> ver respuestas </button>
        </div>

      </div>
    </>
  )

  if (answersShown) return ( 

    <>

      <style>
        {`
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


`}

      </style>

      <div className="container">

        <div className="lado-izquierdo">

          <div className="numero-pregunta">
            <span>pregunta {currentQuestion + 1}  de </span> {questions.length}
          </div>

          <div className="titulo-pregunta">
            <p>{questions[currentQuestion].question}</p>

          </div>

          <div>
            {questions[currentQuestion].answers.filter((answer) => answer === questions[currentQuestion].correct_answer)}
          </div>

          <button onClick={() => {


            if (currentQuestion == questions.length - 1) {
              window.location.href = "/Examen"
            } else {
              setCurrentQuestion(currentQuestion + 1)
            }


          }}>
            {currentQuestion == questions.length - 1 ? "Terminar" : "Siguiente"}
          </button>

          <button onClick={() => {

            if (currentQuestion == 0) {

            } else {
              setCurrentQuestion(currentQuestion - 1)

            }


          }}>volver</button>

        </div>


      </div>



    </>


  )



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
          {
            questions[currentQuestion].picture.url !== null && (
              <img src={`https://api.ismoxpage.online` + questions[currentQuestion].picture?.url ?? ''} alt="imagen" style={{ width: '100%' }} />
            )
          }
          <div className="lado-izquierdo">

            <div className="numero-pregunta">
              <span>pregunta {currentQuestion + 1}  de </span> {questions.length}
            </div>

            <div className="titulo-pregunta">
              <p>{questions[currentQuestion].question}</p>

            </div>

            <div>{!areDisabled ? (
              <span className="tiempo-restante">tiempo restante: {tiempoRestante}</span>
            ) : (
              <button
                onClick={() => {
                  setTiempoRestante(20)
                  setAreDisabled(false)
                  setCurrentQuestion(currentQuestion + 1)
                }}
              > Continuar</button>
            )}

            </div>


          </div>

          <div className="lado-derecho">

            <ul>

              {questions[currentQuestion].answers.map((answer, index) => (

                <Button disabled={areDisabled} key={index} onClick={(e) => handleAnswerSubmit(answer, e)} >{answer}</Button>
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