import { getchar } from 'https://deno.land/x/cstdio@v0.0.3/mod.ts';


// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 

// 1文字取得する
const c = getchar();


console.log(c);

// String.fromCharCode(c);


// ascii
let str = String.fromCharCode(c);
console.log(str);
// Unicode
 str = String.fromCodePoint(c);

console.log(str);
