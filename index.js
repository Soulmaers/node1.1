#!/usr/bin/env node
const yargs = require('yargs');
yargs.command({
    command: "current",
    describe: "Текущая дата",
    handler({ year, y, month, m, date, d }) {
        const currentDate = new Date();
        if (year || y) return console.log(currentDate.getFullYear());
        if (month || m) return console.log(currentDate.getMonth() + 1);
        if (date || d) return console.log(currentDate.getDate());
        console.log(String(currentDate));
    }
})
yargs.command({
    command: "add",
    describe: "Прибавить",
    handler({ year, y, month, m, date, d }) {
        const currentDate = new Date();
        if (year || y) {
            const nowYear = (y === undefined ? year : y);
            console.log(String(currentDate.getFullYear() + nowYear));
        }
        if (month || m) {
            const nowMonth = (m === undefined ? month : m);
            console.log(String(currentDate.getMonth() + nowMonth));
        }
        if (date || d) {
            const nowDay = (d === undefined ? date : d);
            console.log(String(currentDate.getDate() + nowDay));
        }
    }
})
yargs.command({
    command: "sub",
    describe: "Убавить",
    handler({ year, y, month, m, date, d }) {
        const currentDate = new Date();
        if (year || y) {
            const nowYear = (y === undefined ? year : y);
            console.log(String(currentDate.getFullYear() - nowYear));
        }
        if (month || m) {
            const nowMonth = (m === undefined ? month : m);
            console.log(String(currentDate.getMonth() - nowMonth));
        }
        if (date || d) {
            const nowDay = (d === undefined ? date : d);
            console.log(String(currentDate.getDate() - nowDay));
        }
    }
})

yargs.parse();