import { puts } from 'https://deno.land/x/cstdio@v0.0.3/mod.ts';

const buf = new TextEncoder().encode("あいうえお");

// 文字列表示
puts(buf);
