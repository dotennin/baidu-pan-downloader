import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans);
  body {
    padding: 30px 0;
    background-color: #2f3439;
    font-family: "Noto Sans", sans-serif;
  }

  .wrap {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  /* -------------------------------------
   * Bar container
   * ------------------------------------- */
  .progress-radial {
    float: left;
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #2f3439;
    background-color: tomato;
    transition: all 1s ease-out;
    cursor: pointer;
  }
  .progress-radial:hover {
    background: #2e6da4;
  }

  /* -------------------------------------
   * Optional centered circle w/text
   * ------------------------------------- */
  .progress-radial .overlay {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #fffde8;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    line-height: 2rem;
    font-size: 12px;
  }

  /* -------------------------------------
   * Mixin for progress-% class
   * ------------------------------------- */
  .progress-0 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(90deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-1 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(93.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-2 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(97.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-3 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(100.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-4 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(104.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-5 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(108deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-6 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(111.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-7 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(115.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-8 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(118.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-9 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(122.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-10 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(126deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-11 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(129.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-12 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(133.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-13 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(136.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-14 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(140.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-15 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(144deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-16 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(147.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-17 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(151.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-18 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(154.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-19 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(158.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-20 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(162deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-21 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(165.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-22 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(169.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-23 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(172.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-24 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(176.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-25 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(180deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-26 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(183.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-27 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(187.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-28 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(190.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-29 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(194.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-30 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(198deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-31 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(201.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-32 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(205.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-33 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(208.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-34 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(212.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-35 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(216deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-36 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(219.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-37 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(223.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-38 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(226.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-39 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(230.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-40 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(234deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-41 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(237.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-42 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(241.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-43 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(244.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-44 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(248.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-45 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(252deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-46 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(255.6deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-47 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(259.2deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-48 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(262.8deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-49 {
    background-image: linear-gradient(90deg, #2f3439 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(266.4deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-50 {
    background-image: linear-gradient(-90deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-51 {
    background-image: linear-gradient(-86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-52 {
    background-image: linear-gradient(-82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-53 {
    background-image: linear-gradient(-79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-54 {
    background-image: linear-gradient(-75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-55 {
    background-image: linear-gradient(-72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-56 {
    background-image: linear-gradient(-68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-57 {
    background-image: linear-gradient(-64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-58 {
    background-image: linear-gradient(-61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-59 {
    background-image: linear-gradient(-57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-60 {
    background-image: linear-gradient(-54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-61 {
    background-image: linear-gradient(-50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-62 {
    background-image: linear-gradient(-46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-63 {
    background-image: linear-gradient(-43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-64 {
    background-image: linear-gradient(-39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-65 {
    background-image: linear-gradient(-36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-66 {
    background-image: linear-gradient(-32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-67 {
    background-image: linear-gradient(-28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-68 {
    background-image: linear-gradient(-25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-69 {
    background-image: linear-gradient(-21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-70 {
    background-image: linear-gradient(-18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-71 {
    background-image: linear-gradient(-14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-72 {
    background-image: linear-gradient(-10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-73 {
    background-image: linear-gradient(-7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-74 {
    background-image: linear-gradient(-3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-75 {
    background-image: linear-gradient(0deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-76 {
    background-image: linear-gradient(3.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-77 {
    background-image: linear-gradient(7.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-78 {
    background-image: linear-gradient(10.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-79 {
    background-image: linear-gradient(14.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-80 {
    background-image: linear-gradient(18deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-81 {
    background-image: linear-gradient(21.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-82 {
    background-image: linear-gradient(25.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-83 {
    background-image: linear-gradient(28.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-84 {
    background-image: linear-gradient(32.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-85 {
    background-image: linear-gradient(36deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-86 {
    background-image: linear-gradient(39.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-87 {
    background-image: linear-gradient(43.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-88 {
    background-image: linear-gradient(46.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-89 {
    background-image: linear-gradient(50.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-90 {
    background-image: linear-gradient(54deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-91 {
    background-image: linear-gradient(57.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-92 {
    background-image: linear-gradient(61.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-93 {
    background-image: linear-gradient(64.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-94 {
    background-image: linear-gradient(68.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-95 {
    background-image: linear-gradient(72deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-96 {
    background-image: linear-gradient(75.6deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-97 {
    background-image: linear-gradient(79.2deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-98 {
    background-image: linear-gradient(82.8deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-99 {
    background-image: linear-gradient(86.4deg, #ff6347 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }

  .progress-100 {
    background-image: linear-gradient(90deg, #ff6347 52%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(270deg, #ff6347 50%, #2f3439 50%, #2f3439);
  }


  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
  }

  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  table th,
  table td {
    padding: .625em;
    text-align: center;
  }

  table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: .625em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: .8em;
      text-align: right;
    }

    table td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
  /* modal */
  .modal-wrapper {
    z-index: 52;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    display: flex;
    justify-content: center;

    opacity: 0;
    visibility: hidden;
    transition: opacity .3s, visibility .3s;
  }

  .modal-wrapper.open {
    opacity: 1;
    visibility: visible;
    transition: opacity .4s, visibility .4s;
  }

  .modal-wrapper::after {
    display: inline-block;
    height: 100%;
    margin-left: -.05em;
    vertical-align: middle;
    content: ""
  }

  .modal-wrapper .modal-window {
    box-sizing: border-box;
    display: inline-block;
    z-index: 20;
    position: relative;
    width: 65vw;
    /*padding: 30px 30px 15px;*/
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, .6);
    vertical-align: middle;
    align-self: center;
  }

  .modal-wrapper .modal-window .modal-content {
    max-height: 60vh;
    overflow-y: auto;
  }

  .modal-wrapper .modal-close {
    z-index: 20;
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    color: #95979c!important;
    font-size: 20px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    text-decoration: none;
    text-indent: 0;
    cursor: pointer;
  }

  .modal-wrapper .modal-close:hover {
    color: #2b2e38!important
  }
  pre.code {
    text-align: left;
    background: rgb(250, 250, 250);
    border-radius: 3px;
    border: 0px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px inset;
    color: #4d4d4d;
    font-family: Monaco, Consolas, "Courier New", Courier, monospace, sans-serif;
    font-size: 13px;
    outline: 0px;
    overflow: auto;
    max-height: 55vh;
    padding: 10px;
    vertical-align: baseline;
    line-height: normal;
  }

  #floating-button{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #db4437;
    position: fixed;
    bottom: 55px;
    right: 32px;
    cursor: pointer;
    box-shadow: 0px 2px 5px #666;
  }

  .plus{
    color: white;
    position: absolute;
    top: 0;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 0;
    margin: 0;
    line-height: 55px;
    font-size: 38px;
    font-family: 'Roboto';
    font-weight: 300;
    animation: plus-out 0.3s;
    transition: all 0.3s;
  }

  #container-floating{
    position: fixed;
    width: 70px;
    height: 70px;
    bottom: 30px;
    right: 30px;
    z-index: 50;
  }

  #container-floating:hover{
    height: 400px;
    width: 90px;
    padding: 30px;
  }

  #container-floating:hover .plus{
    animation: plus-in 0.15s linear;
    animation-fill-mode: forwards;
  }

  .edit{
    position: absolute;
    top: 0;
    display: block;
    bottom: 0;
    left: 0;
    display: block;
    right: 0;
    padding: 0;
    opacity: 0;
    margin: auto;
    line-height: 65px;
    transform: rotateZ(-70deg);
    transition: all 0.3s;
    animation: edit-out 0.3s;
  }

  #container-floating:hover .edit{
    animation: edit-in 0.2s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  @keyframes edit-in{
    from {opacity: 0; transform: rotateZ(-70deg);}
    to {opacity: 1; transform: rotateZ(0deg);}
  }

  @keyframes edit-out{
    from {opacity: 1; transform: rotateZ(0deg);}
    to {opacity: 0; transform: rotateZ(-70deg);}
  }

  @keyframes plus-in{
    from {opacity: 1; transform: rotateZ(0deg);}
    to {opacity: 0; transform: rotateZ(180deg);}
  }

  @keyframes plus-out{
    from {opacity: 0; transform: rotateZ(180deg);}
    to {opacity: 1; transform: rotateZ(0deg);}
  }
  .nds{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    z-index: 300;
    transform:  scale(0);
    cursor: pointer;
  }

  .nd1{
    background: #d3a411;
    right: 40px;
    bottom: 120px;
    animation-delay: 0.2s;
    animation: bounce-out-nds 0.3s linear;
    animation-fill-mode:  forwards;
  }
  @keyframes bounce-nds{
    from {opacity: 0;}
    to {opacity: 1; transform: scale(1);}
  }

  @keyframes bounce-out-nds{
    from {opacity: 1; transform: scale(1);}
    to {opacity: 0; transform: scale(0);}
  }

  #container-floating:hover .nds{

    animation: bounce-nds 0.1s linear;
    animation-fill-mode:  forwards;
  }
  .reminder{
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    line-height: 40px;
  }

  td > svg {
    cursor: pointer;
  }
  td > svg:hover {
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background-color: rgba(255,255,255,0.56);
  }

  .module-yun-tip {
    z-index: 999 !important;
  }
`

export { GlobalStyle }
