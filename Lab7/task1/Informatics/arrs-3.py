n = int(input())
a = [int(i) for i in input().split()]
count = 0
for i in a:
    if i > 0:
        count += 1
print(count)