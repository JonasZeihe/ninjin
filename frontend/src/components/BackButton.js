import {useHistory} from "react-router-dom";
import {ChevronLeft} from "react-feather";

export default function BackButton() {
        let history = useHistory()
        return (
            <>
                <ChevronLeft size={30} color="black" onClick={() => history.goBack()}>
                    Back
                </ChevronLeft>
            </>
        )
    }




