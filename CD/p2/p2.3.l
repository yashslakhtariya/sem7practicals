%{
    int state = 0;
%}

%%

abb { printf("%s : Matched abb\n", yytext); state = 1; }
a*b+ { if (state == 0) printf("%s : Matched a*b+\n", yytext); state = 2; }
a { if (state == 0) printf("%s : Matched a\n", yytext); state = 3; }
[ab]+ { printf("%s : Invalid input\n", yytext); state = -1; }
\n { state = 0; }

%%

int yywrap() {
    return 1;
}

int main() {
    yyin = fopen("ysl3.txt", "r");
    printf("\n");
    yylex();
    return 0;
}