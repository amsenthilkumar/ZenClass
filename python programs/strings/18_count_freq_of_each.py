string = "Pythonisawesome,isn'tit?"
list1 = list(string)
value_list=[]
count_list=[]
for i in range(0,len(list1)):
    count=1
    for j in range(i+1,len(list1)):
        if(list1[i]==list1[j]):
            count=count+1
            
        
        if(list1[i] not in value_list):
            
            value_list.append(list1[i])
            
    count_list.append(count)


        

    
           
print(value_list)
print(count_list)
    

