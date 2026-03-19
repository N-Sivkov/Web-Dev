a = int(input())
b = False
if a % 4 == 0:
    if a % 100 == 0:
        if a % 400 == 0:
            b = True
    else:
        b = True
if b:
    print("YES")
else:
    print("NO")