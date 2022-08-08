---
title: "Hugo+Github Pages搭建教程"
date: 2022-08-08T17:01:19+08:00
# draft: true
---

## 1、安装Hugo

可以参考[Hugo官网安装教程](https://gohugo.io/getting-started/installing/)，以下安装过程仅适用于MacOS Monterey系统

注意(2022-08-08)安装Hugo之前需要安装Git和Go:

```bash
## 安装以及更新Git，brew不好用的话看下MacPorts(port)：https://www.macports.org/install.php
brew install git
## 安装以及更新Go，直接去官网https://go.dev/learn/，安装
## 安装Hugo
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install hugo
## 查看Hugo版本确认是否安装成功
hugo version
```

## 2、初步体验Hugo

首先生成一个本地文档，

```bash
hugo new site personal-site
```

由此可以得到以下目录：

```bash
personal-site
├── archetypes # 新文章默认模板
├── config.toml # 配置文档
├── content # 存放所有Markdown格式的文章 
├── data
├── layouts # 存放自定义的view，可为空
├── static # 存放图像、CNAME、css、js等资源，发布后该目录下所有资源将处于网页根目录
└── themes # 存放下载的主题
```

新建一个github repo，必须是[username].github.io，比如johnjim0816.github.io，把上面personal-site文件夹下的所有文件复制到这个repo中。

然后执行以下命令就可以新建文章了：

```bash
hugo new posts/test.md # 新建一个名为test的文章
```

然后执行：

```bash
hugo server
```

就可以在本地(一般是http://localhost:1313/)看文章效果了。

如果没有问题，执行```hugo```命令就会生成网页在public子目录中。

## 3、添加主题

添加主题可以使用git submodule的形式如下：

```bash
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke # ananke主题
```

然后在```config.toml```中增加以下命令，主题就生效了：

```bash
theme = "ananke"
```

至于主题推荐则另外说明，主要这里主题是以子模块的形式添加的，方便更新主题，但是删掉子模块也不容易，包括以下步骤：
```bash
1. 删除子模块目录，通常是主题名称
vim .gitmodules 然后删除子模块相关
vim .git/config 删除子模块相关
删除.git/modules下面的所有子模块相关
```



## 4、发布到Github Pages上

参考[这个链接](https://zhuanlan.zhihu.com/p/37752930)，我选择了本地文档和网页文档放在一块（尝试过分开，但太痛苦了，不熟悉Git的话会有很多莫明的bug），在```config.toml```中增加一行```publishDir = "docs"```(不加这个网页文档就会生成到public文件夹下，然而没办法指定public文件夹为Pages的source)，这样生成的网页文档就会在docs文件夹下，然后在网页上指定一下Pages的source就可以了，如下图：

![image-20220808171219912](image-20220808171219912.png)

## 5、自定义域名

买一个域名，添加三个解析记录，如下，其中上面两个记录值就是```ping johnjim0816.github.io```得到的ip地址。

![image-20220808172504863](figs/image-20220808172504863.png)

然后直接在github repo的pages页面添加你自定义的域名保存，等到DNS check成功即可：

![image-20220808172648749](figs/image-20220808172648749.png)