var form = document.myform;
// 1. check() : 모든 항목의 공백을 체크하여 공백이 있는 경우 입력하라는 메시지 출력하고 submit이 이루어지지 않도록 합니다.
// 취미는 반드시 2개이상 체크하였는지 확인합니다.
function check(){
    if (form.id.value=="") {
        alert("아이디를 입력하세요");
        form.id.focus();
        return false;
    } else if(form.pass.value=="") {
        alert("비밀번호를 입력하세요");
        form.id.focus();
        return false;
    } else if(form.jumin1.value=="" || form.jumin2.value=="") {
        alert("주민번호를 입력하세요");
        form.jumin1.focus();
        return false;
    } else if(form.email.value=="" || form.domain.value=="") {
        alert("이메일를 입력하세요");
        form.email.focus();
        return false;
    } else if(!(form.gender[0].checked || form.gender[1].checked )) {
        alert("성별을 선택하세요");
        form.gender[0].focus();
        return false;
    } else if(parseInt(form.hobby[0].checked+form.hobby[1].checked+form.hobby[2].checked+form.hobby[3].checked+form.hobby[4].checked)<2) {
        alert("취미를 2개이상 입력하세요");
        form.hobby[0].focus();
        return false;
    } else if((form.post1.value=="" || form.post2.value=="")) {
        alert("우편번호를 입력하세요");
        form.post1.focus();
        return false;
    } else if(form.address.value=="") {
        alert("주소를 입력하세요");
        form.address.focus();
        return false;
    }
}

// 2. idcheck() : id 입력을 체크하고 입력하지 않으면 "ID를 입력하세요"라는 메시지 출력하고
// id을 입력하면 width=300, height=250"의 팝업창이 나타나도록 합니다.
function idcheck(){
    if (form.id.value=="") {
        alert("아이디를 입력하세요");
        var url = "";
        window.open(url,"_blank", "width=300, height=250")
    }    
}

// 3. move() : 주민번호 앞자리는 6자리 숫자이면 뒷자리로 포커스를 옮기고
// 주민번호 앞자리가 6자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 앞자리에 포커스 위치하게 합니다.
// 주민번호 뒷자리는 7자리 숫자이면 다음 항목으로 포커스를 옮기고
// 주민번호 뒷자리가 7자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 뒷자리에 포커스 위치하게 합니다.
function move(){
    if (form.jumin1.value.length==6) {
        form.jumin2.focus();
    } 
    
    if(isNaN(form.jumin1.value)){
        alert("숫자를 입력하세요");
        var str = form.jumin1.value;
        form.jumin1.value = str.slice(0,-1);
        form.jumin1.focus();
    }

    if (form.jumin2.value.length==7) {
        form.email.focus();
    } else if(isNaN(form.jumin2.value)){
        alert("숫자를 입력하세요");
        var str = form.jumin2.value;
        form.jumin2.value = str.slice(0,-1);        
        form.jumin2.focus();
    }
}

// 4. domain1() : select태그를 선택하면 id=domain input태그에 값이 나타나게 합니다.
var sel = document.getElementById("sel");
var domain = document.getElementById("domain");
function domain1(){
    domain.value = sel.value;
    if (sel.value=="") {
        domain.removeAttribute("readonly")
    } else {
        domain.setAttribute("readonly","readonly");
    }
}

// 우편번호
function post(){

}