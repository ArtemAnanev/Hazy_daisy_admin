// @ts-ignore
import React from "react";

import {ImageField, ImageInput, SimpleForm} from 'react-admin';
import {allowedImageExtension} from "../../../utils/validation";

export const UsersForm = () => (
    <SimpleForm>
        <ImageInput
            maxSize={3000000}
            label='Avatar'
            source='image'
            validate={[allowedImageExtension()]}>
            <>
                <ImageField source='url' title='desc'/>
                <ImageField source='src' title='title'/>
            </>
        </ImageInput>
    </SimpleForm>
)


