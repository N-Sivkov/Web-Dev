# Find Angle MBC
import math


AB = int(input())
BC = int(input())
# Let there be N the midpoint of BC
AC = math.sqrt(AB ** 2 + BC ** 2)
MC, NC = AC / 2, BC / 2 
MN = math.sqrt(MC ** 2 - NC ** 2)
angle = round(math.atan(MN / NC) / math.pi * 180)
print(angle, chr(176), sep="")