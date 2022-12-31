import {ListingDetails} from "../../components/ListingDetails/ListingDetails";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Listing} from "../../models/Listing";
import {getPetListing} from "../../api/ListingsApi";
import {Container} from "react-bootstrap";
import {Page} from "../Page";

export function ViewListingPage() {
    const { id } = useParams();
    const [listing, setListing] = useState<Listing>();

    useEffect(() => {
        if (!id) return;

        getPetListing(id).then(listing => {
            setListing(listing);
        });
    }, [id, setListing]);

    return (
        <Page title="Listing details">
            {listing && <ListingDetails listing={listing} />}
        </Page>
    );
}