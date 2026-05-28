export default {
  _meta: {
    ref: 'main.jso.js',
  },
  myData: "I'm injected", myData1: { d0: 'Nested 0' },
  listArray: [
    { itemName: 'itemA', itemValue: 'Regular value {{}}', listArray: true },
    { itemName: 'itemB', itemValue: 'Important value {{}}', isImportant: true },
    { itemName: 'itemC', listObject: {
      lo0: 'Lo0v', lo1: ['Lo10v', { lo11: 'Lo11v' }]
    }}
  ],
  myArray: ['a1', 'a2', { ao0: 'Aov0' }],
  mediaRoot: '${main.aa.env.remote.media}',
  menuFont: 'Square',
  menuTextOne: 'Menu text one'
};
