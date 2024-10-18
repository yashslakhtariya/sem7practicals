pos = 0
input_string = ""

def advance():
    global pos
    pos += 1

def current_char():
    return input_string[pos] if pos < len(input_string) else None

def eat(char):
    if current_char() == char:
        advance()
    else:
        raise Exception(f"Unexpected character: {current_char()}")

def E():
    T()
    E_prime()

def E_prime():
    if current_char() == '+':
        eat('+')
        T()
        E_prime()

def T():
    F()
    T_prime()

def T_prime():
    if current_char() == '*':
        eat('*')
        F()
        T_prime()

def F():
    if current_char() == '(':
        eat('(')
        E()
        eat(')')
    elif current_char() == 'a':
        eat('a')
    else:
        raise Exception(f"Unexpected character: {current_char()}")

def parse(s):
    global pos, input_string
    pos = 0
    input_string = s
    E()
    if current_char() is not None:
        raise Exception("Invalid input")
    print("\n\tInput is valid according to the grammar.")

ip = input('\n\tEnter the string to be parsed : ')

# Example usage
try:
    parse(ip)
except Exception as e:
    print(f"Error: {e}")
