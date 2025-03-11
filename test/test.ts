import path from "path";
import {exec_type, PtyShell} from "../src";

const green = '\x1b[32m';  // 绿色
const blue = '\x1b[34m';   // 蓝色
const reset = '\x1b[0m';   // 重置颜色
const on_prompt_call = (cwd)=>{
    // 输出格式化的命令提示符
    const p = path.basename(cwd);
    const c = `${green}${"okk"}${reset}:${blue}${p}${reset}:# `;
    const len = PtyShell.get_full_char_num(`${"okk"}:${p}:# `); // 计算纯字符
    return {str:c,char_num:len};
};
const ptyShell = new PtyShell({
    cols: 200,
    rows: 300,
    cwd: __dirname,
    node_pty:undefined,
    node_pty_shell_list: [],
    env:{},
    on_call:(data)=>{
        console.log(data)
    },
    on_prompt_call
});
ptyShell.write("cd .. \r");

