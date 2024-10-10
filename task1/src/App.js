import logo from './logo.svg';
import './App.css';

// вычисление дат это декларативный стиль, мы спрашиваем какой результат хотим получить
let year = new Date().getFullYear()

let month = null
switch (String(new Date().getMonth())) {
	case '0':
		month = 'января'
		break
	case '1':
		month = 'февраля'
		break
	case '2':
		month = 'марта'
		break
	case '3':
		month = 'апреля'
		break
	case '4':
		month = 'мая'
		break
	case '5':
		month = 'июня'
		break
	case '6':
		month = 'июля'
		break
	case '7':
		month = 'августа'
		break
	case '8':
		month = 'сентября'
		break
	case '9':
		month = 'октября'
		break
	case '10':
		month = 'ноября'
		break
	case '11':
		month = 'декабря'
		break
}

let day = new Date().getDate()

// эта функция императивный подход, мы сами пишем как сделать что то 
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p className="App-date">{day} {month} {year}</p>
			</header>
		</div>
	);
}

export default App;