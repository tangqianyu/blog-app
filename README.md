## 关于本项目
本项目是一个搭建个人博客的demo，支持github用户登录，用户产生的数据均保存在用户自己的github仓库中。项目的宗旨在于利用优秀的开源编辑器工具
方便用户编辑自己的笔记，并进行存储和管理。

前端是基于angular + ng-zorro-antd搭建，利用electron将项目打包成桌面端程序，这样可以省下服务器搭建的步骤，节省成本。
后端的想法是利用nodejs+sqlite将数据持久化，项目启动的同时运行nodejs主文件运行后端程序，sqlite文件支持自动同步到用户提供的github仓库中。

## web端使用
本项目分为用户展示端和管理员后台两部分，对应 page/blog，page/admin，blog部分可由用户自己写的hexo网页所替代（不关心用户的文章怎么展示），当然你也
可以把项目dist目录下的文件放在你的gitpage上。
admin部分主要是对文章和用户信息的管理，web端使用此部分的功能需要本地拉取项目后端代码运行之后，才能正常使用。后续将支持导出文章功能。

## 桌面端使用
在配置文件中绑定自己的gitpage地址（可选）和存储数据的github仓库地址，再运行exe文件。

## 和hexo的交互
理论上用户利用hexo搭建好自己的gitpage后，更新md文件，再发布之后就可以同步更新gitpage，这个功能将在项目中支持（包括分类和标签）。


