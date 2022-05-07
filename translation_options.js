
//更长的单词需要放在页面json的前方，如果短的单词放在前面，由于前面单词先执行替换，会导致后续的长文本无法识别

var translation_options=[
{'searchWord':'Settings on this options tab are saved automatically after each change.','replaceWord': '配置在每次修改后会自动保存.'},
{'searchWord':'Heading style','replaceWord': '标题风格'},
{'searchWord': 'Override theme fonts','replaceWord': '覆盖主题样式'},
   
{'searchWord':'Zoom factor','replaceWord': '缩放系数'},
{'searchWord':'\\(desktop build only\\)','replaceWord': '（仅桌面客户端有效）'},
{'searchWord':'Native title bar','replaceWord': '原生标题栏'},
{'searchWord':'requires app restart','replaceWord': '需要重启'},
{'searchWord':'Zooming can be controlled with ','replaceWord': '缩放可以通过'},
{'searchWord':'shortcuts as well','replaceWord': '快捷控制.'},
{'searchWord':'Theme','replaceWord': '主题'},
    
    {'searchWord':'Main font','replaceWord': '主字体'},
    {'searchWord':'Note tree font','replaceWord': '笔记树字体'},
    {'searchWord':'Note detail font','replaceWord': '笔记详情字体'},
    {'searchWord':'Monospace font','replaceWord': '等宽字体'},
    {'searchWord':'Size','replaceWord': '字体缩放比例'},
    
{'searchWord':'Not all listed fonts may be available on your system.','replaceWord': '并非所有列出的字体在您的系统上都可用。'},
{'searchWord':'Note that tree and detail font sizing is relative to the main font size setting.','replaceWord': '笔记树和详细信息的字体大小调整是相对于主字体大小设置的。'},
{'searchWord':'To apply font changes, click on','replaceWord': '应用字体修改, 请点击'},
{'searchWord':'reload frontend','replaceWord': '重新加载前端'},
    
{'searchWord':'Content width','replaceWord': '内容宽度'},
{'searchWord':'Trilium by default limits max content width to improve readability for maximized screens on wide screens.','replaceWord': 'Trilium默认会限制内容的最大宽度以提高在宽屏中全屏时的可读性.'},
{'searchWord':'Max content width in pixels','replaceWord': '内容最大宽度(像素)'},
{'searchWord':'To content width changes, click on','replaceWord': '修改宽度后, 请点击'},

{'searchWord':'Keyboard shortcuts','replaceWord': '快捷键'},
{'searchWord':'Multiple shortcuts for the same action can be separated by comma.','replaceWord': '同一操作的多个快捷方式可以用逗号隔开.'},
{'searchWord':'Action name','replaceWord': '动作名称'},
{'searchWord':'Default shortcuts','replaceWord': '默认快捷键'},
{'searchWord':'Description','replaceWord': '描述'},
{'searchWord':'Note navigation','replaceWord': '笔记导航'},


{'searchWord':'Use vim keybindings in CodeNotes','replaceWord': '在代码笔记中使用vim按键绑定'},
{'searchWord':'no ex mode','replaceWord':'无ex模式'},
{'searchWord':'Enable Vim Keybindings','replaceWord': '启用vim按键绑定'},
{'searchWord':'Available MIME types in the dropdown','replaceWord': '下拉菜单可用的MIME文件类型'},

{'searchWord':'Password has been reset. Please set new password','replaceWord': '密码已重置. 请设置新密码'},
{'searchWord':'New passwords are not the same.','replaceWord': '新密码不一致'},
{'searchWord':'Password has been changed. Trilium will be reloaded after you press OK.','replaceWord': '密码已被更改. 点击OK后, Trilium会重新加载.'},
{'searchWord':'By resetting the password you will forever lose access to all your existing protected notes. Do you really want to reset the password?','replaceWord': '重置密码会永远丢失所有受保护的笔记. 确定要重置密码吗?'},
{'searchWord':'Set password','replaceWord': '设置密码'},
{'searchWord':'Change password','replaceWord': '修改密码'},
{'searchWord':'New password Confirmation','replaceWord': '新密码确认'},
{'searchWord':'New password','replaceWord': '新密码'},
{'searchWord':'Old password','replaceWord': '旧密码'},

{'searchWord':'Please take care to remember your new password. Password is used to encrypt protected notes.','replaceWord': '请一定要记住你的新密码. 密码被用来加密笔记.'},
{'searchWord':'If you forget your password, then all your protected notes are forever lost.','replaceWord': '如果你忘记了密码, 所有受保护的笔记将永远丢失.'},
{'searchWord':'In case you did forget your password','replaceWord': ' 如果你忘记了密码'},
{'searchWord':'click here to reset it','replaceWord': '点击这里来重置它'},

{'searchWord':'ETAPI is a REST API used to access Trilium instance programmatically, without UI.','replaceWord': 'ETAPI 是一个 REST API, 用于以编程方式访问 Trilium 实例, 无需 UI.'},
{'searchWord':'See more details on','replaceWord': '更多信息请访问'},
{'searchWord':'Existing tokens','replaceWord': '已有令牌'},
{'searchWord':'There are no tokens yet. Click on the button above to create one.','replaceWord': '暂无令牌. 点击上方按钮来创建令牌.'},
{'searchWord':'Token name','replaceWord': '令牌名称'},
{'searchWord':'Created','replaceWord': '创建时间'},
{'searchWord':'Actions','replaceWord': '操作'},
{'searchWord':"Please enter new token's name",'replaceWord': '请输入新令牌的名称'},
{'searchWord':'New ETAPI token','replaceWord': '新的 ETAPI 令牌'},


{'searchWord':'Automatic backup','replaceWord': '自动备份'},
{'searchWord':'Trilium can back up the database automatically:','replaceWord': 'Trilium 可以自动备份数据库:'},
{'searchWord':"It's recommended to keep the backup turned on, but this can make application startup slow with large databases and/or slow storage devices.",'replaceWord': '建议打开备份功能, 但这可能会使大型数据库和/或慢速存储设备的应用程序启动变慢.'},
{'searchWord':'Enable daily backup','replaceWord': '启用每日备份'},
{'searchWord':'Enable weekly backup','replaceWord': '启用每周备份'},
{'searchWord':'Enable monthly backup','replaceWord': '启用每月备份'},
{'searchWord':'Backup database now','replaceWord': '现在备份数据库'},
{'searchWord':'Backup now','replaceWord': '现在备份'},

{'searchWord':"This will test the connection and handshake to the sync server. If the sync server isn't initialized, this will set it up to sync with the local document.",'replaceWord': '测试和同步服务器之间的连接. 如果同步服务器没有初始化, 会将本地文档同步到同步服务器上.'},
{'searchWord':'Sync configuration','replaceWord': '同步设置'},
{'searchWord':'Server instance address','replaceWord': '服务器地址'},
{'searchWord':'Sync timeout ','replaceWord': '同步超时'},
{'searchWord':'Sync proxy server','replaceWord': '同步代理服务器'},
{'searchWord':'If you leave the proxy setting blank, the system proxy will be used ','replaceWord': '代理设置留空则使用系统代理'},
{'searchWord':'Sync test','replaceWord': '同步测试'},
{'searchWord':'Test sync','replaceWord': '测试同步'},

{'searchWord':'Spell check','replaceWord': '拼写检查'},
{'searchWord':'These options apply only for desktop builds, browsers will use their own native spell check. App restart is required after change.','replaceWord': '这些选项只在桌面客户端有效, 浏览器会使用浏览器的拼写检查. 修改设置后需要重启应用.'},
{'searchWord':'Enable spellcheck','replaceWord': '开启拼写检查'},
{'searchWord':'Language code','replaceWord': '语言码'},
{'searchWord':'Multiple languages can be separated by comma','replaceWord': '多个语言可以用逗号分隔，'},
{'searchWord':'Changes to the spell check options will take effect after application restart.','replaceWord': '拼写检查选项的修改将在应用程序重新启动后生效.'},
{'searchWord':'Available language codes','replaceWord': '可用的语言码'},
{'searchWord':'Image compression','replaceWord': '图片压缩'},
{'searchWord':'Enable image compression','replaceWord': '启用图像压缩'},
{'searchWord':'Max width / height of an image in pixels ','replaceWord': '图片的最大像素宽度和高度'},
{'searchWord':'image will be resized if it exceeds this setting','replaceWord': '超过限制会缩放'},
{'searchWord':'JPEG quality ','replaceWord': 'JPEG质量'},
{'searchWord':'10 - worst quality, 100 best quality, 50 - 85 is recommended','replaceWord': '10最低, 100最好, 推荐设置为50-85之间'},
{'searchWord':'Note erasure timeout','replaceWord': '笔记清理超时'},
{'searchWord':'Deleted notes ','replaceWord': '被删除的笔记（包括属性, 修改版本等）只是被标记为"删除", 是可以从"最近笔记"还原的. 过了一段时间这些笔记会被"清理", 被清理的笔记就无法还原了. 这个设置可以用来调整从"删除"到被"清理"的时间间隔.   原文：Deleted notes'},
{'searchWord':'Erase notes after X seconds','replaceWord': '超过X秒后清理笔记'},
{'searchWord':'You can also trigger erasing manually:','replaceWord': '手动执行笔记清理'},
{'searchWord':'Erase deleted notes now','replaceWord': '清理被标记删除的笔记'},

{'searchWord':'Protected session timeout is a time period ','replaceWord': '保护会话超时是从浏览器内存里清除保护会话的间隔, 这个时间从最后一次编辑保护的笔记开始计算.   原文：Protected session  timeout'},
{'searchWord':'Protected session timeout','replaceWord': '保护会话超时'},

{'searchWord':'Note revisions snapshot interval','replaceWord': '笔记修改快照间隔'},
{'searchWord':'Note revision snapshot time interval is time in seconds after which a new note revision will be created for the note. ','replaceWord': '这个是笔记修改后创建快照的时间间隔.'},
{'searchWord':'Note revision snapshot time interval','replaceWord': '笔记修改快照间隔'},
{'searchWord':'Automatic readonly size','replaceWord': '自动只读大小'},
{'searchWord':'Automatic readonly note size is the size after which notes will be displayed in a readonly mode','replaceWord': '笔记超过这个大小将自动以只读模式打开.'},
{'searchWord':'for performance reasons','replaceWord': '性能考虑'},


{'searchWord':'Force full sync','replaceWord': '强制完全同步'},
{'searchWord':'Fill entity changes records','replaceWord': '填充变化记录'},
{'searchWord':'Database integrity check','replaceWord': '数据库完整性检查'},
{'searchWord':'This will check that the database is not corrupted on the SQLite level. It might take some time, depending on the DB size.','replaceWord': '检查SQLite数据库是否未损坏. 根据数据库大小, 可能会需要一些时间.'},
{'searchWord':'Check database integrity','replaceWord': '检查数据库完整性'},
{'searchWord':'Consistency checks','replaceWord': '一致性完整性检查'},
{'searchWord':'Find and fix consistency issues','replaceWord': '查找并解决一致性完整性问题'},
{'searchWord':'Anonymize database','replaceWord': '匿名数据库'},
{'searchWord':'This action will create a new copy of the database and anonymize it','replaceWord': '这会创建一个数据库的副本并匿名化处理'},
{'searchWord':'remove all note content and leave only structure and some non-sensitive metadata','replaceWord': '删除所有笔记内容, 仅保留结构和一些非敏感的元数据信息'},
{'searchWord':'for sharing online for debugging purposes without fear of leaking your personal data.','replaceWord': '用来分享到网上做调试而不用担心泄漏你的个人资料.'},
{'searchWord':'Full anonymization','replaceWord': '完全的匿名化'},
{'searchWord':'Save fully anonymized database','replaceWord': '保存完全匿名的数据库'},
{'searchWord':'Light anonymization','replaceWord': '部分匿名数据库'},
{'searchWord':'This action will create a new copy of the database and do a light anonymization on it - specifically only content of all notes will be removed, but titles and attributes will remaing. Additionally, custom JS frontend/backend script notes and custom widgets will remain. This provides more context to debug the issues.','replaceWord': '此操作将创建数据库的新副本，并对其进行轻微的匿名化——具体来说，只有所有笔记的内容将被删除，但标题和属性将被重新标记。此外，自定义JS前端/后端脚本注释和自定义小部件将保留。这为调试问题提供了更多的上下文。'},
{'searchWord':'You can decide yourself if you want to provide fully or lightly anonymized database. Even fully anonymized DB is very useful, however in some cases lightly anonymized database can speed up the process of bug identification and fixing.','replaceWord':'您可以自行决定是否要提供完全或轻度匿名的数据库。 即使完全匿名化的数据库也非常有用，但在某些情况下，轻度匿名化的数据库可以加快错误识别和修复的过程。'},
{'searchWord':'Save lightly anonymized database','replaceWord': '保存部分匿名的数据库'},

{'searchWord':'Vacuum database','replaceWord': '整理数据库'},
{'searchWord':'This will rebuild the database which will typically result in a smaller database file. No data will be actually changed.','replaceWord': '这会重建数据库, 通常会减少占用空间, 不会删除数据.'},


{'searchWord':'Options','replaceWord': '选项'},
{'searchWord':'Appearance','replaceWord': '外观'},
{'searchWord':'Shortcuts','replaceWord': '快捷键'},
{'searchWord':'Code notes','replaceWord': '代码笔记'},
{'searchWord':'Password','replaceWord': '密码'},
{'searchWord':'Backup','replaceWord': '备份'},
{'searchWord':'Sync','replaceWord': '同步'},
{'searchWord':'Other','replaceWord': '其他'},
{'searchWord':'Advanced','replaceWord': '高级'}

];

function replaceBodyText(searchWord, replaceWord){
    var reg = new RegExp(searchWord, 'g');
    function replaceNode(node){
        node.childNodes.forEach(function(v){
            if(v.nodeName === 'SCRIPT')
                return; //排除<script>标签
            if(!v.hasChildNodes()){
                if(reg.test(v.textContent))
                    v.textContent = v.textContent.replace(reg, replaceWord);
                return;
            }
            replaceNode(v);
        });
    }
     replaceNode(document.querySelector("#options-dialog"));
 
}


function awaitreplaceBodyText(){
      console.log("翻译执行");
      for (var i = 0, l = translation_options.length; i < l; i++) {
           var searchWord=translation_options[i].searchWord;
           var replaceWord=translation_options[i].replaceWord;
           replaceBodyText(searchWord,replaceWord);
      }
}


$("a.dropdown-item.options-button").on('click', function(){
     console.log("0.5s翻译设定");
     setTimeout (awaitreplaceBodyText, 500);
    console.log("1s翻译设定");
     setTimeout (awaitreplaceBodyText, 1000);
    console.log("3s翻译设定");
     setTimeout (awaitreplaceBodyText, 3000);
    console.log("5s翻译设定");
     setTimeout (awaitreplaceBodyText, 5000);
}); 
