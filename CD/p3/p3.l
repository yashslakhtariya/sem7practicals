%{
#include <stdio.h>
#include <stdlib.h>

#define MAXSTACK 1000

// Stack implementation
char stack[MAXSTACK];
int top = -1;

void push(char c) {
    if (top >= MAXSTACK - 1) {
        printf("Stack overflow\n");
        exit(1);
    }
    stack[++top] = c;
}

char pop() {
    if (top == -1) {
        return '\0'; // Return null character if stack is empty
    }
    return stack[top--];
}

int isEmpty() {
    return top == -1;
}

void check_balance() {
    if (isEmpty()) {
        printf("\n\tValid parentheses\n");
    } else {
        printf("\n\tNot valid parentheses\n");
    }
    exit(0);
}

int yywrap(void) {
    check_balance();
    return 1;
}
%}

%%

"(" { push('('); }
")" {
    if (isEmpty() || pop() != '(') {
        printf("\n\tNot valid parentheses\n");
        exit(0);
    }
}
"{" { push('{'); }
"}" {
    if (isEmpty() || pop() != '{') {
        printf("\n\tNot valid parentheses\n");
        exit(0);
    }
}
"[" { push('['); }
"]" {
    if (isEmpty() || pop() != '[') {
        printf("\n\tNot valid parentheses\n");
        exit(0);
    }
}
\n { check_balance(); }
. ; // Ignore any characters other than brackets, braces, and parentheses

%%

int main(void) {
    printf("\n\tEnter text: ");
    yylex();
    return 0;
}
