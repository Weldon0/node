var num = 10;
var obj = {
  num: 8,
  inner: {
    num: 6,
    print: function () {
      // debugger;
      console.log(this.num);
    },
  },
};
num = 888;

obj.inner.print(); // 6
var fn = obj.inner.print;

fn(); //888
obj.inner.print(); //6
obj.inner.print();
(obj.inner.print = obj.inner.print)(); //888
