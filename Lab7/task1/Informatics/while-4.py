n = int(input())
a = False
x = 1
if n % 2 == 0 or n == 1:
    while x <= n:
        if x == n:
            a = True
            break
        x *= 2
if a:
    print("YES")
else:
    print("NO")