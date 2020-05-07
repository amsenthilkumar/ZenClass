list=[2,3,4,5,6,7,8]
for i in range(0,(list)):
 if(i%2==0):
  for j in range(0,(list[i])):
   print("*",end="")
 else:
   print("+",end="")
 print()

