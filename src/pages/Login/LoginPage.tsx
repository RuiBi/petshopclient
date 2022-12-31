import {Page} from "../Page";
import {Container} from "react-bootstrap";
import {LoginForm} from "./LoginForm/LoginForm";

export function LoginPage() {
    return (
        <Page>
            <Container fluid="xs" className="my-4">
                <LoginForm />
            </Container>
        </Page>
    );
}