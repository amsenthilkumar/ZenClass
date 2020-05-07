n=[1,4,2,8,5,11]
j=0
for i in range(0,len(n)-2,2):
  if(n[i]<n[i+1] and n[i+1]>n[i+2]):
   j+=1
   if(j==len(n)//3): 
      print(True)
  else:
    print(False)