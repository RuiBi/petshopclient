import {Alert, Button, Dropdown, Form} from "react-bootstrap";
import {ChangeEvent, useEffect, useState} from "react";
import {createPetListing, updateListing} from "../../api/ListingsApi";
import {Listing} from "../../models/Listing";
import {useNavigate} from "react-router-dom";

interface ListingFormData {
    title?: string;
    type?: string;
    imageUrl?: string;
    description?: string;
}

type HTMLFormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface ListingFormProps {
    initialListing?: Listing;
}

export function ListingForm({ initialListing }: ListingFormProps) {
    const navigate = useNavigate();
    const [listing, setListing] = useState<ListingFormData>({});
    const [errors, setErrors] = useState<Set<string>>(new Set());
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    const action = initialListing ? 'updated' : 'created';

    const onChange = (property: string, { target }: ChangeEvent<HTMLFormElement>) => {
        setListing({ ...listing, [property]: target.value });

        setErrors(errors => {
           target.value ? errors.delete(property) : errors.add(property);
           return errors;
        });
    }

    const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => onChange('title', evt);

    const onTypeChange = (evt: ChangeEvent<HTMLSelectElement>) => onChange('type', evt);

    const onImageUrlChange = (evt: ChangeEvent<HTMLInputElement>) => onChange('imageUrl', evt);

    const onDescriptionChange = (evt: ChangeEvent<HTMLTextAreaElement>) => onChange('description', evt);

    const validate = (): boolean => {
        const newErrors = new Set(['title', 'imageUrl', 'type', 'description'].filter(field => {
            return !listing[field as keyof ListingFormData]
        }));

        setErrors(newErrors);
        return !newErrors.size;
    }

    const createListing = () => {
        createPetListing(listing)
            .then(res => {
                setSuccess(true);
            })
            .catch(err => {
                console.warn('Error has occurred', err);
                setFailed(true);
            })
    }

    const saveListing = () => {
        updateListing(initialListing!.id, listing)
            .then(() => navigate(`/listingDetails/${initialListing!.id}`))
            .catch(err => {
                console.warn('Error has occurred', err);
                setFailed(true);
            })
    }

    const onSubmit = () => {
        if (validate()) {
            setSuccess(false);
            setFailed(false);

            initialListing ? saveListing() : createListing();
        }
    }

    useEffect(() => {
        if (!initialListing) return;

        setListing(['title', 'imageUrl', 'type', 'description'].reduce((result, field) => ({
            ...result, [field]: initialListing[field as keyof Listing]
        }), {}));
    }, [initialListing, setListing]);

    return (
        <Form>
            <Alert
                variant="danger"
                show={failed}
                dismissible={true}
                onClose={() => setFailed(false)}
            >
                <Alert.Heading>Failed to {action} listing</Alert.Heading>
                <p>An error has occurred while trying to {action} your listing</p>
            </Alert>

            <Alert
                variant="success"
                show={success}
                onClose={() => setSuccess(false)}
                dismissible={true}
            >
                <Alert.Heading>Listing {action}</Alert.Heading>
                <p>Your listing has been {action} successfully</p>
            </Alert>

            <Form.Group className="mb-2">
                <Form.Label>
                    Title
                </Form.Label>
                <Form.Control
                    type="text"
                    value={listing.title}
                    onChange={onTitleChange}
                    isInvalid={errors.has('title')}
                    placeholder="My cat"
                />
                <Form.Text>Title for your pet listing</Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>
                    Type
                </Form.Label>
                <Form.Select
                    value={listing.type}
                    onChange={onTypeChange}
                    isInvalid={errors.has('type')}
                    aria-label="Select type of pet being listed"
                >
                    <option value={''}>Please select type of pet</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Bird">Bird</option>
                    <option value="Hamster">Hamster</option>
                </Form.Select>
                <Form.Text>Select type of pet being listed.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>
                    Image
                </Form.Label>
                <Form.Control
                    type="text"
                    value={listing.imageUrl}
                    onChange={onImageUrlChange}
                    isInvalid={errors.has('imageUrl')}
                    placeholder="http://example.com/example.jpg"
                />
                <Form.Text>Url of image to use for your listing.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>
                    Description
                </Form.Label>
                <Form.Control
                    type="text"
                    value={listing.description}
                    onChange={onDescriptionChange}
                    isInvalid={errors.has('description')}
                    as="textarea"
                    rows={4}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group className="mx-auto my-3">
                <Button variant="primary" onClick={onSubmit}>{initialListing ? 'Update' : 'Create'}</Button>
            </Form.Group>
        </Form>
    );
}