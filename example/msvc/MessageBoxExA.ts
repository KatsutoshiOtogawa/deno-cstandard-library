import { calloc, MessageBoxExA, free, mbstowcs, _putws } from 'https://deno.land/x/msvc@v0.0.6/mod.ts';
import { MB_YESNO  } from 'https://deno.land/x/msvc@v0.0.6/MessageBoxEx/Define.ts';

// // 8 byte malloc
// let ptr = malloc(8);

// // free ptr;
// free(ptr);

const mbbuf = new TextEncoder().encode("abcdef");

// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 


console.log(mbbuf.length);

// let wchar_size = 2
let wchar_p = calloc(mbbuf.length, 1);
// これも大き目でよい。
let size = 1024;

console.log(mbbuf);

const aaa = mbstowcs(wchar_p, mbbuf, mbbuf.length);

console.log(aaa);

// @ts-ignore
const wchar_view = new Deno.UnsafePointerView(wchar_p);

const buf = wchar_view.getArrayBuffer(mbbuf.length);

console.log(buf);

MessageBoxExA(
    null,
    wchar_p,
    null,
    MB_YESNO,
    0
)

free(wchar_p);

