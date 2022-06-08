import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutAc} from "../../store/actions/authAction";
import logo from "../../utils/images/852.png"
const Navigation = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.isAuthReducer.isAuth)
    return (
        <div>
            {
                isAuth ? ( <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand>
                        <span onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" style={{
                            width:"150px",
                            height:"50px"
                        }}/>
                        </span>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={()=>dispatch(logoutAc())}>Դուրս գալ</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>) : ( <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand>
                        <span onClick={() => navigate('/')}>
                         <img src={logo} alt="logo" style={{
                             width:"150px",
                             height:"50px"
                         }}/>
                        </span>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/')}>Արշավներ</Nav.Link>
                            <Nav.Link onClick={() => navigate('/about-us')}>Մեր Մասին</Nav.Link>
                            <Nav.Link onClick={() => navigate('/login')}>Մուտք</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>)
            }
        </div>
    );
};

export default Navigation;