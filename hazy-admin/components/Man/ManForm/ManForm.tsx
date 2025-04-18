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
import {CLOTHES_TYPES} from "../../../constants/goodsTypes";

export const ManForm = ({type, handleSelectType, maxImagesCount}: IBaseFormProps) => (
    <TabbedForm>
        <TabbedForm.Tab label='Основная информация'>
            <div className="block">
                <SelectInput
                    className="block-select"
                    choices={CLOTHES_TYPES}
                    source='type'
                    validate={[required()]}
                    onChange={handleSelectType}
                    optionValue='name'
                />
                <NumberInput
                    min={0}
                    className="block-select"
                    source='цена'
                    validate={[required()]}
                />
                <TextInput
                    className="block-select"
                    source='Наименование'
                    validate={[required()]}
                    resettable
                />
                <NumberInput
                    min={0}
                    className="block-select"
                    source='В наличии'
                    validate={[required()]}
                />
                <TextInput
                    source='description'
                    validate={[required()]}
                    multiline
                    resettable
                />

            </div>
        </TabbedForm.Tab>
        <TabbedForm.Tab label='Характеристики'>

        </TabbedForm.Tab>
    </TabbedForm>
)
