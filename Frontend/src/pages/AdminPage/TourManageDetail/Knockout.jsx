import React from 'react'
import { node, root } from '../../../components/KnockoutStep'
function row (children) {
  return <div className='d-flex align-center'>{children.map(item => item)}</div>
}
function column (children) {
  return <div className='d-flex flex-column'>{children.map(item => item)}</div>
}

function make (tmpNode, deep) {
  if (deep == 3) return tmpNode
  return make(row([column([tmpNode, tmpNode]), node(deep + 1)]), deep + 1)
}

function Knockout () {
  return row([make(node(1), 1), root()])
}

export default Knockout
