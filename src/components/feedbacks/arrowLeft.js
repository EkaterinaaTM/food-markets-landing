import React from "react"

const ArrowLeft = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-left prev"
  >
    <rect
      x="50"
      y="50"
      width="50"
      height="50"
      rx="5"
      transform="rotate(-180 50 50)"
      fill="#747474"
    />
    <path
      d="M29 33L21 24.9998L29 17"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default ArrowLeft
