# 灵缇微信小程序原型

> 原小程序已上线，涉及商业内容，此处展示的数据和内容与原小程序无关，仅做项目成果展示。

这是一个基于**原生微信小程序**的 VS Code 可编辑工程骨架，当前已完成 **首页、赛事、商城、资讯、我的** 五大板块的页面结构与基础跳转。

---

## 🛠️ 技术栈

| 技术 | 说明 |
| --- | --- |
| 原生微信小程序 | 开发框架 |
| JavaScript + WXML + WXSS | 页面逻辑、结构与样式 |
| VS Code | 主要编辑器 |
| 微信开发者工具 | 编译、预览、真机调试 |

---

## 📁 目录结构

```
├── app.js              # 小程序全局入口
├── app.json            # 页面注册与全局配置
├── app.wxss            # 全局样式
├── pages/              # 业务页面
├── components/         # 公共组件
└── utils/              # 静态数据与跳转工具
```

---

## 📄 当前页面

| 板块 | 页面内容 |
| --- | --- |
| **首页** | 聚合入口和推荐内容 |
| **赛事** | 赛事列表和赛事详情 |
| **商城** | 商品列表和商品详情 |
| **资讯** | 资讯列表和资讯详情 |
| **我的** | 个人中心、我的赛事、我的订单、工具中心 |

---

## 🚀 使用方式

1. 用 **VS Code** 打开当前工作区文件夹。
2. 打开 **微信开发者工具**。
3. 选择 **“导入项目”**，项目目录指向当前工作区根目录。
4. 使用游客 appid `touristappid` 可先查看页面结构。
5. 后续如需接入真实后端，只需在 `utils/` 和页面逻辑中将静态数据替换为接口数据。

---

## 📱 页面展示

### 🏠 首页

<img width="365" height="773" alt="首页" src="https://github.com/user-attachments/assets/8b0fb36c-c92f-44b2-b9bc-24aa469251e6" />

### 🏆 赛事页

<img width="375" height="778" alt="赛事页" src="https://github.com/user-attachments/assets/07fecbcb-945f-41bc-ae42-4fae886f8d69" />

### 📰 资讯页

<img width="373" height="785" alt="资讯页" src="https://github.com/user-attachments/assets/eef784c7-3b19-4791-a7b5-f35c0f6c633c" />

### 👤 个人页

<img width="379" height="786" alt="个人页" src="https://github.com/user-attachments/assets/12212037-f4c5-4312-8fb5-f554d579e3c0" />
