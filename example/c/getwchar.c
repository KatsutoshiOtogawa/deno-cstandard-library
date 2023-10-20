#include<stdio.h>
#include<wchar.h>
#include <locale.h>


int main()
{
   setlocale(LC_ALL, ""); // ロケールを設定

   int c = getwchar();

   putwchar(c);
   return 0;
}
