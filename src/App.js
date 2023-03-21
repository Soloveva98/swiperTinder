import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Cards />
			<SwipeButtons />
		</div >
	);
}

export default App;
