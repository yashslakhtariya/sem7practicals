%{
    #include "p9.tab.h"
%}

%%

"int"          { return INT; }
"float"        { return FLOAT; }
"char"         { return CHAR; }
[ \t\n]+       ;  /* Ignore whitespace */
[a-zA-Z_][a-zA-Z0-9_]*  { return ID; }
";"            { return SEMICOLON; }
","            { return COMMA; }

%%

int yywrap(void) {
    return 1;
}
