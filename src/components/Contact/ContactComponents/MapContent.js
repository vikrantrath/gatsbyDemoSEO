import React from "react"

export default function MapContent() {
  return (
    <div
      style={{
        height: "295px",
        width: "100%",
        marginTop: "50px",
        marginBottom: "60px",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.198581561833!2d88.43177931453627!3d22.571674985183257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ae915f5ad7%3A0x2edeab4b32452ec4!2sRegus+Kolkata!5e0!3m2!1sen!2sin!4v1491805940139"
        frameborder="0"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowfullscreen
      ></iframe>
    </div>
  )
}
