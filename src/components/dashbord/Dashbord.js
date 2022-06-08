import React from 'react';
import {Container, Tab, Tabs} from "react-bootstrap";
import Posts from "./Posts";
import AddPost from "./AddPost";

const Dashbord = () => {
    return (
        <Container>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Posts">
                    <Posts/>
                </Tab>
                <Tab eventKey="profile" title="Add Post">
                   <AddPost/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Dashbord;