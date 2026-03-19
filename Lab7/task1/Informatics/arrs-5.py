n = int(input())
a = [int(i) for i in input().split()]
b = False
for i in range(1, n):
    if a[i - 1] * a[i] > 0:
        b = True
        break
if b:
    print("YES")
else:
    print("NO")