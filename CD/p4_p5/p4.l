%{
#include <stdio.h>
%}

%%

[+-]?[0-9]+                  { printf("Integer: %s\n", yytext); }

[+-]?[0-9]*\.[0-9]+?  { printf("Float: %s\n", yytext); }

[+-]?[0-9]*\.[0-9]+([eE][+-]?[0-9]+)?  { printf("Exponential: %s\n", yytext); }

"/*"([^*]|\*+[^*/])*\*+"/"    { printf("Comment: %s\n", yytext); }

"//".*                        { printf("Comment: %s\n", yytext); }

[a-zA-Z_][a-zA-Z0-9_]*        { printf("Valid Token: %s\n", yytext); }

\"([^\\\"]|\\.)*\"            { printf("Valid Token: %s\n", yytext); }

[\(\)\[\]\{\}\+\-\*\/\=\>\<\!\&\|\%\^\;\,\.\?]  { printf("Valid Token: %s\n", yytext); }

\"  { printf("Valid Token: %s\n", yytext); }

\'  { printf("Valid Token: %s\n", yytext); }

\n  {  }

[ \t]+ {  }

.  { printf("Unrecognized Character: %s\n", yytext); }

%%

int yywrap() {
    return 1;
}

int main() {
    printf("\n");
    yyin = fopen("p4", "r");
    yylex();
    return 0;
}

