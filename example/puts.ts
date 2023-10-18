// import { malloc, free, mblen } from 'https://deno.land/x/cstdlib@v0.0.3/mod.ts';

import { puts } from "../puts/puts.ts";

// // 8 byte malloc
// let ptr = malloc(8);

// // free ptr;
// free(ptr);

const buf = new TextEncoder().encode("あいうえお");

// 文字列表示
puts(buf);
