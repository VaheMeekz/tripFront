import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store/actions/postAction";
import {makeArray} from "../../utils/makeArray/makeArray";
import {Button, Card, Container} from "react-bootstrap";
import css from "./post.module.css"
import {logDOM} from "@testing-library/react";
import {useNavigate} from "react-router-dom";
const Posts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const limit = 18;
    const posts = useSelector(state => state.postReducer.posts)
    const count = useSelector(state => state.postReducer.count)
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState([]);
    useEffect(() => {
        dispatch(getAllPosts(page, limit))
    }, [page, limit]);

    useEffect(() => {
        if (count) {
            setPages(makeArray(Math.ceil(count / limit)));
        }
    }, [count, limit]);

    console.log(posts,"+++++")
    return (
        <Container className={css.box}>
            <h2>Առաջիկա արշավներ</h2>
            <div className={css.tripBox}>
                {
                    posts !== null && posts?.map(i=>{
                        return (
                            <Card className={css.card} key={i.id}>
                                <Card.Img variant="top" src={i.PostImages[0].image} className={css.cardImage}/>
                                <Card.Body style={{
                                    position:"relative"
                                }}>
                                    <Card.Title>{i.title}</Card.Title>
                                    <Card.Text>
                                        {i.description.length > 150 ? `${i.description.substr(0,150)}...` : i.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {i.additions.length > 150 ? `${i.additions.substr(0,150)}...` : i.additions}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>navigate(`/trip/${i.id}`)} className={css.btn}>Տեսնել ավելին</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                <div className={css.pagBox}>


                    {pages.length > 1 && pages.map((s) => {
                        return (<div
                            className={page === s ? css.ActivePagItem : css.pagItem}
                            key={s}
                            onClick={() => {
                                setPage(s);
                            }}
                            style={{
                                cursor: "pointer"
                            }}
                        >
                            {s + 1}
                        </div>);
                    })}
                </div>
            </div>
        </Container>
    );
};

export default Posts;