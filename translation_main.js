//本页主要翻译了主要的设置项等
//柒元还是个技术小白，本文一切都是面向百度的编程完成的
//这个翻译方式有助于根据自己 的喜好进行调整翻译，
//这个翻译可以基于官方原系统直接嵌入，不用做任何其他修改
//这个翻译可能会导致您输入的内容的误翻译
//这个翻译是基于点击事件进行的，因此没啥事就别到处点了，这可能引起很多无效的翻译任务，当然，这一般也没啥影响。

//替换的方法
//三个参数  待替换文字，替换成的文字，查找的节点
const replaceBodyText = (searchWord, replaceWord, node) => {
    const reg = new RegExp(searchWord, 'g');

    const replaceNode = (node) => {
        node.childNodes.forEach((v) => {
            if (v.nodeName === 'SCRIPT')
                return; //排除<script>标签
            if (!v.hasChildNodes()) {
                if (reg.test(v.textContent))
                    v.textContent = v.textContent.replace(reg, replaceWord);
                return;
            }
            replaceNode(v);
        });
    };

    replaceNode(node);
};

//执行替换循环的方法
//2个参数  由待替换文字和替换成的文字组成的json，查找的节点
const doReplace = (translationList, node) => {
    console.log("翻译执行");
    for (const { searchWord, replaceWord } of translationList) {
        replaceBodyText(searchWord, replaceWord, node);
    }

};

//在关于里面添加翻译者的github链接
//这可以让您更方便的找到我，并获取最新翻译的更新
{
    {
        const tempContainer = document.createElement('tbody');
        tempContainer.innerHTML = `
            <tr>
                <th>翻译者:</th>
                <td><a href="https://github.com/lioooooh/trilium-translation">柒元... github</a></td>
            </tr>
            <tr>
                <th>参考翻译:</th>
                <td><a href="https://github.com/Nriver/trilium-translation">https://github.com/Nriver/trilium-translation</a></td>
            </tr>
            <tr>
                <th>重要感谢:</th>
                <td>感谢Nriver的翻译让我有机会认识和理解这个笔记，感谢您对trilium的贡献</td>
            </tr>
        `;
        const aboutElement = document.querySelector('.about-dialog tbody');
        Array.from(tempContainer.children).forEach(node => aboutElement.append(node));
    }
}


// 菜单栏 的翻译对应
const translationMenuList = [
    { 'searchWord': 'Options', 'replaceWord': '设置选项' },
    { 'searchWord': 'Open new window', 'replaceWord': '新的窗口' },
    { 'searchWord': 'Open Dev Tools', 'replaceWord': '开发工具' },
    { 'searchWord': 'Open SQL Console', 'replaceWord': 'SQL控制台' },
    { 'searchWord': 'Show backend log', 'replaceWord': '显示后台日志' },
    { 'searchWord': 'Reload frontend', 'replaceWord': '重新加载页面' },
    { 'searchWord': 'Toggle fullscreen', 'replaceWord': '切换全屏' },
    {
        'searchWord': 'Switch to mobile version',
        'replaceWord': '切换移动端模式',
    },
    {
        'searchWord': 'Switch to desktop version',
        'replaceWord': '切换桌面端模式',
    },
    { 'searchWord': 'Show Help', 'replaceWord': '显示帮助' },
    { 'searchWord': 'About Trilium Notes', 'replaceWord': '关于 Trilium' },
];

// 菜单页 加载就绪后执行翻译，
//不是所有的都可以这样，因为不是所有页面打开时就会加载
{
    const node = document.querySelector("#launcher-pane");
    doReplace(translationMenuList, node);
}


// 关于Trilium 的翻译对应
const translation_about = [
    { 'searchWord': 'About Trilium Notes', 'replaceWord': '关于 Trilium 笔记' },
    { 'searchWord': 'Homepage', 'replaceWord': '项目主页' },
    { 'searchWord': 'App version', 'replaceWord': '应用版本' },
    { 'searchWord': 'DB version', 'replaceWord': '数据库版本' },
    { 'searchWord': 'Sync version', 'replaceWord': '同步版本' },
    { 'searchWord': 'Build date', 'replaceWord': '编译日期' },
    { 'searchWord': 'Build revision', 'replaceWord': '编译版本' },
    { 'searchWord': 'Data directory', 'replaceWord': '数据目录' },
];

//监听 【关于Trilium】 的点击事件
//关于Trilium  弹窗的翻译
//监听被点击的区域
//在点击后的第1秒和第3秒执行翻译任务
{
    const node = document.querySelector(".about-dialog");
    doReplace(translation_about, node)
}

// 笔记树角落的设置 的翻译对应
const translation_tree_actions = [
    { 'searchWord': 'Hide archived notes', 'replaceWord': '隐藏已归档笔记' },
    {
        'searchWord': 'Hide images included in a note',
        'replaceWord': '隐藏笔记中的图片',
    },
    {
        'searchWord': 'Automatically collapse notes',
        'replaceWord': '自动折叠笔记',
    },
    { 'searchWord': 'Save & apply changes', 'replaceWord': '保存并应用修改' },
];
//笔记树角落的设置icon
//监听 【设置按钮】 的点击事件
//监听被点击的区域
//在点击后的第1秒和第3秒执行翻译任务

$("button.tree-floating-button.bx.bx-cog.tree-settings-button").on('click', () => {
    const node = document.querySelector(".tree-settings-popup");
    console.log("1s翻译设定");
    setTimeout(() => {
        doReplace(translation_tree_actions, node);
    }, 1000);
});

//文档属性模块 的翻译对应
const translation_note = [
    { 'searchWord': 'Basic Properties', 'replaceWord': '基本属性' },
    { 'searchWord': 'Note type', 'replaceWord': '笔记类型' },
    { 'searchWord': 'Relation Map', 'replaceWord': '关系图' },
    { 'searchWord': 'Render Note', 'replaceWord': '渲染笔记' },
    { 'searchWord': 'Mermaid Diagram', 'replaceWord': '美人鱼图' },
    { 'searchWord': 'Protect the note', 'replaceWord': '保护笔记' },
    { 'searchWord': 'Editable', 'replaceWord': '允许编辑' },
    { 'searchWord': 'Bookmark', 'replaceWord': '书签' },
    { 'searchWord': 'Shared', 'replaceWord': '分享' },
    { 'searchWord': 'Owned attributes', 'replaceWord': '拥有的属性' },
    { 'searchWord': 'Inherited attributes', 'replaceWord': '继承的属性' },
    { 'searchWord': 'Note Paths', 'replaceWord': '笔记路径' },
    {
        'searchWord': 'This note is placed into the following paths',
        'replaceWord': '这个笔记已被放到以下路径中',
    },
    {
        'searchWord': 'Clone note to new location...',
        'replaceWord': '克隆到新路径...',
    },
    { 'searchWord': 'Note Map', 'replaceWord': '笔记地图' },
    { 'searchWord': 'Similar Notes', 'replaceWord': '相似笔记' },
    { 'searchWord': 'Note Info', 'replaceWord': '笔记信息' },

    { 'searchWord': ' Re-render note', 'replaceWord': '重新渲染笔记' },
    { 'searchWord': 'Search in note ', 'replaceWord': '在笔记中搜索' },
    { 'searchWord': ' Note source', 'replaceWord': '笔记源代码' },
    {
        'searchWord': ' Open note externally',
        'replaceWord': '用外部程序打开笔记',
    },
    { 'searchWord': 'Import files', 'replaceWord': '导入文件' },
    { 'searchWord': 'Export note', 'replaceWord': '导出笔记' },
    { 'searchWord': ' Print note', 'replaceWord': '打印笔记' },


    {
        'searchWord': 'Fast search option disables full text search of note contents which might speed up searching in large databases.',
        'replaceWord': '"快速搜索"选项禁用了笔记内容的全文搜索, 这可能会加快大型数据库中的搜索速度.',
    },

    {
        'searchWord': 'Take only first X specified results.',
        'replaceWord': '只取前N条结果.',
    },
    {
        'searchWord': 'Debug will print extra debugging information into the console to aid in debugging complex queries.',
        'replaceWord': '调试会将更多调试信息打印到控制台中, 以帮助调试复杂的查询.',
    },
    {
        'searchWord': 'To access the debug information, execute query and click on "Show backend log" in top left corner.',
        'replaceWord': '.要访问调试信息, 请执行查询, 然后单击左上角的"显示后端日志".',
    },
    { 'searchWord': 'Search parameters', 'replaceWord': '搜索参数' },
    { 'searchWord': 'Add search option:', 'replaceWord': '添加搜索选项：' },
    { 'searchWord': 'Search string:', 'replaceWord': '搜索关键词：' },
    { 'searchWord': 'Search script:', 'replaceWord': '搜索脚本：' },

    { 'searchWord': 'Ancestor:', 'replaceWord': '起始层级：' },
    { 'searchWord': 'depth:', 'replaceWord': '深度：' },
    { 'searchWord': "doesn\\'t mattter", 'replaceWord': '任意' },
    { 'searchWord': 'is exactly ', 'replaceWord': '等于 ' },
    { 'searchWord': '\\(direct children\\)', 'replaceWord': '(直接子类) ' },
    { 'searchWord': 'is greater than ', 'replaceWord': '大于 ' },
    { 'searchWord': 'is less than ', 'replaceWord': '小于' },
    { 'searchWord': 'Fast search', 'replaceWord': '快速搜索' },
    { 'searchWord': 'Include archived notes', 'replaceWord': '包含已归档笔记' },
    { 'searchWord': 'Order by', 'replaceWord': '排序' },
    { 'searchWord': 'Limit', 'replaceWord': '取前N个' },
    { 'searchWord': 'Debug', 'replaceWord': '调试' },

    { 'searchWord': 'Relevancy \\(default\\)', 'replaceWord': '相关性 (默认)' },
    { 'searchWord': 'Title', 'replaceWord': '标题' },
    { 'searchWord': 'Date created', 'replaceWord': '创建日期' },
    {
        'searchWord': 'Date of last modification',
        'replaceWord': '最后修改日期',
    },
    {
        'searchWord': 'Note content size including revisions',
        'replaceWord': '笔记内容大小(包括历史)',
    },
    { 'searchWord': 'Note content size', 'replaceWord': '笔记内容大小' },
    { 'searchWord': 'Number of revisions', 'replaceWord': '历史数量' },
    { 'searchWord': 'Number of children notes', 'replaceWord': '子笔记数' },
    { 'searchWord': 'Number of clones', 'replaceWord': '克隆数' },
    { 'searchWord': 'Number of labels', 'replaceWord': '标签数量' },
    {
        'searchWord': 'Number of relations targeting the note',
        'replaceWord': '指向笔记的关系数',
    },
    { 'searchWord': 'Number of relations', 'replaceWord': '关系数' },
    { 'searchWord': 'Random order', 'replaceWord': '随机顺序' },
    { 'searchWord': 'Ascending \\(default\\)', 'replaceWord': '升序（默认）' },
    { 'searchWord': 'Descending', 'replaceWord': '降序' },

    {
        'searchWord': "Open a note by typing the note's title into the input below or choose a note in the tree.",
        'replaceWord': '在下方输入笔记名称或者点树形图来打开笔记.',
    },
];
//由于会打开多个标签页，需要将每个标签页的内容都进行翻译
//这里写了个循环标签页的方法
const loopdoReplace = (translationList, nodeSelector) => {
    console.log("loopdoReplace翻译执行");
    const nodeList = $(nodeSelector);
    for (const node of nodeList) {
        for (const { searchWord, replaceWord } of translationList) {
            replaceBodyText(searchWord, replaceWord, node);
        }
    }
};

// 有时加载时就已经有页面打开，因此也需要 加载就绪后执行翻译，
$(".tab-row-widget.component").ready(() => {
    const node = ".ribbon-container.component";
    console.log("0.5s文档属性翻译设定");
    setTimeout(() => {
        loopdoReplace(translation_note, node);
    }, 500);
    console.log("2s文档属性翻译设定");
    setTimeout(() => {
        loopdoReplace(translation_note, node);
    }, 2000);
});

//文档属性模块的翻译
//监听 【文章标签】 的点击事件
//.ribbon-container.component
//document.querySelector(".ribbon-container.component");
$(".tab-row-widget.component").on('click', () => {
    const node = ".ribbon-container.component";
    console.log("0.5s文档属性翻译设定");
    setTimeout(() => {
        loopdoReplace(translation_note, node);
    }, 1000);
    console.log("2s文档属性翻译设定");
    setTimeout(() => {
        loopdoReplace(translation_note, node);
    }, 2000);
});

//点击按钮打开搜索时
$("span.button-widget.icon-action.bx.component.bx-search").on('click', () => {
    const node = ".ribbon-container.component";
    console.log("0.5s文档属性翻译设定");
    setTimeout(() => {
        loopdoReplace(translation_note, node);
    }, 1000);
    console.log("2s文档属性翻译设定");
    setTimeout(() => {
        loopdoReplace(translation_note, node);
    }, 2000);
});


