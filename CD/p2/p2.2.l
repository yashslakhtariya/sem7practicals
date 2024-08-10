%{
int word = 0, digit = 0, line = 0, vowel = 0, cons = 0, chars = 0, special = 0;
%}
%%
\n { line++; }
[0-9]+ {
    digit += yyleng;
    chars += yyleng;
}
[a-zA-Z]+ {
    word++;
        for (int i = 0; i < yyleng; i++) {
            chars++;
            char ch = yytext[i];
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
                ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
                vowel++;
            } else {
                cons++;
        }
    }
}
[!@#$%^&*.,;?'"(){}[\]] { special++; chars++; }
. { chars++; }
%%
int yywrap() {}
int main() {
yyin = fopen("ysl2.txt", "r");
yylex();
printf("\n\tCount of lines: %d\n", line+1);
printf("\tCount of words: %d\n", word);
printf("\tCount of digits: %d\n", digit);
printf("\tCount of vowels: %d\n", vowel);
printf("\tCount of consonants: %d\n", cons);
printf("\tCount of special characters: %d\n", special);
printf("\tCount of characters: %d\n", chars);
return 0;
}