import {Page} from "../Page";
import {Container} from "react-bootstrap";
import {RegisterForm} from "./RegisterForm/RegisterForm";

export function RegisterPage() {
    return (
        <Page>
            <Container fluid="xs" className="my-4">
                <RegisterForm />
            </Container>
        </Page>
    );
}