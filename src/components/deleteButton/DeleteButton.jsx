import { createPortal } from "react-dom"
import './DeleteButton.css'

//showBtn = selectedRecipes.size > 0 ? true : false и onClick = handleDeleteClick
const DeleteButton = ({ showBtn, onClick }) => {
  const deleteButton = (
    <button
      id='delete-button'
      className={showBtn ? 'show' : ''}
      onClick={onClick} 
    >
      Delete
    </button>
  )

  return createPortal(deleteButton, document.body)
}

export default DeleteButton