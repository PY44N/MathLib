module.exports = function (num) {
	return Math.sign(num) == -1 || Math.sign(num) == -0 ? true : false;
};
