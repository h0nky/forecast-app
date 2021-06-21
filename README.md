# Getting started
npm i to install dependecies
npm test to run tests
npm start to start project

# Reasons of choice
1. I decided to choose React because I'm more familiar with it's principles and approaches.
2. I choose Create React App to save some time on scaffolding and project configuration setup.
3. I choose to utilize Context API for the state management because it's completely solves the problem in this case and lets me to avoid extra dependencies, utilizing extra frameworks etc.
4. I decided to manage state update with two main methods which are, in essence, similar to a redux reducers. The first one is responsible for the normal state update and the second one is responsible for handling error.
5. I choose to use Typescript in order to add a strong typings and types annotation. Which basically a kind of a static testing.
6. To solve problem with CORS I utilize embedded proxy. It was the simplest solution.
7. Because there is no way to somehow parameterize existed query URL i had to add Kelvin to Celsius converter.
8. I decided to show all forecasts at once regardless day of the week because otherwise there will be no possibility to implement a time periods scroll, there is not enough time periods for a specific day.
9. Few more words with regard to ForecastDetails and ForecastList - usually I'll create a separate reusable component for such case and I'll keep and oganize most of their logic and data flow utilizing internal state of the components but in this case I decided to go other way. I separate the view and the data to keep ForecastDetails and ForecastList as dumb as possible. Such approach will make all parts of the application more convenient for testing.
10. As I don't have any interactions with SVG icons I deciced to put them in a separate file and retrieve them with getWeatherIcon method which I left in the same file for the lack of a better place.
11. Regarding test coverage - I started from utils methods because they're responsible for integrity and format of the application data. Also I decided to cover MainPage component and it's differrent render conditions as it's responsible for rendering two main view components of the application. I also decided to cover ForecastListItem component because it has an onClick event handler and it's neccessary to check it because it's responsible for switching between time periods.
12. Unfortunatelly, I made a mistake and I disregarded the principle of "mobile first" and started to build a layout from the large screen which in the end brought me to a decision to skip creating a responsive design because I'm running out of time.
13. As it was no SVG icon for other weather types I decided to use a random rain icon for all other cases.
14. If I would have more time I'd definitely cover with tests useForecast hook and APIService component in a first place.