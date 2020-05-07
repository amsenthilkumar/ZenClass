names=["Arun","Akshara","Devi","Ajay"]
sex=["M","F","F","M"]
list1=[]
for i in range(len(sex)):
 if(sex[i]=='M'):
  y=Mr+names[i]
  list1.append(y)
 else:
  if(sex[i]=='F'):
   z=Ms+names[i]
   list1.append(z)
print(list1)

  
  