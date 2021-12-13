import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DateUtilsService {
    constructor() {}

    // tslint:disable-next-line:typedef
    dateFormat(fmt: string, date: any) {
        let ret: any;
        if (!date.getFullYear) {
            if (date._d) {
                date = date._d;
            } else {
                date = new Date(date);
            }
        }
        const opt = {
            'Y+': date.getFullYear().toString(), // 年
            'm+': (date.getMonth() + 1).toString(), // 月
            'd+': date.getDate().toString(), // 日
            'H+': date.getHours().toString(), // 时
            'M+': date.getMinutes().toString(), // 分
            'S+': date.getSeconds().toString(), // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        // tslint:disable-next-line:forin
        for (const k in opt) {
            ret = new RegExp('(' + k + ')').exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : ('0' + opt[k]).slice(0 - ret[1].length));
                // (opt[k].padStart(ret[1].length, "0"))
            }
        }
        return fmt;
    }

    check(searchDate: Date): boolean {
        /** 2020-02-22 */
        const formerDate = this.dateFormat('YYYY-mm-dd', searchDate);
        const reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        // tslint:disable-next-line:max-line-length
        // 上面是没有排除月份以及天数为00的精简版正则表达式，右边是优化版本的日期正则表达式可以排除月份为00以及天数00   /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
        const regExp = new RegExp(reg);
        if (!regExp.test(formerDate)) {
            return false;
        }
        return true;
    }

    // tslint:disable-next-line:typedef
    isAfter(dateA: any, dateB: any) {
        let date1: Date;
        let date2: Date;
        if (typeof dateA === 'string') {
            date1 = new Date(dateA);
        } else {
            date1 = dateA;
        }
        if (typeof dateB === 'string') {
            date2 = new Date(dateB);
        } else {
            date2 = dateB;
        }
        const dateForm1 = new Date(this.dateFormat('YYYY-mm-dd', date1));
        const dateForm2 = new Date(this.dateFormat('YYYY-mm-dd', date2));
        return dateForm1 > dateForm2;
    }
}
