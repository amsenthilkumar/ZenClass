#ADD
set={"a","b","c"}
set.add("d")
print(set)

#CLEAR
set={"a","b","c"}
set.clear()
print(set)

#copy
set={"a","b","c"}
set.copy()
print(set)

#difference
set1={"20","30"}
set2={"10","5"}
set3=set1.difference(set2)
print(set3)

#difference_update
set1={"20","30"}
set2={"10","20"}
set3=set1.difference_update(set2)
print(set3)

#discard
set={"me","you","us"}
set.discard("me")
print(set)

#intersection
set1={"20","30"}
set2={"10","20"}
set3=set1.difference(set2)
print(set3)


#intersection_update
set1={"20","30"}
set2={"10","20"}
set3=set1.difference_update(set2)
print(set3)

#isdisjoint
set1={"20","30"}
set2={"10","5"}
set3=set1.isdisjoint(set2)
print(set3)

#issubset
x={"a","b","c"}
y={"f","e","d","c","b","a"}
z=x.issubset(y) 
print(z)

#issuperset
x = {"f", "e", "d", "c", "b"}
y = {"a", "b", "c"}
z = x.issuperset(y)
print(z)

#pop
set={"a","b","c"}
set.pop()
print(set)

#remove
set={"a","b","c"}
set.remove("a")
print(set)

#symmetric_difference
x = {"f", "e", "d", "c", "b"}
y = {"a", "b", "c"}
z = x.symmetric_difference(y)
print(z)

#symmetric_difference_update
x = {"f", "e", "d", "c", "b"}
y = {"a", "b", "c"}
z = x.symmetric_difference_update(y)
print(z)

#union
x = {"f", "e", "d", "c", "b"}
y = {"a", "b", "c"}
z = x.union(y)
print(z)

#update
x = {"f", "e", "d", "c", "b"}
y = {"a", "b", "c"}
z = x.update(y)
print(z)




