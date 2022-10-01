import React, {useEffect, useState} from 'react';
import "./SlideBar.scss";
import {useDispatch, useSelector} from "react-redux";
import {categoriesAsync} from "../../redux/categoriesSlice";
import {NavLink} from "react-router-dom";
import {catsAsync} from "../../redux/catsSlice";
import Loading from "../../helpers/Loading/Loading";

const SlideBar = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const data = useSelector((state) => state.categories.data)

    const dispatch = useDispatch()

    const getCats = (id) => {
        const value = {
            id,
            page: 1
        }
        dispatch(catsAsync(value))
        setOpen(false);
        setLoading(true)
    }

    const openMenu = () => {
        setOpen(!open);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    useEffect(() => {
        dispatch(categoriesAsync())
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [loading])

    return (
        <div className={`${open ? 'slide_bar open_bar' : 'slide_bar'}`}>
            <div className="nav_icon" onClick={openMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={`${open ? 'open nav' : 'nav'}`}>
                <h1 onClick={closeMenu}>x</h1>
                <ul className="lists">
                    {data &&
                        data.map((item) =>
                            <li className="list" key={item.id}>
                                <NavLink to={`/categories/${item.id}`} activeclass="active">
                                    <span onClick={() => getCats(item.id)}>{item.name}</span>
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </nav>
            {loading && <Loading/>}
        </div>
    );
};

export default SlideBar;