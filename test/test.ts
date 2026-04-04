import * as path from "path";
import {exec_type, PtyShell} from "../src";
import {CharUtil} from "../src/char.util";

const green = '\x1b[32m';  // 绿色
const blue = '\x1b[34m';   // 蓝色
const reset = '\x1b[0m';   // 重置颜色
const on_prompt_call = (cwd)=>{
    // 输出格式化的命令提示符
    const p = path.basename(cwd);
    const c = `${green}${"okk"}${reset}:${blue}${p}${reset}:# `;
    const len = CharUtil.get_full_char_num(`${"okk"}:${p}:# `); // 计算纯字符
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
// ptyShell.cmd_replace = async (exe,params)=>{
//     if(exe === "ok1") {
//         exe = "cd"
//     }
//     return {exe_cmd: exe,params}
// }
// ptyShell.add_cmd_handle("okk",async (params,send)=>{
//     send("okk")
// })
//
//
// ptyShell.write("ok1 .. \r").then(()=>{
//     // console.log(ptyShell)
// });
// ptyShell.write("okk  \r")

class atest {
    exit
    print
    constructor(exit:()=>void,print:(str: string) => void,params:string[]) {
        this.exit = exit;
        this.print = print;
        this.print("新程序")
        this.exit()
    }

    write(str: string) {

    }

    kill(){

    }

}
ptyShell.add_js_child("aaa",atest)

ptyShell.write("aaa \r")
// ptyShell.write("aaann \r")
// ptyShell.write(" ls \r")