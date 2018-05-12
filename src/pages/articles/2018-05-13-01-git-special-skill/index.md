---
title: Markdown
date: "2018-05-13T04:20:00"
layout: post
path: "/git-special-skill/"
categories:
  - Markdown
  - Movable Type
description: "Civil society; save lives pathway to a better life public-private partnerships solution, tackle, protect UNHCR social movement Jane Addams sustainable campaign respond equality."
---

# Git 特殊技能

## Git 迁移 - 从一个git仓库迁移到另外一个git仓库

1. 从原地址克隆一份裸版本库，比如原本托管于 GitHub。

```shell
git clone --bare git://github.com/username/project.git
```

--bare 创建的克隆版本库都不包含工作区，直接就是版本库的内容，这样的版本库称为裸版本库。

<!--more-->

2. 然后到新的 Git 服务器上创建一个新项目，比如 GitCafe

3. 以镜像推送的方式上传代码到 GitCafe 服务器上

```shell
cd project.git
git push --mirror git@gitcafe.com/username/newproject.git
```

-- mirror 克隆出来的裸版本对上游版本库进行了注册，这样可以在裸版本库中使用git fetch命令和上游版本库进行持续同步。

4. 删除本地代码

```shell
cd ..
rm -rf project.git
```

5. 到新服务器 GitCafe 上找到 Clone 地址，直接 Clone 到本地就可以了

```shell
git clone git@gitcafe.com/username/newproject.git
```

------

## Git 把多個 Commit 合併成一個 Commit 

> [参考1-把多個 Commit 合併成一個 Commit](https://gitbook.tw/chapters/rewrite-history/merge-multiple-commits-to-one-commit.html)
> [参考2-Git提交历史的修改删除合并等实践](http://blog.codingplayboy.com/2017/12/13/git-commit-operate/)

有時候 Commit 的太過「瑣碎」，舉個例子來說：

```shell
$ git log --oneline
27f6ed6 (HEAD -> master) add dog 2
2bab3e7 add dog 1
ca40fc9 add 2 cats
1de2076 add cat 2
cd82f29 add cat 1
382a2a5 add database settings
bb0c9c2 init commit
```

在 `cd82f29` 跟 `1de2076` 這兩個 Commit 都只有各加一個檔案（分別是 `cat1.html` 跟 `cat2.html`），`2bab3e7` 跟 `27f6ed6` 也一樣，都只各加了一個檔案而已。如果想把這幾個 Commit 合併成一個，會讓 Commit 看起來更乾淨一些。同樣可以使用互動模式的 Rebase 來處理：

```shell
$ git rebase -i bb0c9c2
```

接著一樣再次出現 Vim 編輯器視窗，內容如下：

```shell
pick 382a2a5 add database settings
pick cd82f29 add cat 1
pick 1de2076 add cat 2
pick ca40fc9 add 2 cats
pick 2bab3e7 add dog 1
pick 27f6ed6 add dog 2

# Rebase bb0c9c2..27f6ed6 onto bb0c9c2 (6 commands)
#
# Commands:
# ...[略]...
```

這裡我用的指令是 `squash`，把上面的內容修改成這樣：

```shell
pick 382a2a5 add database settings
pick cd82f29 add cat 1
squash 1de2076 add cat 2
squash ca40fc9 add 2 cats
pick 2bab3e7 add dog 1
squash 27f6ed6 add dog 2
```

> 注意！
> 在互動模式的紀錄由上而下是從最舊到最新，跟 git log 指令所呈現的結果是相反的。

這樣的修改表示接下來會發生這些事：

1. 最後一行的 27f6ed6 會跟前一個 Commit 2bab3e7 進行合併，也就是 add dog 1 跟 add dog 2 這個 Commit 會合在一起。
2. 倒數第三號的 ca40fc9 會跟前一個 Commit 1de2076 合併，但因為 1de2076 又會再往前一個 Commit cd82f29 合併，所以整個跟 cat 有關的這三個 Commit 會併成同一個。  

存檔並離開 Vim 編輯器後，它會開始進行 Rebase，而在 Squash 的過程中，它還會跳出 Vim 編輯器讓你編輯一下訊息：

![](https://gitbook.tw/images/rewrite-history/merge-multiple-commits-to-one-commit/squash1.png)

我把訊息改成「add all cats」：

![](https://gitbook.tw/images/rewrite-history/merge-multiple-commits-to-one-commit/squash2.png)

同樣的，在另一次的 Squash 也會再編輯一次 Commit 訊息，我把它改成「add all dogs」。整個 Rebase 的訊息如下：

```shell
$ git rebase -i bb0c9c2
[detached HEAD fb79104] add all cats
 Date: Sun Aug 20 05:08:25 2017 +0800
 4 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 cat1.html
 create mode 100644 cat2.html
 create mode 100644 cat3.html
 create mode 100644 cat4.html
[detached HEAD 803eeac] add all dogs
 Date: Sun Aug 20 05:09:53 2017 +0800
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 dog1.html
 create mode 100644 dog2.html
Successfully rebased and updated refs/heads/master.
```

這時候的歷史紀錄就變成這樣了：

![](https://gitbook.tw/images/rewrite-history/merge-multiple-commits-to-one-commit/squash3.png)

這樣就把剛剛那些貓貓狗狗的，全部整理成兩個 Commit 了。
