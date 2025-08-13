(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        670: function(e, t, n) {
            e.exports = {}
        },
        726: function(e, t, n) {
            "use strict";
            n(670)
        },
        788: function(e, t, n) {
            "use strict";
            n.r(t);
            n(30), n(57), n(58);
            var a = n(36),
                r = n(0),
                i = n(3),
                o = (n(15), n(25), n(88), n(425), n(120), n(43), n(423), n(40), n(42), n(7), n(33), n(160), n(22), n(38)),
                s = n(637),
                c = (n(48), n(19), n(39), n(49), n(54), n(109), n(20), n(23), n(298), n(666), n(716)),
                l = n(714),
                u = n(649),
                p = n(651),
                m = n(717),
                f = n(297),
                d = n(4),
                v = n(51);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _, b, k, C = {
                    inject: ["loadStart", "loadComplete", "startCompleteAnimation", "stopCompleteAnimation", "initializeLocal"],
                    provide: function() {
                        return {
                            completePanelInitialize: this.completePanelInitialize
                        }
                    },
                    components: {
                        PanelContainerComponent: l.a,
                        ImageMakerCanvasComponent: u.a,
                        ImageMakerInfoPanel: p.a,
                        BookmarkIcon: f.a,
                        ImageMakerColorList: c.a,
                        LinkButtonWithFontAwesome: m.a
                    },
                    props: {
                        saveAnimationDelayMs: {
                            type: Number,
                            default: 500
                        }
                    },
                    data: function() {
                        return {
                            isInitialized: !1,
                            isMenuShow: !1,
                            isInfoShow: !0,
                            isCanvasBtnShow: !0,
                            currentItemId: 0,
                            checkImageSrc: null,
                            isPanelInitialized: !1,
                            isRandomize: !1
                        }
                    },
                    computed: h(h(h({}, Object(o.d)({
                        config: function(e) {
                            return e.config
                        },
                        initialSave: function(e) {
                            return e.initialSave
                        },
                        mode: function(e) {
                            return e.mode
                        },
                        commonImages: function(e) {
                            return e.commonImages
                        },
                        memberImages: function(e) {
                            return e.memberImages
                        },
                        isLoadComplete: function(e) {
                            return e.isLoadCompletePlayConfig
                        },
                        currentParts: function(e) {
                            return e.currentParts
                        },
                        currentPanel: function(e) {
                            return e.currentPanel
                        },
                        itemChange: function(e) {
                            return e.eventItemChange
                        },
                        releaseDay: function(e) {
                            return e.imageMakerInfo.updated_at
                        },
                        isPreview: function(e) {
                            return e.isPreview
                        },
                        info: function(e) {
                            return e.imageMakerInfo
                        },
                        randomizeComplete: function(e) {
                            return e.eventRandomizeComplete
                        }
                    })), Object(o.c)({
                        partsList: "partsList",
                        menuPartsList: "menuPartsList"
                    })), {}, {
                        selectItemClass: function() {
                            return this.currentParts ? d.PANEL.ITEM == this.currentPanel ? "selected" : "" : "none"
                        },
                        selectControllerClass: function() {
                            return !this.currentParts || this.currentParts.canMv < 1 ? "none" : this.currentItemId < 1 ? "disabled" : d.PANEL.CONTROLLER == this.currentPanel ? "selected" : ""
                        },
                        containerClasses: function() {
                            return {
                                is_canvasbtn_hidden: !this.isCanvasBtnShow,
                                is_menu_show: this.isMenuShow,
                                is_info_show: this.isInfoShow
                            }
                        },
                        previewHeight: function() {
                            var e = {};
                            return this.isPreview && (e.height = "100%"), e
                        }
                    }),
                    watch: {
                        currentParts: {
                            immediate: !0,
                            handler: (k = Object(r.a)(regeneratorRuntime.mark((function e(t, n) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t || !n || t.pId == n.pId) {
                                                e.next = 5;
                                                break
                                            }
                                            return this.scrollEffect(t.pId), e.next = 5, this._itemChange();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t) {
                                return k.apply(this, arguments)
                            })
                        },
                        itemChange: (b = Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._itemChange();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return b.apply(this, arguments)
                        }),
                        randomizeComplete: (_ = Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.setPanel(d.PANEL.ITEM), e.next = 3, this._itemChange();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return _.apply(this, arguments)
                        })
                    },
                    beforeCreate: function() {
                        this.isInitialized = !1
                    },
                    mounted: function() {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(e.menuPartsList && e.menuPartsList.length > 0)) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 4, e.setParts(e.menuPartsList[0].pId);
                                    case 4:
                                        return t.next = 6, e.$nextTick();
                                    case 6:
                                        return e.scrollEffect(e.menuPartsList[0].pId), t.next = 9, e._itemChange();
                                    case 9:
                                        return t.next = 11, e.onInitialize();
                                    case 11:
                                        e.loadComplete();
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: h(h(h({}, Object(o.b)(["fireEventRandomize", "fireEventFixedRandomize", "fireEventSaveImage", "fireEventResetData", "share", "setParts", "setPanel", "transferComplete"])), Object(o.b)("ad", ["fireEventRemove"])), {}, {
                        onInitialize: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                var n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e.isInitialized) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return t.next = 4, e.$localData.isVisited(e.releaseDay);
                                        case 4:
                                            n = t.sent, e.isInfoShow = !n, e.isInitialized = !0;
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        onClickMenuBtn: function() {
                            this.isMenuShow = !this.isMenuShow
                        },
                        onClickInfoBtn: function() {
                            this.isInfoShow = !this.isInfoShow
                        },
                        onClickCanvas: function() {
                            this.isCanvasBtnShow = !this.isCanvasBtnShow
                        },
                        _itemChange: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                var n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e.currentParts) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 3, e.$localData.getParts(e.currentParts.pId);
                                        case 3:
                                            (n = t.sent) && (e.currentItemId = n.itmId);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        onResetData: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, e.$localData.remove();
                                        case 3:
                                            return t.next = 5, e.$localData.removeShareData();
                                        case 5:
                                            return t.next = 7, e.$localData.removeImageMakerFromUrl();
                                        case 7:
                                            return t.next = 9, e.initializeLocal();
                                        case 9:
                                            e.fireEventResetData(), e.isMenuShow = !1;
                                        case 11:
                                            return t.prev = 11, t.next = 14, e._itemChange();
                                        case 14:
                                            return t.finish(11);
                                        case 15:
                                            e.scrollToLeft(), e.$refs.colorList.scrollToLeft();
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, , 11, 15]
                                ])
                            })))()
                        },
                        scrollEffect: function(e) {
                            var t = this.$refs.partsMenu,
                                n = null == t ? void 0 : t.querySelector("[data-key='" + e + "']");
                            null != t && null != n && (Array.from(t.querySelectorAll("li")).forEach((function(e) {
                                return e.classList.remove("selected")
                            })), n.classList.add("selected"), this.$scrollIntoView(n, {
                                scrollMode: "if-needed",
                                behavior: "smooth",
                                boundary: t.parentElement
                            }))
                        },
                        scrollToLeft: function() {
                            var e, t = null === (e = this.$refs.partsMenu) || void 0 === e ? void 0 : e.querySelector(".simplebar-content-wrapper");
                            t && t.scrollTo({
                                left: 0,
                                behavior: "smooth"
                            })
                        },
                        partsStyle: function(e) {
                            return {
                                backgroundImage: v.a.cssImageUrl(e.thumbUrl)
                            }
                        },
                        onClickPartsMenu: function(e) {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t.$refs.panelContainer.isMoving()) {
                                                n.next = 4;
                                                break
                                            }
                                            return n.next = 3, t.setParts(e.pId);
                                        case 3:
                                            t.setPanel(d.PANEL.ITEM);
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        onClickSelectItem: function() {
                            0 == this.selectItemClass.length && this.setPanel(d.PANEL.ITEM)
                        },
                        onClickSelectController: function() {
                            0 == this.selectControllerClass.length && this.setPanel(d.PANEL.CONTROLLER)
                        },
                        onClickRandomize: function() {
                            0 == this.$refs.canvas.isLoadingImage && (this.isRandomize = !0, this.fireEventRandomize())
                        },
                        onClickFixedRandomize: function() {
                            0 == this.$refs.canvas.isLoadingImage && (this.isRandomize = !0, this.fireEventFixedRandomize())
                        },
                        onCanvasLoadProgress: function(e) {
                            this.isRandomize && (this.$refs.progress.style.background = "#f00", this.$refs.progress.style.width = "".concat((100 * e).toFixed(), "%"))
                        },
                        onCanvasLoadComplete: function() {
                            this.isRandomize && (this.$refs.progress.style.background = "", this.$refs.progress.style.width = ""), this.isRandomize = !1
                        },
                        onClickSave: function(e) {
                            var t = this,
                                n = this.$i18n.t.bind(this.$i18n),
                                a = this.$refs.appButtons.innerHTML;
                            e.preventDefault(), this.$swal({
                                icon: "warning",
                                title: this.$i18n.t("imageMaker.savetitle"),
                                html: a,
                                showCancelButton: !0,
                                showConfirmButton: !1,
                                cancelButtonText: n("goBack"),
                                customClass: {
                                    actions: "save_popup_actions",
                                    cancelButton: "save_popup_cancel_button"
                                },
                                didOpen: function() {
                                    t.$swal.getPopup().focus()
                                }
                            })
                        },
                        onClickComplete: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.fireEventRemove(), e.startCompleteAnimation(), e.fireEventSaveImage(), t.next = 5, e._createShareData(150);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        onClickCheck: function() {
                            try {
                                this.checkImageSrc = this.$refs.canvas.getDataURL()
                            } catch (e) {
                                alert(e)
                            }
                        },
                        _createShareData: function(e) {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, v.a.waitAsync(e);
                                        case 2:
                                            return n.prev = 2, n.next = 5, t.share();
                                        case 5:
                                            return n.next = 7, t.transferComplete();
                                        case 7:
                                            n.next = 15;
                                            break;
                                        case 9:
                                            return n.prev = 9, n.t0 = n.catch(2), n.next = 13, t.stopCompleteAnimation((function() {}), 0, 0);
                                        case 13:
                                            t.$resetIndicator(), t.$errorHandler(n.t0);
                                        case 15:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [2, 9]
                                ])
                            })))()
                        },
                        completePanelInitialize: function() {
                            this.isPanelInitialized = !0
                        }
                    })
                },
                w = C,
                y = (n(726), n(16)),
                I = Object(y.a)(w, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "play-Imagemaker",
                        class: e.containerClasses,
                        style: e.previewHeight
                    }, [t("div", {
                        staticClass: "imagemaker_canvas_wrapper"
                    }, [t("image-maker-canvas-component", {
                        ref: "canvas",
                        on: {
                            "canvas:loadprogress": e.onCanvasLoadProgress,
                            "canvas:loadcomplete": e.onCanvasLoadComplete
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "canvas_btn_toggle",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickCanvas.apply(null, arguments)
                            }
                        }
                    }), e._v(" "), t("div", {
                        ref: "progress",
                        staticClass: "canvas_load_progress"
                    }), e._v(" "), t("bookmark-icon", {
                        staticClass: "bookmark",
                        attrs: {
                            "image-maker-id": e.info.id,
                            "page-name": "play"
                        }
                    }), e._v(" "), t("link-button-with-font-awesome", {
                        staticClass: "imagemaker_save_btn icon-button",
                        attrs: {
                            vertical: "",
                            "icon-class": "fa-solid fa-cloud-arrow-up locked",
                            gap: "2px"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickSave.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n      " + e._s(e.$t("imageMaker.save")) + "\n    ")]), e._v(" "), t("link-button-with-font-awesome", {
                        staticClass: "imagemaker_complete_btn icon-button",
                        attrs: {
                            vertical: "",
                            gap: "2px"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickComplete.apply(null, arguments)
                            }
                        }
                    }, [t("span", {
                        staticClass: "with-star",
                        attrs: {
                            slot: "icon"
                        },
                        slot: "icon"
                    }, [t("i", {
                        staticClass: "fa-solid fa-camera"
                    })]), e._v("\n      " + e._s(e.$t("imageMaker.complete")) + "\n    ")]), e._v(" "), e.$isDevelopment ? t("a", {
                        staticClass: "imagemaker_complete_btn",
                        staticStyle: {
                            left: "100px"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickCheck.apply(null, arguments)
                            }
                        }
                    }, [t("i", {
                        staticClass: "fa fa-question",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }), e._v("\n       " + e._s(e.$t("imageMaker.confirm")) + "\n    ")]) : e._e(), e._v(" "), t("div", {
                        staticClass: "imagemaker_ctrl_btns"
                    }, [t("span", {
                        staticClass: "btn_show_controller",
                        class: e.selectControllerClass,
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickSelectController.apply(null, arguments)
                            }
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "btn_show_itemlist",
                        class: e.selectItemClass,
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickSelectItem.apply(null, arguments)
                            }
                        }
                    })])], 1), e._v(" "), t("div", {
                        staticClass: "imagemaker_control_wrapper"
                    }, [e.isPanelInitialized ? t("image-maker-color-list", {
                        ref: "colorList"
                    }) : e._e(), e._v(" "), t("div", {
                        staticClass: "imagemaker_menu_btn",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickMenuBtn.apply(null, arguments)
                            }
                        }
                    }, [t("span", {
                        staticClass: "imagemaker_menu_btn_open"
                    }, [t("img", {
                        attrs: {
                            src: n(426),
                            alt: e.$t("imageAlt.random")
                        }
                    })]), e._v(" "), t("span", {
                        staticClass: "imagemaker_menu_btn_close"
                    }, [t("i", {
                        staticClass: "fa-regular fa-circle-xmark fa-lg"
                    }), e._v("\n        " + e._s(e.$t("imageMaker.close")) + "\n      ")])]), e._v(" "), t("div", {
                        staticClass: "imagemaker_parts_menu_wrapper"
                    }, [t("div", {
                        ref: "partsMenu",
                        staticClass: "imagemaker_parts_menu",
                        attrs: {
                            "data-simplebar": ""
                        }
                    }, [t("ul", [e._l(e.menuPartsList, (function(n) {
                        return [t("li", {
                            key: n.pId,
                            attrs: {
                                "data-key": n.pId
                            },
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), t.preventDefault(), e.onClickPartsMenu(n)
                                }
                            }
                        }, [t("div", {
                            class: ["parts_menu_icon", null == n.thumbUrl ? "no_img" : ""],
                            style: e.partsStyle(n)
                        })])]
                    }))], 2)])]), e._v(" "), t("div", {
                        staticClass: "imagemaker_control_panel_wrapper",
                        attrs: {
                            id: "control_panel_wrapper"
                        }
                    }, [t("panel-container-component", {
                        ref: "panelContainer"
                    }), e._v(" "), t("div", {
                        staticClass: "imagemaker_random_menu"
                    }, [t("ul", {
                        staticClass: "imagemaker_random_menu_btns"
                    }, [e.info.can_randomize ? t("li", [t("a", {
                        staticClass: "imagemaker_btn_random",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickRandomize.apply(null, arguments)
                            }
                        }
                    }, [t("i", {
                        staticClass: "fa-solid fa-dice-three"
                    }), e._v("\n               \n              " + e._s(e.$t("imageMaker.randomAll")) + "\n            ")])]) : e._e(), e._v(" "), e.info.can_fixed_randomize ? t("li", [t("a", {
                        staticClass: "imagemaker_btn_random",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onClickFixedRandomize.apply(null, arguments)
                            }
                        }
                    }, [t("i", {
                        staticClass: "fa-solid fa-dice-three"
                    }), e._v("\n               \n              " + e._s(e.$t("imageMaker.randomItems")) + "\n            ")])]) : e._e(), e._v(" "), e.info.can_randomize || e.info.can_fixed_randomize ? e._e() : t("li", [t("p", {
                        staticClass: "imagemaker_disabled_random"
                    }, [e._v(e._s(e.$t("imageMaker.randomSelectionDisabled")))])]), e._v(" "), t("li", [t("a", {
                        staticClass: "imagemaker_btn_allreset",
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), t.preventDefault(), e.onResetData.apply(null, arguments)
                            }
                        }
                    }, [t("i", {
                        staticClass: "fa fa-bomb",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }), e._v("\n               " + e._s(e.$t("imageMaker.resetAll")) + "\n            ")])])])])], 1), e._v(" "), t("div", {
                        staticClass: "imagemaker_control_popup"
                    })], 1), e._v(" "), t("div", {
                        staticClass: "imagemaker_info_bg"
                    }), e._v(" "), t("image-maker-info-panel", {
                        attrs: {
                            "start-button-text": e.$t("imageMaker.play"),
                            "page-name": "play"
                        },
                        on: {
                            start: function(t) {
                                e.isInfoShow = !e.isInfoShow
                            }
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "imagemaker_info_show_btn",
                        on: {
                            click: function(t) {
                                t.stopPropagation(), t.preventDefault(), e.isInfoShow = !e.isInfoShow
                            }
                        }
                    }), e._v(" "), e.isPreview ? e._e() : t("picrew-link", {
                        staticClass: "imagemaker_picrew_logo",
                        attrs: {
                            to: e.localePath("/"),
                            exact: ""
                        }
                    }), e._v(" "), e.checkImageSrc ? t("div", {
                        staticClass: "check-image",
                        on: {
                            click: function(t) {
                                e.checkImageSrc = null
                            }
                        }
                    }, [t("img", {
                        attrs: {
                            src: e.checkImageSrc
                        }
                    })]) : e._e(), e._v(" "), t("div", {
                        ref: "appButtons",
                        staticStyle: {
                            display: "none"
                        }
                    }, [t("p", {
                        domProps: {
                            innerHTML: e._s(e.$t("imageMaker.savetext"))
                        }
                    }), e._v(" "), e.$store.getters.isMobile ? t("ul", {
                        staticClass: "app-icon-buttons"
                    }, [t("li", [t("a", {
                        attrs: {
                            href: e.$t("applelURL"),
                            target: "_blank"
                        }
                    }, [t("localized-image", {
                        staticClass: "img-fluid",
                        attrs: {
                            src: "btn-appstore.png"
                        }
                    })], 1)]), e._v(" "), t("li", [t("a", {
                        attrs: {
                            href: e.$t("googlelURL"),
                            target: "_blank"
                        }
                    }, [t("localized-image", {
                        staticClass: "img-fluid",
                        attrs: {
                            src: "btn-googleplay.png"
                        }
                    })], 1)])]) : e._e()])], 1)
                }), [], !1, null, "5f699055", null),
                P = I.exports;

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = {
                    inject: ["loadComplete", "startCompleteAnimation", "stopCompleteAnimation", "startRandomizeAnimation", "stopRandomizeAnimation"],
                    props: {
                        saveAnimationDelayMs: {
                            type: Number,
                            default: 500
                        },
                        randomizeAnimationDelayMs: {
                            type: Number,
                            default: 500
                        }
                    },
                    data: function() {
                        return {
                            isPopupOpen: !1
                        }
                    },
                    mounted: function() {
                        this.loadComplete()
                    },
                    watch: {
                        isLoadComplete: function(e) {
                            e && this.onInitialize()
                        }
                    },
                    components: {
                        ImageMakerInfoPanel: p.a,
                        ImageMakerCanvasComponent: u.a
                    },
                    computed: x(x({}, Object(o.d)({
                        isLoadComplete: function(e) {
                            return e.isLoadCompletePlayConfig
                        },
                        isPreview: function(e) {
                            return e.isPreview
                        }
                    })), {}, {
                        popupStateClass: function() {
                            return {
                                is_open: this.isPopupOpen,
                                is_close: !this.isPopupOpen
                            }
                        },
                        previewHeight: function() {
                            var e = {};
                            return this.isPreview && (e.height = "100%"), e
                        }
                    }),
                    methods: x(x(x({}, Object(o.b)(["fireEventRandomize", "fireEventSaveImage", "share", "setParts", "setPanel", "transferComplete"])), Object(o.b)("ad", ["fireEventRemove"])), {}, {
                        onInitialize: function() {},
                        onClickRandomize: function() {
                            var e = this,
                                t = new Date;
                            this.startRandomizeAnimation(), this.fireEventRandomize(), this.stopRandomizeAnimation((function() {
                                e.isPopupOpen = !0
                            }), t, this.randomizeAnimationDelayMs)
                        },
                        onCloseResult: function() {
                            this.isPopupOpen = !1
                        },
                        onClickComplete: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.fireEventRemove(), e.startCompleteAnimation(), e.fireEventSaveImage(), t.next = 5, e._createShareData(200);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        _createShareData: function(e) {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, v.a.waitAsync(e);
                                        case 2:
                                            return n.prev = 2, n.next = 5, t.share();
                                        case 5:
                                            return n.next = 7, t.transferComplete();
                                        case 7:
                                            n.next = 15;
                                            break;
                                        case 9:
                                            return n.prev = 9, n.t0 = n.catch(2), n.next = 13, t.stopCompleteAnimation((function() {}), 0, 0);
                                        case 13:
                                            t.$resetIndicator(), t.$errorHandler(n.t0);
                                        case 15:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [2, 9]
                                ])
                            })))()
                        }
                    })
                },
                R = Object(y.a)(j, (function() {
                    var e = this,
                        t = e._self._c;
                    return e.isLoadComplete ? t("div", {
                        staticClass: "play-Imagemaker is_info_show",
                        style: e.previewHeight
                    }, [t("div", {
                        staticClass: "imagemaker_info_bg"
                    }), e._v(" "), t("image-maker-info-panel", {
                        staticStyle: {
                            position: "inherit",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            height: "100%",
                            "border-radius": "0"
                        },
                        attrs: {
                            "start-button-text": e.$t("imageMaker.start"),
                            "page-name": "play"
                        },
                        on: {
                            start: e.onClickRandomize
                        }
                    }), e._v(" "), e.isPreview ? e._e() : t("picrew-link", {
                        staticClass: "imagemaker_picrew_logo",
                        attrs: {
                            to: e.localePath("/")
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "randommaker_result_modal_wrapper",
                        class: e.popupStateClass
                    }, [t("div", {
                        staticClass: "randommaker_result_modal"
                    }, [t("div", {
                        staticClass: "randommaker_result_message"
                    }, [e._v("\n        " + e._s(e.$t("imageMaker.randomResultMessage")) + "\n      ")]), e._v(" "), t("div", {
                        staticClass: "randommaker_canvas_wrapper"
                    }, [t("image-maker-canvas-component")], 1), e._v(" "), t("div", {
                        staticClass: "randommaker_result_btns"
                    }, [t("a", {
                        staticClass: "randommaker_again_btn",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.onCloseResult.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n          " + e._s(e.$t("imageMaker.randomTryAgain")) + "\n        ")]), e._v(" "), e.isPreview ? e._e() : t("a", {
                        staticClass: "randommaker_complete_btn",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.onClickComplete.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n          " + e._s(e.$t("imageMaker.complete")) + "\n        ")])])])])], 1) : e._e()
                }), [], !1, null, null, null),
                S = R.exports,
                L = n(654),
                D = n(296),
                M = n(149),
                z = n(715);

            function $(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return A(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var B = {
                    inject: ["loadComplete"],
                    provide: function() {
                        return {
                            initializeLocal: this.initializeLocal,
                            showScopeOfUsePopup: this.showScopeOfUsePopup
                        }
                    },
                    components: {
                        PlayViewComponent: P,
                        RandomViewComponent: S,
                        Ad: D.a,
                        ScopeOfUsePopup: z.a
                    },
                    props: {
                        random: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: T(T(T(T({}, Object(o.d)(["imageMakerId", "config", "itemRule", "initialSave", "mode", "isPreview"])), Object(o.d)({
                        p2i: function(e) {
                            return e.partsId2Index
                        },
                        isLoadComplete: function(e) {
                            return e.isLoadCompletePlayConfig
                        }
                    })), Object(o.c)({
                        partsList: "partsList",
                        menuPartsList: "menuPartsList"
                    })), {}, {
                        isCanvasRectangle: function() {
                            var e = 100 === this.config.cs;
                            return e
                        }
                    }),
                    created: function() {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 4, e.onInitialize();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: T(T({}, Object(o.b)(["setColor", "loadCompletePlayConfig"])), {}, {
                        onInitialize: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 4, e.initializeLocal();
                                        case 4:
                                            e.loadCompletePlayConfig(), t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t.catch(0), e.$errorHandler(t.t0);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        initializeLocal: function() {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                var n, a, r, i, o, s, c, l, u, p, m;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$localData.getAll();
                                        case 2:
                                            return n = t.sent, (a = null == n) && (n = e.mode === d.MODE.LOAD || e.mode === d.MODE.TEMPLATE ? JSON.parse(e.initialSave) : e.config.zeroConf), r = a ? [] : Object.keys(e.config.zeroConf).filter((function(t) {
                                                var a = n[t];
                                                if (a) {
                                                    var r = e.config.pList.find((function(e) {
                                                            return e.pId == t
                                                        })),
                                                        i = 0 == e.config.cpList[r.cpId].some((function(e) {
                                                            return e.cId == a.cId
                                                        }));
                                                    return i
                                                }
                                                return !0
                                            })), n = M.a.modifySaveData(e.config, n), t.next = 9, e.$localData.save(n);
                                        case 9:
                                            i = new L.a(e.config, e.p2i, e.itemRule), o = $(e.partsList), t.prev = 11, o.s();
                                        case 13:
                                            if ((s = o.n()).done) {
                                                t.next = 23;
                                                break
                                            }
                                            return c = s.value, t.next = 17, e.$localData.getParts(c.pId);
                                        case 17:
                                            if (!(l = t.sent)) {
                                                t.next = 21;
                                                break
                                            }
                                            return t.next = 21, i.executeRule(c, l.itmId);
                                        case 21:
                                            t.next = 13;
                                            break;
                                        case 23:
                                            t.next = 28;
                                            break;
                                        case 25:
                                            t.prev = 25, t.t0 = t.catch(11), o.e(t.t0);
                                        case 28:
                                            return t.prev = 28, o.f(), t.finish(28);
                                        case 31:
                                            return t.next = 35, e.$localData.getAll();
                                        case 35:
                                            n = t.sent, u = $(r), t.prev = 37, m = regeneratorRuntime.mark((function t() {
                                                var a, i, o, s, c, l, u;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (a = p.value, (i = e.config.pList.find((function(e) {
                                                                    return e.pId == a
                                                                }))) && !Number.isNaN(parseInt(i.cpId))) {
                                                                t.next = 5;
                                                                break
                                                            }
                                                            return t.abrupt("return", "continue");
                                                        case 5:
                                                            if (o = i.cpId, s = e.config.cpList[o], c = e.config.pList.filter((function(e) {
                                                                    return !r.some((function(t) {
                                                                        return t == e.pId
                                                                    })) && e.cpId == o
                                                                })), 0 != (l = c.map((function(e) {
                                                                    return n && n[e.pId]
                                                                }))).length) {
                                                                t.next = 14;
                                                                break
                                                            }
                                                            return t.abrupt("return", "continue");
                                                        case 14:
                                                            if (0 == (u = l.reduce((function(e, t) {
                                                                    return 0 == e && s.some((function(e) {
                                                                        return e.cId == (null == t ? void 0 : t.cId)
                                                                    })) && (e = t.cId), e
                                                                }), 0))) {
                                                                t.next = 20;
                                                                break
                                                            }
                                                            return t.next = 20, e.setColor({
                                                                cId: u,
                                                                cpId: i.cpId
                                                            });
                                                        case 20:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })), u.s();
                                        case 40:
                                            if ((p = u.n()).done) {
                                                t.next = 47;
                                                break
                                            }
                                            return t.delegateYield(m(), "t1", 42);
                                        case 42:
                                            if ("continue" !== t.t1) {
                                                t.next = 45;
                                                break
                                            }
                                            return t.abrupt("continue", 45);
                                        case 45:
                                            t.next = 40;
                                            break;
                                        case 47:
                                            t.next = 52;
                                            break;
                                        case 49:
                                            t.prev = 49, t.t2 = t.catch(37), u.e(t.t2);
                                        case 52:
                                            return t.prev = 52, u.f(), t.finish(52);
                                        case 55:
                                        case 56:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [11, 25, 28, 31],
                                    [37, 49, 52, 55]
                                ])
                            })))()
                        },
                        showScopeOfUsePopup: function() {
                            this.$refs.scopeOfUsePopup.show()
                        }
                    })
                },
                N = Object(y.a)(B, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "play-Container"
                    }, [t("div", {
                        staticClass: "play-Container_Left"
                    }, [t("div", {
                        staticClass: "play-LeftAd"
                    }, [t("div", {
                        staticClass: "play-LeftAd_wrapper"
                    }, [t("ad", {
                        attrs: {
                            cd: "play_left_1_pc"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_left_2_pc"
                        }
                    })], 1)])]), e._v(" "), t("div", {
                        staticClass: "play-Container_Imagemaker",
                        class: e.isCanvasRectangle ? "rectangle" : "square"
                    }, [e.random && e.isLoadComplete ? t("random-view-component", {
                        attrs: {
                            "randomize-animation-delay-ms": 1e3,
                            "save-animation-delay-ms": 500
                        }
                    }) : e._e(), e._v(" "), !e.random && e.isLoadComplete ? t("play-view-component", {
                        attrs: {
                            "save-animation-delay-ms": 2e3
                        }
                    }) : e._e(), e._v(" "), e.isPreview ? e._e() : t("div", {
                        staticClass: "play-Imagemaker_Footer"
                    }, [t("ad", {
                        attrs: {
                            cd: "play_footer_pc"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_footer_sp"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_recommend_crawling_pc"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_recommend_crawling_sp"
                        }
                    })], 1)], 1), e._v(" "), t("div", {
                        staticClass: "play-Container_Right"
                    }, [t("div", {
                        staticClass: "play-RightAd"
                    }, [t("div", {
                        staticClass: "play-RightAd_wrapper"
                    }, [t("ad", {
                        attrs: {
                            cd: "play_right_1_pc"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_right_2_pc"
                        }
                    })], 1)])]), e._v(" "), t("scope-of-use-popup", {
                        ref: "scopeOfUsePopup"
                    })], 1)
                }), [], !1, null, null, null).exports;

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var F = {
                    name: "ImageMaker",
                    mixins: [s.a],
                    inject: ["addBodyAd", "loadStart", "loadComplete"],
                    components: {
                        ImageMakerComponent: N,
                        Ad: D.a
                    },
                    computed: H(H({}, Object(o.d)(["imageMakerId", "imageMakerInfo", "isLoadCompletePlayConfig", "isPreview"])), {}, {
                        isRandomMaker: function() {
                            return this.imageMakerInfo && 10 == this.imageMakerInfo.image_maker_type_id
                        }
                    }),
                    head: function() {
                        return this.$generateMetaInfo({
                            page: "play",
                            ogp: !0
                        })
                    },
                    validate: function(e) {
                        var t = e.params;
                        e.req;
                        if (t.id && t.id.match(/^[0-9]+$/)) {
                            var n = parseInt(t.id);
                            return n > 0 && Number.isSafeInteger(n)
                        }
                        return !1
                    },
                    data: function() {
                        return {
                            isLocalDataInitialized: !1
                        }
                    },
                    fetch: function(e) {
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            var n, a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.store, a = e.params, r = e.error, t.prev = 2, t.next = 5, n.dispatch("loadImageMakerInfo", a.id);
                                    case 5:
                                        t.next = 8;
                                        break;
                                    case 8:
                                        n.dispatch("hideHeader"), n.dispatch("hideFooter"), t.next = 15;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t.catch(2), r(t.t0);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [2, 12]
                            ])
                        })))()
                    },
                    created: function() {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.loadAds("play");
                                    case 2:
                                        return t.next = 6, e.$localData.isInit();
                                    case 6:
                                        if (t.sent) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 9, e.$localData.init(e.imageMakerId, !1);
                                    case 9:
                                        e.isLocalDataInitialized = !0;
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    mounted: function() {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.regulateThirdpartyStorages(), t.next = 4, e.waitLoadAds();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        regulateThirdpartyStorages: function() {
                            try {
                                var e = new Date(parseInt(localStorage.getItem("picrew.storage_regulated")) || 0),
                                    t = parseInt("1"),
                                    n = new Date;
                                if (n - e < 864e5 * t) return;
                                var r = parseInt("20") || 0,
                                    i = new Date;
                                i.setDate(i.getDate() - parseInt("7"));
                                var o = Object.keys(localStorage).filter((function(e) {
                                        return e.match(/^gn-crawled-content_/)
                                    })).map((function(e) {
                                        return {
                                            key: e,
                                            time: new Date(JSON.parse(localStorage[e]).publishedTime)
                                        }
                                    })).sort((function(e, t) {
                                        return t.time - e.time
                                    })),
                                    s = o.reduce((function(e, t, n) {
                                        return t.time >= i ? n : e
                                    }), -1),
                                    c = o.splice(0, s + 1);
                                r > 0 && c.length > r && o.push.apply(o, Object(a.a)(c.splice(r))), o.forEach((function(e) {
                                    localStorage.removeItem(e.key)
                                })), localStorage.setItem("picrew.storage_regulated", n.getTime())
                            } catch (e) {}
                        }
                    }
                },
                q = Object(y.a)(F, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "h100"
                    }, [t("ad", {
                        attrs: {
                            cd: "play_overlay_pc"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_overlay_sp"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_interstitial_pc"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_interstitial_sp"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_interstitial_bb_pc"
                        }
                    }), e._v(" "), t("ad", {
                        attrs: {
                            cd: "play_interstitial_bb_sp"
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "play",
                        attrs: {
                            id: "image-maker"
                        }
                    }, [t("client-only", [e.isLocalDataInitialized ? t("image-maker-component", {
                        attrs: {
                            preview: e.isPreview,
                            random: e.isRandomMaker
                        }
                    }) : e._e()], 1)], 1), e._v(" "), t("div", {
                        staticClass: "landscape_info",
                        domProps: {
                            innerHTML: e._s(e.$t("imageMaker.landscapeInfo"))
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = q.exports
        }
    }
]);