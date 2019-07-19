# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select products.productname, categories.categoryname
from products inner join categories on products.categoryid = categories.categoryid;

#cleaned up version
select p.productname, c.categoryname
from products as p
join categories as c
on p.categoryid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select products.productname, orderdetails.quantity
from products inner join orderdetails on products.productid = orderdetails.productid
where orderid = 10251;

#cleaned up version
select p.productname, od.quantity
from products as p
join orderdetails as od
on p.productid = od.productid
where orderid = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select orders.orderid, customers.customername, employees.lastname
from orders inner join customers on orders.customerid = customers.customerid
join employees on orders.employeeid = employees.employeeid

#cleaned up version
select o.orderid, c.customername, e.lastname
from orders as o
join customers as c
on o.customerid = c.customerid
join employees as e
on o.employeeid = e.employeeid;

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
