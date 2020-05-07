str="I sTaY IN ChennaI"
for i in range(len(str)):
 if(str[i].islower()):
  print(str[i].upper(),end="")
 else:
  print(str[i].lower(),end="")
