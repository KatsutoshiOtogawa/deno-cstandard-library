import { calloc, strcpy, free, puts} from 'https://deno.land/x/msvc@v0.0.7/mod.ts';

// // 8 byte malloc
// let ptr = malloc(8);

// // free ptr;
// free(ptr);

const buf = new TextEncoder().encode("あいうえお");

// 大き目にとる。文章なら1024見たいな取り方をしてもよい。
// 


// 書き込まれる側の文字列用のメモリを確保する。
let s_p = calloc(buf.length, 1);


// @ts-ignore
const s_view = new Deno.UnsafePointerView(s_p);

const s_buf = s_view.getArrayBuffer(buf.length);

strcpy(s_buf, buf)


puts(s_buf);

// new Uint8Array(s_buf);


// メモリの開放。
free(s_p);

