### 三十六 实现商品规格属性的增删改查

- 动态添加表单项
- 视图

```vue
        <el-form-item
          label="规格属性"
          :label-width="formLabelWidth"
          v-for="(item, index) in arrAttr"
          :key="item.id"
        >
          <el-input v-model="item.value" class="specsInput"></el-input>
          <el-button type="primary" v-if="index == 0" @click="addAttr"
            >新增规格属性</el-button
          >
          <el-button type="danger" v-else @click="delAttr(index)"
            >删除</el-button
          >
        </el-form-item>
```

- 逻辑

```js
      // 规格属性列表，默认会有一项
      arrAttr: [
        {
          value: "",
          id: Math.random(),
        },
      ],
      
          
    // 新增规格
    addAttr() {
      if (this.arrAttr.length >= 6) {
        this.$message.warning("最多只能添加6条");
        return;
      }
      this.arrAttr.push({
        value: "",
        id: Math.random(),
      });
    },
        
    // 删除规格属性
    delAttr(i) {
      this.arrAttr.splice(i, 1);
    },
```





### 三十七 实现商品管理的增删改查

字段特别多

重点是一级分类和二级分类联动，以及数据回显

![image-20220911210151713](/public/img/fourthStage/thirteen/image-20220911210151713.png)









### 三十八 富文本编辑器

#### 1、百度富文本编辑器（ueditor）

- 官网地址

```
http://fex.baidu.com/ueditor/
```



#### 2、轻量级的富文本编辑器（wangEditor）

- 官网

```
https://www.wangeditor.com/
```

- 概念

```
Typescript 开发的 Web 富文本编辑器，轻量、简洁、易用、开源免费
```

- 下载

```
npm i wangeditor@4

+ wangeditor@4.7.15
```

- 使用方式

```
一、引入wangEditor富文本编辑器
import wangEditor from 'wangeditor'

二、在需要使用富文本编缉器的地方定义div，并给id，富文本编缉器就展示在这里

三、实例化editor
(在弹窗打开之后实例化，opened（事件），是el-dialog组件的事件，即打开动画结束时执行回调，因为此时才能找到节点id)

this.editor = new wangEditor('#节点id')
将实例化的对象做为vue的属性值存在，方便其它的地方找到

三、创建
this.editor.create()

四、设置内容或获取内容，有参数就是设置，没有参数就是获取
在提交数据时获取内容，在数据回显时设置内容
this.editor.txt.html('要设置的内容')

五、销毁编辑器（重置表单的时候）
this.editor.destroy()

六、数据回显
注意，数据回显时，要在创建实例之后就给设置内容，即在创建的哪里设置即可
```

注意：开发完成之后，商城相关的数据可以删除了，后台的上传的图片可以删除了，防止脏数据干拢，再添加真正的数据即可