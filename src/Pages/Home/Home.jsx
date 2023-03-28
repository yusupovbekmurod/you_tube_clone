import React, { useState, useEffect } from 'react';
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoCard from "../../Components/VideoCard/VideoCard";
import {instance} from "../../Api/intence";
import { useGlobalContext } from '../../Context/context';


const Home = () => {
     const {data} = useGlobalContext();
     


    return (
        <div>
            <Header />

            <div className="mainBody">
                <Sidebar />
                <div class="videos">
                    <div class="videos__container">
                        {
                            data.map(item => {
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
