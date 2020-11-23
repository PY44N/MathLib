module.exports = function (num) {
	if (Math.sign(num) == -1 || Math.sign(num) == -0) {
		return true;
	}
	return false;
};
