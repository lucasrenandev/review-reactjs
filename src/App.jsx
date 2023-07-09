import review from "./review"
import { useEffect, useState } from "react"
import './App.css'

export default function App() { 
  let [currentItem] = useState(0)

  const showReview = () => {
    const image = document.getElementById("image")
    const name = document.getElementById("name")
    const description = document.getElementById("description")
    const item = review[currentItem]
    image.src = item.img
    name.textContent = item.name
    description.textContent = item.description 
  }
  useEffect(function() {
    showReview()
  }, [])

  const next = () => {
    currentItem++
    if(currentItem > review.length - 1) {
      currentItem = 0
    }
    showReview()
  }

  const previous = () => {
    currentItem--
    if(currentItem < 0) {
      currentItem = review.length - 1
    }
    showReview()
  }

  return (
    <>
      <section className='container'>
        <main className="review-app">
          <div className="left-arrow" onClick={previous}>
            <i className="bi bi-arrow-left-circle"></i>
          </div>
          <h2>Review</h2>
          <figure>
            <img src="" id="image" alt="Image 1" />
          </figure>
          <h3 id="name"></h3>
          <p id="description"></p>
          <div className="right-arrow" onClick={next}>
            <i className="bi bi-arrow-right-circle"></i>
          </div>
        </main>
      </section>
    </>
  )
}
