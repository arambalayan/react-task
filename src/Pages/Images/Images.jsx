import React, {useEffect, useState} from 'react';
import "./Images.scss";
import {useDispatch, useSelector} from "react-redux";
import SlideBar from "../SlideBar/SlideBar";
import {catsAsync} from "../../redux/catsSlice";
import {useParams} from "react-router-dom";

const Images = () => {
    const [catsData, setCatsData] = useState([]);

    const data = useSelector((state) => state.cats.data)

    const dispatch = useDispatch()

    const {id} = useParams();

    let page = 1;

    const loadMore = () => {
        const value = {
            id,
            page: ++page
        }
        dispatch(catsAsync(value))
    }

    useEffect(() => {
        setCatsData([])
    }, [id])

    useEffect(() => {
        setCatsData([...catsData, ...data])
    }, [data])

    return (
        <div className="images">
            <SlideBar/>
            {catsData.length > 0 &&
                <>
                    <div className="pics">
                        <div className="img_block">
                            {
                                catsData.map((item) =>
                                    <div className="img" key={catsData.id}>
                                        <img src={item.url} alt="img"/>
                                    </div>
                                )
                            }
                        </div>
                        <div className="load_more">
                            <button onClick={loadMore}>Load more</button>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Images;