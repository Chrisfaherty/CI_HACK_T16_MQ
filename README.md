# The Music Quiz
(Developers: )

![This is an screenshot of the responsive design image](./assets/images/readme/music_quiz_responsiveness.png)

----

[Live Webpage](https://8000-chrisfahert-cihackt16mq-ww9joothxyz.ws-eu74.gitpod.io/)

----

## About

The Music Quiz website has been developed to provide users the chance to play the music quizzes and learn about different types of music. This website contains quizzes based on Jazz, Rock, Pop, Classic and EDM (Electronic dance music). 

## Table of Contents

- [The Music Quiz](#the-music-quiz)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Goals](#site-owner-goals)
  - [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Requirements and Expectations](#user-requirements-and-expectations)
    - [User Stories](#user-stories)
      - [First-time User](#first-time-user)
      - [Site Owner](#site-owner)
    - [User Manual](#user-manual)
      - [Overview](#overview)
      - [Home page](#home-page)
      - [Quiz page](#quiz-page)
      - [Quiz End page](#quiz-end-page)
      - [Trophy page](#trophy-page)
      - [High Score page](#high-score-page)
  - [Technical Design](#technical-design)
    - [Wireframes](#wireframes)
    - [Flowchart](#flowchart)
    - [Wireframes](#wireframes-1)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Framework and Tools](#framework-and-tools)
  - [Features](#features)
    - [Existing Features](#existing-features)
      - [Home page](#home-page-1)
      - [Quiz page](#quiz-page-1)
      - [Quiz End page](#quiz-end-page-1)
      - [Trophy page](#trophy-page-1)
      - [High Score page](#high-score-page-1)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Fixed Bugs](#fixed-bugs)
  - [Deployment](#deployment)
    - [Deploying to Github Pages](#deploying-to-github-pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
  - [Credits](#credits)
    - [Quiz Questions:](#quiz-questions)
    - [Sounds Effect and Music](#sounds-effect-and-music)
  - [Acknowledgements](#acknowledgements)



-----
## Project Goals

### User Goals

 - Be able to easily interact with the app to play the quiz.
 - Be able to choose different type of music (Jazz, Rock, Pop, Classical, EDM) quiz.
 - Navigate the app seamlessly.
 - Receive clear instructions on the rules to play the quiz.
 - Receive the clear result on their current input options.
 - Receive the total score and result of the quiz.


### Site Owner Goals

 - To provide user an easy-to-use app to play music quiz from The Music Quiz.
 - To provide the user with quizzes on different types of music (Jazz, Rock, Pop, Classic, EDM).
 - To provide the user with the ability to view the current score.
 - To provide the user the ability to view the total score and result of the quiz.
 - To provide the user to view the total number of questions within a quiz.
 - To provide the ability to view the current status of question within a quiz.

-----
## User Experience

### Target Audience

 - People looking to play Music quizzes.
 - People looking to learn about different types of music.

### User Requirements and Expectations

 - The ability to seamlessly navigate through the app.
 - To use an app that provides a quiz on different types of music to the user.

### User Stories

#### First-time User

1. As a user, I want to:
    - have an interactive, meaningful and contextual quiz.
    - view my progress, current score, and response to my answer during the quiz.
    - view the final score, an option to save the score with the user nane and list of top scores after completion of the quiz.
    - navigate using nav buttons and links easily.

#### Site Owner
2.  As the site owner, I would want:
    - to provide a music relevent and well instructed quiz.
    - the user to be able to see his score after each step.
    - the user should be able to navigate through all the pages easily.
    - the user learn something in regards to music.
    - the user to get feedback based on their input.


----
----
### User Manual

<details><summary>Instructions</summary>


----
#### Overview

The Music Quiz app is for users who wish to enhance the knowledge about different type of music (Jazz, Rock, Pop, Classic, EDM) by playing interactive quizzes. Each page provides the logo at the top left corner and nav button to navigate to home page.

---

#### Home page

The landing page of the website welcomes the user. It provides the toggle icon at the top right corner to navigate the user to different pages of the website. The "Let's Know" nav button directly navigates the user to the quiz page by randomly selecting one of the music type. Alternatively, user can select particular type of quiz through toggle button.

---

#### Quiz page

The Quiz page provides user the following features:
- Question with four options.
    - User selection is highlighted with green for right answer and red for wrong answer.
    - User is also provided with textual feedback on the selection.
- Progress bar for progress of the quiz.
- Selected music type for the quiz.
- Current question number from total number of questions.
- Current status of the score.  
- Nav button to navigate to home page.
- On completion of the quiz, user is automatically navigated to Quiz End page.

---

#### Quiz End page

The Quiz End page provides the following features:
- Option to save the quiz score by entering user name. 
- After saving the score along with user name, user is automatically navigated to either the trophy page or the high score page depending on user's score.
- Nav button to navigate to home page.

---

#### Trophy page

The Trophy page provides either one of the following greeting messages:
- User's detailed result with a Gold guitar icon, if the user gave all answers right.
- User's detailed result with a Silver guitar icon, if the user gave nine answers right.
- User's detailed result with a Bronze guitar icon, if the user gave eight answers right.

---


#### High Score page

The High Score page provides the following features:
- Shows up to the top six high scores along with user name and icon of Silver, Bronze, and Gold guitars if any won.
- Nav button to navigate to home page.

---
</details>

[Back to Table Of Contents](#table-of-contents)

## Technical Design

### Wireframes

Following are the wireframes of The Music Quiz App:

<details><summary>Overview</summary>
<img src="">
</details>

----
### Flowchart

The following flowchart sumerises the structure of the Game.

![](/assets/images/readme/flowchart-01.jpg)

----

### Wireframes

<details><summary>Index Page</summary>
<img src="./assets/images/readme/wireframe/index-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/index-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/index-html-mobile-wireframe.png">
<img src="./assets/images/readme/wireframe/index-html-menu-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/index-html-menu-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/index-html-menu-mobile-wireframe.png">
</details>

<details><summary>Rock</summary>
<img src="./assets/images/readme/wireframe/rock-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/rock-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/rock-html-mobile-wireframe.png">
</details>

<details><summary>Jazz</summary>
<img src="./assets/images/readme/wireframe/jazz-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/jazz-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/jazz-html-mobile-wireframe.png">
</details>

<details><summary>Pop</summary>
<img src="./assets/images/readme/wireframe/pop-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/pop-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/pop-html-mobile-wireframe.png">
</details>

<details><summary>Classic</summary>
<img src="./assets/images/readme/wireframe/classic-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/classic-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/classic-html-mobile-wireframe.png">
</details>

<details><summary>EDM</summary>
<img src="./assets/images/readme/wireframe/edm-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/edm-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/edm-html-mobile-wireframe.png">
</details>

<details><summary>End Game</summary>
<img src="./assets/images/readme/wireframe/endgame-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/endgame-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/endgame-html-mobile-wireframe.png">
</details>

<details><summary>Score</summary>
<img src="./assets/images/readme/wireframe/score-html-desktop-wireframe.png">
<img src="./assets/images/readme/wireframe/score-html-tablet-wireframe.png">
<img src="./assets/images/readme/wireframe/score-html-mobile-wireframe.png">
</details>

## Technologies Used

### Languages
- HTML, CSS and JavaScript were used to creat this website.

### Framework and Tools
* [Git](https://git-scm.com/) Used for version control to push the code to GitHub.
* [GitHub](https://github.com/) Used as a repository to store the projects code.
* [lucidchart](https://www.lucidchart.com/) Used to create the project flow.
* [Am I Responsive?](https://ui.dev/amiresponsive) To show the website image on arange of devices.


## Features

### Existing Features

#### Home page

On the home page, the logo in the upper left corner shows the name of the website. By clicking on the 'Let's Know' button, the user can start the quiz to test his knowledge of music. Alternatively, the toggle button in the top right corner also gives the user the option to select a particular type of music quiz.

![Home page image](./assets/images/readme/music_quiz_homepage_page.jpg)

---

#### Quiz page

The Quiz page displays the Quiz area with the first question of the quiz with four options. The result is displayed in green color with sound effects if the user clicks on the right answer and if wrong, the result is displayed in red with different sound effects. The progress of the quiz is displayed by a progress bar below the logo. At the bottom left corner, the user can see the current question count from the total number of questions and at the bottom right, the current score is displayed. User can navigate to home page by clicking on 'GO HOME' button even if he/she is in the middle of a quiz.

![Quiz page image](./assets/images/readme/music_quiz_game_page.jpg)

---

#### Quiz End page

The Quiz End page shows the total score of the user and gives the user an option to save the quiz score by entering the username. The 'SAVE' button takes the user to either the high score page or the trophy page, depending on the user's score. The 'Go Home' button navigates the user to the home page.

![Quiz End page image](./assets/images/readme/music_quiz_end_page.png)

----
#### Trophy page

The Trophy page greets the user with a message detailing the user's score and icons of the Silver, Bronze, and Gold guitars that the user won. The 'Continue' button navigates the user to the High Score page.

![Trophy page image](./assets/images/readme/music_quiz_trophy_page.png)

----

#### High Score page

On the high score page, the scoreboard displays the user's score up to the top six high scores along with the user's name and icons of Silver, Bronze, and Gold guitars if any won. The 'Go Home' button navigates the user to the home page.

![High score page image](./assets/images/readme/music_quiz_high_score_page.png)

----

[Back to Table Of Contents](#table-of-contents)


## Testing

* Testing was condicted in three ways.
    * T

### Validator Testing
* p
    * N

    <details><summary></summary>
    <img src="">
    </details>

    <details><summary></summary>
    <img src="">
    </details>

    <details><summary></summary>
    <img src="">
    </details>

    <details><summary></summary>
    <img src="">
    </details>


### Testing User Stories

1. As a user, I want to have an interactive, meaningful and contextual quiz.

| **Feature** | **Action** | **Expected Results** | **Actual Result** |
|-------------|------------|----------------------|-------------------|
|All listed features in the Features section provide the user with interactive, meaningful and contextual feedback based on user input.|Required user input|User to be provided relevant feedback based on user input|Works as expected|

<details><summary>Screenshots</summary>
<img src="./assets/images/readme/music_quiz_game_page.jpg">
</details>
<details><summary>Screenshots</summary>
<img src="./assets/images/readme/music_quiz_toggle.png">
</details>

2. As a user, I want to view my progress, current score, and response to my answer during the quiz.

| **Feature** | **Action** | **Expected Results** | **Actual Result** |
|-------------|------------|----------------------|-------------------|
|Progres status, user score, audio & visual response to user answer during the quiz|Select answer to the question|Progress status is shown in bar graph format and current question number out of total questions|Works as expected| 

<details><summary>Screenshots</summary>
<img src="./assets/images/readme/music_quiz_feedback.png">
</details>

3. As a user, I want to view the final score, an option to save the score with the user nane and list of top scores after completion of the quiz.

| **Feature** | **Action** | **Expected Results** | **Actual Result** |
|-------------|------------|----------------------|-------------------|
|Show final score|Completion of quiz|Final score is shown|Works as expected|
|Save score with user name|Input user name and click save button|Score is saved with user name|Works as expected|
|Show list of saved high scores|After completing the quiz, input user name and click save button or click on nave link 'High Scores' from the toggle bar|Up to top six High scores with user name are shown|Works as expected|
|Show trophy page for more than seven correct answers|After completing the quiz, input user name and click save button|Show Gold, Silver, and Bronze trophy if the user gives the right answers to 10, 9, 8 questions respectively|Works as expected|  

<details><summary>Screenshots</summary>
<img src="./assets/images/readme/music_quiz_end_page.png">
</details>

4. As a user, I want to navigate using nav buttons and links easily.
  
| **Feature** | **Action** | **Expected Results** | **Actual Result** |
|-------------|------------|----------------------|-------------------|
|All nav buttons and toggle bar nav links navigate the user to the intended page of the website|User click|As described in feature|Works as expected| 

<details><summary>Screenshots</summary>
<img src="./assets/images/readme/music_quiz_home_toggle.png">">
</details>

[Back to Table Of Contents](#table-of-contents)

### Fixed Bugs
* Wh
    * FIX:

## Deployment

### Deploying to Github Pages

* The site was deployed to GitHub pages. The steps to deploy are as follows:

    - In the GitHub repository, navigate to the Settings tab
    - From the side menu, select pages under Code and automation, select the main Branch, then click to save button.
    - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

  The live link can be found here- https://8000-chrisfahert-cihackt16mq-ww9joothxyz.ws-eu74.gitpod.io/

### Forking the GitHub Repository

* The steps to fork the github repository

    - Go to the GitHub repository,
    - In the top right hand corner you can click on the fork button,
    - This will fork the repositry.

## Credits

### Quiz Questions: 
    * [factmonster.com](https://www.factmonster.com/take-quiz/jazz)
    * [ultimatequizquestions.com](https://www.ultimatequizquestions.com/jazz-quiz/)
    * [quiztriviagames.com](https://www.quiztriviagames.com/pop-music-quiz/)
    * [usefultrivia.com](https://www.usefultrivia.com/music_trivia/classical_music_trivia.html)
    * [freepubquiz.co.uk](http://www.freepubquiz.co.uk/orchestra-quiz.html)
    * [hhowstuffworks.com](https://play.howstuffworks.com/quiz/electronic-dance-music-quiz)
    * [laweekly.com](https://www.laweekly.com/are-you-a-real-edm-fan-take-this-quiz/)
    * [britannica.com](https://www.britannica.com/quiz/rock-music-and-rock-n-roll)

### Sounds Effect and Music
  * [Sound Effects](https://boombox.mtmograph.com/)
  * [Ambience Music](https://pixabay.com/)



## Acknowledgements
I would like to take the opportunity to thank:
* M

[Back to Table Of Contents](#table-of-contents)

