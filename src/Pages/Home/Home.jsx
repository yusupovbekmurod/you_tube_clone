import React, { useState, useEffect } from 'react';
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoCard from "../../Components/VideoCard/VideoCard";
import {instance} from "../../Api/intence";


const Home = () => {

    const [videoData, setVideoData] = useState([])

  useEffect(() => {
    instance.get("/trending?type=C%20g%2C%20n%2C%20mo&hl=en&gl=US")
      .then(response => setVideoData(response.data.contents))
  }, []);

    return (
        <div>
            <Header />

            <div className="mainBody">
                <Sidebar />
                <div class="videos">
                    <div class="videos__container">
                        {
                            videoData.map(item => {
                                return <VideoCard items={item.video} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
