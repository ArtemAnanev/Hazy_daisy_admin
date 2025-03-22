import {useGoodsCreation} from "../../../hooks/useGoodsCreation";
import {CLOTHES_TYPES} from "../../../constants/goodsTypes";
import {Create} from "react-admin";
import {WomenForm} from "../WomenForm/WomenForm";

export const WomenCreate = () => {
    const {type, handleSelectType, maxImagesCount} = useGoodsCreation(CLOTHES_TYPES)

    return (
        <Create>
            <WomenForm
                type={type}
                handleSelectType={handleSelectType}
                maxImagesCount={maxImagesCount}
            />
        </Create>
    )
}
