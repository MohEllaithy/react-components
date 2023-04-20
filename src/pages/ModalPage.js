import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage(){

    const [showModal, setShowModal] = useState(false);
    const clickHandler = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const actionBar= <Button onClick={handleClose} primary>I Agree</Button>;
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept!</p>
    </Modal>;

    return(
        <div>
            <Button onClick={clickHandler} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    );
};

export default ModalPage;