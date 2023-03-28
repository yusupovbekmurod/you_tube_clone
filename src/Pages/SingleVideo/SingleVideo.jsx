import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { BiLike } from "react-icons/bi"
import { GrView } from "react-icons/gr"
import { AiOutlineComment } from "react-icons/ai"

import Header from "../../Components/Header/Header";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { instance } from "../../Api/intence"
import "./SingleVideo.scss";


const SingleVideo = () => {
    const [data, setData] = useState({})
    const { videoId } = useParams()

    const [videoData, setVideoData] = useState([])

    useEffect(() => {
        instance.get("/trending?type=C%20g%2C%20n%2C%20mo&hl=en&gl=US")
            .then(response => setVideoData(response.data.contents))
    }, []);

    // API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7b77d20fbamshbbf1cf1322031e1p1c95d3jsn7edeeca070d0',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Header />
            <div className='single-video__wrapper'>
                <div className='single-video'>
                    <iframe width="800" height="515" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay></iframe>

                    <h3 className='single-video__title'>
                        {data?.items?.length > 0 && data?.items[0]?.snippet?.title ? data?.items[0]?.snippet?.title : ""}
                    </h3>

                    <div className='single-video__info'>
                        <div className='single-video__like-wrapper'>
                            <BiLike className='react__icon' />
                            <p>
                                {data?.items?.length > 0 && data?.items[0]?.statistics?.likeCount ? data?.items[0]?.statistics?.likeCount : 0}
                            </p>
                        </div>
                        <div className='single-video__like-wrapper'>
                            <GrView className='react__icon' />
                            <p>
                                {data?.items?.length > 0 && data?.items[0]?.statistics?.viewCount ? data?.items[0]?.statistics?.viewCount : 0}
                            </p>
                        </div>
                        <div className='single-video__like-wrapper'>
                            <AiOutlineComment className='react__icon' />
                            <p>
                                {data?.items?.length > 0 && data?.items[0]?.statistics?.commentCount ? data?.items[0]?.statistics?.commentCount : 0}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        videoData.map(item => {
                            return <VideoCard items={item.video} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SingleVideo;
