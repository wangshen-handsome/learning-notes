## 一、课堂开篇

### 1. 自我介绍





### 2. 第三阶段课程简介

第1、2阶段为前端的基本功

###### 学习目标

git、es6、Node、Express、Mysql、ajax、websocket、webpack

**前后端数据交互**

真正的实现从无到有的一个过程，最后再进行上线

###### 学习路线

git、es6、Node、Express、Mysql、Ajax、项目、websocket、webpack







## 二、Git

### 学完能干什么？

工作中必用。不是写代码的，而是维护代码的一个工具。

在团队协作开发中，它的优势非常明显。

注：以后笔记统一用git管理 。



### 版本的概念（了解）

(1)初指一种书籍经过多次传抄、刻印或以其他方式而形成的各种不同本子。随着时代的发展，版本也开始应用于影视、软件等事物上，形容事物相同但介绍方法等不同的两个事物。

(2)软件版本编号制定是指为软件设置版本号码的方式。通常，版本号码会以数字订定。

(3)软件名称后面经常有一些英文和数字，如：CTS3.3.5、QQ 2021 Beta，这些都是软件的版本标志，通过它，我们可以对软件的类型有所了解。

各版本的时间轴演变，每一次版本的改变，都会有功能的改变。

![image-20220510202045045](/public/img/thirdStage/one/image-20220510202045045.png)



支付宝更新历史：https://mobile.alipay.com/index.htm 中的更新历史



![](/public/img/thirdStage/one/6-1软件版本时间轴.png)



![](/public/img/thirdStage/one/6-2软件版本时间轴.jpg)



### 问题就出来了？如何维护文件代码？

### 管理版本

#### 1.传统管理方式

问题：传统管理方式造成了本地电脑上有很多相同的文件，不容易维护，造成了非常混乱的局面。 

![](/public/img/thirdStage/one/6-3传统管理文件方式.png)

![](/public/img/thirdStage/one/6-4传统管理文件方式.png)

#### 2.版本控制方式

好处：使用版本控制以后，只需在本地保存一份，各个版本由版本控制软件来进行管理，常见的版本控制软件有**git和svn**。

![](/public/img/thirdStage/one/6-5版本控制管理文件方式.png)



### git介绍

#### 定义：

Git 是一个开源的**分布式**版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。

项目越大，那么git的优势就越明显 。

#### 特点：

项目越大越复杂，协同开发者越多，越能体现出Git 的高性能和高可用性



#### git的三个区域

**操作说明**：如果文件在工作区，则可以提交到暂存区，如果文件在暂存区则可以提交到仓库区。



- 工作区：相当于我们写代码的地方

![](/public/img/thirdStage/one/6-6工作区.jpg)



- 暂存区：我们可以完成某一个功能（如登录、注册），临时的放在一个地方

![](/public/img/thirdStage/one/6-7暂存区.png)



- 仓库区：所有的功能完成了，放在仓库区。

![](/public/img/thirdStage/one/6-8仓库区.png)





### 安装步骤

#### 下载

官网：https://git-scm.com/downloads

淘宝镜像：https://npm.taobao.org/mirrors/git-for-windows/v2.31.1.windows.1/

​	根据你的操作系统下载即可



#### 安装

安装盘符随意（建议路径全英文），安装选项全部默认



###### 安装成功以后

在任意目录下，点击鼠标右键，会出现以下两菜单

![image-20210506100948151](/public/img/thirdStage/one/image-20210506100948151.png)



#### 配置用户信息

描述：安装完Git 之后，需要设置自己的用户名和邮件地址。进行管理的时候，Git 需要使用这些基本信息，来记录是谁对项目进行了操作

既然是团队协作开发，那么git就需要记录哪个开发者修改了代码文件（删除文件、添加了文件）

**特殊说明**：在你的电脑上只需要配置一次即可。

**配置命令**：在任意目录下打开 `git bash here`

```sh
git config --global user.name 用户名
git config --global user.email 邮箱
```

```

```





#### 查看是否配置成功

两种方式：

1) git config --list

![image-20220304100816006](/public/img/thirdStage/one/image-20220304100816006.png)

2) 查看 .gitconfig文件   （查看文件：C:/Users/用户名文件夹/.gitconfig）

![image-20220304100739205](/public/img/thirdStage/one/image-20220304100739205.png)



### Git操作步骤

一、使用git初始化项目（一个项目初始化一次即可）

​	以demo1文件夹为例，它是一个**项目根目录**

​	1、在你的demo1项目根目录下，打开`git bash here`

​	2、执行初始化命令（这时，在你的根目录下，就会看到一个`.git`的文件夹。这个文件夹千万不要动它，它由git管理）

```
git init           （initialization:初始化）
```



二、编写代码 

​	以新建一个index.html为例   （工作区）

三、把工作区添加到暂存区  

​	把工作区的果实（文件）放到暂存区             （在有.git的目录下，右键打开`git bash here`）

```sh
git add 文件名
```

四、把暂存区添加到仓库区

```sh
git commit -m 提交说明
```

commit: 提交的意思 。只要执行commit命令，就会生成一个**版本号**。

- 在开发过程中，一直会围绕着 2、3、4步骤重复操作
- 如果工作区和暂存区是干净的，就不需要提交

![image-20220304102511119](/public/img/thirdStage/one/image-20220304102511119.png)

**特殊说明：** .git 文件夹

默认是隐藏文件

**不要对.git里面做任何修改，我们在执行git的一些命令的时候，自动会修改的。**







### Git命令

- init

```sh
git init 
```

作用：初始化，一个项目只要执行一次

- add

```sh
git add 文件名
git add .   点代表仓库下所有的文件及文件夹
```

把工作区添加到暂存区

- commit

```sh
git commit -m 提交的说明
```

把暂存区提交到仓库区。同时生成 一个版本

- status

```sh
git status

```

看仓库中工作区和暂存区文件的状态，不是非必须的命令。知道即可

- log

```sh
git log   以完整形式输出
git log --oneline  以简短形式输出

```

指向当前的记录及以前的，后面的记录不显示。（如果有回退，回退后的版本看不到）

- reset

```sh
git reset --hard 版本号

```

回退版本。在某些情况下（新版本有问题，那么开发者可能要马上回退到上一个版本）

`reset重置`

- reflog

```sh
git reflog

```

可以查看所有的版本，简短形式输出。（包括回退后的版本）

- 清屏

```sh
clear

```





总结：

```
项目初始化: git init

工作区添加暂存区: git add .
暂存区添加到仓库区: git commit -m 描述
查看工作区和暂时存区状态：git status
查看版本
	git log
	git log --oneline
回退: git reset --hard 版本号
查看全部版本：git reflog

清屏：clear

```







### 文件忽略

#### 介绍：

对于无需使用git进行管理的文件或文件夹使用此文件进行配置

一些公共库代码是不需要往仓库放的。（现在只需要会配置即可，到后面讲项目才能深刻理解）

#### 使用步骤：

1. 创建配置文件 .gitignore   （和.git目录同级）

   注意：必须使用软件开发者（如vscode）去创建(win10可以创建没有名字的文件）

2. 在配置文件中添加一些忽略配置

#### 常用配置规则：

(1)  /js/ 忽略整个文件夹

(2) *.txt 忽略所有.txt文件

(3) /js/a.js 忽略 js下的a.js文件







### 分支

#### 介绍：

git版本控制系统支持分支操作。使用分支意味着可以从开发主线上分离开来，然后在不影响主线的同时继续工作。默认只有一个分支为master主分支。



#### 什么是主分支？

在初始化本地 Git 仓库的时候，Git 默认已经帮我们创建了一个名字叫做 master 的分支。通常我们把这个master 分支叫做主分支



#### 主分支的问题：

在进行多人协作开发的时候，为了防止互相干扰，提高协同开发的体验和效率，建议每个开发者都基于分支进行项目功能的开发

#### 分支解决的问题：

用来保存和记录整个项目已完成的功能代码。但是不允许程序员直接在master 分支上修改代码，这样做的风险太高，容易导致整个项目崩溃  

![](/public/img/thirdStage/one/6-9分支介绍.jpg)

协议上规定：不应该在master主分支上维护代码 。应该在主分支的基础上，创建分支，然后在分支上维护代码

###### 补充说明：

在分支上的提交操作和主分支的提交操作命令一样。







#### 分支相关命令

`新建一个demo2文件夹测试，并创建文件，提交一次`

- branch

```sh
git branch

```

查看当前git管理的项目中有哪些分支，**必须主分支上有一次提交**              `branch   分支`

- branch 分支名

```sh
git branch 分支名

```

创建分支   （注意：如果主分支上没有任何提交，则不允许创建分支）

- checkout

```sh
git checkout 分支名

```

切换分支， 在切换的分支上开发功能代码

特殊说明：当第一次切换到某一个分支上，则会完全的复制master上第一次提交记录到当前分支上

- merge

```sh
git merge 分支名

```

把merge后面的分支记录合并到当前分支上。一般情况下都是合并到主分支上。



**操作**：分别创建ln zs xgk分支，操作之后，再合到主分支上

如果有报错：则按esc，再输入 `:wq`回车

https://www.cnblogs.com/wei325/p/5278922.html

![](/public/img/thirdStage/one/630011-20160315120522896-1718649799.jpg)





```
1、创建demo2并  初始化   git init 
2、创建index.html，并提交
3、创建zs ls ww 分支
4、切换到zs，创建zs.html，并提交
5、切换到ls，创建ls.html， 并提交
6、切换到ww，创建ww.html。并提交
7、切换到主分支,将zs ls ww合并到主分支上
git merge zs/ls/ww

```









#### 解决冲突

介绍：如果在两个不同的分支中，对同一个文件进行了不同的修改，Git 就没法合并它们。我们需要打开这些包含冲突的文件然后手动解决冲突。

**需求：**

1、在demo3项目中有主分支master , 有两个分支：deva和devb

2、有index.html文件，同时deva和devb同时修改并且提交了

3、切换到master主动上，合并deva和devb

4、解决冲突后，再在master上提交



#### 补充一（不是重点）

master上合并了deva和devb。

即master上永远是完整的代码。

但我们再切换到分支的时候，需要再合并master的代码到分支上。

#### 补充二

如何避免冲突：不同的功能模块是不会发生冲突。只有修改了公共文件才有可能发生冲突 （ 谁修改了公共文件，在团队群告知一下，我修改了xxxx文件 ）









### 远程仓库

#### 介绍：

Git 命令都是在本地执行，如果想通过 Git 分享你的代码或者与其他开发人员合作。就需要将文件放到一台其他开发人员能够连接的服务器上。这就是远程仓库的作用。

目的：把本地的仓库文件上传到远程仓库。

#### 远程仓库分类：

(1)、github：github是一个基于git的代码托管平台，在国外，速度比较慢，在大陆的使用很受影响 

(2)、gitee：gitee是一个基于git的代码托管平台，国内使用频率较多（码云）

(3)、公司自己部署：了解即可，不是前端人员部署的，使用步骤和命令都一样



#### 操作流程

1、注册

https://gitee.com/

2、创建远程仓库。（仓库名称和路径保持一致，并开源）

![image-20220304153836976](/public/img/thirdStage/one/image-20220304153836976.png)

![image-20220304154011166](/public/img/thirdStage/one/image-20220304154011166.png)

3、本地文件推送（上传）到远程仓库

```sh
git push 远程仓库地址 远程仓库分支名

```

把本地的某个仓库的master分支，上传到远程仓库地址。

注意：在上传的时候，要验证你的用户名和密码

4、克隆和同步远程仓库

​	团队协作开发，比如：deva上传了某个文件，devb要下载（同步）远程仓库

![](/public/img/thirdStage/one/6-11本地和远程使用原理图.jpg)

4.1 克隆clone（第一次用克隆）

说明：在某个文件夹下，右键调出git bach here，再用克隆，文件就下载到当前这个文件夹下

```sh
git clone 远程仓库

```

4.2 同步pull（后续更新用拉取）

```
git pull 远程仓库

```



push: 是把本地仓库推送到远程

clone: 克隆远程仓库到本地（完完全全地下载一份），一般只用一次（如果是第一次下载用克隆）

pull: 以后同步更新用pull。（比如：deva开发者，只修改了一个文件，其他的开发者只用pull即可。pull只下载更新的文件）

`案例：本地a上传，b下载，修改后b再上传，a再下载`

![image-20220304165800115](/public/img/thirdStage/one/image-20220304165800115.png)





#### 相关命令

- remote add

```sh
git remote add 别名 远程仓库地址

```

设置远程仓库别名

- remote -v

```sh
git remote -v

```

查看远程仓库的别名

- push

```sh
git push 远程仓库 分支名称
git push 远程仓库的别名 分支名称
git push -u 远程仓库的别名 分支名称

git push : 如果你想只用git push就实现上传，那么必须先执行一次 git push -u 远程仓库的别名 分支名称



如:
git remote add origin git@gitee.com:pzh10000/demo.git    将origin与远程仓库关联
git push -u origin "master"								 执行一次-u，以后就只需要git push即可推送，git pull即可实现拉取（当别人clone了这个仓库，他也可以这样使用，即所有克隆这个仓库的人，都可以git push 和 git pull了）

```

- clone

```sh
git clone 地址

```

第一次下载用clone

- pull

```sh
git pull 地址
git pull 远程仓库别名
git pull          如果你这个仓库执行过-u，则可以直接git pull就可以拉取

```

再次下载，就可以只用拉取新添加的





步骤：

```
git remote add 别名 远程仓库地址
git push -u 别名 分支名

git remote add origin git@gitee.com:pzh10000/test3.git
git push -u origin "master"

以后，就只需要git push

```







### 刚入职的操作流程

1、先安装git

2、全局配置 git  config

以上两步有时候不用。

3、再下载公司已有的项目（git clone）

**4、99%以上的时间在写代码和改代码** 

**5、早上上班时候？**

​	git pull 更新最新的

**6、下班的时候要做什么 ？**

​	git add .

​	git commit -m

​	git push



### SSH访问

简介：传统方式本地和远程传输，需重复输入gitee的账号和密码，较为繁琐。

SSH好处：免登录身份认证、数据加密传输。而SSH实现本地仓库和gitee之间免登录的加密数据传输。更重要的原因是团队协同开发更加方便。

SSH组成： (1)id_rsa 私钥文件，存放于开发者的电脑中  (2)id_rsa.pub 公钥文件（放在远程仓库） 。

生成密钥步骤：1、打开Git Bash  2、执行相关命令  3、连续敲击回车



#### 步骤

1、在任何目录下，打开git，生成公钥私钥

```sh
ssh-keygen -t rsa -b 4096 -C "开发者的邮箱"

```

这样，在开发者的**电脑用户名下面会有一个.ssh文件夹**，里面就会生成公钥和私钥文件。

![image-20220304170859794](/public/img/thirdStage/one/image-20220304170859794.png)



2、将公钥文件添加到自己的远程仓库

![image-20220304170957992](/public/img/thirdStage/one/image-20220304170957992.png)

![image-20220304171018205](/public/img/thirdStage/one/image-20220304171018205.png)

3、验证添加是否成功。本地同公钥私钥文件夹下，会生成一个known_hosts文件。

```sh
ssh -T git@gitee.com

按yes并回车

```

4、把本地的仓库提交到远程（ssh）

注意：使用ssh提交不能用https打头。 应该使用 git@gitee.com: 此协议进行提交。提交时，就不用再输入远程仓库的帐号和密码了。



### 邀请成员管理

![image-20220510210354331](/public/img/thirdStage/one/image-20220510210354331.png)



![image-20220510210421271](/public/img/thirdStage/one/image-20220510210421271.png)



![image-20220510210445936](/public/img/thirdStage/one/image-20220510210445936.png)

### Git与SVN区别

SVN：SVN是一个开放源代码的集中式版本控制系统，用于多个人共同开发同一个项目，实现共享资源。集中式版本控制系统：版本库是集中存放在中央服务器，开发者需要先从中央服务器获取最新的版本文件，然后开始干活，最后再把自己修改的文件推送到中央服务器。

![](/public/img/thirdStage/one/6-16svn集中式服务器.jpg)



Git:Git 是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。分布式版本控制系统：没有“中央服务器”，每个人的电脑上都是一个完整的版本库，联网开发不是必须的。但两两开发者之间肯定不会以qq或U盘形式传送，也有一台充当“中央服务器”的电脑（gitee和github）。此服务器的作用仅是用来方便“交换”各开发之间的修改。

![](/public/img/thirdStage/one/6-17git分布式.jpg)





