import logo from './logo.svg';
//import './App.css';
import TodoFeatues from './features/Todo';
import AlbumFeatures from './features/Albumlist';

function App() {
	return (
		<div className="App">
			<TodoFeatues />
			<AlbumFeatures />
		</div>
	);
}

export default App;
