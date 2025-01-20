import {DataProvider, fetchUtils, HttpError} from 'react-admin';
import {stringify} from 'query-string';
import api from '../api/apiInstance'
import {USERS_SOURCE_NAME} from '../constants/sourceNames';
import {IUser} from "../types/users";
import {getCreatedUser, getImagesFromRawFile, getUpdatedUser} from "../utils/dataProvider";
import {CLIENT_ERROR_CODE} from "../constants/statuseCodes";
import {SIZES_LIST} from "../constants/goods";

const httpClient = fetchUtils.fetchJson

export default {
    getList: async (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const {data} = await api.get(`/admin/${resource}?${stringify(query)}`)
        console.log(data)
        return {
            data: data.items,
            total: data.count,
        };
    },

    getOne: async (resource, params) => {
        const {data} = await api.get(`/admin/one?id=${params.id}&category=${resource}`)
        console.log(data)
        return {
            data,
        };
    },

    getMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ids: params.ids}),
        };
        const url = `/${resource}?${stringify(query)}`;
        const {json} = await httpClient(url);
        return {data: json};
    },

    getManyReference: async (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `/${resource}?${stringify(query)}`;
        const {json, headers} = await httpClient(url);
        return {
            data: json,
            total: 0,
                // parseInt(headers.get('content-range').split('/').pop(), 10),
        };
    },

    create: async (resource, params) => {
        if (resource === USERS_SOURCE_NAME) {
            const user = await getCreatedUser(params.data as IUser)

            if (user.status === CLIENT_ERROR_CODE) {
                return Promise.reject(new HttpError(user.message, CLIENT_ERROR_CODE));
            }

            return {
                data: user.newUser,
            }
        }

        const sizes = {} as { [index: string]: string };
        let newImages = null

        if (params.data.images.every((img: IUser['image']) => img.src)) {
            newImages = await getImagesFromRawFile(params.data.images);
        }

        if (params.data.sizes) {
            SIZES_LIST.forEach(
                (size) => sizes[size] = params.data.sizes.includes(size));
        }

        const {data} = await api.post(`/admin/add-product`, {
            ...params.data,
            category: resource,
            _id: params.data.id,
            sizes,
            images: newImages || params.data.images,
            isNew: !!params.data.isNew?.length,
            isBestseller: !!params.data.isBestseller?.length,

        })
        return {
            data: {
                ...data.newItem,
                sizes: params.data.sizes,
                isNew: params.data.isNew,
                isBestseller: params.data.isBestseller,
            }
        };
    },

    update: async (resource, params) => {
        if (resource === USERS_SOURCE_NAME) {
            const user = await getUpdatedUser(params.data as IUser)

            if (user.status === CLIENT_ERROR_CODE) {
                return Promise.reject(new HttpError(user.message, CLIENT_ERROR_CODE));
            }

            return {
                data: user.updatedUser,
            }
        }

        const url = `/${resource}/${params.id}`;
        const {json} = await httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        })
        return {data: json};
    },

    updateMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        const url = `/${resource}?${stringify(query)}`;
        const {json} = await httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        })
        return {data: json};
    },

    delete: async (resource, params) => {
        const id = params.previousData && params.previousData.id

        const {data} = await api.delete(
            `/admin/delete?id=${id}&category=${resource}`);

        return {
            data
        }
    },


    deleteMany: async (resource, params) => {
        await api.delete(
            `/admin/delete-many?ids=${JSON.stringify(params.ids)}&category=${resource}`
        )

        return {
            data: []
        };
    },
} as DataProvider;
