import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

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


function App() {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement(
				'img',
				{ className: 'App-logo', alt: 'logo', src: logo }),
			createElement(
				'p',
				{},
				'Edit src App.js and save to reload.'),
			createElement(
				'a',
				{ className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' },
				'Learn React'),
			createElement(
				'p',
				{},
				day, month, year
			)
		)
	)
}

export default App;