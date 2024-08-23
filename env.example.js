module.exports = Object.freeze({
    /**
     * ## 账号相关
     * - `COOKIE` 是必填项
     * - `NOTE` 帐号备注
     * - `NUMBER` 表示是第几个账号
     * - `CLEAR` 是否启用清理功能
     * - `ACCOUNT_UA` 账号UA, 可在浏览器控制台输入 navigator.userAgent 查看
     * ## 高级功能
     * - `ENABLE_CHAT_CAPTCHA_OCR` 开启评论验证码识别 使用方法见README
     * - `CHAT_CAPTCHA_OCR_URL` 验证码识别接口 POST `url`->`code`
     * - `ENABLE_MULTIPLE_ACCOUNT` 是否启用多账号
     * - `MULTIPLE_ACCOUNT_PARM` 多账号参数(JSON格式) <不推荐使用
     * ## 调试相关
     * - `LOTTERY_LOG_LEVEL` 输出日志等级 Error<Warn<Info<Debug 1<2<3<4
     * - `NOT_GO_LOTTERY` 关闭抽奖行为
     *
     * ## 多账号
     * 1. 将 ENABLE_MULTIPLE_ACCOUNT 的值改为true
     * 2. 将账号信息依次填写于 multiple_account_parm 中, 参考例子类推
     * - `WAIT` 表示下一个账号运行等待时间(毫秒)
     *
     * **按顺序依次执行, 防止访问频繁封禁IP**
     */
    account_parm: {
        COOKIE: 'buvid3=67E60AFC-C981-E8F6-D9BB-AC8EE99B862C38319infoc; b_nut=1722936638; _uuid=10FE54349-4D73-ACC10-E6D9-438C2E1557BF39942infoc; header_theme_version=CLOSE; enable_web_push=DISABLE; CURRENT_FNVAL=4048; rpdid=0zbfAHz5AI|WM7qINl2|2yq|3w1SBkiJ; fingerprint=bacf3ee937733e97b84fdd68d1815141; buvid_fp_plain=undefined; buvid4=AC60980D-E029-525D-0E63-446A81A621A040030-024080609-NVsr9EPiZJvqDq8aZdEOSgDYMAENnzUSBu2e7FKqDj2D7YsX6gW8lOSzqTLb0%2BLp; bp_t_offset_223345112=968443141596119040; SESSDATA=bab45e48%2C1739891987%2Ce26a2%2A81CjDELOg8MdmV4nb7hAuDZqdDT9QcBDRS488AqWg1oHwjugurREbdGCbK-cOhiT9TQ78SVmdHSGFVZ2QtZ1VLaE41cDFrcVgzbjRIU21WN3F6elo5c1hyUWwzT0lpNUkxN2kweElhNndReTIyZXRXTTh1Y19rTzVXU1RFOUZlNDM3eG9SbE9OdUNnIIEC; bili_jct=02fe41c1ab3f32dd69ec7b16f34d5595; DedeUserID=390138585; DedeUserID__ckMd5=3aa5eda7b97234b2; sid=73q94kqc; home_feed_column=5; browser_resolution=1699-943; bp_t_offset_390138585=968528525545963520; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjQ2MDA3MzksImlhdCI6MTcyNDM0MTQ3OSwicGx0IjotMX0.E7yDUHsAJYvLk-weCTPo8wL2M0v4WGuJFA09wTrcwP4; bili_ticket_expires=1724600679; buvid_fp=67E60AFC-C981-E8F6-D9BB-AC8EE99B862C38319infoc; b_lsid=85EE1A1F_1917D8242DA',
        NOTE: '大号',
        NUMBER: 1,
        CLEAR: true,
        ACCOUNT_UA: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',

        ENABLE_CHAT_CAPTCHA_OCR: false,
        CHAT_CAPTCHA_OCR_URL: 'http://127.0.0.1:9898/ocr/url/text',
        ENABLE_MULTIPLE_ACCOUNT: false,

        MULTIPLE_ACCOUNT_PARM: '',
        LOTTERY_LOG_LEVEL: 3,
        NOT_GO_LOTTERY: ''
    },

    /**
     * 为防止环境变量过长, 请将多账号填在此处
     * 以 **大括号内容** 为模板依次复制(包含大括号),逗号分割
     *
     * ```txt
     * [
     *     {
     *     ...
     *     NUMBER: 1
     *     ...
     *     },
     *     {
     *     ...
     *     NUMBER: 2
     *     ...
     *     }
     * ]
     * ```
     */
    multiple_account_parm: [
        {
            COOKIE: '',
            NOTE: '',
            NUMBER: 1,
            CLEAR: true,
            WAIT: 60 * 1000,
            ACCOUNT_UA: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
        }
    ],

    /**
     * 推送相关参数
     */
    push_parm: {
        SCKEY: '',
        SENDKEY: '',
        QQ_SKEY: '',
        QQ_MODE: '',
        BARK_PUSH: '',
        BARK_SOUND: '',
        PUSHDEER_URL: '',
        PUSHDEER_PUSHKEY: '',
        TG_BOT_TOKEN: '',
        TG_USER_ID: '',
        TG_PROXY_HOST: '',
        TG_PROXY_PORT: '',
        DD_BOT_TOKEN: '',
        DD_BOT_SECRET: '',
        QYWX_AM: '',
        QYWX_KEY: '',
        IGOT_PUSH_KEY: '',
        PUSH_PLUS_TOKEN: '',
        PUSH_PLUS_USER: '',
        QMSG_KEY: '',
        QMSG_QQ: '',
        SMTP_HOST: '',
        SMTP_PORT: '',
        SMTP_USER: '',
        SMTP_PASS: '',
        SMTP_TO_USER: '',
        GOTIFY_URL: '',
        GOTIFY_APPKEY: ''
    }
});
