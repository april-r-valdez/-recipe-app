import React, { useState, useEffect } from 'react';

import QuizBank from "../components/Utils/QuizBank";

const TasteQuiz = () => {

    const [currentQ, setCurrentQ] = useState("")

    useEffect( () => {
        setCurrentQ(QuizBank[0])
    }, [])

    return ( 
        <>
        <div className='container'>
        <div>
         <h4>Taste Quiz</h4>
       </div>
       <br></br>
       <div className='contanier'>
        <div >Question {currentQ.id + 1}/{QuizBank.length}</div>
        <h4>{currentQ.question}</h4>
       </div>
       {currentQ.options ?
       <>

       </> : (null)}
       <div>

       </div>

        </div>
        <p>  </p>

        {/* <button className="quiz-button" onClick={handleClickA}> {currentQ.answerA} </button>

        <button className="quiz-button" onClick={handleClickB}> {currentQ.answerB} </button>

        {<br />}
        {<br />}

        <Link className="quiz-link" to="/home/quiz" onClick={() => window.location.reload()}> restart quiz </Link> */}

        </>

     );
}
 
export default TasteQuiz;