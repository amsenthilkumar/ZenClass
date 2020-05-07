list1=[10,20,30,40,50]
temp=list1[0]
for i in range(0,len(list1)-1):
 list1[i]=list1[i+1]
list1[i]=temp
print(list1)