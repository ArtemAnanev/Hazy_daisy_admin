import {Edit} from "react-admin";
import {useGoodsEdition} from "../../../hooks/useGoodsEdition";
import {CLOTHES_SOURCE_NAME} from "../../../constants/sourceNames";
import {EditTopToolbar} from "../../elements/EditTopToolbar/EditTopToolbar";
import {KidsForm} from "../KidsForm/KidsForm";

export const KidsEdit = () => {
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
            <KidsForm
                type={type}
                handleSelectType={handleSelectType}
                maxImagesCount={maxImagesCount}
            />
        </Edit>
    )
}
