kywrds = {
    "auto", "break", "case", "char", "const", "continue", "default", "do", "double", "else",
    "enum", "extern", "float", "for", "goto", "if", "inline", "int", "long", "register",
    "restrict", "return", "short", "signed", "sizeof", "static", "struct", "switch", "typedef",
    "union", "unsigned", "void", "volatile", "while", "_Alignas", "_Alignof", "_Atomic",
    "_Bool", "_Complex", "_Decimal128", "_Decimal32", "_Decimal64", "_Generic", "_Imaginary",
    "_Noreturn", "_Static_assert", "_Thread_local", "asm", "bool", "catch", "class", "const_cast",
    "delete", "dynamic_cast", "explicit", "export", "false", "friend", "mutable", "namespace",
    "new", "operator", "private", "protected", "public", "reinterpret_cast", "static_assert",
    "template", "this", "thread_local", "throw", "true", "try", "typeid", "typename", "using",
    "virtual", "wchar_t"
}

def is_valid_identifier(word):
    return word.isidentifier() and word not in kywrds and not word[0].isdigit()

word = input("\nEnter a word to check if it is a valid identifier : ")
print("\n\tValid" if is_valid_identifier(word) else "\n\tInvalid")
