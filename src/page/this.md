# this 的指向问题与调用有关
1. 函数调用，即直接调用a(),这种this指向global对象，
```
    function a(){
        console.log(this)
    }
    a()//window
```
2. 方法调用，即作为对象的方法调用，此时指向对象本身
```
var a = {
    b: function(){
        console.log(this)
    }
}
a.b()//a
```
3. 用new 调用，此时返回new出的实例
```
function A(){
    console.log(this)
}
var a = new A() // a
```
4. 用call,apply, bind调用，绑定到传入的参数对象，如
```
var a= function(){
    console.log(this)
}
var b = []
a.call(b) // []
```
