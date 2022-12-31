import {Listing} from "../../../models/Listing";
import {Card} from "react-bootstrap";
import React from "react";
import {PetListingProps} from "./PetListingProps";

export function ViewPetListing({ listing }: PetListingProps) {
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
        </Card>
    );
}