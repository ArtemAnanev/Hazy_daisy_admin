import {useGoodsCreation} from "../../../hooks/useGoodsCreation";
import {CLOTHES_TYPES} from "../../../constants/goodsTypes";
import {Create} from "react-admin";
import {ManForm} from "../ManForm/ManForm";

export const ManCreate = () => {
    const {type, handleSelectType, maxImagesCount} = useGoodsCreation(CLOTHES_TYPES)

    return (
        <Create>
            <ManForm
                type={type}
                handleSelectType={handleSelectType}
                maxImagesCount={maxImagesCount}
            />
        </Create>
    )
}
