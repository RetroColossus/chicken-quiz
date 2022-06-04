// This is the question funstions that contain questions and the answers. They are in multidimensional array with inner array elements
var questions = [
    { 
        question: "What is not a JavaScript Primitive Data Type?", 
        answers: [
            { text: "String", correct: false },
            { text: "Array" , correct: true },
            { text: "Boolean", correct: false },
            { text: "Number", correct: false }
        ]
    },
    { 
        question: "A JavaScript file has an extension of?", 
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JS", correct: true },
            { text: "PNG", correct: false }
        ]
    },
    { 
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 8?", 
        answers: [
            { text: "if (i != 8)", correct: true },
            { text: "if i =! 8", correct: false },
            { text: "if (i <> 8)", correct: false },
            { text: "if (i !=== 8)", correct: false }
        ]
    },
    { 
        question: "What is the correct way to write a JavaScript array?", 
        answers: [
            { text: "var vegetable = (0:'kale', 1:'lettuce', 2:'spinach')", correct: false },
            { text: "var vegetable = ['kale', 'lettuce', 'spinach']", correct: true },
            { text: "var vegetable = (kale, lettuce, spinach)", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    { 
        question: "How do you round the number 102.456, to the nearest integer?",
        answers: [
            { text: "Math.random(102.456)", correct: false },
            { text: "Math.rnd(102.456)", correct: false },
            { text: "round(102.456)", correct: false },
            { text: "None of the above", correct: true }
        ]
    },
];