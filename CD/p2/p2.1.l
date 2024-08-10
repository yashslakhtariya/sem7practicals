%{
int words = 0,num=0;
%}
 
%%
[a-zA-Z]+ {printf("\n%s is word\n", yytext);
       words++;}
       
[0-9]+ {printf("\n%s is number\n", yytext);
       num++;}

[ \n\t] {printf("\n%s is space\n", yytext);
       }
.     {printf("\n%s not valid token\n", yytext);}
\n    {return 0;}
%%
 
int yywrap(){}

int main(){
 
yyin=fopen("a.txt","r");
yylex();

printf("\nWords = %d \nNumber = %d\n", words,num);
 
return 0;
}
