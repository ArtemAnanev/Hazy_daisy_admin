import React from "react";
import {Show, SimpleShowLayout, TextField, DeleteButton, ImageField, TopToolbar} from 'react-admin'

export const UsersShow = () => (
    <Show actions={<TopToolbar><DeleteButton /></TopToolbar>}>
        <SimpleShowLayout>
            <ImageField source='image.url' title='image.desc' />
            <TextField source='name' />
            <TextField source='email' />
            <TextField source='role' />
        </SimpleShowLayout>
    </Show>
)
