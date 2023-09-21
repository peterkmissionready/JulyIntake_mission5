<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import MyDataService from "../services/myData";

const MyDataList = props => {
    const [myData, setMyData] = useState([]);

    useEffect (() => {
        retrieveMyData();
    }, []);

    const retrieveMyData = () => {
        MyDataService.getAll()
            .then(response => {
                console.log(response.data);
                setMyData(response.data.myData);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div className="App">
            {JSON.stringify(myData)}
        </div>
    );
}

=======
import React, {useState, useEffect} from "react";
import MyDataService from "../services/myData";

const MyDataList = props => {
    const [myData, setMyData] = useState([]);

    useEffect (() => {
        retrieveMyData();
    }, []);

    const retrieveMyData = () => {
        MyDataService.getAll()
            .then(response => {
                console.log(response.data);
                setMyData(response.data.myData);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div className="App">
            {JSON.stringify(myData)}
        </div>
    );
}

>>>>>>> 7559f16 (Test pushing works on my end.)
export default MyDataList;