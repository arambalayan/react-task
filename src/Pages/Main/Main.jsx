import React, {useEffect} from 'react';
import "./Main.scss";
import {useDispatch} from "react-redux";
import {categoriesAsync} from "../../redux/categoriesSlice";
import SlideBar from "../SlideBar/SlideBar";

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoriesAsync())
    }, [])

    return (
        <div className="main">
            <SlideBar/>
            <div className="text">
                <h1>Choose category</h1>
            </div>
        </div>
    );
};

export default Main;