
export class CharUtil {
    // 判断一个字符是全角还是半角
    public static isFullCharWidth(char) {
        // 计算字符的 UTF-8 编码字节长度
        const byteLength = Buffer.byteLength(char, 'utf8');

        // 如果字符的字节长度大于 1，说明是全角字符
        return byteLength > 1;
    }

    // 从start_index往前多少个位置获取指定数量的 半角 字符(宽字符算两个)
    public static readFullCharIndex(str: string, start_index: number, len: number) {
        if (!str) return 0;
        if (start_index >= str.length) return 0;
        let num = 0;
        let char_num = 0;
        for (let i = start_index; i < str.length; i++) {
            if (this.isFullCharWidth(str[i])) {
                num += 2;
            } else {
                num++;
            }
            char_num++;
            if (num >= len) return char_num;
        }
        return char_num;
    }

    // 获取字符串中有多少个 字符（将宽字符统计成两个)
    public static get_full_char_num(str: string) {
        if (!str) return 0;
        let char_num = 0;
        for (let i = 0; i < str.length; i++) {
            if (this.isFullCharWidth(str[i])) {
                char_num += 2;
            } else {
                char_num++;
            }
        }
        return char_num;
    }
}