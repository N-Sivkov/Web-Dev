# No Idea!

n, m = tuple(map(int, input().split(" ")))
arr = list(map(int, input().split(" ")))
hap = set(map(int, input().split(" ")))
unhap = set(map(int, input().split(" ")))
score = 0
for i in arr:
    if i in hap:
        score += 1
    elif i in unhap:
        score -= 1
print(score)