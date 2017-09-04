# WhiteSpace 上下留白

>布局控件

## 代码演示
::: demo

<iframe>http://10.166.3.200:8080/demo.html#/progress</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<script>
// 开始加载
this.$progress.start();
// 结束加载
this.$progress.finish();
</script>
```
:::

## Api

适用平台：Web

## Progress
| 函数名      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| start | 开始从 0 显示进度条，并自动加载进度 | - | - | - |
| finish | 结束进度条，自动补全剩余进度 | - | - | - |
| error | 以错误的类型结束进度条，自动补全剩余进度 | - | - | - |
| update | 精确加载到指定的进度 | Number | percent，指定的进度百分比 | 0 |
