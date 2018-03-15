```
import {DatePicker} from 'regular-component';
const datePicker4 = new DatePicker({
    data: {
        format: 'yyyy-MM-dd',
        value: '2018-1-1',
        onChange: (value)=>{
            alert(value)
        }
    }
})

datePicker4.$inject(this.refs.component4);

```
