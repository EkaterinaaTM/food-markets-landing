import React from "react"

const Container = ({ children, background }) => (
  <div className="container" style={{ background: background }}>
    {children}
  </div>
)

export default Container
