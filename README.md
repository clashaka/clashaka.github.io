# README

## 内容更新

- 每月更新

```
.vitepress/theme/NavItem.js
.vitepress/theme/Sidebar.js
src/public/images/[year]/[month]
src/vpn/[year]/[month].md
src/vpn/[year]/[month].md#description&h1
src/index.md#actions&features
```

- 广告更新

```
.vitepress\theme\components\Layout.vue
src\vpn\doc-bottom.md
src\vpn\doc-top.md
src\vpn\paid.md
```

## 更新版本

```
npm update vitepress
```

到 package.json / package-lock.json 中修改版本信息

```
"devDependencies": {
    "vitepress": "^x.x.x"
}
```

## 部署指令

```
call git add .
call git commit -m "Add new content"
call git push
call cd .vitepress/dist
call git init
call npm run build
call git add .
call git commit -m "Add new content"
call git branch -M main
call git remote add origin https://github.com/clashaka/clashaka.github.io.git
call git push origin HEAD:main
```