"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useFollowPointer } from "../hooks/useFollowPointer"

const CursorFollower = () => {
  const cursorRef = useRef(null)

  const { x, y } = useFollowPointer(cursorRef)

  return (
    <motion.div
      ref={cursorRef}
      className={`custom-cursor z-[199] hidden lg:flex`}
      animate={{ x, y }}
    >
      {/* {cursorType === "btn-hovered" ? (
        <svg
          className="cursor-btn"
          viewBox="0 0 42 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.5L41 15.5M41 15.5C35.7863 15.2754 25.3588 11.8609 25.3588 7.15256e-07M41 15.5C35.7863 15.6498 25.3588 18.9594 25.3588 31"
            stroke="#fff"
            strokeWidth="2"
          ></path>
        </svg>
      ) : null} */}
    </motion.div>
  )
}

export default CursorFollower
