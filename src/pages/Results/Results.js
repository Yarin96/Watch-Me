import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import Row from '../../components/Row/Row';
import Background from '../../components/Background/Background';
import './Results.css';

const Results = () => {

    const { url } = useContext(SearchContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMovies(data.results);
        })
    }, [url]);

    return(
        <>
            <Background fav={false} />
            {(movies === undefined || movies?.length === 0) ?
             (
                <div className='outer'>
                    <h1>No results to show. 🧟</h1>
                </div>
             ) : (
                <Row title="Search Results" fetchURL={url} />
             )}
        </>
    )
}

export default Results;