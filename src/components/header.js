import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import "./header.css"
import $ from "jquery"

// const Header = ({ siteTitle }) => (
//   <header>
//     {/* <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div> */}
//     <div classNameName="Header">
//       <div classNameName="HeaderGroup">
//         <Link to="/">
//           <img src={require("../images/logo-designcode.svg")} width="30" />
//         </Link>
//         <Link to="/courses">Courses</Link>
//         <Link to="/downloads">Downloads</Link>
//         <Link to="/workshops">Workshops</Link>
//         <Link to="/buy">
//           <button>Buy</button>
//         </Link>
//       </div>
//     </div>
//   </header>
// )

const Header = () => {
  const [state, setState] = useState({
    scrolled: false,
  })

  const handleClick = e => {
    e.preventDefault()
    return $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#promotion").offset().top,
        },
        200
      )
  }

  const handleSuccess = e => {
    e.preventDefault()
    return $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#success").offset().top,
        },
        200
      )
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      if (scrollTop > 20) {
        setState({
          scrolled: true,
        })
      } else {
        setState({ scrolled: false })
      }
    }

    document.addEventListener("scroll", handleScroll)
  }, [state.scrolled])

  return (
    <>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div> */}
      <div className={state.scrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require("../images/k.png")} width="30" />
          </Link>
          <button onClick={handleClick} id="features">
            {" "}
            Features
          </button>

          <button onClick={handleSuccess} id="features">
            Success
          </button>

          <a  href="https://www.termsfeed.com/live/66097ebd-6261-40de-af2b-2d380a5606c8" style={{color: "white" }}>Terms</a>
          <a  href="https://www.termsfeed.com/live/2f8fe288-b434-42a9-b551-9ea4962065ee" style={{color: "white" }}>Privacy Policy</a>
          <a  href="/terms" style={{color: "white" }}>Refund Policy</a>
          <button>
            <a href="#Products">Buy</a>
          </button>




        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
