import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import css from "./detail.module.css"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSinglePost} from "../../store/actions/postAction";
const Detail = () => {
    let { id } = useParams();
    const dispatch = useDispatch()
    const post = useSelector(state => state.postReducer.post)
    const loading = useSelector(state => state.postReducer.loading)
    const [thisImage,setThisImage] = useState(null)
    useEffect(()=>{
        dispatch(getSinglePost(id))
    },[])
    console.log(post,"...")
    return (
        <Container className={css.box}>
            <div className={css.imageBox}>
                <div>
                    {!loading && post!==null && thisImage ==null ? <img src={post?.PostImages[0].image} alt="image" className={css.thisImage}/> :
                        <img src={thisImage} alt="image" className={css.thisImage}/>}
                </div>
                <div className={css.secondsBox}>

                </div>
                <div>
                    {!loading && post!==null ? post?.PostImages?.map(i => {
                        return <img src={i.image} alt="image" className={css.seconds} onClick={()=>setThisImage(i.image)}/>
                    }) : null}
                </div>
            </div>
            <div  className={css.infoBox}>
                <h2>{post?.title}</h2>
                <h6>{post?.date}</h6>
                <div>
                    <p>{post?.description}</p>
                </div>
                <div>
                    <p>{post?.additions}</p>
                </div>
                <div>
                    <Button><a href="tel:+37494747264" className={css.btn}>Գրանցվել</a></Button>
                </div>
            </div>
        </Container>
    );
};

export default Detail;