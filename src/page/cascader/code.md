```
const options = [{
        id: '1',
        name: 'Zhejiang',
        children: [{
            id: '11',
            name: 'Hangzhou',
            children: [{
                id: '111',
                name: 'West Lake',
            }],
        }],
    }, {
        id: '2',
        name: 'Jiangsu',
        children: [{
            id: '22',
            name: 'Nanjing',
            children: [{
                id: '222',
                name: 'Zhong Hua Men',
            }],
        }],
    }];
let cascader = new Cascader({
    data: {
        list: options,
        onChange: function(){
            
        }
    }
})

cascader.$inject(this.refs.component1);
```
