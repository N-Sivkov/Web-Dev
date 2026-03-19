def Xor(x, y):
    if x == y:
        return 0
    else:
        return 1


x, y = input().split()
print(Xor(x, y))