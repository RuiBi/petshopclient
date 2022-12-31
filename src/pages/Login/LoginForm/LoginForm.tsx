import {Button, Card, Form} from "react-bootstrap";

export function LoginForm() {
    return (
        <Card>
            <Card.Header>Log in</Card.Header>

            <Card.Body>
                <Form >

                </Form>
            </Card.Body>

            <Card.Footer>
                <Button variant="primary">
                    Login
                </Button>
            </Card.Footer>
        </Card>
    );
}