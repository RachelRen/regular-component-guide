
import Root from '../layout/index'
import Home from '../page/home/index'

import TreePage from '../page/tree/index'
import AssociatedInputPage from '../page/associatedinput/index'
import CalendarPage from '../page/calendar/index'
import CascaderPage from '../page/cascader/index'
import checkboxPage from '../page/checkbox/index'
import DatePickerPage from '../page/datePicker/index'
import InputnumberPage from '../page/inputnumber/index'
import LoadingPage from '../page/loading/index'
import MessagePage from '../page/message/index'
import PagerPage from '../page/pager/index'
import PopoverPage from '../page/popover/index'
import SelectPage from '../page/select/index'
import ToolTipPage from '../page/toolTip/index'


const routes = [{
	component: Root,
	routes: [{
		path: '/',
		exact: true,
		component: Home
	}, {
		path: '/tree',
		component: TreePage
	},{
		path: '/associatedinput',
		component: AssociatedInputPage
	},{
		path: '/calendar',
		component: CalendarPage
	},{
		path: '/cascader',
		component: CascaderPage
	},{
		path: '/checkbox',
		component: checkboxPage
	},{
		path: '/datePicker',
		component: DatePickerPage
	},{
		path: '/inputnumber',
		component: InputnumberPage
	},{
		path: '/loading',
		component: LoadingPage
	},{
		path: '/message',
		component: MessagePage
	},{
		path: '/pager',
		component: PagerPage
	},{
		path: '/popover',
		component: PopoverPage
	},{
		path: '/select',
		component: SelectPage
	},{
		path: '/toolTip',
		component: ToolTipPage
	}]
}]

export default routes
