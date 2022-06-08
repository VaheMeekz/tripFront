import React, {useState} from 'react';
import css from "./post.module.css"
import {Button} from "react-bootstrap";
import axios from "axios";
import {useDispatch} from "react-redux";
import {createPostAC} from "../../store/actions/postAction";

const AddPost = () => {
        const dispatch = useDispatch()
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [addition, setAddition] = useState("")
        const [datee, setDate] = useState("")
        const [images, setImages] = useState([])

        const handleFile = (e) => {
            let files = [];
            Object.keys(e.target.files).map((f) => {
                if (f === "Length") return;
                files.push(e.target.files[0]);
            });
            uploadImage(files);
        };

        let arrOfImages = [];
        const uploadImage = (files) => {
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", "armcodingImage");
            formData.append("cloud_name", "armcoding");
            axios
                .post(`https://api.cloudinary.com/v1_1/armcoding/image/upload`, formData)
                .then((res) => {
                    arrOfImages.push(res.data.url);
                    setImages([...images, res.data.url]);
                });
        };

        // const filterImage = (index) => {
        //     images.filter(i=>{
        //         i[index] !== index
        //     })
        // }

        const handlerAdd = () => {
            if ((title || description || addition || datee) !== "" && images.length !== 0) {
                dispatch(createPostAC({
                    title, description, date: datee, additions: addition, images: images.toString()
                }))
            }
        }
        return (
            <div className={css.box}>
                <h2>Add New Post</h2>
                <div>
                    <div className={css.inputBox}>
                        <p>Վեռնագիր</p>
                        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className={css.inputBox}>
                        <p>Նկարագրություն</p>
                        <textarea placeholder="Description" rows="4" cols="50" value={description}
                                  onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className={css.inputBox}>
                        <p>Ինֆո</p>
                        <textarea placeholder="Additions" rows="4" cols="50" value={addition}
                                  onChange={e => setAddition(e.target.value)}/>
                    </div>
                    <div className={css.inputBox}>
                        <p>Երբ է լինելու իվենթը</p>
                        <input type="text" placeholder="Date" value={datee} onChange={e => setDate(e.target.value)}/>
                    </div>
                    <div className={css.inputBox}>
                        <p>Նկարներ</p>
                        <Button component="label">
                            Upload
                            <input id="file-input" type="file" onChange={handleFile}/>
                        </Button>
                        <div className={css.pagBox}>
                            {
                                images.length !== 0 ? (
                                    images.map((img, index) => {
                                        return (<div  key={index}>
                                            <img src={img} alt="image" className={css.uploadedImage}/>
                                            {/*<Button onClick={()=>filterImage(index)}>del</Button>*/}
                                        </div>)
                                    })
                                ) : null
                            }
                        </div>
                    </div>
                    <div className={css.inputBox}>
                        <Button onClick={handlerAdd} className={css.btn}>Ավելացնել</Button>
                    </div>
                </div>
            </div>
        );
    }
;

export default AddPost;