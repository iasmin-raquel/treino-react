import React from "react";

export default function Relogio() {
  return(
    <p style={{fontSize:'7rem'}}>
      {new Date().toLocaleTimeString()}
    </p>
  )
}