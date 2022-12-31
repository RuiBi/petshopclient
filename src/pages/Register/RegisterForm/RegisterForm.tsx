import {Button, Card, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {createPetListing} from "../../../api/ListingsApi";
import {register} from "../../../api/UserApi";

interface UserData {
    username: string;
    password: string;
    email?: string;
    isAdmin: false;
}

type HTMLFormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export function RegisterForm() {
    const navigate = useNavigate();
    const [rListing, setRegister] = useState<UserData>({});
    const [errors, setErrors] = useState<Set<string>>(new Set());
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    const onChange = (property: string, { target }: ChangeEvent<HTMLFormElement>) => {
        setRegister({ ...rListing, [property]: target.value });

        setErrors(errors => {
            target.value ? errors.delete(property) : errors.add(property);
            return errors;
        });
    }

    const onUsernameChange = (evt: ChangeEvent<HTMLInputElement>) => onChange('username', evt);

    const onPasswordChange = (evt: ChangeEvent<HTMLSelectElement>) => onChange('password', evt);

    const onEmailChange = (evt: ChangeEvent<HTMLTextAreaElement>) => onChange('email', evt);

    const validate = (): boolean => {
        const newErrors = new Set(['username', 'password', 'email'].filter(field => {
            return !rListing[field as keyof UserData]
        }));

        setErrors(newErrors);
        return !newErrors.size;
    }
    const onSubmit = () => {
        if (validate()) {
            setSuccess(false);
            setFailed(false);
        }
    }

    const createUserData = () => {
        register(rListing)
            .then(res => {
                setSuccess(true);
            })
            .catch(err => {
                console.warn('Error has occurred', err);
                setFailed(true);
            })
    }

        return (
        <Card>
            <Card.Header>Register</Card.Header>

            <Card.Body>
                <Form >
                    <Form.Group className="mb-2">
                        <Form.Label>
                            Username
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={rListing.username}
                            onChange={onUsernameChange}
                            placeholder="Username"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password" placeholder="Password"
                            value={rListing.password}
                            onChange={onPasswordChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={rListing.email}
                            onChange={onEmailChange}
                            placeholder="Email"
                        />
                    </Form.Group>
                </Form>
            </Card.Body>

            <Card.Footer>
                <Button variant="primary"onClick={onSubmit}>
                    Register
                </Button>
            </Card.Footer>
        </Card>
    );
}