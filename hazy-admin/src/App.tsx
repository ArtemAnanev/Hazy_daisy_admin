import {Admin, defaultTheme, Resource,} from "react-admin";
import {authProvider} from "./authProvider";
import dataProvider from "./dataProvider";
import {
    ACCESSORIES_SOURCE_NAME,
    CLOTHES_SOURCE_NAME, KIDS_SOURCE_NAME,
    MAN_SOURCE_NAME,
    USERS_SOURCE_NAME, WOMEN_SOURCE_NAME
} from "../constants/sourceNames";
import {UsersList} from "../components/Users/UsersList/UsersList";
import {UsersShow} from "../components/Users/UsersShow/UsersShow";
import {UsersCreate} from "../components/Users/UsersCreate/UsersCreate";
import {UsersEdit} from "../components/Users/UsersEdit/UsersEdit";
import {GoodsList} from "../components/GoodsList/GoodsList";
import {ClothesCreate} from "../components/Clothes/ClothesCreate/ClothesCreate";
import {ProductShow} from "../components/ProductShow/ProductShow";
import {ClothesEdit} from "../components/Clothes/ClothesEdit/ClothesEdit";
import {AccessoryCreate} from "../components/Accessory/AccessoryCreate/AccessoryCreate";
import {AccessoryEdit} from "../components/Accessory/AccessoryEdit/AccessoryEdit";
import {ManCreate} from "../components/Man/ManCreate/ManCreate";
import {ManEdit} from "../components/Man/ManEdit/ManEdit";
import {WomenCreate} from "../components/Women/WomenCreate/WomenCreate";
import {WomenEdit} from "../components/Women/WomenEdit/WomenEdit";
import {KidsCreate} from "../components/Kids/KidsCreate/KidsCreate";
import {KidsEdit} from "../components/Kids/KidsEdit/KidsEdit";

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
        <Resource
            name={ACCESSORIES_SOURCE_NAME}
            list={GoodsList}
            create={AccessoryCreate}
            show={ProductShow}
            edit={AccessoryEdit}
        />
        <Resource
            name={MAN_SOURCE_NAME}
            list={GoodsList}
            create={ManCreate}
            show={ProductShow}
            edit={ManEdit}
        />
        <Resource
            name={WOMEN_SOURCE_NAME}
            list={GoodsList}
            create={WomenCreate}
            show={ProductShow}
            edit={WomenEdit}
        />
        <Resource
            name={KIDS_SOURCE_NAME}
            list={GoodsList}
            create={KidsCreate}
            show={ProductShow}
            edit={KidsEdit}
        />
    </Admin>
);
