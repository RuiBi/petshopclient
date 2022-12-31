import {Button, Card, Form} from "react-bootstrap";

export function LoginForm() {
    return (
        <Card>
            <Card.Header>Log in</Card.Header>

            <Card.Body>
                <Form >
                    <Form.Group className="mb-2">
                        <Form.Label>
                            Username
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
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