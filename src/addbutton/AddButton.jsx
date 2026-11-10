import "./AddButton.css"
import "../components/titlesmodal/TitlesModal.jsx"
import TitlesModal from "../components/titlesmodal/TitlesModal.jsx"
import { useState } from "react"

const AddButton = () => {
    const [showDialog, setShowDialog] = useState(false)

    const showModal = () => {
        setShowDialog(true)
    }

    const hideModal = () => {
        setShowDialog(false)
    }

    return (
        <div>
            <button id="btn-add-title" onClick={showModal}>+</button>
            {showDialog && <TitlesModal
            close={hideModal}
            />}
        </div>
    )
}

export default AddButton;