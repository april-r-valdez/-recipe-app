import React, { useState, useEffect } from 'react';

const QuizBank = [
    {
        question: "How would you describe your cooking skill level?",
        id: 0,
        choices: [
            {id:0, text: "Beginner (Limited experience, basic recipes)", write:'Beginner' },
            {id:1, text: "Intermediate (Comfortable with a variety of recipes)", write: "Intermediate"},
            {id:2, text: "Advanced (Confident in the kitchen, enjoy challenging recipes)", write: "Advanced" }],
        type: 'MCQs',
        idNextQuestionA: 1,
        
    },
    {
        question: "How much time do you typically prefer to spend on cooking a meal?",
        id: 1, //maxReadyTime in spoonacular
        choices: [
            {id:0, text: "Quick and easy (Under 30 minutes)", write: 30 },
            {id:1, text: "Moderate (30 minutes to 1 hour)", write: 60},
            {id:2, text: "Relaxed and thorough (Over 1 hour)", write: 90 }],
        type: 'MCQs',
        idNextQuestionA: 2
    },
    {
        question: "What type of Cuisine do you like? (Select all that apply) 1/3",
        id: 2,
        options: ['African','Asian','American','British', 'Cajun',
            'Caribbean','Chinese','Eastern European','European'],
        type: 'MSQs',
        idNextQuestionA: 3
        
    },
    {
        question: "What type of Cuisine do you like? (Select all that apply) 2/3",
        id: 3,
        options: ['French', 'German', 'Greek', 'Indian', 'Irish','Italian', 
            'Japanese', 'Jewish', 'Korean'],
        type: 'MSQs',
        idNextQuestionA: 4
    },
    {
        question: "What type of Cuisine do you like? (Select all that apply) 3/3",
        id: 4,
        options: ['Latin American','Mediterranean','Mexican','Middle Eastern',
            'Nordic','Southern','Spanish','Thai','Vietnamese'],
        type: 'MSQs',
        idNextQuestionA: 5
        
    },
    {
        question: "How do you feel about sweet foods?",
    id: 5,
    choices: [
      { id: 0, text: "Sweet tooth? More like a sweet fang!", write: 75 },
      { id: 1, text: "I enjoy a bit of sweetness.", write: 50 },
      { id: 2, text: "I like sweetness, but not dental-work levels.", write: 25 },
      { id: 3, text: "I don't like sweet foods.", write: 10 },
    ],
    type: 'MCQs',
    idNextQuestionA: 6,
  },
  {
    question: "How do you feel about salty foods?",
    id: 6,
    choices: [
      { id: 0, text: "I love the taste of salt.", write: 75 },
      { id: 1, text: "Cool with saltiness, not a human pickle.", write: 50 },
      { id: 2, text: "I prefer less salt in my food.", write: 25 },
      { id: 3, text: "I dislike salty foods.", write: 10 },
    ],
    type: 'MCQs',
    idNextQuestionA: 7,
  },
  {
    question: "How do you feel about sour foods?",
    id: 7,
    choices: [
      { id: 0, text: "Love sour foods, face acrobatics and all.", write: 75 },
      { id: 1, text: "I enjoy some sourness.", write: 50 },
      { id: 2, text: "Less sour, more sunshine vibes.", write: 25 },
      { id: 3, text: "I'm not a fan of sour foods.", write: 10 },
    ],
    type: 'MCQs',
    idNextQuestionA: 8,
  },
  {
    question: "How do you feel about savory foods?",
    id: 8,
    choices: [
      { id: 0, text: "Umami superhero, flavor power!", write: 75 },
      { id: 1, text: "I appreciate savory flavors.", write: 50 },
      { id: 2, text: "Okay with a little Umami.", write: 25 },
      { id: 3, text: "I avoid savory flavors.", write: 10 },

    ],
    type: 'MCQs',
    idNextQuestionA: 9,
  },
  {
    question: "How do you feel about fatty foods?",
    id: 9,
    choices: [
      { id: 0, text: "Love fatty foods, fat-free fun's overrated.", write: 75 },
      { id: 1, text: "Enjoy some fattiness.", write: 50 },
      { id: 2, text: "Less fat, more fun.", write: 25 },
      { id: 3, text: "Fatty foods? Pass.", write: 10 },
    ],
    type: 'MCQs',
    idNextQuestionA: 10,
  },
  {
    question: "How do you feel about spicy foods?",
    id: 10,
    choices: [
      { id: 0, text: "Love spicy tango for taste buds.", write: 75 },
      { id: 1, text: "Enjoy spice, no fire-breathing.", write: 50 },
      { id: 2, text: "Less spice, more ice. No mouth ablaze.", write: 25 },
      { id: 3, text: "Spicy foods? Pass, cool and collected buds.", write: 10 },
    ],
    type: 'MCQs',
    idNextQuestionA: 11,
  },
  {
    question: "How do you feel about bitter foods?",
    id: 11,
    choices: [
      { id: 0, text: "Into bitter like my humor.", write: 75 },
      { id: 1, text: "Okay with bitterness.", write: 50 },
      { id: 2, text: "Less bitter, more glitter, keep it light.", write: 25},
      { id: 3, text: "Bitter foods? Pass, life's too short.", write: 10 },
    ],
    type: 'MCQs',
    idNextQuestionA: 12,
  }
]
const TasteQuiz = () => {

    const [currentQ, setCurrentQ] = useState(0)
    const {question, choices, options } = QuizBank[currentQ];

    const handleMC = () => {
        return ( null );
    }
    const handleMS = () => {
        return ( null );
    }
    const handleNext = () => {
        return ( 
            setCurrentQ(currentQ + 1)
         );
    }
    const handleBack = () => {
        return ( setCurrentQ(currentQ - 1) );
    }
     
    return (
      <>
        <div className="container-sm">
          <div>
            <h4>Taste Quiz</h4>
          </div>
          <br></br>
          <div className="contanier">
            <div></div>
            <h4>{question}</h4>
          </div>
          <ul className="list-group list-group-flush">
            {choices
              ? choices.map((choice) => (
                  <li
                    className="list-group-item list-group-item-action list-group-flush"
                    onClick={handleMC}
                  >
                    {choice.text}
                  </li>
                ))
              : options.map((option) => (
                  <li
                    className="list-group-item list-group-item-action list-group-flush"
                    onClick={handleMS}
                  >
                    {option}
                  </li>
                ))}
          </ul>
          <div>
            <div className="d-flex d-flex justify-content-between">
            <div className="p-2">
                <button type="button" class="btn btn-primary" disabled={currentQ === 0} onClick={handleBack}>
                  Back
                </button>
              </div>
              <div className="p-2">
                Question
                {currentQ + 1}/{QuizBank.length}
              </div>
              <div className="p-2">
                <button type="button" class="btn btn-primary"disabled={currentQ + 1 === QuizBank.length} onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default TasteQuiz;