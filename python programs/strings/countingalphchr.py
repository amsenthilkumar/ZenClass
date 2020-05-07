str="v@$ud#@97"
alpha=0
num=0
special=0
for i in range(len(str)):
 if str[i].isalpha():
  alpha+=1
 elif str[i].isdigit():
  num+=1
 else:
  special+=1
print(alpha)
print(num)
print(special)
 