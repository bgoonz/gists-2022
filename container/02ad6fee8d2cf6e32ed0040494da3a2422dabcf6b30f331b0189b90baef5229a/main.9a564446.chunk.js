(this.webpackJsonpcalculator = this.webpackJsonpcalculator || []).push([
    [0], {
        12: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n(0),
                u = n.n(a),
                l = n(2),
                r = n.n(l),
                c = n(3),
                s = n(4),
                i = n(6),
                m = n(5),
                o = function(t) {
                    Object(i.a)(n, t);
                    var e = Object(m.a)(n);

                    function n(t) {
                        var a;
                        return Object(c.a)(this, n), (a = e.call(this, t)).handleFirstNum = function(t) {
                            var e = parseInt(t.target.value, 10),
                                n = isNaN(e) ? "" : e;
                            a.setState({
                                num1: n
                            })
                        }, a.handleSecondNum = function(t) {
                            var e = parseInt(t.target.value, 10),
                                n = isNaN(e) ? "" : e;
                            a.setState({
                                num2: n
                            })
                        }, a.add = function() {
                            var t = a.state.num1 + a.state.num2;
                            a.setState({
                                result: t
                            })
                        }, a.subtract = function() {
                            var t = a.state.num1 - a.state.num2;
                            a.setState({
                                result: t
                            })
                        }, a.multiply = function() {
                            var t = a.state.num1 * a.state.num2;
                            a.setState({
                                result: t
                            })
                        }, a.divide = function() {
                            var t = a.state.num1 / a.state.num2;
                            a.setState({
                                result: t
                            })
                        }, a.clear = function() {
                            a.setState({
                                num1: "",
                                num2: "",
                                result: 0
                            })
                        }, a.state = {
                            result: 0,
                            num1: "",
                            num2: ""
                        }, a
                    }
                    return Object(s.a)(n, [{
                        key: "render",
                        value: function() {
                            var t = this.state,
                                e = t.num1,
                                n = t.num2,
                                a = t.result;
                            return u.a.createElement("div", null, u.a.createElement("h1", null, "Result: ", a), u.a.createElement("input", {
                                onChange: this.handleFirstNum,
                                value: e,
                                placeholder: "First number"
                            }), u.a.createElement("input", {
                                onChange: this.handleSecondNum,
                                value: n,
                                placeholder: "Second number"
                            }), u.a.createElement("br", null), u.a.createElement("button", {
                                onClick: this.add
                            }, "+"), u.a.createElement("button", {
                                onClick: this.subtract
                            }, "-"), u.a.createElement("button", {
                                onClick: this.multiply
                            }, "*"), u.a.createElement("button", {
                                onClick: this.divide
                            }, "/"), u.a.createElement("button", {
                                onClick: this.clear
                            }, "Clear"))
                        }
                    }]), n
                }(u.a.Component),
                d = function() {
                    return u.a.createElement("div", {
                        className: "App"
                    }, u.a.createElement("h1", null, "Calculator"), u.a.createElement(o, null))
                };
            r.a.render(u.a.createElement(u.a.StrictMode, null, u.a.createElement(d, null)), document.getElementById("root"))
        },
        7: function(t, e, n) {
            t.exports = n(12)
        }
    },
    [
        [7, 1, 2]
    ]
]);
//# sourceMappingURL=main.9a564446.chunk.js.map