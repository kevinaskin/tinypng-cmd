# Tiny

> Tinypng powered for compressing images by command-line tool

## Usage

```
$ npm install tinypng-cmd -g

$ tiny set <tinypng API key>
$ cd PATH_TO_YOUR_IMAGES_DIR
$ tiny compress .

$ tiny status // check rest free times this month
```
- 申请tinypng API key
- 使用`tiny set <key>`设置key
- 进入图片目录
- 压缩完成后会保存图片到当前目录下的CompressedImages下
- 剩余使用次数可以用`tiny status`查看

### Tips
这个库发布在私有npm上 
如果要下载使用
可以按以下步骤操作
```
$ git clone git@github.com:kevinaskin/tinypng-cmd.git
$ npm link
```

## How to get Tinypng API key

[Tinypng Developer API](https://tinypng.com/developers)

## Bug Report

email: kevinaskin@minus.live
