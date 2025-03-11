# pty-shell
This is a virtual PTY shell that can be used to filter or log executable commands. It can also be used in a browser environment. Currently, it does not support features like piping. It supports the use of `node-pty`. For more usage examples, you can refer to the code in the [filecat](https://github.com/xiaobaidadada/filecat) project.
It needs to be used in combination with projects similar to xterm.js.
这是一个虚拟的pty shell ，可以用来过滤或者记录可执行命令， 并可以用于浏览器环境， 目前并不支持管道等功能，支持使用 node-pty ，更多使用例子目前可以参考 filecat(https://github.com/xiaobaidadada/filecat)项目中的代码 。 
需要配合  xterm.js 类似的项目组合使用
# Sample Example
```js
import {PtyShell} from "pty-shell";

const ptyShell = new PtyShell({
    cols: 200,
    rows: 300,
    cwd: __dirname,
    node_pty:undefined,
    node_pty_shell_list: [],
    env:{},
    on_call:(data)=>{
        console.log(data)
    }
});
ptyShell.write("cd .. \r");

```

# supports
1. commands auto-completion 
2. command and parameter interception and filtering
3. browser environment
4. use node-pty 
5. operations such as command, select all, move, select, etc., similar to those in PowerShell.