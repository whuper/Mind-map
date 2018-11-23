#### ios手机恢复出厂设置会恢复到出厂时候的旧系统吗

不会

#### mac电脑 恢复出厂设置会恢复到出厂时候的旧系统吗

不会

如果安装了双系统,要把windows分区合回去,才能恢复系统

#### 制作OS X El Capitan 10.11安装盘

1. 下载并打开mac 10.11 DMG 文件将安装文件拖入到：应用程序
2. 准备一个 8GB 或以上容量的 U 盘,把U盘用磁盘工具格式化。命名为`udisk`
3. 打开终端输入如下命名并在提示下输入密码。等待即可。

```sh
sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/udisk --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app --nointeraction
```

4. 完成以后,关机,再按住Option键开机，用U盘开始全新安装。

> 选择 U 盘的图标回车，即可通过 U 盘来安装 OS X El Capitan 了！你可以直接覆盖安装系统(升级)，也可以在磁盘工具里面格式化抹掉整个硬盘，或者重新分区等实现全新的干净的安装。

## 重新安装系统有三种方法

1. 使用苹果自带的联网恢复功能进行安装（适合进不了系统的，最简单但是耗时） 
2. 制作U盘启动进行安装（适合进不了系统的，快但是肯能会遇到一些问题，比较复杂） 
3. 从appstore下载进行安装（最简单，适合升级系统）



> 第一种相对比较简单，开机的时候按住`command+r`，等待他下载完成。
>
> `(格式化格式一定要选择GUID模式！！！千万别选ASPF格式)`