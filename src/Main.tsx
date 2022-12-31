import {Container} from "react-bootstrap";
import {Navigation} from "./Navigation/Navigation";
import {Outlet} from "react-router-dom";

export function Main() {
    return (
        <Container fluid className="App">
            <Navigation />
            <Outlet />
        </Container>
    );
}