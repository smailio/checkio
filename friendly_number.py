def friendly_number(n, base=1000, suffix='', powers=['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'], decimals=0):
    def power_letter(n, base, powers):
        if n == 0:
            return 0, ''
        for i, power in reversed(list(enumerate(powers))):
            if abs(n) >= base ** i:
                return  xi, power

    power, letter = power_letter(n, base, powers)
    if decimals > 0:
        n = round(n * (10 ** decimals) / base ** power)
    else:
        n = int(float(n) / base ** power)
    n_str = str(n) if n else '0' * decimals
    n_str = (n_str[:-decimals] or '0' + '.') + n_str[-decimals:] if decimals > 0 else n_str
    return n_str + letter + suffix

print(friendly_number(12341234, decimals=1))
print(friendly_number(0, decimals=3, suffix="th"))
