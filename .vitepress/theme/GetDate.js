// 1. 手动更新当前年份
const year = 2024;
let month = '';
let items = [];
let thisYear = [];
let lastYear = [];

function getMonth(N, M) {
    month = '0' + M;
    if (M > N) {
        items.unshift({ text: `${year} 年`, items: thisYear });
        while (M >= N) {
            let n = N < 10 ? '0' + N : N;
            thisYear.unshift({ text: `${N} 月`, link: `/vpn/${year}/${n}` });
            N++;
        }
    } else {
        items.unshift({ text: `${year} 年`, items: lastYear });
        items.push({ text: `${year - 1} 年`, collapsed: true, items: thisYear });
        if (N > M) {
            for (let i = 1; i <= M; i++) {
                let m = i < 10 ? '0' + i : i;
                lastYear.unshift({ text: `${i} 月`, link: `/vpn/${year}/${m}` });
            }
            while (N <= 12) {
                let n = N < 10 ? '0' + N : N;
                thisYear.unshift({ text: `${N} 月`, link: `/vpn/${year - 1}/${n}` });
                N++;
            }
        }
    }
    return items;
}

// 2. N-M 月，当 N>M 时，N 从去年计算
// 3. 如果 home 页面涉及此数据，请人工更新
getMonth(6, 10);
export default {
    year,
    month,
    items
}