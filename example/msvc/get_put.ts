import { getchar, putchar } from 'https://deno.land/x/msvc@v0.0.7/mod.ts';


// 見つけたら終了する文字
const end = ';'.charCodeAt(0);

console.log(';を実行するまで無限に文字を入力できる。');
while (true) {

  let c = getchar();
  if (c === end) {
    break;
  }

  putchar(c);

}