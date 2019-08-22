## history

#### browser history

html5 history API

#### hash history

旧的 history 接口

#### memory history

测试和无 Dom 环境类似于原生环境

#### props

- length(number): length of history stack length
- action(string): current action (push, replace, pop)
- location(object): current action
  - pathname
  - search
  - hash
  - state
- push(path[, state])
- replace(path[, state])
- go(n)
- goBack()
- goForward
- block(prompt)

#### hash & state todo
