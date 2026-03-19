n = int(input())
a = [int(i) for i in input().split()]
count = 0
for i in range(1, n - 1):
    if a[i - 1] < a[i] and a[i + 1] < a[i]:
        count += 1
print(count)