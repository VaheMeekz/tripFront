import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePostAc, getAllPosts} from "../../store/actions/postAction";
import {Button, Container, Table} from "react-bootstrap";
import css from "./post.module.css"
import deleteIcon from "../../utils/images/delete.svg"
import {makeArray} from "../../utils/makeArray/makeArray";

const Posts = () => {

    const dispatch = useDispatch()
    const limit = 2;
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


    const deleteItem = (id) => {
        dispatch(deletePostAc(id))
    }

    return (
        <Container className={css.postBox}>
            <h2>Posts</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Additions</th>
                    <th>Date</th>
                    <th>Created</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {posts !== null && (
                    posts?.map((i, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{i.title}</td>
                                <td><img src={
                                    i.PostImages[0]?.image
                                } alt="image" className={css.tableImage}/></td>
                                <td>{i.description}</td>
                                <td>{i.additions}</td>
                                <td>{i.date}</td>
                                <td>{i.updatedAt.substr(0, 10)}</td>
                                <td>
                                    <Button onClick={() => deleteItem(i.id)}>
                                        <img src={deleteIcon} alt="del"/>
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                )}
                </tbody>
            </Table>
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
        </Container>
    );
};

export default Posts;