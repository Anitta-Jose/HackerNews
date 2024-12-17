# Hacker News 3.0

# Problem Statement

Hacker News is an excellent resource for front end engineers, but it looks quite ugly - have a look here: https://news.ycombinator.com/
.
Luckily, there is an Official Hacker News API (https://github.com/HackerNews/API
)that we can use to create a better version.

Using any framework you prefer (or none), utilise the Hacker News API to create a web application that shows the latest stories. This project does not require you to implement a user profile page or comments just redesign the front page of hacker news.

What we’re looking for:

Readable and DRY code
A clean, easy to use UI
Use of HTML/JS/CSS best practices
Accessibility considerations
We value test coverage

# Solution

I have made use of create-react-app for the scaffolding. Command used --> npx create-react-app hacker-news.
Styled using css, unit test using react-testing-library and jest. Tried my best to implement the accessibility standards.

# To start the application

Please perform 'npm install' to install the needed dependencies as it is ignored in the committed files.
'npm start' command will start the application in localhost.

# Assumptions and API's used

As mentioned, I have timeboxed this assignment and implemented the essentials stated in the question.

To fetch the Ids of the stories - https://hacker-news.firebaseio.com/v0/topstories.json

To list the stories - https://hacker-news.firebaseio.com/v0/item
/${storId}.json

I have sliced the content to display 15 stories for time being.

# Enhancements to the existing application

- Implement pagination to display all the stories
- Implement the menu items
- Implement the navigation in footer
- Login feature
