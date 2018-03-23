
var fs = require('fs'),
    { shell } = require('electron'),
    { dialog } = require('electron').remote,
    { app } = require('electron').remote,
    { BrowserWindow } = require('electron').remote,
    ver = require('../version'),
    http = require('http');

var path = require('path');

var defaultPath = path.resolve(__dirname, '../files'), isSutoSave = false,curFileName = null;

function readFile(fileName) {
    if (!fileName) return;

    //defaultPath = fileName;
    curFileName = fileName;

    fs.readFile(fileName, 'utf8', function (err, data) {
        var json = JSON.parse(data);
        editor.minder.importJson(json);
    });
}

function writeFile(fileName, content) {
    if (!fileName) return;

    fs.writeFile(fileName, content, function (err) {
        if (err) {
            alert("An error ocurred creating the file " + err.message)
        }
    });
}

function newDialog() {
    if (hasData()) {
        if (confirm('新建文件会覆盖当前文件，是否继续？')) {
            initRoot();
        }
    } else {
        initRoot();
    }
}

function hasData() {
    var nodes = editor.minder.getAllNode().length;
    var rootText = editor.minder.getRoot().data.text;

    return nodes != 1 || rootText != '中心主题';
}

function initRoot() {
    //defaultPath = null;
    curFileName = null;
    editor.minder.importJson({ "root": { "data": { "text": "中心主题" } }, "template": "filetree", "theme": "fresh-blue" });
    editor.minder.select(minder.getRoot(), true);
}

function autoSave(obj) {
    isSutoSave = obj.checked;
}

function openDialog() {
    dialog.showOpenDialog(
        { 
			defaultPath: defaultPath,
			filters: [{ name: 'KityMinder', extensions: ['km'] }] },
        (fileName) => {
            if (!fileName) { return; }

            readFile(fileName[0]);
        }
    );
}

function saveDialog() {
    if (curFileName) {
        var json = editor.minder.exportJson();
        var data = JSON.stringify(editor.minder.exportJson());
        writeFile(curFileName, data);

    } else { saveAsDialog(); }
}

function saveAsDialog() {
	console.log('defaultPath',defaultPath);
    dialog.showSaveDialog(
        {
            title: "保存 KityMinder 文件",
            defaultPath: defaultPath,
            filters: [{ name: 'KityMinder', extensions: ['km'] }]
        },
        (fileName) => {
            if (!fileName) { return; }// cancel save

            curFileName = fileName;

            var json = editor.minder.exportJson();
            var data = JSON.stringify(editor.minder.exportJson());
            writeFile(fileName, data);
        }
    );
}

function exportDialog() {
    var filters = [];
    var pool = kityminder.data.getRegisterProtocol();
    for (var name in pool) {
        if (pool.hasOwnProperty(name) && pool[name].encode) {
            filters.push({ name: pool[name].fileDescription, extensions: [pool[name].fileExtension.replace('.', '')] });
        }
    }

    dialog.showSaveDialog(
        {
            title: "导出 KityMinder 文件",
            filters: filters
        },
        (fileName) => {
            if (!fileName) { return; }// cancel export

            var ext = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
            var protocol = null;
            var pool = kityminder.data.getRegisterProtocol();
            for (var name in pool) {
                if (pool.hasOwnProperty(name) && pool[name].encode) {
                    if (pool[name].fileExtension === ext) {
                        protocol = pool[name];
                        break;
                    }
                }
            }

            exportFile(protocol, fileName)
        }
    );
}

function exitApp() {
    app.quit();
}

function redo() {
    editor.history.redo();
}

function undo() {
    editor.history.undo();
}

function cut() {
    minder.execCommand('Cut');
}

function copy() {
    minder.execCommand('Copy');
}

function paste() {
    minder.execCommand('Paste');
}

function maxwin() {
    BrowserWindow.getAllWindows()[0].maximize();
}

function minwin() {
    BrowserWindow.getAllWindows()[0].minimize();
}
function showDev() {
    BrowserWindow.getAllWindows()[0].webContents.openDevTools();
	//win.webContents.openDevTools()
}
function openDir() {
	if(curFileName){
		shell.showItemInFolder(curFileName);
	} else {
		shell.showItemInFolder(defaultPath);
	}
    
}

function license() {
    shell.openExternal("https://github.com/topcss/DesktopNaotu")
}

function checkVersion() {
    $.get('https://raw.githubusercontent.com/topcss/DesktopNaotu/master/version.js', function (data) {

        var newVer = data.substring(19, data.lastIndexOf(','));
        var oldVer = ver.version.slice(0, 3).join(', ');

        if (newVer != oldVer) {
            alert('检测到新版本，请下载新版本。');
            shell.openExternal("https://github.com/topcss/DesktopNaotu");
        } else {
            alert('当前没有可用的更新。');
        }

    });
}

function about() {
    var text = `
Copyright (c) 2017 Jack

版本： v${ver.version.join('.')}
QQ 讨论群：330722928
需要下载百度脑图文件，请点击：查看帮助
    `;
    dialog.showMessageBox({ type: "info", title: "桌面版脑图", message: text, buttons: ["OK"] });
}

function shortcut() {
    var shortcutKeys = [
        {
            groupName: '节点操作',
            groupItem: [
                { key: "Enter", desc: " 插入兄弟节点" },
                { key: "Tab, Insert", desc: " 插入子节点" },
                { key: "Shift + Tab", desc: " 插入父节点" },
                { key: "Delete", desc: " 删除节点" },
                { key: "Up, Down, Left, Right", desc: " 节点导航" },
                { key: "Alt + Up, Down", desc: " 向上/向下调整顺序" },
                { key: "/", desc: " 展开/收起节点" },
                { key: "F2", desc: " 编辑节点" },
                { key: "Shift + Enter", desc: " 文本换行" },
                { key: "Ctrl + A", desc: " 全选节点" },
                { key: "Ctrl + C", desc: " 复制节点" },
                { key: "Ctrl + X", desc: " 剪切节点" },
                { key: "Ctrl + V", desc: " 粘贴节点" },
                { key: "Ctrl + B", desc: " 加粗" },
                { key: "Ctrl + I", desc: " 斜体" },
                { key: "Ctrl + F", desc: " 查找节点" }
            ]
        }, {
            groupName: '视野控制',
            groupItem: [
                //{ key:"Ctrl + ESC",desc:" 全屏切换"},
                { key: "Alt + 拖动, 右键拖动", desc: " 拖动视野" },
                { key: "滚轮, 触摸板", desc: " 移动视野" },
                //{ key:"Ctrl + Up, Down, Left, Right",desc:" 视野导航"},
                { key: "空白处双击, Ctrl + Enter", desc: " 居中根节点" },
                { key: "Ctrl + +, -", desc: " 放大/缩小视野" }
            ]
        }, {
            groupName: '文件操作',
            groupItem: [
                { key: "Ctrl + O", desc: " 打开" },
                { key: "Ctrl + S", desc: " 保存" },
                { key: "Ctrl + Shift + S", desc: " 另存为" },
                // { key: "Ctrl + Alt + S", desc: " 分享" }
            ]
        }, {
            groupName: '布局',
            groupItem: [
                { key: "Ctrl + Shift + L", desc: " 整理布局" }
            ]
        }, {
            groupName: '后悔药',
            groupItem: [
                { key: "Ctrl + Z", desc: " 撤销" },
                { key: "Ctrl + Y", desc: " 重做" }
            ]
        }
    ];

    var text = "";
    for (var i = 0; i < shortcutKeys.length; i++) {
        var group = shortcutKeys[i];
        text += `\n` + group.groupName + `\n`;
        for (var j = 0; j < group.groupItem.length; j++) {
            var item = group.groupItem[j];
            text += `       ` + item.desc + `   ` + item.key + `\n`;
        }
    }

    dialog.showMessageBox({ type: "none", title: "快捷键", message: text, buttons: ["OK"] });
}

function exportFile(protocol, filename) {
    var options = {
        download: true,
        filename: filename
    };

    minder.exportData(protocol.name, options).then(function (data) {
        switch (protocol.dataType) {
            case 'text':
                writeFile(filename, data);
                break;
            case 'base64':
                var base64Data = data.replace(/^data:image\/\w+;base64,/, "");
                var dataBuffer = new Buffer(base64Data, 'base64');

                writeFile(filename, dataBuffer);
                break;
            case 'blob':
                break;
        }

        return null;
    });
}
// window.$ = window.jQuery = require('../bower_components/jquery/dist/jquery.min.js');
window.$ = window.jQuery = require('./js/jquery.min.js');

var remote = require('electron').remote,
    argv = remote.getGlobal('sharedObject').prop1;

angular.module('kityminderDemo', ['kityminderEditor']).config(function (configProvider) {
    configProvider.set('imageUpload', '../server/imageUpload.php');

    if (argv.length >= 2) {
        let filePath = argv[1];

        //open, read, handle file
        if (filePath.indexOf('km') > -1) {
            readFile(filePath);
        }
    }

}).controller('MainController', function ($scope, $modal) {
    $scope.initEditor = function (editor, minder) {
        window.editor = editor;
        window.minder = minder;
    };
});

window.$(function () {
    if (minder != null) {// auto saving
		/*
        minder.on('contentchange', function () {
            if (isSutoSave) {
                saveDialog();
            }
        });
		

        minder.on('selectionchange', function () {
            var node = minder.getSelectedNode();

            // 对编辑菜单进行管理
            menu.items[1].submenu.items[3].enabled =
                menu.items[1].submenu.items[4].enabled =
                menu.items[1].submenu.items[5].enabled = !!node;

        });
		*/
        window.addEventListener('keydown',function(e) {
         if(e && e.metaKey ){   //同时按下Alt+s
                 console.log('meta')
                 switch (e.key) {
                         case 'o':
                             openDialog();
                          break;
                         case 'n':
                             initRoot();
                          break;
                         case 's':
                                 saveDialog();
                          break;
                         case 'e':
                             exportDialog();
                          break;
                         default:
                                 
                 }

                }
                    },true)
    }
});
var remote = require('electron').remote;
var Menu = remote.Menu;

var template = [{
    label: '文件(&F)',
    submenu: [
        {
            label: '新建文件(&N)',
            accelerator: 'CmdOrCtrl+N',
            click: initRoot
        },
        {
            label: '打开文件(&O)',
            accelerator: 'CmdOrCtrl+O',
            click: openDialog
        },
        { type: 'separator' },
        {
            label: '保存(&S)',
            accelerator: 'CmdOrCtrl+S',
            click: saveDialog
        },
        {
            label: '另存为(&A)...',
            accelerator: 'CmdOrCtrl+Shift+S',
            click: saveAsDialog
        },
        {
            label: '导出(&E)...',
            accelerator: 'CmdOrCtrl+E',
            click: exportDialog
        },
        { type: 'separator' },
        {
            label: '自动保存',
            type: 'checkbox',
            checked: false,
            click: autoSave
        },
        { type: 'separator' },
        {
            label: '退出(&X)',
            click: exitApp
        }
    ]
}, {
    label: "编辑(&E)",
    submenu: [
        {
            label: "撤销(&U)",
            accelerator: 'CmdOrCtrl+Z',
            click: undo,
            selector: 'undo:'
        },
        {
            label: "恢复(&R)",
            accelerator: 'CmdOrCtrl+Y',
            click: redo,
            selector: 'redo:'
        },
        { type: 'separator' },
        {
            label: "剪切(&T)",
            accelerator: 'CmdOrCtrl+X',
            click: cut,
            selector: 'cut:'
        },
        {
            label: "复制(&C)",
            accelerator: 'CmdOrCtrl+C',
            click: copy,
            selector: 'copy:'
        },
        {
            label: "粘贴(&P)",
            accelerator: 'CmdOrCtrl+V',
            click: paste,
            selector: 'paste:'
        }
    ]
}, {
    label: "窗口(&W)",
    submenu: [
		{
            label: 'DEV',
            accelerator: 'CmdOrCtrl+Shift+i',
            click: showDev
        },
		{
            label: '文件的目录',
            accelerator: 'CmdOrCtrl+Shift+o',
            click: openDir
        },
        {
            label: '最大化(&X)',
            click: maxwin
        },
        {
            label: '最小化(&N)',
            click: minwin
        }
    ]
}, {
    label: "帮助(&H)",
    submenu: [
        {
            label: '快捷键(&H)...',
            accelerator: 'CmdOrCtrl+/',
            click: shortcut
        },
        { type: 'separator' },
        { label: "查看帮助(&V)", click: license },
        { label: "检查更新...(&N)", click: checkVersion },
        { type: 'separator' },
        { label: "关于(&A)", click: about }
    ]
}];

 if (process.platform !== 'darwin') {
	var menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
 }


// 允许通过拖拽打开文件 
var body = document.body;

body.ondrop = function (e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    if (!file.name.toLowerCase().endsWith(".km")) {
        alert("加载文件失败！只允许打开.km格式的文件！")
        return false;
    }

    readFile(file.path);

    return false;
};

body.ondragover = body.ondragleave = body.ondragend = function () {
    return false;
};
/**
 * @fileOverview FreeMind 文件格式支持
 *
 * Freemind 文件后缀为 .mm，实际上是一个 XML 文件
 * @see http://freemind.sourceforge.net/
 */
kityminder.data.registerProtocol('freemind', function (minder) {
    // 标签 map
    var markerMap = {
        'full-1': ['priority', 1],
        'full-2': ['priority', 2],
        'full-3': ['priority', 3],
        'full-4': ['priority', 4],
        'full-5': ['priority', 5],
        'full-6': ['priority', 6],
        'full-7': ['priority', 7],
        'full-8': ['priority', 8]
    };

    function processTopic(topic, obj) {

        //处理文本
        obj.data = {
            text: topic.TEXT
        };
        var i;

        // 处理标签
        if (topic.icon) {
            var icons = topic.icon;
            var type;
            if (icons.length && icons.length > 0) {
                for (i in icons) {
                    type = markerMap[icons[i].BUILTIN];
                    if (type) obj.data[type[0]] = type[1];
                }
            } else {
                type = markerMap[icons.BUILTIN];
                if (type) obj.data[type[0]] = type[1];
            }
        }

        // 处理超链接
        if (topic.LINK) {
            obj.data.hyperlink = topic.LINK;
        }

        //处理子节点
        if (topic.node) {

            var tmp = topic.node;
            if (tmp.length && tmp.length > 0) { //多个子节点
                obj.children = [];

                for (i in tmp) {
                    obj.children.push({});
                    processTopic(tmp[i], obj.children[i]);
                }

            } else { //一个子节点
                obj.children = [{}];
                processTopic(tmp, obj.children[0]);
            }
        }
    }

    function xml2km(xml) {
        var json = $.xml2json(xml);
        var result = {};
        processTopic(json.node, result);
        return result;
    }

    return {
        fileDescription: 'Freemind 格式',
        fileExtension: '.mm',
        dataType: 'text',

        decode: function (local) {
            return new Promise(function (resolve, reject) {
                try {
                    resolve(xml2km(local));
                } catch (e) {
                    reject(new Error('XML 文件损坏！'));
                }
            });
        },

        encode: function (json, km, options) {
            // var url = 'native-support/export.php';

            return (
              '<map version="1.0.1">\n' +
                '<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->\n' +
                genTopic(json.root) +
              '</map>\n'
            );

            function genTopic (root) {
              var data = root.data;
              var attrs = [
                ['CREATED', data.created],
                ['ID', data.id],
                ['MODIFIED', data.created],
                ['MODIFIED', data.created],
                ['TEXT', data.text],
                ['POSITION', data.position]
              ];
              return (
                '<node' + genAttrs(attrs) + '>\n' +
                  (root.children ? root.children.map(genTopic).join('\n') : '') +
                  (data.priority ? ('<icon BUILTIN="full-' + data.priority +'"/>\n') : '') +
                  (data.image ? (
                    '<richcontent TYPE="NODE"><html><head></head><body>\n' +
                      '<img' + genAttrs([['src', data.image], ['width', data.imageSize.width], ['height', data.imageSize.height]]) + '/>\n' +
                    '</body></html></richcontent>\n'
                  ) : '') +
                '</node>\n'
              );
            }

            function genAttrs (pairs) {
              return pairs.map(function (x) {
                return x[1] ? (' ' + x[0] + '="' + x[1] + '"') : ''
              }).join('');
            }

            // function fetch() {
            //     return new Promise(function(resolve, reject) {
            //         var xhr = new XMLHttpRequest();
            //         xhr.open('POST', url);

            //         xhr.responseType = 'blob';
            //         xhr.onload = resolve;
            //         xhr.onerror = reject;

            //         var form = new FormData();
            //         form.append('type', 'freemind');
            //         form.append('data', data);

            //         xhr.send(form);
            //     }).then(function(e) {
            //         return e.target.response;
            //     });
            // }

            // function download() {
            //     var filename = options.filename || 'freemind.mm';

            //     var form = document.createElement('form');
            //     form.setAttribute('action', url);
            //     form.setAttribute('method', 'POST');
            //     form.appendChild(field('filename', filename));
            //     form.appendChild(field('type', 'freemind'));
            //     form.appendChild(field('data', data));
            //     form.appendChild(field('download', '1'));
            //     document.body.appendChild(form);
            //     form.submit();
            //     document.body.removeChild(form);

            //     function field(name, content) {
            //         var input = document.createElement('input');
            //         input.type = 'hidden';
            //         input.name = name;
            //         input.value = content;
            //         return input;
            //     }
            // }

            // if (options && options.download) {
            //     return download();
            // } else {
            //     return fetch();
            // }
        }
    };

} ());

/* global zip:true */
/*
    http://www.mindjet.com/mindmanager/
    mindmanager的后缀为.mmap，实际文件格式是zip，解压之后核心文件是Document.xml
*/
kityminder.data.registerProtocol('mindmanager', function (minder) {

    // 标签 map
    var markerMap = {
        'urn:mindjet:Prio1': ['PriorityIcon', 1],
        'urn:mindjet:Prio2': ['PriorityIcon', 2],
        'urn:mindjet:Prio3': ['PriorityIcon', 3],
        'urn:mindjet:Prio4': ['PriorityIcon', 4],
        'urn:mindjet:Prio5': ['PriorityIcon', 5],
        '0': ['ProgressIcon', 1],
        '25': ['ProgressIcon', 2],
        '50': ['ProgressIcon', 3],
        '75': ['ProgressIcon', 4],
        '100': ['ProgressIcon', 5]
    };

    function processTopic(topic, obj) {
        //处理文本
        obj.data = {
            text: topic.Text && topic.Text.PlainText || ''
        }; // 节点默认的文本，没有Text属性

        // 处理标签
        if (topic.Task) {

            var type;
            if (topic.Task.TaskPriority) {
                type = markerMap[topic.Task.TaskPriority];
                if (type) obj.data[type[0]] = type[1];
            }

            if (topic.Task.TaskPercentage) {
                type = markerMap[topic.Task.TaskPercentage];
                if (type) obj.data[type[0]] = type[1];
            }
        }

        // 处理超链接
        if (topic.Hyperlink) {
            obj.data.hyperlink = topic.Hyperlink.Url;
        }

        //处理子节点
        if (topic.SubTopics && topic.SubTopics.Topic) {

            var tmp = topic.SubTopics.Topic;
            if (tmp.length && tmp.length > 0) { //多个子节点
                obj.children = [];

                for (var i in tmp) {
                    obj.children.push({});
                    processTopic(tmp[i], obj.children[i]);
                }

            } else { //一个子节点
                obj.children = [{}];
                processTopic(tmp, obj.children[0]);
            }
        }
    }

    function xml2km(xml) {
        var json = $.xml2json(xml);
        var result = {};
        processTopic(json.OneTopic.Topic, result);
        return result;
    }

    function getEntries(file) {
        return new Promise(function (resolve, reject) {
            zip.createReader(new zip.BlobReader(file), function (zipReader) {
                zipReader.getEntries(resolve);
            }, reject);
        });
    }

    function readMainDocument(entries) {

        return new Promise(function (resolve, reject) {

            var entry, json;

            // 查找文档入口
            while ((entry = entries.pop())) {

                if (entry.filename.split('/').pop() == 'Document.xml') break;

                entry = null;

            }

            // 找到了读取数据
            if (entry) {

                entry.getData(new zip.TextWriter(), function (text) {
                    json = xml2km($.parseXML(text));
                    resolve(json);
                });

            }

            // 找不到返回失败
            else {
                reject(new Error('Main document missing'));
            }

        });
    }

    return {
        fileDescription: 'MindManager 格式',
        fileExtension: '.mmap',
        dataType: 'blob',

        decode: function (local) {
            return getEntries(local).then(readMainDocument);
        },

        // 暂时不支持编码
        encode: null,

        recognizePriority: -1
    };
} ());
