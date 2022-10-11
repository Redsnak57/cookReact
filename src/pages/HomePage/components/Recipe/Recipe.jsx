import { useContext } from 'react'
import { ApiContext } from '../../../../context/ApiContext'
import styles from './Recipe.module.scss'

export default function Recipe({recipe : {_id, title, image, liked}, toggleLikedRecipe, deleteRecipe}) {

  const BASE_URL_API = useContext(ApiContext);

  async function handleClickLiked(){
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method : 'PATCH',
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          liked : !liked
        })
      })
      if(response.ok){
        const updatedRecipe = await response.json();
        toggleLikedRecipe(updatedRecipe)
      }
    } catch(e){
      console.log("error e");
    } 
  }

  async function handleClickDelete(e){
    e.stopPropagation()
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method : "DELETE",
      })
      if(response.ok){
        deleteRecipe(_id);
      }
    } catch(e){
      console.log("error");
    }
  }


  return (
    <div className={styles.recipe} onClick={handleClickLiked}>
      <i class="fa-solid fa-xmark" onClick={handleClickDelete}></i>
      <div className={styles.imgContainer}>
        <img src={image} alt="recipe" />
      </div>
        <div className={`${styles.title} d-flex flex-column justify-content-center align-items-center`}>
            <h3 className='mb-10'>{title}</h3>
            <i className={`fa-solid fa-heart ${ liked ? "text-primary" : ""}`}></i>
        </div>
    </div>
  )
}
