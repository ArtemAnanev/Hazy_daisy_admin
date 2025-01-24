import {Admin, defaultTheme, Resource,} from "react-admin";
import {authProvider} from "./authProvider";
import dataProvider from "./dataProvider";
import {CLOTHES_SOURCE_NAME, USERS_SOURCE_NAME} from "../constants/sourceNames";
import {UsersList} from "../components/Users/UsersList/UsersList";
import {UsersShow} from "../components/Users/UsersShow/UsersShow";
import {UsersCreate} from "../components/Users/UsersCreate/UsersCreate";
import {UsersEdit} from "../components/Users/UsersEdit/UsersEdit";
import {GoodsList} from "../components/GoodsList/GoodsList";
import {ClothesCreate} from "../components/Clothes/ClothesCreate/ClothesCreate";
import {ProductShow} from "../components/ProductShow/ProductShow";
import {ClothesEdit} from "../components/Clothes/ClothesEdit/ClothesEdit";

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
            edit={UsersEdit}
        />
        <Resource
            name={CLOTHES_SOURCE_NAME}
            list={GoodsList}
            create={ClothesCreate}
            show={ProductShow}
            edit={ClothesEdit}
        />
    </Admin>
);
