import {Listing} from "../../models/Listing";
import {Alert, Button, Card, Image} from "react-bootstrap";
import React, {useState} from "react";
import {removePetListing} from "../../api/ListingsApi";
import {useNavigate} from "react-router-dom";

interface ListingDetailsProps {
    listing: Listing;
}

export function ListingDetails({ listing }: ListingDetailsProps) {
    const navigate = useNavigate();
    const [deleteFailed, setDeleteFailed] = useState(false);

    const editListing = () => {
        navigate(`/editListing/${listing.id}`);
    };

    const removeListing = () => {
        removePetListing(listing.id)
            .then(() => navigate('/manageListings'))
            .catch(() => setDeleteFailed(true));
    };

    return (
        <div>
            <Alert
                variant="danger"
                show={deleteFailed}
                dismissible={true}
                onClose={() => setDeleteFailed(false)}
            >
                <Alert.Heading>Delete failed</Alert.Heading>
                <p>An error has occurred while trying to delete your listing.</p>
            </Alert>

            <Card >
                <Card.Header>
                    <Card.Title as="h2" className="h4">
                        {listing.title}
                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    <Card.Subtitle as="h3" className="h5">
                        {listing.type}
                    </Card.Subtitle>
                    <Card.Text>
                        <p>
                            <strong>Description: </strong>
                            {listing.description}
                        </p>
                        <div>
                            <a href={listing.imageUrl} target="_blank">
                                <Image thumbnail={true} src={listing.imageUrl} />
                            </a>
                        </div>
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Button variant="info" onClick={editListing}>Edit</Button>
                    <Button variant="danger" onClick={removeListing}>Delete</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}