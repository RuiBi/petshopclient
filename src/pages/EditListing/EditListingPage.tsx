import {Container} from "react-bootstrap";
import {ListingForm} from "../../components/ListingForm/ListingForm";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPetListing} from "../../api/ListingsApi";
import {Listing} from "../../models/Listing";
import {Page} from "../Page";

export function EditListingPage() {
    const { id } = useParams();
    const [listing, setListing] = useState<Listing>();

    useEffect(() => {
        if (!id) return;

        getPetListing(id).then(listing => {
            setListing(listing);
        });
    }, [id, setListing]);

    return (
        <Page title="Edit your listing">
            <ListingForm initialListing={listing} />
        </Page>
    );
}