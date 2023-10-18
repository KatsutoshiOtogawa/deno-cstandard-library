// import { malloc, free, mblen } from 'https://deno.land/x/cstdlib@v0.0.3/mod.ts';


import { fopen, fclose, fgets, puts } from 'https://deno.land/x/cstdio@v0.0.1/mod.ts';
import { calloc, free } from 'https://deno.land/x/cstdlib@v0.0.3/mod.ts';

// // 8 byte malloc
// let ptr = malloc(8);

// // free ptr;
// free(ptr);

const filename = new TextEncoder().encode("/etc/fstab");
const mode = new TextEncoder().encode("r");

const fp = fopen(filename, mode);

// ポインタを取らないと、他のプログラムから
// メモリの書き込みを許していることになる。
// Cの書き込みはCで取得したCからのみ許すべき。
let ptr = calloc(30, 2);

// arrayBuffer
// @ts-ignore
const ptr_view = new Deno.UnsafePointerView(ptr);

const buf = new Uint8Array(ptr_view.getArrayBuffer(60));

// bufに値を入れる。
fgets(buf, 30, fp);

// const dstbuf = new ArrayBuffer(buf.byteLength);

// dstbuf
puts(buf);

free(ptr);

fclose(fp);

// 文字列表示
