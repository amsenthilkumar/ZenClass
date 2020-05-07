string1=" Hello World Hello"
string2=string1.split()
print(string2)
res = ''.join(string2).rindex('Hello')
print(str(res))

