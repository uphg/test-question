
## 说明

自制随机抽题页面，随机抽取常见的前端面试题（面试题均由个人收集），可以用于测试自己的知识水平~

## 使用方式

在 `src/test.js` 中添加如下格式的数组

```js
[
    {
        title: '类型标题',       // 问题类型名称
        random: 2,              // 是否随机，随机的数量，默认false
        text:[                  // 问题列表
            '问题1',
            '问题2',
            '问题3',
        ]
    }
]
```

## 运行

测试

```sh
parcel ./src/index.html
# 报错运行
parcel ./src/index.html --no-cache
```

打包

```sh
parcel build ./src/index.html --public-url ./
```



