def keys_only(flat_dict):
    lst = []
    for k, v in flat_dict.items():
        lst.append(k)
    return lst
ages = {
     "Peter": 10,
     "Isabel": 11,
     "Anna": 9,
}
keys_only(ages) # ['Peter', 'Isabel', 'Anna']