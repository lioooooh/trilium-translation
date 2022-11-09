/**
 *
 * @typedef {Object} TranslationUnit
 * @property {String} searchWord - 要被替换的文字
 * @property {String} replaceWord - 要替换成的文字
 */

/**
 * @typedef {Array<TranslationUnit>} Translation
 */

/**
 * @typedef {Function} TranslationProcessor
 * @param {Translation} translation
 * @param {String} selector
 * @param {String} description
 */

/**
 * @typedef {Object} TranslationSetting
 * @property {String} [description] - 描述信息
 * @property {Translation} translation - 翻译数据
 * @property {String} selector - 选择器
 * @property {"static"|"dynamic"|"tab"|TranslationProcessor} method - 翻译方式，如果逻辑复杂可以传入一个TranslationProcessor函数来自己写过程
 * @property {Array<"attributes"|"childList"|"subtree">} [monitor] - 监听类别
 */

/**
 * @type {Array<TranslationSetting>}
 */
const translationSettingList = [
    {
        "description": "设置选项对话框主题框架",
        "selector": ".options-dialog",
        "method": "static",
        "translation": [
            { 'searchWord': 'Options', 'replaceWord': '选项' },
            { 'searchWord': 'Appearance', 'replaceWord': '外观' },
            { 'searchWord': 'Shortcuts', 'replaceWord': '快捷键' },
            { 'searchWord': 'Text notes', 'replaceWord': '文本笔记' },
            { 'searchWord': 'Code notes', 'replaceWord': '代码笔记' },
            { 'searchWord': 'Password', 'replaceWord': '密码' },
            { 'searchWord': 'Backup', 'replaceWord': '备份' },
            { 'searchWord': 'Sync', 'replaceWord': '同步' },
            { 'searchWord': 'Other', 'replaceWord': '其他' },
            { 'searchWord': 'Advanced', 'replaceWord': '高级' },

        ],
    },
    {
        "description": "设置选项对话框的各个标签页内容",
        "selector": ".tab-content>.tab-pane",
        "method": "dynamic",
        "translation": [
            {
                'searchWord': 'Settings on this options tab are saved automatically after each change.',
                'replaceWord': '配置在每次修改后会自动保存.',
            },
            { 'searchWord': 'Heading style', 'replaceWord': '标题风格' },
            {
                'searchWord': 'Override theme fonts',
                'replaceWord': '覆盖主题样式',
            },

            { 'searchWord': 'Zoom factor', 'replaceWord': '缩放系数' },
            {
                'searchWord': '\\(desktop build only\\)',
                'replaceWord': '（仅桌面客户端有效）',
            },
            { 'searchWord': 'Native title bar', 'replaceWord': '原生标题栏' },
            { 'searchWord': 'requires app restart', 'replaceWord': '需要重启' },
            {
                'searchWord': 'Zooming can be controlled with ',
                'replaceWord': '缩放可以通过',
            },
            { 'searchWord': 'shortcuts as well', 'replaceWord': '快捷控制.' },
            { 'searchWord': 'Theme', 'replaceWord': '主题' },

            { 'searchWord': 'Main font', 'replaceWord': '主字体' },
            { 'searchWord': 'Note tree font', 'replaceWord': '笔记树字体' },
            { 'searchWord': 'Note detail font', 'replaceWord': '笔记详情字体' },
            { 'searchWord': 'Monospace font', 'replaceWord': '等宽字体' },
            { 'searchWord': 'Size', 'replaceWord': '字体缩放比例' },

            {
                'searchWord': 'Not all listed fonts may be available on your system.',
                'replaceWord': '并非所有列出的字体在您的系统上都可用。',
            },
            {
                'searchWord': 'Note that tree and detail font sizing is relative to the main font size setting.',
                'replaceWord': '笔记树和详细信息的字体大小调整是相对于主字体大小设置的。',
            },
            {
                'searchWord': 'To apply font changes, click on',
                'replaceWord': '应用字体修改, 请点击',
            },
            { 'searchWord': 'reload frontend', 'replaceWord': '重新加载前端' },

            { 'searchWord': 'Content width', 'replaceWord': '内容宽度' },
            {
                'searchWord': 'Trilium by default limits max content width to improve readability for maximized screens on wide screens.',
                'replaceWord': 'Trilium默认会限制内容的最大宽度以提高在宽屏中全屏时的可读性.',
            },
            {
                'searchWord': 'Max content width in pixels',
                'replaceWord': '内容最大宽度(像素)',
            },
            {
                'searchWord': 'To content width changes, click on',
                'replaceWord': '修改宽度后, 请点击',
            },

            { 'searchWord': 'Keyboard shortcuts', 'replaceWord': '快捷键' },
            {
                'searchWord': 'Multiple shortcuts for the same action can be separated by comma.',
                'replaceWord': '同一操作的多个快捷方式可以用逗号隔开.',
            },
            { 'searchWord': 'Action name', 'replaceWord': '动作名称' },
            { 'searchWord': 'Default shortcuts', 'replaceWord': '默认快捷键' },
            { 'searchWord': 'Description', 'replaceWord': '描述' },
            { 'searchWord': 'Note navigation', 'replaceWord': '笔记导航' },


            {
                'searchWord': 'Use vim keybindings in CodeNotes',
                'replaceWord': '在代码笔记中使用vim按键绑定',
            },
            { 'searchWord': 'no ex mode', 'replaceWord': '无ex模式' },
            {
                'searchWord': 'Enable Vim Keybindings',
                'replaceWord': '启用vim按键绑定',
            },
            {
                'searchWord': 'Available MIME types in the dropdown',
                'replaceWord': '下拉菜单可用的MIME文件类型',
            },

            {
                'searchWord': 'Password has been reset. Please set new password',
                'replaceWord': '密码已重置. 请设置新密码',
            },
            {
                'searchWord': 'New passwords are not the same.',
                'replaceWord': '新密码不一致',
            },
            {
                'searchWord': 'Password has been changed. Trilium will be reloaded after you press OK.',
                'replaceWord': '密码已被更改. 点击OK后, Trilium会重新加载.',
            },
            {
                'searchWord': 'By resetting the password you will forever lose access to all your existing protected notes. Do you really want to reset the password?',
                'replaceWord': '重置密码会永远丢失所有受保护的笔记. 确定要重置密码吗?',
            },
            { 'searchWord': 'Set password', 'replaceWord': '设置密码' },
            { 'searchWord': 'Change password', 'replaceWord': '修改密码' },
            {
                'searchWord': 'New password Confirmation',
                'replaceWord': '新密码确认',
            },
            { 'searchWord': 'New password', 'replaceWord': '新密码' },
            { 'searchWord': 'Old password', 'replaceWord': '旧密码' },

            {
                'searchWord': 'Please take care to remember your new password. Password is used to encrypt protected notes.',
                'replaceWord': '请一定要记住你的新密码. 密码被用来加密笔记.',
            },
            {
                'searchWord': 'If you forget your password, then all your protected notes are forever lost.',
                'replaceWord': '如果你忘记了密码, 所有受保护的笔记将永远丢失.',
            },
            {
                'searchWord': 'In case you did forget your password',
                'replaceWord': ' 如果你忘记了密码',
            },
            {
                'searchWord': 'click here to reset it',
                'replaceWord': '点击这里来重置它',
            },

            {
                'searchWord': 'ETAPI is a REST API used to access Trilium instance programmatically, without UI.',
                'replaceWord': 'ETAPI 是一个 REST API, 用于以编程方式访问 Trilium 实例, 无需 UI.',
            },
            {
                'searchWord': 'See more details on',
                'replaceWord': '更多信息请访问',
            },
            { 'searchWord': 'Existing tokens', 'replaceWord': '已有令牌' },
            {
                'searchWord': 'There are no tokens yet. Click on the button above to create one.',
                'replaceWord': '暂无令牌. 点击上方按钮来创建令牌.',
            },
            { 'searchWord': 'Token name', 'replaceWord': '令牌名称' },
            { 'searchWord': 'Created', 'replaceWord': '创建时间' },
            { 'searchWord': 'Actions', 'replaceWord': '操作' },
            {
                'searchWord': "Please enter new token's name",
                'replaceWord': '请输入新令牌的名称',
            },
            {
                'searchWord': 'New ETAPI token',
                'replaceWord': '新的 ETAPI 令牌',
            },


            { 'searchWord': 'Automatic backup', 'replaceWord': '自动备份' },
            {
                'searchWord': 'Trilium can back up the database automatically:',
                'replaceWord': 'Trilium 可以自动备份数据库:',
            },
            {
                'searchWord': "It's recommended to keep the backup turned on, but this can make application startup slow with large databases and/or slow storage devices.",
                'replaceWord': '建议打开备份功能, 但这可能会使大型数据库和/或慢速存储设备的应用程序启动变慢.',
            },
            {
                'searchWord': 'Enable daily backup',
                'replaceWord': '启用每日备份',
            },
            {
                'searchWord': 'Enable weekly backup',
                'replaceWord': '启用每周备份',
            },
            {
                'searchWord': 'Enable monthly backup',
                'replaceWord': '启用每月备份',
            },
            {
                'searchWord': 'Backup database now',
                'replaceWord': '现在备份数据库',
            },
            { 'searchWord': 'Backup now', 'replaceWord': '现在备份' },

            {
                'searchWord': "This will test the connection and handshake to the sync server. If the sync server isn't initialized, this will set it up to sync with the local document.",
                'replaceWord': '测试和同步服务器之间的连接. 如果同步服务器没有初始化, 会将本地文档同步到同步服务器上.',
            },
            { 'searchWord': 'Sync configuration', 'replaceWord': '同步设置' },
            {
                'searchWord': 'Server instance address',
                'replaceWord': '服务器地址',
            },
            { 'searchWord': 'Sync timeout ', 'replaceWord': '同步超时' },
            {
                'searchWord': 'Sync proxy server',
                'replaceWord': '同步代理服务器',
            },
            {
                'searchWord': 'If you leave the proxy setting blank, the system proxy will be used ',
                'replaceWord': '代理设置留空则使用系统代理',
            },
            { 'searchWord': 'Sync test', 'replaceWord': '同步测试' },
            { 'searchWord': 'Test sync', 'replaceWord': '测试同步' },

            { 'searchWord': 'Spell check', 'replaceWord': '拼写检查' },
            {
                'searchWord': 'These options apply only for desktop builds, browsers will use their own native spell check. App restart is required after change.',
                'replaceWord': '这些选项只在桌面客户端有效, 浏览器会使用浏览器的拼写检查. 修改设置后需要重启应用.',
            },
            {
                'searchWord': 'Enable spellcheck',
                'replaceWord': '开启拼写检查',
            },
            { 'searchWord': 'Language code', 'replaceWord': '语言码' },
            {
                'searchWord': 'Multiple languages can be separated by comma',
                'replaceWord': '多个语言可以用逗号分隔，',
            },
            {
                'searchWord': 'Changes to the spell check options will take effect after application restart.',
                'replaceWord': '拼写检查选项的修改将在应用程序重新启动后生效.',
            },
            {
                'searchWord': 'Available language codes',
                'replaceWord': '可用的语言码',
            },
            { 'searchWord': 'Image compression', 'replaceWord': '图片压缩' },
            {
                'searchWord': 'Enable image compression',
                'replaceWord': '启用图像压缩',
            },
            {
                'searchWord': 'Max width / height of an image in pixels ',
                'replaceWord': '图片的最大像素宽度和高度',
            },
            {
                'searchWord': 'image will be resized if it exceeds this setting',
                'replaceWord': '超过限制会缩放',
            },
            { 'searchWord': 'JPEG quality ', 'replaceWord': 'JPEG质量' },
            {
                'searchWord': '10 - worst quality, 100 best quality, 50 - 85 is recommended',
                'replaceWord': '10最低, 100最好, 推荐设置为50-85之间',
            },
            {
                'searchWord': 'Note erasure timeout',
                'replaceWord': '笔记清理超时',
            },
            {
                'searchWord': 'Deleted notes ',
                'replaceWord': '被删除的笔记（包括属性, 修改版本等）只是被标记为"删除", 是可以从"最近笔记"还原的. 过了一段时间这些笔记会被"清理", 被清理的笔记就无法还原了. 这个设置可以用来调整从"删除"到被"清理"的时间间隔.   原文：Deleted notes',
            },
            {
                'searchWord': 'Erase notes after X seconds',
                'replaceWord': '超过X秒后清理笔记',
            },
            {
                'searchWord': 'You can also trigger erasing manually:',
                'replaceWord': '手动执行笔记清理',
            },
            {
                'searchWord': 'Erase deleted notes now',
                'replaceWord': '清理被标记删除的笔记',
            },

            {
                'searchWord': 'Protected session timeout is a time period ',
                'replaceWord': '保护会话超时是从浏览器内存里清除保护会话的间隔, 这个时间从最后一次编辑保护的笔记开始计算.   原文：Protected session  timeout',
            },
            {
                'searchWord': 'Protected session timeout',
                'replaceWord': '保护会话超时',
            },

            {
                'searchWord': 'Note revisions snapshot interval',
                'replaceWord': '笔记修改快照间隔',
            },
            {
                'searchWord': 'Note revision snapshot time interval is time in seconds after which a new note revision will be created for the note. ',
                'replaceWord': '这个是笔记修改后创建快照的时间间隔.',
            },
            {
                'searchWord': 'Note revision snapshot time interval',
                'replaceWord': '笔记修改快照间隔',
            },
            {
                'searchWord': 'Automatic readonly size',
                'replaceWord': '自动只读大小',
            },
            {
                'searchWord': 'Automatic readonly note size is the size after which notes will be displayed in a readonly mode',
                'replaceWord': '笔记超过这个大小将自动以只读模式打开.',
            },
            {
                'searchWord': 'for performance reasons',
                'replaceWord': '性能考虑',
            },


            { 'searchWord': 'Force full sync', 'replaceWord': '强制完全同步' },
            {
                'searchWord': 'Fill entity changes records',
                'replaceWord': '填充变化记录',
            },
            {
                'searchWord': 'Database integrity check',
                'replaceWord': '数据库完整性检查',
            },
            {
                'searchWord': 'This will check that the database is not corrupted on the SQLite level. It might take some time, depending on the DB size.',
                'replaceWord': '检查SQLite数据库是否未损坏. 根据数据库大小, 可能会需要一些时间.',
            },
            {
                'searchWord': 'Check database integrity',
                'replaceWord': '检查数据库完整性',
            },
            {
                'searchWord': 'Consistency checks',
                'replaceWord': '一致性完整性检查',
            },
            {
                'searchWord': 'Find and fix consistency issues',
                'replaceWord': '查找并解决一致性完整性问题',
            },
            { 'searchWord': 'Anonymize database', 'replaceWord': '匿名数据库' },
            {
                'searchWord': 'This action will create a new copy of the database and anonymize it',
                'replaceWord': '这会创建一个数据库的副本并匿名化处理',
            },
            {
                'searchWord': 'remove all note content and leave only structure and some non-sensitive metadata',
                'replaceWord': '删除所有笔记内容, 仅保留结构和一些非敏感的元数据信息',
            },
            {
                'searchWord': 'for sharing online for debugging purposes without fear of leaking your personal data.',
                'replaceWord': '用来分享到网上做调试而不用担心泄漏你的个人资料.',
            },
            {
                'searchWord': 'Full anonymization',
                'replaceWord': '完全的匿名化',
            },
            {
                'searchWord': 'Save fully anonymized database',
                'replaceWord': '保存完全匿名的数据库',
            },
            {
                'searchWord': 'Light anonymization',
                'replaceWord': '部分匿名数据库',
            },
            {
                'searchWord': 'This action will create a new copy of the database and do a light anonymization on it - specifically only content of all notes will be removed, but titles and attributes will remaing. Additionally, custom JS frontend/backend script notes and custom widgets will remain. This provides more context to debug the issues.',
                'replaceWord': '此操作将创建数据库的新副本，并对其进行轻微的匿名化——具体来说，只有所有笔记的内容将被删除，但标题和属性将被重新标记。此外，自定义JS前端/后端脚本注释和自定义小部件将保留。这为调试问题提供了更多的上下文。',
            },
            {
                'searchWord': 'You can decide yourself if you want to provide fully or lightly anonymized database. Even fully anonymized DB is very useful, however in some cases lightly anonymized database can speed up the process of bug identification and fixing.',
                'replaceWord': '您可以自行决定是否要提供完全或轻度匿名的数据库。 即使完全匿名化的数据库也非常有用，但在某些情况下，轻度匿名化的数据库可以加快错误识别和修复的过程。',
            },
            {
                'searchWord': 'Save lightly anonymized database',
                'replaceWord': '保存部分匿名的数据库',
            },

            { 'searchWord': 'Vacuum database', 'replaceWord': '整理数据库' },
            {
                'searchWord': 'This will rebuild the database which will typically result in a smaller database file. No data will be actually changed.',
                'replaceWord': '这会重建数据库, 通常会减少占用空间, 不会删除数据.',
            },


            {
                'searchWord': 'Table of contents will appear in text notes when the note has more than a defined number of headings. You can customize this number',
                'replaceWord': '当注释的标题数超过定义的数目时，目录将显示在文本注释中。您可以自定义此数字',
            },
            {
                'searchWord': 'You can also use this option to effectively disable TOC by setting a very high number.',
                'replaceWord': '您还可以使用此选项通过设置一个非常大的数字来有效地禁用目录。',
            },
            { 'searchWord': 'Table of contents', 'replaceWord': '目录' },
        ],
    },
    {
        "description": "左侧菜单栏",
        "selector": "body.desktop #launcher-pane,body.mobile #global-buttons",
        "method": "static",
        "translation": [
            { 'searchWord': 'Menu', 'replaceWord': '菜单' },
            { 'searchWord': 'New note', 'replaceWord': '新建笔记' },
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
            {
                'searchWord': 'About Trilium Notes',
                'replaceWord': '关于 Trilium',
            },
        ],
    },
    {
        "description": "“关于”对话框",
        "selector": ".about-dialog",
        "method": "static",
        "translation": [
            {
                'searchWord': 'About Trilium Notes',
                'replaceWord': '关于 Trilium 笔记',
            },
            { 'searchWord': 'Homepage', 'replaceWord': '项目主页' },
            { 'searchWord': 'App version', 'replaceWord': '应用版本' },
            { 'searchWord': 'DB version', 'replaceWord': '数据库版本' },
            { 'searchWord': 'Sync version', 'replaceWord': '同步版本' },
            { 'searchWord': 'Build date', 'replaceWord': '编译日期' },
            { 'searchWord': 'Build revision', 'replaceWord': '编译版本' },
            { 'searchWord': 'Data directory', 'replaceWord': '数据目录' },
        ],
    },
    {
        "description": "目录树设置气泡",
        "selector": ".tree-settings-popup",
        "method": "static",
        "translation": [
            {
                'searchWord': 'Hide archived notes',
                'replaceWord': '隐藏已归档笔记',
            },
            {
                'searchWord': 'Hide images included in a note',
                'replaceWord': '隐藏笔记中的图片',
            },
            {
                'searchWord': 'Automatically collapse notes',
                'replaceWord': '自动折叠笔记',
            },
            {
                'searchWord': 'Save & apply changes',
                'replaceWord': '保存并应用修改',
            },
        ],
    },
    {
        "description": "标签页标题栏",
        "selector": ".title-row",
        "method": "tab",
        "translation": [
            { 'searchWord': 'Create new split', 'replaceWord': '新建分栏' },
            { 'searchWord': 'Change note icon', 'replaceWord': '更换笔记图标' },
        ],
    },
    {
        "description": "标签页属性按钮栏",
        "selector": ".ribbon-tab-container,.ribbon-button-container",
        "method": "tab",
        "translation": [
            { 'searchWord': 'Edited Notes', 'replaceWord': '已编辑笔记' },
            { 'searchWord': 'Promoted attributes', 'replaceWord': '推进属性' },
            { 'searchWord': 'Basic Properties', 'replaceWord': '基本属性' },
            {
                'searchWord': 'Owned attributes',
                'replaceWord': '拥有的属性',
            },
            {
                'searchWord': 'Inherited attributes',
                'replaceWord': '继承的属性',
            },
            { 'searchWord': 'Note Paths', 'replaceWord': '笔记路径' },
            { 'searchWord': 'Note Map', 'replaceWord': '笔记地图' },
            { 'searchWord': 'Similar Notes', 'replaceWord': '相似笔记' },
            { 'searchWord': 'Note Info', 'replaceWord': '笔记信息' },
            { 'searchWord': 'Edit this note', 'replaceWord': '修改此笔记' },
            { 'searchWord': 'Note Revisions', 'replaceWord': '笔记修订版本' },
            {
                'searchWord': 'Re-render note',
                'replaceWord': '重新渲染笔记',
            },
            {
                'searchWord': 'Search in note ',
                'replaceWord': '在笔记中搜索',
            },
            { 'searchWord': 'Note source', 'replaceWord': '笔记源代码' },
            {
                'searchWord': 'Open note externally',
                'replaceWord': '用外部程序打开笔记',
            },
            { 'searchWord': 'Import files', 'replaceWord': '导入文件' },
            { 'searchWord': 'Export note', 'replaceWord': '导出笔记' },
            { 'searchWord': 'Delete note', 'replaceWord': '删除笔记' },
            { 'searchWord': 'Print note', 'replaceWord': '打印笔记' },
        ],
    },
    {
        "description": "标签页属性设置栏",
        "selector": ".ribbon-body-container",
        "method": "tab",
        "translation": [
            { 'searchWord': 'Note type', 'replaceWord': '笔记类型' },
            { 'searchWord': 'Protect the note', 'replaceWord': '保护笔记' },
            {
                'searchWord': 'Note is not protected, click to make it protected',
                'replaceWord': '笔记未被保护，点击以进行保护',
            },
            {
                'searchWord': 'Unprotect the note',
                'replaceWord': '取消保护笔记',
            },
            {
                'searchWord': 'Note is protected, click to make it unprotected',
                'replaceWord': '笔记已被保护，点击以取消保护',
            },

            { 'searchWord': 'Relation Map', 'replaceWord': '关系图' },
            { 'searchWord': 'Render Note', 'replaceWord': '渲染笔记' },
            { 'searchWord': 'Mermaid Diagram', 'replaceWord': '美人鱼图' },

            { 'searchWord': 'Editable', 'replaceWord': '允许编辑' },
            { 'searchWord': 'Bookmark', 'replaceWord': '书签' },
            { 'searchWord': 'Shared', 'replaceWord': '分享' },
            {
                'searchWord': 'No inherited attributes',
                'replaceWord': '当前没有继承的属性',
            },
            {
                'searchWord': 'This note is placed into the following paths',
                'replaceWord': '这个笔记已被放到以下路径中',
            },
            {
                'searchWord': 'Clone note to new location...',
                'replaceWord': '克隆到新路径...',
            },
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
            {
                'searchWord': 'Search parameters',
                'replaceWord': '搜索参数',
            },
            {
                'searchWord': 'Add search option:',
                'replaceWord': '添加搜索选项：',
            },
            {
                'searchWord': 'Search string:',
                'replaceWord': '搜索关键词：',
            },
            { 'searchWord': 'Search script:', 'replaceWord': '搜索脚本：' },

            { 'searchWord': 'Ancestor:', 'replaceWord': '起始层级：' },
            { 'searchWord': 'depth:', 'replaceWord': '深度：' },
            { 'searchWord': "doesn\\'t mattter", 'replaceWord': '任意' },
            { 'searchWord': 'is exactly ', 'replaceWord': '等于 ' },
            {
                'searchWord': '\\(direct children\\)',
                'replaceWord': '(直接子类) ',
            },
            { 'searchWord': 'is greater than ', 'replaceWord': '大于 ' },
            { 'searchWord': 'is less than ', 'replaceWord': '小于' },
            { 'searchWord': 'Fast search', 'replaceWord': '快速搜索' },
            {
                'searchWord': 'Include archived notes',
                'replaceWord': '包含已归档笔记',
            },
            { 'searchWord': 'Order by', 'replaceWord': '排序' },
            { 'searchWord': 'Limit', 'replaceWord': '取前N个' },
            { 'searchWord': 'Debug', 'replaceWord': '调试' },

            {
                'searchWord': 'Relevancy \\(default\\)',
                'replaceWord': '相关性 (默认)',
            },
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
            {
                'searchWord': 'Note content size',
                'replaceWord': '笔记内容大小',
            },
            {
                'searchWord': 'Number of revisions',
                'replaceWord': '历史数量',
            },
            {
                'searchWord': 'Number of children notes',
                'replaceWord': '子笔记数',
            },
            { 'searchWord': 'Number of clones', 'replaceWord': '克隆数' },
            { 'searchWord': 'Number of labels', 'replaceWord': '标签数量' },
            {
                'searchWord': 'Number of relations targeting the note',
                'replaceWord': '指向笔记的关系数',
            },
            {
                'searchWord': 'Number of relations',
                'replaceWord': '关系数',
            },
            { 'searchWord': 'Random order', 'replaceWord': '随机顺序' },
            {
                'searchWord': 'Ascending \\(default\\)',
                'replaceWord': '升序（默认）',
            },
            { 'searchWord': 'Descending', 'replaceWord': '降序' },

            {
                'searchWord': "Open a note by typing the note's title into the input below or choose a note in the tree.",
                'replaceWord': '在下方输入笔记名称或者点树形图来打开笔记.',
            },
        ],
    },
    {
        "description": "右键菜单",
        "selector": "#context-menu-container",
        "method": "dynamic",
        "monitor": ["attributes"],
        "translation": [
            {
                'searchWord': 'Open in a new tab',
                'replaceWord': '新建标签页打开',
            },
            {
                'searchWord': 'Move this tab to a new window',
                'replaceWord': '将标签页移动到新窗口',
            },
        ],
    },
];

// 将长的文本排在前面，避免长文本包含短文本导致匹配失败的问题。
for (const translationSetting of translationSettingList) {
    translationSetting.translation.sort((a, b) => b.searchWord.length - a.searchWord.length);
}


/**
 * 替换要排除的标签名称
 * @type {string[]}
 */
const tagNameListExcluded = [
    'SCRIPT',
    'INPUT',
    'TEXTAREA',
];

/**
 * 递归扫描节点树替换文本
 * 不要直接调用这个函数，请使用translate和observeAndTranslate
 * @param {Translation} translation
 * @param {Element|Node} node
 */
const recurveSearchNodeAndReplaceText = (translation, node) => {
    // 翻译title，有些气泡是使用title里的文本
    for (const { searchWord, replaceWord } of translation) {
        const reg = new RegExp(searchWord, 'g');
        if (typeof node.getAttribute === 'function') {
            const title = node.getAttribute('title');
            if (typeof title === 'string' && title.trim() !== '') {
                node.setAttribute('title', title.replace(reg, replaceWord));
            }
        }
    }

    // 有子元素即递归进入，无子元素则翻译文本
    if (node.hasChildNodes()) {
        node.childNodes.forEach(childNode => {
            recurveSearchNodeAndReplaceText(translation, childNode);
        });
    } else {
        if (!tagNameListExcluded.includes(node.tagName)) {
            for (const { searchWord, replaceWord } of translation) {
                const reg = new RegExp(searchWord, 'g');
                if (node.textContent.trim() !== '' && reg.test(node.textContent))
                    node.textContent = node.textContent.replace(reg, replaceWord);
            }
        }
    }
};

/**
 * 立即翻译
 * @param translation
 * @param node
 * @param description
 */
const translate = (translation, node, description) => {
    console.log('执行静态翻译：', description, node);
    recurveSearchNodeAndReplaceText(translation, node);
    tooltipTranslate(translation, node, description);
};

/**
 * 观察，对发生变化的部分进行翻译
 * @param translation
 * @param node
 * @param description
 * @param monitor
 */
const observeAndTranslate = (translation, node, description, monitor = ["childList"]) => {
    /**
     * @param {Array<MutationRecord>} mutationList
     * @param {MutationObserver} mutationObserver
     */
    const mutationCallback = (mutationList, mutationObserver) => {
        mutationList.forEach((mutation) => {
            console.log('执行动态翻译：', description, mutation.target);
            recurveSearchNodeAndReplaceText(translation, mutation.target);
            tooltipTranslate(translation, mutation.target, description);
        });
    };

    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(mutationCallback);

    /**
     * 观察器的配置，仅观察每个Tab页元素的子节点列表是否有变化。
     * 当Options对话框显示的时候会启动生成每个标签页的内容，此时触发观察器。
     * @type {{subtree: boolean, attributes: boolean, childList: boolean}}
     */
    const observerConfig = {
        "attributes": monitor.includes('attributes'),
        "childList": monitor.includes('childList'),
        "subtree": monitor.includes('subtree'),
    };
    observer.observe(node, observerConfig);
};

/**
 * 翻译气泡
 * @param {Translation} translation
 * @param {Element} node
 * @param {String} description
 */
const tooltipTranslate = (translation, node, description) => {
    // Tooltip
    // data-toggle="tooltip" aria-describedby
    const tooltipMutationObserver = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
            const tooltipId = mutation.target.getAttribute('aria-describedby');
            if (tooltipId !== null) {
                const tooltipElement = document.querySelector(`#${tooltipId}`);
                if (tooltipElement !== null) {
                    console.log('执行气泡翻译：', description, tooltipElement);
                    recurveSearchNodeAndReplaceText(translation, tooltipElement);
                }
            }
        }
    });
    node.querySelectorAll('[data-toggle="tooltip"],.icon-action,.ribbon-tab-title-icon,.note-icon').forEach(element => {
        if (element.getAttribute('data-translation-observed') !== 'true') {
            element.setAttribute('data-translation-observed', 'true');
            tooltipMutationObserver.observe(element, {
                "attributes": true,
                "childList": false,
                "subtree": false,
            });
        }
    });
};

/**
 * @type {Array<{translation:Translation,selector:String,description:String}>}
 */
const tabTranslateTaskList = [];

for (const {
    method,
    monitor,
    selector,
    translation,
    description,
} of translationSettingList) {
    const nodeList = document.querySelectorAll(selector);
    switch (method) {
        case "static": {
            nodeList.forEach(node => {
                translate(translation, node, description);
            });
            break;
        }
        case "dynamic": {
            nodeList.forEach(node => observeAndTranslate(translation, node, description, monitor));
            break;
        }
        case "tab": {
            tabTranslateTaskList.push({
                translation,
                selector,
                description,
            });
            break;
        }
        default: {
            if (typeof method === 'function') {
                method(translation, selector, description);
            }
        }
    }
}

{
    /*
    加载脚本前标签页已经存在；
    新建标签页切换展示前不加载属性按钮label；
    新建标签页新增加一套DOM结构无法被事先监视；
     */

    /**
     * 翻译标签页
     * @param {Element} tabElement
     */
    const tabTranslate = (tabElement) => {
        for (const {
            translation,
            selector,
            description
        } of tabTranslateTaskList) {
            const nodeList = tabElement.querySelectorAll(selector);
            for (const node of nodeList) {
                translate(translation, node, description);
            }
        }
    };

    /**
     * 观察属性栏在属性变化后的刷新，以重新翻译标签页
     * @param {Element} tabElement
     */
    const observerRibbonContainer = (tabElement) => {
        (new MutationObserver(() => {
            tabTranslate(tabElement);
        })).observe(tabElement.querySelector('.ribbon-container'), {
            "childList": true,
            "subtree": true,
        });
    };

    {
        // 翻译当前已加载的标签页
        const currentLoadedTabElement = document.querySelector('.split-note-container-widget>.note-split:not(.hidden-ext)');
        if (currentLoadedTabElement !== null) {
            tabTranslate(currentLoadedTabElement);
            observerRibbonContainer(currentLoadedTabElement);
            currentLoadedTabElement.setAttribute('data-translation-observed', 'true');
        }
    }

    /**
     * 观察标签页的加载，以进行翻译
     * @param {Element} tabElement
     */
    const observeTab = tabElement => {
        if (tabElement.getAttribute('data-translation-observed') !== 'true') {
            tabElement.setAttribute('data-translation-observed', 'true'); // 每个标签页只翻译一次
            const tabObserver = new MutationObserver((tabMutationRecordList, tabMutationObserver) => {
                for (const tabMutationRecord of tabMutationRecordList) {
                    tabTranslate(tabMutationRecord.target);
                }
                tabMutationObserver.disconnect();
            });
            tabObserver.observe(tabElement, {
                "attributes": true,
                "childList": false,
                "subtree": false,
            });
        }
    };

    {
        // 翻译当前已打开但未加载的标签页
        const currentUnloadedTabElementList = document.querySelectorAll('.split-note-container-widget>.note-split.hidden-ext');
        currentUnloadedTabElementList.forEach(tabElement => {
            observeTab(tabElement);
            observerRibbonContainer(tabElement);
        });
    }


    {
        // 翻译未来打开的标签页
        // 观察标签页容器变化，以发现新开的标签页
        const splitNoteContainerWidgetElement = document.querySelector('.split-note-container-widget');
        if (splitNoteContainerWidgetElement !== null) {
            const splitNoteContainerWidgetObserver = new MutationObserver((tabListMutationRecordList) => {
                for (const mutationRecord of tabListMutationRecordList) {
                    const tabElementList = mutationRecord.target.childNodes;
                    tabElementList.forEach(tabElement => {
                        observeTab(tabElement);
                        observerRibbonContainer(tabElement);
                    });
                }
            });
            splitNoteContainerWidgetObserver.observe(splitNoteContainerWidgetElement, {
                "attributes": false,
                "childList": true,
                "subtree": false,
            });
        }
    }
}

{
    //在关于里面添加翻译者的github链接
    //这可以让您更方便地找到我，并获取最新翻译的更新
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
    if (aboutElement !== null) {
        Array.from(tempContainer.children).forEach(node => aboutElement.append(node));
    }
}
