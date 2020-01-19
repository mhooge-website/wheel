import random

for i in range(146):
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    print(f"'rgb({r}, {g}, {b})'", end=", ")
