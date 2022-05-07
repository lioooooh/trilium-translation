# trilium-translation

为了能够持续使用官方的最新版本，并期望能够减少折腾保持正常使用，我做了一个基于js的翻译脚本，可以在运行时加载。

非常感谢Nriver 的翻译让我有机会认识和理解这个笔记，感谢您对trilium的贡献


Nriver 的翻译主页  https://github.com/Nriver/trilium-translation

我做的这个基于js的翻译又以下优势和劣势

优势：

1.可以根据自己需要调整翻译的内容

2.可以一直使用最新版本的笔记



劣势：

1.基于js脚本的翻译，部分内容会先显示英文再闪过显示成中文

2.基于js的替换式操作，有时可能会将你自己写的某个英文单词替换成中文



其他说明：我只进行了菜单栏、选项栏、文章基础信息栏的翻译，这基本满足日常需求。其他细节由于监听操作成本很高，暂时没考虑处理。我主要的目标是能用，理解原理，不是为了做一个完美的中文版产品。



这个脚本如何用：

创建文本，笔记类型选择 JS前端 （ 英文：JS frontend） 

把本文的两个js 分别粘贴到两个文档中

在属性栏添加    #run=frontendStartup #run=mobileStartup 


另外

我还修改了一个目录的插件在这里
https://github.com/lioooooh/trilium-table






