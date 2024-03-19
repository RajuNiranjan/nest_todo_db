import React from 'react'

const Star = (props:any) => {
  return (
    <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0.5L18.326 9.05731L28 10.438L21 17.0952L22.652 26.5L14 22.0573L5.348 26.5L7 17.0952L0 10.438L9.674 9.05731L14 0.5Z"
                    fill={props.fillColor}
                  />
                </svg>
  )
}

export default Star