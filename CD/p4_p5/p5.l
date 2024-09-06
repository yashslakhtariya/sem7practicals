%{
#include <stdio.h>
int valid=0;
%}

%%

[+-]?[0-9]+                  { printf("Integer: %s\n", yytext); valid++;}

[+-]?[0-9]*\.[0-9]+?          { printf("Float: %s\n", yytext); valid++;}

[+-]?[0-9]*\.[0-9]+([eE][+-]?[0-9]+)?  { printf("Exponential: %s\n", yytext); valid++;}

int|char|float|void|main|if|else|for|else[ ]if|for|scanf|printf { printf("Keywords: %s\n", yytext); valid++;}

"/*"([^*]|\*+[^*/])*\*+"/"    {  }

"//".*                        {  }

[a-zA-Z_][a-zA-Z0-9_]*        { printf("Identifier: %s\n", yytext); valid++;}

\"([^\\\"]|\\.)*\"            { printf("String: %s\n", yytext); valid++;}

[\(\)\[\]\{\}\+\-\*\/\=\>\<\!\&\|\%\^\;\,\.\?]  { printf("Operators/Brackets: %s\n", yytext); valid++;}

\+\+|\-\-|\+=|-=|\*=|\/=|%=|\&=|\|=|\^=|\!=|\==|<=|>=|\&&|\|\| { printf("Operators: %s\n", yytext); valid++; }


\#.*                          { printf("Header: %s\n", yytext); valid++;}

\'([^\\\']|\\.)*\'            { printf("String: %s\n", yytext); valid++;}

\n                            {  }

[ \t]+                        {  }

.                             { printf("Unrecognized Character: %s\n", yytext); }

%%

int yywrap() {
    return 1;
}

int main() {
    printf("\n");
    yyin = fopen("p5.c", "r");
    yylex();
    printf("Valid Tokens: %d\n", valid);
    return 0;
}