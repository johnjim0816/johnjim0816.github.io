+++
date = '2025-10-08T18:12:22+08:00'
draft = false
title = 'Hugo+GitHubPage个人博客搭建进阶'
+++

<!--more-->

## 多语言

`hugo.toml`配置中增加以下内容， 注意`defaultContentLanguage = "zh"`内容最好放在前面，否则可能不生效

```toml
defaultContentLanguage = "zh"
defaultContentLanguageInSubdir = true  # 默认语言也走子路径就设为 true；想让中文在根 / 则设为 false
enableRobotsTXT = true

[languages.zh]
    languageName = "中文"
    weight = 1
    title = "我的技术博客"
[languages.en]
  languageName = "English"
  weight = 2
  title = "My Tech Blog"
```

新建`layouts\partials\lang-switch.html`文件，参考本Repo

每篇文章的md文件格式改成xxx.zh.md、xxx.en.md

## 图片引用

对应文章文件夹下新建figs文件，md中使用`![fig1](figs/fig1.png)`类似的格式引用即可

若需要使用`<img src="figs/fig1.png" alt="示例图" width="700">`这样的HTML格式，则需要在`hugo.toml`中增加以下内容

```toml
[markup.goldmark.renderer]
  unsafe = true 
```

## 切换主题

以`ananke`切换到`PaperMod`为例，首先拉取`submodule`：

```bash
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

然后更改`hugo.toml`中相关配置:

```toml
theme = "PaperMod"
```

删除`ananke`：

```bash
git submodule deinit -f themes/ananke
git rm -f themes/ananke
rm -rf .git/modules/themes/ananke
git commit -m "chore: remove ananke theme submodule"
```