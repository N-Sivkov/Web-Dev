# Triangle Quest 2

for i in range(1, int(input()) + 1):
    print(pow(sum(list(map(pow, [10] * i, range(i - 1, -1, -1)))), 2))