let quest1 = document.getElementById("quest1")
let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")
let a4 = document.getElementById("a4")
let go1 = document.getElementById("go1")
let correct = document.getElementById("correct")
let fals = document.getElementById("false")
let next1 = document.getElementById("next1")
let video = document.getElementById("video1")
let out = document.getElementById("out")
setTimeout(function(){
quest1.style.display = "none"
video.style.display = "none"
out.style.display = "block"
        if(a1.onclick || a2.onclick || a3.onclick || a4.onclick){
            out.style.display = "none"
        }
}, 31000)

a1.onclick = function(){
    quest1.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next1.style.display = "block"
    correct.style.display = "none"
    video.style.display = "none"
    out.style.display = "none"
    clearTimeout()

}
a2.onclick = function(){
    quest1.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next1.style.display = "block"
    correct.style.display = "none"
    video.style.display = "none"
    out.style.display = "none"
    clearTimeout()

}

a3.onclick = function(){
    quest1.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next1.style.display = "block"
    correct.style.display = "none"
    video.style.display = "none"
    out.style.display = "none"
    clearTimeout()

}
a4.onclick = function(){
    quest1.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next1.style.display = "block"
    correct.style.display = "block"
    video.style.display = "none"
    out.style.display = "none"
    clearTimeout()

}
let quest2 = document.getElementById("quest2")
let video2 = document.getElementById("video2")
next1.onclick = function(){
    go1.style.display = "none"
    quest2.style.display = "flex"
    video2.style.display = "block"
    setTimeout(function(){
        quest2.style.display = "none"
        video2.style.display = "none"
        out.style.display = "block"
        if(b1.onclick || b2.onclick || b3.onclick || b4.onclick){
            out.style.display = "none"
        }
    },31000)}
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
b1.onclick = function(){
    quest2.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "block"
    correct.style.display = "block"
    video.style.display = "none"
    out.style.display = "none"
video2.style.display = "none"
next1.style.display = "none"
clearTimeout()
}
b2.onclick = function(){
    quest2.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "block"
    correct.style.display = "none"
    video.style.display = "none"
    out.style.display = "none"
video2.style.display = "none"
clearTimeout()
next1.style.display = "none"

}
b3.onclick = function(){
    quest2.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "block"
    correct.style.display = "none"
    video.style.display = "none"
    out.style.display = "none"
    next1.style.display = "none"

    video2.style.display = "none"
    clearTimeout()

}
b4.onclick = function(){
    quest2.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "block"
    correct.style.display = "none"
    video.style.display = "none"
    out.style.display = "none"
video2.style.display = "none"
clearTimeout()
next1.style.display = "none"

}
let next2 = document.getElementById("next2")
let quest3 = document.getElementById("quest3")
let video3 = document.getElementById("video3")
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")
next2.onclick = function(){
    quest3.style.display = "flex"
    go1.style.display = "none"
    video3.style.display = "block"
    setTimeout(function(){
        quest3.style.display = "none"
        video3.style.display = "none"
        out.style.display = "block"
        if(c1.onclick || c2.onclick || c3.onclick || c4.onclick){
            out.style.display = "none"
        }
    },31000)
}
let next3 = document.getElementById("next3")
c1.onclick = function(){
    quest3.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video3.style.display = "none"
next3.style.display = "block"
next1.style.display = "none"
clearTimeout()
}
c2.onclick = function(){
    quest3.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video3.style.display = "none"
next3.style.display = "block"
next1.style.display = "none"
clearTimeout()
}
c3.onclick = function(){
    quest3.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    
    out.style.display = "none"
video3.style.display = "none"
next3.style.display = "block"
next1.style.display = "none"
clearTimeout()
}
c4.onclick = function(){
    quest3.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video3.style.display = "none"
next3.style.display = "block"
next1.style.display = "none"
clearTimeout()
}
let next4 = document.getElementById("next4")
let quest4 = document.getElementById("quest4")
let video4 = document.getElementById("video4")
let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let d3 = document.getElementById("d3")
let d4 = document.getElementById("d4")

next3.onclick = function(){
    go1.style.display = "none"
    quest4.style.display = "flex"
    video4.style.display = "block"
    quest4.style.gap = "100px"

    setTimeout(function(){
        quest4.style.display = "none"
        video4.style.display = "none"
        out.style.display = "block"
        if(d1.onclick || d2.onclick || d3.onclick || d4.onclick){
            out.style.display = "none"
        }
    },31000)
}
d1.onclick = function(){
    quest4.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video4.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "block"
clearTimeout()
}
d2.onclick = function(){
    quest4.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video4.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "block"
clearTimeout()
}
d3.onclick = function(){
    quest4.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video4.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "block"
clearTimeout()
}
d4.onclick = function(){
    quest4.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    
    out.style.display = "none"
video4.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "block"
clearTimeout()
}
let quest5 = document.getElementById("quest5")
let video5 = document.getElementById("video5")
let e1 = document.getElementById("e1")
let e2 = document.getElementById("e2")
let e3 = document.getElementById("e3")
let e4 = document.getElementById("e4")

next4.onclick = function(){
    go1.style.display = "none"
    quest5.style.display = "flex"
    video5.style.display = "block"

    setTimeout(function(){
        quest5.style.display = "none"
        video5.style.display = "none"
        out.style.display = "block"
        if(e1.onclick || e2.onclick || e3.onclick || e4.onclick){
            out.style.display = "none"
        }
    },31000)
}
let next5 = document.getElementById("next5")
e1.onclick = function(){
    quest5.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    
    out.style.display = "none"
video5.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "block"
clearTimeout()
}
e2.onclick = function(){
    quest5.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video5.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "block"
clearTimeout()
}
e3.onclick = function(){
    quest5.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video5.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "block"
clearTimeout()
}
e4.onclick = function(){
    quest5.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video5.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "block"
clearTimeout()
}
let quest6 = document.getElementById("quest6")
let video6 = document.getElementById("video6")
let f1 = document.getElementById("f1")
let f2 = document.getElementById("f2")
let f3 = document.getElementById("f3")
let f4 = document.getElementById("f4")


next5.onclick = function(){
    go1.style.display = "none"
    quest6.style.display = "flex"
    video6.style.display = "block"

    setTimeout(function(){
        quest6.style.display = "none"
        video6.style.display = "none"
        out.style.display = "block"

        if(f1.onclick || f2.onclick || f3.onclick || f4.onclick){
            out.style.display = "none"
        }
    },31000)
    
}

let next6 = document.getElementById("next6")
f1.onclick = function(){
    quest6.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video6.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "block"
clearTimeout()
}
f2.onclick = function(){
    quest6.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    
    out.style.display = "none"
video6.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "block"

clearTimeout()
}
f3.onclick = function(){
    quest6.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    
    out.style.display = "none"
video6.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "block"
clearTimeout()
}
f4.onclick = function(){
    quest6.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video6.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "block"
clearTimeout()
}
let quest7 = document.getElementById("quest7")
let video7 = document.getElementById("video7")
let g1 = document.getElementById("g1")
let g2 = document.getElementById("g2")
let g3 = document.getElementById("g3")
let g4 = document.getElementById("g4")
next6.onclick = function(){
    go1.style.display = "none"
    quest7.style.display = "flex"
    video7.style.display = "block"

    setTimeout(function(){
        quest7.style.display = "none"
        video7.style.display = "none"
        out.style.display = "block"
        quest7.style.gap = "30px"
        if(g1.onclick || g2.onclick || g3.onclick || g4.onclick){
            out.style.display = "none"
        }
    },31000)
    
}
let next7 = document.getElementById("next7")
g1.onclick = function(){
    quest7.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video7.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "block"
clearTimeout()
}
g2.onclick = function(){
    quest7.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video7.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "block"
clearTimeout()
}
g3.onclick = function(){
    quest7.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video7.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "block"
clearTimeout()
}
g4.onclick = function(){
    quest7.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    out.style.display = "none"
video7.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "block"
clearTimeout()
}
let quest8 = document.getElementById("quest8")
let video8 = document.getElementById("video8")
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")
let h4 = document.getElementById("h4")

next7.onclick = function(){
    go1.style.display = "none"
    quest8.style.display = "flex"
    video8.style.display = "block"

    setTimeout(function(){
        quest8.style.display = "none"
        video8.style.display = "none"
        out.style.display = "block"
        quest8.style.gap = "65px"
        if(h1.onclick || h2.onclick || h3.onclick || h4.onclick){
            out.style.display = "none"
        }
    },31000)
}
let next8 = document.getElementById("next8")

h1.onclick = function(){
    quest8.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video8.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "block"
clearTimeout()
}
h2.onclick = function(){
    quest8.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video8.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "block"
clearTimeout()
}
h3.onclick = function(){
    quest8.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    out.style.display = "none"
video8.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "block"
clearTimeout()
}
h4.onclick = function(){
    quest8.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video8.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "block"
clearTimeout()
}
let quest9 = document.getElementById("quest9")
let video9 = document.getElementById("video9")
let i1 = document.getElementById("i1")
let i2 = document.getElementById("i2")
let i3 = document.getElementById("i3")
let i4 = document.getElementById("i4")





next8.onclick = function(){
    go1.style.display = "none"
    quest9.style.display = "flex"
    video9.style.display = "block"

    setTimeout(function(){
        quest9.style.display = "none"
        video9.style.display = "none"
        out.style.display = "block"
        if(i1.onclick || i2.onclick || i3.onclick || i4.onclick){
            out.style.display = "none"
        }
    },31000)
}
let next9 = document.getElementById("next9")
i1.onclick = function(){
    quest9.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video9.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "block"
clearTimeout()
}
i2.onclick = function(){
    quest9.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video9.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "block"
clearTimeout()
}
i3.onclick = function(){
    quest9.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video9.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "block"
clearTimeout()
}
i4.onclick = function(){
    quest9.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    out.style.display = "none"
video9.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "block"
clearTimeout()
}
let quest10 = document.getElementById("quest10")
let video10 = document.getElementById("video10")
let j1 = document.getElementById("j1")
let j2 = document.getElementById("j2")
let j3 = document.getElementById("j3")
let j4 = document.getElementById("j4")

next9.onclick = function(){
    go1.style.display = "none"
    quest10.style.display = "flex"
    video10.style.display = "block"

    setTimeout(function(){
        quest10.style.display = "none"
        video10.style.display = "none"
        out.style.display = "block"
        if(j1.onclick || j2.onclick || j3.onclick || j4.onclick){
            out.style.display = "none"
        }
    },31000)
}
let next10 = document.getElementById("next10")
j1.onclick = function(){
    quest10.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video10.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "block"
clearTimeout()
}
j2.onclick = function(){
    quest10.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video10.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "block"
clearTimeout()
}
j3.onclick = function(){
    quest10.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    out.style.display = "none"
video10.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "block"
clearTimeout()
}
j4.onclick = function(){
    quest10.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video10.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "block"
clearTimeout()
}
let quest11 = document.getElementById("quest11")
let video11 = document.getElementById("video11")
let k1 = document.getElementById("k1")
let k2 = document.getElementById("k2")
let k3 = document.getElementById("k3")
let k4 = document.getElementById("k4")
next10.onclick = function(){
    go1.style.display = "none"
    quest11.style.display = "flex"
    video11.style.display = "block"

    setTimeout(function(){
        quest11.style.display = "none"
        video11.style.display = "none"
        out.style.display = "block"
        if(k1.onclick || k2.onclick || k3.onclick || k4.onclick){
            out.style.display = "none"
        }
    },31000)
}
let next11 = document.getElementById("next11")
k1.onclick = function(){
    quest11.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video11.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "block"
clearTimeout()
}
k2.onclick = function(){
    quest11.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    out.style.display = "none"
video11.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "block"
clearTimeout()
}
k3.onclick = function(){
    quest11.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video11.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "block"
clearTimeout()
}
k4.onclick = function(){
    quest11.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video11.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "block"
clearTimeout()
}
let quest12 = document.getElementById("quest12")
let video12 = document.getElementById("video12")
let l1 = document.getElementById("l1")
let l2 = document.getElementById("l2")
let l3 = document.getElementById("l3")
let l4 = document.getElementById("l4")

next11.onclick = function(){
    go1.style.display = "none"
    quest12.style.display = "flex"
    video12.style.display = "block"

    setTimeout(function(){
        quest12.style.display = "none"
        video12.style.display = "none"
        out.style.display = "block"
        if(l1.onclick || l2.onclick || l3.onclick || l4.onclick){
            out.style.display = "none"
        }
    },31000)
}
let next12 = document.getElementById("next12")
l1.onclick = function(){
    quest12.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video12.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "none"
next12.style.display = "block"
clearTimeout()
}
l2.onclick = function(){
    quest12.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video12.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "none"
next12.style.display = "block"
clearTimeout()
}
l3.onclick = function(){
    quest12.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "none"
    next2.style.display = "none"
    correct.style.display = "block"
    out.style.display = "none"
video12.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "none"
next12.style.display = "block"
clearTimeout()
}
l4.onclick = function(){
    quest12.style.display = "none"
    go1.style.display = "flex"
    fals.style.display = "block"
    next2.style.display = "none"
    correct.style.display = "none"
    out.style.display = "none"
video12.style.display = "none"
next3.style.display = "none"
next1.style.display = "none"
next4.style.display = "none"
next5.style.display = "none"
next6.style.display = "none"
next7.style.display = "none"
next8.style.display = "none"
next9.style.display = "none"
next10.style.display = "none"
next11.style.display = "none"
next12.style.display = "block"
clearTimeout()
}
next12.onclick = function(){
    location.reload()
}