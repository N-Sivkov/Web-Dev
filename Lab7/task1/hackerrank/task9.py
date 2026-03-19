# Word Order

m = int(input())
words = {}
for i in range(m):
    n = input()
    if n in words:
        words[n] += 1
    else:
        words[n] = 1
print(len(words))
for i in words:
    print(words[i], end=" ")