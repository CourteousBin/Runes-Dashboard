<div align="center">

# Runes 符文面板


  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwindcss-black?style=for-the-badge&logoColor=06B6D4&logo=tailwindcss&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Hiro-black?style=for-the-badge&logoColor=white&logo=handshake&color=000000" alt="vercel" />
    <img src="https://img.shields.io/badge/-shadcn ui-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="vercel" />
  </div>
  
</div>

<br />



根据 Hiro 教程构建的符文面板，链接钱包，可以在面板看到符文资产、链上活动、已经最新的符文信息。




## 开始使用

在将仓库克隆到您的计算机后：

```bash
git clone git@github.com:CourteousBin/Runes-Dashboard.git
```

导航到项目文件夹：

```bash
cd Runes-Dashboard
```

安装项目依赖项：

```bash
npm install
```

运行开发服务器：

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看结果。


## 使用的工具

要了解更多关于 Hiro 的 Runes API 的信息：

- [Hiro 文档](https://docs.hiro.so/bitcoin/runes/api) - 了解不同的 Runes API 端点。
- [Hiro 博客](https://www.hiro.so/blog/introducing-the-runes-api) - 了解 Hiro 为什么构建 Runes API 端点。
- [Runehook](https://github.com/hirosystems/runehook) - 了解 Runes API 端点背后的机制。

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 的功能和 API。
- [学习 Next.js](https://nextjs.org/learn) - 一个互动的 Next.js 教程。

要了解更多关于 Stacks Connect 的信息：

- [Stacks Connect 文档](https://docs.hiro.so/stacks/connect) - 了解如何将比特币 Web3 钱包（如 [Leather](https://leather.io)）连接到您的应用程序。


## 应用程序增强/建议

以下是一些您可以进一步实现的建议。只需分叉代码并开始构建！

- 添加与其他比特币钱包的连接兼容性
- 如果从 API 端点返回的 `results` 大于 60，则实现 `offset` 查询参数的递增
- 实现新的卡片或路由段，以查看其他 Runes API 端点的数据，例如：
  - 获取符文持有者 `/runes/v1/etchings/{etching}/holders`
  - 获取某个符文的所有活动 `/runes/v1/etchings/{etching}/activity`
  - 获取刻印 `/runes/v1/etchings`
- 显示符文的市场价格
- 使用 Hiro 的 [Ordinals API](https://docs.hiro.so/bitcoin/ordinals/api) 为 Ordinals 数据创建一个类似的仪表板。