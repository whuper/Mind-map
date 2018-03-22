###css的优先级问题

1.  内联样式表的权值最高 1000；

2.  ID 选择器的权值为 100

3.  Class,伪类,熟悉 类选择器的权值为 10

4.  HTML 标签选择器的权值为 1

**当在一个样式声明上使用 !important 规则时，该样式声明会覆盖CSS中任何其他的声明,。尽管技术上 !important 与优先级毫无关系，**

一些经验法则：

Never 永远不要在全站范围的 css 上使用 !important  
Only 只在需要覆盖全站或外部 css（例如引用的 ExtJs 或者 YUI ）的特定页面中使用 !important   
Never 永远不要在你的插件中使用 !important  
Always 要优化考虑使用样式规则的优先级来解决问题而不是 !important  