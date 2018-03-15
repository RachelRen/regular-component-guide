```
import {Pager} from 'regular-component';

let pager2 = new Pager({
    data: {
        current: 1,
        total: 4,
        mode: 2,
        onChange: function(current){
            debugger;
        },
        
    }
})
pager2.$inject(this.refs.component2);

```

