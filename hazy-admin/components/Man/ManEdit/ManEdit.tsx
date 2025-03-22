import {Edit} from "react-admin";
import {useGoodsEdition} from "../../../hooks/useGoodsEdition";
import {CLOTHES_SOURCE_NAME} from "../../../constants/sourceNames";
import {EditTopToolbar} from "../../elements/EditTopToolbar/EditTopToolbar";
import {ManForm} from "../ManForm/ManForm";

export const ManEdit = () => {
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
            <ManForm
                type={type}
                handleSelectType={handleSelectType}
                maxImagesCount={maxImagesCount}
            />
        </Edit>
    )
}
