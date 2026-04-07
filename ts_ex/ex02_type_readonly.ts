type User = {
  name:string;
  age:number;
}

const user1: User = {name:"철수", age:20}

type Car = {
  readonly brand:string;
  year:number;
}

const myCar:Car = {brand:'Tesla', year:2024}
myCar.year = 2026;
// myCar.brand = 'Hynhai'

// 여기에 코드 작성

type UserProfile = {
  readonly id: number;
  name:string;
  age:number;
  email:string;
}

const user: UserProfile = {
  id: 1001,
  name: "Kim",
  age: 22,
  email: "kim@example.com"
};

user.name = "Lee";    // OK
user.id = 2000;       // 오류 발생
