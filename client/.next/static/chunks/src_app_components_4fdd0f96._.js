(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/particle-background.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/Particles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$slim$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/slim/browser/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ParticleBackground = ()=>{
    _s();
    const [init, setInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleBackground.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initParticlesEngine"])({
                "ParticleBackground.useEffect": async (engine)=>{
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$slim$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlim"])(engine);
                }
            }["ParticleBackground.useEffect"]).then({
                "ParticleBackground.useEffect": ()=>{
                    setInit(true);
                }
            }["ParticleBackground.useEffect"]);
        }
    }["ParticleBackground.useEffect"], []);
    const particlesLoaded = async (container)=>{
        console.log(container);
    };
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleBackground.useMemo[options]": ()=>({
                autoPlay: true,
                background: {
                    color: {
                        value: "#161616"
                    },
                    image: "",
                    position: "",
                    repeat: "",
                    size: "",
                    opacity: 1
                },
                backgroundMask: {
                    composite: "destination-out",
                    cover: {
                        opacity: 1,
                        color: {
                            value: ""
                        }
                    },
                    enable: false
                },
                clear: true,
                defaultThemes: {},
                delay: 0,
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                detectRetina: true,
                duration: 0,
                fpsLimit: 120,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onClick: {
                            enable: false,
                            mode: []
                        },
                        onDiv: {
                            selectors: [],
                            enable: false,
                            mode: [],
                            type: "circle"
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            parallax: {
                                enable: false,
                                force: 2,
                                smooth: 10
                            }
                        },
                        resize: {
                            delay: 0.5,
                            enable: true
                        }
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            links: {
                                opacity: 0.5,
                                blink: false,
                                consent: false,
                                color: {
                                    value: "#ffffff"
                                }
                            }
                        },
                        attract: {
                            distance: 200,
                            duration: 0.4,
                            easing: "ease-out-quad",
                            factor: 1,
                            maxSpeed: 50,
                            speed: 5
                        },
                        bounce: {
                            distance: 200
                        },
                        bubble: {
                            distance: 200,
                            duration: 0.4,
                            mix: false,
                            divs: {
                                distance: 200,
                                duration: 0.4,
                                mix: false,
                                selectors: []
                            }
                        },
                        connect: {
                            distance: 80,
                            links: {
                                opacity: 0.5
                            },
                            radius: 60
                        },
                        push: {
                            default: true,
                            groups: [],
                            quantity: 4
                        },
                        remove: {
                            quantity: 2
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                            factor: 100,
                            speed: 1,
                            maxSpeed: 50,
                            easing: "ease-out-quad",
                            divs: {
                                distance: 200,
                                duration: 0.4,
                                factor: 100,
                                speed: 1,
                                maxSpeed: 50,
                                easing: "ease-out-quad",
                                selectors: []
                            }
                        },
                        slow: {
                            factor: 3,
                            radius: 200
                        },
                        light: {
                            area: {
                                gradient: {
                                    start: {
                                        value: "#ffffff"
                                    },
                                    stop: {
                                        value: "#000000"
                                    }
                                },
                                radius: 1000
                            },
                            shadow: {
                                color: {
                                    value: "#000000"
                                },
                                length: 2000
                            }
                        }
                    }
                },
                manualParticles: [],
                particles: {
                    bounce: {
                        horizontal: {
                            value: 1
                        },
                        vertical: {
                            value: 1
                        }
                    },
                    collisions: {
                        absorb: {
                            speed: 2
                        },
                        bounce: {
                            horizontal: {
                                value: 1
                            },
                            vertical: {
                                value: 1
                            }
                        },
                        enable: false,
                        maxSpeed: 50,
                        mode: "bounce",
                        overlap: {
                            enable: true,
                            retries: 0
                        }
                    },
                    color: {
                        value: "#fff",
                        animation: {
                            h: {
                                count: 0,
                                enable: true,
                                speed: 50,
                                decay: 0,
                                delay: 0,
                                sync: false,
                                offset: 0
                            },
                            s: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            },
                            l: {
                                count: 0,
                                enable: false,
                                speed: 1,
                                decay: 0,
                                delay: 0,
                                sync: true,
                                offset: 0
                            }
                        }
                    },
                    effect: {
                        close: true,
                        fill: true,
                        options: {},
                        type: []
                    },
                    groups: {},
                    move: {
                        angle: {
                            offset: 0,
                            value: 90
                        },
                        attract: {
                            distance: 200,
                            enable: false,
                            rotate: {
                                x: 3000,
                                y: 3000
                            }
                        },
                        center: {
                            x: 50,
                            y: 50,
                            mode: "percent",
                            radius: 0
                        },
                        decay: 0,
                        distance: {},
                        direction: "none",
                        drift: 0,
                        enable: true,
                        gravity: {
                            acceleration: 9.81,
                            enable: false,
                            inverse: false,
                            maxSpeed: 50
                        },
                        path: {
                            clamp: true,
                            delay: {
                                value: 0
                            },
                            enable: false,
                            options: {}
                        },
                        outModes: {
                            default: "out",
                            bottom: "out",
                            left: "out",
                            right: "out",
                            top: "out"
                        },
                        random: false,
                        size: false,
                        speed: 2,
                        spin: {
                            acceleration: 0,
                            enable: false
                        },
                        straight: false,
                        trail: {
                            enable: false,
                            length: 10,
                            fill: {}
                        },
                        vibrate: false,
                        warp: false
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 1920,
                            height: 1080
                        },
                        limit: {
                            mode: "delete",
                            value: 0
                        },
                        value: 225
                    },
                    opacity: {
                        value: {
                            min: 0.3,
                            max: 0.8
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 0.5,
                            decay: 0,
                            delay: 0,
                            sync: false,
                            mode: "auto",
                            startValue: "random",
                            destroy: "none"
                        }
                    },
                    reduceDuplicates: false,
                    shadow: {
                        blur: 0,
                        color: {
                            value: "#000"
                        },
                        enable: false,
                        offset: {
                            x: 0,
                            y: 0
                        }
                    },
                    shape: {
                        close: true,
                        fill: true,
                        options: {},
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 3
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 3,
                            decay: 0,
                            delay: 0,
                            sync: false,
                            mode: "auto",
                            startValue: "random",
                            destroy: "none"
                        }
                    },
                    stroke: {
                        width: 0
                    },
                    zIndex: {
                        value: 0,
                        opacityRate: 1,
                        sizeRate: 1,
                        velocityRate: 1
                    },
                    destroy: {
                        bounds: {},
                        mode: "none",
                        split: {
                            count: 1,
                            factor: {
                                value: 3
                            },
                            rate: {
                                value: {
                                    min: 4,
                                    max: 9
                                }
                            },
                            sizeOffset: true,
                            particles: {}
                        }
                    },
                    roll: {
                        darken: {
                            enable: false,
                            value: 0
                        },
                        enable: false,
                        enlighten: {
                            enable: false,
                            value: 0
                        },
                        mode: "vertical",
                        speed: 25
                    },
                    tilt: {
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false
                        },
                        direction: "clockwise",
                        enable: false
                    },
                    twinkle: {
                        lines: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1
                        },
                        particles: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1
                        }
                    },
                    wobble: {
                        distance: 5,
                        enable: false,
                        speed: {
                            angle: 50,
                            move: 10
                        }
                    },
                    life: {
                        count: 0,
                        delay: {
                            value: 0,
                            sync: false
                        },
                        duration: {
                            value: 0,
                            sync: false
                        }
                    },
                    rotate: {
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false
                        },
                        direction: "clockwise",
                        path: false
                    },
                    orbit: {
                        animation: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: false
                        },
                        enable: false,
                        opacity: 1,
                        rotation: {
                            value: 45
                        },
                        width: 1
                    },
                    links: {
                        blink: false,
                        color: {
                            value: "#fff"
                        },
                        consent: false,
                        distance: 100,
                        enable: true,
                        frequency: 1,
                        opacity: 1,
                        shadow: {
                            blur: 5,
                            color: {
                                value: "#000"
                            },
                            enable: false
                        },
                        triangles: {
                            enable: false,
                            frequency: 1
                        },
                        width: 1,
                        warp: false
                    },
                    repulse: {
                        value: 0,
                        enabled: false,
                        distance: 1,
                        duration: 1,
                        factor: 1,
                        speed: 1
                    }
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                responsive: [],
                smooth: false,
                style: {},
                themes: [],
                zLayers: 100,
                emitters: [],
                motion: {
                    disable: false,
                    reduce: {
                        factor: 4,
                        value: true
                    }
                }
            })
    }["ParticleBackground.useMemo[options]"], []);
    if (init) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "tsparticles",
            particlesLoaded: particlesLoaded,
            options: options
        }, void 0, false, {
            fileName: "[project]/src/app/components/particle-background.tsx",
            lineNumber: 536,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
_s(ParticleBackground, "eB+NWpxmGZSqHQDaTSx/Qv0E/5M=");
_c = ParticleBackground;
const __TURBOPACK__default__export__ = ParticleBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$particle$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/particle-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$typewriter$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-simple-typewriter/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-24 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$particle$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/components/header.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold tracking-tight sm:text-5xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$typewriter$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                                    words: [
                                        "Summarize anything in seconds."
                                    ],
                                    loop: false,
                                    cursor: true,
                                    cursorStyle: "|",
                                    typeSpeed: 60,
                                    deleteSpeed: 80,
                                    delaySpeed: 8000
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/header.tsx",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/header.tsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$typewriter$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typewriter"], {
                                    words: [
                                        "Start using our services today."
                                    ],
                                    loop: false,
                                    cursor: true,
                                    cursorStyle: "|",
                                    typeSpeed: 60,
                                    deleteSpeed: 80,
                                    delaySpeed: 8000
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/header.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/header.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/header.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mt-4 text-lg leading-6 max-w-xl mx-auto text-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0.5
                        },
                        children: [
                            "This website can transcribe and summarize any media you provide for easy note-taking, whether it's a YouTube video link or a PDF. It quickly extracts the relevant information and provides a concise summary, making it easy to understand",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/components/header.tsx",
                                lineNumber: 46,
                                columnNumber: 256
                            }, this),
                            " the key points without having to go through the entire content."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/header.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-10 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] bg-white mt-7 text-lg",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Get Started for Free!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/header.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/header.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-5",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0.25
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "relative inline-block font-bold cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "underline-animation absolute bottom-0 left-0 w-full h-0.5 bg-white animate-underline-animation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/header.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this),
                                "Check out our preview!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/header.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/header.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/header.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/header.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_4fdd0f96._.js.map