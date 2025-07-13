/*MIT License

Copyright (c) 2025 gumieProf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: calendar-alt;
const bg = new Color("#8e8e92");
const textColor = new Color("#ffffff");
var days;

const time = new Date();
const thisYear = time.getFullYear();
const nextYear = thisYear + 1;
const NewYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
function countDown() {
  const _time = Number(new Date());
  const diff = NewYearTime - _time;
  days = Math.floor(diff / 1000 / 60 / 60 / 24) + 1;
}
countDown();
let widget = new ListWidget();
widget.addSpacer(10);
const txtStack = widget.addStack();
txtStack.centerAlignContent();

const txt1 = txtStack.addText("来年まで");
txt1.font = Font.systemFont(16);
txt1.color = textColor;
txtStack.addSpacer();

const txtStack2 = widget.addStack();
txtStack.centerAlignContent();

const txt2 = txtStack2.addText(String(days) + "日");
txt2.font = Font.systemFont(50);
txt2.color = textColor;
txtStack.addSpacer();

widget.backgroundColor = bg;
Script.setWidget(widget);
widget.presentSmall();
