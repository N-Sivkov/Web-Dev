a, b = int(input()), int(input())
for i in range(a, b + 1):
    if (i ** (1/2)) % 1 == 0:
        print(i, end=" ")