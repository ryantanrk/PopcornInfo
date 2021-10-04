import {api_key} from '../config.json';
import ShowList from './ShowList';
import {useState, useEffect} from 'react';

function SeriesView() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const abort = new AbortController();

        async function getGenres() {
            await fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=" + api_key + "&language=en-US", {signal: abort.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error('genre fetch failed');
                }
                return response.json();
            })
            .then(g => {
                setGenres(g.genres);
            })
            .catch(e => {
                if (e.name === "AbortError") {
                    console.log("genre fetch aborted");
                }
                else {
                    console.log(e.message);
                }
            });
        }

        getGenres();

        return () => abort.abort();
    }, []);

    return (
        <div className="seriesView">
            <h1>Trending Series</h1>
            <div className="genreFilter d-flex justify-content-end">
                <div className="input-group my-2">
                    <select className="form-select" id="selectGroupGenre">
                        <option defaultValue="0">Genre</option>
                        {genres.map((g) => <option value={g.id}>{g.name}</option>)}
                    </select>
                </div>
            </div>

            <ShowList url={"https://api.themoviedb.org/3/trending/tv/week?api_key=" + api_key}/>
        </div>
    );
}

export default SeriesView;