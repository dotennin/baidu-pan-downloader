import React from 'react'

const PcManLoader: React.FC = () => {
  return (
    <div
      css={`
        font-family: Untitled Sans, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        color: #000;
        box-sizing: border-box;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 25%;
        max-width: 25%;
        height: 200px;
        align-items: center;
        justify-content: center;
        @keyframes rotate_pacman_half_up {
          0%,
          100% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
          }

          50% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes rotate_pacman_half_down {
          0%,
          100% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }

          50% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
        }

        @keyframes pacman-balls {
          75% {
            opacity: 0.7;
          }

          100% {
            -webkit-transform: translate(-100px, -6.25px);
            transform: translate(-100px, -6.25px);
          }
        }
      `}
    >
      <div
        css={`
          position: relative;
        `}
      >
        <div
          css={`
            width: 0;
            height: 0;
            border-right: 25px solid transparent;
            border-top: 25px solid #000;
            border-left: 25px solid #000;
            border-bottom: 25px solid #000;
            border-radius: 25px;
            position: relative;
            left: -30px;
            animation: rotate_pacman_half_up 0.5s 0s infinite;
          `}
        />
        <div
          css={`
            width: 0;
            height: 0;
            border-right: 25px solid transparent;
            border-top: 25px solid #000;
            border-left: 25px solid #000;
            border-bottom: 25px solid #000;
            border-radius: 25px;
            position: relative;
            left: -30px;
            animation: rotate_pacman_half_down 0.5s 0s infinite;
            margin-top: -50px;
          `}
        />
        <div
          css={`
            animation: pacman-balls 1s -0.66s infinite linear;
            background-color: #000;
            border-radius: 100%;
            margin: 2px;
            width: 10px;
            height: 10px;
            position: absolute;
            transform: translate(0, -6.25px);
            top: 25px;
            left: 70px;
          `}
        />
        <div
          css={`
            animation: pacman-balls 1s -0.33s infinite linear;
            background-color: #000;
            border-radius: 100%;
            margin: 2px;
            width: 10px;
            height: 10px;
            position: absolute;
            transform: translate(0, -6.25px);
            top: 25px;
            left: 70px;
          `}
        />
        <div
          css={`
            animation: pacman-balls 1s 0s infinite linear;
            background-color: #000;
            border-radius: 100%;
            margin: 2px;
            width: 10px;
            height: 10px;
            position: absolute;
            transform: translate(0, -6.25px);
            top: 25px;
            left: 70px;
          `}
        />
      </div>
    </div>
  )
}

export { PcManLoader }
