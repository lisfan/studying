const a = {
  "source": { // 需导出的API源解析
    "include": [],// 应该被解析的文件
    "exclude": [],// 不应该被解析的文件
    "includePattern": ".+\\.js(doc)?$",// 只有以.js和.jsdoc结尾的文件将会被处理
    "excludePattern": "(^|\\/|\\\\)_" /* 任何文件以下划线开始或开始下划线的目录都将被忽略*/
  },
  "tags": {
    "allowUnknownTags": true, // 允许未知标签
    "dictionaries": [     // 采用 JSDoc 标签
      "jsdoc"
    ]
  },
  "templates": {
    "cleverLinks": true, // @link标签呈现在纯文本
    "monospaceLinks": true, // @link标签使用等宽字体
    "default": {
      "useLongnameInNav": true, // 在导航栏显示长文件名
      "outputSourceFiles": false, // 输出是否包含源码
      "includeDate": true, // 在页脚显示生成日期
      "staticFiles": { // 静态文件复制
        "include": [],
        "exclude": [],
        "includePattern": null,
        "excludePattern": null
      }
    }
  },

  "plugins": [ // 使用插件
    "plugins/markdown"
  ],
  "markdown": { // markdown插件扩展
    "hardwrap": true,
    "idInHeadings": true,
    "tags": [
      "author",
      "classdesc",
      "description",
      "param",
      "property",
      "returns",
      "see",
      "throws",
    ],
    "excludeTags": []
  },
  "docdash": {
    "static": true,
    "sort": false
  },
  "opts": { // cli选项
    "template": "node_modules/minami",
    "readme": "README.md",
    "encoding": "utf8",
    "tutorials": "./tutorials",
    "destination": "./docs/",
    "recurse": true
  }
}