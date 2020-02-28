module.exports = {
	// InstagramBot.js Configs
	"debug": true,
	"login": true,
	"ui": false, // only for social-manager-tools

	// Instagram Account
	"instagram_username": "user", // without @
	"instagram_password": "pass",
	"instagram_hashtag": ["موفقیت", "ماجراجویی", "برنامه_نویسی","برنامه_نویس", "خلاقیت", "بازیگوشی","آرزو", "کارآفرین", "امید","ثروت", "ثروتمند", "نوآوری","کسب_و_کار", "سرمایه_گذاری", "اراده"], // without #, recommended more than 20
	"instagram_pin": "sms", // method to receive pin (email or sms)

	// BOT Configs
	// [WORK] likemode_classic          - select random hashtag from config list and like 1 random photo (of last 20) | 400-600 like/day.
	// [WORK] likemode_realistic        - select random hashtag from config list, like fast 10-12 photo and sleep 15-20min. Sleep at night
	// [WORK] likemode_superlike        - select random hashtag from config list and like 3 random photo of same user | 400-600 like/day.
	// [WORK] likemode_competitor_users - select account, select random followers, like 10-12 photo and sleep 15-20min.
	// [WORK] comment_mode              - leave a comment under the photo via hashtag.
	// [WORK] fdfmode_classic           - follow 30 users, and defollow the first followed at 31 follow (in loop). This method is not detected from socialblade. ~1h | 300/300 follow-defollow/day.
	"bot_mode": "fdfmode_classic",
	"bot_likeday_min": 700,      // work in all likemode_*
	"bot_likeday_max": 800,      // work in all likemode_*. In 2018 limit instagram is 1000/day
	"bot_sleep_night": true,    // if you need stop bot in night
	"bot_start_sleep": "7:00",   // sleep from 00:00 to 7:00 am, work in likemode_realistic, comment_mode, likemode_superlike and likemode_competitor_users
	"bot_superlike_n": 3,        // superlike number of likes for user
	"bot_followday": 300,        // number of follow-defollow user/day, work in fdfmode_classic. In 2018 limit instagram is 500/day
	"bot_followrotate": 30,      // follow 30 users, and defollow the first followed at 31 follow (in loop), work in fdfmode_classic | If is 0 defollow all followed previously by bot
	"bot_userwhitelist": ["nabz_zendegi", "movafaghiat__official", "successfull7", "successfull.mind"],   // usernames without @ | don't defollow this users on follow-defollow mode, work in fdfmode_classic
	"comment_mode": {
		"comments": {
			"type": "array",
			"source": [],
		}
	},
	"likemode_competitor_users": {
		"account": "user_nickname" // without @
	},

	// Puppeteer Configs
	"chrome_headless": true,
	"chrome_options": ["--disable-gpu", "--no-sandbox", "--window-size=1024x768"],
	"executable_path": "/usr/bin/chromium-browser", // example for Mac OS: /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome

	// DATABASES
	"fdfdatabase_path": "./databases/fdf.db", // databases with username of followed users with follodefollow mode
	"logdb_path": "./databases/logs.db",      // logs in sqllite database for better report

	// LOG
	"pin_path": "./loginpin.txt",
	"log_path": "./logs/debug.log",
	"logerr_path": "./logs/errors.log",
	"screenshot_path": "./logs/screenshot/",
	"log": {
		"drivers": ["console"], // slack or console
		"screenshot": false,  // disable or enable screenshot in logs folder
		"channels": {
			"console": "",
			"slack": {
				"webhook": ""
			}
		}
	}
};