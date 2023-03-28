import React, {useEffect} from 'react';
import { searchInstance } from "../../Api/intence";

const Search = () => {

    useEffect(() => {
        searchInstance.get("search?q=Baby&part=snippet%2Cid&regionCode=US&maxResults=50&order=date")
            .then(response => console.log(response.data.items))
    }, []);

    return (
        <div>
            <h1>Search</h1>
        </div>
    );
}

export default Search;
