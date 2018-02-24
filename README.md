# learn-react


## 使用步骤

1. `npm install`
2. `npm run dev`
3. 打开 <http:127.0.0.1:8080>


## 参考文档
1. React <https://hulufei.gitbooks.io/react-tutorial/content/jsx.html>
2. 井字游戏 <https://doc.react-china.org/tutorial/tutorial.html>

## 基础概念

1. 组件
    * `import React, {Component} from 'react';`
    * props
    * state
        * 无状态的组件(stateless function)
    * <https://reactjs.org/docs/thinking-in-react.html>
    * 组件生命周期
        * getInitialState
        * getDefaultProps
        * componentWillMount
        * componentDidMount
        * componentWillReceiveProps
        * shouldComponentUpdate
        * componentWillUpdate
        * componentDidUpdate
        * componentWillUnmount
    * 事件处理
        * `<p onClick={this.handleClick.bind(this)}> You {text} this. Click to toggle. </p>`
        * “合成事件”和“原生事件”
            * `e.stopProgation()` ===> `e.nativeEvent.stopImmediatePropagation()`
    * DOM操作
        * `findDOMNode()`
        * `this.refs.name`
    * 组合组件
        * `this.props.children`
        * {map}
    * 通信
        * 父子通信：props、refs
        * 全局事件 Pub/Sub 模式
        * Flux/Redux
    * mixins: ES6 不支持
2. JSX
    * 构建器 ===> babel
    * 组件是和模板紧密关联的，组件模板和组件逻辑分离让问题复杂化了。因此，React 认为组件才是王道，诞生JSX解决此问题。
    * className htmlFor dangerouslySetInnerHTML aria-
    * <Component {...props} foo={'override'} />
    * onChange style
    * <https://reactjs.org/docs/dom-elements.html>
3. Virtual DOM
4. Data Flow
    * 单向数据绑定
    * `store.dispatch(action) -> reducer(state, action) -> store.getState()`
5. [表单](https://hulufei.gitbooks.io/react-tutorial/content/forms.html)
    * 受控组件
    * 非受控组件
    * value
    * onChange


## 开发环境

 Grunt / Gulp / Webpack / Broccoli / Parcel
 
 1. 支持JSX
    * babel内置了对JSX的支持
 2. 支持ES6

## 服务端渲染

1. renderToString
2. renderToStaticMarkup
3. Redux
4. react-router
5. react-redux


