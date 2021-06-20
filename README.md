# Getting started
npm i to install dependecies
npm start to start project

# Reasons of choice
1. I decided to choose React just because I'm more familiar with it.
2. I choose Create React App to save some time on scaffolding and project configuration setup.
3. I choose to utilize Context API for the state management because it's completely solves the problem in this case and lets me to avoid extra dependencies, utilizing extra frameworks etc.
4. I choose to utilize Typescript in order to add a strong typings and types annotation. Which basically a kind of a static testing.
5. To solve problem with CORS I utilize embedded proxy. It was the simplest solution.
6. Because there is no way to somehow parameterize existed query URL i had to add Kelvin to Celsius converter.
7. There were no requirements that I could rely on when choosing the principle of showing choosen forecast so I decided to show all of them regardless day of the week or a specific time period.
8. Few more words with regard to ForecastDetails and ForecastList - usually I'll create a separate reusable component for such case and I'll keep and oganize most of their logic and data flow utilizing internal state of the components but in this case I decided to go other way. I separate the view and the data to keep ForecastDetails and ForecastList as dumb as possible. Such approach will make all parts of the application more convenient for testing.
9. As I don't have any further interactions with SVG icon I deciced to put them in a separate file.
