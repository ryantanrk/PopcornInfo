import '../css/App.css';
import TopBar from './TopBar';
import MainView from './MainView';
import MovieView from './MovieView';
import SeriesView from './SeriesView';
import Movie from './Movie';
import Tv from './Tv';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//main interface where different views are being displayed at
//default is MainView
function App() {
  	return (
		<Router>
			<div className="App">
				<TopBar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<MainView />
						</Route>
						<Route exact path="/movies">
							<MovieView />
						</Route>
						<Route exact path="/series">
							<SeriesView />
						</Route>
						<Route exact path="/movie/:id">
							<Movie />
						</Route>
						<Route exact path="/tv/:id">
							<Tv />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
  	);
}

export default App;
