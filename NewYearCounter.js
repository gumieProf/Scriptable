// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: calendar-alt;
const bg=new Color("#8e8e92");
const textColor=new Color("#ffffff");
var days;

const time = new Date();
const thisYear=time.getFullYear()
const nextYear=thisYear+1
const NewYearTime=new Date(`January 01 ${nextYear} 00:00:00`)
function countDown(){
  const _time = Number(new Date())
  const diff = NewYearTime-_time
  days = Math.floor(diff/1000/60/60/24)+1
}
countDown()
let widget = new ListWidget()
widget.addSpacer(10)
const txtStack=widget.addStack()
txtStack.centerAlignContent()

const txt1 = txtStack.addText("来年まで")
txt1.font=Font.systemFont(16)
txt1.color=textColor
txtStack.addSpacer()

const txtStack2=widget.addStack()
txtStack.centerAlignContent()

const txt2=txtStack2.addText(String(days)+"日")
txt2.font=Font.systemFont(50)
txt2.color=textColor
txtStack.addSpacer()

widget.backgroundColor=bg
Script.setWidget(widget)
widget.presentSmall()
