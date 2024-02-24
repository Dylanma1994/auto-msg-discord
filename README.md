# auto-msg-discord

auto-msg-discord 是一个开源的 npm 项目，用于实现自动与 Discord 进行交互的功能。通过该项目，你可以轻松地设置自动发送消息、回复消息等功能，从而简化 Discord 机器人的管理。

## 安装
要安装 auto-msg-discord，你可以通过 npm 进行安装：
```
npm install auto-msg-discord
```

## 使用
使用 auto-msg-discord 非常简单，首先在你的项目中引入该模块：
```
import PuppetEnhance
```

然后，你可以创建一个新的 PuppetEnhance 实例，支持
1. 按照`token`或`username+password`两种模式登录
2. 支持'msg'和'cmd'两种模式的交互消息

```
const pueet = new PuppetEnhance(token='xxx', type='msg', arg='xxx', msg='')
const pueet = new PuppetEnhance(username='xxx', password='xxx', type='msg', arg='xxx', msg='')
```

自动发送消息
```
pueet.run()
```
