# fis-optimizer-html-minifier

A optimizer for fis to compress html by using html-minifier.

## 使用方式 

在fis中默认内置

## 配置

在配置文件(默认fis-conf.js)配置 `fis.config.set('settings.optimizer.html-minifier', option)`

eg:

```javascript
fis.config.set('settings.optimizer.html-minifier', {
    'keepBreaks': true
});
```

FIS3:
```js
fis
.match('*.html', {
    optimizer: fis.plugin('html-minifier',{
        //option
    })
})
```

`option` 全部参数可参见[html-minifier](https://github.com/kangax/html-minifier)

