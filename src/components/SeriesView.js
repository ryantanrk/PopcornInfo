import {api_key} from '../config.json';
import ShowList from './ShowList';
import {useState, useEffect} from 'react';

function SeriesView() {
    const [genres, setGenres] = useState([]);
    const [url, setUrl] = useState("https://api.themoviedb.org/3/discover/tv?api_key=" + api_key);

    function changeGenre(id) {
        if (id === "0") {
            setUrl("https://api.themoviedb.org/3/discover/movie?api_key=" + api_key);
        }
        else {
            setUrl("https://api.themoviedb.org/3/discover/tv?api_key=" + api_key + "&with_genres=" + id);
        }
    }

    //get genres
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
            <h1>Series</h1>
            <div className="genreFilter d-flex justify-content-end">
                <div className="input-group my-2">
                    <select id="selectGroupGenre" className="form-select" onChange={v => changeGenre(v.target.value)}>
                        <option key="0" value="0">Genre</option>
                        {genres.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                    </select>
                </div>
            </div>

            <ShowList url={url} type="tv"/>
        </div>
    );
}

export default SeriesView;