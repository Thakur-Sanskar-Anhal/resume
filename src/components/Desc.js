import React from 'react'

function desc() {
  return (
    <>
      {/* <!-- description --> */}
      <div className="description flex">
            <div className="desc-item">
                <i className="fa-solid fa-envelope"></i>
                <a rel="noreferrer" href="mailto: thakursanskaranhal@gmail.com" target="_blank">thakursanskaranhal@gmail.com</a>
            </div>
            <div className="desc-item">
                <i class="fa-brands fa-linkedin"></i>
                <a rel="noreferrer" href="https://www.linkedin.com/in/sanskar-anhal-693111206" target="_blank">LinkedIn</a>
            </div>
            <div className="desc-item">
                <i class="fa-brands fa-square-github"></i>
                <a rel="noreferrer" href="https://github.com/Thakur-Sanskar-Anhal" target="_blank">Github</a>
            </div>
            <div className="desc-item">
                <i className="fa-solid fa-phone"></i>
                8586873826
            </div>
            <div className="desc-item">
                <i className="fa-solid fa-location-dot"></i>
                Delhi,India
            </div>
            <div className="desc-item">
                <i className="fa-solid fa-briefcase"></i>
                Student
            </div>
        </div>
    </>
  )
}

export default desc
