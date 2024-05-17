function sidebarAd() {
    // 1. 广告投放天数
    const day = 7;
    // 2. 广告开始时间                                      
    const startDate = new Date('2024-05-15 00:00:00');
    const endDate = new Date(startDate.getTime() + day * 24 * 60 * 60 * 1000);
    console.log(endDate);
    const stopTime = setInterval(() => {
        const now = new Date();
        const date = endDate - now;
        const day = Math.floor(date / 1000 / 60 / 60 / 24);
        const hour = Math.floor(date / 1000 / 60 / 60 % 24);
        const minute = Math.floor(date / 1000 / 60 % 60);
        const second = Math.floor(date / 1000 % 60);
        // console.log(`${day}天${hour}小时${minute}分${second}秒`);
        if (now < startDate || now >= endDate) {
            clearInterval(stopTime);
            sidebarTextAd.value = '';
        } else {
            if (!day) {
                if (!day && !hour && !minute && !second) return sidebarImgAdSrc.value = '/images/sponsor.webp';
                sidebarTextAd.value = '活动将截止 | 成为赞助商？';
            } else {
                sidebarTextAd.value = `成为赞助商？`;
            }
            // 3. 更换为赞助商广告图片
            sidebarImgAdSrc.value = '/images/ads.webp';
            // 4. 更换为赞助商广告链接
            sidebarImgAdLink.value = 'https://t.me/Xia_chigua';
        }
    }, 1000);
}