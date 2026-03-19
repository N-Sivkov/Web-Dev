class Animal:
    def __init__(self, weight, age, name=None):
        self.name = name
        self.weight = weight
        self.age = age
    
    def move(self):
        if self.name:
            print(f"{self.name} moves")
        else:
            print(f"The animal aged {self.age} with weight {self.weight} kg moves")
    def voice(self):
        if self.name:
            print(f"{self.name} produces sound")
        else:
            print(f"The animal aged {self.age} with weight {self.weight} kg produces sound")
    
    def __str__(self):
        if self.name:
            return f"{self.name} ({self.age}, {self.weight} kg)"
        else:
            return f"an animal ({self.age}, {self.weight} kg)"


class Cat(Animal):
    def __init__(self, weight, age, name=None, breed="mongrel"):
        super().__init__(weight, age, name)
        self.breed = breed

    def move(self):
        if self.name:
            print(f"{self.name} the cat moves gracefully")
        else:
            print(f"The {self.breed} cat aged {self.age} with weight {self.weight} kg moves gracefully")
    def voice(self):
        if self.name:
            print(f"{self.name} the cat meows")
        else:
            print(f"The {self.breed} cat aged {self.age} with weight {self.weight} kg meows")
    def show(self):
        if self.breed != "mongrel":
            if self.name:
                print(f"{self.name} the cat takes a prize at a cat show")
            else:
                print(f"The {self.breed} cat aged {self.age} with weight {self.weight} kg takes a prize at a cat show")
        else:
            if self.name:
                print(f"{self.name} the cat is not pedigreed and cannot participate in a cat show")
            else:
                print(f"The cat aged {self.age} with weight {self.weight} kg is not pedigreed and cannot participate in a cat show")
    
    def __str__(self):
        if self.name:
            return f"{self.name} the {self.breed} cat ({self.age}, {self.weight} kg)"
        else:
            return f"a {self.breed} cat ({self.age}, {self.weight} kg)"


class Dog(Animal):
    def __init__(self, weight, age, name=None, isAGuard=True):
        super().__init__(weight, age, name)
        self.isAGuard = isAGuard
    
    def move(self):
        if self.name:
            print(f"{self.name} the dog moves lazily")
        else:
            print(f"The dog aged {self.age} with weight {self.weight} kg moves lazily")
    def voice(self):
        if self.name:
            print(f"{self.name} the dog barks")
        else:
            print(f"The dog aged {self.age} with weight {self.weight} kg barks")
    def driveOff(self):
        if self.isAGuard:
            if self.name:
                print(f"{self.name} the dog drives off an intruder")
            else:
                print(f"The dog aged {self.age} with weight {self.weight} kg drives off an intruder")
        else:
            if self.name:
                print(f"{self.name} the dog cheerfully plays with the intruder")
            else:
                print(f"The dog aged {self.age} with weight {self.weight} kg cheerfully plays with the intruder")
    
    def __str__(self):
        if self.isAGuard:
            status = "guard"
        else:
            status = "domestic"
        if self.name:
            return f"{self.name} the {status} dog ({self.age}, {self.weight} kg)"
        else:
            return f"a {status} dog ({self.age}, {self.weight} kg)"