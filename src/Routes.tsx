import {createBrowserRouter} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {CreateListingPage} from "./pages/CreateListing/CreateListingPage";
import {Main} from "./Main";
import {ManageListingsPage} from "./pages/ManageListing/ManageListingsPage";
import {EditListingPage} from "./pages/EditListing/EditListingPage";
import {ViewListingPage} from "./pages/ViewListing/ViewListingPage";
import {LoginPage} from "./pages/Login/LoginPage";
import {RegisterPage} from "./pages/Register/RegisterPage";
import {ProfilePage} from "./pages/Profile/ProfilePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: 'profile',
                element: <ProfilePage />
            },
            {
                path: 'newListing',
                element: <CreateListingPage />
            },
            {
                path: 'manageListings',
                element: <ManageListingsPage />
            },
            {
                path: 'listingDetails/:id',
                element: <ViewListingPage />
            },
            {
                path: 'editListing/:id',
                element: <EditListingPage />
            },
        ]
    },
]);