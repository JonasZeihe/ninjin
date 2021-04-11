import {useHistory} from "react-router-dom";

export default function BackButton() {
        let history = useHistory()
        return (
            <>
                <section onClick={() => history.goBack()}>
                    Back
                </section>
            </>
        )
    }




