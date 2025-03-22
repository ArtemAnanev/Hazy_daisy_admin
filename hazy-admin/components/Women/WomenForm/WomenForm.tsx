import {
    CheckboxGroupInput,
    ImageField,
    ImageInput,
    NumberInput,
    required,
    SelectInput,
    TabbedForm,
    TextInput
} from "react-admin";
import {IBaseFormProps} from "../../../types/goods";

export const WomenForm = ({type, handleSelectType, maxImagesCount}: IBaseFormProps) => (
    <TabbedForm>
        <TabbedForm.Tab label='Основная информация'>
            <div className="block">

            </div>
        </TabbedForm.Tab>
        <TabbedForm.Tab label='Характеристики'>

        </TabbedForm.Tab>
    </TabbedForm>
)
