new Vue({
    el: '#app',
    data: {
        dataTab: 'tab1',
        selectDropdown: false,
        finalStep: false,
        showEmojiBtn: false,
        firstStepIconsNum: [],
        currentTabText: 'Никольские Ряды, Санкт-Петербург',
        dataValidate: '',
        dataResponse: {},
        config: {
            "emoji": [],
            "color": 0,
            "mood": 0
        },
        style: [
            { check: true },
            { check: true },
            { check: true }
        ],
        steps: {
            step1: false,
            step2: false,
            step3: false,
            step4: false,
            step5: false
        },
        overflowClass: {
            step1: false,
            step2: false,
            step3: false,
            step4: false,
            step5: false
        },
        tabClass: {
            tab1: true,
            tab2: false,
            tab3: false
        },
        step: 0,
        apiUrl: "https://elka2022.okko.tv"
    },
    mounted() {
        let uri = window.location.href.split('?');
        if (uri.length == 2) {
            let vars = uri[1].split('&');
            let getVars = {};
            let tmp = '';
            vars.forEach(function (v) {
                tmp = v.split('=');
                if (tmp.length == 2)
                    getVars[tmp[0]] = tmp[1];
            });
            this.dataResponse = getVars;
        }

        $.ajax({
            url: this.apiUrl + '/session',
            method: 'post',
            cache: false,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            // crossDomain: true,
            // headers: {
            //     'Access-Control-Allow-Origin': 'http://46.243.142.176'
            //     // "Accept": "application/json; odata=verbose"
            // },
            // dataType: 'html',
            data: JSON.stringify({
                "session": this.dataResponse.session,
                "location": this.dataResponse.location
            }),
            success: (data) => {
                this.dataValidate = data.SessionValid;
                if (!this.dataValidate) {
                    this.steps.step5 = true;
                    this.step = 5;
                    console.log('error')
                }
                console.log(data);
            },
            error: (error) => {
                // this.steps.step5 = true;
                // this.step = 5;
                console.log(error)
            }
        });

        this.firstStepIconCount();

        document.addEventListener('click', (e) => {
            if (this.selectDropdown) {
                if (e.target.className != 'select__item') {
                    this.toggleDropdown();
                }
            }
        });
    },
    methods: {
        addOverflowPrevPage(pageNum) {
            // alert(1)
            let key = pageNum;
            this.overflowClass[key] = true;
            setTimeout(() => {
                this.overflowClass[key] = true;
            }, 1000)
        },
        checkStyle(e) {
            let targetIndex = e.currentTarget.getAttribute('data-index');
            this.config.mood = targetIndex;
            for (let i = 0; i < this.style.length; i++) {
                this.style[i].check = false;
            }
            this.style[targetIndex].check = true;
            this.finalStep = true;
        },
        iconActive(e) {
            let targetIndex = e.currentTarget.getAttribute('data-index');

            this.firstStepIconsNum[targetIndex].checked = !this.firstStepIconsNum[targetIndex].checked;

            if (this.firstStepIconsNum[targetIndex].checked) {
                this.config.emoji.push(targetIndex);
            } else {
                let index = this.config.emoji.indexOf(targetIndex);
                this.config.emoji.splice(index, 1);
            }

            // console.log(this.config.emoji);

            for (let i = 0; i < this.firstStepIconsNum.length; i++) {
                if (this.firstStepIconsNum[i].checked) {
                    this.showEmojiBtn = true;
                    return;
                }
                this.showEmojiBtn = false;
            }
        },
        firstStepIconCount() {
            let count = 30;
            for (let i = 1; i <= count; i++) {
                let obj = {};
                obj.imgNum = i;
                obj.checked = false;
                this.firstStepIconsNum.push(obj);
            }
        },
        toggleDropdown() {
            this.selectDropdown = !this.selectDropdown;
        },
        tabShow(e) {
            let text = e.currentTarget.innerText;
            this.currentTabText = text;
            let eventTarget = e.currentTarget.getAttribute('data-tab');
            if (eventTarget != this.dataTab) {
                this.tabClass[this.dataTab] = false;
                this.dataTab = eventTarget;
                setTimeout(() => {
                    this.tabClass[eventTarget] = true;
                }, 100);
            }
            this.toggleDropdown();
        },
        startSteps(e) {
            let step = 'step' + e.currentTarget.getAttribute('data-step');
            this.step = e.currentTarget.getAttribute('data-step');
            this.config.color = e.currentTarget.getAttribute('data-color');
            this.steps[step] = true;
            // this.addOverflowPrevPage(step);
            if (step == 'step4') {
                $.ajax({
                    url: this.apiUrl + '/run',
                    method: 'post',
                    cache: false,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify({
                        "session": this.dataResponse.session,
                        "location": this.dataResponse.location,
                        "config": this.config
                    }),
                    success: (data) => {
                        console.log(data);
                    },
                    error: (error) => {
                        this.steps.step5 = true;
                        this.step = 5;
                        console.log(error);
                    }
                });
            }
        }
    }
});
