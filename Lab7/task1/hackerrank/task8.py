# Compress the String!
import itertools as itt


S = input()
for k, g in itt.groupby(S):
    print(f"({list(g).count(k)}, {k})", end=" ")