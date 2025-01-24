import {Edit} from "react-admin";
import {ClothesForm} from "../ClothesForm/ClothesForm";
import {useGoodsEdition} from "../../../hooks/useGoodsEdition";
import {CLOTHES_SOURCE_NAME} from "../../../constants/sourceNames";
import {EditTopToolbar} from "../../elements/EditTopToolbar/EditTopToolbar";

export const ClothesEdit = () => {
    const {
        type,
        handleSelectType,
        maxImagesCount,
        handleClone,
        cloneProductSpinner
    } = useGoodsEdition(CLOTHES_SOURCE_NAME)

    return (
        <Edit
            actions={
                <EditTopToolbar
                    handleClone={handleClone}
                    spinner={cloneProductSpinner}
                />
            }
        >
            <ClothesForm
                type={type}
                handleSelectType={handleSelectType}
                maxImagesCount={maxImagesCount}
            />
        </Edit>
    )
}
