import {useGoodsCreation} from "../../../hooks/useGoodsCreation";
import {CLOTHES_TYPES} from "../../../constants/goodsTypes";
import {Create} from "react-admin";
import {KidsForm} from "../KidsForm/KidsForm";

export const KidsCreate = () => {
    const {type, handleSelectType, maxImagesCount} = useGoodsCreation(CLOTHES_TYPES)

    return (
        <Create>
            <KidsForm
                type={type}
                handleSelectType={handleSelectType}
                maxImagesCount={maxImagesCount}
            />
        </Create>
    )
}
