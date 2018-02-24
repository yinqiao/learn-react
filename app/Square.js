/* *
 * 受控组件: 无状态
 * 使用函数定义组件
 */

import React from 'react'

function Square(props) {
  return (
    // 注意不能写成 onClick={props.onClick()} 否则 props.onClick 方法会在 Square 组件渲染时被直接触发而不是等到 Board 组件渲染完成时通过点击触发，又因为此时 Board 组件正在渲染中（即 Board 组件的 render() 方法正在调用），又触发 handleClick(i) 方法调用 setState() 会再次调用 render() 方法导致死循环。
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;