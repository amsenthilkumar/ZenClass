#clear
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964 }
car.clear()
print(car)

#copy
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964 }
car.copy()
print(car)

#fromkeys
x = ('key1', 'key2', 'key3')
y = 1
dict = dict.fromkeys(x, y)
print(dict)

#get
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964 }
car.get("brand")
print(car)

#items
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964 }
car.items()
print(car)

#keys
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964 }
car.keys()
print(car)

#pop
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = car.pop("model")
print(x)

#popitem
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = car.pop("model")
print(x)

#setdefault
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = car.setdefault("model", "Bronco")
print(x)

#update
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
car.update({"color": "White"})
print(car)

#values
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = car.values()
print(x)







