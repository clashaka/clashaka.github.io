# README

## 内容更新

- 每月更新

```
.vitepress/theme/NavItem.js
.vitepress/theme/Sidebar.js
src/public/images/[year]/[month]
src/vpn/[year]/[month].md && #h1
src/index.md#actions && features
```

- 广告更新

```
.vitepress\theme\components\Layout.vue
src\vpn\doc-bottom.md
src\vpn\doc-top.md
src\vpn\paid.md
```

## VitePress 更新

```
npm update vitepress
```

或移步 package.json/package-lock.json 修改版本信息

```
"devDependencies": {
    "vitepress": "^x.x.x"
}
```

## GitHub Pages 部署

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