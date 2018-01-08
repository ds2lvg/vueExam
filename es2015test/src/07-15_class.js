// 클래스2
class Person{
    // constructor : 생성자
    constructor(name, tel, address){
        this.name = name;
        this.tel = tel;
        this.address = address;
        // 생성자에서 클래스의 count를 증가시키므로 생성할때마다 카운트 증가
        if(Person.count)
            Person.count++;
        else
            Person.count=1;
    }
    // 인스턴스 메서드 : 객체 생성후 실행가능
    toString() {
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
    }    
    // static 메서드 : 클래스로 접근해서 실행가능 => 객체로 실행 불가!
    static getPersonCount(){
        return Person.count;
    }
}

class Cheerleader extends Person{
    // constructor : 생성자
    constructor(name, tel, address, agency, team){
        super(name, tel, address);
        this.agency = agency;
        this.team = team;
    }
    // 인스턴스 메서드 : 객체 생성후 실행가능
    toString() {
        return super.toString() +  `agency=${this.agency}, team=${this.team}`;
    }    
    getInfo(){
        return `${this.agency} 소속사의 ${this.name}은 ${this.team}팀의 치어리더입니다`
    }
}


var p1 = new Cheerleader("안지현", "010-1234-5678", "서울", "HSCOM", "넥센 히어로즈");
var p2 = new Cheerleader("서현숙", "010-1234-5678", "안양", "플레이위드어스 스포테인먼트", "안양 한라");

// 오버라이딩 된 toString()가 실행됨
console.log(p1.toString());
console.log(p1.getInfo());

console.log(p2.toString());
console.log(p2.getInfo());

// Person을 상속받았기때문에 Cheerleader도 getPersonCount() 사용 가능
console.log("Cheerleader의 인스턴스 갯수"+Cheerleader.getPersonCount());