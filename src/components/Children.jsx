import React from "react"
import PropTypes from 'prop-types'

export default function children(props) {
  const changeNum = () => {
    props.changeNum(56)
  }
  const ele = (
    <>
      <div>
        {props.str}
      </div>
      <div onClick={changeNum}>{props.children}</div>
    </>
  )
  return ele
}
children.propTypes = {
  str: PropTypes.number
}
children.defaultProps = {
  str: 'ccccccccc'
}