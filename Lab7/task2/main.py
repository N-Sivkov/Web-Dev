from models import Animal as A, Cat as C, Dog as D


ani1 = A(33, 33)
ani2 = A(11, 99, "unknown specimen")
cat1 = C(4, 5, breed="siamese")
cat2 = C(5, 8, "Barsik")
dog1 = D(20, 5, isAGuard=False)
dog2 = D(25, 4, "Duke")

a = [ani1, ani2, cat1, cat2, dog1, dog2]
for i in a:
    print(i)
    i.move()
    i.voice()
    if isinstance(i, C):
        i.show()
    if isinstance(i, D):
        i.driveOff()
    print("\n")