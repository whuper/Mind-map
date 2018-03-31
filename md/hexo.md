### 安装hexo

npm install -g hexo

初始化Hexo

	hexo init

在_config.yml,进行基础配置(博客名，作者，主题)

     hexo g

     hexo s
     
在_config.yml,进行基础配置（deployment）

安装hexo-deployer-git自动部署发布工具

	npm install hexo-deployer-git  --save
	
发布到Github

	hexo clean && hexo g && hexo d

