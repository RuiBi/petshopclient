import {Card, Col, Container, Row} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {Listing} from "../../models/Listing";
import {ViewPetListing} from "./PetListing/ViewPetListing";
import {ManagePetListing} from "./PetListing/ManagePetListing";
import {getPetListings} from "../../api/ListingsApi";

interface PetListings {
    manageMode?: boolean;
}
export function PetListings({ manageMode = false }: PetListings) {
    const [listings, setListings] = useState<Listing[]>([]);

    console.log('manageMode', manageMode);

    const refreshListings = useCallback(() => {
        console.log('refresh');
        getPetListings().then(listings => setListings(listings));
    }, [setListings]);

    useEffect(() => {
        refreshListings();
    }, [refreshListings]);

    return (
        <Container fluid="xl" className="gap-1">
            <Row xs={1} md={3} xl={4}>
                {listings.map((listing) => (
                    <Col key={listing.id} className="mb-3">
                        {manageMode ? <ManagePetListing listing={listing} onRefresh={refreshListings} /> : <ViewPetListing listing={listing} />}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}