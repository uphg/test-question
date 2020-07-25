import data from './test.js'

let reset = get_el('#resetContent')
let app = get_el('#app')
let pdf = get_el('#printPDF')


addChapter(data)

// 重置按钮
reset.onclick = function () {
    addChapter(data)
}
pdf.onclick = function () {
    window.print() 
}

// 根据数据随机显示内容
function addChapter(data) {
    let isData = []
    if (type(data) === 'array' || type(data) === 'object') {
        isData = Array.from(data)
    } else {
        console.error('请传入一个「数组」或「伪数组」')
    }
    // let isData = []
    let numberIsQuestions = []
    // isData.push(...data)
    let [parent, template, ulContent, title] = ['', '', '', '']
    // problemList：要展示的问题，getQuestionList：要展示的所有数据
    let [problemList, getQuestionList] = [[], []]
    let ques = numberIsQuestions

    isData.forEach((item, index) => {
        // 清空之前的内容
        ulContent = ''
        title = item.title
        //随机抽取指定数量的题目
        if (!!item.random) {
            let number = parseInt(item.random)
            problemList = randomArray(item.text, number).result
            getQuestionList[index] = {
                title,
                text: [...problemList]
            }
        } else {
            problemList = item.text
            getQuestionList[index] = {
                title,
                text: [...problemList]
            }
        }
        problemList.forEach(text => {
            ulContent += `<li>${text}</li>`
        })
        // 将抽取后的题目和大标题放入模板中
        template = `
        <section class="part">
            <h2>${title}</h2>
            <ol>${ulContent}</ol>
        </section>
        `
        // 将模板添加到一个div中
        parent += template
    })
    app.innerHTML = parent
    return getQuestionList // 返回当前随机的后的问题
}

// 获取元素
function get_el(element) {
    return document.querySelector(element)
}

// 随机抽取题目
function randomArray(array, number) {
    let isArray = Array.from(array)
    let result = []
    for (let i = 0; i < number; i++) {
        let single = Math.floor(Math.random() * isArray.length)
        result.push(isArray.splice(single, 1)[0])
    }
    return {
        result: result, // 随机抽取后的数组
        after: isArray  // 原数组的拷贝
    }
}

// // 将字符串格式的HTML转换为DOM元素
// function changeLabel(element){
//     let div = document.createElement('div')
//     div.innerHTML = element
//     return div.firstElementChild
// }

// // 根据存储名称获取 localStorage 的值
// function getLocal(key){
//     return JSON.parse(localStorage.getItem(key))
// }

// // 设置/存储 localStorage 的值
// function setLocal(key, data){
//     localStorage.setItem(key, JSON.stringify(data))
// }

// 判断数据类型
function type(o) {
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
