import {IEditToolbarProps} from "../../../types/elements";
import {Button, TopToolbar} from "react-admin";

export const EditTopToolbar = ({handleClone, spinner}: IEditToolbarProps) => (
    <TopToolbar>
        <Button
            onClick={handleClone}
            disabled={spinner}
            label={spinner ? 'Копирование...' : 'Копировать товар'}
        />
    </TopToolbar>
)
