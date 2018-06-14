## onbeforeunload 和 浏览器关闭


> onunload，onbeforeunload都是在刷新或关闭时调用,区别在于

> onbeforeunload在onunload之前执行，它还可以阻止onunload的执行。

> Onunload无法阻止页面的更新和关闭。
> 而 Onbeforeunload 可以做到。




- 页面加载时只执行onload
- 页面关闭时先执行onbeforeunload，最后onunload
- 页面刷新时先执行onbeforeunload，然后onunload，最后onload


### 如何判断是关闭还是刷新?

没有好的办法