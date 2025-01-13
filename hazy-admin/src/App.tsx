import {Admin, defaultTheme, Resource,} from "react-admin";
import {authProvider} from "./authProvider";
import dataProvider from "./dataProvider";
import {USERS_SOURCE_NAME} from "../constants/sourceNames";
import {UsersList} from "../components/Users/UsersList/UsersList";
import {UsersShow} from "../components/Users/UsersShow/UsersShow";
import {UsersCreate} from "../components/Users/UsersCreate/UsersCreate";

export const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        theme={{
            ...defaultTheme,
            palette: {
                mode: "dark",
            }
        }}>
        <Resource
            name={USERS_SOURCE_NAME}
            list={UsersList}
            show={UsersShow}
            create={UsersCreate}
        />
    </Admin>
);
