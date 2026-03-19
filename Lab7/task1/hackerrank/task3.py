# Merge the Tools

def merge_the_tools(string, k):
    cur = ""
    for i in range(0, len(string), k):
        for j in range(k):
            x = string[i + j]
            if x not in cur:
                cur += x
        print(cur)
        cur = ""

if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)