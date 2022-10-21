// 함수를 외부에서 쓰기 위해 export 사용
function sayHi(target) {
	alert(target);
	return target;
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

let hello = "hellooooooooo";

export default sayHi;
export {sayBye, hello};