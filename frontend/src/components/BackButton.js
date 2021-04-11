import {useHistory} from "react-router-dom";
import {MobileItem} from "./GlobalStyle";

export default function BackButton() {
        let history = useHistory()
        return (
            <>
                <MobileItem onClick={() => history.goBack()}>
                    Back
                </MobileItem>
            </>
        )
    }

