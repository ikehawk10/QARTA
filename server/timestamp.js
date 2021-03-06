'use strict'

Date.prototype.today = function () {
  return `${this.getFullYear()}-${(((this.getMonth()+1) < 10)?'0':'') + (this.getMonth()+1)}-${((this.getDate() < 10)?'0':'') + this.getDate()}`
}

Date.prototype.timeNow = function () {
  return `${((this.getHours() < 10)?'0':'') + this.getHours()}-${((this.getMinutes() < 10)?'0':'') + this.getMinutes()}-${((this.getSeconds() < 10)?'0':'') + this.getSeconds()}`
}

Date.prototype.timestamp = (newDate) => `${newDate.today()}@${newDate.timeNow()}`
