var popup = new Vue({
    el: '#popup-wrap',
    data: {
        isActive: false,
        currentIndex: 0,
        startTime: "",
        endTime: "",
        title: "",
    },
    methods: {
        submitBtn: function () {
            if (this.currentIndex < 0) {
                var listItem = {
                    startTime: this.startTime,
                    endTime: this.endTime,
                    title: this.title
                }
                app.todoList.push(listItem);
            }
            else {
                app.todoList[this.currentIndex].startTime = this.startTime;
                app.todoList[this.currentIndex].endTime = this.endTime;
                app.todoList[this.currentIndex].title = this.title;
            }
            this.isActive = !this.isActive;
        },
        closeBtn: function () {
            this.isActive = !this.isActive;
        },
    }
})

var app = new Vue({
    el: '#wrap',
    data: {
        titleSearch: "",
        todoList: [
            {
                title: 'Title 1',
                startTime: '2019-08-20',
                endTime: '2019-08-31'
            },
            {
                title: 'Title 2',
                startTime: '2019-08-20',
                endTime: '2019-08-31'
            },
            {
                title: 'Title 3',
                startTime: '2019-08-20',
                endTime: '2019-08-31'
            },
        ],
    },
    methods: {
        addClick: function () {
            popup.currentIndex = -1,
                popup.startTime = "",
                popup.endTime = "",
                popup.title = "",
                popup.isActive = !popup.isActive;
        },
        editClick: function (idx) {
            popup.currentIndex = idx,
                popup.startTime = this.todoList[idx].startTime,
                popup.endTime = this.todoList[idx].endTime,
                popup.title = this.todoList[idx].title,
                popup.isActive = !popup.isActive;
        },
        delClick: function (idx) {
            this.todoList.splice(idx, 1);
        },
    },
    computed: {
        filterSearch: function () {
            var search = this;
            return this.todoList.filter(function (item) {
                return item.title.toLowerCase().indexOf(search.titleSearch.toLowerCase()) !== -1;
            });
        },
    },
})

