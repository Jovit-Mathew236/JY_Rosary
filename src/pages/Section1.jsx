import React from 'react'

export default function Section1() {
  return (
    <div className="section1">
      <div className="heading">
        <h1 className="section1-title">Sacred Journey:</h1>
        <h3 className="section1-subtitle">Pray with Mama Mary</h3>
        <p className="section1-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, molestiae! Ratione itaque culpa, eaque laboriosam praesentium eos, expedita animi, tempora quaerat debitis sed odit! Blanditiis vero dolores debitis provident soluta.</p>
      </div>
      <iframe className="video"
         src="https://youtu.be/m77D52rIwVE?si=7wbqRbslHPatUm49">
      </iframe>
      {/* <img className='bg' src="https://img.freepik.com/premium-photo/map-vancouver-with-red-pin-pointing-left_866663-10517.jpg" alt="bg" /> */}
    </div>
  )
}
