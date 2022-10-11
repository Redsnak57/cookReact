import React from 'react'
import style from "./Loading.module.scss"

export default function Loading() {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center flex-fill'>
        <i class={`fa-solid fa-spinner ${style.spinner}`}></i>
    </div>
  )
}
