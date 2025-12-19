// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// always-run-in-app: true; icon-color: pink;
// icon-glyph: magic;
/*
MIT License

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
const white = new Color("#f1f1f1");
const black = new Color("#0f0f0f");
var days;
var isNewYear;
var isHarfYear;
var text = Color.dynamic(black, white);
var bg = Color.dynamic(white, black);
var red = Color.dynamic(new Color("#fe3b2f"), new Color("#ad0b03"));
var red;
const time = new Date();
const thisYear = time.getFullYear();
const nextYear = thisYear + 1;
const NewYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
function IsLeapYear(year) {
  if (
    Number.isInteger(year / 4) &
    (!Number.isInteger(year / 100) | Number.isInteger(year / 400))
  ) {
    return true;
  } else {
    return false;
  }
}
function countDown() {
  const _time = Number(new Date());
  const diff = NewYearTime - _time;
  days = Math.floor(diff / 1000 / 60 / 60 / 24) + 1;
  if (days === 182) {
    isHarfYear = true;
  }
  if (IsLeapYear(thisYear)) {
    if (days === 366) {
      isNewYear = true;
    }
  } else {
    if (days === 365) {
      isNewYear = true;
    }
  }
}
countDown();
let widget = new ListWidget();
const txtStack = widget.addStack();
txtStack.centerAlignContent();
if (isHarfYear) {
  const txt1 = txtStack.addText("Until the");
  txt1.font = Font.systemFont(16);
  txt1.textColor = white;
  txtStack.addSpacer();

  const txtStack2 = widget.addStack();
  const txt2 = txtStack2.addText("New Year");
  txt2.textColor = white;

  const txtStack3 = widget.addStack();
  const txt3 = txtStack3.addText("1/2");
  txt3.font = Font.systemFont(70);
  txt3.textColor = white;
  txtStack.addSpacer();

  const txtStack4 = widget.addStack();
  const txt4 = txtStack4.addText("Year");
  txt4.font = Font.systemFont(16);
  txt4.textColor = white;

  widget.backgroundColor = new Color("#8e8e92");
} else if (isNewYear) {
  const txt1 = txtStack.addText("Happy");
  txt1.font = Font.systemFont(30);
  txt1.textColor = text;
  txtStack.addSpacer();

  const txtStack2 = widget.addStack();
  const txt2 = txtStack2.addText("New");
  txt2.font = Font.systemFont(30);
  txt2.textColor = text;
  txtStack2.addSpacer();

  const txtStack3 = widget.addStack();
  const txt3 = txtStack3.addText("Year!");
  txt3.font = Font.systemFont(30);
  txt3.textColor = text;
  widget.backgroundColor = new Color("#fe3b2f");
} else {
  const txt1 = txtStack.addText("Until the");
  txt1.font = Font.systemFont(16);
  txt1.textColor = text;
  txtStack.addSpacer();

  const txtStack2 = widget.addStack();
  const txt2 = txtStack2.addText("New Year");
  txt2.textColor = text;

  const txtStack3 = widget.addStack();
  const txt3 = txtStack3.addText(String(days));
  txt3.font = Font.systemFont(50);
  txt3.textColor = text;
  txtStack.addSpacer();

  const txtStack4 = widget.addStack();
  const txt4 = txtStack4.addText("Days");
  txt4.font = Font.systemFont(16);
  txt4.textColor = text;

  widget.backgroundColor = bg;
}
Script.setWidget(widget);
widget.presentSmall();
