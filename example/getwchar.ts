import { getwchar } from 'https://deno.land/x/cstdio@v0.0.3/mod.ts';


// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 

// 1文字取得する
const c = getwchar();


console.log(c);

// String.fromCharCode(c);


const str = String.fromCodePoint(c);
// const str = String.fromCodePoint(c);


console.log(str);

console.log(String.fromCodePoint(12354));