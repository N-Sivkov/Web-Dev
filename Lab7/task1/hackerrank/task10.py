# Company Logo

S = input().lower()
letters = {}
for i in S:
    if i in letters:
        letters[i] += 1
    else:
        letters[i] = 1
vals = []
for i in letters:
    vals.append(letters[i])
vals.sort()
count = 0
min = 0
for i in range(1, len(vals)):
    if count == 3:
        if vals[i] != vals[i - 1]:
            break
    else:
        if vals[i] != vals[i - 1]:
            count += 1
        if count == 3:
            min = vals[i]
a = []
for key, value in letters.items():
    a.append((value, key))
a = list(filter(lambda x: x[0] >= min, a))
a.sort(reverse=True)
if len(a) > 3:
    out = []
    for i in range(len(a) - 1):
        for j in range(len(a) - i - 1):
            if a[j][0] == a[j + 1][0]:
                if a[j][1] > a[j + 1][1]:
                    a[j], a[j + 1] = a[j + 1], a [j]
    for i in range(3):
        out.append(a[i])
else:
    out = a
for i in out:
    print(i[1], i[0])