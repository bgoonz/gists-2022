(this["webpackJsonpsmartsupp-widget2"] = this["webpackJsonpsmartsupp-widget2"] || []).push([
    [3], {
        10: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "MessageAction", (function() {
                return k
            })), n.d(t, "addAgent", (function() {
                return F
            })), n.d(t, "assignAgent", (function() {
                return D
            })), n.d(t, "setIsTyping", (function() {
                return R
            })), n.d(t, "addSendTranscript", (function() {
                return W
            })), n.d(t, "checkMessagesAndMarkAsRead", (function() {
                return G
            })), n.d(t, "setRating", (function() {
                return B
            })), n.d(t, "removeAgent", (function() {
                return N
            })), n.d(t, "unassignAgent", (function() {
                return P
            })), n.d(t, "removeAllAgents", (function() {
                return L
            })), n.d(t, "addRating", (function() {
                return U
            })), n.d(t, "createBotResponse", (function() {
                return V
            })), n.d(t, "createMessage", (function() {
                return z
            })), n.d(t, "uploadFile", (function() {
                return Y
            })), n.d(t, "submitForm", (function() {
                return X
            })), n.d(t, "submitAuthForm", (function() {
                return Z
            })), n.d(t, "addMessageFromServer", (function() {
                return J
            })), n.d(t, "setWarningBar", (function() {
                return $
            }));
            var a, r = n(4),
                i = n(7),
                o = n.n(i),
                c = n(19),
                s = n(27),
                u = n(1),
                d = n(283),
                l = n.n(d),
                g = n(3),
                f = n(25),
                p = n(6),
                b = n(20),
                h = n(122),
                O = function(e, t) {
                    var n = new Promise((function(t, n) {
                        var a = setTimeout((function() {
                            clearTimeout(a), n("Timed out in ".concat(e, "ms."))
                        }), e)
                    }));
                    return Promise.race([t, n])
                },
                m = n(8),
                v = n(18),
                j = n(40),
                y = n(93),
                T = n(24),
                S = n(75),
                A = n(5),
                w = n(16),
                M = n(23),
                E = n(11),
                x = n(276),
                C = n(145),
                I = n(54),
                k = {
                    addRatingForm: Object(s.a)("messages/ADD_RATING_FORM", Object(s.b)()),
                    setInputValue: Object(s.a)("messages/SET_INPUT_VALUE", Object(s.b)()),
                    setLoadingState: Object(s.a)("messages/SET_LOADING_STATE", Object(s.b)()),
                    setEmojiPickerState: Object(s.a)("messages/SET_EMOJI_PICKER_STATE", Object(s.b)()),
                    setIsTyping: Object(s.a)("messages/SET_IS_TYPING", Object(s.b)()),
                    setIsFakeTyping: Object(s.a)("messages/SET_IS_FAKE_TYPING", Object(s.b)()),
                    updateRatingMessage: Object(s.a)("messages/UPDATE_RATING_MESSAGE", Object(s.b)()),
                    addMessageFromServer: Object(s.a)("messages/ADD_MESSAGE_FROM_SERVER", Object(s.b)()),
                    submitForm: Object(s.a)("messages/SUBMIT_FORM", Object(s.b)()),
                    setFormLoadingState: Object(s.a)("messages/SET_FORM_LOADING_STATE", Object(s.b)()),
                    addAgentActivity: Object(s.a)("messages/ADD_AGENT_ACTIVITY", Object(s.b)()),
                    setEnableSoundsState: Object(s.a)("general/SET_SOUNDS_ALLOWED_STATE", Object(s.b)()),
                    finishTranscript: Object(s.a)("messages/FINISH_TRANSCRIPT", Object(s.b)()),
                    markAllAsRead: Object(s.a)("messages/MARK_ALL_AS_READ"),
                    addSendTranscript: Object(s.a)("messages/ADD_SEND_TRANSCRIPT"),
                    addImageMessage: Object(s.a)("messages/ADD_IMAGE_MESSAGE", Object(s.b)()),
                    hideChatbotMessageOptions: Object(s.a)("messages/HIDE_CHATBOT_MESSAGE_OPTIONS", Object(s.b)()),
                    setInputText: Object(s.a)("messages/SET_INPUT_TEXT", Object(s.b)()),
                    setWarningBarState: Object(s.a)("messages/SET_WARNING_BAR_STATE", Object(s.b)()),
                    setFileUploadState: Object(s.a)("messages/SET_FILE_UPLOAD_STATE", Object(s.b)()),
                    setLastRead: Object(s.a)("messages/SET_UNREAD_INFO", Object(s.b)()),
                    setMessageSendingState: Object(s.a)("messages/SET_SENDING_STATE", Object(s.b)()),
                    setAcceptedFileTypes: Object(s.a)("messages/SET_ACCEPTED_FILE_TYPES", Object(s.b)()),
                    setAcceptedFileExtensions: Object(s.a)("messages/SET_ACCEPTED_FILE_EXTENSIONS", Object(s.b)()),
                    setAcceptedFileMaxSize: Object(s.a)("messages/SET_ACCEPTED_FILE_MAX_SIZE", Object(s.b)()),
                    createBotResponse: Object(s.a)("messages/CREATE_BOT_RESPONSE", Object(s.b)()),
                    setBotName: Object(s.a)("messages/SET_BOT_NAME", Object(s.b)())
                },
                F = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = a().agent.agents, n(b.a.addConnectedAgent(e && e.agent)), n(J({
                                            message: e.message,
                                            agents: r
                                        })), setTimeout((function() {
                                            return n(G())
                                        }), 0);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                D = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(b.a.addConnectedAgentFromTransfer(e)), r = a().agent.agents, n(J({
                                            message: e.message,
                                            agents: r
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                _ = l()((function(e) {
                    T.a.client.chatTyping(!1), e(k.setIsTyping(!1))
                }), C.a),
                R = function() {
                    return function() {
                        var e = Object(c.a)(o.a.mark((function e(t, n) {
                            var a, r;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = n(), r = a.messages, r.isTyping || (t(k.setIsTyping(!0)), T.a.client.chatTyping(!0)), _(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                W = function() {
                    return function() {
                        var e = Object(c.a)(o.a.mark((function e(t, n) {
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t(k.addSendTranscript()), setTimeout((function() {
                                            return t(G())
                                        }), 0);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                G = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r, i, c, s, d, l, g, f, p, b;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = a(), i = r.messages, c = r.general, s = i.lastReadAt, d = c.isWidgetOpen, l = i.messages, g = l.filter((function(e) {
                                            return e.author !== u.MessageSubType.Contact
                                        })), f = Object(w.n)(g), p = f.length > 0 ? f[f.length - 1].created : void 0, e && n(k.markAllAsRead()), d && (b = s ? new Date(s) : p, p && b && p.getTime() >= b.getTime() && !document.hidden && n(k.markAllAsRead()));
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                B = function(e, t) {
                    return function() {
                        var n = Object(c.a)(o.a.mark((function n(a, i) {
                            var c;
                            return o.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (c = i().messages.messages.find((function(t) {
                                                return t.id === e && t.type === u.MessageContent.Type.RateForm
                                            }))) {
                                            n.next = 4;
                                            break
                                        }
                                        return console.error("'MessageAction.submitForm' called with wrong message ID, please check the code that called this"), n.abrupt("return");
                                    case 4:
                                        c = Object(r.a)(Object(r.a)({}, c), {}, {
                                            rating: t.type
                                        }), a(k.updateRatingMessage({
                                            messageId: e,
                                            inputName: "rating",
                                            rating: t.type
                                        })), H(c, (function() {
                                            a(k.submitForm(e)), setTimeout((function() {
                                                return a(G())
                                            }), 0)
                                        }));
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                N = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return function() {
                        var n = Object(c.a)(o.a.mark((function n(a, r) {
                            var i, c, s;
                            return o.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        r().agent.connectedAgents.length <= 1 && !1 === t && (null === (i = Object(A.a)().options) || void 0 === i ? void 0 : i.ratingEnabled) && f.b.chatStatus(r()) === m.b.Served && a(U()), c = r().agent.agents, a(J({
                                            message: e.message,
                                            agents: c
                                        })), (s = e.message.content.data.agentId) && a(b.a.removeConnectedAgent(s));
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                P = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = a().agent.agents, n(J({
                                            message: e.message,
                                            agents: r
                                        })), n(b.a.removeConnectedAgentFromTransfer(e));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                L = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r, i;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        (null === (r = Object(A.a)().options) || void 0 === r ? void 0 : r.ratingEnabled) && f.b.chatStatus(a()) === m.b.Served && (n(U()), n(p.GeneralAction.setChatStatus(m.b.Resolved))), i = a().agent.agents, n(J({
                                            message: e.message,
                                            agents: i
                                        })), n(b.a.removeAllConnectedAgents());
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                U = function() {
                    return function() {
                        var e = Object(c.a)(o.a.mark((function e(t, n) {
                            var a, r;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, T.a.client.chatRateInit();
                                    case 3:
                                        a = e.sent, r = n().agent.agents, t(J({
                                            message: a.message,
                                            agents: r
                                        })), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                V = function(e, t, n) {
                    return Object(c.a)(o.a.mark((function a() {
                        var r, i;
                        return o.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    r = Object(w.k)(e), t.isGoBackButton || Object(I.c)(e), i = function() {
                                        return new Promise((function(e, a) {
                                            e(T.a.client.chatMessage({
                                                content: {
                                                    type: u.MessageContent.Type.Text,
                                                    text: r
                                                },
                                                quickReply: {
                                                    replyTo: n,
                                                    payload: t
                                                }
                                            }))
                                        }))
                                    }, O(C.b, i());
                                case 4:
                                case "end":
                                    return a.stop()
                            }
                        }), a)
                    })))
                },
                z = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return function() {
                        var n = Object(c.a)(o.a.mark((function n(a, r) {
                            var i, c, s, d, l, g, b, v, M, x, F, D, _;
                            return o.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (s = r().messages, d = r().general, l = s.messages, g = r().agent, b = g.status, a(k.setMessageSendingState(m.d.Loading)), v = f.b.isUserAuthenticated(r()) || !1, M = Object(y.a)(null === (i = d.userData) || void 0 === i ? void 0 : i.account.groups, null === (c = d.userData) || void 0 === c ? void 0 : c.visitor), a(p.GeneralAction.createAuthFormInputs(M)), !(t && b === u.AccountStatus.Offline && !v && M.length > 0 || Object(A.a)().options.requireLogin && !v && M.length > 0)) {
                                            n.next = 13;
                                            break
                                        }
                                        return a(p.GeneralAction.authFormStateToggle()), a(k.setMessageSendingState(m.d.Initial)), n.abrupt("return");
                                    case 13:
                                        if (!Object(w.o)(l, e)) {
                                            n.next = 17;
                                            break
                                        }
                                        return a($(m.e.SameMessageTwice)), a(k.setMessageSendingState(m.d.Initial)), n.abrupt("return");
                                    case 17:
                                        x = Object(w.k)(e), F = h.a.getWidgetStatus(r()) === u.AccountStatus.Offline;
                                        try {
                                            a(k.setInputText("")), D = function() {
                                                return new Promise((function(e, t) {
                                                    e(T.a.client.chatMessage({
                                                        isOffline: F,
                                                        content: {
                                                            type: u.MessageContent.Type.Text,
                                                            text: x
                                                        }
                                                    }))
                                                }))
                                            }, (_ = O(C.b, D())).then((function(e) {
                                                a(J({
                                                    message: e,
                                                    agents: g.agents
                                                })), j.b.emit(E.e.MessageSent, e)
                                            })), _.catch((function(e) {
                                                a(k.setMessageSendingState(m.d.Initial)), Object(S.a)("error.sendingMessageTooLong", e)
                                            })), Object(I.g)(b), a(k.setMessageSendingState(m.d.Success))
                                        } catch (o) {
                                            a(k.setMessageSendingState(m.d.Failure)), Object(S.a)("error.sendingMessage", o)
                                        }
                                    case 20:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                H = function() {
                    var e = Object(c.a)(o.a.mark((function e(t, n) {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, T.a.client.chatRate({
                                        messageId: t.id,
                                        text: t.inputs[0].value ? t.inputs[0].value.toString() : void 0,
                                        value: t.rating
                                    });
                                case 3:
                                    n(), e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), Object(S.a)("error.sendingRating", e.t0);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                q = function() {
                    var e = Object(c.a)(o.a.mark((function e(t, n, a) {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, T.a.client.chatTranscript(t, n);
                                case 3:
                                    a(), e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), Object(S.a)("error.sendingTranscript", e.t0);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 6]
                        ])
                    })));
                    return function(t, n, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n) {
                            var a, r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, n(k.setFileUploadState(m.c.Loading)), t.next = 4, T.a.client.chatUploadInit();
                                    case 4:
                                        return a = t.sent, (r = new FormData).append("file", e, e.name), t.next = 9, fetch(a.url, {
                                            method: "post",
                                            body: r
                                        });
                                    case 9:
                                        if (t.sent.ok) {
                                            t.next = 12;
                                            break
                                        }
                                        throw new Error("Upload failed");
                                    case 12:
                                        return t.next = 14, T.a.client.chatUploadFinish(a.token);
                                    case 14:
                                        t.next = 19;
                                        break;
                                    case 16:
                                        t.prev = 16, t.t0 = t.catch(0), n($(m.e.Failure));
                                    case 19:
                                        return t.prev = 19, n(k.setFileUploadState(m.c.Initial)), t.finish(19);
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 16, 19, 22]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                X = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r, i;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = a().messages.messages.find((function(t) {
                                                return t.id === e && (t.type === u.MessageContent.Type.QuestionForm || t.type === u.MessageContent.Type.RateForm)
                                            }))) {
                                            t.next = 4;
                                            break
                                        }
                                        return console.error("'MessageAction.submitForm' called with wrong message ID, please check the code that called this"), t.abrupt("return");
                                    case 4:
                                        if (r.type !== u.MessageContent.Type.RateForm) {
                                            t.next = 8;
                                            break
                                        }
                                        return n(k.updateRatingMessage({
                                            messageId: e,
                                            inputName: "rating",
                                            rating: r.rating,
                                            text: r.inputs[0].value.toString() || ""
                                        })), H(r, (function() {
                                            n(k.submitForm(e)), setTimeout((function() {
                                                return n(G())
                                            }), 0)
                                        })), t.abrupt("return");
                                    case 8:
                                        if (r.type !== u.MessageContent.Type.QuestionForm || r.actionType !== v.b.SendTranscript) {
                                            t.next = 12;
                                            break
                                        }
                                        return i = r.inputs[0].value.toString(), q(i, Object(A.a)().options.lang, (function() {
                                            n(k.finishTranscript(i)), n(k.submitForm(e)), setTimeout((function() {
                                                return n(G())
                                            }), 0)
                                        })), t.abrupt("return");
                                    case 12:
                                        n(k.submitForm(e));
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                Z = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var i, c, s, u, d, l, g, f, b, h, O;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        i = a(), c = i.general, s = Object(w.d)(c.authFormInputs), u = c.userData, d = null === u || void 0 === u ? void 0 : u.visitor, l = Object(A.a)().options.privacyNoticeCheckRequired, g = null === d || void 0 === d ? void 0 : d.email, f = null === d || void 0 === d ? void 0 : d.name, b = null === d || void 0 === d ? void 0 : d.group, h = null === d || void 0 === d ? void 0 : d.phone, O = Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({}, (Boolean(g) || Boolean(s.email)) && {
                                            email: g || s.email
                                        }), (Boolean(f) || Boolean(s.name)) && {
                                            name: f || s.name
                                        }), (Boolean(s.group) || Boolean(b)) && {
                                            group: s.group || b
                                        }), (Boolean(h) || Boolean(s.phone)) && {
                                            phone: h || s.phone
                                        }), Boolean(s.personalDataProcessingConsent) && l && {
                                            personalDataProcessingConsent: s.personalDataProcessingConsent
                                        });
                                        try {
                                            Object(M.b)("visitorClient.client.authenticate", T.a.client.authenticate, O), T.a.client.authenticate(O).then((function() {
                                                setTimeout((function() {
                                                    return n(z(e, !1))
                                                }), x.a), n(p.GeneralAction.authFormStateToggle())
                                            })), Object(I.a)()
                                        } catch (o) {
                                            console.error("authentication fail", o)
                                        }
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                J = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, a) {
                            var r;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(k.addMessageFromServer(e)), r = e.message, f.b.shouldPlaySound(a()) && !Array.isArray(r) && Object(w.i)(r.subType, r.type);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                $ = function(e) {
                    return function() {
                        var t = Object(c.a)(o.a.mark((function t(n, r) {
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        clearTimeout(a), n(k.setWarningBarState(e)), a = setTimeout((function() {
                                            return n(k.setWarningBarState(m.e.Initial))
                                        }), 5e3);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            document.addEventListener("visibilitychange", (function() {
                var e = g.a.getState().general.isWidgetOnline,
                    t = g.a.getState().general.isWidgetOpen,
                    n = g.a.getState().messages.messages.length > 0;
                t && !document.hidden && n && T.a.client.chatRead(), Object(M.b)("event listener visibilty", "isWidgetOnline", e), e || document.hidden || (Object(M.b)("reconnecting..."), T.a.client.connect())
            }))
        },
        11: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return a
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            })), n.d(t, "h", (function() {
                return i
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "i", (function() {
                return g
            }));
            var a, r = n(5);
            ! function(e) {
                e.Internal = "internal", e.Universal = "universal"
            }(a || (a = {}));
            var i, o = "Smartsupp.com",
                c = Object(r.a)().getBaseUrl();
            ! function(e) {
                e.Free = "free", e.Trial = "trial", e.Standard = "standard", e.Pro = "pro"
            }(i || (i = {}));
            var s, u, d = 5;
            ! function(e) {
                e.Telefon = "telefon", e.Telephone = "telephone", e.Name = "name", e.Group = "group", e.Email = "email", e.Phone = "phone", e.Variables = "variables", e.Language = "language", e.ChatClose = "chat:close", e.ChatOpen = "chat:open", e.ChatShow = "chat:show", e.ChatHide = "chat:hide", e.ThemeColor = "theme:color", e.Logout = "logout", e.ChatMessage = "chat:message", e.RecordingDisable = "recording:disable", e.RecordingOff = "recording:off", e.SettingsGetTranslates = "settings:get_translates", e.HtmlApply = "html:apply", e.On = "on"
            }(s || (s = {})),
            function(e) {
                e.MessageSent = "message_sent", e.MessageReceived = "message_received"
            }(u || (u = {}));
            var l = "?size=80",
                g = Object(r.a)().options.orientation
        },
        111: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            }));
            var a = n(4),
                r = n(47),
                i = n(480),
                o = n(1),
                c = n(20),
                s = n(16),
                u = {
                    agents: [],
                    connectedAgents: [],
                    rating: void 0,
                    isTyping: !1,
                    status: o.AccountStatus.Offline
                },
                d = Object(i.a)(u, Object(r.a)(c.a.setAgents, (function(e, t) {
                    var n = t.payload;
                    e.agents = n
                })), Object(r.a)(c.a.setConnectedAgents, (function(e, t) {
                    var n = t.payload;
                    e.connectedAgents = n
                })), Object(r.a)(c.a.setRating, (function(e, t) {
                    var n = t.payload;
                    e.rating = n
                })), Object(r.a)(c.a.setIsAgentTyping, (function(e, t) {
                    var n = t.payload;
                    e.isTyping = n
                })), Object(r.a)(c.a.setStatus, (function(e, t) {
                    var n = t.payload;
                    e.status = n
                })), Object(r.a)(c.a.updateAgentStatus, (function(e, t) {
                    var n = t.payload;
                    e.agents = e.agents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), {}, {
                            status: n.status
                        }) : e
                    })), e.connectedAgents = e.connectedAgents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), {}, {
                            status: n.status
                        }) : e
                    }))
                })), Object(r.a)(c.a.updateAgent, (function(e, t) {
                    var n = t.payload;
                    e.agents = e.agents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), n.changes) : e
                    })), e.connectedAgents = e.connectedAgents.map((function(e) {
                        return e.id === n.id ? Object(a.a)(Object(a.a)({}, e), n.changes) : e
                    }))
                })), Object(r.a)(c.a.addConnectedAgent, (function(e, t) {
                    var n = t.payload,
                        a = Object(s.f)(n);
                    e.connectedAgents.push(a), e.agents.some((function(e) {
                        return e.id === a.id
                    })) || e.agents.push(a)
                })), Object(r.a)(c.a.addConnectedAgentFromTransfer, (function(e, t) {
                    var n = t.payload,
                        a = Object(s.f)(n.assigned);
                    e.connectedAgents.push(a), e.agents.some((function(e) {
                        return e.id === a.id
                    })) || e.agents.push(a)
                })), Object(r.a)(c.a.removeConnectedAgentFromTransfer, (function(e, t) {
                    var n = t.payload,
                        a = Object(s.f)(n.unassigned);
                    e.connectedAgents = e.connectedAgents.filter((function(e) {
                        return e.id !== a.id
                    }))
                })), Object(r.a)(c.a.removeAllConnectedAgents, (function(e, t) {
                    e.connectedAgents = []
                })), Object(r.a)(c.a.removeConnectedAgent, (function(e, t) {
                    var n = t.payload;
                    e.connectedAgents = e.connectedAgents.filter((function(e) {
                        return e.id !== n
                    }))
                })), Object(r.a)(c.a.deleteAgent, (function(e, t) {
                    var n = t.payload;
                    e.agents = e.agents.filter((function(e) {
                        return e.id !== n
                    })), e.connectedAgents = e.connectedAgents.filter((function(e) {
                        return e.id !== n
                    }))
                })))
        },
        113: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return T
            })), n.d(t, "b", (function() {
                return S
            }));
            var a = n(4),
                r = n(44),
                i = n(480),
                o = n(47),
                c = n(499),
                s = n(1),
                u = n(10),
                d = n(18),
                l = n(43),
                g = n(8),
                f = n(24),
                p = n(5),
                b = "_ss.enableSounds",
                h = localStorage.getItem(b),
                O = n(46),
                m = n(16),
                v = n(13),
                j = n(45),
                y = n(28),
                T = {
                    currentTriggerMessageId: void 0,
                    messages: [],
                    enableSounds: h ? "true" === h : void 0 === Object(p.a)().options.enableSounds || Object(p.a)().options.enableSounds,
                    emojiPickerState: !1,
                    inputText: Object(O.b)(y.h) || "",
                    isTyping: !1,
                    fakeTyping: !1,
                    warningBarState: g.e.Initial,
                    fileUploadState: g.c.Initial,
                    lastReadAt: null,
                    messageSendingState: g.d.Initial,
                    acceptedFileTypes: [],
                    acceptedFileExtensions: [],
                    acceptedFileMaxSize: 0,
                    currentBotName: void 0
                },
                S = Object(i.a)(T, Object(o.a)(u.MessageAction.setEnableSoundsState, (function(e, t) {
                    localStorage.setItem(b, "".concat(!e.enableSounds)), e.enableSounds = !e.enableSounds
                })), Object(o.a)(u.MessageAction.finishTranscript, (function(e, t) {
                    var n = t.payload;
                    e.messages.push({
                        type: s.MessageContent.Type.Text,
                        author: s.MessageSubType.System,
                        created: new Date,
                        agentId: null,
                        id: Object(c.a)(),
                        text: v.a.translate("emailTranscript.positiveFeedback").replace("$$", n)
                    })
                })), Object(o.a)(u.MessageAction.setInputValue, (function(e, t) {
                    var n = t.payload,
                        a = n.value,
                        r = n.messageId,
                        i = n.name,
                        o = e.messages.find((function(e) {
                            return e.id === r && (e.type === s.MessageContent.Type.QuestionForm || e.type === s.MessageContent.Type.RateForm)
                        }));
                    if (o) {
                        var c = o.inputs.find((function(e) {
                            return e.name === i
                        }));
                        c ? c.value = a : console.error("'MessageAction.setInputValue' called with wrong input ID, please check the code that called this")
                    } else console.error("'MessageAction.setInputValue' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.updateRatingMessage, (function(e, t) {
                    var n = t.payload,
                        a = n.rating,
                        r = n.messageId,
                        i = n.text,
                        o = n.inputName,
                        c = e.messages.find((function(e) {
                            return e.id === r && e.type === s.MessageContent.Type.RateForm
                        }));
                    if (c) {
                        var u = c.inputs.find((function(e) {
                            return e.name === o
                        }));
                        u ? (u.value = i || "", c.finishedRatingText = i, c.finished = !!i, c.rating = a, Object(j.g)(a)) : console.error("'MessageAction.updateRatingMessage' called with wrong input ID, please check the code that called this")
                    } else console.error("'MessageAction.updateRatingMessage' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.submitForm, (function(e, t) {
                    var n = t.payload,
                        a = e.messages.find((function(e) {
                            return e.id === n && (e.type === s.MessageContent.Type.QuestionForm || e.type === s.MessageContent.Type.RateForm)
                        }));
                    a ? a.type === s.MessageContent.Type.QuestionForm && (a.finished = !0, a.author = s.MessageSubType.Contact) : console.error("'MessageAction.submitForm' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.addMessageFromServer, (function(e, t) {
                    var n = t.payload.message;
                    if (Array.isArray(n)) {
                        var a = n.map((function(e) {
                            return Object(m.g)(e)
                        })).filter((function(e) {
                            return void 0 !== e
                        }));
                        e.messages = Object(r.a)(a)
                    } else {
                        var i = Object(m.g)(n);
                        i && e.messages.push(i)
                    }
                })), Object(o.a)(u.MessageAction.markAllAsRead, (function(e, t) {
                    e.messages.length > 0 && f.a.client.chatRead(), e.lastReadAt = (new Date).toISOString()
                })), Object(o.a)(u.MessageAction.setEmojiPickerState, (function(e, t) {
                    var n = t.payload;
                    e.emojiPickerState = n
                })), Object(o.a)(u.MessageAction.setWarningBarState, (function(e, t) {
                    var n = t.payload;
                    e.warningBarState = n
                })), Object(o.a)(u.MessageAction.setFileUploadState, (function(e, t) {
                    var n = t.payload;
                    e.fileUploadState = n
                })), Object(o.a)(u.MessageAction.setIsTyping, (function(e, t) {
                    var n = t.payload;
                    e.isTyping = n
                })), Object(o.a)(u.MessageAction.setIsFakeTyping, (function(e, t) {
                    var n = t.payload;
                    e.fakeTyping = n
                })), Object(o.a)(u.MessageAction.addImageMessage, (function(e, t) {
                    var n = t.payload,
                        a = {
                            author: s.MessageSubType.Contact,
                            created: new Date,
                            id: Object(c.a)(),
                            type: s.MessageContent.Type.Upload,
                            url: n.url,
                            name: n.name,
                            fileType: n.type,
                            uploadedWithError: n.uploadedWithError,
                            isImage: n.isImage,
                            thumb400: {
                                url: n.url400
                            }
                        };
                    e.messages.push(a)
                })), Object(o.a)(u.MessageAction.addRatingForm, (function(e, t) {
                    var n = t.payload;
                    e.messages.push(function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Date,
                            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object(c.a)(),
                            i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
                        return {
                            type: s.MessageContent.Type.RateForm,
                            author: s.MessageSubType.System,
                            created: a,
                            finished: t,
                            id: r,
                            headline: v.a.translate(e.formText),
                            inputs: [{
                                type: l.a.Text,
                                name: "rating",
                                placeHolder: v.a.translate(e.formPlaceholder),
                                label: v.a.translate(e.formText),
                                validations: ["required"],
                                multiline: !0,
                                fullWidth: !0,
                                value: n
                            }],
                            rating: e.type,
                            finishedRatingText: i
                        }
                    }(n, !1))
                })), Object(o.a)(u.MessageAction.setFormLoadingState, (function(e, t) {
                    var n = t.payload,
                        a = n.messageId,
                        r = n.loadingState,
                        i = e.messages.find((function(e) {
                            return e.id === a && e.type === s.MessageContent.Type.QuestionForm
                        }));
                    i ? i.formSendingState = r : console.error("'MessageAction.setFormLoadingState' called with wrong message ID, please check the code that called this")
                })), Object(o.a)(u.MessageAction.addAgentActivity, (function(e, t) {
                    var n = t.payload,
                        a = {
                            agentStatus: n.content.type,
                            author: n.subType,
                            created: new Date(n.createdAt),
                            agentId: n.agentId || null,
                            id: n.id,
                            type: n.content.type
                        };
                    e.messages.push(a)
                })), Object(o.a)(u.MessageAction.addSendTranscript, (function(e, t) {
                    var n = {
                        actionType: d.b.SendTranscript,
                        author: s.MessageSubType.System,
                        created: new Date,
                        id: Object(c.a)(),
                        type: s.MessageContent.Type.QuestionForm,
                        finished: !1,
                        text: v.a.translate("emailTranscript.sendCopy"),
                        inputs: [{
                            type: l.a.Text,
                            label: v.a.translate("emailTranscript.sendCopy"),
                            name: "email",
                            placeHolder: "email@address.com",
                            validations: ["required", "isEmail"],
                            multiline: !1,
                            fullWidth: !1,
                            value: ""
                        }]
                    };
                    e.messages.push(n)
                })), Object(o.a)(u.MessageAction.setInputText, (function(e, t) {
                    var n = t.payload;
                    e.inputText = n
                })), Object(o.a)(u.MessageAction.hideChatbotMessageOptions, (function(e, t) {
                    var n = t.payload,
                        r = e.messages.find((function(e) {
                            return e.id === n
                        }));
                    if (r) {
                        var i = e.messages.indexOf(r),
                            o = Object(a.a)(Object(a.a)({}, r), {}, {
                                showReplies: !1
                            });
                        e.messages[i] = o
                    }
                })), Object(o.a)(u.MessageAction.setLastRead, (function(e, t) {
                    var n = t.payload;
                    e.lastReadAt = n
                })), Object(o.a)(u.MessageAction.setMessageSendingState, (function(e, t) {
                    var n = t.payload;
                    e.messageSendingState = n
                })), Object(o.a)(u.MessageAction.setAcceptedFileTypes, (function(e, t) {
                    var n = t.payload;
                    e.acceptedFileTypes = n
                })), Object(o.a)(u.MessageAction.setAcceptedFileExtensions, (function(e, t) {
                    var n = t.payload;
                    e.acceptedFileExtensions = n
                })), Object(o.a)(u.MessageAction.setAcceptedFileMaxSize, (function(e, t) {
                    var n = t.payload;
                    e.acceptedFileMaxSize = n
                })), Object(o.a)(u.MessageAction.setBotName, (function(e, t) {
                    var n = t.payload;
                    e.currentBotName = n
                })))
        },
        114: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return A
            })), n.d(t, "a", (function() {
                return w
            }));
            var a, r, i, o = n(4),
                c = n(480),
                s = n(47),
                u = n(6),
                d = n(8),
                l = n(5),
                g = 1e3,
                f = 700,
                p = n(285),
                b = n.n(p),
                h = n(15),
                O = n(69),
                m = null !== (a = null === (r = Object(l.a)().options) || void 0 === r ? void 0 : r.color) && void 0 !== a ? a : h.b,
                v = function(e) {
                    var t = e.rgb().array(),
                        n = t[0],
                        a = t[1],
                        r = t[2];
                    return Math.sqrt(n * n * .299 + a * a * .587 + r * r * .114) < 180
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                        t = b()(e),
                        n = v(t),
                        a = t.hex(),
                        r = t.rotate(-15).saturate(-.25).lighten(.2).hex(),
                        i = t.rotate(0).saturate(.03).darken(.5).hex(),
                        o = n ? "white" : i,
                        c = n ? "white" : O.a.inputText,
                        s = n ? r : a,
                        u = n ? a : i;
                    return {
                        primary: a,
                        light: r,
                        dark: i,
                        isDark: n,
                        themeColorContrast: o,
                        textColor: c,
                        lightVariant: s,
                        darkVariant: u
                    }
                },
                y = n(93),
                T = n(46),
                S = n(28),
                A = {
                    requestState: d.d.Loading,
                    isWidgetOpen: "true" === Object(T.a)()[S.g],
                    theme: j(),
                    userData: void 0,
                    parentSize: {
                        height: window.parent.innerHeight || f,
                        width: window.parent.innerWidth || g
                    },
                    isWidgetOnline: !0,
                    isInputFocused: !1,
                    showMorePopper: !1,
                    authFormState: !1,
                    dataPrivacyState: !1,
                    authFormInputs: Object(y.a)([], void 0),
                    isWidgetDisplayedViaAPI: void 0,
                    isWidgetOpening: !1,
                    isWidgetLoaded: !1,
                    closeModalOpenedState: !1,
                    chatStatus: void 0,
                    documentFocus: !1,
                    openOnTrigger: null === (i = Object(l.a)().options) || void 0 === i ? void 0 : i.openOnTrigger
                },
                w = Object(c.a)(A, Object(s.a)(u.GeneralAction.setRequestState, (function(e, t) {
                    var n = t.payload;
                    e.requestState = n
                })), Object(s.a)(u.GeneralAction.widgetOpen, (function(e) {
                    e.isWidgetOpen = !0
                })), Object(s.a)(u.GeneralAction.widgetClose, (function(e) {
                    e.showMorePopper = !1, e.isWidgetOpen && (e.isInputFocused = !1), e.isWidgetOpen = !1
                })), Object(s.a)(u.GeneralAction.setUser, (function(e, t) {
                    var n = t.payload;
                    e.userData = n
                })), Object(s.a)(u.GeneralAction.widgetLoadedToggle, (function(e) {
                    e.isWidgetLoaded = !e.isWidgetLoaded
                })), Object(s.a)(u.GeneralAction.widgetOpeningToggle, (function(e) {
                    e.isWidgetOpening = !e.isWidgetOpening
                })), Object(s.a)(u.GeneralAction.dataPrivacyStateToggle, (function(e) {
                    e.dataPrivacyState = !e.dataPrivacyState
                })), Object(s.a)(u.GeneralAction.setThemeColor, (function(e, t) {
                    var n = t.payload;
                    e.theme = j(n)
                })), Object(s.a)(u.GeneralAction.updateUserStatus, (function(e, t) {
                    var n = t.payload;
                    e.userData && (e.userData = Object(o.a)(Object(o.a)({}, e.userData), {}, {
                        account: Object(o.a)(Object(o.a)({}, e.userData.account), {}, {
                            status: n
                        })
                    }))
                })), Object(s.a)(u.GeneralAction.updateUser, (function(e, t) {
                    var n = t.payload;
                    e.userData && (e.userData = Object(o.a)(Object(o.a)({}, e.userData), {}, {
                        visitor: Object(o.a)(Object(o.a)({}, e.userData.visitor), n)
                    }))
                })), Object(s.a)(u.GeneralAction.authFormStateToggle, (function(e) {
                    e.authFormState = !e.authFormState
                })), Object(s.a)(u.GeneralAction.createAuthFormInputs, (function(e, t) {
                    var n = t.payload;
                    e.authFormInputs = n
                })), Object(s.a)(u.GeneralAction.setSize, (function(e, t) {
                    var n = t.payload;
                    e.parentSize = n
                })), Object(s.a)(u.GeneralAction.widgetHide, (function(e) {
                    e.isWidgetDisplayedViaAPI = !1
                })), Object(s.a)(u.GeneralAction.widgetShow, (function(e) {
                    e.isWidgetDisplayedViaAPI = !0
                })), Object(s.a)(u.GeneralAction.widgetOffline, (function(e) {
                    e.isWidgetOnline = !1
                })), Object(s.a)(u.GeneralAction.widgetOnline, (function(e) {
                    e.isWidgetOnline = !0
                })), Object(s.a)(u.GeneralAction.setAuthFormInput, (function(e, t) {
                    var n = t.payload,
                        a = n.name,
                        r = n.value,
                        i = e.authFormInputs.find((function(e) {
                            return e.name === a
                        }));
                    i ? i.value = r : console.error("Input in auth not found")
                })), Object(s.a)(u.GeneralAction.inputFocusToggle, (function(e) {
                    e.isInputFocused = !e.isInputFocused
                })), Object(s.a)(u.GeneralAction.showMorePopperClose, (function(e) {
                    e.showMorePopper = !1
                })), Object(s.a)(u.GeneralAction.showMorePopperToggle, (function(e) {
                    e.showMorePopper = !e.showMorePopper
                })), Object(s.a)(u.GeneralAction.closeConversationModalToggle, (function(e) {
                    e.closeModalOpenedState = !e.closeModalOpenedState
                })), Object(s.a)(u.GeneralAction.setChatStatus, (function(e, t) {
                    var n = t.payload;
                    e.chatStatus = n
                })), Object(s.a)(u.GeneralAction.documentFocusToggle, (function(e) {
                    e.documentFocus = !e.documentFocus
                })))
        },
        119: function(e, t, n) {
            "use strict";
            var a = n(10);
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(85);
            n.d(t, "b", (function() {
                return r
            }));
            n(113)
        },
        122: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = {};
            n.r(a), n.d(a, "getAgents", (function() {
                return l
            })), n.d(a, "getReversedJoinedAgents", (function() {
                return f
            })), n.d(a, "getFilteredAgents", (function() {
                return p
            })), n.d(a, "getWidgetStatus", (function() {
                return b
            }));
            n(20);
            var r = n(44),
                i = n(22),
                o = n(1),
                c = n(5),
                s = n(148),
                u = n(61),
                d = Object(c.a)().options.visitorData || {},
                l = function(e) {
                    return e.agent.agents
                },
                g = Object(i.a)((function(e) {
                    return e.agent.connectedAgents
                }), (function(e) {
                    return e.filter((function(e) {
                        return !e.disabled
                    }))
                })),
                f = Object(i.a)(g, (function(e) {
                    return Object(r.a)(e).reverse()
                })),
                p = Object(i.a)(l, u.userData, (function(e, t) {
                    var n = e.filter((function(e) {
                        return !e.disabled
                    }));
                    return Object(s.b)(n, d && d.group || t && t.visitor && t.visitor.group)
                })),
                b = Object(i.a)(g, (function(e) {
                    return e.agent.status
                }), (function(e, t) {
                    var n = e.some((function(e) {
                        return e.status === o.AgentStatus.Online
                    })) ? o.AccountStatus.Online : o.AccountStatus.Offline;
                    return e.length > 0 ? n : t
                }));
            n(111)
        },
        13: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(154),
                r = n(5),
                i = {
                    data: {},
                    defaultData: {},
                    customData: {}
                },
                o = function e() {
                    Object(a.a)(this, e)
                };
            o.translate = function(e) {
                return i.customData[e] || i.data[e] || i.defaultData[e] || "|".concat(e, "|")
            }, o.setData = function(e) {
                e && (i.data = e)
            }, o.setDefaultLanguageData = function(e) {
                e && (i.defaultData = e)
            }, o.setCustomLanguageData = function(e) {
                var t = Object(r.a)().options.translates;
                t[e] && (i.customData = t[e])
            }
        },
        145: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = 1e3,
                r = 5e3,
                i = 5e3
        },
        147: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return f
            }));
            var a = n(44),
                r = n(4),
                i = n(160),
                o = n(5),
                c = n(11),
                s = n(23),
                u = [],
                d = {
                    titleCase: !1
                },
                l = function() {
                    var e = Object(o.a)().options || {};
                    if (e.gaKey) {
                        var t = {
                            key: e.gaKey,
                            options: Object(r.a)(Object(r.a)({}, d), e.gaOptions),
                            type: c.f.Internal
                        };
                        u.push(t)
                    } else if (window.top.ga) try {
                        window.top.ga((function() {
                            var e = window.top.ga.getAll();
                            if (Object(s.b)("topTrackers", e), e)
                                for (var t = 0; t < e.length; t += 1) {
                                    var n = {
                                        key: e[t].get("trackingId"),
                                        type: c.f.Universal,
                                        options: Object(r.a)(Object(r.a)({}, d), {}, {
                                            cookieDomain: e[t].get("cookieDomain") || "auto",
                                            name: e[t].get("name") || ""
                                        })
                                    };
                                    if (Object(o.a)().options.gaName && n.options && n.options.name === Object(o.a)().options.gaName) {
                                        u.push(n);
                                        break
                                    }
                                    u.push(n)
                                }
                        }))
                    } catch (i) {
                        console.error("Error during GA top trackers", i.message)
                    }
                    var n = Object(o.a)().options.gaAccounts;
                    n && (u = [].concat(Object(a.a)(u), Object(a.a)(n))), u.forEach((function(e) {
                        return g(e)
                    }))
                },
                g = function(e) {
                    if (e.options = e.options || {}, e.options.cookieDomain || (e.options.cookieDomain = window.top.document.domain), e.type === c.f.Internal) {
                        var t = Object(o.a)().options && Object(o.a)().options.gaName;
                        t ? i.a.initialize(e.key, {
                            gaOptions: Object(r.a)(Object(r.a)({}, e.options), {}, {
                                name: t
                            })
                        }) : i.a.initialize(e.key, {
                            gaOptions: e.options
                        })
                    }
                },
                f = function(e) {
                    var t = e.category,
                        n = e.action,
                        a = e.label,
                        r = e.value,
                        d = e.nonInteraction;
                    if (Object(o.a)().options.features.ga)
                        for (var l = 0; l < u.length; l += 1) try {
                            if (u[l].type === c.f.Universal && window.top.ga)
                                for (var g = window.top.ga.getAll(), f = 0; f < g.length; f += 1) !u[l].options || u[l].options.name && u[l].options.name !== g[f].get("name") || g[f].send("event", t, n, a, r, {
                                    nonInteraction: d
                                });
                            u[l].type === c.f.Internal && i.a.event({
                                action: n,
                                label: a,
                                category: t,
                                nonInteraction: d,
                                value: r
                            })
                        } catch (p) {
                            Object(s.b)("Smartsupp: GA error:", p.message)
                        }
                }
        },
        148: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = n(16),
                r = function(e, t) {
                    return e.find((function(e) {
                        return e.id === t
                    }))
                },
                i = function(e, t) {
                    return t ? "default" === t ? e : e.filter((function(e) {
                        return e.groups && e.groups.length > 0 && e.groups.includes(t) || e.groups && 0 === e.groups.length
                    })) : e
                },
                o = function(e, t) {
                    var n = [];
                    return e && e.length ? (e.map((function(e) {
                        var a = t.find((function(t) {
                            return t.id === e
                        }));
                        return a && n.push(a)
                    })), n.map(a.f)) : []
                }
        },
        149: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function() {
                var e = {};
                return {
                    publish: function(t, n) {
                        Array.isArray(e[t]) && e[t].forEach((function(e) {
                            e(n)
                        }))
                    },
                    subscribe: function(t, n) {
                        Array.isArray(e[t]) || (e[t] = []), e[t].push(n)
                    }
                }
            }()
        },
        15: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            }));
            var a = "#1233DF",
                r = .9,
                i = 8
        },
        159: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            })), n.d(t, "b", (function() {
                return y
            }));
            var a = n(7),
                r = n.n(a),
                i = n(125),
                o = n(19),
                c = n(27),
                s = n(13),
                u = n(4),
                d = n(40),
                l = n(149),
                g = n(5),
                f = n(65),
                p = n(11),
                b = function() {
                    var e = d.a.language ? d.a.language : f.c.lang,
                        t = f.a.includes(e) ? e : f.b;
                    return Array.from(new Set([t, f.b]))
                },
                h = function(e) {
                    return "".concat(p.a, "/translates/").concat(e, ".json?v=").concat("a46a9f1c1671f4cd19c76bbe1a830e6b41e70712")
                },
                O = function(e) {
                    return function(e) {
                        return "string" === typeof e || e instanceof String
                    }(e) && e.trim().length > 0
                },
                m = function(e, t) {
                    var n = function(e) {
                        return Object.fromEntries(Object.entries(e).filter((function(e) {
                            var t = Object(i.a)(e, 2)[1];
                            return O(t)
                        })))
                    }(e);
                    return Object(u.a)(Object(u.a)({}, t), n)
                },
                v = function(e, t) {
                    var n = Object(g.a)().options.translates,
                        a = m(e, t);
                    l.a.publish(p.c.SettingsGetTranslates, {
                        translates: a,
                        customText: n
                    })
                },
                j = {
                    isFetchingTranslations: Object(c.a)("translations/SET_IS_FETCHING_TRANSLATIONS", Object(c.b)())
                },
                y = function() {
                    var e = Object(o.a)(r.a.mark((function e(t) {
                        var n, a, o, c, u, d;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t(j.isFetchingTranslations(!0)), n = b(), a = n.map((function(e) {
                                        return fetch(h(e)).then((function(e) {
                                            return e.json()
                                        }))
                                    })), e.next = 5, Promise.all(a);
                                case 5:
                                    o = e.sent, c = Object(i.a)(o, 2), u = c[0], d = c[1], s.a.setData(u), s.a.setDefaultLanguageData(d), s.a.setCustomLanguageData(n[0]), v(u, d), t(j.isFetchingTranslations(!1));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        16: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return H
            })), n.d(t, "n", (function() {
                return Y
            })), n.d(t, "j", (function() {
                return X
            })), n.d(t, "e", (function() {
                return Z
            })), n.d(t, "g", (function() {
                return J
            })), n.d(t, "f", (function() {
                return $
            })), n.d(t, "a", (function() {
                return Q
            })), n.d(t, "h", (function() {
                return K
            })), n.d(t, "b", (function() {
                return ee
            })), n.d(t, "k", (function() {
                return te
            })), n.d(t, "m", (function() {
                return ne
            })), n.d(t, "l", (function() {
                return ae
            })), n.d(t, "d", (function() {
                return re
            })), n.d(t, "o", (function() {
                return ie
            })), n.d(t, "c", (function() {
                return oe
            }));
            var a = n(44),
                r = n(7),
                i = n.n(r),
                o = n(19),
                c = n(502),
                s = n(1),
                u = n(18),
                d = n(43),
                l = n(46),
                g = n(23),
                f = n(13),
                p = n(11),
                b = n(28),
                h = {
                    ":)": "\ud83d\ude42",
                    ":-)": "\ud83d\ude42",
                    ":D": "\ud83d\ude00",
                    ":-D": "\ud83d\ude00",
                    ";)": "\ud83d\ude09",
                    ";-)": "\ud83d\ude09",
                    "<3": "\u2764\ufe0f",
                    ":(": "\ud83d\ude41",
                    ":-(": "\ud83d\ude41",
                    ":P": "\ud83d\ude1b",
                    ":-P": "\ud83d\ude1b"
                },
                O = n(4),
                m = n(9),
                v = n(14),
                j = n(15),
                y = n(31);

            function T() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px ", "px;\n\t\t\t", ";\n\t\t"]);
                return T = function() {
                    return e
                }, e
            }

            function S() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return S = function() {
                    return e
                }, e
            }

            function A() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return A = function() {
                    return e
                }, e
            }

            function w() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return w = function() {
                    return e
                }, e
            }

            function M() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return M = function() {
                    return e
                }, e
            }

            function E() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return E = function() {
                    return e
                }, e
            }

            function x() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return x = function() {
                    return e
                }, e
            }

            function C() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return C = function() {
                    return e
                }, e
            }

            function I() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return I = function() {
                    return e
                }, e
            }

            function k() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return k = function() {
                    return e
                }, e
            }

            function F() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return F = function() {
                    return e
                }, e
            }

            function D() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return D = function() {
                    return e
                }, e
            }

            function _() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px 0 ", "px ", "px;\n\t\t\t", ";\n\t\t"]);
                return _ = function() {
                    return e
                }, e
            }

            function R() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px 0 0 ", "px;\n\t\t\t", ";\n\t\t"]);
                return R = function() {
                    return e
                }, e
            }

            function W() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px ", "px 0 ", "px;\n\t\t\t", ";\n\t\t"]);
                return W = function() {
                    return e
                }, e
            }

            function G() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return G = function() {
                    return e
                }, e
            }

            function B() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px ", "px;\n\t\t\t", ";\n\t\t"]);
                return B = function() {
                    return e
                }, e
            }

            function N() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: 0 ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return N = function() {
                    return e
                }, e
            }

            function P() {
                var e = Object(m.a)(["\n\t\t\tborder-radius: ", "px ", "px ", "px 0;\n\t\t\t", ";\n\t\t"]);
                return P = function() {
                    return e
                }, e
            }

            function L() {
                var e = Object(m.a)(["\n\t\t\t", ";\n\t\t"]);
                return L = function() {
                    return e
                }, e
            }
            var U = [{
                    author: s.MessageSubType.Agent,
                    position: u.c.Standalone,
                    css: Object(v.a)(L(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Agent,
                    position: u.c.Top,
                    css: Object(v.a)(P(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.e))
                }, {
                    author: s.MessageSubType.Agent,
                    position: u.c.Middle,
                    css: Object(v.a)(N(), 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.c))
                }, {
                    author: s.MessageSubType.Agent,
                    position: u.c.Bottom,
                    css: Object(v.a)(B(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.b))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Standalone,
                    css: Object(v.a)(G(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Top,
                    css: Object(v.a)(W(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.e))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Middle,
                    css: Object(v.a)(R(), 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.c))
                }, {
                    author: s.MessageSubType.Contact,
                    position: u.c.Bottom,
                    css: Object(v.a)(_(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.b))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Standalone,
                    css: Object(v.a)(D(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Top,
                    css: Object(v.a)(F(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Middle,
                    css: Object(v.a)(k(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.System,
                    position: u.c.Bottom,
                    css: Object(v.a)(I(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Standalone,
                    css: Object(v.a)(C(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Top,
                    css: Object(v.a)(x(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Middle,
                    css: Object(v.a)(E(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Trigger,
                    position: u.c.Bottom,
                    css: Object(v.a)(M(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Standalone,
                    css: Object(v.a)(w(), Object(O.a)({}, y.d))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Top,
                    css: Object(v.a)(A(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.e))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Middle,
                    css: Object(v.a)(S(), 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.c))
                }, {
                    author: s.MessageSubType.Bot,
                    position: u.c.Bottom,
                    css: Object(v.a)(T(), 1.5 * j.c, 1.5 * j.c, 1.5 * j.c, Object(O.a)({}, y.b))
                }],
                V = n(93),
                z = new RegExp(Object.keys(h).map((function(e) {
                    return "".concat(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "($| )")
                })).join("|"), "gi"),
                H = function() {
                    var e = Object(o.a)(i.a.mark((function e(t, n) {
                        var a, r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t === s.MessageSubType.Contact || n === s.MessageContent.Type.RateForm || n === s.MessageEventContent.Type.AgentJoin || n === s.MessageEventContent.Type.AgentLeave || n === s.MessageEventContent.Type.ChatTransfer) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3, new Audio("".concat(p.a, "/assets/sounds/blackberry2.mp3"));
                                case 3:
                                    a = e.sent, (r = a.play()) && r.catch((function(e) {
                                        Object(g.b)("Could not play sound.", e)
                                    }));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                q = function(e, t, n) {
                    return Math.abs(Object(c.a)(new Date(e.created), new Date(t.created))) < n && e.author === t.author
                },
                Y = function(e) {
                    return Object(a.a)(e).sort((function(e, t) {
                        return e.created.getTime() - t.created.getTime()
                    }))
                },
                X = function(e) {
                    var t = [],
                        n = e.filter((function(e) {
                            return e.type === s.MessageContent.Type.QuestionFormSubmit
                        })).map((function(e) {
                            return e.parentMessageId
                        }));
                    return e.forEach((function(e) {
                        return e.id !== n.find((function(t) {
                            return t === e.id
                        })) && t.push(e)
                    })), t
                },
                Z = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
                        n = e.map((function(e) {
                            return {
                                id: e.id,
                                position: u.c.Standalone
                            }
                        }));
                    if (e.length <= 1) return n;
                    q(e[0], e[1], t) && (n[0].position = u.c.Top), q(e[e.length - 2], e[e.length - 1], t) && (n[e.length - 1].position = u.c.Bottom);
                    for (var a = 1; a < e.length - 1; a += 1) {
                        var r = q(e[a - 1], e[a], t),
                            i = q(e[a], e[a + 1], t);
                        i && r && (n[a].position = u.c.Middle), i && !r && (n[a].position = u.c.Top), !i && r && (n[a].position = u.c.Bottom)
                    }
                    return n
                },
                J = function(e) {
                    if (e.subType === s.MessageSubType.Trigger) return {
                        trigger: e.trigger,
                        author: s.MessageSubType.Trigger,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentId: null,
                        text: e.content.text,
                        type: u.d.Trigger
                    };
                    if (e.content.type === s.MessageContent.Type.Upload) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        author: e.subType === s.MessageSubType.Contact ? s.MessageSubType.Contact : s.MessageSubType.Agent,
                        fileType: e.content.data.fileType,
                        name: e.content.data.fileName,
                        uploadedWithError: !1,
                        url: e.content.data.url,
                        expireAt: e.content.data.expireAt,
                        isImage: e.content.data.type === u.a.Image,
                        thumb400: {
                            url: e.content.data.thumb400 && e.content.data.thumb400.url || void 0
                        }
                    };
                    if (e.subType === s.MessageSubType.Contact || e.subType === s.MessageSubType.Agent) return {
                        type: s.MessageContent.Type.Text,
                        agentId: e.agentId,
                        created: new Date(e.createdAt),
                        id: e.id,
                        text: e.content.text,
                        author: e.subType === s.MessageSubType.Contact ? s.MessageSubType.Contact : s.MessageSubType.Agent
                    };
                    if (e.subType === s.MessageSubType.Bot) {
                        var t = e;
                        return {
                            type: s.MessageContent.Type.Text,
                            agentId: t.agentId,
                            created: new Date(t.createdAt),
                            id: t.id,
                            text: t.content.text,
                            author: s.MessageSubType.Bot,
                            quickReplies: t.quickReplies,
                            showReplies: !0
                        }
                    }
                    if (e.content.type === s.MessageEventContent.Type.AgentLeave || e.content.type === s.MessageEventContent.Type.AgentAssign || e.content.type === s.MessageEventContent.Type.AgentJoin || e.content.type === s.MessageEventContent.Type.AgentUnassign) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: e.content.type,
                        agentId: e.content && e.content.data && e.content.data.agentId || "",
                        author: s.MessageSubType.System,
                        assigned: e.content.data.assigned,
                        unassigned: e.content.data.unassigned
                    };
                    if (e.content.type === s.MessageEventContent.Type.ChatClose && "agent_close" === e.content.data.closeType) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: e.content.type,
                        agentId: e.content.data.agentId || "",
                        author: s.MessageSubType.System
                    };
                    if (e.content.type === s.MessageEventContent.Type.ChatVisitorClose) return {
                        type: e.content.type,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: e.content.type,
                        agentId: null,
                        author: s.MessageSubType.System
                    };
                    if (e.content.type === s.MessageContent.Type.RateForm) {
                        var n = e.content.data && e.content.data.text;
                        return {
                            type: s.MessageContent.Type.RateForm,
                            author: s.MessageSubType.System,
                            created: new Date(e.createdAt),
                            finished: !!n,
                            id: e.id,
                            headline: f.a.translate("agentRating.all.placeholder"),
                            inputs: [{
                                type: d.a.Text,
                                name: "rating",
                                placeHolder: f.a.translate("agentRating.all.placeholder"),
                                label: f.a.translate("agentRating.all.placeholder"),
                                validations: ["required"],
                                multiline: !0,
                                fullWidth: !0,
                                value: n
                            }],
                            rating: e.content.data && e.content.data.value,
                            finishedRatingText: n || ""
                        }
                    }
                    if (e.content.type === s.MessageEventContent.Type.ChatTransfer) return {
                        type: s.MessageEventContent.Type.ChatTransfer,
                        created: new Date(e.createdAt),
                        id: e.id,
                        agentStatus: s.MessageEventContent.Type.AgentJoin,
                        agentId: e.agentId,
                        author: s.MessageSubType.System
                    };
                    console.error("Unknown message", e)
                },
                $ = function(e) {
                    return {
                        avatar: e.avatar ? "".concat(e.avatar).concat(p.b) : void 0,
                        fullname: e.fullname,
                        id: e.id,
                        status: e.status,
                        description: e.description,
                        email: "",
                        groups: e.groups,
                        disabled: e.disabled
                    }
                },
                Q = function(e) {
                    return e.filter((function(e) {
                        return (e.type === u.d.Trigger || e.type === s.MessageContent.Type.Text) && e.author !== s.MessageSubType.Contact
                    })).sort((function(e, t) {
                        return t.created.getTime() - e.created.getTime()
                    }))
                },
                K = function(e) {
                    return e.filter((function(e) {
                        return e.author !== s.MessageSubType.System
                    }))
                },
                ee = function(e) {
                    return e.filter((function(e) {
                        return e.author === s.MessageSubType.Agent || e.author === s.MessageSubType.Contact
                    }))
                },
                te = function(e) {
                    return e.replace(z, (function(e) {
                        var t = Object.keys(h).filter((function(t) {
                            return e.toUpperCase().includes(t)
                        }))[0];
                        return h[t].toString()
                    }))
                },
                ne = function(e) {
                    Object(l.c)({
                        name: b.g,
                        value: "".concat(e),
                        excludeCookie: !0
                    })
                },
                ae = function(e) {
                    Object(l.c)({
                        name: b.h,
                        value: e,
                        excludeCookie: !0
                    })
                },
                re = function(e) {
                    var t = e.find((function(e) {
                            return "name" === e.name
                        })),
                        n = e.find((function(e) {
                            return "email" === e.name
                        })),
                        a = e.find((function(e) {
                            return "phone" === e.name
                        })),
                        r = e.find((function(e) {
                            return "group" === e.name
                        })),
                        i = e.find((function(e) {
                            return e.name === V.b
                        }));
                    return {
                        name: t ? t.value.toString() : void 0,
                        email: n ? n.value.toString() : void 0,
                        phone: a ? a.value.toString() : void 0,
                        group: r ? r.value.toString() : void 0,
                        personalDataProcessingConsent: i ? !!i.value : void 0
                    }
                },
                ie = function(e, t) {
                    var n = function(e) {
                        if (e.length) {
                            var t = Y(e).filter((function(e) {
                                return e.type === s.MessageContent.Type.Text && e.text
                            }));
                            if (t.length) return t[t.length - 1]
                        }
                    }(e);
                    return !(!n || t !== n.text || n.author !== s.MessageSubType.Contact)
                },
                oe = function(e, t) {
                    return U.find((function(n) {
                        return n.author === e && n.position === t
                    })).css
                }
        },
        17: function(e, t, n) {
            "use strict";
            n.d(t, "o", (function() {
                return a
            })), n.d(t, "p", (function() {
                return r
            })), n.d(t, "n", (function() {
                return i
            })), n.d(t, "q", (function() {
                return o
            })), n.d(t, "g", (function() {
                return c
            })), n.d(t, "j", (function() {
                return s
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "i", (function() {
                return d
            })), n.d(t, "k", (function() {
                return l
            })), n.d(t, "l", (function() {
                return g
            })), n.d(t, "m", (function() {
                return f
            })), n.d(t, "f", (function() {
                return p
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "r", (function() {
                return h
            })), n.d(t, "d", (function() {
                return O
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "a", (function() {
                return j
            }));
            var a = "600px",
                r = "366px",
                i = "calc(100vh - 36px)",
                o = "100%",
                c = "65px",
                s = "72px",
                u = "58px",
                d = "61px",
                l = "200px",
                g = "300px",
                f = "265px",
                p = "47px",
                b = 60,
                h = 5,
                O = "".concat(b, "px"),
                m = 11,
                v = 24,
                j = 9
        },
        18: function(e, t, n) {
            "use strict";
            var a, r, i, o, c, s;
            n.d(t, "c", (function() {
                    return a
                })), n.d(t, "d", (function() {
                    return r
                })), n.d(t, "a", (function() {
                    return o
                })), n.d(t, "b", (function() {
                    return s
                })),
                function(e) {
                    e.Top = "TOP", e.Middle = "MIDDLE", e.Bottom = "BOTTOM", e.Standalone = "STANDALONE"
                }(a || (a = {})),
                function(e) {
                    e.Text = "TEXT", e.Rating = "RATING", e.File = "FILE", e.AgentActivity = "AGENTACTIVITY", e.Form = "FORM", e.Trigger = "TRIGGER", e.FilledForm = "FILLEDFORM"
                }(r || (r = {})),
                function(e) {
                    e.Yes = "YES", e.No = "NO"
                }(i || (i = {})),
                function(e) {
                    e.Image = "image", e.File = "file"
                }(o || (o = {})),
                function(e) {
                    e.Join = "JOIN", e.Leave = "LEAVE", e.RedirectToAnother = "REDIRECTTOANOTHER"
                }(c || (c = {})),
                function(e) {
                    e.SendTranscript = "TRANSCRIPT", e.PreForm = "PREFORM", e.AwayForm = "AWAY_FORM"
                }(s || (s = {}))
        },
        20: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return g
            })), n.d(t, "c", (function() {
                return f
            }));
            var a = n(7),
                r = n.n(a),
                i = n(19),
                o = n(27),
                c = n(1),
                s = n(25),
                u = n(24),
                d = n(5),
                l = {
                    setRating: Object(o.a)("agent/SET_RATING", Object(o.b)()),
                    setAgents: Object(o.a)("agent/SET_AGENT", Object(o.b)()),
                    updateAgentStatus: Object(o.a)("agent/UPDATE_AGENT_STATUS", Object(o.b)()),
                    updateAgent: Object(o.a)("agent/UPDATE_AGENT", Object(o.b)()),
                    setConnectedAgents: Object(o.a)("agent/SET_CONNECTED_AGENTS", Object(o.b)()),
                    setIsAgentTyping: Object(o.a)("agent/SET_IS_AGENT_TYPING", Object(o.b)()),
                    setStatus: Object(o.a)("agent/SET_STATUS", Object(o.b)()),
                    addConnectedAgent: Object(o.a)("agent/ADD_AGENT", Object(o.b)()),
                    addConnectedAgentFromTransfer: Object(o.a)("agent/ADD_AGENT_FROM_TRANSFER", Object(o.b)()),
                    removeConnectedAgentFromTransfer: Object(o.a)("agent/REMOVE_AGENT_FROM_TRANSFER", Object(o.b)()),
                    removeConnectedAgent: Object(o.a)("agent/REMOVE_AGENT_FROM_CONNECTED", Object(o.b)()),
                    deleteAgent: Object(o.a)("agent/DELETE_AGENT", Object(o.b)()),
                    removeAllConnectedAgents: Object(o.a)("agent/REMOVE__ALL_AGENTS")
                },
                g = function(e) {
                    return function() {
                        var t = Object(i.a)(r.a.mark((function t(n, a) {
                            var i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(l.setStatus(e)), s.b.isWidgetVisible(a()) && (null === (i = Object(d.a)().options) || void 0 === i ? void 0 : i.hideOfflineChat) && u.a.client.notify(c.VisitorEventName.WidgetShow);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                f = function(e) {
                    return function() {
                        var t = Object(i.a)(r.a.mark((function t(n, a) {
                            var i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n(l.setStatus(e)), s.b.isWidgetVisible(a()) && (null === (i = Object(d.a)().options) || void 0 === i ? void 0 : i.hideOfflineChat) && e === c.AccountStatus.Online && u.a.client.notify(c.VisitorEventName.WidgetShow);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
        },
        206: function(e, t, n) {
            "use strict";
            var a = n(293);
            t.a = a.a
        },
        207: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            }));
            var a = n(3),
                r = n(61),
                i = Object(r.isWidgetMobile)(a.a.getState()) ? 16 : 15,
                o = "'Segoe UI','-apple-system', 'BlinkMacSystemFont', 'Ubuntu', 'sans-serif'"
        },
        208: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "e", (function() {
                return p
            })), n.d(t, "d", (function() {
                return b
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "c", (function() {
                return O
            }));
            n(4);
            var a = n(9),
                r = n(12),
                i = n(95);

            function o() {
                var e = Object(a.a)(["\n\tanimation: ", " 0.25s ease-out both 0ms;\n\ttransition: all 50ms;\n"]);
                return o = function() {
                    return e
                }, e
            }

            function c() {
                var e = Object(a.a)(["\n  0% {\n    opacity: 0.8;\n    transform: translateY(6px);\n    transition: all 250ms;\n  }\n  100% {\n    opacity: 1;\n    transition: all 250ms;\n    transform: translateY(0px);\n  }\n"]);
                return c = function() {
                    return e
                }, e
            }

            function s() {
                var e = Object(a.a)(["\n  0% {\n    opacity: 0.8;\n    transform: translateY(72px);\n    z-index: ", ";\n    overflow: hidden !important;\n  }\n  99% {\n    overflow: hidden !important;\n  }\n  100% {\n    opacity: 1;\n    overflow: hidden !important;\n    transform: translateY(0px);\n    z-index: ", ";\n  }\n"]);
                return s = function() {
                    return e
                }, e
            }

            function u() {
                var e = Object(a.a)(["\n  0% {\n    transform: scale(0.2);\n  }\n  100% {\n    transform: scale(1);\n}\n"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = Object(a.a)(["\n\t0%,\n\t60%,\n\t100% {\n\t\ttransform: initial;\n\t}\n\n\t30% {\n\t\ttransform: translateY(-9px);\n\t}\n"]);
                return d = function() {
                    return e
                }, e
            }

            function l() {
                var e = Object(a.a)(["\n  0% {\n    opacity: 0;\n  }\n  80% {\n    opacity: 0.9;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);
                return l = function() {
                    return e
                }, e
            }
            var g = Object(r.e)(l()),
                f = Object(r.e)(d()),
                p = Object(r.e)(u()),
                b = (Object(r.c)({
                    transform: "translateX(0)",
                    opacity: 1,
                    overflow: "hidden",
                    whiteSpace: "pre"
                }), Object(r.e)(s(), i.d, i.d)),
                h = Object(r.e)(c()),
                O = Object(r.c)(o(), h)
        },
        209: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "c", (function() {
                return h.a
            })), n.d(t, "d", (function() {
                return m
            }));
            var a = n(9),
                r = n(161),
                i = n(12);

            function o() {
                var e = Object(a.a)(["\n\tpadding: 0px !important;\n"]);
                return o = function() {
                    return e
                }, e
            }
            var c = function(e) {
                    return Object(i.d)(r.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64",
                        css: s
                    }), Object(i.d)("path", {
                        d: "M30.59 28.55a2.26 2.26 0 0 0-3.2-3.2l-12 11.94a10.67 10.67 0 0 0 15.14 15.09l27-27a14.89 14.89 0 1 0-21.09-21L9.49 31.31a19.15 19.15 0 1 0 27.1 27.07l11.94-11.94a2.26 2.26 0 0 0-3.2-3.2L33.39 55.18a14.64 14.64 0 0 1-21.06-20.34l.36-.35L39.62 7.56a10.26 10.26 0 0 1 7.32-3 10.4 10.4 0 0 1 7.32 3 10.26 10.26 0 0 1 3 7.32 10.39 10.39 0 0 1-3 7.32l-27 27a6.21 6.21 0 0 1-8.7 0 6.12 6.12 0 0 1 0-8.65l12-11.95z"
                    }))
                },
                s = Object(i.c)(o()),
                u = (n(210), n(211), n(212), n(0)),
                d = n.n(u),
                l = n(14),
                g = n(15);

            function f() {
                var e = Object(a.a)(["\n\tpadding: 0 ", "px;\n\tbox-shadow: none !important;\n"]);
                return f = function() {
                    return e
                }, e
            }
            var p = function(e) {
                    return d.a.createElement(r.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64",
                        css: b
                    }), d.a.createElement("path", {
                        d: "M.86 18.51v-.16C3.65 7.05 19.39 3 32 3s28.39 4 31.18 15.5a66.22 66.22 0 0 1 0 20.46C62 43.7 58.13 47.59 51.82 50.37l4 5A3.47 3.47 0 0 1 53.09 61a3.39 3.39 0 0 1-1.44-.31L37.11 54c-1.79.18-3.49.27-5.07.27C21 54.31 3.63 50.23.86 38.84a60.33 60.33 0 0 1 0-20.33z"
                    }))
                },
                b = Object(l.a)(f(), .5 * g.c),
                h = n(213);

            function O() {
                var e = Object(a.a)(["\n\tpadding: 0 3px;\n"]);
                return O = function() {
                    return e
                }, e
            }
            var m = function(e) {
                    return d.a.createElement(r.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64",
                        css: v
                    }), d.a.createElement("path", {
                        d: "M32 0a32 32 0 1 0 32 32A32 32 0 0 0 32 0zm0 59.24A27.24 27.24 0 1 1 59.24 32 27.23 27.23 0 0 1 32 59.24z"
                    }), d.a.createElement("path", {
                        d: "M40.53 40.7a1.63 1.63 0 0 0-1.14.53 10 10 0 0 1-14.07.71 9.51 9.51 0 0 1-.71-.71 1.65 1.65 0 1 0-2.45 2.2 13.26 13.26 0 0 0 18.72 1c.34-.31.66-.63 1-1a1.66 1.66 0 0 0-.14-2.33 1.59 1.59 0 0 0-1.21-.4z"
                    }), d.a.createElement("circle", {
                        cx: "21.17",
                        cy: "25.5",
                        r: "2.75",
                        "data-name": "Ellipse 74"
                    }), d.a.createElement("circle", {
                        cx: "42.83",
                        cy: "25.5",
                        r: "2.75",
                        "data-name": "Ellipse 75"
                    }))
                },
                v = Object(l.a)(O())
        },
        210: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(0),
                r = n.n(a),
                i = n(161),
                o = function(e) {
                    return r.a.createElement(i.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#ee5f54"
                        },
                        cx: "32",
                        cy: "32",
                        r: "32"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#9b241e"
                        },
                        d: "M43.74,48.3263a1.4221,1.4221,0,0,0,2.1191-1.8972,18.6664,18.6664,0,0,0-27.7191,0,1.4221,1.4221,0,0,0,2.1191,1.8972,15.8224,15.8224,0,0,1,23.4809,0Z"
                    }), r.a.createElement("circle", {
                        cx: "20.8",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#9b241e"
                        },
                        cx: "43.2",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#fff"
                        },
                        d: "M42.7638,20c3.7355,0,6.7638,2.0319,6.7638,5.7674a6.7638,6.7638,0,1,1-13.5276,0C36,22.0319,39.0283,20,42.7638,20Z"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M42.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,39.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })), r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#fff"
                        },
                        d: "M20.7638,20c3.7355,0,6.7638,2.0319,6.7638,5.7674a6.7638,6.7638,0,0,1-13.5276,0C14,22.0319,17.0283,20,20.7638,20Z"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M20.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,17.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    }))), r.a.createElement("rect", {
                        style: {
                            fill: "#9b241e"
                        },
                        x: "12",
                        y: "20",
                        width: "15",
                        height: "3",
                        rx: "1.5"
                    }), r.a.createElement("rect", {
                        style: {
                            fill: "#9b241e"
                        },
                        x: "37",
                        y: "20",
                        width: "15",
                        height: "3",
                        rx: "1.5"
                    })))
                }
        },
        211: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(0),
                r = n.n(a),
                i = n(161),
                o = function(e) {
                    return r.a.createElement(i.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#69d622"
                        },
                        cx: "32",
                        cy: "32",
                        r: "32"
                    }), r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#3d7c28"
                        },
                        d: "M20.26,40.74A1.4222,1.4222,0,1,0,18.14,42.6375a18.6665,18.6665,0,0,0,27.7192,0A1.4222,1.4222,0,1,0,43.74,40.74a15.8223,15.8223,0,0,1-23.4808,0Z"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#3d7c28"
                        },
                        cx: "20.8",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#3d7c28"
                        },
                        cx: "43.2",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "42.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M42.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,39.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "20.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M20.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,17.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })))))
                }
        },
        212: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(0),
                r = n.n(a),
                i = n(161),
                o = function(e) {
                    return r.a.createElement(i.a, Object.assign({}, e, {
                        viewBox: "0 0 64 64"
                    }), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#efd739"
                        },
                        cx: "32",
                        cy: "32",
                        r: "32"
                    }), r.a.createElement("g", null, r.a.createElement("path", {
                        style: {
                            fill: "#af6e0e"
                        },
                        d: "M40.1469,46.8344l-15.8341,2.298a1.6,1.6,0,1,1-.46-3.1668l15.8341-2.298a1.6,1.6,0,1,1,.46,3.1668Z"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#af6e0e"
                        },
                        cx: "20.8",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("circle", {
                        style: {
                            fill: "#af6e0e"
                        },
                        cx: "43.2",
                        cy: "24.8",
                        r: "4"
                    }), r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "42.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M42.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,39.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    })), r.a.createElement("g", null, r.a.createElement("circle", {
                        style: {
                            fill: "#fff"
                        },
                        cx: "20.7638",
                        cy: "25.7674",
                        r: "6.7638"
                    }), r.a.createElement("path", {
                        style: {
                            fill: "#323e48"
                        },
                        d: "M20.5633,21.3568a3.31,3.31,0,0,0-1.3471.2868A1.5232,1.5232,0,1,1,17.45,23.5253a3.3208,3.3208,0,1,0,3.1129-2.1685Z"
                    }))))))
                }
        },
        213: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n(121),
                r = n(0),
                i = n.n(r),
                o = n(161),
                c = function(e) {
                    var t = e.customFontSize,
                        n = Object(a.a)(e, ["customFontSize"]),
                        c = Object(r.useMemo)((function() {
                            return {
                                fontSize: t || "default"
                            }
                        }), [t]);
                    return i.a.createElement(o.a, Object.assign({}, n, {
                        viewBox: "0 0 64 64",
                        style: c
                    }), i.a.createElement("path", {
                        d: "M7.47,62.62c-3.85,2-6.2.24-5.24-4L6.29,40.53a6,6,0,0,1,4.79-4.33l24.41-2.84c6.5-.74,6.52-2,0-2.71l-24.4-2.79A5.89,5.89,0,0,1,6.3,23.58L2.22,5.33c-1-4.23,1.38-6,5.24-3.95L58.11,28.29c3.85,2.05,3.86,5.36,0,7.41L7.46,62.62Z"
                    }))
                }
        },
        23: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = n(153),
                r = n.n(a),
                i = r()("smartsupp:widget"),
                o = r()("smartsupp:ga")
        },
        24: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return C
            }));
            var a = n(7),
                r = n.n(a),
                i = n(19),
                o = n(44),
                c = n(1),
                s = n(3),
                u = n(10),
                d = n(65),
                l = n(6),
                g = n(61),
                f = n(20),
                p = n(8),
                b = n(16),
                h = n(75),
                O = n(5),
                m = n(54),
                v = n(148),
                j = function() {
                    var e = "http" === Object(O.a)().options.protocol ? "http" : "https",
                        t = Object(O.a)().options.host;
                    return "".concat(e, "://").concat(t)
                },
                y = n(46),
                T = n(40),
                S = n(23),
                A = n(28),
                w = n(11),
                M = n(55),
                E = Object(O.a)().options.visitorData || {},
                x = Object(y.b)(A.i) ? Number(Object(y.b)(A.i)) : null,
                C = function() {
                    var e = {};
                    return Object(O.a)().options.host ? (setTimeout((function() {
                        e.client = Object(c.createVisitorClient)({
                                data: {
                                    key: Object(O.a)().options.key,
                                    userAgent: window.top.navigator.userAgent || window.parent.navigator.userAgent,
                                    id: Object(y.b)(A.f) || null,
                                    group: T.a.group || E.group,
                                    email: T.a.email || E.email,
                                    lang: T.a.language || d.c.lang,
                                    pageUrl: window.top.location.href || window.parent.location.href,
                                    pageTitle: window.top.document.title || window.parent.document.title,
                                    visits: x || 0,
                                    variables: T.a.variables || E.variables,
                                    name: T.a.name || E.name,
                                    domain: window.top.location.hostname || window.parent.location.hostname || "unknown",
                                    phone: T.a.phone || E.phone,
                                    referer: window.top.document.referrer || window.parent.document.referrer,
                                    bundleVersion: "a46a9f1c1671f4cd19c76bbe1a830e6b41e70712",
                                    sitePlatform: Object(O.a)().options.sitePlatform,
                                    triggerable: Object(O.a)().options.triggerable,
                                    isWidgetVisible: Object(g.isWidgetVisible)(s.a.getState()),
                                    isPreviewMode: Object(O.a)().options.isPreviewMode
                                },
                                connection: {
                                    url: "".concat(j()),
                                    options: {
                                        path: "/socket",
                                        autoConnect: !1,
                                        reconnection: !0,
                                        reconnectionDelay: 1e3,
                                        reconnectionDelayMax: 3e4
                                    }
                                }
                            }), Object(O.a)().options.onClientCreated && Object(O.a)().options.onClientCreated(e.client), e.client.on("agent.status_updated", (function(e) {
                                s.a.dispatch(f.a.updateAgentStatus(e))
                            })), e.client.on("agent.updated", (function(e) {
                                s.a.dispatch(f.a.updateAgent(e))
                            })), e.client.on("agent.removed", (function(e) {
                                s.a.dispatch(f.a.deleteAgent(e.id))
                            })), e.client.on("account.updated", (function(e) {
                                s.a.dispatch(Object(f.c)(e.status)), s.a.dispatch(l.GeneralAction.widgetOnline())
                            })), e.client.on("chat.agent_assigned", (function(e) {
                                s.a.dispatch(Object(u.assignAgent)(e))
                            })), e.client.on("chat.agent_unassigned", (function(e) {
                                s.a.dispatch(Object(u.unassignAgent)(e))
                            })), e.client.on("chat.agent_typing", (function(e) {
                                setTimeout((function() {
                                    return s.a.dispatch(f.a.setIsAgentTyping(e.typing.is))
                                }), e.typing.is ? 0 : M.a)
                            })), e.client.on("chat.agent_joined", (function(e) {
                                s.a.dispatch(Object(u.addAgent)(e)), Object(m.e)(e.agent.fullname)
                            })), e.client.on("chat.agent_left", (function(e) {
                                s.a.dispatch(Object(u.removeAgent)(e))
                            })), e.client.on("chat.contact_read", (function(e) {
                                s.a.dispatch(u.MessageAction.setLastRead(e.lastReadAt)), s.a.dispatch(l.GeneralAction.widgetOnline())
                            })), e.client.on("chat.message_received", (function(e) {
                                var t = Object(o.a)(s.a.getState().messages.messages);
                                if (!t.find((function(t) {
                                        return t.id === e.message.id
                                    }))) {
                                    s.a.dispatch(f.a.setIsAgentTyping(!1));
                                    var n, a = e.message;
                                    if (a.subType !== c.MessageSubType.Contact && s.a.dispatch(u.MessageAction.setIsFakeTyping(!0)), setTimeout((function() {
                                            s.a.dispatch(Object(u.addMessageFromServer)({
                                                message: a,
                                                agents: s.a.getState().agent.agents
                                            })), s.a.dispatch(u.MessageAction.setIsFakeTyping(!1))
                                        }), M.d), s.a.dispatch(Object(u.checkMessagesAndMarkAsRead)()), s.a.getState().general.isWidgetOnline || s.a.dispatch(l.GeneralAction.widgetOnline()), a.subType === c.MessageSubType.Bot) s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Pending)), s.a.dispatch(u.MessageAction.setBotName(null === (n = a.trigger) || void 0 === n ? void 0 : n.name));
                                    !Object(g.openWidgetOnTrigger)(s.a.getState()) || a.subType !== c.MessageSubType.Bot && a.subType !== c.MessageSubType.Trigger || s.a.dispatch(Object(l.toggleOpenCloseWidget)(!0)), Object(m.f)(t, a), Object(m.b)(t, a), T.b.emit(w.e.MessageReceived, a)
                                }
                            })), e.client.on("chat.visitor_closed", (function() {
                                s.a.dispatch(l.GeneralAction.setChatStatus(p.b.ClosedByVisitor))
                            })), e.client.on("chat.updated", (function() {
                                s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Served))
                            })), e.client.on("chat.served", (function() {
                                s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Served))
                            })), e.client.on("chat.opened", (function() {
                                s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Opened))
                            })), e.client.on("chat.closed", (function(e) {
                                "agent_close" === e.closeType && (s.a.dispatch(Object(u.removeAllAgents)(e)), s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Resolved)))
                            })), e.client.on("chat.message_updated", (function(e) {
                                s.a.dispatch(u.MessageAction.hideChatbotMessageOptions(e.message.id))
                            })), e.client.on("visitor.updated", (function(e) {
                                s.a.dispatch(l.GeneralAction.updateUser(e))
                            })), e.client.on("initialized", (function() {
                                Object(S.b)("initialized in widget listened"), setTimeout((function() {
                                    s.a.dispatch(l.GeneralAction.widgetOnline()), Object(S.b)("initialized timeout ran")
                                }), M.c), Object(S.b)("initialized listened and ran all the function inside itself")
                            })), e.client.on("connect", (function() {
                                Object(S.b)("connect listened"), s.a.dispatch(l.GeneralAction.widgetOnline())
                            })), e.client.on("disconnect", (function() {
                                setTimeout((function() {
                                    return s.a.dispatch(l.GeneralAction.widgetOffline())
                                }), M.c)
                            })), e.client.on("error", (function(e) {
                                Object(h.a)("error.serverError", e)
                            })),
                            function() {
                                var t = Object(i.a)(r.a.mark((function t() {
                                    var n, a, i, o, d, g, O;
                                    return r.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.client.connect();
                                            case 3:
                                                if (n = t.sent, Object(S.b)("data", n), s.a.dispatch(l.GeneralAction.widgetOnline()), a = e.client.identity, i = a.id, Object(y.c)({
                                                        name: A.f,
                                                        value: "".concat(i || "")
                                                    }), Object(y.c)({
                                                        name: A.i,
                                                        value: "".concat(n.visitor.visits)
                                                    }), !n) {
                                                    t.next = 33;
                                                    break
                                                }
                                                if (s.a.dispatch(l.GeneralAction.setUser(n)), s.a.dispatch(Object(f.b)(n.account.status)), s.a.dispatch(u.MessageAction.setAcceptedFileTypes(n.fileUpload.acceptedFileTypes)), s.a.dispatch(u.MessageAction.setAcceptedFileExtensions(n.fileUpload.acceptedFileExtensions)), s.a.dispatch(u.MessageAction.setAcceptedFileMaxSize(n.fileUpload.maxFileSize)), !n.chat) {
                                                    t.next = 33;
                                                    break
                                                }
                                                if (s.a.dispatch(u.MessageAction.setLastRead(n.chat.unreadInfo.lastReadAt)), !n.chat.isClosed) {
                                                    t.next = 21;
                                                    break
                                                }
                                                s.a.dispatch(l.GeneralAction.setChatStatus(p.b.ClosedByVisitor)), t.next = 33;
                                                break;
                                            case 21:
                                                t.t0 = n.chat.status, t.next = t.t0 === c.ChatStatus.Closed ? 24 : t.t0 === c.ChatStatus.Open ? 26 : t.t0 === c.ChatStatus.Served ? 28 : t.t0 === c.ChatStatus.Pending ? 30 : 32;
                                                break;
                                            case 24:
                                                return s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Resolved)), t.abrupt("break", 33);
                                            case 26:
                                                return s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Opened)), t.abrupt("break", 33);
                                            case 28:
                                                return s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Served)), t.abrupt("break", 33);
                                            case 30:
                                                return s.a.dispatch(l.GeneralAction.setChatStatus(p.b.Pending)), t.abrupt("break", 33);
                                            case 32:
                                                return t.abrupt("break", 33);
                                            case 33:
                                                o = n.account.agents, d = o.map(b.f), s.a.dispatch(f.a.setAgents(d)), g = n.chat && n.chat.assignedIds, O = Object(v.a)(g, o), s.a.dispatch(f.a.setConnectedAgents(O)), n.chat && n.chat.messages && n.chat.messages.length && s.a.dispatch(Object(u.addMessageFromServer)({
                                                    message: n.chat.messages,
                                                    agents: s.a.getState().agent.agents
                                                })), s.a.dispatch(f.a.setAgents(d)), s.a.dispatch(l.GeneralAction.widgetOnline()), setTimeout((function() {
                                                    return s.a.dispatch(l.GeneralAction.widgetLoadedToggle())
                                                }), M.e), s.a.dispatch(Object(u.checkMessagesAndMarkAsRead)()), t.next = 50;
                                                break;
                                            case 46:
                                                t.prev = 46, t.t1 = t.catch(0), s.a.dispatch(l.GeneralAction.widgetHide()), Object(h.a)("error.serverError", t.t1);
                                            case 50:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 46]
                                    ])
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }()()
                    }), 0), e) : e
                }()
        },
        25: function(e, t, n) {
            "use strict";
            var a = n(6);
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(61);
            n.d(t, "b", (function() {
                return r
            }));
            n(114)
        },
        276: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            }));
            var a = 15,
                r = 600
        },
        279: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            }));
            var a = n(205),
                r = n(13),
                i = "timeago-custom-locale",
                o = function() {
                    Object(a.b)(i, (function(e, t) {
                        return [
                            [r.a.translate("timeago.justNow"), r.a.translate("timeago.rightNow")],
                            [r.a.translate("timeago.XSecondsAgo"), r.a.translate("timeago.seconds")],
                            [r.a.translate("timeago.oneMinuteAgo"), ""],
                            [r.a.translate("timeago.XMinutesAgo"), ""],
                            [r.a.translate("timeago.oneHourAgo"), ""],
                            [r.a.translate("timeago.XHoursAgo"), ""],
                            [r.a.translate("timeago.oneDayAgo"), ""],
                            [r.a.translate("timeago.XDaysAgo"), ""],
                            [r.a.translate("timeago.oneWeekAgo"), ""],
                            [r.a.translate("timeago.XWeeksAgo"), ""],
                            [r.a.translate("timeago.oneMonthAgo"), ""],
                            [r.a.translate("timeago.XMonthsAgo"), ""],
                            [r.a.translate("timeago.oneYearAgo"), ""],
                            [r.a.translate("timeago.XYearsAgo"), ""]
                        ][t]
                    }))
                },
                c = function(e) {
                    return Object(a.a)(e, i)
                }
        },
        28: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "i", (function() {
                return s
            })), n.d(t, "g", (function() {
                return u
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "c", (function() {
                return g
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "b", (function() {
                return p
            }));
            var a = n(5),
                r = "ssupp",
                i = Object(a.a)().options.cookiePrefix ? Object(a.a)().options.cookiePrefix : "",
                o = function(e) {
                    return "".concat(i).concat(r, ".").concat(e)
                },
                c = "vid",
                s = "visits",
                u = "opened",
                d = "message",
                l = 182,
                g = "".concat(r, "_").concat(Object(a.a)().options.key),
                f = [c, s],
                p = 22
        },
        3: function(e, t, n) {
            "use strict";
            var a = n(118),
                r = n(281),
                i = n(114),
                o = n(113),
                c = n(111),
                s = n(480),
                u = n(47),
                d = n(159),
                l = {
                    isFetching: !1
                },
                g = Object(s.a)(l, Object(u.a)(d.a.isFetchingTranslations, (function(e, t) {
                    var n = t.payload;
                    e.isFetching = n
                }))),
                f = (i.b, o.a, c.b, Object(a.b)({
                    general: i.a,
                    messages: o.b,
                    agent: c.a,
                    translation: g
                })),
                p = Object(a.c)(f, Object(a.a)(r.a));
            t.a = p
        },
        30: function(e, t, n) {
            "use strict";
            var a, r, i;
            n.d(t, "b", (function() {
                    return a
                })), n.d(t, "c", (function() {
                    return r
                })), n.d(t, "a", (function() {
                    return i
                })),
                function(e) {
                    e.Right = "right", e.Left = "left"
                }(a || (a = {})),
                function(e) {
                    e.Auto = "auto", e.Relative = "relative", e.Fixed = "fixed"
                }(r || (r = {})),
                function(e) {
                    e.Bubble = "bubble", e.Greeting = "greeting"
                }(i || (i = {}))
        },
        31: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "b", (function() {
                return O
            }));
            var a = n(9),
                r = n(14),
                i = n(15);

            function o() {
                var e = Object(a.a)(["\n\tmargin-top: 2px;\n\tmargin-bottom: 0;\n"]);
                return o = function() {
                    return e
                }, e
            }

            function c() {
                var e = Object(a.a)(["\n\tmargin-top: 2px;\n\tmargin-bottom: 0;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function s() {
                var e = Object(a.a)(["\n\tmargin-top: ", "px;\n\tmargin-bottom: 0;\n"]);
                return s = function() {
                    return e
                }, e
            }

            function u() {
                var e = Object(a.a)(["\n\tmargin-top: ", "px;\n\tmargin-bottom: 0;\n\tborder-radius: 10px;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = Object(a.a)(["\n\tpadding: 11px 14px;\n\tmin-height: ", "px;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function l() {
                var e = Object(a.a)(["\n\twidth: 70%;\n\tmax-width: 300px;\n"]);
                return l = function() {
                    return e
                }, e
            }
            var g = Object(r.a)(l()),
                f = Object(r.a)(d(), 3 * i.c),
                p = Object(r.a)(u(), 1.5 * i.c),
                b = Object(r.a)(s(), i.c),
                h = Object(r.a)(c()),
                O = Object(r.a)(o())
        },
        40: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            })), n.d(t, "a", (function() {
                return p
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "d", (function() {
                return v
            }));
            var a = n(63),
                r = n(284),
                i = n(3),
                o = n(6),
                c = n(65),
                s = n(10),
                u = n(11),
                d = n(24),
                l = n(149),
                g = n(5),
                f = new r.TinyEmitter,
                p = {},
                b = function(e, t) {
                    if (t) return "".concat(t, "?name=").concat(e)
                },
                h = function(e) {
                    return "object" === typeof e && null !== e
                },
                O = function(e) {
                    return h(e) ? (Object.keys(e).forEach((function(t) {
                        e[t] = h(e[t]) ? e[t].value : e[t]
                    })), e) : e
                },
                m = function(e, t) {
                    if ("function" === typeof t) switch (e) {
                        case u.e.MessageSent:
                            f.on(u.e.MessageSent, (function(e) {
                                t(e)
                            }));
                            break;
                        case u.e.MessageReceived:
                            f.on(u.e.MessageReceived, (function(e) {
                                t(e)
                            }));
                            break;
                        default:
                            console.error("Unknown event.")
                    } else console.error("".concat(t, " is not a function."))
                },
                v = function(e, t) {
                    var n = Object(g.a)().options.package;
                    if (n !== u.h.Free) switch (e !== u.c.Telefon && e !== u.c.Telephone || (e = u.c.Phone), e) {
                        case u.c.SettingsGetTranslates:
                            l.a.subscribe(e, t);
                            break;
                        case u.c.Variables:
                            p[e] = O(t), i.a.dispatch(o.GeneralAction.updateUser(Object(a.a)({}, e, O(t))));
                            try {
                                d.a.client.update(Object(a.a)({}, e, O(t)))
                            } catch (r) {}
                            break;
                        case u.c.Name:
                        case u.c.Group:
                        case u.c.Email:
                        case u.c.Phone:
                            p[e] = t, i.a.dispatch(o.GeneralAction.updateUser(Object(a.a)({}, e, t)));
                            try {
                                d.a.client.update(Object(a.a)({}, e, t))
                            } catch (r) {}
                            break;
                        case u.c.Language:
                            p[e] = t || c.b;
                            break;
                        case u.c.ChatClose:
                            i.a.dispatch(Object(o.toggleOpenCloseWidget)(!1, !1));
                            break;
                        case u.c.ChatOpen:
                            i.a.dispatch(Object(o.toggleOpenCloseWidget)(!0, !0)), i.a.dispatch(Object(o.showWidget)());
                            break;
                        case u.c.ChatShow:
                            i.a.dispatch(Object(o.showWidget)());
                            break;
                        case u.c.ChatHide:
                            i.a.dispatch(o.GeneralAction.widgetHide());
                            break;
                        case u.c.ThemeColor:
                            Object(g.a)().options.features.api && i.a.dispatch(o.GeneralAction.setThemeColor(t));
                            break;
                        case u.c.ChatMessage:
                            i.a.dispatch(s.MessageAction.setInputText(t));
                            break;
                        case u.c.RecordingDisable:
                        case u.c.RecordingOff:
                            break;
                        case u.c.On:
                            m(t, arguments.length <= 2 ? void 0 : arguments[2]);
                            break;
                        case u.c.HtmlApply:
                            break;
                        default:
                            console.warn("unknown API", e, t)
                    }
                }
        },
        43: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "b", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e.phone = "matchRegexp:^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"
                }(a || (a = {})),
                function(e) {
                    e.Text = "TEXT", e.DropDown = "DROP_DOWN", e.Checkbox = "CHECKBOX"
                }(r || (r = {}))
        },
        45: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return b
            })), n.d(t, "h", (function() {
                return h
            })), n.d(t, "j", (function() {
                return O
            })), n.d(t, "l", (function() {
                return m
            })), n.d(t, "f", (function() {
                return v
            })), n.d(t, "a", (function() {
                return j
            })), n.d(t, "k", (function() {
                return y
            })), n.d(t, "g", (function() {
                return T
            })), n.d(t, "d", (function() {
                return S
            })), n.d(t, "c", (function() {
                return A
            })), n.d(t, "b", (function() {
                return w
            })), n.d(t, "e", (function() {
                return M
            }));
            var a = n(4),
                r = n(147),
                i = n(8),
                o = n(23),
                c = "Triggered message sent",
                s = "Trigger started conversation",
                u = "Chatbot sent",
                d = "Chatbot interaction",
                l = "Chatbot button interaction",
                g = "Chatbot started conversation ",
                f = {
                    category: "SmartSupp",
                    nonInteraction: !0,
                    value: 1
                },
                p = function(e, t) {
                    var n = Object(a.a)(Object(a.a)({}, f), {}, {
                        action: e,
                        label: t
                    });
                    Object(o.a)(n), Object(r.b)(n)
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(c, e)
                },
                h = function(e) {
                    return p("Trigger message viewed", e)
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(s, e)
                },
                m = function() {
                    return p("Visitor started conversation", "")
                },
                v = function(e) {
                    return p("Conversation served", e)
                },
                j = function() {
                    return p("Auth form filled", "")
                },
                y = function() {
                    p("Offline message sent", "")
                },
                T = function(e) {
                    var t = [{
                        rating: i.a.Bad,
                        text: "Bad"
                    }, {
                        rating: i.a.Normal,
                        text: "Normal"
                    }, {
                        rating: i.a.Good,
                        text: "Good"
                    }].find((function(t) {
                        return t.rating === e
                    }));
                    p("Feedback sent", (null === t || void 0 === t ? void 0 : t.text) || "")
                },
                S = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(u, e)
                },
                A = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(d, e)
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(l, e)
                },
                M = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return p(g, e)
                }
        },
        456: function(e, t) {},
        46: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            })), n.d(t, "c", (function() {
                return f
            })), n.d(t, "b", (function() {
                return p
            }));
            var a = n(63),
                r = n(4),
                i = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) e[a] = n[a]
                    }
                    return e
                },
                o = {
                    read: function(e) {
                        return e.replace(/%3B/g, ";")
                    },
                    write: function(e) {
                        return e.replace(/;/g, "%3B")
                    }
                };
            var c = function e(t, n) {
                    function a(e, a, r) {
                        if ("undefined" !== typeof top.document) {
                            "number" === typeof(r = i({}, n, r)).expires && (r.expires = new Date(Date.now() + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), e = o.write(e).replace(/=/g, "%3D"), a = t.write(String(a), e);
                            var c = "";
                            for (var s in r) r[s] && (c += "; ".concat(s), !0 !== r[s] && (c += "=".concat(r[s].split(";")[0])));
                            return top.document.cookie = "".concat(e, "=").concat(a).concat(c)
                        }
                    }
                    return Object.create({
                        set: a,
                        get: function(e) {
                            if ("undefined" !== typeof top.document && (!arguments.length || e)) {
                                for (var n = top.document.cookie ? top.document.cookie.split("; ") : [], a = {}, r = 0; r < n.length; r++) {
                                    var i = n[r].split("="),
                                        c = i.slice(1).join("="),
                                        s = o.read(i[0]).replace(/%3D/g, "=");
                                    if (a[s] = t.read(c, s), e === s) break
                                }
                                return e ? a[e] : a
                            }
                        },
                        remove: function(e, t) {
                            a(e, "", i({}, t, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(t) {
                            return e(this.converter, i({}, this.attributes, t))
                        },
                        withConverter: function(t) {
                            return e(i({}, this.converter, t), this.attributes)
                        }
                    }, {
                        attributes: {
                            value: Object.freeze(n)
                        },
                        converter: {
                            value: Object.freeze(t)
                        }
                    })
                }(o, {
                    path: "/"
                }),
                s = n(5),
                u = n(28),
                d = n(23),
                l = n(55),
                g = function() {
                    return JSON.parse(localStorage.getItem(u.c) || "{}")
                },
                f = function(e) {
                    var t = e.name,
                        n = e.value,
                        i = e.excludeLocalStorage,
                        o = void 0 !== i && i,
                        f = e.excludeCookie,
                        b = void 0 !== f && f,
                        h = e.expirationInDays,
                        O = void 0 === h ? u.e : h,
                        m = e.options;
                    if (b || c.set(Object(u.d)(t), n, Object(r.a)(Object(r.a)({}, function() {
                            return {
                                expires: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.e,
                                domain: Object(s.a)().options.cookieDomain,
                                path: Object(s.a)().options.cookiePath,
                                sameSite: "strict",
                                secure: "https:" === window.top.location.protocol
                            }
                        }(O)), m)), !o) {
                        var v = g(),
                            j = Object(r.a)(Object(r.a)({}, v), {}, Object(a.a)({}, t, n.toString()));
                        try {
                            localStorage.setItem(u.c, JSON.stringify(j))
                        } catch (y) {
                            y.code === u.b && console.error("localStorage is full", y), console.error("error setting localStorage", y)
                        }
                    }
                    setTimeout((function() {
                        var e = c.get(Object(u.d)(t)),
                            a = p(t);
                        e !== n && a !== n.toString() && (Object(d.b)("cookie not set debug", e, n), Object(d.b)("localStorage not set debug", a, n), u.a.includes(t) && console.error("Cookie not set!"))
                    }), l.b)
                },
                p = function(e) {
                    var t = c.get(Object(u.d)(e)),
                        n = g(),
                        a = n[e] ? n[e] : void 0;
                    return t || a
                }
        },
        479: function(e, t, n) {
            "use strict";
            n.r(t);
            n(301), n(312), n(317), n(318), n(320), n(321), n(322), n(323), n(324), n(325), n(327), n(336), n(337), n(338), n(343), n(344), n(346), n(347), n(348), n(349), n(350), n(351), n(352), n(353), n(358), n(360), n(361), n(362), n(363);
            var a = n(44),
                r = (n(365), n(254), n(12)),
                i = n(29),
                o = n(70),
                c = n.n(o),
                s = n(504),
                u = n(498),
                d = n(3),
                l = n(6),
                g = n(5),
                f = n(40),
                p = n(159),
                b = n(9),
                h = n(14);

            function O() {
                var e = Object(b.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\ttop: 0;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: flex-end;\n"]);
                return O = function() {
                    return e
                }, e
            }
            var m = Object(h.a)(O()),
                v = n(0),
                j = n.n(v),
                y = n(286),
                T = n(497),
                S = n(495),
                A = n(123),
                w = n(1),
                M = n(30),
                E = n(25),
                x = n(122),
                C = n(11),
                I = n(206),
                k = n(501),
                F = n(500),
                D = n(69),
                _ = Object(F.a)((function() {
                    return Object(k.a)({
                        unreadMessagesBadge: {
                            top: "9px !important",
                            right: "9px !important",
                            background: "".concat(D.a.red, " !important"),
                            color: "white",
                            boxShadow: "1px 1px 2px rgba(0,0,0,0.4) !important"
                        },
                        onlineBadge: {
                            padding: "6px",
                            borderRadius: "50%",
                            background: "".concat(D.a.green, " !important"),
                            border: "2px solid white",
                            "&.MuiBadge-anchorOriginTopLeftCircle": {
                                left: "10px"
                            },
                            "&.MuiBadge-anchorOriginTopRightCircle": {
                                right: "10px"
                            },
                            "&.MuiBadge-anchorOriginBottomLeftCircle": {
                                left: "55px",
                                bottom: "15px"
                            }
                        }
                    })
                }), {
                    name: "SmartBadge"
                }),
                R = function(e, t, n) {
                    return e ? {
                        vertical: "top",
                        horizontal: "left" === t ? "right" : "left"
                    } : n ? {
                        vertical: "bottom",
                        horizontal: "right"
                    } : {
                        vertical: "bottom",
                        horizontal: "left"
                    }
                },
                W = n(496),
                G = n(119),
                B = n(208),
                N = n(17),
                P = n(209),
                L = function() {
                    var e = Object(i.d)(G.b.unreadMessagesCount),
                        t = Object(i.d)(E.b.isWidgetMobile),
                        n = Object(i.d)(E.b.isBubbleOrGreeting),
                        a = _({}),
                        o = n === M.a.Greeting,
                        c = {
                            badge: a.unreadMessagesBadge
                        };
                    return Object(r.d)(T.a, {
                        p: .5
                    }, Object(r.d)(S.a, {
                        badgeContent: e,
                        classes: c,
                        "data-testid": "widgetButtonBadge"
                    }, Object(r.d)(W.a, {
                        "data-testid": "widgetButton",
                        css: [U(o, t), V],
                        variant: "circular",
                        "aria-label": "Chat",
                        className: "fab",
                        disableRipple: !0
                    }, Object(r.d)(P.b, {
                        "data-testid": "widgetButtonClose",
                        fontSizeAdjust: 22,
                        transform: "scale(-1,1)"
                    }))))
                },
                U = function(e, t) {
                    return Object(r.c)({
                        height: "".concat(e || t ? N.f : N.d, " !important"),
                        width: "".concat(e || t ? N.f : N.d, " !important"),
                        background: e ? "rgba(255, 255, 255, 0.1) !important" : void 0
                    })
                },
                V = Object(r.c)({
                    animation: "".concat(B.e, " 350ms cubic-bezier(0.165, 0.84, 0.44, 1) !important"),
                    willChange: "transform",
                    boxShadow: "none !important"
                }),
                z = n(13),
                H = n(95),
                q = n(15),
                Y = [{
                    showTrigger: !0,
                    moreEngagementBtn: !0,
                    size: N.l
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !0,
                    size: N.g
                }, {
                    showTrigger: !0,
                    moreEngagementBtn: !1,
                    size: N.l
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !1,
                    size: N.j
                }],
                X = [{
                    showTrigger: !0,
                    moreEngagementBtn: !0,
                    size: N.m
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !0,
                    size: N.k
                }, {
                    showTrigger: !0,
                    moreEngagementBtn: !1,
                    size: N.m
                }, {
                    showTrigger: !1,
                    moreEngagementBtn: !1,
                    size: N.j
                }],
                Z = function(e, t, n) {
                    var a = n.find((function(n) {
                        return n.showTrigger === e && n.moreEngagementBtn === t
                    }));
                    return a ? a.size : N.g
                },
                J = function(e) {
                    var t = e.showTrigger,
                        n = e.widerVersion,
                        a = e.actualWidthOfWidget;
                    return 0 !== a && !t && n ? "".concat(a + N.r + N.e, "px") : Z(t, n, X)
                },
                $ = function(e) {
                    var t = e.showTrigger,
                        n = e.widerVersion,
                        a = e.actualHeightOfWidget;
                    return function(e, t) {
                        return 0 !== t && t > N.e && e
                    }(t, a) ? "".concat(a + N.r + N.a * q.c, "px") : Z(t, n, Y)
                },
                Q = function(e) {
                    var t = e.isWidgetMobile,
                        n = e.isWidgetOpen,
                        a = e.offsetMobile,
                        r = e.offsetDesktop;
                    return t ? n ? "0px" : "".concat(a, "px") : "".concat(r, "px")
                },
                K = function(e) {
                    var t = e.isWidgetOpen,
                        n = e.isWidgetMobile,
                        a = e.showTrigger,
                        r = e.isWidgetVisible,
                        i = e.widerVersion,
                        o = void 0 !== i && i,
                        c = e.actualWidthOfWidget,
                        s = void 0 === c ? 0 : c,
                        u = e.actualHeightOfWidget,
                        d = void 0 === u ? 0 : u,
                        l = Object(g.a)().el,
                        f = Object(g.a)().options,
                        p = f.orientation,
                        b = f.position,
                        h = f.offsetX,
                        O = f.offsetY;
                    if (l)
                        if (r) {
                            var m = function(e) {
                                    var t = e.isWidgetMobile,
                                        n = e.isWidgetOpen,
                                        a = e.offset,
                                        r = null !== a && void 0 !== a ? a : .75 * q.c,
                                        i = !n && a ? a : N.b;
                                    return Q({
                                        isWidgetMobile: t,
                                        isWidgetOpen: n,
                                        offsetMobile: r,
                                        offsetDesktop: i
                                    })
                                }({
                                    isWidgetMobile: n,
                                    isWidgetOpen: t,
                                    offset: h
                                }),
                                v = function(e) {
                                    var t = e.isWidgetMobile,
                                        n = e.isWidgetOpen,
                                        a = e.offset,
                                        r = null !== a && void 0 !== a ? a : q.c,
                                        i = !n && a ? a : N.c;
                                    return Q({
                                        isWidgetMobile: t,
                                        isWidgetOpen: n,
                                        offsetMobile: r,
                                        offsetDesktop: i
                                    })
                                }({
                                    isWidgetMobile: n,
                                    isWidgetOpen: t,
                                    offset: O
                                });
                            l.style.display = "block", l.style.overflow = "hidden", l.style.zIndex = "".concat(H.h), b === M.c.Fixed && (l.style.position = "fixed", l.style.bottom = v, p && (p === M.b.Right ? (l.style.left = "initial", l.style.right = m) : (l.style.left = m, l.style.right = "initial"))), n ? t ? (l.style.height = N.q, l.style.maxHeight = N.q, l.style.height = "100%", l.style.maxWidth = "100%", l.style.width = "100%", l.style.background = "white") : (l.style.maxHeight = N.h, l.style.maxWidth = o ? N.k : N.i, l.style.height = N.h, l.style.width = o ? N.k : N.i, l.style.background = "transparent") : t ? (l.style.maxHeight = N.o, l.style.height = N.n, l.style.maxWidth = N.p, l.style.width = N.p, l.style.background = "transparent") : (l.style.maxHeight = $({
                                showTrigger: a,
                                widerVersion: o,
                                actualHeightOfWidget: d
                            }), l.style.maxWidth = J({
                                showTrigger: a,
                                widerVersion: o,
                                actualWidthOfWidget: s
                            }), l.style.height = $({
                                showTrigger: a,
                                widerVersion: o,
                                actualHeightOfWidget: d
                            }), l.style.width = J({
                                showTrigger: a,
                                widerVersion: o,
                                actualWidthOfWidget: s
                            }), l.style.background = "transparent")
                        } else l.style.display = "none"
                },
                ee = function(e) {
                    var t = e.widgetButtonRef,
                        n = Object(i.d)(E.b.isWidgetMobile);
                    return Object(v.useEffect)((function() {
                        var e;
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = Object(g.a)().el;
                            t && (t.style.maxWidth = J({
                                showTrigger: !1,
                                widerVersion: !0,
                                actualWidthOfWidget: e
                            }), t.style.width = J({
                                showTrigger: !1,
                                widerVersion: !0,
                                actualWidthOfWidget: e
                            }))
                        }(null === (e = t.current) || void 0 === e ? void 0 : e.clientWidth)
                    }), [t]), j.a.createElement(T.a, {
                        display: "flex",
                        flexDirection: "row",
                        className: "wrapper",
                        borderRadius: 32,
                        boxShadow: 3
                    }, C.i === M.b.Left && j.a.createElement(L, null), j.a.createElement(T.a, {
                        display: "flex",
                        alignItems: "center",
                        "data-testid": "widgetButtonText"
                    }, j.a.createElement("div", {
                        ref: t,
                        style: {
                            paddingLeft: C.i === M.b.Right ? 2 * q.c : 0,
                            paddingRight: C.i === M.b.Left ? 2 * q.c : 0
                        }
                    }, j.a.createElement(T.a, {
                        fontSize: n ? "14px" : "16px",
                        letterSpacing: "-0.2px",
                        maxWidth: 120
                    }, z.a.translate("button.greeting")))), C.i === M.b.Right && j.a.createElement(L, null))
                };

            function te() {
                var e = Object(b.a)(["\n\t.wrapper {\n\t\tcolor: ", ";\n\t\twidth: auto;\n\t\tbackground-image: linear-gradient(80deg, ", ", ", ");\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\tbackground-image: linear-gradient(\n\t\t\t\t80deg,\n\t\t\t\t", ",\n\t\t\t\t", "\n\t\t\t);\n\t\t}\n\t}\n\n\t.fab {\n\t\tcolor: ", " !important;\n\t\tbackground-image: linear-gradient(80deg, ", ", ", ");\n\t\t&:hover {\n\t\t\tbackground-image: linear-gradient(\n\t\t\t\t80deg,\n\t\t\t\t", ",\n\t\t\t\t", "\n\t\t\t);\n\t\t}\n\t}\n"]);
                return te = function() {
                    return e
                }, e
            }
            var ne = .1,
                ae = Object(I.a)((function(e) {
                    var t = e.className,
                        n = e.widgetButtonRef,
                        a = Object(i.d)(E.b.isWidgetMobile),
                        r = Object(i.d)(E.b.isBubbleOrGreeting),
                        o = Object(i.d)(x.a.getWidgetStatus),
                        c = Object(i.c)(),
                        s = _({}),
                        u = r === M.a.Greeting,
                        d = {
                            badge: s.onlineBadge
                        };
                    return j.a.createElement(T.a, {
                        "data-testid": "widgetButtonWrapper",
                        className: t,
                        display: "flex",
                        position: "absolute",
                        bottom: 5,
                        right: C.i === M.b.Right ? 5 : void 0,
                        left: C.i === M.b.Left ? 5 : void 0,
                        onClick: function() {
                            return c(Object(l.toggleOpenCloseWidget)(!0))
                        }
                    }, j.a.createElement(S.a, {
                        classes: d,
                        invisible: o === w.AccountStatus.Offline,
                        overlap: "circular",
                        variant: "dot",
                        anchorOrigin: R(u, C.i, a)
                    }, u ? j.a.createElement(ee, {
                        widgetButtonRef: n
                    }) : j.a.createElement(L, null)))
                }))(te(), (function(e) {
                    return e.theme.textColor
                }), (function(e) {
                    return e.theme.primary
                }), (function(e) {
                    return e.theme.light
                }), (function(e) {
                    return Object(A.b)(e.theme.primary, ne)
                }), (function(e) {
                    return Object(A.b)(e.theme.light, ne)
                }), (function(e) {
                    return e.theme.textColor
                }), (function(e) {
                    return e.theme.primary
                }), (function(e) {
                    return e.theme.light
                }), (function(e) {
                    return Object(A.b)(e.theme.primary, ne)
                }), (function(e) {
                    return Object(A.b)(e.theme.light, ne)
                })),
                re = n(279),
                ie = function(e) {
                    return e.translation.isFetching
                },
                oe = n(54),
                ce = n(92),
                se = [{
                    isWidgetMobile: !1,
                    isWidgetOpen: !0,
                    padding: "".concat(ce.a, "px")
                }, {
                    isWidgetMobile: !1,
                    isWidgetOpen: !1,
                    padding: "".concat(ce.a, "px")
                }, {
                    isWidgetMobile: !0,
                    isWidgetOpen: !0,
                    padding: "0px"
                }, {
                    isWidgetMobile: !0,
                    isWidgetOpen: !1,
                    padding: "0px 0px ".concat(ce.a, "px 0px !important")
                }],
                ue = function(e, t) {
                    return se.find((function(n) {
                        return n.isWidgetMobile === e && n.isWidgetOpen === t
                    })).padding
                },
                de = n(154),
                le = n(291),
                ge = n(294),
                fe = n(292),
                pe = function(e) {
                    Object(ge.a)(n, e);
                    var t = Object(fe.a)(n);

                    function n() {
                        var e;
                        Object(de.a)(this, n);
                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            error: null
                        }, e
                    }
                    return Object(le.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            this.setState({
                                error: e
                            }), console.error(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.error ? null : this.props.children
                        }
                    }]), n
                }(v.Component),
                be = j.a.lazy((function() {
                    return Promise.all([n.e(0), n.e(7), n.e(2)]).then(n.bind(null, 617))
                })),
                he = j.a.lazy((function() {
                    return Promise.all([n.e(0), n.e(8), n.e(5)]).then(n.bind(null, 621))
                })),
                Oe = window.parent,
                me = Oe._smartsupp || {};
            me.widgetVersion = "a46a9f1c1671f4cd19c76bbe1a830e6b41e70712", Oe._smartsupp = me, Object(oe.d)(), Object(re.b)();
            var ve = function() {
                var e = Object(i.d)(E.b.isBubbleOrGreeting),
                    t = Object(i.d)(E.b.theme),
                    n = Object(i.d)(E.b.isWidgetVisible),
                    a = Object(i.d)(E.b.isWidgetMobile),
                    o = Object(i.d)(E.b.isWidgetOpen),
                    c = Object(i.d)(ie),
                    s = Object(i.d)(E.b.showTrigger),
                    u = Object(i.d)(G.b.showTriggerTypingAnimation),
                    d = Object(v.useRef)(null),
                    l = Object(v.useRef)(null);
                return Object(v.useEffect)((function() {
                    var t, r;
                    K({
                        isWidgetOpen: o,
                        isWidgetMobile: a,
                        showTrigger: s,
                        isWidgetVisible: n,
                        widerVersion: e === M.a.Greeting,
                        actualWidthOfWidget: null === (t = l.current) || void 0 === t ? void 0 : t.clientWidth,
                        actualHeightOfWidget: null === (r = d.current) || void 0 === r ? void 0 : r.clientHeight
                    })
                }), [o, a, s, e, n, u]), Object(r.d)(y.a, {
                    theme: t
                }, Object(r.d)(pe, null, Object(r.d)(r.a, {
                    styles: ce.e
                }), n && !c && Object(r.d)(T.a, {
                    position: "relative",
                    overflow: "hidden",
                    height: a ? "100%" : N.o,
                    width: a ? "100%" : N.p,
                    maxHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    padding: ue(a, o)
                }, s && Object(r.d)(v.Suspense, {
                    fallback: Object(r.d)("div", null, " \xa0 ")
                }, Object(r.d)(he, {
                    reference: d
                })), o ? Object(r.d)(v.Suspense, {
                    fallback: Object(r.d)("div", null, " \xa0 ")
                }, Object(r.d)(be, null)) : Object(r.d)(ae, {
                    widgetButtonRef: l
                }))))
            };
            n.p = "".concat(Object(g.a)().getBaseUrl(), "/"), Object(g.a)().installApi({
                version: "a46a9f1c1671f4cd19c76bbe1a830e6b41e70712",
                execute: function(e) {
                    f.d.apply(void 0, [e[0], e[1]].concat(Object(a.a)(e.slice(2))))
                },
                exec: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.execute(t)
                }
            }), d.a.dispatch(p.b);
            var je = Object(s.a)({
                productionPrefix: "smart-"
            });
            window.addEventListener("focus", (function() {
                d.a.dispatch(l.GeneralAction.documentFocusToggle())
            })), window.addEventListener("blur", (function() {
                d.a.dispatch(l.GeneralAction.documentFocusToggle())
            }));
            c.a.render(Object(r.d)(i.a, {
                store: d.a
            }, Object(r.d)(u.b, {
                generateClassName: je
            }, Object(r.d)("div", {
                css: m,
                className: "app"
            }, Object(r.d)(ve, null)))), document.getElementById("root"))
        },
        5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n(4),
                r = n(121),
                i = n(30),
                o = n(23),
                c = window.parent,
                s = window,
                u = "data-smartsupp-id",
                d = function(e) {
                    var t = e.installApi,
                        n = e.getBaseUrl,
                        o = Object(r.a)(e, ["installApi", "getBaseUrl"]);
                    return Object(a.a)(Object(a.a)({}, o), {}, {
                        options: Object(a.a)(Object(a.a)({}, o.options), {}, {
                            orientation: o.options.alignX || o.options.orientation || i.b.Right,
                            cookieDomain: o.options.cookieDomain || "",
                            cookiePath: o.options.cookiePath || "/",
                            buttonStyle: o.options.buttonStyle || i.a.Greeting
                        }),
                        installApi: t.bind(e),
                        getBaseUrl: n.bind(e)
                    })
                },
                l = function() {
                    if (s.$smartsuppTest) {
                        var e = s.$smartsuppTest;
                        return d(e)
                    }
                    if (c.$smartsupp) {
                        var t = document.getElementsByTagName("body")[0].getAttribute(u);
                        if (!t) throw new Error('Missing attribute "'.concat(u, '" on body element.'));
                        return d((c.$smartsupp ? c.$smartsupp : {
                            getChat: function() {},
                            on: function() {},
                            fire: function() {}
                        }).getChat(t))
                    }
                    return {
                        options: {},
                        installApi: function() {},
                        getBaseUrl: function() {
                            return ""
                        }
                    }
                };
            Object(o.b)("User options", l().options)
        },
        54: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return a.f
            })), n.d(t, "a", (function() {
                return a.a
            })), n.d(t, "c", (function() {
                return a.b
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "d", (function() {
                return l.a
            }));
            var a = n(45),
                r = n(1),
                i = n(3),
                o = n(16),
                c = function(e, t) {
                    var n = i.a.getState().messages.currentBotName;
                    ! function(e, t) {
                        return 0 === Object(o.h)(e).length && t === r.MessageSubType.Bot
                    }(e, t.subType) ? ! function(e, t) {
                        var n = Object(o.h)(e);
                        return t.subType === r.MessageSubType.Contact && !t.groupId && n[n.length - 1].author === r.MessageSubType.Bot
                    }(e, t) ? function(e, t) {
                        var n = Object(o.h)(e);
                        return t.subType === r.MessageSubType.Contact && t.groupId && n.every((function(e) {
                            return e.author === r.MessageSubType.Bot
                        }))
                    }(e, t) && Object(a.c)(n): Object(a.e)(n): Object(a.d)(n)
                },
                s = function(e, t) {
                    var n;
                    t.subType === r.MessageSubType.Trigger && Object(a.i)(null === t || void 0 === t || null === (n = t.trigger) || void 0 === n ? void 0 : n.name);
                    if (function(e, t) {
                            return 0 === Object(o.h)(e).length && t === r.MessageSubType.Contact
                        }(e, t.subType)) Object(a.l)();
                    else if (function(e, t) {
                            var n = Object(o.h)(e);
                            return t.subType === r.MessageSubType.Contact && n.every((function(e) {
                                return e.author === r.MessageSubType.Trigger
                            }))
                        }(e, t)) {
                        var i, c = Object(o.h)(e)[0];
                        Object(a.j)(null === (i = c.trigger) || void 0 === i ? void 0 : i.name)
                    }
                },
                u = function(e) {
                    e && Object(a.h)(e)
                },
                d = function(e) {
                    e === r.AccountStatus.Offline && Object(a.k)()
                },
                l = n(147)
        },
        55: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            }));
            var a = 500,
                r = 1e3,
                i = 1500,
                o = 1e3,
                c = Math.max(1050, 1180)
        },
        6: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "GeneralAction", (function() {
                return b
            })), n.d(t, "toggleOpenCloseWidget", (function() {
                return h
            })), n.d(t, "closeWidgetByCustomer", (function() {
                return O
            })), n.d(t, "showWidget", (function() {
                return m
            }));
            var a = n(7),
                r = n.n(a),
                i = n(19),
                o = n(27),
                c = n(1),
                s = n(25),
                u = n(10),
                d = n(8),
                l = n(16),
                g = n(24),
                f = n(5),
                p = n(55),
                b = {
                    authFormStateToggle: Object(o.a)("general/AUTH_FORM_STATE_TOGGLE"),
                    closeConversationModalToggle: Object(o.a)("general/CLOSE_CONVERSATION_MODAL_TOGGLE"),
                    createAuthFormInputs: Object(o.a)("general/CREATE_AUTH_FORM_INPUTS", Object(o.b)()),
                    dataPrivacyStateToggle: Object(o.a)("general/DATA_PRIVACY_STATE_TOGGLE"),
                    documentFocusToggle: Object(o.a)("general/DOCUMENT_FOCUS_TOGGLE"),
                    inputFocusToggle: Object(o.a)("general/INPUT_FOCUS_TOGGLE"),
                    setAuthFormInput: Object(o.a)("general/SET_AUTH_FORM_INPUT", Object(o.b)()),
                    setChatStatus: Object(o.a)("general/SET_CHAT_STATE", Object(o.b)()),
                    setRequestState: Object(o.a)("general/SET_REQUEST_STATE", Object(o.b)()),
                    setSize: Object(o.a)("general/SET_SIZE", Object(o.b)()),
                    setThemeColor: Object(o.a)("general/SET_THEME_COLOR", Object(o.b)()),
                    setUser: Object(o.a)("general/SET_USER", Object(o.b)()),
                    showMorePopperClose: Object(o.a)("general/SHOW_MORE_POPPER_CLOSE"),
                    showMorePopperToggle: Object(o.a)("general/SHOW_MORE_POPPER_TOGGLE"),
                    updateUser: Object(o.a)("general/UPDATE_USER", Object(o.b)()),
                    updateUserStatus: Object(o.a)("general/UPDATE_USER_STATUS", Object(o.b)()),
                    widgetHide: Object(o.a)("general/WIDGET_HIDE"),
                    widgetShow: Object(o.a)("general/WIDGET_SHOW"),
                    widgetLoadedToggle: Object(o.a)("general/WIDGET_LOADED_TOGGLE"),
                    widgetOffline: Object(o.a)("general/WIDGET_OFFLINE"),
                    widgetOnline: Object(o.a)("general/WIDGET_ONLINE"),
                    widgetOpeningToggle: Object(o.a)("general/WIDGET_OPENING_TOGGLE"),
                    widgetClose: Object(o.a)("general/WIDGET_OPEN"),
                    widgetOpen: Object(o.a)("general/WIDGET_CLOSE")
                },
                h = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return function() {
                        var n = Object(i.a)(r.a.mark((function n(a, i) {
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        a(b.widgetOpeningToggle()), e ? (a(b.widgetOpen()), g.a.client && t && g.a.client.notify(c.VisitorEventName.WidgetOpen)) : a(b.widgetClose()), a(Object(u.checkMessagesAndMarkAsRead)(!0)), a(b.widgetLoadedToggle()), setTimeout((function() {
                                            return a(b.widgetLoadedToggle())
                                        }), p.e), s.b.isWidgetDesktop(i()) && Object(l.m)(e), setTimeout((function() {
                                            a(b.widgetOpeningToggle())
                                        }), 300);
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                O = function() {
                    return function() {
                        var e = Object(i.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t(b.setChatStatus(d.b.ClosedByVisitor)), g.a.client.chatClose(), (null === (n = Object(f.a)().options) || void 0 === n ? void 0 : n.ratingEnabled) ? t(Object(u.addRating)()) : t(b.widgetClose());
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                m = function() {
                    return function() {
                        var e = Object(i.a)(r.a.mark((function e(t, n) {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t(b.widgetShow()), g.a.client && s.b.isWidgetVisible(n()) && g.a.client.notify(c.VisitorEventName.WidgetShow);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
        },
        61: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "isWidgetOpen", (function() {
                return g
            })), n.d(t, "enableSounds", (function() {
                return f
            })), n.d(t, "theme", (function() {
                return p
            })), n.d(t, "isWidgetOpening", (function() {
                return b
            })), n.d(t, "authFormInputs", (function() {
                return h
            })), n.d(t, "chatStatus", (function() {
                return O
            })), n.d(t, "isAuthFormShown", (function() {
                return m
            })), n.d(t, "isCloseModalOpened", (function() {
                return v
            })), n.d(t, "isWidgetLoaded", (function() {
                return j
            })), n.d(t, "isWidgetVisible", (function() {
                return y
            })), n.d(t, "userData", (function() {
                return T
            })), n.d(t, "isIE", (function() {
                return S
            })), n.d(t, "isWidgetMobile", (function() {
                return A
            })), n.d(t, "isUserAuthenticated", (function() {
                return w
            })), n.d(t, "isWidgetOnline", (function() {
                return M
            })), n.d(t, "isInputFocused", (function() {
                return E
            })), n.d(t, "showMorePopper", (function() {
                return x
            })), n.d(t, "isBubbleOrGreeting", (function() {
                return C
            })), n.d(t, "isWidgetDesktop", (function() {
                return I
            })), n.d(t, "showSendIcon", (function() {
                return k
            })), n.d(t, "showTrigger", (function() {
                return F
            })), n.d(t, "shouldPlaySound", (function() {
                return D
            })), n.d(t, "isBackdropDisplayed", (function() {
                return _
            })), n.d(t, "isPrivacyDisplayed", (function() {
                return R
            })), n.d(t, "openWidgetOnTrigger", (function() {
                return W
            }));
            var a = n(22),
                r = n(85),
                i = n(1),
                o = n(5),
                c = n(16),
                s = n(8),
                u = n(30),
                d = n(23),
                l = function(e) {
                    return e.general.dataPrivacyState
                },
                g = function(e) {
                    return e.general.isWidgetOpen
                },
                f = function(e) {
                    return e.messages.enableSounds
                },
                p = function(e) {
                    return e.general.theme
                },
                b = function(e) {
                    return e.general.isWidgetOpening
                },
                h = function(e) {
                    return e.general.authFormInputs
                },
                O = function(e) {
                    return e.general.chatStatus
                },
                m = function(e) {
                    return e.general.authFormState && !w(e) && h(e).length > 0
                },
                v = function(e) {
                    return e.general.closeModalOpenedState
                },
                j = function(e) {
                    return e.general.isWidgetLoaded
                },
                y = function(e) {
                    var t, n, a, r;
                    return !(null === (t = e.general.userData) || void 0 === t ? void 0 : t.visitor.bannedAt) && ((!A(e) || !(null === (n = Object(o.a)().options) || void 0 === n ? void 0 : n.hideMobileWidget)) && (void 0 !== e.general.isWidgetDisplayedViaAPI ? e.general.isWidgetDisplayedViaAPI : !! function(e) {
                        return O(e) === s.b.Opened || O(e) === s.b.Served || O(e) === s.b.ClosedByVisitor || O(e) === s.b.Resolved
                    }(e) || ! function(e) {
                        var t, n;
                        return (null === (t = Object(o.a)().options) || void 0 === t ? void 0 : t.hideOfflineChat) && e.agent.status === i.AccountStatus.Offline && 0 === Object(c.b)(e.messages.messages).length && 0 === e.messages.inputText.length && O(e) !== s.b.Pending && !(null === (n = Object(o.a)().options) || void 0 === n ? void 0 : n.isPreviewMode)
                    }(e) && (null !== (a = !(null === (r = Object(o.a)().options) || void 0 === r ? void 0 : r.hideWidget)) && void 0 !== a && a)))
                },
                T = function(e) {
                    return e.general.userData
                },
                S = Object(a.a)(T, (function(e) {
                    return !e || !e.browser || e.browser.isIE
                })),
                A = Object(a.a)((function(e) {
                    return e.general.parentSize
                }), T, S, (function(e, t, n) {
                    var a = e.height > e.width;
                    if (t && t.browser) {
                        var r = t.browser,
                            i = r.isTablet,
                            o = r.isMobile;
                        if (n) return !1;
                        if (i) return !a;
                        if (o) return !0
                    }
                    return e.width < 450 || e.height < 550
                })),
                w = Object(a.a)(T, (function(e) {
                    var t, n, a, r, i = Boolean(null === e || void 0 === e || null === (t = e.visitor) || void 0 === t || null === (n = t.variables) || void 0 === n ? void 0 : n.authenticated),
                        o = null === e || void 0 === e || null === (a = e.visitor) || void 0 === a || null === (r = a.variables) || void 0 === r ? void 0 : r.authenticated;
                    return Object(d.b)("authVariable should show auth form", typeof o, o, "item.visitor", e), i
                })),
                M = function(e) {
                    return e.general.isWidgetOnline
                },
                E = function(e) {
                    return e.general.isInputFocused
                },
                x = function(e) {
                    return e.general.showMorePopper
                },
                C = function(e) {
                    var t = Object(o.a)().options.buttonStyle;
                    return A(e) ? u.a.Bubble : t
                },
                I = Object(a.a)(T, (function(e) {
                    var t, n = !!(e && e.browser && e.browser.isDesktop);
                    try {
                        t = window.screen.width > 550 && window.screen.width < 1200
                    } catch (a) {
                        t = void 0
                    }
                    return Object(d.b)("window", window.screen.width), Object(d.b)("is device tablet by width", t), n && !!!t
                })),
                k = Object(a.a)(r.inputText, m, r.getMessages, (function(e, t, n) {
                    return e && e.trim().length > 0 || t || 0 === Object(c.b)(n).length
                })),
                F = Object(a.a)(g, A, r.lastUnreadTriggers, r.showTriggerTypingAnimation, (function(e, t, n, a) {
                    return !e && !t && (n.length > 0 || a)
                })),
                D = Object(a.a)(f, y, (function(e) {
                    return e.general.documentFocus
                }), g, (function(e, t, n, a) {
                    return e && t && !(n && a)
                })),
                _ = Object(a.a)(m, l, v, (function(e, t, n) {
                    return e || t || n
                })),
                R = Object(a.a)(l, v, (function(e, t) {
                    return e && !t
                })),
                W = Object(a.a)((function(e) {
                    return e.general.openOnTrigger
                }), A, (function(e, t) {
                    return e && !t
                }))
        },
        65: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            }));
            var a = n(5),
                r = "en",
                i = ["ar", "az", "bg", "br", "bs", "ca", "cn", "cs", "da", "de", "el", "en", "es", "fa", "fi", "fil", "fr", "he", "hi", "hr", "hu", "is", "it", "ja", "ka", "lt", "lv", "mk", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sl", "sr", "sv", "th", "tr", "tw", "uk"],
                o = {
                    lang: Object(a.a)().options.lang
                }
        },
        69: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = {
                lightGrey: "#f0f2f7",
                lightGrey95: "rgba(240, 242, 247, 0.94)",
                borderGrey: "#E2E2E2",
                blackTextColor: "black",
                green: "#3CF64F",
                red: "#FF0000",
                darkerGrey: "#B4B5C5",
                darkGrey: "#DCDFEB",
                white: "white",
                grey: "#717284",
                icons: "#A6B2BD",
                inputText: "#06132B",
                inputPlaceholderText: "#717284",
                inputPlaceholderText95: "rgba(113,114,132,0.95)",
                warning: "#ffcf00",
                orange: "#F8A000"
            }
        },
        75: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(23),
                r = function(e, t) {
                    Object(a.b)("message", t), console.error(e, t)
                }
        },
        8: function(e, t, n) {
            "use strict";
            var a, r, i, o, c, s;
            n.d(t, "d", (function() {
                    return a
                })), n.d(t, "e", (function() {
                    return r
                })), n.d(t, "c", (function() {
                    return i
                })), n.d(t, "a", (function() {
                    return o
                })), n.d(t, "f", (function() {
                    return c
                })), n.d(t, "b", (function() {
                    return s
                })),
                function(e) {
                    e.Initial = "INITIAL", e.Loading = "LOADING", e.Success = "SUCCESS", e.Failure = "FAILURE"
                }(a || (a = {})),
                function(e) {
                    e.Initial = "INITIAL", e.Failure = "FAILURE", e.NotAllowedAsFirstMessage = "NOT_ALLOWED_AS_FIRST_MESSAGE", e.FileTooBig = "FILE_TOO_BIG", e.TooManyFiles = "TOO_MANY_FILES", e.FilesWerentProcessed = "FILES_WERENT_PROCESSED", e.BadExtension = "BAD_EXTENSION", e.SameMessageTwice = "SAME_MESSAGE_TWICE"
                }(r || (r = {})),
                function(e) {
                    e.Initial = "INITIAL", e.Loading = "LOADING"
                }(i || (i = {})),
                function(e) {
                    e[e.Good = 5] = "Good", e[e.Normal = 3] = "Normal", e[e.Bad = 1] = "Bad"
                }(o || (o = {})),
                function(e) {
                    e.Disconnect = "DISCONNECT", e.UploadFailure = "UPLOAD_FAILURE", e.FileRestricted = "FILE_RESTRICTED", e.MessageRestricted = "MESSAGE_RESTRICTED"
                }(c || (c = {})),
                function(e) {
                    e.ClosedByVisitor = "CLOSED_BY_VISITOR", e.Opened = "OPENED", e.Pending = "PENDING", e.Resolved = "RESOLVED", e.Served = "SERVED"
                }(s || (s = {}))
        },
        85: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getMessages", (function() {
                return l
            })), n.d(t, "isTyping", (function() {
                return g
            })), n.d(t, "showTriggerTypingAnimation", (function() {
                return f
            })), n.d(t, "emojiPickerState", (function() {
                return p
            })), n.d(t, "inputText", (function() {
                return b
            })), n.d(t, "sendingMessageState", (function() {
                return h
            })), n.d(t, "warningBarState", (function() {
                return O
            })), n.d(t, "fileUploadState", (function() {
                return m
            })), n.d(t, "acceptedFileExtensions", (function() {
                return v
            })), n.d(t, "acceptedFileMaxSize", (function() {
                return j
            })), n.d(t, "getAcceptedFileTypes", (function() {
                return S
            })), n.d(t, "isSendingBtnDisabled", (function() {
                return A
            })), n.d(t, "showWarningBar", (function() {
                return w
            })), n.d(t, "showFileUploadState", (function() {
                return M
            })), n.d(t, "messagesWithPosition", (function() {
                return E
            })), n.d(t, "unreadMessagesCount", (function() {
                return x
            })), n.d(t, "lastUnreadTriggers", (function() {
                return C
            })), n.d(t, "lastUnreadTriggerMessage", (function() {
                return I
            })), n.d(t, "fileUploadDisabled", (function() {
                return k
            })), n.d(t, "makeGetMessageById", (function() {
                return F
            })), n.d(t, "getLastMessage", (function() {
                return D
            })), n.d(t, "getLastMessageId", (function() {
                return _
            })), n.d(t, "isLastMessageRating", (function() {
                return R
            }));
            var a = n(4),
                r = n(22),
                i = n(282),
                o = n.n(i),
                c = n(1),
                s = function(e) {
                    return e.author === c.MessageSubType.Agent || e.author === c.MessageSubType.Bot || e.author === c.MessageSubType.Trigger || e.type === c.MessageContent.Type.RateForm
                },
                u = n(16),
                d = n(8),
                l = function(e) {
                    return e.messages.messages
                },
                g = function(e) {
                    return e.agent.isTyping
                },
                f = function(e) {
                    return e.messages.fakeTyping
                },
                p = function(e) {
                    return e.messages.emojiPickerState
                },
                b = function(e) {
                    return e.messages.inputText
                },
                h = function(e) {
                    return e.messages.messageSendingState
                },
                O = function(e) {
                    return e.messages.warningBarState
                },
                m = function(e) {
                    return e.messages.fileUploadState
                },
                v = function(e) {
                    return e.messages.acceptedFileExtensions
                },
                j = function(e) {
                    return e.messages.acceptedFileMaxSize
                },
                y = function(e) {
                    return e.messages.lastReadAt
                },
                T = function(e, t) {
                    return t
                },
                S = Object(r.a)((function(e) {
                    return e.messages.acceptedFileTypes
                }), (function(e) {
                    return e.map((function(e) {
                        return o()(e)
                    }))
                })),
                A = Object(r.a)(h, b, (function(e, t) {
                    return e === d.d.Loading || 0 === t.trim().length
                })),
                w = Object(r.a)(O, (function(e) {
                    return e === d.e.NotAllowedAsFirstMessage || e === d.e.FileTooBig || e === d.e.TooManyFiles || e === d.e.FilesWerentProcessed || e === d.e.BadExtension || e === d.e.Failure || e === d.e.SameMessageTwice
                })),
                M = Object(r.a)(m, (function(e) {
                    return e === d.c.Loading || e === d.c.Initial
                })),
                E = Object(r.a)(l, (function(e) {
                    var t = Object(u.n)(e),
                        n = Object(u.j)(t);
                    return Object(u.e)(n).map((function(t) {
                        return Object(a.a)(Object(a.a)({}, e.find((function(e) {
                            return e.id === t.id
                        }))), {}, {
                            position: t.position
                        })
                    }))
                })),
                x = Object(r.a)(E, y, (function(e) {
                    return e.general.isWidgetOpen
                }), (function(e, t, n) {
                    return n ? 0 : function(e, t) {
                        return t ? e.filter((function(e) {
                            return e.created > new Date(t) && s(e)
                        })) : e.filter((function(e) {
                            return s(e)
                        }))
                    }(e, t).length
                })),
                C = Object(r.a)(E, y, (function(e, t) {
                    if (t) {
                        var n = e.filter((function(e) {
                            return e.author !== c.MessageSubType.Contact && e.created > new Date(t)
                        }));
                        return Object(u.a)(n)
                    }
                    return Object(u.a)(e)
                })),
                I = Object(r.a)(C, (function(e) {
                    return e[0] || null
                })),
                k = Object(r.a)(l, (function(e) {
                    return 0 === Object(u.b)(e).length
                })),
                F = function() {
                    return Object(r.a)([E, T], (function(e, t) {
                        return e.find((function(e) {
                            return e.id === t
                        }))
                    }))
                },
                D = Object(r.a)(E, (function(e) {
                    return (null === e || void 0 === e ? void 0 : e.length) < 1 ? null : e[e.length - 1]
                })),
                _ = Object(r.a)(D, (function(e) {
                    return e ? e.id : null
                })),
                R = Object(r.a)(D, (function(e) {
                    return !!e && e.type === c.MessageContent.Type.RateForm
                }))
        },
        92: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return g
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "e", (function() {
                return h
            }));
            var a = n(9),
                r = n(14),
                i = n(15),
                o = n(69),
                c = n(207);

            function s() {
                var e = Object(a.a)(["\n\t.app {\n\t\tfont-family: ", ";\n\t\theight: 100%;\n\t}\n\t.emoji {\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin-bottom: -3px;\n\t\tmargin-left: 3px;\n\t\tmargin-right: 3px;\n\t}\n\t.material-icons {\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-feature-settings: 'liga';\n\t\t-webkit-font-smoothing: antialiased;\n\t}\n\t:-ms-input-placeholder {\n\t\topacity: 0.5 !important;\n\t\tcolor: ", ";\n\t}\n\tdiv[id^='__lpform_'] {\n\t\tdisplay: none;\n\t}\n\thtml {\n\t\t-webkit-backface-visibility: hidden;\n\t\t-webkit-font-smoothing: antialiased; // is here for Safari flickering\n\t}\n\n\t#chat-application {\n\t\tuser-select: none !important;\n\t}\n"]);
                return s = function() {
                    return e
                }, e
            }

            function u() {
                var e = Object(a.a)(["\n\tpadding: 0px !important;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = Object(a.a)(["\n\tcolor: ", ";\n"]);
                return d = function() {
                    return e
                }, e
            }

            function l() {
                var e = Object(a.a)(["\n\tpadding-top: ", "px;\n"]);
                return l = function() {
                    return e
                }, e
            }
            var g = Object(r.a)(l(), 2 * i.c),
                f = Object(r.a)(d(), o.a.darkerGrey),
                p = Object(r.a)(u()),
                b = 5,
                h = Object(r.a)(s(), c.b, o.a.grey)
        },
        93: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            }));
            var a = n(43),
                r = n(5),
                i = n(13),
                o = "personalDataProcessingConsent",
                c = function(e, t) {
                    var n, c = Object(r.a)().options,
                        s = c.nameControl,
                        u = c.numberControl,
                        d = c.emailControl,
                        l = c.privacyNoticeCheckRequired,
                        g = c.privacyNoticeEnabled,
                        f = c.groupSelectEnabled,
                        p = Boolean(null === t || void 0 === t ? void 0 : t.name),
                        b = Boolean(null === t || void 0 === t ? void 0 : t.email),
                        h = Boolean(null === t || void 0 === t ? void 0 : t.group),
                        O = Boolean(null === t || void 0 === t ? void 0 : t.phone),
                        m = Boolean(null === t || void 0 === t || null === (n = t.variables) || void 0 === n ? void 0 : n.personalDataProcessingConsent),
                        v = [];
                    d && !b && v.unshift({
                        type: a.a.Text,
                        name: "email",
                        fullWidth: !0,
                        label: i.a.translate("authForm.yourEmail"),
                        multiline: !1,
                        placeHolder: i.a.translate("authForm.yourEmail"),
                        validations: ["required", "isEmail"],
                        value: ""
                    }), s && !p && v.unshift({
                        type: a.a.Text,
                        name: "name",
                        fullWidth: !0,
                        label: i.a.translate("authForm.yourName"),
                        multiline: !1,
                        placeHolder: i.a.translate("authForm.yourName"),
                        validations: ["required"],
                        value: ""
                    }), u && !O && v.push({
                        type: a.a.Text,
                        name: "phone",
                        placeHolder: i.a.translate("authForm.yourPhone"),
                        label: i.a.translate("authForm.yourPhone"),
                        validations: ["required", a.b.phone],
                        multiline: !1,
                        fullWidth: !0,
                        value: ""
                    });
                    var j = null === t || void 0 === t ? void 0 : t.group;
                    return f && e && e.length > 0 && v.push({
                            type: a.a.DropDown,
                            name: "group",
                            fullWidth: !0,
                            label: "",
                            multiline: !1,
                            placeHolder: i.a.translate("authForm.group"),
                            validations: ["required"],
                            value: h && j ? j : "",
                            greyBg: !0,
                            choices: e || []
                        }),
                        function(e, t, n, a) {
                            return a && e.length > 0 && !t || a && !t && n
                        }(v, m, l, g) && v.push({
                            type: a.a.Checkbox,
                            name: o,
                            fullWidth: !0,
                            label: "",
                            multiline: !1,
                            placeHolder: "",
                            validations: l ? ["required"] : [],
                            requiredCheck: !!l,
                            value: ""
                        }), v
                }
        },
        95: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "g", (function() {
                return u
            })), n.d(t, "h", (function() {
                return d
            }));
            var a = 1212,
                r = 1102,
                i = 1215,
                o = 1211,
                c = 1213,
                s = 1209,
                u = 1214,
                d = 2147483647
        }
    },
    [
        [479, 4, 6]
    ]
]);
//# sourceMappingURL=main.723a1c09.chunk.js.map