/*** Definition Section has one variable
which can be accessed inside yylex()
and main() ***/
%{
int words = 0,num=0;
%}
 
%%
[a-zA-Z]+ {printf("%s is word\n", yytext);
       words++;}
       
[0-9]+ {printf("%s is number\n", yytext);
       num++;}

[ \n\t] {printf("%s is space\n", yytext);
       }
.     {printf("%s not valid token\n", yytext);}
\n    {return 0;}
%%
 
int yywrap(){}

int main(){
 
yyin=fopen("a.txt","r");
yylex();

printf("\nwords = %d Number = %d\n", words,num);
 
return 0;
}
