const QuizBank = [
    {
        question: "How would you describe your cooking skill level?",
        id: 0,
        answerA: "Beginner (Limited experience, basic recipes)",
        answerB: "Intermediate (Comfortable with a variety of recipes)",
        answerC: "Advanced (Confident in the kitchen, enjoy challenging recipes)",
        idNextQuestionA: 1,
        
    },
    {
        question: "How much time do you typically prefer to spend on cooking a meal?",
        id: 1,
        answerA: "Quick and easy (Under 30 minutes)",
        answerB: "Moderate (30 minutes to 1 hour)",
        answerC: "Relaxed and thorough (Over 1 hour)",
        idNextQuestionA: 2
    },
    {
        question: "What type of Cuisine do you like? (Select all that apply) 1/3",
        id: 2,
        options: ['African','Asian','American','British', 'Cajun',
            'Caribbean','Chinese','Eastern European','European'],
        answerA: "Yes",
        idNextQuestionA: 3
        
    },
    {
        question: "What type of Cuisine do you like? (Select all that apply) 2/3",
        id: 3,
        options: ['French', 'German', 'Greek', 'Indian', 'Irish','Italian', 
            'Japanese', 'Jewish', 'Korean'],
        answerA: "Yes",
        idNextQuestionA: 4
    },
    {
        question: "What type of Cuisine do you like? (Select all that apply) 3/3",
        id: 4,
        options: ['Latin American','Mediterranean','Mexican','Middle Eastern',
            'Nordic','Southern','Spanish','Thai','Vietnamese'],
        
        idNextQuestionA: 5
        
    },
    {
        question: "How do you feel about sweet foods?",
        id: 5,
        answerA: "Sweet tooth? More like a sweet fang!",
        answerB: "I enjoy a bit of sweetness.",
        answerC: "I like sweetness, but not dental-work levels.",
        answerD: "I don't like sweet foods.",
        idNextQuestionA: 6
    },
    {
        question: "How do you feel about salty foods?",
        id: 6,
        answerA: "I love the taste of salt.",
        answerB: "Cool with saltiness, not a human pickle.",
        answerC: "I prefer less salt in my food.",
        answerD: "I dislike salty foods.",
        idNextQuestionA: 7
    },
    {
        question: "How do you feel about sour foods?",
        id: 7,
        answerA: "Love sour foods, face acrobatics and all.",
        answerB: "I enjoy some sourness.",
        answerC: "Less sour, more sunshine vibes.",
        answerD: "I'm not a fan of sour foods.",
        idNextQuestionA: 8
    },
    {
        question: "How do you feel about savory foods?",
        id: 8,
        answerA: "Umami superhero, flavor power!",
        answerB: "",
        answerC: "",
        answerD: "Umami? Stick to simpler tastes.",
        idNextQuestionA: 9
    },
    {
        question: "How do you feel about fatty foods?",
        id: 9,
        answerA: "Love fatty foods, fat-free fun's overrated.",
        answerB: "Enjoy some fattiness.",
        answerC: "Less fat, more fun.",
        answerD: "Fatty foods? Pass.",
        idNextQuestionA: 10
    },
    {
        question: "How do you feel about spicy foods?",
        id: 10,
        answerA: "Love spicy tango for taste buds.",
        answerB: "Enjoy spice, no fire-breathing.",
        answerC: "Less spice, more ice. No mouth ablaze.",
        answerD: "Spicy foods? Pass, cool and collected buds.",
        idNextQuestionA: 11
    },
    {
        question: "How do you feel about bitter foods?",
        id: 11,
        answerA: "Into bitter like my humor.",
        answerB: "Okay with bitterness.",
        answerC: "Less bitter, more glitter, keep it light.",
        answerD: "Bitter foods? Pass, life's too short.",
        idNextQuestionA: 12
    }
]

export default QuizBank;