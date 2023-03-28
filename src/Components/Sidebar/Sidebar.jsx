import React from 'react';
import {LinkSidebar} from "../../Utils/Components";
import "./Sidebar.scss";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__categories">
                <LinkSidebar linkIcon="home" text="Home" link=""/>
                <LinkSidebar linkIcon="local_fire_department" text="Trending" link="trending"/>

                <LinkSidebar linkIcon="subscriptions" text="Subcriptions" link="subscriptions"/>
            </div>
            <hr />
            <div className="sidebar__categories">

                <LinkSidebar linkIcon="history" text="History" link="history"/>

                <LinkSidebar linkIcon="play_arrow" text="Your Videos" link="your-videos" />

                <LinkSidebar linkIcon="watch_later" text="Watch Later" link="watch-later" />

                <LinkSidebar linkIcon="thumb_up" text="Liked Videos" link="like" />

            </div>
            <hr />
        </div>
    );
}

export default Sidebar;
