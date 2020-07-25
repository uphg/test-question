import testData from './test.js'

let unfilteredData = testData     // 未筛选的数据
let reset = get_el('#resetContent')
let app = get_el('#app')
let pdf = get_el('#printPDF')
let localKey = 'uphgQuestion'     // localStorage 数据存储的名称
initElement(app, { key: localKey,value: unfilteredData })
// 重置按钮
reset.onclick = function () {
    // 获取随机筛选后的数据
    let QuestionList = addChapter(unfilteredData)
    // 将它添加到 dom 中
    loadTemplate(app, QuestionList)
    // 将它存储到 local 中
    setLocal(localKey, QuestionList)
}
// PDF打印按钮
pdf.onclick = function () {
    window.print() 
}

// 随机筛选数据
function addChapter(data) {
    let isData = []
    if (type(data) === 'array' || type(data) === 'object') {
        isData = Array.from(data)
    } else {
        console.error('请传入一个「数组」或「伪数组」')
    }
    let title = ''
    // problemList：要展示的问题，getQuestionList：要展示的所有数据
    let [problemList, getQuestionList] = [[], []]
    isData.forEach((item, index) => {
        // 清空之前的内容
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
    })
    return getQuestionList // 返回当前随机的后的问题
}
// 第一次加载数据
function initElement(element, local = {}){
    let data = {}
    if(asserLocal(local.key)){
        data = getLocal(local.key)
    }else{
        setLocal(local.key, local.value)
        data = local.value
    }
    loadTemplate(element, data)
}
// 在指定元素中加载模板
function loadTemplate(element,data){
    let [parent, template, ulContent, title] = ['', '', '', '']
    let list = []
    data.forEach((item) => {
        ulContent = ''
        title = item.title
        list = item.text
        list.forEach(text => {
            ulContent += `<li>${text}</li>`
        })
        // 将抽取后的题目和大标题放入模板中
        template = `<section class="part"><h2>${title}</h2><ol>${ulContent}</ol></section>`
        // 将模板添加到一个div中
        parent += template
    })
    element.innerHTML = parent
    return parent
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

// 将字符串格式的HTML转换为DOM元素
// function changeLabel(element){
//     let div = document.createElement('div')
//     div.innerHTML = element
//     return div.firstElementChild
// }


function asserLocal(name){
    return localStorage.hasOwnProperty(name)
}

// 根据存储名称获取 localStorage 的值
function getLocal(name){
    return JSON.parse(localStorage.getItem(name))
}

// 设置/存储 localStorage 的值
function setLocal(name, data){
    localStorage.setItem(name, JSON.stringify(data))
}

// 判断数据类型
function type(o) {
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
