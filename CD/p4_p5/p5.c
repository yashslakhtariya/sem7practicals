#include <stdio.h>
#include <conio.h>

void main()
{
    // Declaration of variable
    int a, b = 1000, c, i = 10;
    char x, y;
    char a = 'x';
    float p = 10.2, q = 20.5;
    scanf("%d %d", &a, &b);
    /*
    Addition of Two number
    */
    c = a + b;
    printf("Sum:%d", c);

    // Comment1
    if (a > b)
    {
        printf("a is max");
    }
    else
    {
        printf("b is max");
    }
    a = b++ + c++;
    a += b;
    b = c && a;

    // print 1 to 100

    for (i = 1; i < 100; i++)
    {
        printf("%d", i);
    }
}