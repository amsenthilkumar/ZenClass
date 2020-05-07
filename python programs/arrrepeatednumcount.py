l=[10,20,20,20,10,30,40]
repeatlist=[]
countlist=[]
for i in range(len(l)):
 count=1
 for j in range(i+1,len(l)):
  if(l[i]==l[j]):
   count+=1
 if(count>1):
  if l[i] not in repeatlist :
   repeatlist.append(l[i])
   countlist.append(count)
print(repeatlist)
print(countlist)

 

   