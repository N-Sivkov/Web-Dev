# The Minion Game

def minion_game(string):
    vowels = ['A', 'E', 'I', 'O', 'U']
    scoreC = 0
    scoreV = 0
    for i in range(len(string)):
        if string[i] in vowels:
            scoreV += len(string) - i
        else:
            scoreC += len(string) - i
    if scoreC == scoreV:
        print("Draw")
    elif scoreC > scoreV:
        print(f"Stuart {scoreC}")
    else:
        print(f"Kevin {scoreV}")


if __name__ == '__main__':
    s = input()
    minion_game(s)