# deno-cstandard-library

deno c compatible standard library

It does not require any installation other than deno, and works in any environment supported by deno.
By actually using the C shared library, C functions are called.

This library can be used for the following learning and verification purposes:
(以下の学習や検証用途に使える)

- Relationship between Arraybuffer, Uint8Array and lower layers
- How to call and manage ff
- Management of C-derived UnsafePointer


Notes.
Memory allocation and release is optimistic. It cannot withstand a hard environment.
If you need something hard, you should write using Rust or Go.

MacOS is not yet supported.

各関数の具体的な使い方例がここに書かれているので参考にしてください。

deno-msvc windowsのCライブラリ
deno-cstdlib windows, linux, macのstdlib.hの関数軍
deno-cstdio windows, linux, macのstdio.hの関数軍
deno-cstring 
deno-csignal
deno-cthread
deno-cerror
deno-ctime
