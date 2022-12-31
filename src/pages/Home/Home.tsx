import React, {useEffect, useState} from "react";
import {PetListings} from "../../components/PetListings/PetListings";
import {Page} from "../Page";

export function Home() {
    return (
        <Page>
            <PetListings />
        </Page>
    );
}