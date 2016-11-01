# 奶子奶子奶
<<<<<<< HEAD
=======

#添加已有项目到github  
touch README.md //新建说明文件  
git init //在当前项目目录中生成本地git管理,并建立一个隐藏.git目录  
git add . //添加当前目录中的所有文件到索引  
git commit -m "first commit" //提交到本地源码库，并附加提交注释  
git remote add origin github地址//添加到远程项目，别名为origin  
git push -u origin master //把本地源码库push到github 别名为origin的远程项目中，确认提交  



#更新代码  
cd /d/TVCloud  
git add .  
git commit -m "update test" //检测文件改动并附加提交注释  
git push -u origin master //提交修改到项目主线  



#github常用命令  
git push origin master //把本地源码库push到Github上  
git pull origin master //从Github上pull到本地源码库  
git config --list //查看配置信息  
git status //查看项目状态信息  
git branch //查看项目分支  
git checkout -b host//添加一个名为host的分支  
git checkout master //切换到主干  
git merge host //合并分支host到主干  
git branch -d host //删除分支host


#github常见问题
git无法pull仓库refusing to merge unrelated histories
因为两个仓库不同，发现refusing to merge unrelated histories，无法pull
因为他们是两个不同的项目，要把两个不同的项目合并，git需要添加一句代码，在git pull，这句代码是在git 2.9.2版本发生的，最新的版本需要添加--allow-unrelated-histories
假如我们的源是origin，分支是master，那么我们需要这样写git pull origin master --allow-unrelated-histories
需要知道，我们的源可以是本地的路径
>>>>>>> 5198f9201cafeb0e7a70badba429691c785a6990


