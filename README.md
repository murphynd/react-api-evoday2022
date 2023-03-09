# Goal of this project is to spend time on React Hooks

- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
- [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

# Strech Goals for this Project:

Set up a MERN stack - capture user information - capture what stories a user likes
- MongoDB — document database
- Express(.js) — Node.js web framework
- React(.js) — a client-side JavaScript framework
- Node(.js) — the premier JavaScript web server

[What is the MERN Stack?](https://www.mongodb.com/mern-stack)

Goals
- [x] attach the [NYTimes API](https://developer.nytimes.com/apis)
- [x] use [Tailwinds](https://tailwindcss.com/) to make it look nice 
- [x] create a react app that uses [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [x] set up Node
- [ ] set up Express 
- [ ] set up a MongoDB
- [ ] Rewrite in [Typescript](https://www.typescriptlang.org/) vs javascript which it is in now. 
- [ ] have a user sign in and save users in database 
- [ ] have a seperate favorites page that can hold information from the api into a database

Attach OpenAi Api and have an option to take the information from a single story from the NYT api and write a "NYT style article" from the inforation given by the NYT api.
- click on artice and have an iframe of the NYT real article 
- split screen where one side is the real article and the other side is ChatGPT writing from the prompt:
"Write a New York Times Style article that is 3 paragraphs long including the following information: [article summary from the API]"

# Technology used:

- This project uses the [NYTimes API](https://developer.nytimes.com/apis)
- JavaScript and React.js

# To use
- set up an account at [NYTimes API](https://developer.nytimes.com/apis)
- generate an api key for Top Stories API
- create a .env folder in the root and add REACT_APP_API_KEY='yourkey'