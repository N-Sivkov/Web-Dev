def min(a, b, c, d):
    if a < b:
        x = a
    else:
        x = b
    if c < d:
        y = c
    else:
        y = d
    if x < y:
        return x
    else:
        return y
    

a, b, c, d = input().split()
print(min(a, b, c, d))