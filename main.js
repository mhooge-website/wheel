var optionsCount = 0;
var colors = ['rgb(141, 124, 46)', 'rgb(251, 252, 157)', 'rgb(98, 191, 125)', 'rgb(46, 10, 247)',
    'rgb(237, 163, 102)', 'rgb(229, 182, 72)', 'rgb(89, 12, 143)', 'rgb(218, 202, 246)',
    'rgb(194, 23, 197)', 'rgb(86, 122, 247)', 'rgb(205, 19, 141)', 'rgb(25, 254, 240)',
    'rgb(247, 191, 132)', 'rgb(56, 50, 135)', 'rgb(207, 151, 99)', 'rgb(19, 157, 4)',
    'rgb(16, 234, 100)', 'rgb(190, 42, 68)', 'rgb(248, 243, 0)', 'rgb(142, 18, 12)',
    'rgb(164, 184, 88)', 'rgb(113, 226, 89)', 'rgb(148, 195, 166)', 'rgb(115, 214, 76)',
    'rgb(183, 139, 234)', 'rgb(210, 158, 251)', 'rgb(16, 239, 38)', 'rgb(1, 6, 75)',
    'rgb(0, 193, 98)', 'rgb(211, 197, 147)', 'rgb(159, 21, 219)', 'rgb(0, 157, 224)',
    'rgb(254, 18, 174)', 'rgb(56, 149, 16)', 'rgb(185, 17, 51)', 'rgb(226, 2, 103)',
    'rgb(216, 74, 197)', 'rgb(221, 205, 95)', 'rgb(106, 97, 235)', 'rgb(51, 208, 98)',
    'rgb(135, 174, 33)', 'rgb(157, 170, 20)', 'rgb(173, 187, 9)', 'rgb(173, 241, 111)',
    'rgb(113, 215, 25)', 'rgb(61, 193, 101)', 'rgb(48, 204, 203)', 'rgb(221, 189, 24)',
    'rgb(205, 248, 155)', 'rgb(124, 24, 216)', 'rgb(61, 136, 10)', 'rgb(154, 166, 77)',
    'rgb(165, 92, 65)', 'rgb(188, 159, 39)', 'rgb(214, 12, 246)', 'rgb(23, 65, 234)',
    'rgb(55, 180, 118)', 'rgb(79, 5, 8)', 'rgb(95, 227, 250)', 'rgb(250, 179, 134)',
    'rgb(194, 190, 43)', 'rgb(5, 22, 244)', 'rgb(54, 245, 80)', 'rgb(151, 32, 140)',
    'rgb(200, 191, 231)', 'rgb(100, 238, 129)', 'rgb(81, 97, 244)', 'rgb(45, 3, 238)',
    'rgb(137, 249, 122)', 'rgb(219, 11, 77)', 'rgb(59, 140, 73)', 'rgb(51, 20, 48)',
    'rgb(135, 136, 24)', 'rgb(124, 229, 31)', 'rgb(148, 157, 131)', 'rgb(90, 242, 244)',
    'rgb(23, 44, 151)', 'rgb(121, 188, 192)', 'rgb(68, 16, 208)', 'rgb(250, 6, 60)',
    'rgb(149, 251, 220)', 'rgb(131, 134, 61)', 'rgb(243, 152, 237)', 'rgb(179, 159, 168)',
    'rgb(214, 218, 208)', 'rgb(194, 13, 248)', 'rgb(6, 103, 70)', 'rgb(78, 149, 234)',
    'rgb(178, 5, 44)', 'rgb(76, 189, 64)', 'rgb(16, 148, 180)', 'rgb(40, 163, 100)',
    'rgb(252, 171, 60)', 'rgb(119, 233, 142)', 'rgb(124, 3, 18)', 'rgb(243, 209, 56)',
    'rgb(74, 0, 226)', 'rgb(85, 93, 210)', 'rgb(103, 216, 48)', 'rgb(121, 117, 220)',
    'rgb(205, 180, 75)', 'rgb(247, 95, 169)', 'rgb(132, 17, 158)', 'rgb(6, 240, 139)',
    'rgb(111, 192, 220)', 'rgb(170, 18, 12)', 'rgb(207, 162, 165)', 'rgb(179, 65, 120)',
    'rgb(125, 62, 235)', 'rgb(230, 240, 63)', 'rgb(7, 115, 105)', 'rgb(234, 245, 189)',
    'rgb(25, 77, 209)', 'rgb(147, 139, 177)', 'rgb(60, 230, 195)', 'rgb(19, 141, 227)',
    'rgb(36, 197, 234)', 'rgb(57, 174, 118)', 'rgb(127, 155, 222)', 'rgb(38, 133, 154)',
    'rgb(71, 99, 194)', 'rgb(141, 91, 232)', 'rgb(36, 189, 168)', 'rgb(54, 178, 248)',
    'rgb(189, 14, 2)', 'rgb(251, 79, 251)', 'rgb(26, 189, 185)', 'rgb(24, 30, 114)',
    'rgb(20, 8, 143)', 'rgb(218, 24, 76)', 'rgb(120, 237, 238)', 'rgb(88, 5, 34)',
    'rgb(21, 206, 6)', 'rgb(103, 200, 131)', 'rgb(208, 48, 22)', 'rgb(18, 193, 43)',
    'rgb(143, 61, 58)', 'rgb(102, 41, 91)', 'rgb(90, 223, 254)', 'rgb(46, 208, 138)',
    'rgb(96, 204, 245)', 'rgb(235, 3, 202)', 'rgb(125, 11, 99)', 'rgb(233, 158, 208)',
    'rgb(102, 255, 249)', 'rgb(43, 108, 109)', "black", "white", "cyan", "brown", "purple",
    "orange", "yellow", "green", "blue", "red"
];
var defaultTitle = true;
var cookieID = null;
const MAX_OPTIONS = colors.length;

function createWheel(options=[], title="") {
    return {
        angle: 270,
        options: options,
        title: title,
        spinning: false
    }
}

function createOption(name, color) {
    return {
        text: name,
        color: color
    }
}

function colorToRGBA(color) {
    var cvs, ctx;
    cvs = document.createElement('canvas');
    cvs.height = 1;
    cvs.width = 1;
    ctx = cvs.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    let data = ctx.getImageData(0, 0, 1, 1).data;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i]);
    }
    return arr;
}

function swapViews(oldId, newId, displayType="block") {
    document.getElementById(oldId).style.display = "none";
    document.getElementById(newId).style.display = displayType;
}

function copyURL() {
    let field = document.getElementById("share-url");
    field.select();
    field.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function generateURL(wheel, wheel_id=null) {
    let options = wheel.options;
    let title = wheel.title;
    let url = "https://mhooge.com/projects/wheel/index.html?";
    let start = 1;
    if (wheel_id != null) {
        url += "cid="+encodeURIComponent(wheel_id) + "&";
    }
    if (!wheel["defaultTitle"]) {
        url += "title="+encodeURIComponent(title) + "&";
    }
    else if (wheel_id == null) {
        start += 1;
        url += "op1=" + options[0].text + "&";
    }
    for (let i = start; i <= options.length; i++) {
        let opt = encodeURIComponent(options[i-1].text);
        url += "op" + i + "=" + opt;
        if (i != options.length)
            url += "&";
    }
    return url;
}

function closeModal(modal) {
    document.getElementById(modal).style.display = "none";
}

function addAndSelect(wheel, canvas) {
    addOption(wheel, canvas);
    drawWheel(wheel, canvas);
    let newOptions = document.getElementsByClassName("wheel-option");
    newOptions.item(newOptions.length-2).children[0].select();
}

function addOption(wheel, canvas, optText=null) {
    optionsCount++;
    let parent = document.getElementById("wheel-options");
    let options = document.getElementsByClassName("wheel-option");
    let count = options.length;
    if (count == 3) {
        options.item(0).children[0].children[1].disabled = false;
        options.item(1).children[0].children[1].disabled = false;
    }
    let copy = options.item(0).cloneNode(true);
    let optInput = copy.getElementsByClassName("option-input").item(0);
    let optDel = copy.getElementsByClassName("option-delete").item(0);
    optDel.onclick = function() {
        deleteOption(copy, wheel);
        drawWheel(wheel, canvas);
    }
    let text = optText == null ? "Option " + (optionsCount) : optText;
    let color = colors.pop();
    optInput.value = text;
    let rgba = colorToRGBA(color);
    rgba[3] = 0.55;
    copy.children[0].style.setProperty("background-color", "rgba(" + rgba.join(", ") + ")");
    copy.style.display = "inline-block";
    const opt = createOption(optInput.value, color);
    optInput.onchange = function() {
        opt.text = optInput.value;
    }
    parent.appendChild(copy);
    wheel.options.push(opt);
    if (options.length == MAX_OPTIONS+1) {
        document.getElementById("add-option-btn").disabled = true;
    }
}

function deleteOption(option, wheel) {
    let parent = document.getElementById("wheel-options");
    let text = option.getElementsByClassName("option-input").item(0).value;
    parent.removeChild(option);
    let options = document.getElementsByClassName("wheel-option");
    if (options.length == 3) {
        options.item(0).children[0].children[1].disabled = true;
        options.item(1).children[0].children[1].disabled = true;
    }
    let newArr = [];
    for (let i = 0; i < wheel.options.length; i++) {
        if (wheel.options[i].text != text)
            newArr.push(wheel.options[i]);
        else
            colors.push(wheel.options[i].color);
    }
    wheel.options = newArr;
    if (options.length == MAX_OPTIONS) {
        document.getElementById("add-option-btn").disabled = false;
    }
}

function euclDist(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

function drawWheel(wheel, canvas) {
    let origin = canvas.width/2 - 2;
    eraseAll(canvas);

    let arcLength = 360 / wheel.options.length;
    let arcRad = Math.radians(arcLength);
    let circle = Math.PI * 2;
    for (let i = 0; i < wheel.options.length; i++) {
        let angle = ((arcLength * i) + wheel.angle) % 360;
        let radians = Math.radians(angle);
        setFillColor(wheel.options[i].color);
        let end = (radians + arcRad) % circle
        fillArc(origin+1, origin+1, origin, radians, end);
    }

    drawCircle(origin+1, origin+1, origin);
    setFillColor("rgb(50, 50, 50)");
    fillPath([origin-10, origin+1, origin+11], [0, 20, 0]);
}

function getWinner(wheel) {
    let fixedAngle = 360 - Math.abs(wheel.angle - 270) % 360;
    return Math.floor((fixedAngle / (360 / wheel.options.length))) % wheel.options.length;
}

function spin(wheel) {
    wheel.spinning = true;
    let canvas = document.getElementsByTagName("canvas").item(0);
    let winningDiv = document.getElementById("winner-div");
    winningDiv.style.display = "none";
    winningDiv.style.animationName = "none";
    wheel.angle = 270;
    let deltaMin = 5;
    let deltaMax = 12;
    let initialD = deltaMin + Math.random() * (deltaMax - deltaMin);
    let frictionMin = 0.99
    let frictionMax = 0.9996
    let delay = 10;
    let intervalId = setInterval(function() {
        wheel.angle += initialD;
        drawWheel(wheel, canvas);
        let friction = frictionMin + Math.random() * (frictionMax - frictionMin);
        initialD *= friction;
        if (initialD < 0.05) {
            clearInterval(intervalId);
            let winner = getWinner(wheel);
            document.getElementById("winning-option").textContent = wheel.options[winner].text;
            winningDiv.style.display = "block";
            winningDiv.style.top = (canvas.offsetTop + (canvas.offsetHeight / 2)) - winningDiv.offsetHeight / 2 + "px";
            winningDiv.style.left = canvas.offsetLeft + (canvas.offsetWidth / 2) - winningDiv.offsetWidth / 2 + "px";
            winningDiv.style.animationName = "wheelFinished";
            wheel.spinning = false;
            toggleWheelLocked(false);
        }
    }, delay);
}

function parseWheelDetails(urlParams) {
    let start = 0;
    let idSplit = urlParams[0].split("=");
    let titleSplit1 = urlParams[0].split("=");
    let titleSplit2 = urlParams[1].split("=");
    let options = [];
    let titleDefault = true;
    let idCookie = null;
    let title = "";
    if (idSplit[0] == "cid") {
        idCookie = idSplit[1];
        start += 1;
    }
    if (titleSplit1[0] == "title") {
        start += 1;
        title = decodeURIComponent(titleSplit1[1]);
        titleDefault = false;
    }
    else if (titleSplit2[0] == "title") {
        start += 1;
        title = decodeURIComponent(titleSplit2[1]);
        titleDefault = false;
    }
    else {
        title = "Wheel of " + getTitleFlavor();
    }
    let colorCopy = JSON.parse(JSON.stringify(colors));
    for (let i = start; i < urlParams.length; i++) {
        let val = decodeURIComponent(urlParams[i].split("=")[1]);
        let color = colorCopy.pop();
        options.push(createOption(val, color));
    }
    let wheel = createWheel(options, title);
    wheel["defaultTitle"] = titleDefault;
    wheel["cookieID"] = idCookie;
    return wheel;
}

function saveWheelToCookie(wheel, cid) {
    let url = generateURL(wheel);
    url = url.split("/");
    url = url[url.length-1];
    url = url.split("?")[1];
    document.cookie = cid + "=" + url + "; expires=Fri, 1 Jan 2100 12:00:00 UTC";
}

function showWheelSavePopup() {
    let popup = document.getElementById("wheel-saved-popup");
    popup.style.display = "block";
    popup.style.animationName = "wheelSaved";
    let delay = window.getComputedStyle(popup, null).animationDuration.replace("s", "");
    setTimeout(function() {
        popup.style.display = "none";
        popup.style.animationName = "none";
    }, delay * 1000);
}

function getWheelsFromCookies() {
    let split = document.cookie.split(";");
    let wheels = {};
    for (let i = 0; i < split.length; i++) {
        let kv = split[i].split("=");
        if (!kv[0].trim().startsWith("wheel")) {
            continue;
        }
        let dataIndex = split[i].indexOf("=");
        let wheelData = split[i].substring(dataIndex+1).split("&");
        wheels[kv[0].trim()] = parseWheelDetails(wheelData);
    }
    return wheels;
}

function deleteCookie(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function populateLoadModal(wheels) {
    let modal = document.getElementById("load-modal");
    let parent = document.getElementById("load-wheels-div");
    document.getElementById("load-wheel-desc").textContent = "Your saved wheels";
    document.getElementById("load-wheel-confirm-btn").textContent = "Load";
    modal.classList.remove("empty");
    modal.classList.add("non-empty");
    for (var key in wheels) {
        let wheel = wheels[key];
        let clone = document.getElementsByClassName("wheel-preview").item(0).cloneNode(true);
        clone.style.display = "inline-block";
        clone.children[0].textContent = wheel.title;
        clone.dataset["wheel_id"] = key;
        clone.onclick = function() {
            let allPreviews = document.getElementsByClassName("wheel-preview");
            for (let i = 0; i< allPreviews.length; i++) {
                allPreviews.item(i).classList.remove("selected");
            }
            clone.classList.add("selected");
            selected = true;
        }

        let deleteBtn = clone.getElementsByClassName("delete-cookie-btn").item(0);
        deleteBtn.onclick = function() {
            deleteCookie(key);
            parent.removeChild(clone);
        }

        let prevCanvas = clone.getElementsByClassName("wheel-preview-canvas").item(0);
        prevCanvas.height = 100;
        prevCanvas.width = 100;
        prevCanvas.style.setProperty("background-color", "transparent");

        setHelperContext(prevCanvas.getContext("2d"));
        setStrokeColor("white");

        drawWheel(wheel, prevCanvas);
        parent.appendChild(clone);
    }
}

function toggleWheelLocked(locked) {
    let options = document.getElementsByClassName("wheel-option");
    let startBtn = document.getElementById("start-btn")
    startBtn.disabled = locked;
    for (let i = 0; i < options.length; i++) {
        let inp = options.item(i).getElementsByClassName("option-input").item(0);
        let btn = options.item(i).getElementsByClassName("option-delete").item(0);
        inp.disabled = locked;
        btn.disabled = locked;
    }
}

function getTitleFlavor() {
    let titles = ["Fortune", "Destiny", "Truth", "Wisdom", "Insight", "Fate", "Justice", "Greatness"];
    return titles[Math.floor(Math.random() * titles.length)];
}

function setDocTitle(title) {
    let wheelTitle = title;
    if (!wheelTitle.toLowerCase().startsWith("wheel of")) {
        wheelTitle = "Wheel of " + title;
    }
    document.title = wheelTitle;
}

function styleIcons(icon, index) {
    var linkElm = icon.contentDocument.createElementNS("http://www.w3.org/1999/xhtml", "link");
    linkElm.setAttribute("href", "/projects/wheel/style.css");
    linkElm.setAttribute("type", "text/css");
    linkElm.setAttribute("rel", "stylesheet");
    let svg = icon.contentDocument.getElementById("Capa_1");
    svg.id = "icon-" + index;
    svg.appendChild(linkElm)
    icon.dataset["styled"] = 1;
}

function objLen(obj) {
    if (obj.constructor === Object) {
        return Object.entries(obj).length;
    }
    return 0;
}

function loadWheel(cookieWheels) {
    let selectedWheels = document.getElementsByClassName("selected");
    if (selectedWheels.length != 0) {
        let selectedWheel = selectedWheels.item(0);
        let wheel = cookieWheels[selectedWheel.dataset["wheel_id"]];
        let url = generateURL(wheel, selectedWheel.dataset["wheel_id"]);
        window.location.href = url;
    }
    else {
        document.getElementById("load-modal").style.display = "none";
    }
}

function newWheel() {
    window.location.href = window.location.pathname;
}

let wheelObj = createWheel();

let canvas = document.getElementsByTagName("canvas").item(0);
canvas.height = window.innerHeight/2;
canvas.width = canvas.height;
canvas.style.setProperty("background-color", window.getComputedStyle(document.body, null).backgroundColor);

let wheelCookies = getWheelsFromCookies();
let cookieLen = objLen(wheelCookies);

let urlQuery = window.location.search;
let split = urlQuery.split("?");
let title = "";
if (split.length > 1) {
    let params = split[1].split("&");
    let wheelDetails = parseWheelDetails(params);
    defaultTitle = wheelDetails.defaultTitle;
    cookieID = wheelDetails.cookieID;
    for (let i = 0; i < wheelDetails.options.length; i++) {
        addOption(wheelObj, canvas, wheelDetails.options[i].text);
    }
    title = wheelDetails.title;
}
else {
    addOption(wheelObj, canvas, "Yes");
    addOption(wheelObj, canvas, "No");
    title = "Wheel of " + getTitleFlavor();
}
if (cookieLen > 0) {
    populateLoadModal(wheelCookies);
}
setDocTitle(title);
document.getElementById("wheel-title").value = title;
wheelObj.title = title;

setHelperContext(canvas.getContext("2d"));
setStrokeColor("white");

drawWheel(wheelObj, canvas);

document.getElementById("add-option-btn").onclick = function() {
    addOption(wheelObj, canvas);
    drawWheel(wheelObj, canvas);
}
document.getElementById("share-wheel-btn").onclick = function() {
    let url = generateURL(wheelObj);
    document.getElementById("share-url").value = url;
    document.getElementById("share-modal").style.display = "block";
}
document.getElementById("new-wheel-btn").onclick = function() {
    document.getElementById("delete-modal").style.display = "block";
}
document.getElementById("save-wheel-btn").onclick = function() {
    let cid = "wheel" + cookieLen;
    if (cookieID != null)
        cid = cookieID;
    saveWheelToCookie(wheelObj, cid);
    showWheelSavePopup();
    cookieID = cid;
}
document.getElementById("load-wheel-btn").onclick = function() {
    let modal = document.getElementById("load-modal");
    modal.style.display = "block";
    modal.style.setProperty("top", ((window.innerHeight/2) - (modal.offsetHeight/2)) + "px");
}
document.getElementById("wheel-title").onchange = function() {
    let text = document.getElementById("wheel-title").value;
    defaultTitle = false;
    setDocTitle(text);
    wheelObj.title = text;
}
document.getElementById("load-wheel-confirm-btn").onclick = function() {
    loadWheel(wheelCookies);
}
window.addEventListener("keydown", function(e) {
    if (e.key == "+" && e.altKey) {
        addAndSelect(wheelObj, canvas);
    }
});
let startBtn = document.getElementById("start-btn");
startBtn.onclick = function() {
    if (!wheelObj.spinning) {
        toggleWheelLocked(true);
        spin(wheelObj);
    }
}
let svgs = document.getElementsByClassName("svg-obj");
for (let i = 0; i < svgs.length; i++) {
    let obj = svgs.item(i);
    setTimeout(function() {
        setTimeout(function() {
            styleIcons(obj, i+1);
        }, 600);
    })
}