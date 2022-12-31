import {ListingForm} from "../../components/ListingForm/ListingForm";
import {Container} from "react-bootstrap";
import {Page} from "../Page";

export function CreateListingPage() {
    return (
        <Page title="Add a listing">
            <ListingForm />
        </Page>
    );
}