v, t = int(input()), int(input())
s = v * t
if abs(s) < 109:
    if s < 0:
        print(109 + s)
    else:
        print(s)
else:
    if s < 0:
        print(109 + s % 109)
    else:
        print(s % 109)