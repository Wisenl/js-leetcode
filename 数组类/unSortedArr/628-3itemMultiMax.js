// 628. 三个数的最大乘积

// 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
//
// 示例 1:
// 输入: [1,2,3]
// 输出: 6
//
// 示例 2:
// 输入: [1,2,3,4]
// 输出: 24
//
// 注意:
// 1.给定的整型数组长度范围是3-10000，数组中所有的元素范围是[-1000, 1000]。
// 2.输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。


// 注意有负数。负数越小，负负得正的话，乘积越大
function f (arr) {
	arr.sort((a,b)=>{return b-a})
	return Math.max(arr[0] * arr[1] * arr[2], arr[0] * arr[arr.length - 1] * arr[arr.length - 2])
}
console.log(f([1,2,3,4]));