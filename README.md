# INTERACTIVE-QUIZE-APPLICATION

"COMPANY": CODTECH IT SOLUTIONS 

"NAME": PRIYA

"INTERN ID": CT06DL659

"DOMAIN": FRONT END DEVELOPMENT

"DURATION": 8 WEEKS

"MENTOR": NEELA SANTOSH

The objective of this task was to design and implement a fully functional, interactive, and responsive Quiz Application using basic front-end web technologies such as HTML5, CSS3, and Vanilla JavaScript (ES6). The primary goal was to provide users with an engaging quiz experience directly through their web browsers without requiring any additional backend servers or external libraries. The application dynamically displays a series of multiple-choice questions, records user selections, tracks scoring, and provides immediate feedback based on performance at the end of the quiz. It is a lightweight, efficient, and mobile-friendly application capable of delivering instant results, making it a versatile tool suitable for multiple practical scenarios.

The structure of the application was built using HTML5, which defines the overall layout and content blocks. This includes a quiz container section that holds the current question, multiple option buttons, a live timer display, a next button for moving to the subsequent question, and a result section that remains hidden until the quiz is completed. The result section shows total score, correct and incorrect answers, time taken, percentage score, and customized performance feedback. The HTML provides the semantic structure necessary for browsers to render and interact with the application’s content effectively.

For styling and user interface design, CSS3 was applied extensively. The CSS file defines styles for the quiz container, question and option layouts, button designs, background gradients, text formatting, hover effects, and responsive adjustments through media queries. The background uses a linear gradient color combination of blue and violet, giving the quiz application a clean, attractive appearance. Buttons are styled with rounded corners, color transitions on hover, and visual differentiation for correct (green) and incorrect (red) answers, enhancing the interactive feel. Additionally, media queries ensure the application is responsive, adjusting the layout and font sizes for different device screen widths, especially for mobile users.

The core functionality of the quiz application was programmed using Vanilla JavaScript (ES6). An array of question objects was created, with each object containing a question string, multiple options, and the correct answer. The loadQuestion() function dynamically loads each question and its options onto the interface. When a user selects an answer, an event listener triggers the selectAnswer() function, which evaluates the response, disables other options, highlights the correct and incorrect answers appropriately, and updates the score. The application also features a live timer, built using the setInterval() function, which continuously updates the time display from the moment the quiz starts until completion.

After answering all the questions, the showResult() function is invoked, hiding the quiz box and displaying the result section. The result includes total score, the number of correct and incorrect answers, time taken in seconds, percentage score, and a tailored feedback message based on the user’s performance. A ‘Restart Quiz’ button allows users to reload the quiz and attempt it again. This setup provides a seamless and self-contained quiz experience suitable for various use cases.


Tools and Technologies Used:

HTML5	To structure the quiz interface, including quiz questions, options, buttons, timer, and result display areas.
CSS3	To style the user interface, including layout, colors, fonts, gradients, hover effects, and responsive designs using media queries.
Vanilla JavaScript (ES6)	To handle quiz logic, manage question flow, track answers, calculate scores and percentages, handle timer functionality, and dynamically manipulate the DOM.
DOM Manipulation (Browser’s Native API)	To dynamically create and update HTML elements such as questions, options, and result display in real-time based on user interaction.
Text Editor (like Visual Studio Code)	To write, organize, and manage HTML, CSS, and JavaScript files.
Web Browser (Google Chrome, Edge, or Firefox)	To run, test, and debug the interactive quiz application.



Application Scope: Where This Task is Applicable

This interactive quiz application has a wide range of practical applications across various domains. In educational platforms and e-learning systems, it can be integrated as an assessment tool to conduct multiple-choice quizzes for students. It can serve as an interactive practice quiz for students preparing for competitive exams or school tests. Teachers can use this to conduct quick knowledge checks after lessons or online classes.

In corporate environments, this quiz application can be adapted for employee training programs, compliance assessments, and skill evaluation tests. It ensures instant feedback and scoring, making it highly effective for workshops and knowledge validation exercises.

For entertainment purposes, it can be used on trivia websites or social media challenges where users can participate in fun, interactive quizzes and compare their results. Additionally, it can serve as a survey tool for collecting audience preferences or opinions using multiple-choice questions with immediate response analysis.

The application can also be utilized in recruitment processes for preliminary aptitude or general knowledge screening, where candidates can answer timed quizzes online without the need for complex systems. Its lightweight, browser-based nature makes it ideal for mobile and desktop platforms alike.

In conclusion, this interactive quiz application is a highly versatile tool that demonstrates essential web development skills, is easy to deploy, requires no external libraries or servers, and can be applied to educational, corporate, entertainment, survey, and recruitment scenarios efficiently.


#OUTPUT

<img width="1768" height="813" alt="Screenshot 2026-06-22 020745" src="https://github.com/user-attachments/assets/b0126dbd-a4dc-42fd-a972-444726376570" />
