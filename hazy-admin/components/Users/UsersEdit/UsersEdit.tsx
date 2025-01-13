import {Edit, PasswordInput, required} from 'react-admin';
import {UsersForm} from "../UsersForm/UsersForm";

export const UsersEdit = () => (
    <Edit>
        <UsersForm
            passwordComponent={
            <></>
                // <PasswordInput
                //     source='password'
                //     validate={[required()]}
                //     resettable/>
            }
        />
    </Edit>
)
