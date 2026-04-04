
export interface child_func_type {

    write(str: string): void;

    kill(): void;
}

export type child_func_constructor = new (exit_on:()=>void,send:(str:string)=>void,params:string[]) => child_func_type;