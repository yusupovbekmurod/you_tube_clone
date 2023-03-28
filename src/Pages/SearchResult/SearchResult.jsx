import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./SearchResult.scss";


const SearchResult = () => {
    const { searchtitle } = useParams()
    const [data, setData] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7b77d20fbamshbbf1cf1322031e1p1c95d3jsn7edeeca070d0',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/search?q=${searchtitle}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
            .then(response => response.json())
            .then(response => setData(response.items))
            .catch(err => console.error(err));
    }, [searchtitle]);

    console.log(data);
    return (
        <div>
            <div>
                <Header />

                <div className="mainBody">
                    <Sidebar />
                    <div class="videos">
                        <div class="videos__container">
                            <div className="products">
                                {
                                    data.map(video =>
                                        <article className='product-item' key={video.id.videoId}>
                                            <Link to={`/singlevideo/${video.id.videoId}`}>
                                                <img src={video.snippet.thumbnails.medium.url} alt="" />
                                            </Link>
                                            <div>
                                                <h1>{video.snippet.title}</h1>
                                                <p>{video.snippet.description}</p>
                                                <strong>{video.price}</strong>
                                            </div>
                                        </article>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
