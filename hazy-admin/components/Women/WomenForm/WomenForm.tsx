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
import {CLOTHES_TYPES, GOODS_IS_BESTSELLER, GOODS_IS_NEW} from "../../../constants/goodsTypes";
import {ADULT_SIZES_LIST, SIZES_LIST} from "../../../constants/goods";
import {TShirtsCharacteristics} from "../../Clothes/TShirtsCharacteristics/TShirtsCharacteristics";
import {LongSleevesCharacteristics} from "../../Clothes/LongSleevesCharacteristics/LongSleevesCharacteristics";
import {HoodieCharacteristics} from "../../Clothes/HoodieCharacteristics/HoodieCharacteristics";
import {OuterwearCharacteristics} from "../../Clothes/OuterwearCharacteristics/OuterwearCharacteristics";

export const WomenForm = ({type, handleSelectType, maxImagesCount}: IBaseFormProps) => (
    <TabbedForm>
        <TabbedForm.Tab label='Основная информация'>
            <div className="block">
                <SelectInput
                    className="block-select"
                    choices={CLOTHES_TYPES}
                    source='type'
                    label='Тип'
                    validate={[required()]}
                    onChange={handleSelectType}
                    optionValue='name'
                />
                <NumberInput
                    min={0}
                    className="block-select"
                    source='price'
                    label='цена'
                    validate={[required()]}
                />
                <TextInput
                    className="block-select"
                    source='name'
                    label='Наименование'
                    validate={[required()]}
                    resettable
                />
                <NumberInput
                    min={0}
                    className="block-select"
                    label='В наличии'
                    source='inStock'
                    validate={[required()]}
                />
                <TextInput
                    source='description'
                    label='Описание'
                    validate={[required()]}
                    multiline
                    resettable
                />
            </div>
             <div className="block-right">
                 <SelectInput
                     source='sizes'
                     label='Размер'
                     choices={ADULT_SIZES_LIST}
                     optionValue='name'
                 />
                 <CheckboxGroupInput
                     source='isBestseller'
                     label='Бестселлер'
                     choices={GOODS_IS_BESTSELLER}
                     optionValue='name'
                 />
                 <CheckboxGroupInput
                     source='isNew'
                     label='Новинка'
                     choices={GOODS_IS_NEW}
                     optionValue='name'
                 />
             </div>
            <ImageInput
                maxSize={3000000}
                label='Картнки товара'
                source='images'
                validate={[ maxImagesCount(), required()]}
                multiple
            >
                <>
                    <ImageField source='url' title='desc' />
                    <ImageField  source='src' title='title'/>
                </>
            </ImageInput>.
        </TabbedForm.Tab>
        <TabbedForm.Tab label='Характеристики'>
            {type === CLOTHES_TYPES[0].name && <TShirtsCharacteristics/>}
            {type === CLOTHES_TYPES[1].name && <LongSleevesCharacteristics/>}
            {type === CLOTHES_TYPES[2].name && <HoodieCharacteristics/>}
            {type === CLOTHES_TYPES[3].name && <OuterwearCharacteristics/>}
        </TabbedForm.Tab>
    </TabbedForm>
)
