import {Create} from "react-admin";
import {useGoodsCreation} from "../../../hooks/useGoodsCreation";
import {CLOTHES_TYPES} from "../../../constants/goodsTypes";
import {ClothesForm} from "../ClothesForm/ClothesForm";

export const ClothesCreate = () => {
    const {type, handleSelectType, maxImagesCount} = useGoodsCreation(CLOTHES_TYPES)

    return (
        <Create>
            <ClothesForm
                type={type}
                handleSelectType={handleSelectType}
                maxImagesCount={maxImagesCount}
            />
        </Create>
    )
}
