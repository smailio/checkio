def check_pangram(word):
    return len(set([l.capitalize() for l in word if l.isalpha()])) == 26


assert check_pangram("The quick brown fox jumps over the lazy dog.") is True, "salut"
assert check_pangram("ABCDEF.") is False, ""
