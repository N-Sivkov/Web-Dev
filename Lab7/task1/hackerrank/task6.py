# Triangle Quest

for i in range(1, int(input())):
    print(i * sum(list(map(pow, [10] * i, range(i - 1, -1, -1)))))