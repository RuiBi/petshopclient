import React, {useEffect, useState} from "react";
import {Listing} from "../../models/Listing";
import {getPetListings} from "../../api/ListingsApi";
import {PetListings} from "../../components/PetListings/PetListings";
import {Page} from "../Page";

export function ManageListingsPage() {
    return (
        <Page title="Mange your listings">
            <PetListings manageMode={true} />
        </Page>
    );
}