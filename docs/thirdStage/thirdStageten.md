---

layout: thirdStageten

title: 三阶段 | 第十天

---

## 一、数据库介绍

### 1. 什么是数据库？

数据库（database）是用来**组织**、**存储**和**管理数据**的仓库。当今世界是一个充满着数据的互联网世界，充斥着大量的数据。数据的来源有很多，比如出行记录、消费记录、浏览的网页、发送的消息等等。为了方便管理互联网世界中的数据，就有了数据库管理系统的概念（简称：数据库）。



### 2. 常见数据库

(1)**MySQL** 数据库，目前使用最广泛、流行度最高的开源免费数据库  (甲骨文) 

(2)Oracle 数据库，收费   (甲骨文)

(3)SQL Server 数据库，收费   (微软)

以上三种属于传统型数据库，又叫做：**关系型数据库** ，这三者的设计理念相同，用法比较类似。

形式上数据表示方式也相似（以表的形式存在）



### 3. 存储数据的方式

存储数据的方式指的就是数据以什么样的结构进行存储。

#### 3.1 传统物质分类

整理前：
![](/public/img/thirdStage/ten/4-1整理前.png)

整理后：
![](/public/img/thirdStage/ten/4-2整理后.png)

#### 3.2 excel分类

​		计算机中的数据，经常使用类似Excel 表的结构进行管理。每个 Excel 中，数据的组织结构分别为工作簿、工作表、数据行、列这 4 大部分组成。如图：

![](/public/img/thirdStage/ten/4-3excel学生表.png)



![](/public/img/thirdStage/ten/4-4excel老师表.png)





## 二、mysql安装

安装phpStudy，它内部集成有mysql，只需要每次开机启动一下即可

MySQL数据库默认用户名：root，密码root



## 三、数据可视化工具

### 1. 简介

简介：操作数据库最古老的方式为cmd。这种方式不友好、也不美观，同时无法保存最近的操作命令，数据库可视化工具帮初学者解决了这一系列问题，对初学者非常友好，**数据库可视化工具**有很多，Navicat就是其中的一种，它界面直观、功能强大、操作简单，是市面上比较流行的一种数据库可视化工具。可视化工具让我们以更好友好的方式管理myql数据库



### 2. 使用navicat工具

#### 1、连接数据库

是让navicat与mysql建立联系，这样我们就可以使用navicat可视化的方式操作mysql。



![image-20211008210246005](/public/img/thirdStage/ten/image-20211008210246005.png)

连接名任意写，输入数据库密码、端口，都走默认

![image-20210517114438741](/public/img/thirdStage/ten/image-20210517114438741.png)



#### 2、界面介绍

![image-20211008222719981](/public/img/thirdStage/ten/image-20211008222719981.png)





**除了test测试数据库可以删除，其它都不能删**

![image-20211008211008180](/public/img/thirdStage/ten/image-20211008211008180.png)





#### 3、创建数据库

在连接名上右键，或左边空白处右键，有一个新建数据库

![image-20210517141431058](/public/img/thirdStage/ten/image-20210517141431058.png)

**我们创建了数据库，就相当于在电脑上创建了一个xlsx文件（xlsx文件是存放数据表的），每一个项目要对应一个数据库。而数据库中是一张一张的数据表**







#### 4、mysql的数据库的数据类型

https://www.runoob.com/mysql/mysql-data-types.html



MySQL 支持多种类型，大致可以分为三类：字符串、日期/时间、数值



###### 1、字符串

- **varchar**  	不定长的字符串，如果在设计这张表的时候，设置了30，但实际存储数据的长度超过了30它会自动增长的

- **char**           固定长度的字符串，如：电话号，手机号，身份证号

  比如：手机号：13344445555    身份证号：422823200008310045

- text            大文本    如存储文章 、小说

###### 2、时间

- date        少用，而是用存储一个时间戳的字符串

###### 3、数值

- **int** 		整型
- **tinyint**  小整数值  0: 女  1：男  2：保密

注意：数字类型少用，经常用字符串代替



#### 5、设计表的规则

**每张表需要设计一个id（数据的唯一性），要设计成整型，并且自增，不能为空，主键(即当前列没有重复的值)**

每一个列都要设计数据类型





#### 6、创建数据表

想在哪个数据库下面创建数据表，就选中这个库下的表，右键，有一个新建表

![image-20211008213115200](/public/img/thirdStage/ten/image-20211008213115200.png)



以学生表为例：

它是一列一列的，有数字，字符串等等

![image-20210517142013616](/public/img/thirdStage/ten/image-20210517142013616.png)

**学生表的结构**

![image-20210517144058272](/public/img/thirdStage/ten/image-20210517144058272.png)

**创建好表之后，一定要保存**

![image-20210517144155374](/public/img/thirdStage/ten/image-20210517144155374.png)









### 3、管理数据

![image-20211008220657596](/public/img/thirdStage/ten/image-20211008220657596.png)

使用navicat通过点击鼠标的方式快速的进行：增、删、改、查

**注意：删除和更新是不可逆的，如果没有备份，是还原不了的**





### 4、备份

在数据库上右键 -> 转储sql文件 -> 结构和数据

![image-20210517151053431](/public/img/thirdStage/ten/image-20210517151053431.png)

当备份好了以后，我们就可以在数据库上右键删除数据库

![image-20211008221414422](/public/img/thirdStage/ten/image-20211008221414422.png)



### 5、还原

先新建数据库，库上右键->运行sql文件->找到相关文件->开始即可

比如我们创建test3数据库

![image-20210517151341627](/public/img/thirdStage/ten/image-20210517151341627.png)







### 6、数据库、表、行、字段的总结说明

先安装数据库管理系统（mysql）

创建数据库（test1）：相当于xlsx文件

数据库文件要包含了各种各样的表：学生表、老师表、课程表、班级表

表：字段（数据类型）列

行：就是一条一条的数据记录

99%的时间在干什么 ？数据的增、删、改、查



### 7、表与表之间的关系

就是表与表之间通过某个字段产生关系，所以称为关系型数据库

![image-20210517155956055](/public/img/thirdStage/ten/image-20210517155956055.png)



## 四、SQL查询语言

### 1. 简介

SQL（英文全称：Structured Query Language）是结构化查询语言，专门用来访问和处理数据库的编程语言。能够让我们以编程的形式，操作数据库中表里面的数据。

### 2. SQL语句特点

注意：mysql、Oracle、Sql Server它们特点基本相似，而且它们的编程语言都是sql。都可以用sql语句管理数据库。

sql语言不区分大小写。比如：SELECT和select是等价的。但是：有具体含义的单词命令官方建议用大写，自己起的名字用小写。  如username, age

### 3. SQL能做什么

创建数据库、数据表。

更多的是对表中数据进行 **增、删、改、查**。



### 4. SQL的主要内容

分为主句和子句

主句：insert into增、update改 、delete删、select查

子句：where（and 和 or） 、order by 、group by 、limit、join...on



### 5. 增删改查

在数据库下面的查询上点右键，点击新建查询并命名保存，即可以在查询编缉器里面写语句

```sql
-- sql环境下，两横线即注释
```





#### 5.1 添加数据

语法：

```sql
INSERT INTO 表名 ( column1,column2,... ) VALUES ( value1,value2,value2,.... )
-- 如果value的值是字符串则必须加引号

-- 添加 尼古拉斯到student表中
INSERT INTO student ( idcard,uname,password,age,sex,pro,grade,tidcard ) VALUES ( '202111','尼古拉斯','123456',33,1,'河北','本科',10004 )
```



![image-20210517160750527](/public/img/thirdStage/ten/image-20210517160750527.png)



#### 5.2 删除数据

语法：

```sql
DELETE FROM 表名 [WHERE 条件]
-- 注意：不加条件全删除，很危险

-- 删除id为6的数据
DELETE FROM student WHERE id=6
```



#### 5.3 更新数据

语法：

```sql
UPDATE 表名 SET column1 = value1, column2 = value2, ... [WHERE 条件]

-- 把大明的年龄改成30 省份改成辽宁
UPDATE student SET age=30,pro='辽宁' WHERE uname="大明"
```



#### 5.4 查询数据

语法：

```sql
SELECT * FROM 表名   						-- *代表所有的列信息都展示
SELECT column1,column2,... FROM 表名  	-- 只展示某些列信息

-- 把所有的数据和所有的列都读出来
-- SELECT * FROM student

-- 只读取学号，姓名，年龄
-- SELECT uname,idcard,age FROM student

-- 只读取学号为 202100  的学生
SELECT * FROM student WHERE idcard = 202100

-- 给某一个字段设置别名，将uname改为username
SELECT uname AS username,age,sex FROM student
```





### 6. 其它子句

#### 6.1 where 条件

| 运算符                           | 描述                                 |
| -------------------------------- | ------------------------------------ |
| =                                | 等于                                 |
| !=  或者 <>                      | 不等于                               |
| >                                | 大于                                 |
| <                                | 小于                                 |
| >=                               | 大于等于                             |
| <=                               | 小于等于                             |
| BETWEEN  value1  AND  value2     | 在value1和value2之间的，包括它俩     |
| NOT BETWEEN  value1  AND  value2 | 不在value1和value2之间的，不包括它俩 |
| AND、OR                          | AND并且、OR或者                      |
| LIKE                             | 搜索某种模式                         |

注意：where 可以应用在 SELECT、UPDATE、DELETE 等主句当中。只是不用在INSERT INTO中



**1、=  !=  > >= < <=**

```sql
-- 主句 WHERE column = VALUE

-- 查询年龄大于25
SELECT * FROM student WHERE age > 25
```



**2、BETWEEN ... AND**

注意：两边的区间是包含的

```sql
-- 主句 WHERE column BETWEEN VALUE1 AND VALUE2

-- 年龄为20-25之间的学生
SELECT * FROM student WHERE age BETWEEN 20 AND 25

-- 年龄不为20-25之间的学生
SELECT * FROM student WHERE age NOT BETWEEN 20 AND 25
```



**3、AND、OR**

```sql
-- 主句 WHERE 条件1 AND 条件2    	并且
-- 主句 WHERE 条件1 OR 条件2		或者

-- 年龄大于20 且 性别为1(男)
SELECT * FROM student WHERE age > 20 AND sex = 1

-- 年龄大于20 或者 性别为1(男)
SELECT * FROM student WHERE age > 20 OR sex = 1
```



**4、LIKE**

```sql
-- % 占位（即可有可无的任意字符串）
主句 WHERE column LIKE 'a%'  -- 在某个列中查询以a为开头的数据
主句 WHERE column LIKE '%a' --  在某个列中查询以a为结尾的数据
主句 WHERE column LIKE '%a%' -- 在某个列中查询含有a的数据


-- 查询以姓名为  a开头的数据
-- SELECT * FROM student WHERE uname LIKE 'a%'

-- 查询以姓名为  a结尾的数据
-- SELECT * FROM student WHERE uname LIKE '%a'

-- 查询以姓名中包含a的数据
-- SELECT * FROM student WHERE uname LIKE '%a%'

```



#### 6.2 order by排序

语法：

```sql
-- 以column进行排序，ASC升序（默认），DESC倒序
主句 ORDER BY column [ ASC | DESC ]


SELECT * FROM student  					-- 默认不排序

SELECT * FROM student ORDER BY age ASC  -- 按照年龄进行升序，不写ASC也是升序
SELECT * FROM student ORDER BY age DESC -- 按照年龄进行倒序

```







#### 6.3 limit

```sql
SELECT * FROM 表名 [ LIMIT [start,]size ]  -- start起始下标, size条数

-- 读取2条数据
-- LIMIT 2  取2条
-- LIMIT 2,3 从索引为2的位置取3条

SELECT * FROM student LIMIT 2 -- 取2条
SELECT * FROM student LIMIT 1,2 -- 从索引为1的位置取2条

```

**灵魂子句**。以后在使用SELECT的时候，如果是获取一组数组，一定要用上LIMIT



###### 分页原理公式

```
如果每页3条，共10条
	let pageSize = 3	每页条数
	let totalRow = 10	总条数
	let totalPage = Math.ceil(totalRow/pageSize)  => 4 总页数
	let page = 1 		当前的页码
	
第1页： LIMIT 0,pageSize    0=(page-1)*pageSize
第2页： LIMIT 3,pageSize    3=(page-1)*pageSize
第3页： LIMIT 6,pageSize    6=(page-1)*pageSize
第4页： LIMIT 9,pageSize    9=(page-1)*pageSize

```

![image-20220317154155835](/public/img/thirdStage/ten/image-20220317154155835.png)

利用（页码-1）* 每页条数，即可得到截取的下标，也就是LIMIT的第一个参数start，而第二个参数条数是固定的，因此就可以得到当前页的数据



#### 6.4 join连表查询

正是因为我们的表与表是有关系的。同时为了表当中没有冗余数据，那么表当中就存储和表相关的数据。

表A中使用表B中的唯一性的一个列存储在表A中，就产生了关系 。

语法：

```sql
SELECT * FROM 表1 JOIN 表2 ON 连接条件   -- 全连接。 只有on后面的条件成立时数据才会显示
SELECT * FROM 表1 LEFT JOIN 表2 ON 连接条件 -- 左连接  以左表为基准，左表的数据都会显示
SELECT * FROM 表1 RIGHT JOIN 表2 ON 连接条件 -- 右连接  以右表为基准，右表的数据都会显示

```



学生的老师是谁

```sql
-- 字段名的前缀（防止出现出现两张表中有重复的字段，相当于找哪张表中的这个字段）

SELECT * FROM student JOIN teacher ON student.tidcard = teacher.idcard

SELECT * FROM student LEFT JOIN teacher ON student.tidcard = teacher.idcard

SELECT * FROM student RIGHT JOIN teacher ON student.tidcard = teacher.idcard

```







###### 表别名

```sql
SELECT * FROM teacher AS t JOIN student AS s ON t.idcard = s.tidcard
-- 如果起了别名，则后面只能用别名

```

###### 字段别名

```sql
-- 别名的概念 AS 别名，字段uname改为username
SELECT uname AS username,age,sex FROM student

```





### 7. 补充

#### 1、解决 ID 不连续

运行下面三句话，注意替换表名即可

```sql
ALTER TABLE 表名 DROP id;
ALTER TABLE 表名 ADD id int NOT NULL FIRST;
ALTER TABLE 表名 MODIFY COLUMN id int NOT NULL AUTO_INCREMENT,ADD PRIMARY KEY(id);

```





#### 2、select完整语法：JWGOL

子句是可以同时多个存在的，当多个存在时，则以  `JWGOL`  为顺序

即：J（join连表）  W（where条件）  G（group by分组）  O（order by 排序） L（limit分页）

```sql
SELECT 字段名[ 表名.字段名 | 表别名.字段名 | 字段名 AS 字段别名 ], [...]
FROM table_name[as table_别名]
[JOIN table_name2 ON 条件]  
[JOIN table_name3 ON 条件]  
[JOIN table_name4 ON 条件]  
[WHERE....]
[GROUP BY....]
[ORDER BY....]
[LIMIT 0,3]

```

