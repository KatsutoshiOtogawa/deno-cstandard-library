import { getchar } from 'https://deno.land/x/msvc@v0.0.7/mod.ts';


// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 

// 1文字取得する
const c = getchar();


console.log(c);

// String.fromCharCode(c);


const str = String.fromCharCode(c);

console.log(str);
