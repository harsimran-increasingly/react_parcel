import React from 'react'
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Modal() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button type='button' className='inc_product_description_button' onClick={() => openModal()}>Select Option</button>
            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={() => afterOpenModal}
                onRequestClose={() => closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button type='button' onClick={closeModal}>close</button>

            </ReactModal>
        </div>
    )
}

export default Modal