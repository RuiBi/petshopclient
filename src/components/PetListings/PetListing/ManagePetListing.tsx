import {Button, Card} from "react-bootstrap";
import React from "react";
import {PetListingProps} from "./PetListingProps";
import {removePetListing} from "../../../api/ListingsApi";
import {useNavigate} from "react-router-dom";

interface ManagePetListingProps extends PetListingProps {
    onRefresh: Function
}

export function ManagePetListing({ listing, onRefresh }: ManagePetListingProps) {
    const navigate = useNavigate();

    const viewListing = () => {
        navigate(`/listingDetails/${listing.id}`);
    };

    const editListing = () => {
        navigate(`/editListing/${listing.id}`);
    };

    const removeListing = () => {
        removePetListing(listing.id)
            .then(() => onRefresh());
    };

    return (
        <Card>
            <Card.Img variant="top" src={listing.imageUrl} />
            <Card.Body>
                <Card.Title>
                    {listing.title}
                </Card.Title>
                <Card.Subtitle>
                    {listing.type}
                </Card.Subtitle>
                <Card.Text>
                    {listing.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="secondary" onClick={viewListing}>View</Button>
                <Button variant="info" onClick={editListing}>Edit</Button>
                <Button variant="danger" onClick={removeListing}>Delete</Button>
            </Card.Footer>
        </Card>
    );
}