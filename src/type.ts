import {PtyShell} from "./index";

export interface child_func_type {

    write(str: string): void;

    kill(): void;

    init(): void;
}

export type child_func_constructor = new (pty_shell:PtyShell,exit_on:()=>void,send:(str:string)=>void,params:string[]) => child_func_type;