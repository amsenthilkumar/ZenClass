print("enter the values")
a=int(input("enter the num:"))
b=int(input("enter the num:"))
c=int(input("enter the num:"))

if a>b and a>c:
 if b>a and b>c:
  if c>a and c>b:
   print(c,"c is greatest")
  else:
   print(b,"b is greatest")
 else:
  print(a,"a is greatest")