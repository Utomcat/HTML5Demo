/*!
 * jQuery JavaScript 库 v3.6.0
 * https://jquery.com/
 *
 * 包括 Sizzle.js
 * https://sizzlejs.com/
 *
 * 版权所有 OpenJS 基金会和其他贡献者
 * 在 MIT 许可下发布
 * https://jquery.org/license
 *
 * 日期：2021-03-02T17:08Z
 */
（功能（全局，工厂）{

“严格使用”；

	if ( typeof module === "object" && typeof module.exports === "object" ) {

        // 对于 CommonJS 和类似 CommonJS 的环境，其中适当的 `window`
        // 存在，执行工厂并获取 jQuery。
        // 对于没有带有 `document` 的 `window` 的环境
        //（例如Node.js），将工厂暴露为module.exports。
        // 这强调了创建一个真正的“窗口”的必要性。
        // 例如 var jQuery = require("jquery")(window);
        // 有关更多信息，请参阅票证 #14549。
        module.exports = global.document ？
			工厂（全球，真实）：
			函数( w ) {
            如果（！w.document）{
                throw new Error("jQuery 需要一个带有文档的窗口");
            }
            返回工厂( w );
        };
    } 别的 {
        工厂（全球）；
    }

// 如果尚未定义窗口，则传递此信息
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// 当非严格代码（例如 ASP.NET 4.5）访问严格模式时抛出异常
// arguments.callee.caller (trac-13335)。但是从 jQuery 3.0 (2016) 开始，严格模式应该很常见
// 足以让所有此类尝试都在 try 块中受到保护。
“严格使用”；

var arr = [];

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var flat = arr.flat ? 函数（数组）{
        返回 arr.flat.call( 数组);
    }：函数（数组）{
        返回 arr.concat.apply( [], array );
    };


    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call( Object );

    无功支持 = {};

    var isFunction = 函数 isFunction( obj ) {

        // 支持：Chrome <=57，Firefox <=52
        // 在某些浏览器中，typeof 为 HTML <object> 元素返回“函数”
        //（即`typeof document.createElement( "object" ) === "function"`）。
        // 我们不想将*任何* DOM 节点归类为函数。
        // 支持：QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // 加上旧的 WebKit，typeof 为 HTML 集合返回“函数”
        //（例如，`typeof document.getElementsByTagName("div") === "function"`）。(gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" &&
            typeof obj.item !== "函数";
    };


    var isWindow = function isWindow( obj ) {
        返回 obj != null && obj === obj.window;
    };


    var 文档 = window.document;



    varpreservedScriptAttributes = {
        类型：真实，
		源代码：真实，
		随机数：真实，
		noModule: 真
};

    功能DOMEval（代码，节点，文档）{
        文档 = 文档 || 文档;

        变量 i, val,
            script = doc.createElement("脚本");

        script.text = 代码；
		如果（节点）{
            for ( i 在preservedScriptAttributes ) {

                // 支持：Firefox 64+，Edge 18+
                // 一些浏览器不支持脚本的“nonce”属性。
                // 另一方面，仅仅使用 `getAttribute` 是不够的
                // 只要`nonce` 属性被重置为空字符串
                // 变成浏览上下文连接。
                // 见 https://github.com/whatwg/html/issues/2369
                // 见 https://html.spec.whatwg.org/#nonce-attributes
                // 添加 `node.getAttribute` 检查是为了
                // `jQuery.globalEval` 以便它可以伪造一个包含 nonce 的节点
                // 通过一个对象。
                val = 节点 [ i ] || node.getAttribute && node.getAttribute( i );
                如果 ( val ) {
                    script.setAttribute( i, val );
                }
            }
        }
        doc.head.appendChild( script ).parentNode.removeChild( script );
    }


    函数 toType( obj ) {
        如果（对象==空）{
            返回 obj + "";
        }

        // 支持: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "函数" ?
            class2type[toString.call(obj)] || “目的” ：
		对象类型；
    }
    /* 全局符号 */
// 在 .eslintrc.json 中定义这个全局变量会产生使用全局变量的危险
// 在另一个地方无人看守，只为这个模块定义全局似乎更安全



    无功
    版本 = "3.6.0",

        // 定义 jQuery 的本地副本
        jQuery = 函数（选择器，上下文）{

        // jQuery 对象实际上只是“增强”的初始化构造函数
        // 如果 jQuery 被调用，则需要 init（如果不包含则允许抛出错误）
        返回新的 jQuery.fn.init( selector, context );
    };

    jQuery.fn = jQuery.prototype = {

        // 当前使用的 jQuery 版本
        jquery：版本，

	构造函数：jQuery，

    // jQuery 对象的默认长度为 0
    长度：0，

	toArray：函数（）{
        返回 slice.call( this );
    },

    // 获取匹配元素集合中的第 N 个元素 OR
    // 获取整个匹配元素集作为一个干净的数组
    得到：函数（数量）{

        // 返回一个干净数组中的所有元素
        如果（数字==空）{
            返回 slice.call( this );
        }

        // 只返回集合中的一个元素
        返回数量 < 0 ? this[ num + this.length ] : this[ num ];
    },

    // 获取一个元素数组并将其压入堆栈
    //（返回新匹配的元素集）
    pushStack：函数（元素）{

        // 构建一个新的 jQuery 匹配元素集
        var ret = jQuery.merge( this.constructor(), elems );

        // 将旧对象添加到堆栈中（作为参考）
        ret.prevObject = this;

        // 返回新形成的元素集
        返回 ret;
    },

    // 对匹配集合中的每个元素执行回调。
    每个：函数（回调）{
        返回 jQuery.each( this, callback );
    },

    地图：函数（回调）{
        返回 this.pushStack( jQuery.map( this, function( elem, i ) {
            return callback.call( elem, i, elem );
        }));
    },

    切片：函数（）{
        返回 this.pushStack( slice.apply( this, arguments ) );
    },

    第一：函数（）{
        返回 this.eq( 0 );
    },

    最后：函数（）{
        返回 this.eq( -1 );
    },

    甚至：函数（）{
        返回 this.pushStack( jQuery.grep( this, function( _elem, i ) {
            返回 ( i + 1 ) % 2;
        }));
    },

    奇数：函数（）{
        返回 this.pushStack( jQuery.grep( this, function( _elem, i ) {
            返回 i % 2;
        }));
    },

    eq：函数（我）{
        var len = this.length,
            j = +i + ( i < 0 ? len : 0 );
        return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
    },

    结束：函数（）{
        返回 this.prevObject || this.constructor();
    },

    // 仅限内部使用。
    // 表现得像一个数组的方法，而不像一个 jQuery 方法。
    推推，
	排序： arr.sort，
	拼接： arr.splice
};

    jQuery.extend = jQuery.fn.extend = 函数（）{
        var 选项、名称、src、复制、copyIsArray、克隆、
		目标 = 参数[ 0 ] || {}，
		我 = 1,
            长度 = 参数.长度，
		深=假；

        // 处理深拷贝情况
        if ( typeof target === "boolean" ) {
            深 = 目标；

            // 跳过布尔值和目标
            目标 = 参数[ i ] || {};
            我++;
        }

        // 处理 target 是字符串或其他东西的情况（可能在深拷贝中）
        if ( typeof target !== "object" && !isFunction( target ) ) {
            目标 = {};
        }

        // 如果只传递一个参数，则扩展 jQuery 本身
        如果（我 === 长度）{
            目标=这个；
		一世 - ;
        }

        for ( ; i < 长度; i++ ) {

            // 只处理非空/未定义的值
            if ( ( options = arguments[ i ] ) != null ) {

                // 扩展基础对象
                for（选项中的名称）{
                    复制=选项[名称]；

                    // 防止 Object.prototype 污染
                    // 防止永无止境的循环
                    if ( name === "__proto__" || target === copy ) {
                        继续;
                    }

                    // 如果我们正在合并普通对象或数组，则递归
                    if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
                        ( copyIsArray = Array.isArray( copy ) ) ) ) {
                        src = 目标[名称];

                        // 确保源值的正确类型
                        if ( copyIsArray && !Array.isArray( src ) ) {
                            克隆 = [];
                        } else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
                            克隆 = {};
                        } 别的 {
                            克隆 = src;
                        }
                        copyIsArray = false;

                        // 永远不要移动原始对象，克隆它们
                        目标[名称] = jQuery.extend( deep, clone, copy );

                        // 不要引入未定义的值
                    }否则如果（复制！==未定义）{
                        目标[名称] = 复制；
                    }
                }
            }
        }

        // 返回修改后的对象
        返回目标；
    };

    jQuery.extend({

        // 页面上每个 jQuery 副本的唯一性
        expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

        // 假设 jQuery 在没有准备好的模块的情况下准备好了
        isReady: 真,

        错误：函数（味精）{
        抛出新错误（味精）；
    },

    noop：函数（）{}，

	isPlainObject：函数（对象）{
        var proto，Cor；

        // 检测明显的否定
        // 使用 toString 而不是 jQuery.type 来捕获宿主对象
        if ( !obj || toString.call( obj ) !== "[object Object]" ) {
            返回假；
        }

        proto = getProto(obj);

        // 没有原型的对象（例如，`Object.create(null)`）是普通的
        如果（！原型）{
            返回真；
        }

        // 具有原型的对象是简单的如果它们是由全局对象函数构造的
        Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
        return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
    },

    isEmptyObject：函数（对象）{
        变量名；

		for（对象中的名称）{
            返回假；
        }
        返回真；
    },

    // 在提供的上下文中评估脚本；回到全球一
    // 如果没有指定。
    globalEval：函数（代码，选项，文档）{
        DOMEval( code, { nonce: options && options.nonce }, doc );
    },

    每个：函数（对象，回调）{
        var 长度，i = 0；

		如果 ( isArrayLike( obj ) ) {
            长度 = obj.length;
            for ( ; i < 长度; i++ ) {
                if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                    休息;
                }
            }
        } 别的 {
            对于（我在对象中）{
                if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
                    休息;
                }
            }
        }

        返回对象；
    },

    // 结果仅供内部使用
    makeArray: 函数( arr, 结果) {
        var ret = 结果 || [];

        如果 ( arr != null ) {
            if ( isArrayLike( Object( arr ) ) ) {
                jQuery.merge( ret,
                    typeof arr === "字符串" ?
                        [ arr ] : arr
                );
            } 别的 {
                push.call( ret, arr );
            }
        }

        返回 ret;
    },

    inArray: 函数( elem, arr, i ) {
        返回 arr == null ？-1 : indexOf.call( arr, elem, i );
    },

    // 支持：仅 Android <=4.0，仅 PhantomJS 1
    // push.apply(_, arraylike) 抛出古老的 WebKit
    合并：函数（第一，第二）{
        var len = +second.length,
            j = 0,
            i = first.length;

        for ( ; j < len; j++ ) {
            第一个[ i++ ] = 第二个[ j ];
        }

        first.length = i;

        先返回；
    },

    grep：函数（元素，回调，反转）{
        var callbackInverse,
            匹配 = [],
            我 = 0,
            长度 = elems.length,
            callbackExpect = !invert;

        //遍历数组，只保存项目
        // 通过验证器函数
        for ( ; i < 长度; i++ ) {
            callbackInverse = !callback( elems[ i ], i );
            if ( callbackInverse !== callbackExpect ) {
                match.push( elems[ i ] );
            }
        }

        返回匹配项；
    },

    // arg 仅供内部使用
    地图：函数（元素，回调，参数）{
        变量长度，值，
			我 = 0,
                ret = [];

        // 遍历数组，将每个项目转换为它们的新值
        如果 ( isArrayLike( elems ) ) {
            长度 = elems.length;
            for ( ; i < 长度; i++ ) {
                value = callback( elems[ i ], i, arg );

                如果（值！= null）{
                    ret.push(值);
                }
            }

            // 遍历对象上的每个键，
        } 别的 {
            for ( i in elems ) {
                value = callback( elems[ i ], i, arg );

                如果（值！= null）{
                    ret.push(值);
                }
            }
        }

        // 展平任何嵌套数组
        返回平面( ret );
    },

    // 对象的全局 GUID 计数器
    指导：1，

    // jQuery.support 未在 Core 中使用，但其他项目附加了它们
    // 属性，所以它需要存在。
    支持：支持
});

    if ( typeof Symbol === "function" ) {
        jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
    }

// 填充 class2type 映射
    jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
        函数（_i，名称）{
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    });

    函数 isArrayLike( obj ) {

        // 支持：仅限真正的 iOS 8.2（不可在模拟器中重现）
        // `in` 检查用于防止 JIT 错误 (gh-2145)
        // 由于漏报，这里没有使用 hasOwn
        // 关于 IE 中的节点列表长度
        var length = !!obj && "length" in obj && obj.length,
            type = toType( obj );

        if ( isFunction( obj ) || isWindow( obj ) ) {
            返回假；
        }

        返回类型 === "数组" || 长度 === 0 ||
        typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }
    var 嘶嘶声 =
    /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * 版权所有 JS 基金会和其他贡献者
 * 在 MIT 许可下发布
 * https://js.foundation/
 *
 * 日期：2021-02-16
 */
（函数（窗口）{
        变量 i，
	支持，
	表达式，
	获取文本，
	是XML，
	标记化，
	编译，
	选择，
	最外层上下文，
	排序输入，
	有重复，

        // 本地文档变量
        设置文档，
	文档，
	文档元素，
	文档是HTML，
	rbuggyQSA，
	rbuggyMatches，
	火柴，
	包含，

        // 特定于实例的数据
        expando = "sizzle" + 1 * new Date(),
            优选文档 = window.document,
            目录 = 0,
            完成 = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            nonnativeSelectorCache = createCache(),
            sortOrder = 函数( a, b ) {
            如果 ( a === b ) {
                hasDuplicate = true;
            }
            返回0；
        },

        // 实例方法
        hasOwn = ( {} ).hasOwnProperty,
            arr = [],
            pop = arr.pop,
            pushNative = arr.push,
            推 = arr.push,
            切片 = arr.slice,

            // 使用精简的 indexOf，因为它比原生的快
            // https://jsperf.com/thor-indexof-vs-for/5
            indexOf = 函数（列表，元素）{
            变量 i = 0,
                len = 列表长度；
		for ( ; i < len; i++ ) {
            if ( list[ i ] === elem ) {
                返回我；
            }
        }
            返回-1；
        },

        booleans = "选中|选中|异步|自动对焦|自动播放|控制|延迟|禁用|隐藏|" +
            "ismap|loop|multiple|open|readonly|required|scoped",

            // 常用表达

            // http://www.w3.org/TR/css3-selectors/#whitespace
            whitespace = "[\\x20\\t\\r\\n\\f]",

            // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
            标识符 = "(?:\\\\[\\da-fA-F]{1,6}" + 空格 +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

            // 属性选择器：http://www.w3.org/TR/selectors/#attribute-selectors
            属性 = "\\[" + 空格 + "*(" + 标识符 + ")(?:" + 空格 +

                // 运算符（捕获 2）
                "*([*^$|!~]?=)" + 空格 +

                // "属性值必须是 CSS 标识符 [capture 5]
                // 或字符串 [捕获 3 或捕获 4]"
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\"] )*)\"|(" + 标识符 + "))|)" +
        空格 + "*\\]",

            pseudos = ":(" + 标识符 + ")(?:\\((" +

                // 为了减少需要在 preFilter 中标记的选择器的数量，首选参数：
                // 1. 引用（捕获 3；捕获 4 或捕获 5）
                "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\"])*) \")|" +

        // 2. 简单（捕获 6）
        "(((?:\\\\.|[^\\\\()[\\]]|" + 属性 + ")*)|" +

        // 3. 其他任何东西（捕获 2）
        ".*" +
        ")\\)|)",

            // 前导和非转义尾随空格，捕获后者之前的一些非空格字符
            rwhitespace = new RegExp( whitespace + "+", "g" ),
            rtrim = new RegExp( "^" + 空格 + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                空格 + "+$", "g" ),

            rcomma = new RegExp( "^" + 空格 + "*," + 空格 + "*" ),
            rcombinators = new RegExp( "^" + 空格 + "*([>+~]|" + 空格 + ")" + 空格 +
                "*" ),
            rdescend = new RegExp( 空格 + "|>" ),

            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp( "^" + 标识符 + "$" ),

            匹配表达式 = {
                "ID": new RegExp( "^#(" + identifier + ")" ),
                "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
                "TAG": new RegExp( "^(" + 标识符 + "|[*])" ),
                "ATTR": new RegExp("^" + 属性),
		“伪”：新的正则表达式（“^”+伪），
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            空格 + "*(even|odd|(([+-]|)(\\d*)n|)" + 空格 + "*(?:([+-]|)" +
            空格 + "*(\\d+)|))" + 空格 + "*\\)|)", "i" ),
            "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

            // 用于实现 .is() 的库
            // 我们在 `select` 中使用它来进行 POS 匹配
            "needsContext": new RegExp( "^" + 空格 +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + 空格 +
            "*((?:-\\d)?\\d*)" + 空格 + "*\\)|)(?=[^-]|$)", "i" )
    },

        rhtml = /HTML$/i,
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,

            rnative = /^[^{]+\{\s*\[native \w/,

            // 易于解析/可检索的 ID 或 TAG 或 CLASS 选择器
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

            兄弟姐妹 = /[+~]/,

            // CSS 转义
            // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
            runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + 空格 + "?|\\\\([^\\r\\n\\f])" ， “G” ），
	funescape = 函数（转义，非十六进制）{
            var high = "0x" + escape.slice(1) - 0x10000;

            返回非十六进制？

            // 从非十六进制转义序列中去除反斜杠前缀
            非十六进制：

            // 用编码的 Unicode 代码点替换十六进制转义序列
            // 支持：IE <=11+
            // 对于基本多语言平面 (BMP) 之外的值，手动构造一个
            // 代理对
            高 < 0 ?
                String.fromCharCode( 高 + 0x10000 ) :
                String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
        },

        // CSS 字符串/标识符序列化
        // https://drafts.c​​sswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = 函数（ch，asCodePoint）{
            如果（作为代码点）{

                // U+0000 NULL 变成 U+FFFD 替换字符
                如果 ( ch === "\0" ) {
                    返回“\uFFFD”；
                }

                // 控制字符和（取决于位置）数字被转义为代码点
                返回 ch.slice( 0, -1 ) + "\\" +
                ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
            }

            // 其他潜在的特殊 ASCII 字符被反斜杠转义
            返回 "\\" + ch;
        },

        // 用于 iframe
        // 参见 setDocument()
        // 删除函数包装器会导致“权限被拒绝”
        // IE 中的错误
        卸载处理器 = 函数（）{
            设置文档（）；
        },

        inDisabledFieldset = addCombinator(
            功能（元素）{
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        },
        { dir: "parentNode", next: "legend" }
    );

// 优化 push.apply( _, NodeList )
        尝试 {
            push.apply(
                ( arr = slice.call( preferredDoc.childNodes ) ),
                优选Doc.childNodes
            );

            // 支持：安卓<4.0
            // 检测静默失败的 push.apply
            // eslint-disable-next-line no-unused-expressions
            arr[ preferredDoc.childNodes.length ].nodeType;
        }赶上（e）{
            推 = { 申请： arr.length ？

            // 如果可能的话，利用切片
            功能（目标，埃尔斯）{
                pushNative.apply( target, slice.call( els ) );
		：

                // 支持：IE<9
                // 否则直接追加
                功能（目标，埃尔斯）{
                    var j = target.length,
                        我 = 0;

                    // 不能信任 NodeList.length
                    而（（目标[j++]=els[i++]））{}
                    target.length = j - 1;
                }
            };
        }

            函数嘶嘶声（选择器，上下文，结果，种子）{
                var m、i、elem、nid、match、groups、newSelector、
		newContext = context && context.ownerDocument,

            // nodeType 默认为 9，因为上下文默认为文档
            节点类型 = 上下文？上下文节点类型：9；

	结果 = 结果 || [];

                // 从带有无效选择器或上下文的调用中提前返回
                if ( typeof selector !== "string" || !selector ||
                    nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

                    返回结果；
                }

                // 尝试在 HTML 文档中快捷地查找操作（而不是过滤器）
                如果（！种子）{
                    设置文档（上下文）；
		上下文 = 上下文 || 文档;

                    如果（documentIsHTML）{

                        // 如果选择器足够简单，请尝试使用“get*By*”DOM 方法
                        //（除了 DocumentFragment 上下文，其中方法不存在）
                        if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

                            // ID选择器
                            如果（（米=匹配[1]））{

                                // 文档上下文
                                如果（节点类型 === 9）{
                                    if ( ( elem = context.getElementById( m ) ) ) {

                                        // 支持：IE、Opera、Webkit
                                        // TODO: 识别版本
                                        // getElementById 可以通过名称而不是 ID 匹配元素
                                        if ( elem.id === m ) {
                                            结果.push( elem );
                                            返回结果；
                                        }
                                    } 别的 {
                                        返回结果；
                                    }

                                    // 元素上下文
                                } 别的 {

                                    // 支持：IE、Opera、Webkit
                                    // TODO: 识别版本
                                    // getElementById 可以通过名称而不是 ID 匹配元素
                                    if ( newContext && ( elem = newContext.getElementById( m ) ) &&
                                        包含（上下文，元素）&&
                                    elem.id === m ) {

                                        结果.push( elem );
                                        返回结果；
                                    }
                                }

                                // 类型选择器
                            } else if ( 匹配[ 2 ] ) {
                                push.apply( results, context.getElementsByTagName( selector ) );
                                返回结果；

                                // 类选择器
                            } else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
                                context.getElementsByClassName ) {

                                push.apply( results, context.getElementsByClassName( m ) );
                                返回结果；
                            }
                        }

                        // 利用 querySelectorAll
                        如果（支持.qsa &&
                        !nonnativeSelectorCache[ 选择器 + " " ] &&
                        ( !rbuggyQSA || !rbuggyQSA.test( 选择器 ) ) &&

                        // 支持：仅 IE 8
                        // 排除对象元素
                        ( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

                            newSelector = 选择器；
				newContext = 上下文；

                            // qSA 在评估 child 或
                            // 后代组合子，这不是我们想要的。
                            // 在这种情况下，我们通过为每个选择器添加前缀来解决该行为
                            // 带有引用作用域上下文的 ID 选择器的列表。
                            // 当使用前导组合器时，也必须使用该技术
                            // 因为这样的选择器不被 querySelectorAll 识别。
                            // 感谢 Andrew Dupont 提供的这项技术。
                            如果 ( 节点类型 === 1 &&
                                ( rdescend.test( 选择器 ) || rcombinators.test( 选择器 ) ) ) {

                                // 扩展同级选择器的上下文
                                newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
                                    语境;

                                // 我们可以使用 :scope 代替 ID hack 如果浏览器
                                // 支持它 & 如果我们不改变上下文。
                                if ( newContext !== context || !support.scope ) {

                                    // 捕获上下文 ID，必要时先设置它
                                    if ( ( nid = context.getAttribute( "id" ) ) ) {
                                        nid = nid.replace( rcssescape, fcssescape );
                                    } 别的 {
                                        context.setAttribute( "id", ( nid = expando ) );
                                    }
                                }

                                // 为列表中的每个选择器添加前缀
                                组 = 标记化（选择器）；
					i = 组.长度；
					当我 -  ） {
                                    组[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
                                        toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");
                            }

                            尝试 {
                                push.apply( 结果,
                                    newContext.querySelectorAll( newSelector )
                                );
                                返回结果；
                            }赶上（qsaError）{
                                nonnativeSelectorCache( selector, true );
                            } 最后 {
                                if ( nid === expando ) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                }

                // 所有其他人
                return select( selector.replace( rtrim, "$1" ), context, results, seed );
            }

            /**
             * 创建大小有限的键值缓存
             * @returns {function(string, object)} 将对象数据存储到自身后返回
             * 属性名称（空格后缀）字符串和（如果缓存大于 Expr.cacheLength）
             * 删除最旧的条目
             */
            函数创建缓存（）{
                var 键 = [];

                函数缓存（键，值）{

                    // 使用 (key + " ") 避免与原生原型属性发生冲突（参见问题 #157）
                    if (keys.push(key + " ") > Expr.cacheLength ) {

                        // 只保留最近的条目
                        删除缓存[keys.shift()];
                    }
                    返回（缓存[键+“”]=值）；
                }
                返回缓存；
            }

            /**
             * 标记 Sizzle 特殊使用的功能
             * @param {Function} fn 要标记的函数
             */
            函数标记函数( fn ) {
                fn[ 展开 ] = 真；
	返回 fn;
            }

            /**
             * 支持使用元素进行测试
             * @param {Function} fn 传递创建的元素并返回布尔结果
             */
            函数断言( fn ) {
                var el = document.createElement("fieldset");

                尝试 {
                    返回!!fn(el);
                }赶上（e）{
                    返回假；
                } 最后 {

                    // 默认从其父级移除
                    如果（el.parentNode）{
                        el.parentNode.removeChild( el );
                    }

                    // 释放 IE 中的内存
                    el = 空；
                }
            }

            /**
             * 为所有指定的属性添加相同的处理程序
             * @param {String} attrs 管道分隔的属性列表
             * @param {Function} handler 将被应用的方法
             */
            函数 addHandle( attrs, handler ) {
                var arr = attrs.split("|"),
                    我 = arr.length;

                当我 -  ） {
                    Expr.attrHandle[ arr[ i ] ] = 处理程序；
                }
            }

            /**
             * 检查两个兄弟的文档顺序
             * @param {元素} 一个
             * @param {元素} b
             * @returns {Number} 如果 a 在 b 之前返回小于 0，如果 a 在 b 之后返回大于 0
             */
            函数兄弟检查（a，b）{
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                        a.sourceIndex - b.sourceIndex;

                // 如果两个节点上都可用，则使用 IE sourceIndex
                如果（差异）{
                    返回差异；
                }

                // 检查 b 是否跟在 a 后面
                如果（当前）{
                    while ( ( cur = cur.nextSibling ) ) {
                        如果（cur === b）{
                            返回-1；
                        }
                    }
                }

                返回一个？1：-1；
            }

            /**
             * 返回一个用于输入类型的伪函数
             * @param {String} 类型
             */
            函数创建输入伪（类型）{
                返回函数（元素）{
                    var name = elem.nodeName.toLowerCase();
                    返回名称 === "输入" && elem.type === type;
                };
            }

            /**
             * 返回一个用于按钮伪函数的函数
             * @param {String} 类型
             */
            函数创建按钮伪（类型）{
                返回函数（元素）{
                    var name = elem.nodeName.toLowerCase();
                    return ( name === "input" || name === "button" ) && elem.type === type;
                };
            }

            /**
             * 返回一个在伪函数中用于 :enabled/:disabled 的函数
             * @param {Boolean} disabled true for :disabled; 假：启用
             */
            函数 createDisabledPseudo（禁用）{

                // 已知 :​​disabled 误报：fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                返回函数（元素）{

                    // 只有某些元素可以匹配 :enabled 或 :disabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                    如果（元素中的“形式”）{

                        // 检查相关非禁用元素的继承禁用：
                        // * 在禁用的字段集中列出与表单相关的元素
                        // https://html.spec.whatwg.org/multipage/forms.html#category-listed
                        // https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                        // * 禁用选项组中的选项元素
                        // https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                        // 所有这些元素都有一个“form”属性。
                        if ( elem.parentNode && elem.disabled === false ) {

                            // 选项元素遵循父选项组（如果存在）
                            如果（ elem 中的“标签”）{
                                如果（elem.parentNode 中的“标签”）{
                                    返回 elem.parentNode.disabled === 禁用；
                                } 别的 {
                                    返回 elem.disabled === 禁用；
                                }
                            }

                            // 支持：IE 6 - 11
                            // 使用 isDisabled 快捷属性检查禁用的字段集祖先
                            返回 elem.isDisabled === 禁用 ||

                            // 没有isDisabled的地方，手动检查
                            /* jshint -W018 */
                            elem.isDisabled !== !disabled &&
                            inDisabledFieldset( elem ) === 禁用;
                        }

                        返回 elem.disabled === 禁用；

                        // 在信任 disabled 属性之前尝试筛选出无法禁用的元素。
                        // 一些受害者被我们的网络（标签、图例、菜单、曲目）捕获，但它不应该
                        // 甚至存在于它们之上，更不用说具有布尔值了。
                    } else if（elem中的“标签”）{
                        返回 elem.disabled === 禁用；
                    }

                    // 其余元素既不是 :enabled 也不是 :disabled
                    返回假；
                };
            }

            /**
             * 返回一个在伪函数中用于位置的函数
             * @param {函数} fn
             */
            函数 createPositionalPseudo( fn ) {
                返回标记函数（函数（参数）{
                    参数 = + 参数；
		返回标记函数（函数（种子，匹配）{
                        变量 j,
                            matchIndexes = fn( [], seed.length, argument ),
                            i = matchIndexes.length;

                        // 匹配在指定索引处找到的元素
                        当我 -  ） {
                            如果 ( 种子 [ ( j = matchIndexes[ i ] ) ] ) {
                                种子[ j ] = !( 匹配[ j ] = 种子[ j ] );
                            }
                        }
                    });
                });
            }

            /**
             * 检查节点作为 Sizzle 上下文的有效性
             * @param {Element|Object=} 上下文
             * @returns {Element|Object|Boolean} 如果可以接受，则为输入节点，否则为假值
             */
            功能测试上下文（上下文）{
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }

// 为方便起见公开支持变量
            支持 = 嘶嘶声.support = {};

            /**
             * 检测 XML 节点
             * @param {Element|Object} elem 元素或文档
             * @returns {Boolean} 如果 elem 是非 HTML XML 节点，则为真
             */
            isXML = Sizzle.isXML = function( elem ) {
                var namespace = elem && elem.namespaceURI,
                    docElem = elem && ( elem.ownerDocument || elem ).documentElement;

                // 支持：IE <=8
                // 当 documentElement 不存在时假设为 HTML，例如在加载 iframes 时
                // https://bugs.jquery.com/ticket/4833
                return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
            };

            /**
             * 根据当前文档设置一次文档相关变量
             * @param {Element|Object} [doc] 用于设置文档的元素或文档对象
             * @returns {Object} 返回当前文档
             */
            setDocument = Sizzle.setDocument = 函数（节点）{
                var hasCompare，子窗口，
		文档 = 节点？node.ownerDocument || 节点：首选文档；

                // 如果文档无效或已被选中，则提前返回
                // 支持：IE 11+，Edge 17 - 18+
                // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                // 两个文件；浅比较有效。
                // eslint-disable-next-line eqeqeq
                if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
                    返回文件；
                }

                // 更新全局变量
                文档 = 文档；
	docElem = document.documentElement;
                documentIsHTML = !isXML( 文档 );

                // 支持：IE 9 - 11+，Edge 12 - 18+
                // 卸载后访问 iframe 文档会引发“权限被拒绝”错误（jQuery #13936）
                // 支持：IE 11+，Edge 17 - 18+
                // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                // 两个文件；浅比较有效。
                // eslint-disable-next-line eqeqeq
                如果（首选文档！=文档&&
                    ( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

                    // 支持: IE 11, Edge
                    if ( subWindow.addEventListener ) {
                        subWindow.addEventListener("卸载", unloadHandler, false );

                        // 支持：仅 IE 9 - 10
                    } else if ( subWindow.attachEvent ) {
                        subWindow.attachEvent( "onunload", unloadHandler );
                    }
                }

                // 支持: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
                // 仅 Safari 4 - 5，仅 Opera <=11.6 - 12.x
                // IE/Edge 和旧浏览器不支持 :scope 伪类。
                // 支持：仅 Safari 6.0
                // Safari 6.0 支持 :scope 但它是 :root 的别名。
                support.scope = assert( 函数( el ) {
                    docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
                    返回 typeof el.querySelectorAll !== "undefined" &&
                    !el.querySelectorAll( ":scope fieldset div" ).length;
                });

                /* 属性
	-------------------------------------------------- -------------------- */

                // 支持：IE<8
                // 验证 getAttribute 确实返回属性而不是属性
                //（IE8布尔值除外）
                support.attributes = assert( 函数( el ) {
                    el.className = "i";
                    返回 !el.getAttribute( "className" );
                });

                /* getElement(s)By*
	-------------------------------------------------- -------------------- */

                // 检查 getElementsByTagName("*") 是否只返回元素
                support.getElementsByTagName = assert( 函数( el ) {
                    el.appendChild(document.createComment(""));
                    返回 !el.getElementsByTagName( "*" ).length;
                });

                // 支持：IE<9
                support.getElementsByClassName = rnative.test( document.getElementsByClassName );

                // 支持：IE<10
                // 检查 getElementById 是否按名称返回元素
                // 损坏的 getElementById 方法无法获取以编程方式设置的名称，
                // 所以使用回旋处 getElementsByName 测试
                support.getById = assert( 函数( el ) {
                    docElem.appendChild( el ).id = expando;
                    返回 !document.getElementsByName || !document.getElementsByName( expando ).length;
                });

                // ID过滤和查找
                如果（support.getById）{
                    Expr.filter["ID"] = 函数( id ) {
                        var attrId = id.replace( runescape, funescape );
                        返回函数（元素）{
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                    Expr.find[ "ID" ] = function( id, context ) {
                        if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                            var elem = context.getElementById( id );
                            返回元素？[元素]：[];
                        }
                    };
                } 别的 {
                    Expr.filter["ID"] = 函数( id ) {
                        var attrId = id.replace( runescape, funescape );
                        返回函数（元素）{
                            var node = typeof elem.getAttributeNode !== "undefined" &&
                                elem.getAttributeNode("id");
                            返回节点 && node.value === attrId;
                        };
                    };

                    // 支持：仅 IE 6 - 7
                    // getElementById 作为查找快捷方式不可靠
                    Expr.find[ "ID" ] = function( id, context ) {
                        if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
                            无功节点，我，元素，
					elem = context.getElementById( id );

                            如果（元素）{

                                // 验证id属性
                                node = elem.getAttributeNode("id");
                                如果（节点&& node.value === id）{
                                    返回 [ 元素 ];
                                }

                                // 使用 getElementsByName
                                elems = context.getElementsByName( id );
                                我 = 0;
                                而 ( ( elem = elems[ i++ ] ) ) {
                                    node = elem.getAttributeNode("id");
                                    如果（节点&& node.value === id）{
                                        返回 [ 元素 ];
                                    }
                                }
                            }

                            返回 [];
                        }
                    };
                }

                // 标签
                Expr.find[ "TAG" ] = support.getElementsByTagName ?
                    功能（标签，上下文）{
                    if ( typeof context.getElementsByTagName !== "undefined" ) {
                        返回 context.getElementsByTagName( tag );

                        // DocumentFragment 节点没有 gEBTN
                    } else if ( support.qsa ) {
                        返回 context.querySelectorAll( tag );
                    }
		：

		功能（标签，上下文）{
                        变种元素，
				tmp = [],
                    我 = 0,

                    // 巧合的是，一个（损坏的）gEBTN 也出现在 DocumentFragment 节点上
                    结果 = context.getElementsByTagName( tag );

                        // 过滤掉可能的评论
                        如果（标签===“*”）{
                            while ( ( elem = 结果[ i++ ] ) ) {
                                如果（ elem.nodeType === 1 ）{
                                    tmp.push( elem );
                                }
                            }

                            返回 tmp;
                        }
                        返回结果；
                    };

                    // 班级
                    Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
                        if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
                            返回 context.getElementsByClassName( className );
                        }
                    };

                    /* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

                    // QSA 和matchesSelector 支持

                    //matchesSelector(:active) 为 true 时报告 false (IE9/Opera 11.5)
                    rbuggyMatches = [];

                    // qSa(:focus) 在 true 时报告 false (Chrome 21)
                    // 我们允许这样做是因为 IE8/9 中的一个错误会引发错误
                    // 每当在 iframe 上访问 `document.activeElement`
                    // 所以，我们允许 :focus 一直通过 QSA 以避免 IE 错误
                    // 参见 https://bugs.jquery.com/ticket/13378
                    rbuggyQSA = [];

                    如果（（support.qsa = rnative.test（document.querySelectorAll）））{

                        // 构建 QSA 正则表达式
                        // 从 Diego Perini 采用的正则表达式策略
                        断言（函数（el）{

                            无功输入；

                            // Select 故意设置为空字符串
                            // 这是为了测试 IE 对 not显式的处理
                            // 设置一个布尔内容属性，
                            // 因为它的存在应该足够了
                            // https://bugs.jquery.com/ticket/12359
                            docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
                                "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                                "<option selected=''></option></select>";

                            // 支持：IE8、Opera 11-12.16
                            // 当空字符串跟随 ^= 或 $= 或 *= 时，不应选择任何内容
                            // test 属性在 Opera 中必须是未知的，但对于 WinRT 来说是“安全的”
                            // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                            if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
                                rbuggyQSA.push( "[*^$]=" + 空格 + "*(?:''|\"\")" );
                            }

                            // 支持：IE8
                            // 布尔属性和“值”没有正确处理
                            if ( !el.querySelectorAll( "[selected]" ).length ) {
                                rbuggyQSA.push( "\\[" + 空格 + "*(?:value|" + booleans + ")" );
                            }

                            // 支持：Chrome<29、Android<4.4、Safari<7.0+、iOS<7.0+、PhantomJS<1.9.8+
                            if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
                                rbuggyQSA.push("~=");
                            }

                            // 支持：IE 11+，Edge 15 - 18+
                            // 在某些情况下，IE 11/Edge 在 `[name='']` 查询中找不到元素。
                            // 在选择工作之前向文档添加一个临时属性
                            // 围绕这个问题。
                            // 有趣的是，IE 10 及更早版本似乎没有这个问题。
                            input = document.createElement("输入");
                            input.setAttribute( "name", "" );
                            el.appendChild(输入);
                            if ( !el.querySelectorAll( "[name='']" ).length ) {
                                rbuggyQSA.push( "\\[" + 空格 + "*name" + 空格 + "*=" +
                                    空格 + "*(?:''|\"\")" );
                            }

                            // Webkit/Opera - :checked 应返回选定的选项元素
                            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                            // IE8 在这里抛出错误，后面的测试看不到
                            if ( !el.querySelectorAll( ":checked" ).length ) {
                                rbuggyQSA.push(":checked");
                            }

                            // 支持：Safari 8+，iOS 8+
                            // https://bugs.webkit.org/show_bug.cgi?id=136851
                            // 页内`selector#id 兄弟组合选择器` 失败
                            if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
                                rbuggyQSA.push( ".#.+[+~]" );
                            }

                            // 支持：Firefox <=3.6 - 5 only
                            // 旧版 Firefox 不会抛出错误转义的标识符。
                            el.querySelectorAll( "\\\f" );
                            rbuggyQSA.push("[\\r\\n\\f]");
                        });

                        断言（函数（el）{
                            el.innerHTML = "<a href='' disabled='disabled'></a>" +
                                "<select disabled='disabled'><option/></select>";

                            // 支持：Windows 8 原生应用
                            // type 和 name 属性在 .innerHTML 赋值时被限制
                            var input = document.createElement("输入");
                            input.setAttribute( "类型", "隐藏" );
                            el.appendChild( input ).setAttribute( "name", "D" );

                            // 支持：IE8
                            // 强制 name 属性区分大小写
                            if ( el.querySelectorAll( "[name=d]" ).length ) {
                                rbuggyQSA.push( "name" + 空格 + "*[*^$|!~]?=");
                            }

                            // FF 3.5 - :enabled/:disabled 和隐藏元素（隐藏元素仍然启用）
                            // IE8 在这里抛出错误，后面的测试看不到
                            if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
                                rbuggyQSA.push( ":enabled", ":disabled");
                            }

                            // 支持：IE9-11+
                            // IE 的 :disabled 选择器不选择禁用字段集的子项
                            docElem.appendChild( el ).disabled = true;
                            if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
                                rbuggyQSA.push( ":enabled", ":disabled");
                            }

                            // 支持：仅限 Opera 10 - 11
                            // Opera 10-11 不会抛出逗号后无效伪代码
                            el.querySelectorAll( "*,:x" );
                            rbuggyQSA.push(",.*:");
                        });
                    }

                    if ( ( support.matchesSelector = rnative.test( (matches = docElem.matches ||
                        docElem.webkitMatchesSelector ||
                        docElem.mozMatchesSelector ||
                        docElem.oMatchesSelector ||
                        docElem.msMatchesSelector ) ) ) ) {

                        断言（函数（el）{

                            // 检查是否可以执行matchesSelector
                            // 在断开连接的节点上（IE 9）
                            support.disconnectedMatch =matches.call( el, "*" );

                            // 这应该会失败并抛出异常
                            // Gecko 不会出错，而是返回 false
                            match.call( el, "[s!='']:x" );
                            rbuggyMatches.push("!=",pseudos);
                        });
                    }

                    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                    rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|"));

                    /* 包含
	-------------------------------------------------- -------------------- */
                    hasCompare = rnative.test( docElem.compareDocumentPosition );

                    // 元素包含另一个
                    // 有目的地自排
                    // 就像，一个元素不包含它自己
                    包含 = hasCompare || rnative.test( docElem.contains ) ?
                        函数( a, b ) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                        返回一个 === bup || !!( bup && bup.nodeType === 1 && (
                        adown.contains ?
                            adown.contains( bup ) :
                            a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                    ) );
		：
		函数( a, b ) {
                        如果 ( b ) {
                            while ( ( b = b.parentNode ) ) {
                                如果 ( b === a ) {
                                    返回真；
                                }
                            }
                        }
                        返回假；
                    };

                    /* 排序
	-------------------------------------------------- -------------------- */

                    // 文档顺序排序
                    sortOrder = hasCompare ?
                        函数( a, b ) {

                        // 重复删除标志
                        如果 ( a === b ) {
                        hasDuplicate = true;
                        返回0；
                    }

                    // 如果只有一个输入具有 compareDocumentPosition，则对方法存在进行排序
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    如果（比较）{
                        返回比较；
                    }

                    // 如果两个输入属于同一个文档，则计算位置
                    // 支持：IE 11+，Edge 17 - 18+
                    // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                    // 两个文件；浅比较有效。
                    // eslint-disable-next-line eqeqeq
                    比较 = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ？
			a.compareDocumentPosition( b ) :

                    // 否则我们知道它们已断开连接
                    1;

                    // 断开连接的节点
                    如果（比较 & 1 ||
                    ( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

                        // 选择与我们的首选文档相关的第一个元素
                        // 支持：IE 11+，Edge 17 - 18+
                        // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                        // 两个文件；浅比较有效。
                        // eslint-disable-next-line eqeqeq
                        if ( a == document || a.ownerDocument == preferredDoc &&
                            包含（首选文档，一个））{
                            返回-1；
                        }

                        // 支持：IE 11+，Edge 17 - 18+
                        // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                        // 两个文件；浅比较有效。
                        // eslint-disable-next-line eqeqeq
                        if ( b == document || b.ownerDocument == preferredDoc &&
                            包含（首选文档，b））{
                            返回 1；
                        }

                        // 保持原来的顺序
                        返回排序输入？
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) ：
				0;
                    }

                    返回比较 & 4 ? -1：1；
                ：
	函数( a, b ) {

                        // 如果节点相同则提前退出
                        如果 ( a === b ) {
                            hasDuplicate = true;
                            返回0；
                        }

                        var cur,
                            我 = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [ a ],
                            bp = [ b ];

                        // 无父节点要么是文档要么是断开的
                        如果 ( !aup || !bup ) {

                            // 支持：IE 11+，Edge 17 - 18+
                            // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                            // 两个文件；浅比较有效。
                            /* eslint 禁用 eqeqeq */
                            返回一个 == 文档？-1 :
                            b == 文件？1：
                            /* eslint 启用 eqeqeq */
                            啊？-1 :
                            呸？1：
				排序输入？
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) ：
				0;

                            // 如果节点是兄弟节点，我们可以做一个快速检查
                        } else if ( aup === bup ) {
                            返回兄弟检查（a，b）；
                        }

                        // 否则我们需要他们祖先的完整列表进行比较
                        当前 = 一个;
                        while ( ( cur = cur.parentNode ) ) {
                            ap.unshift(cur);
                        }
                        当前 = b;
                        while ( ( cur = cur.parentNode ) ) {
                            bp.unshift(cur);
                        }

                        // 沿着树走下去寻找差异
                        while ( ap[ i ] === bp[ i ] ) {
                            我++;
                        }

                        返回我？

                        // 做兄弟检查节点是否有共同的祖先
                        兄弟检查（ap[i]，bp[i]）：

                        // 否则我们文档中的节点首先排序
                        // 支持：IE 11+，Edge 17 - 18+
                        // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                        // 两个文件；浅比较有效。
                        /* eslint 禁用 eqeqeq */
                        ap[ i ] == preferredDoc ? -1 :
                            bp[ i ] == 首选文档？1：
                        /* eslint 启用 eqeqeq */
                        0;
                    };

                    返回文件；
                };

                    Sizzle.matches = function( expr, elements ) {
                        return Sizzle( expr, null, null, elements );
                    };

                    Sizzle.matchesSelector = function( elem, expr ) {
                        setDocument( elem );

                        if ( support.matchesSelector && documentIsHTML &&
                            !nonnativeSelectorCache[ expr + " " ] &&
                            ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
                            ( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

                            尝试 {
                                var ret =matches.call( elem, expr );

                                // IE 9 的matchesSelector 在断开连接的节点上返回false
                                if ( ret || support.disconnectedMatch ||

                                    // 同样，断开连接的节点也被称为在文档中
                                    // IE 9 中的片段
                                    elem.document && elem.document.nodeType !== 11 ) {
                                    返回 ret;
                                }
                            }赶上（e）{
                                nonnativeSelectorCache( expr, true );
                            }
                        }

                        return Sizzle( expr, document, null, [ elem ] ).length > 0;
                    };

                    Sizzle.contains = function( context, elem ) {

                        // 如果需要，设置文档变量
                        // 支持：IE 11+，Edge 17 - 18+
                        // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                        // 两个文件；浅比较有效。
                        // eslint-disable-next-line eqeqeq
                        if ( ( context.ownerDocument || context ) != document ) {
                            设置文档（上下文）；
                        }
                        返回包含（上下文，元素）；
                    };

                    Sizzle.attr = function( elem, name ) {

                        // 如果需要，设置文档变量
                        // 支持：IE 11+，Edge 17 - 18+
                        // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                        // 两个文件；浅比较有效。
                        // eslint-disable-next-line eqeqeq
                        if ( ( elem.ownerDocument || elem ) != document ) {
                            setDocument( elem );
                        }

                        var fn = Expr.attrHandle[ name.toLowerCase() ],

                            // 不要被 Object.prototype 属性所迷惑 (jQuery #13807)
                            val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
                                fn( elem, name, !documentIsHTML ) :
                                不明确的;

                        返回值 !== 未定义？
		价值：
		support.attributes || !documentIsHTML ?
            elem.getAttribute( 名称 ) :
            ( val = elem.getAttributeNode( name ) ) && val.specified ?
                价值：
				空值;
                    };

                    Sizzle.escape = function( sel ) {
                        返回 ( sel + "" ).replace( rcssescape, fcssescape );
                    };

                    Sizzle.error = function( msg ) {
                        throw new Error("语法错误，无法识别的表达式：" + msg);
                    };

                    /**
                     * 文档排序和删除重复项
                     * @param {ArrayLike} 结果
                     */
                    Sizzle.uniqueSort = 函数（结果）{
                        变种元素，
		重复 = [],
            j = 0,
            我 = 0;

                        // 除非我们*知道*我们可以检测到重复，假设它们存在
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice( 0 );
                        结果.sort( sortOrder );

                        如果（有重复）{
                            while ( ( elem = 结果[ i++ ] ) ) {
                                if ( elem === 结果[ i ] ) {
                                    j = duplicates.push( i );
                                }
                            }
                            而 ( j-- ) {
                                结果.splice(duplicates[j],1);
                            }
                        }

                        // 排序后清除输入以释放对象
                        // 见 https://github.com/jquery/sizzle/pull/225
                        排序输入 = 空；

	返回结果；
                    };

                    /**
                     * 用于检索 DOM 节点数组的文本值的实用函数
                     * @param {Array|Element} 元素
                     */
                    getText = Sizzle.getText = function( elem ) {
                        无功节点，
		ret = "",
            我 = 0,
            nodeType = elem.nodeType;

                        如果（！节点类型）{

                            // 如果没有nodeType，这应该是一个数组
                            while ( ( node = elem[ i++ ] ) ) {

                                // 不遍历注释节点
                                ret += getText( 节点 );
                            }
                        } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

                            // 为元素使用 textContent
                            // 为了新行的一致性，删除了innerText 使用（jQuery #11153）
                            if ( typeof elem.textContent === "string" ) {
                                返回 elem.textContent;
                            } 别的 {

                                // 遍历它的孩子
                                for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                                    ret += getText( elem );
                                }
                            }
                        } else if ( nodeType === 3 || nodeType === 4 ) {
                            返回 elem.nodeValue;
                        }

                        // 不包括注释或处理指令节点

                        返回 ret;
                    };

                    Expr = Sizzle.selectors = {

                        // 可由用户调整
                        缓存长度：50，

	createPseudo: markFunction,

        匹配：matchExpr，

	属性句柄：{}，

	找： {}，

	相对的： {
                        ">": { dir: "parentNode", first: true },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: true },
                        "~": { dir: "previousSibling" }
                    },

                    前置过滤器：{
                    “ATTR”：函数（匹配）{
                            匹配[ 1 ] = 匹配[ 1 ].replace( runescape, funescape );

                            // 将给定的值移动到 match[3]，无论是带引号的还是不带引号的
                            匹配[ 3 ] = ( 匹配[ 3 ] || 匹配[ 4 ] ||
                                匹配[5] || "" ).replace( runescape, funescape );

                            如果（匹配[2] ===“~=”）{
                                匹配[ 3 ] = " " + 匹配[ 3 ] + " ";
                            }

                            返回 match.slice( 0, 4 );
                        },

                    “孩子”：函数（匹配）{

                            /* 匹配来自 matchExpr["CHILD"]
				1 种类型（仅|第n个|...）
				2 什么（孩子|类型）
				3 个参数 (even|odd|\d*|\d*n([+-]\d​​+)?|...)
				4 xn+y 参数的 xn 分量 ([+-]?\d*n|)
				5 xn 分量的符号
				6 x xn 分量
				y 分量的 7 符号
				y 分量的 8 y
			*/
                            匹配[ 1 ] = 匹配[ 1 ].toLowerCase();

                            if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

                                // 第 n-* 需要参数
                                如果（！匹配[3]）{
                                    嘶嘶声.error(匹配[0]);
                                }

                                // Expr.filter.CHILD 的数字 x 和 y 参数
                                // 记住 false/true 分别转换为 0/1
                                匹配[ 4 ] = +( 匹配[ 4 ] ?
                                    匹配[ 5 ] + ( 匹配[ 6 ] || 1 ) ：
					2 * ( match[ 3 ] === "偶数" || match[ 3 ] === "odd" ) );
                                match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

                                // 其他类型禁止参数
                            } else if ( 匹配[ 3 ] ) {
                                嘶嘶声.error(匹配[0]);
                            }

                            返回匹配；
                        },

                    “伪”：函数（匹配）{
                            var 过量，
				未加引号 = !match[ 6 ] && 匹配 [ 2 ];

                            if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
                                返回空；
                            }

                            // 按原样接受带引号的参数
                            如果（匹配[3]）{
                                匹配[ 2 ] = 匹配[ 4 ] || 匹配[5] || "";

                                // 从不带引号的参数中去除多余的字符
                            } else if ( unquoted && rpseudo.test( unquoted ) &&

                                // 从标记化中获取多余（递归）
                                ( 多余 = 标记化 ( 未加引号, 真 ) ) &&

                                // 前进到下一个右括号
                                (excess = unquoted.indexOf(")", unquoted.length - 多余 ) - unquoted.length ) ) {

                                // 过量是一个负索引
                                匹配[ 0 ] = 匹配[ 0 ].slice( 0, 多余);
                                匹配[ 2 ] = unquoted.slice( 0, 多余);
                            }

                            // 仅返回伪过滤器方法所需的捕获（类型和参数）
                            返回 match.slice( 0, 3 );
                        }
                    },

                    筛选： {

                    “标签”：函数（节点名称选择器）{
                            var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
                            返回 nodeNameSelector === "*" ?
                                功能（） {
                                返回真；
                            ：
				功能（元素）{
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                            },

                        “类”：函数（类名）{
                                var pattern = classCache[ className + " " ];

                                返回模式 ||
                                ( pattern = new RegExp( "(^|" + 空格 +
                                    ")" + className + "(" + 空格 + "|$)" ) ) && classCache(
                                    类名，函数（元素）{
                                    返回 pattern.test(
                                        typeof elem.className === "string" && elem.className ||
                                        typeof elem.getAttribute !== "undefined" &&
                                        elem.getAttribute("类") ||
								“”
                                );
                                });
                            },

                        “ATTR”：函数（名称，运算符，检查）{
                                返回函数（元素）{
                                    var result = Sizzle.attr( elem, name );

                                    如果（结果==空）{
                                        返回运算符 === "!=";
                                    }
                                    如果（！运​​算符）{
                                        返回真；
                                    }

                                    结果+=“”；

                                    /* eslint 禁用最大长度 */

                                    返回运算符 === "=" ? 结果 === 检查：
					运算符 === "!=" ? 结果！== 检查：
					运算符 === "^=" ? 检查 && result.indexOf( 检查 ) === 0 ：
					运算符 === "*=" ? 检查 && result.indexOf( 检查 ) > -1 ：
					运算符 === "$=" ? check && result.slice( -check.length ) === 检查：
					运算符 === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " ").indexOf( check ) > -1 :
                        运算符 === "|=" ? 结果 === 检查 || result.slice( 0, check.length + 1 ) === check + "-" :
                            错误的;
                                    /* eslint 启用最大长度 */

                                };
                            },

                        “孩子”：函数（类型，什么，_argument，第一个，最后一个）{
                                var simple = type.slice( 0, 3 ) !== "nth",
                                    forward = type.slice( -4 ) !== "last",
                                    ofType = what === "of-type";

                                返回第一个 === 1 && 最后一个 === 0 ?

                                    // :nth-*(n) 的快捷方式
                                    功能（元素）{
                                    返回 !!elem.parentNode;
				：

				函数（元素，_context，xml）{
                                        var 缓存、uniqueCache、outerCache、节点、节点索引、开始、
						dir = simple !== forward ? "nextSibling" : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType,
                            差异=假；

					如果（父母）{

                                            // :(first|last|only)-(child|of-type)
                                            如果（简单）{
                                                而（目录）{
                                                    节点 = 元素；
								而（（节点=节点[目录]））{
                                                        如果 ( ofType ?
                                                            node.nodeName.toLowerCase() === 名称：
										node.nodeType === 1 ) {

                                                            返回假；
                                                        }
                                                    }

                                                    // :only-* 的反向（如果我们还没有这样做）
                                                    start = dir = type === "only" && !start && "nextSibling";
                                                }
                                                返回真；
                                            }

                                            开始 = [ 前进 ? parent.firstChild : parent.lastChild ];

                                            // 非 xml :nth-child(...) 将缓存数据存储在 `parent` 上
                                            if ( forward && useCache ) {

                                                // 从先前缓存的索引中寻找 `elem`

                                                // ...以对 gzip 友好的方式
                                                节点 = 父节点；
							外层缓存 = 节点 [ expando ] || (节点[展开] = {});

                                                // 支持：仅 IE <9
                                                // 防御克隆属性 (jQuery gh-1709)
                                                uniqueCache = outerCache[ node.uniqueID ] ||
                                                    (外缓存[ node.uniqueID ] = {} );

                                                缓存 = uniqueCache[ 类型 ] || [];
                                                nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                                diff = nodeIndex && 缓存[ 2 ];
                                                node = nodeIndex && parent.childNodes[ nodeIndex ];

                                                while ( ( node = ++nodeIndex && node && node[ dir ] ||

                                                    // 回退到从头开始寻找 `elem`
                                                    ( 差异 = 节点索引 = 0 ) || 开始.pop() ) ) {

                                                    // 找到后，缓存 `parent` 上的索引并中断
                                                    if ( node.nodeType === 1 && ++diff && node === elem ) {
                                                        uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                                                        休息;
                                                    }
                                                }

                                            } 别的 {

                                                // 如果可用，使用先前缓存的元素索引
                                                如果（使用缓存）{

                                                    // ...以对 gzip 友好的方式
                                                    节点 = 元素；
								外层缓存 = 节点 [ expando ] || (节点[展开] = {});

                                                    // 支持：仅 IE <9
                                                    // 防御克隆属性 (jQuery gh-1709)
                                                    uniqueCache = outerCache[ node.uniqueID ] ||
                                                        (外缓存[ node.uniqueID ] = {} );

                                                    缓存 = uniqueCache[ 类型 ] || [];
                                                    nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                                                    差异=节点索引；
                                                }

                                                // xml :nth-child(...)
                                                // 或 :nth-last-child(...) 或 :nth(-last)?-of-type(...)
                                                如果（差异 === 假）{

                                                    // 使用与上面相同的循环从头开始寻找`elem`
                                                    while ( ( node = ++nodeIndex && node && node[ dir ] ||
                                                        ( 差异 = 节点索引 = 0 ) || 开始.pop() ) ) {

                                                        如果 ( ( ofType ?
                                                            node.nodeName.toLowerCase() === 名称：
										node.nodeType === 1 ) &&
                                                        ++差异) {

                                                            // 缓存每个遇到的元素的索引
                                                            如果（使用缓存）{
                                                                外层缓存 = 节点 [ expando ] ||
                                                                    (节点[展开] = {});

                                                                // 支持：仅 IE <9
                                                                // 防御克隆属性 (jQuery gh-1709)
                                                                uniqueCache = outerCache[ node.uniqueID ] ||
                                                                    (外缓存[ node.uniqueID ] = {} );

                                                                uniqueCache[ type ] = [ dirruns, diff ];
                                                            }

                                                            如果（节点 === 元素）{
                                                                休息;
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            // 合并偏移量，然后检查循环大小
                                            差异-=最后；
						首先返回差异 === || ( diff % first === 0 && diff / first >= 0 );
                                        }
                                    };
                                },

                            “伪”：函数（伪，参数）{

                                    // 伪类名称不区分大小写
                                    // http://www.w3.org/TR/selectors/#pseudo-classes
                                    // 区分大小写优先，以防自定义伪代码添加大写字母
                                    // 记住 setFilters 继承自伪类
                                    可变参数，
				fn = Expr.pseudos[ 伪] || Expr.setFilters[pseudo.toLowerCase()] ||
                    Sizzle.error( "不支持的伪：" + 伪);

                                    // 用户可以使用 createPseudo 来表示
                                    // 创建过滤器函数需要参数
                                    // 就像 Sizzle 一样
                                    如果 ( fn[ 展开 ] ) {
                                        返回 fn( 参数 );
                                    }

                                    // 但保持对旧签名的支持
                                    如果 ( fn.length > 1 ) {
                                        args = [ 伪，伪，“”，参数];
                                        返回 Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ？
					标记函数（函数（种子，匹配）{
                                            变量 ID，
							匹配 = fn（种子，参数），
							i = 匹配长度；
						当我 -  ） {
                                                idx = indexOf( 种子，匹配 [ i ] );
                                                种子[ idx ] = !( 匹配[ idx ] = 匹配[ i ] );
                                            }
                                        ) :
                                            功能（元素）{
                                                返回 fn( elem, 0, args );
                                            };
                                        }

                                        返回 fn;
                                    }
                                },

                                伪：{

                                    // 可能复杂的伪代码
                                “不是”：markFunction（函数（选择器）{

                                        // 修剪传递给编译的选择器
                                        // 避免处理前导和尾随
                                        // 空格作为组合符
                                        无功输入 = [],
                                            结果 = [],
                                            matcher = compile( selector.replace( rtrim, "$1" ) );

                                        返回匹配器[ expando ] ?
                                            markFunction（函数（种子，匹配，_context，xml）{
                                            变种元素，
						不匹配 = 匹配器（种子，空，xml，[]），
						i = 种子长度；

                                            // 匹配`matcher` 不匹配的元素
                                            当我 -  ） {
                                                如果 ( ( elem = 不匹配 [ i ] ) ) {
                                                    种子[ i ] = !( 匹配[ i ] = elem );
                                                }
                                            }
                                        ) :
                                            函数（元素，_context，xml）{
                                                输入[ 0 ] = elem;
                                                匹配器（输入，空，xml，结果）；

                                                // 不要保留元素（issue #299）
                                                输入[0]=空；
					返回 !results.pop();
                                            };
                                        }),

                                    “有”：markFunction（函数（选择器）{
                                            返回函数（元素）{
                                                return Sizzle( selector, elem ).length > 0;
                                            };
                                        }),

                                    “包含”：markFunction（函数（文本）{
                                            text = text.replace( runescape, funescape );
                                            返回函数（元素）{
                                                return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
                                            };
                                        }),

                                        // "元素是否由 :lang() 选择器表示
                                        // 完全基于元素的语言值
                                        // 等于标识符 C,
                                        // 或以标识符 C 开头，后跟“-”。
                                        // C 与元素语言值的匹配不区分大小写。
                                        // 标识符 C 不必是有效的语言名称。”
                                        // http://www.w3.org/TR/selectors/#lang-pseudo
                                        "lang": markFunction( 函数( lang ) {

                                            // lang 值必须是一个有效的标识符
                                            if (!ridentifier.test(lang || "") ) {
                                                Sizzle.error( "不支持的语言：" + lang );
                                            }
                                            lang = lang.replace( runescape, funescape ).toLowerCase();
                                            返回函数（元素）{
                                                var elmLang;
                                                做 {
                                                    如果 ( ( elemLang = documentIsHTML ?
                                                        元素.lang :
                                                        elem.getAttribute("xml:lang") || elem.getAttribute( "lang" ) ) ) {

                                                        elemLang = elemLang.toLowerCase();
                                                        返回 elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                                                    }
                                                } while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
                                                返回假；
                                            };
                                        }),

                                        // 各种各样的
                                    “目标”：函数（元素）{
                                            var hash = window.location && window.location.hash;
                                            return hash && hash.slice( 1 ) === elem.id;
                                        },

                                    “根”：函数（元素）{
                                            返回 elem === docElem;
                                        },

                                    “焦点”：函数（元素）{
                                            返回 elem === document.activeElement &&
                                            ( !document.hasFocus || document.hasFocus() ) &&
                                            !!( elem.type || elem.href || ~elem.tabIndex );
                                        },

                                        // 布尔属性
                                    “启用”：createDisabledPseudo（假），
                                    “禁用”：createDisabledPseudo（真），

                                    “检查”：函数（元素）{

                                            // 在 CSS3 中，:checked 应该同时返回选中和选中的元素
                                            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                                            var nodeName = elem.nodeName.toLowerCase();
                                            return ( nodeName === "input" && !!elem.checked ) ||
                                                ( nodeName === "option" && !!elem.selected );
                                        },

                                    “选定”：功能（元素）{

                                            // 访问这个属性使得默认选中
                                            // Safari 中的选项正常工作
                                            如果（ elem.parentNode ）{
                                                // eslint-disable-next-line no-unused-expressions
                                                elem.parentNode.selectedIndex;
                                            }

                                            返回 elem.selected === true;
                                        },

                                        // 内容
                                    “空”：函数（元素）{

                                            // http://www.w3.org/TR/selectors/#empty-pseudo
                                            // :empty 被元素 (1) 或内容节点取反 (text: 3; cdata: 4; entity ref: 5),
                                            // 但不是其他人（评论：8；处理指令：7；等等）
                                            // nodeType < 6 有效，因为属性 (2) 不会作为子项出现
                                            for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                                                if ( elem.nodeType < 6 ) {
                                                    返回假；
                                                }
                                            }
                                            返回真；
                                        },

                                    “父”：函数（元素）{
                                            返回 !Expr.pseudos[ "empty" ]( elem );
                                        },

                                        // 元素/输入类型
                                    “标题”：函数（元素）{
                                            返回 rheader.test( elem.nodeName );
                                        },

                                    “输入”：函数（元素）{
                                            返回 rinputs.test( elem.nodeName );
                                        },

                                    “按钮”：功能（元素）{
                                            var name = elem.nodeName.toLowerCase();
                                            返回名称 === "input" && elem.type === "button" || 名称 === "按钮";
                                        },

                                    “文本”：函数（元素）{
                                            变量属性；
			返回 elem.nodeName.toLowerCase() === "输入" &&
                                            elem.type === "文本" &&

                                            // 支持：IE<8
                                            // 新的 HTML5 属性值（例如，“search”）与 elem.type === "text" 一起出现
                                            ( ( attr = elem.getAttribute( "type" ) ) == null ||
                                                attr.toLowerCase() === "text" );
                                        },

                                        // 集合中的位置
                                    “第一”：createPositionalPseudo（函数（）{
                                            返回 [0];
                                        }),

                                    “最后”：createPositionalPseudo（函数（_matchIndexes，长度）{
                                            返回 [ 长度 - 1 ];
                                        }),

                                    “eq”：createPositionalPseudo（函数（_matchIndexes，长度，参数）{
                                            返回 [ 参数 < 0 ? 参数+长度：参数];
                                        }),

                                    “偶数”：createPositionalPseudo（函数（匹配索引，长度）{
                                            变量 i = 0;
                                            for ( ; i < 长度; i += 2 ) {
                                                matchIndexes.push( i );
                                            }
                                            返回匹配索引；
                                        }),

                                    “奇数”：createPositionalPseudo（函数（匹配索引，长度）{
                                            变量 i = 1;
                                            for ( ; i < 长度; i += 2 ) {
                                                matchIndexes.push( i );
                                            }
                                            返回匹配索引；
                                        }),

                                    “lt”：createPositionalPseudo（函数（匹配索引，长度，参数）{
                                            var i = 参数 < 0 ?
                                                参数+长度：
				参数 > 长度？
					长度 ：
					争论;
                                            对于 ( ; --i >= 0; ) {
                                                matchIndexes.push( i );
                                            }
                                            返回匹配索引；
                                        }),

                                    “gt”：createPositionalPseudo（函数（匹配索引，长度，参数）{
                                            var i = 参数 < 0 ? 参数 + 长度：参数；
			for ( ; ++i < 长度; ) {
                matchIndexes.push( i );
            }
                                            返回匹配索引；
                                        })
                                    }
                                };

                                Expr.pseudos["nth"] = Expr.pseudos["eq"];

// 添加按钮/输入类型伪代码
                                for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
                                    Expr.pseudos[ i ] = createInputPseudo( i );
                                }
                                for ( i in { submit: true, reset: true } ) {
                                    Expr.pseudos[ i ] = createButtonPseudo( i );
                                }

// 用于创建新 setFilters 的简单 API
                                函数 setFilters() {}
                                setFilters.prototype = Expr.filters = Expr.pseudos;
                                Expr.setFilters = new setFilters();

                                tokenize = Sizzle.tokenize = function（选择器，parseOnly）{
                                    var 匹配，匹配，标记，类型，
		到目前为止，组，预过滤器，
		缓存 = tokenCache[ 选择器 + " " ];

                                    如果（缓存）{
                                        返回 parseOnly ？0 : cached.slice( 0 );
                                    }

                                    soFar = 选择器；
	组 = [];
                                    preFilters = Expr.preFilter;

                                    而（到目前为止）{

                                        // 逗号和第一次运行
                                        if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
                                            如果（匹配）{

                                                // 不要将尾随逗号视为有效
                                                soFar = soFar.slice( match[ 0 ].length ) || 迄今为止;
                                            }
                                            groups.push((tokens = []));
                                        }

                                        匹配 = 假；

                                        // 组合器
                                        if ( ( match = rcombinators.exec( soFar ) ) ) {
                                            匹配 = match.shift();
                                            令牌.推送（{
                                                值：匹配，

                                                // 将后代组合器投射到空间
                                                类型：match[0].replace(rtrim,"")
                                            });
                                            soFar = soFar.slice(matched.length);
                                        }

                                        // 过滤器
                                        for ( 输入 Expr.filter ) {
                                            if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
                                                ( match = preFilters[ type ]( match ) ) ) ) {
                                                匹配 = match.shift();
                                                令牌.推送（{
                                                    值：匹配，
					类型：类型，
					匹配：匹配
                                                });
                                                soFar = soFar.slice(matched.length);
                                            }
                                        }

                                        如果（！匹配）{
                                            休息;
                                        }
                                    }

                                    // 返回无效超出的长度
                                    // 如果我们只是解析
                                    // 否则，抛出错误或返回标记
                                    返回 parseOnly ？
		soFar.length :
                                    迄今为止 ？
			Sizzle.error（选择器）：

                                    // 缓存令牌
                                    tokenCache( 选择器，组 ).slice( 0 );
                                };

                                函数 toSelector（令牌）{
                                    变量 i = 0,
                                        len = token.length,
                                        选择器 = "";
                                    for ( ; i < len; i++ ) {
                                        选择器 += 令牌[ i ].value;
                                    }
                                    返回选择器；
                                }

                                函数 addCombinator（匹配器，组合器，基）{
                                    var dir = combinator.dir,
                                        跳过 = combinator.next,
                                        键 = 跳过 || 目录，
		checkNonElements = base && key === "parentNode",
            doneName = 完成++；

	返回 combinator.first ？

                                    // 检查最近的祖先/前导元素
                                    功能（元素，上下文，xml）{
                                        while ( ( elem = elem[ dir ] ) ) {
                                            if ( elem.nodeType === 1 || checkNonElements ) {
                                                返回匹配器（元素，上下文，xml）；
                                            }
                                        }
                                        返回假；
                                    ：

                                        // 检查所有祖先/前导元素
                                        功能（元素，上下文，xml）{
                                            var oldCache、uniqueCache、outerCache、
				newCache = [ dirruns, doneName ];

                                            // 我们不能在 XML 节点上设置任意数据，因此它们不能从组合器缓存中受益
                                            如果（xml）{
                                                while ( ( elem = elem[ dir ] ) ) {
                                                    if ( elem.nodeType === 1 || checkNonElements ) {
                                                        如果（匹配器（元素，上下文，xml））{
                                                            返回真；
                                                        }
                                                    }
                                                }
                                            } 别的 {
                                                while ( ( elem = elem[ dir ] ) ) {
                                                    if ( elem.nodeType === 1 || checkNonElements ) {
                                                        外缓存 = elem[ expando ] || ( elem[ expando ] = {} );

                                                        // 支持：仅 IE <9
                                                        // 防御克隆属性 (jQuery gh-1709)
                                                        uniqueCache = outerCache[ elem.uniqueID ] ||
                                                            (外缓存[ elem.uniqueID ] = {} );

                                                        if (skip && skip === elem.nodeName.toLowerCase() ) {
                                                            elem = elem[ 目录 ] || 元素;
                                                        } else if ( ( oldCache = uniqueCache[ key ] ) &&
                                                            oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

                                                            // 分配给 newCache 使结果反向传播到之前的元素
                                                            返回 ( newCache[ 2 ] = oldCache[ 2 ] );
                                                        } 别的 {

                                                            // 重用 newcache 使结果反向传播到之前的元素
                                                            uniqueCache[key] = newCache;

                                                            // 匹配意味着我们完成了；失败意味着我们必须不断检查
                                                            if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
                                                                返回真；
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            返回假；
                                        };
                                    }

                                    功能元素匹配器（匹配器）{
                                        返回 matchers.length > 1 ?
                                            功能（元素，上下文，xml）{
                                            var i = matchers.length;
                                            当我 -  ） {
                                                if (!matchers[ i ]( elem, context, xml ) ) {
                                                    返回假；
                                                }
                                            }
                                            返回真；
                                        ：
		匹配器[0]；
                                        }

                                        函数multipleContexts（选择器，上下文，结果）{
                                            变量 i = 0,
                                                len = contexts.length;
                                            for ( ; i < len; i++ ) {
                                                嘶嘶声（选择器，上下文[我]，结果）；
                                            }
                                            返回结果；
                                        }

                                        功能凝聚（不匹配，地图，过滤器，上下文，xml）{
                                            变种元素，
		newUnmatched = [],
            我 = 0,
            len = 不匹配的长度，
		映射=映射！=空；

	for ( ; i < len; i++ ) {
        如果 ( ( elem = 不匹配 [ i ] ) ) {
            if ( !filter || filter( elem, context, xml ) ) {
                newUnmatched.push( elem );
                如果（映射）{
                    地图推（我）;
                }
            }
        }
    }

                                            返回新的不匹配；
                                        }

                                        函数 setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
                                            if ( postFilter && !postFilter[ expando ] ) {
                                                postFilter = setMatcher( postFilter );
                                            }
                                            if ( postFinder && !postFinder[ expando ] ) {
                                                postFinder = setMatcher( postFinder, postSelector );
                                            }
                                            返回标记函数（函数（种子，结果，上下文，xml）{
                                                var temp, i, elem,
                                                    预映射 = [],
                                                    postMap = [],
                                                    预先存在 = results.length,

                                                    // 从种子或上下文中获取初始元素
                                                    元素 = 种子 || 多个上下文（
				选择器 || "*",
                    上下文节点类型？[上下文]：上下文，
				[]
                                            ),

                                                // 预过滤器以获取匹配器输入，保留用于种子结果同步的映射
                                                matcherIn = preFilter && ( 种子 || !selector ) ?
                                                    压缩（元素，preMap，preFilter，上下文，xml）：
				元素，

			匹配器输出 = 匹配器？

                                                // 如果我们有 postFinder，或过滤的种子，或非种子 postFilter 或预先存在的结果，
                                                后查找器 || （种子？preFilter：预先存在的 || postFilter）？

                                                // ...中间处理是必要的
                                                [] :

                                                // ...否则直接使用结果
                                                结果 ：
				匹配器；

                                                // 查找主要匹配项
                                                如果（匹配器）{
                                                    匹配器（匹配器输入，匹配器输出，上下文，xml）；
                                                }

                                                // 应用 postFilter
                                                如果（后过滤器）{
                                                    temp = condense(matcherOut, postMap);
                                                    postFilter(temp, [], context, xml );

                                                    // 通过将失败元素移回 matcherIn 来取消匹配失败的元素
                                                    i = 温度。长度；
			当我 -  ） {
                                                        如果 ( ( ( elem = temp[ i ] ) ) {
                                                            matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
                                                        }
                                                    }
                                                }

                                                如果（种子）{
                                                    if ( postFinder || preFilter ) {
                                                        如果（后查找器）{

                                                            // 通过将这个中间体压缩到 postFinder 上下文中来获取最终的 matcherOut
                                                            温度 = [];
                                                            i = matcherOut.length;
                                                            当我 -  ） {
                                                                如果 ( ( ( elem = matcherOut[ i ] ) ) {

                                                                    // 恢复 matcherIn 因为 elem 还不是最终匹配
                                                                    temp.push((matcherIn[i] = elem));
                                                                }
                                                            }
                                                            postFinder( null, ( matcherOut = [] ), temp, xml );
                                                        }

                                                        // 将匹配的元素从种子移动到结果以保持它们同步
                                                        i = matcherOut.length;
                                                        当我 -  ） {
                                                            if ( ( elem = matcherOut[ i ] ) &&
                                                                ( temp = postFinder ? indexOf(seed, elem ) : preMap[ i ] ) > -1 ) {

                                                                种子[温度] = !(结果[温度] = elem);
                                                            }
                                                        }
                                                    }

                                                    // 将元素添加到结果中，如果已定义，则通过 postFinder
                                                } 别的 {
                                                    matcherOut = 压缩（
				matcherOut === 结果？
					matcherOut.splice（预先存在，matcherOut.length）：
					匹配器输出
                                                );
                                                    如果（后查找器）{
                                                        postFinder( null, 结果, matcherOut, xml );
                                                    } 别的 {
                                                        push.apply( 结果, matcherOut );
                                                    }
                                                }
                                            });
                                        }

                                        函数 matcherFromTokens( 令牌) {
                                            var checkContext, 匹配器, j,
                                                len = token.length,
                                                LeadershipRelative = Expr.relative[ tokens[ 0 ].type ],
                                                隐式相对 = 领先相对 || Expr.relative[ " " ],
                                                我 = 领导相对 ? 1 : 0,

                                                // 基础匹配器确保元素可从顶级上下文访问
                                                matchContext = addCombinator( 函数( elem ) {
                                                返回 elem === checkContext;
                                            }, 隐式相对, 真),
                                            matchAnyContext = addCombinator( 函数( elem ) {
                                                返回 indexOf( checkContext, elem ) > -1;
                                            }, 隐式相对, 真),
                                            匹配器 = [ 函数（元素，上下文，xml）{
                                                var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                                                    ( checkContext = context ).nodeType ?
                                                        matchContext( elem, context, xml ) :
                                                        matchAnyContext( elem, context, xml ) );

                                                // 避免挂在元素上（问题 #299）
                                                checkContext = null;
                                                返回 ret;
                                            }];

                                            for ( ; i < len; i++ ) {
                                                if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
                                                    matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
                                                } 别的 {
                                                    matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

                                                    // 看到位置匹配器时返回 special
                                                    如果（匹配器[展开]）{

                                                        // 找到下一个相对运算符（如果有）以进行正确处理
                                                        j = ++i;
                                                        for ( ; j < len; j++ ) {
                                                            if ( Expr.relative[ tokens[ j ].type ] ) {
                                                                休息;
                                                            }
                                                        }
                                                        返回 setMatcher(
                                                            i > 1 && elementMatcher(matchers),
                                                            i > 1 && toSelector(

                                                                // 如果前面的标记是后代组合子，则插入一个隐式的任意元素 `*`
                                                                令牌
                                                                    .slice( 0, i - 1 )
                                                                    .concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
                                                            ).replace( rtrim, "$1" ),
                                                            匹配器，
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
                    j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
                    j < len && toSelector( tokens )
                                                    );
                                                    }
                                                    matchers.push( 匹配器);
                                                }
                                            }

                                            返回 elementMatcher(matchers);
                                        }

                                        函数 matcherFromGroupMatchers( elementMatchers, setMatchers ) {
                                            var bySet = setMatchers.length > 0,
                                                byElement = elementMatchers.length > 0,
                                                superMatcher = 函数（种子、上下文、xml、结果、最外层）{
                                                var elem, j, 匹配器,
                                                    匹配计数 = 0,
                                                    我 = "0",
                                                    不匹配 = 种子 && [],
                                                    setMatched = [],
                                                    contextBackup = 最外层上下文，

                                                // 我们必须始终拥有种子元素或最外层上下文
                                                元素 = 种子 || byElement && Expr.find[ "TAG" ]( "*", 最外层),

                                                    // 如果这是最外层的匹配器，则使用整数目录
                                                    dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
                                                    len = elems.length;

                                                如果（最外层）{

                                                    // 支持：IE 11+，Edge 17 - 18+
                                                    // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                                                    // 两个文件；浅比较有效。
                                                    // eslint-disable-next-line eqeqeq
                                                    最外层上下文 = 上下文 == 文档 || 上下文 || 最外层；
                                                }

                                                // 添加元素直接通过 elementMatchers 到结果
                                                // 支持: IE<9, Safari
                                                // 容忍 NodeList 属性 (IE: "length"; Safari: <number>) 通过 id 匹配元素
                                                for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
                                                    if ( byElement && elem ) {
                                                        j = 0;

                                                        // 支持：IE 11+，Edge 17 - 18+
                                                        // IE/Edge 在严格比较时有时会抛出“权限被拒绝”错误
                                                        // 两个文件；浅比较有效。
                                                        // eslint-disable-next-line eqeqeq
                                                        if ( !context && elem.ownerDocument != document ) {
                                                            setDocument( elem );
                                                            xml = !documentIsHTML;
                                                        }
                                                        while ( ( matcher = elementMatchers[ j++ ] ) ) {
                                                            如果（匹配器（元素，上下文 || 文档，xml））{
                                                                结果.push( elem );
                                                                休息;
                                                            }
                                                        }
                                                        如果（最外层）{
                                                            dirruns = dirrunsUnique;
                                                        }
                                                    }

                                                    // 跟踪设置过滤器的不匹配元素
                                                    如果 ( bySet ) {

                                                        // 他们将遍历所有可能的匹配器
                                                        if ( ( ( elem = !matcher && elem ) ) {
                                                            匹配计数--;
                                                        }

                                                        // 为每个元素加长数组，无论是否匹配
                                                        如果（种子）{
                                                            unmatched.push( elem );
                                                        }
                                                    }
                                                }

                                                // `i` 现在是上面访问过的元素的计数，并将其添加到 `matchedCount`
                                                // 使后者非负。
                                                匹配计数 += i;

                                                // 对不匹配的元素应用设置过滤器
                                                // 注意：如果没有不匹配的元素（即`matchedCount`
                                                // 等于 `i`)，除非我们没有访问上述循环中的 _any_ 元素，因为我们有
                                                // 没有元素匹配器和种子。
                                                // 递增初始字符串“0”`i` 允许`i` 仅在该字符串中保留一个字符串
                                                // case，这将导致“00”`matchedCount`与`i`不同但也是
                                                // 数字为零。
                                                if ( bySet && i !==matchedCount ) {
                                                    j = 0;
                                                    while ( ( matcher = setMatchers[ j++ ] ) ) {
                                                        匹配器（不匹配，setMatched，上下文，xml）；
                                                    }

                                                    如果（种子）{

                                                        // 重新整合元素匹配以消除排序的需要
                                                        如果（匹配计数> 0）{
                                                            当我 -  ） {
                                                                如果 ( !( 不匹配[ i ] || setMatched[ i ] ) ) {
                                                                    setMatched[ i ] = pop.call( results );
                                                                }
                                                            }
                                                        }

                                                        // 丢弃索引占位符值以仅获取实际匹配项
                                                        setMatched = condense( setMatched );
                                                    }

                                                    // 添加匹配到结果
                                                    push.apply( 结果, setMatched );

                                                    // 无核集匹配多个成功匹配器规定排序
                                                    如果（最外层 && !seed && setMatched.length > 0 &&
                                                    (matchedCount + setMatchers.length) > 1 ) {

                                                        Sizzle.uniqueSort(结果);
                                                    }
                                                }

                                                // 覆盖嵌套匹配器对全局变量的操作
                                                如果（最外层）{
                                                    dirruns = dirrunsUnique;
                                                    最外层上下文 = 上下文备份；
                                                }

                                                返回无与伦比；
                                            };

                                            返回 bySet ？
		markFunction( superMatcher ) :
                                            超级匹配器；
                                        }

                                        compile = Sizzle.compile = function( selector, match /* 仅供内部使用 */ ) {
                                            变量 i，
		setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[选择器+“”]；

	如果（！缓存）{

                                                // 生成可用于检查每个元素的递归函数的函数
                                                如果（！匹配）{
                                                    匹配 = 标记化（选择器）；
                                                }
                                                i = match.length;
                                                当我 -  ） {
                                                    缓存 = matcherFromTokens( match[ i ] );
                                                    如果（缓存[展开]）{
                                                        setMatchers.push( 缓存);
                                                    } 别的 {
                                                        elementMatchers.push(缓存);
                                                    }
                                                }

                                                // 缓存编译后的函数
                                                缓存 = 编译器缓存（
			选择器，
			matcherFromGroupMatchers( elementMatchers, setMatchers )
                                            );

                                                // 保存选择器和标记化
                                                cached.selector = 选择器；
                                            }
                                            返回缓存；
                                        };

                                        /**
                                         * 与 Sizzle 编译的低级选择功能
                                         * 选择器功能
                                         * @param {String|Function} selector 选择器或预编译
                                         * 使用 Sizzle.compile 构建的选择器函数
                                         * @param {Element} 上下文
                                         * @param {Array} [结果]
                                         * @param {Array} [seed] 一组要匹配的元素
                                         */
                                        select = Sizzle.select = function（选择器，上下文，结果，种子）{
                                            var i, 令牌, 令牌, 类型, 查找,
                                                编译 = typeof 选择器 === "函数" && 选择器，
		匹配 = !seed && tokenize( ( 选择器 = 编译选择器 || 选择器 ) );

                                            结果 = 结果 || [];

                                            // 如果列表中只有一个选择器且没有种子，则尝试最小化操作
                                            //（后者保证了我们的上下文）
                                            如果（匹配。长度=== 1）{

                                                // 如果前导复合选择器是一个 ID，则减少上下文
                                                令牌=匹配[0]=匹配[0].slice(0);
                                                if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
                                                    context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

                                                    context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
                                                        .replace( runescape, funescape ), context ) || [] )[ 0 ];
                                                    如果（！上下文）{
                                                        返回结果；

                                                        // 预编译的匹配器仍然会验证祖先，所以更上一层楼
                                                    } else if（编译）{
                                                        上下文 = context.parentNode;
                                                    }

                                                    selector = selector.slice( tokens.shift().value.length );
                                                }

                                                // 获取从右到左匹配的种子集
                                                i = matchExpr[ "needsContext" ].test( selector ) ? 0：tokens.length；
		当我 -  ） {
                                                    令牌 = 令牌[我];

                                                    // 如果我们碰到一个组合器就中止
                                                    if ( Expr.relative[ ( type = token.type ) ] ) {
                                                        休息;
                                                    }
                                                    if ( ( ( find = Expr.find[ type ] ) ) {

                                                        // 搜索，扩展主要兄弟组合的上下文
                                                        如果 ( ( 种子 = 查找 (
                                                            token.matches[ 0 ].replace( runescape, funescape ),
                                                            rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
                                                            语境
                                                        ) ) ) {

                                                            // 如果种子为空或没有标记剩余，我们可以提前返回
                                                            token.splice( i, 1 );
                                                            selector = seed.length && toSelector( tokens );
                                                            如果（！选择器）{
                                                                push.apply( 结果, 种子 );
                                                                返回结果；
                                                            }

                                                            休息;
                                                        }
                                                    }
                                                }
                                            }

                                            // 如果没有提供过滤功能，则编译并执行过滤功能
                                            // 如果我们修改了上面的选择器，则提供 `match` 以避免重新标记
                                        （编译 || 编译（选择器，匹配））（
		种子，
		语境，
		!documentIsHTML,
            结果，
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || 语境
                                        );
                                            返回结果；
                                        };

// 一次性赋值

// 排序稳定性
                                        support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// 支持：Chrome 14-35+
// 如果它们没有传递给比较函数，则始终假设它们是重复的
                                        support.detectDuplicates = !!hasDuplicate;

// 针对默认文档初始化
                                        设置文档（）；

// 支持：Webkit<537.32 - Safari 6.0.3/Chrome 25（Chrome 27 中已修复）
// 分离的节点混淆地跟随*彼此*
                                        support.sortDetached = assert( 函数( el ) {

                                            // 应该返回 1，但返回 4（以下）
                                            返回 el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                                        });

// 支持：IE<8
// 防止属性/属性“插值”
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
                                        如果 ( !assert( 函数( el ) {
                                            el.innerHTML = "<a href='#'></a>";
                                            return el.firstChild.getAttribute( "href" ) === "#";
                                        } ) ) {
                                            addHandle( "type|href|height|width", function( elem, name, isXML ) {
                                                如果（！isXML）{
                                                    return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
                                                }
                                            });
                                        }

// 支持：IE<9
// 使用 defaultValue 代替 getAttribute("value")
                                        if ( !support.attributes || !assert( function( el ) {
                                            el.innerHTML = "<input/>";
                                            el.firstChild.setAttribute( "value", "" );
                                            return el.firstChild.getAttribute( "value" ) === "";
                                        } ) ) {
                                            addHandle（“值”，函数（元素，_name，isXML）{
                                                if ( !isXML && elem.nodeName.toLowerCase() === "输入" ) {
                                                    返回 elem.defaultValue;
                                                }
                                            });
                                        }

// 支持：IE<9
// 当 getAttribute 存在时，使用 getAttributeNode 获取布尔值
                                        如果 ( !assert( 函数( el ) {
                                            返回 el.getAttribute( "disabled" ) == null;
                                        } ) ) {
                                            addHandle（布尔值，函数（元素，名称，isXML）{
                                                变量值；
		如果（！isXML）{
                                                    返回 elem[ 名称 ] === 真？name.toLowerCase() ：
				( val = elem.getAttributeNode( name ) ) && val.specified ?
                    价值：
					空值;
                                                }
                                            });
                                        }

                                        返回嘶嘶声；

                                    } ）（ 窗户 ）;



                                    jQuery.find = 嘶嘶声；
jQuery.expr = Sizzle.selectors;

// 已弃用
                                    jQuery.expr[":"] = jQuery.expr.pseudos;
                                    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
                                    jQuery.text = Sizzle.getText;
                                    jQuery.isXMLDoc = Sizzle.isXML;
                                    jQuery.contains = Sizzle.contains;
                                    jQuery.escapeSelector = Sizzle.escape;




                                    var dir = function( elem, dir, until ) {
                                        var 匹配 = [],
                                            截断 = 直到 !== 未定义；

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
        如果（ elem.nodeType === 1 ）{
            if ( truncate && jQuery( elem ).is( until ) ) {
                休息;
            }
            匹配.push( elem );
        }
    }
                                        返回匹配；
                                    };


                                    var 兄弟姐妹 = 函数( n, elem ) {
                                        var 匹配 = [];

                                        for ( ; n; n = n.nextSibling ) {
                                            if ( n.nodeType === 1 && n !== elem ) {
                                                匹配.push( n );
                                            }
                                        }

                                        返回匹配；
                                    };


                                    var rneedsContext = jQuery.expr.match.needsContext;



                                    函数节点名称（元素，名称）{

                                        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

                                    }
                                    var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// 为过滤器实现相同的功能，而不是
                                    函数 winnow( 元素，限定符，不是 ) {
                                        如果（isFunction（限定符））{
                                            返回 jQuery.grep( 元素，函数( elem, i ) {
                                                return !!qualifier.call( elem, i, elem ) !== not;
                                            });
                                        }

                                        // 单个元素
                                        如果（限定符.nodeType）{
                                            返回 jQuery.grep( 元素，函数( elem ) {
                                                返回（ elem === 限定符）！== 不；
                                            });
                                        }

                                        // Arraylike 元素（jQuery、arguments、Array）
                                        if ( typeof 限定符 !== "string" ) {
                                            返回 jQuery.grep( 元素，函数( elem ) {
                                                return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
                                            });
                                        }

                                        // 直接过滤简单和复杂的选择器
                                        返回 jQuery.filter( 限定符，元素，不是 );
                                    }

                                    jQuery.filter = function( expr, elems, not ) {
                                        var elem = elems[0];

                                        如果不 ） {
                                            expr = ":not(" + expr + ")";
                                        }

                                        if ( elems.length === 1 && elem.nodeType === 1 ) {
                                            返回 jQuery.find.matchesSelector( elem, expr ) ？[元素]：[];
                                        }

                                        返回 jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
                                            返回 elem.nodeType === 1;
                                        }));
                                    };

                                    jQuery.fn.extend({
                                        查找：函数（选择器）{
                                        var i, ret,
                                            len = this.length,
                                            自我=这个；

		if ( typeof 选择器 !== "string" ) {
            返回 this.pushStack( jQuery( 选择器 ).filter( function() {
                for ( i = 0; i < len; i++ ) {
                    if ( jQuery.contains( self[ i ], this ) ) {
                        返回真；
                    }
                }
            }));
        }

                                        ret = this.pushStack( [] );

                                        for ( i = 0; i < len; i++ ) {
                                            jQuery.find( 选择器, self[ i ], ret );
                                        }

                                        返回 len > 1 ? jQuery.uniqueSort( ret ) : ret;
                                    },
                                    过滤器：函数（选择器）{
                                        return this.pushStack( winnow( this, selector || [], false ) );
                                    },
                                    不是：函数（选择器）{
                                        return this.pushStack( winnow( this, selector || [], true ) );
                                    },
                                    是：函数（选择器）{
                                        返回 !!winnow(
                                            这个，

                                        // 如果这是一个位置/相对选择器，检查返回集合中的成员资格
                                        // 所以 $("p:first").is("p:last") 不会为有两个 "p" 的文档返回 true。
                                        typeof selector === "string" && rneedsContext.test( selector ) ?
                                            jQuery（选择器）：
				选择器 || [],
                    错误的
		）。长度;
                                    }
                                });


// 初始化一个 jQuery 对象


// 对根 jQuery(document) 的中央引用
                                    var rootjQuery，

                                    // 检查 HTML 字符串的简单方法
                                    // 通过 location.hash 将 #id 优先于 <tag> 以避免 XSS (#9521)
                                    // 严格的 HTML 识别（#11290：必须以 < 开头）
                                    // 快捷简单的#id case 速度
                                    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

                                        init = jQuery.fn.init = 函数（选择器，上下文，根）{
                                        var 匹配，元素；

                                        // 句柄：$(""), $(null), $(undefined), $(false)
                                        如果（！选择器）{
                                            返回这个；
                                        }

                                        // 方法 init() 接受一个替代的 rootjQuery
                                        // 所以迁移可以支持 jQuery.sub (gh-2101)
                                        根=根|| 根jQuery；

                                        // 处理 HTML 字符串
                                        if ( typeof 选择器 === "string" ) {
                                            if ( 选择器[ 0 ] === "<" &&
                                                选择器[ selector.length - 1 ] === ">" &&
                                                选择器长度 >= 3 ) {

                                                // 假设以 <> 开头和结尾的字符串是 HTML 并跳过正则表达式检查
                                                匹配 = [空，选择器，空];

                                            } 别的 {
                                                match = rquickExpr.exec(选择器);
                                            }

                                            // 匹配 html 或确保没有为 #id 指定上下文
                                            if ( match && ( match[ 1 ] || !context ) ) {

                                                // 句柄：$(html) -> $(array)
                                                如果（匹配[1]）{
                                                    上下文 = jQuery 的上下文实例？上下文[0]：上下文；

                                                    // 运行脚本的选项对于向后兼容是正确的
                                                    // 如果 parseHTML 不存在，故意让错误被抛出
                                                    jQuery.merge( 这个, jQuery.parseHTML(
                                                        匹配[1]，
						上下文&& context.nodeType ？context.ownerDocument || 上下文：文档，
						真的
                                                ) );

                                                    // 句柄：$(html, props)
                                                    if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
                                                        for（在上下文中匹配）{

                                                            // 如果可能的话，上下文的属性作为方法被调用
                                                            if ( isFunction( this[ match ] ) ) {
                                                                this[匹配](上下文[匹配]);

                                                                // ...否则设置为属性
                                                            } 别的 {
                                                                this.attr(匹配，上下文[匹配]);
                                                            }
                                                        }
                                                    }

                                                    返回这个；

                                                    // 句柄：$(#id)
                                                } 别的 {
                                                    elem = document.getElementById(match[2]);

                                                    如果（元素）{

                                                        // 将元素直接注入 jQuery 对象
                                                        这个[ 0 ] = elem;
                                                        this.length = 1;
                                                    }
                                                    返回这个；
                                                }

                                                // 句柄：$(expr, $(...))
                                            } else if ( !context || context.jquery ) {
                                                返回（上下文 || 根）。查找（选择器）；

                                                // 句柄：$(expr, context)
                                                //（这相当于：$(context).find(expr)
                                            } 别的 {
                                                返回 this.constructor( context ).find( selector );
                                            }

                                            // 句柄：$(DOMElement)
                                        } else if ( selector.nodeType ) {
                                            this[0] = 选择器；
			this.length = 1;
                                            返回这个；

                                            // 句柄：$(函数)
                                            // 文件准备好的快捷方式
                                        } else if ( isFunction( 选择器 ) ) {
                                            返回 root.ready !== undefined ?
                                                root.ready( 选择器 ) ：

                                            // 如果 ready 不存在则立即执行
                                            选择器（jQuery）；
                                        }

                                        返回 jQuery.makeArray( 选择器, this );
                                    };

// 为 init 函数提供 jQuery 原型以供稍后实例化
                                    init.prototype = jQuery.fn;

// 初始化中心参考
                                    rootjQuery = jQuery( 文档 );


                                    var rparentsprev = /^(?:parents|prev(?:Until|All))/,

                                        // 方法保证从唯一集合开始时产生唯一集合
                                        保证唯一性 = {
                                            孩子们：真的，
		内容：真实，
		下一个：真的，
		上一条：真实
                                };

                                    jQuery.fn.extend({
                                        有：功能（目标）{
                                        var 目标 = jQuery( target, this ),
                                            l = 目标.长度；

		返回 this.filter( function() {
                                            变量 i = 0;
                                            for ( ; i < l; i++ ) {
                                                如果（jQuery.contains（这个，目标[我]））{
                                                    返回真；
                                                }
                                            }
                                        });
                                    },

                                    最近：函数（选择器，上下文）{
                                        var cur,
                                            我 = 0,
                                            l = this.length，
			匹配 = [],
                目标 = typeof 选择器 !== "string" && jQuery( selectors );

                                        // 位置选择器永远不会匹配，因为没有 _selection_ 上下文
                                        如果（！rneedsContext.test（选择器））{
                                            for ( ; i < l; i++ ) {
                                                for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

                                                    // 总是跳过文档片段
                                                    if ( cur.nodeType < 11 && ( 目标 ?
                                                        目标.索引（cur）> -1：

                                                    // 不要将非元素传递给 Sizzle
                                                    cur.nodeType === 1 &&
                                                    jQuery.find.matchesSelector( cur, selectors ) ) ) {

                                                        匹配.push(cur);
                                                        休息;
                                                    }
                                                }
                                            }
                                        }

                                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched):matched);
                                    },

                                    // 确定一个元素在集合中的位置
                                    索引：函数（元素）{

                                        // 无参数，返回父索引
                                        如果（！元素）{
                                            返回（this[0]&&this[0].parentNode）？this.first().prevAll().length : -1;
                                        }

                                        // 选择器中的索引
                                        if ( typeof elem === "string" ) {
                                            返回 indexOf.call( jQuery( elem ), this[ 0 ] );
                                        }

                                        // 定位所需元素的位置
                                        返回 indexOf.call( 这个,

                                            // 如果它接收到一个 jQuery 对象，则使用第一个元素
                                            elem.jquery ? elem[ 0 ] : elem
                                        );
                                    },

                                    添加：函数（选择器，上下文）{
                                        返回 this.pushStack(
                                            jQuery.uniqueSort(
                                                jQuery.merge(this.get(), jQuery(选择器，上下文))
                                    )
                                    );
                                    },

                                    addBack：函数（选择器）{
                                        返回 this.add( 选择器 == null ?
                                            this.prevObject : this.prevObject.filter(选择器)
                                        );
                                    }
                                });

                                    函数兄弟（cur，dir）{
                                        while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
                                        返回电流；
                                    }

                                    jQuery.each({
                                        父：函数（元素）{
                                        var parent = elem.parentNode;
                                        返回 parent && parent.nodeType !== 11 ? 父母：空；
                                    },
                                    父母：函数（元素）{
                                        return dir( elem, "parentNode" );
                                    },
                                    父母直到：函数（元素，_i，直到）{
                                        return dir( elem, "parentNode", until );
                                    },
                                    下一个：函数（元素）{
                                        返回兄弟( elem, "nextSibling" );
                                    },
                                    上一个：函数（元素）{
                                        返回兄弟（元素，“previousSibling”）；
                                    },
                                    nextAll: 函数( elem ) {
                                        返回目录( elem, "nextSibling" );
                                    },
                                    prevAll: 函数( elem ) {
                                        返回目录( elem, "previousSibling" );
                                    },
                                    nextUntil：函数（元素，_i，直到）{
                                        返回目录（ elem，“nextSibling”，直到）；
                                    },
                                    prevUntil：函数（元素，_i，直到）{
                                        return dir( elem, "previousSibling", 直到 );
                                    },
                                    兄弟姐妹：函数（元素）{
                                        返回兄弟姐妹( ( elem.parentNode || {} ).firstChild, elem );
                                    },
                                    孩子们：功能（元素）{
                                        返回兄弟姐妹（ elem.firstChild ）；
                                    },
                                    内容：功能（元素）{
                                        如果 ( elem.contentDocument != null &&

                                            // 支持：IE 11+
                                            // 没有 `data` 属性的 <object> 元素有一个对象
                                            // 带有 `null` 原型的 `contentDocument`。
                                            getProto( elem.contentDocument ) ) {

                                            返回 elem.contentDocument;
                                        }

                                        // 支持: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
                                        // 将模板元素视为浏览器中的常规元素
                                        // 不支持。
                                        如果（节点名称（元素，“模板”））{
                                            elem = elem.content || 元素;
                                        }

                                        返回 jQuery.merge( [], elem.childNodes );
                                    }
                                }, 函数( 名称, fn ) {
                                        jQuery.fn[ 名称 ] = 函数（直到，选择器）{
                                            var 匹配 = jQuery.map( this, fn, until );

                                            if ( name.slice( -5 ) !== "直到" ) {
                                                选择器 = 直到；
                                            }

                                            if ( 选择器 && typeof 选择器 === "字符串" ) {
                                                匹配 = jQuery.filter( 选择器，匹配 );
                                            }

                                            如果（this.length > 1）{

                                                // 删除重复项
                                                如果（！guaranteedUnique[名称]）{
                                                    jQuery.uniqueSort( 匹配);
                                                }

                                                // 父级*和前导数的倒序
                                                如果（rparentsprev.test（名称））{
                                                    匹配。反向（）；
                                                }
                                            }

                                            返回 this.pushStack( 匹配);
                                        };
                                    });
                                    var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// 将字符串格式的选项转换为对象格式的选项
                                    函数创建选项（选项）{
                                        var 对象 = {};
                                        jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
                                            对象[标志] = true;
                                        });
                                        返回对象；
                                    }

                                    /*
 * 使用以下参数创建回调列表：
 *
 * 选项：一个可选的以空格分隔的选项列表，它将改变方式
 * 回调列表行为或更传统的选项对象
 *
 * 默认情况下，回调列表将充当事件回调列表，并且可以
 *多次“解雇”。
 *
 * 可能的选项：
 *
 * 一次：将确保回调列表只能被触发一次（如延迟）
 *
 * memory：将跟踪以前的值并调用任何添加的回调
 * 列表被立即解雇后，最新的“记忆”
 * 值（如延迟）
 *
 * 唯一：将确保回调只能添加一次（列表中没有重复）
 *
 * stopOnFalse: 当回调返回 false 时中断调用
 *
 */
                                    jQuery.Callbacks = 函数（选项）{

                                        // 如果需要，将选项从字符串格式转换为对象格式
                                        //（我们先检查缓存）
                                        options = typeof options === "string" ?
                                            创建选项（选项）：
		jQuery.extend( {}, 选项);

                                        var // 标记以了解列表当前是否正在触发
                                            射击，

                                        // 不可忘记列表的最后一个触发值
                                        记忆，

                                        // 标记以了解列表是否已经被触发
                                        被解雇，

                                        // 防止触发的标志
                                        锁定，

                                        // 实际回调列表
                                        列表 = [],

                                            // 可重复列表的执行数据队列
                                            队列 = [],

                                            // 当前触发回调的索引（根据需要添加/删除修改）
                                            点火指数 = -1，

                                        // 触发回调
                                        火 = 功能（）{

                                            // 强制单发
                                            锁定 = 锁定 || 选项。一次；

                                            // 为所有挂起的执行执行回调，
                                            // 尊重 fireIndex 覆盖和运行时更改
                                            开火=开火=真；
			for (; queue.length; fireIndex = -1 ) {
                内存 = queue.shift();
                while ( ++firingIndex < list.length ) {

                    // 运行回调并检查是否提前终止
                    if ( list[ fireIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
                        options.stopOnFalse ) {

                        // 跳转到结尾并忘记数据，因此 .add 不会重新触发
                        fireIndex = list.length;
                        记忆=假；
                    }
                }
            }

                                            // 如果我们用完就忘记数据
                                            如果（！options.memory）{
                                                记忆=假；
                                            }

                                            开火=假；

                                            // 如果我们已经完成射击，则清理
                                            如果（锁定）{

                                                // 如果我们有数据供以后添加调用，则保留一个空列表
                                                如果（记忆）{
                                                    列表 = [];

                                                    // 否则，这个对象被花费
                                                } 别的 {
                                                    列表 = "";
                                                }
                                            }
                                        },

                                        // 实际回调对象
                                        自我 = {

                                            // 向列表中添加一个回调或回调集合
                                            添加：函数（）{
                                            如果（列表）{

                                                // 如果我们有过去运行的内存，我们应该在添加后触发
                                                如果（内存&&！开火）{
                                                    fireIndex = list.length - 1;
                                                    queue.push(内存);
                                                }

					（函数添加（参数）{
                                                    jQuery.each( args, function( _, arg ) {
                                                        如果 ( isFunction( arg ) ) {
                                                            if ( !options.unique || !self.has( arg ) ) {
                                                                list.push(arg);
                                                            }
                                                        } else if ( arg && arg.length && toType( arg ) !== "string" ) {

                                                            // 递归检查
                                                            添加( arg );
                                                        }
                                                    });
                                                } )( 参数 );

                                                如果（内存&&！开火）{
                                                    火（）;
                                                }
                                            }
                                            返回这个；
                                        },

                                        // 从列表中删除回调
                                        删除：函数（）{
                                            jQuery.each( 参数, 函数( _, arg ) {
                                                变量索引；
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                        list.splice( index, 1 );

                        // 处理触发索引
                        如果（指数 <= 点火指数）{
                            点火指数--;
                        }
                    }
                                            });
                                            返回这个；
                                        },

                                        // 检查给定的回调是否在列表中。
                                        // 如果没有给出参数，则返回列表是否附加了回调。
                                        有：函数（fn）{
                                            返回 fn ?
                                                jQuery.inArray( fn, list ) > -1 :
                                                list.length > 0;
                                        },

                                        // 从列表中删除所有回调
                                        空：函数（）{
                                            如果（列表）{
                                                列表 = [];
                                            }
                                            返回这个；
                                        },

                                        // 禁用 .fire 和 .add
                                        // 中止任何当前/挂起的执行
                                        // 清除所有回调和值
                                        禁用：函数（）{
                                            锁定 = 队列 = [];
                                            列表=内存=“”；
				返回这个；
                                        },
                                        禁用：功能（）{
                                            返回！列表；
                                        },

                                        // 禁用 .fire
                                        // 也禁用 .add 除非我们有内存（因为它没有效果）
                                        // 中止任何挂起的执行
                                        锁：函数（）{
                                            锁定 = 队列 = [];
                                            如果 ( !memory && !fireing ) {
                                                列表=内存=“”；
                                            }
                                            返回这个；
                                        },
                                        锁定：函数（）{
                                            返回!!锁定;
                                        },

                                        // 使用给定的上下文和参数调用所有回调
                                        fireWith：函数（上下文，参数）{
                                            如果（！锁定）{
                                                args = args || [];
                                                args = [ 上下文, args.slice ? args.slice() : args ];
                                                queue.push( args );
                                                如果（！开火）{
                                                    火（）;
                                                }
                                            }
                                            返回这个；
                                        },

                                        // 使用给定的参数调用所有回调
                                        火：函数（）{
                                            self.fireWith( this, arguments );
                                            返回这个；
                                        },

                                        // 要知道回调是否已经至少被调用过一次
                                        发射：函数（）{
                                            返回!!解雇;
                                        }
                                    };

                                        回归自我；
                                    };


                                    函数标识( v ) {
                                        返回 v;
                                    }
                                    功能投掷者（前）{
                                        扔前;
                                    }

                                    函数采用值（值，解决，拒绝，无值）{
                                        var方法；

	尝试 {

                                            // 首先检查promise方面以特权同步行为
                                            if ( value && isFunction( ( method = value.promise ) ) ) {
                                                method.call(value).done(resolve).fail(reject);

                                                // 其他可用对象
                                            } else if ( value && isFunction( ( method = value.then ) ) ) {
                                                方法调用（值，解决，拒绝）；

                                                // 其他非thenables
                                            } 别的 {

                                                // 通过让 Array#slice 将 boolean `noValue` 转换为整数来控制 `resolve` 参数：
                                                // * false: [ value ].slice( 0 ) => resolve( value )
                                                // * true: [ value ].slice( 1 ) => resolve()
                                                resolve.apply( undefined, [ value ].slice( noValue ) );
                                            }

                                            // 对于 Promises/A+，将异常转换为拒绝
                                            // 由于 jQuery.when 不解包 thenables，我们可以跳过出现在
                                            // Deferred#then 有条件地抑制拒绝。
                                        }捕获（值）{

                                            // 支持：仅 Android 4.0
                                            // 没有 .call/.apply 调用的严格模式函数获取全局对象上下文
                                            拒绝.应用（未定义，[值]）；
                                        }
                                    }

                                    jQuery.extend({

                                        延迟：函数（函数）{
                                        var 元组 = [

                                            // 动作，添加监听器，回调，
                                            // ... .then 处理程序，参数索引，[最终状态]
                                            [ "通知", "进度", jQuery.Callbacks( "memory"),
                                                jQuery.Callbacks( "memory" ), 2 ],
                                            [“解决”，“完成”，jQuery.Callbacks（“一次记忆”），
					jQuery.Callbacks("一次内存"), 0, "已解决"],
                                        [“拒绝”，“失败”，jQuery.Callbacks（“一次记忆”），
					jQuery.Callbacks( "一次记忆" ), 1, "rejected" ]
                                    ],
                                        状态 = "待定",
                                            承诺 = {
                                                状态：函数（）{
                                            返回状态；
                                        },
                                        总是：函数（）{
                                            deferred.done(arguments).fail(arguments);
                                            返回这个；
                                        },
                                    “捕获”：函数（ fn ）{
                                            返回 promise.then( null, fn );
                                        },

                                        // 保留管道以进行反向兼容
                                        管道：函数（/* fnDone，fnFail，fnProgress */）{
                                            var fns = 参数；

					返回 jQuery.Deferred( 函数( newDefer ) {
                                                jQuery.each（元组，函数（_i，元组）{

                                                    // 将元组（进度、完成、失败）映射到参数（完成、失败、进度）
                                                    var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

                                                    // deferred.progress(function() { 绑定到 newDefer 或 newDefer.notify })
                                                    // deferred.done(function() { 绑定到 newDefer 或 newDefer.resolve })
                                                    // deferred.fail(function() { 绑定到 newDefer 或 newDefer.reject })
                                                    延迟[元组[1]](函数(){
                                                        var 返回 = fn && fn.apply( this, arguments );
                                                        如果（返回&& isFunction（返回。承诺））{
                                                            返回.promise()
                                                                .progress( newDefer.notify )
                                                                .done( newDefer.resolve )
                                                                .fail(newDefer.reject);
                                                        } 别的 {
                                                            newDefer[ tuple[ 0 ] + "With" ](
                                                                这个，
										? [返回]：参数
                                                        );
                                                        }
                                                    });
                                                });
                                                fns = 空；
                                            } ）。承诺（）;
                                        },
                                        然后：函数（onFulfilled，onRejected，onProgress）{
                                            var maxDepth = 0;
                                            函数解析（深度，延迟，处理程序，特殊）{
                                                返回函数（）{
                                                    var that = this,
                                                        args = 参数，
								可能投掷 = 函数（）{
                                                        var 返回，然后；

                                                        // 支持：Promises/A+ 部分 2.3.3.3.3
                                                        // https://promisesaplus.com/#point-59
                                                        // 忽略双分辨率尝试
                                                        如果（深度<最大深度）{
                                                            返回;
                                                        }

                                                        返回 = handler.apply( that, args );

                                                        // 支持：Promises/A+ 部分 2.3.1
                                                        // https://promisesaplus.com/#point-48
                                                        if ( 返回 === deferred.promise() ) {
                                                            throw new TypeError("Thenable self-resolution");
                                                        }

                                                        // 支持：Promises/A+ 部分 2.3.3.1, 3.5
                                                        // https://promisesaplus.com/#point-54
                                                        // https://promisesaplus.com/#point-75
                                                        // 只检索一次 `then`
                                                        然后 = 返回 &&

                                                            // 支持：Promises/A+ 部分 2.3.4
                                                            // https://promisesaplus.com/#point-64
                                                            // 只检查对象和函数的 thenability
                                                            ( typeof 返回 === "object" ||
                                                                typeof 返回 === "function" ) &&
                                                            返回。然后；

                                                        // 处理返回的 thenable
                                                        if ( isFunction( then ) ) {

                                                            // 特殊处理器（通知）只等待解析
                                                            如果（特殊）{
                                                                然后.调用（
												回来，
												解决（最大深度，延迟，身份，特殊），
												解决（最大深度，延迟，投掷者，特殊）
                                                            );

                                                                // 普通处理器（resolve）也挂入进度
                                                            } 别的 {

                                                                // ...并忽略旧的分辨率值
                                                                最大深度++；

											然后.调用（
												回来，
												解决（最大深度，延迟，身份，特殊），
												解决（最大深度，延迟，投掷者，特殊），
												解决（最大深度，延迟，身份，
													deferred.notifyWith )
                                                            );
                                                            }

                                                            // 处理所有其他返回值
                                                        } 别的 {

                                                            // 只有替代处理程序传递上下文
                                                            // 和多个值（非规范行为）
                                                            如果（处理程序！== 身份）{
                                                                那 = 未定义；
											args = [返回];
                                                            }

                                                            // 处理值
                                                            // 默认进程是resolve
                                                            ( 特别 || deferred.resolveWith )( that, args );
                                                        }
                                                    },

                                                    // 只有普通处理器（解析）捕获和拒绝异常
                                                    过程=特殊？
									可能抛出：
									功能（） {
                                                        尝试 {
                                                            可能投掷（）；
                                                        }赶上（e）{

                                                            如果（jQuery.Deferred.exceptionHook）{
                                                                jQuery.Deferred.exceptionHook( e,
                                                                    进程.stackTrace );
                                                            }

                                                            // 支持：Promises/A+ 部分 2.3.3.3.4.1
                                                            // https://promisesaplus.com/#point-61
                                                            // 忽略解析后异常
                                                            如果（深度 + 1 >= 最大深度）{

                                                                // 只有替代处理程序传递上下文
                                                                // 和多个值（非规范行为）
                                                                如果（处理程序！== 投掷者）{
                                                                    那 = 未定义；
													args = [ e ];
                                                                }

                                                                deferred.rejectWith( that, args );
                                                            }
                                                        }
                                                    };

                                                    // 支持：Promises/A+ 部分 2.3.3.3.1
                                                    // https://promisesaplus.com/#point-57
                                                    // 立即重新解析 promise 以躲避错误拒绝
                                                    // 后续错误
                                                    如果（深度）{
                                                        过程（）;
                                                    } 别的 {

                                                        // 调用一个可选的钩子来记录堆栈，以防出现异常
                                                        // 因为执行异步时它会丢失
                                                        如果（jQuery.Deferred.getStackHook）{
                                                            process.stackTrace = jQuery.Deferred.getStackHook();
                                                        }
                                                        window.setTimeout(进程);
                                                    }
                                                };
                                            }

                                            返回 jQuery.Deferred( 函数( newDefer ) {

                                                // progress_handlers.add( ... )
                                                元组[0][3].add(
                                                    解决（
								0,
                                    新的延迟，
								isFunction(onProgress) ?
                                    进度：
									身份，
								newDefer.notifyWith
                                            )
                                            );

                                                //fulfilled_handlers.add( ... )
                                                元组[1][3].add(
                                                    解决（
								0,
                                    新的延迟，
								isFunction( onFulfilled ) ?
                                    已完成：
									身份
                                            )
                                            );

                                                // reject_handlers.add( ... )
                                                元组[2][3].add(
                                                    解决（
								0,
                                    新的延迟，
								isFunction( onRejected ) ?
                                    拒绝：
									投掷者
                                            )
                                            );
                                            } ）。承诺（）;
                                        },

                                        // 获得此延迟的承诺
                                        // 如果提供了 obj，则将 promise 方面添加到对象中
                                        承诺：函数（对象）{
                                            返回 obj != null ? jQuery.extend( obj, 承诺) : 承诺;
                                        }
                                    },
                                        延迟 = {};

                                        // 添加特定于列表的方法
                                        jQuery.each（元组，函数（我，元组）{
                                            var list = tuple[2],
                                                stateString = 元组 [5];

                                            // promise.progress = list.add
                                            // promise.done = list.add
                                            // promise.fail = list.add
                                            承诺[元组[1]] = list.add;

                                            // 处理状态
                                            如果（状态字符串）{
                                                列表.添加（
					功能（） {

                                                    // state = "resolved" (即，已完成)
                                                    // state = "拒绝"
                                                    状态 = 状态字符串；
                                                },

                                                // reject_callbacks.disable
                                                //fulfiled_callbacks.disable
                                                元组[ 3 - i ][ 2 ].禁用，

                                                //rejected_handlers.disable
                                                //fulfilled_handlers.disable
                                                元组[ 3 - i ][ 3 ].禁用，

                                                // progress_callbacks.lock
                                                元组[0][2].lock，

                                                //progress_handlers.lock
                                                元组[0][3].lock
                                            );
                                            }

                                            // progress_handlers.fire
                                            //fulfilled_handlers.fire
                                            // reject_handlers.fire
                                            list.add( 元组[ 3 ].fire );

                                            // deferred.notify = function() { deferred.notifyWith(...) }
                                            // deferred.resolve = function() { deferred.resolveWith(...) }
                                            // deferred.reject = function() { deferred.rejectWith(...) }
                                            延迟[元组[0]]=函数（）{
                                                deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
                                                返回这个；
                                            };

                                            // deferred.notifyWith = list.fireWith
                                            // deferred.resolveWith = list.fireWith
                                            // deferred.rejectWith = list.fireWith
                                            deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
                                        });

                                        // 使延迟成为承诺
                                        promise.promise(延迟);

                                        // 调用给定的func（如果有）
                                        如果（功能）{
                                            func.call（延迟，延迟）；
                                        }

                                        // 全部完成！
                                        延期返还；
                                    },

                                    // 延迟助手
                                    当：函数（单值）{
                                        无功

                                        // 未完成的下属计数
                                        剩余 = arguments.length，

                                        // 未处理参数的计数
                                        我 = 剩余，

                                        // 下级履行数据
                                        resolveContexts = Array( i ),
                                            resolveValues = slice.call( arguments ),

                                            // 主延迟
                                            主要 = jQuery.Deferred(),

                                            // 下属回调工厂
                                            updateFunc = 函数（我）{
                                            返回函数（值）{
                                                resolveContexts[ i ] = this;
                                                resolveValues[ i ] = arguments.length > 1 ? slice.call(arguments)：值；
					如果 ( !( --remaining ) ) {
                                                    primary.resolveWith( resolveContexts, resolveValues );
                                                }
                                            };
                                        };

                                        // 像 Promise.resolve 一样采用单参数和空参数
                                        如果（剩余<= 1）{
                                            采用值（singleValue，primary.done（updateFunc（i））。解决，primary.reject，
                                        ！其余的 ）;

                                            // 使用 .then() 来解包二级 thenables（参见 gh-3000）
                                            if (primary.state() === "pending" ||
                                                isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

                                                返回primary.then();
                                            }
                                        }

                                        // 多个参数像 Promise.all 数组元素一样聚合
                                        当我 -  ） {
                                            采用值( resolveValues[ i ], updateFunc( i ), primary.reject );
                                        }

                                        返回primary.promise();
                                    }
                                });


// 这些通常表示开发过程中的程序员错误，
// 尽快警告它们，而不是默认吞下它们。
                                    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

                                    jQuery.Deferred.exceptionHook = 函数（错误，堆栈）{

                                        // 支持：仅 IE 8 - 9
                                        // 开发工具打开时控制台存在，随时可能发生
                                        if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
                                            window.console.warn("jQuery.Deferred 异常：" + error.message, error.stack, stack );
                                        }
                                    };




                                    jQuery.readyException = 函数（错误）{
                                        window.setTimeout（函数（）{
                                            抛出错误；
                                        });
                                    };




// 在 DOM 就绪时使用的延迟
                                    var readyList = jQuery.Deferred();

                                    jQuery.fn.ready = 函数( fn ) {

                                        就绪列表
                                            .then( fn )

                                            // 将 jQuery.readyException 包装在一个函数中，以便查找
                                            // 发生在错误处理而不是回调时
                                            // 登记。
                                            .catch(函数(错误){
                                            jQuery.readyException( 错误 );
                                        });

                                        返回这个；
                                    };

                                    jQuery.extend({

                                        // DOM 准备好使用了吗？一旦发生就设置为true。
                                        isReady: 假,

                                        // 一个计数器，用于跟踪之前要等待的项目数
                                        // 就绪事件触发。见#6781
                                        准备等待：1，

                                    // 当 DOM 准备好时处理
                                    准备好：功能（等待）{

                                        // 如果有待处理的保留或我们已经准备好，则中止
                                        如果（等待 === 真？--jQuery.readyWait：jQuery.isReady）{
                                            返回;
                                        }

                                        // 记住 DOM 已经准备好了
                                        jQuery.isReady = true;

                                        // 如果正常的 DOM Ready 事件被触发，则递减，并在需要时等待
                                        如果（等待！== true && --jQuery.readyWait > 0）{
                                            返回;
                                        }

                                        // 如果有函数绑定，执行
                                        readyList.resolveWith( 文档, [ jQuery ] );
                                    }
                                });

                                    jQuery.ready.then = readyList.then;

// 就绪事件处理程序和自清理方法
                                    功能完成（）{
                                        document.removeEventListener("DOMContentLoaded", 完成);
                                        window.removeEventListener("加载", 完成);
                                        jQuery.ready();
                                    }

// 捕获调用 $(document).ready() 的情况
// 在浏览器事件已经发生之后。
// 支持: IE <=9 - 10 only
// 较旧的 IE 有时会过早地发出“交互式”信号
                                    if ( document.readyState === "完成" ||
                                        ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

                                        // 异步处理，让脚本有机会延迟就绪
                                        window.setTimeout( jQuery.ready );

                                    } 别的 {

                                        // 使用方便的事件回调
                                        document.addEventListener("DOMContentLoaded", 完成);

                                        // 回退到 window.onload，这将始终有效
                                        window.addEventListener("加载", 完成);
                                    }




// 获取和设置集合值的多功能方法
// 如果是函数，则可以选择执行 value/s
                                    var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
                                        变量 i = 0,
                                            len = elems.length,
                                            批量 = 键 == 空；

                                        // 设置多个值
                                        if ( toType( key ) === "object" ) {
                                            可链=真；
		for ( i in key ) {
            访问( elems, fn, i, key[ i ], true, emptyGet, raw );
        }

                                            // 设置一个值
                                        } else if ( value !== undefined ) {
                                            可链=真；

		如果（！isFunction（值））{
                                                原始 = 真；
                                            }

                                            如果（批量）{

                                                // 批量操作针对整个集合运行
                                                如果（原始）{
                                                    fn.call(elems, value);
                                                    fn = 空；

                                                    // ...除非在执行函数值时
                                                } 别的 {
                                                    散装 = fn;
                                                    fn = 函数（元素，_key，值）{
                                                        返回bulk.call( jQuery( elem ), value );
                                                    };
                                                }
                                            }

                                            如果 ( fn ) {
                                                for ( ; i < len; i++ ) {
                                                    fn(
                                                        elems[ i ], key, raw ?
                                                            价值 ：
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
                                                );
                                                }
                                            }
                                        }

                                        如果（可链接）{
                                            返回元素；
                                        }

                                        // 获取
                                        如果（批量）{
                                            返回 fn.call( elems );
                                        }

                                        返回 len ? fn( elems[ 0 ], key ) : emptyGet;
                                    };


// 匹配用于骆驼化的虚线字符串
                                    var rmsPrefix = /^-ms-/,
                                        rdashAlpha = /-([az])/g;

// 被camelCase 用作replace() 的回调
                                    函数 fcamelCase( _all, 字母 ) {
                                        返回 letter.toUpperCase();
                                    }

// 将虚线转换为驼峰式；由 css 和 data 模块使用
// 支持：IE <=9 - 11, Edge 12 - 15
// 微软忘记了他们的供应商前缀 (#9572)
                                    函数驼峰（字符串）{
                                        返回 string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
                                    }
                                    var acceptData = 函数（所有者）{

                                        // 只接受：
                                        // - 节点
                                        // - Node.ELEMENT_NODE
                                        // - Node.DOCUMENT_NODE
                                        // - 目的
                                        // - 任何
                                        返回 owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
                                    };




                                    函数数据（）{
                                        this.expando = jQuery.expando + Data.uid++;
                                    }

                                    数据.uid = 1;

                                    数据.prototype = {

                                        缓存：函数（所有者）{

                                        // 检查所有者对象是否已经有缓存
                                        var value = owner[ this.expando ];

                                        // 如果没有，则创建一个
                                        如果（！值）{
                                            值 = {};

                                            // 我们可以在现代浏览器中接受非元素节点的数据，
                                            // 但我们不应该，见#8335。
                                            // 总是返回一个空对象。
                                            如果（接受数据（所有者））{

                                                // 如果它是一个不太可能被字符串化或循环的节点
                                                // 使用普通赋值
                                                如果（所有者。节点类型）{
                                                    所有者[ this.expando ] = 价值；

                                                    // 否则将其保护在不可枚举的属性中
                                                    // 可配置必须为真以允许属性
                                                    // 删除数据时删除
                                                } 别的 {
                                                    Object.defineProperty(owner, this.expando, {
                                                        价值：价值，
						可配置：真
                                                });
                                                }
                                            }
                                        }

                                        返回值；
                                    },
                                    设置：函数（所有者，数据，值）{
                                        var 道具，
			缓存= this.cache（所有者）；

                                        // 句柄：[所有者，键，值] args
                                        // 始终使用驼峰式键 (gh-2257)
                                        if ( typeof data === "string" ) {
                                            缓存[骆驼案例（数据）] =值；

                                            // 句柄：[所有者，{属性}] args
                                        } 别的 {

                                            // 将属性一一复制到缓存对象
                                            for（数据中的道具）{
                                                缓存[camelCase(prop)] = 数据[prop];
                                            }
                                        }
                                        返回缓存；
                                    },
                                    获取：函数（所有者，密钥）{
                                        返回键 === 未定义？
			this.cache(所有者)：

                                        // 始终使用驼峰式键 (gh-2257)
                                        owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
                                    },
                                    访问：功能（所有者，键，值）{

                                        // 在以下任一情况下：
                                        //
                                        // 1. 没有指定key
                                        // 2. 指定了字符串键，但未提供值
                                        //
                                        // 取“读”路径，让get方法判断
                                        // 分别返回哪个值：
                                        //
                                        // 1.整个缓存对象
                                        // 2.key存储的数据
                                        //
                                        if ( key === undefined ||
                                            ( ( ( key && typeof key === "string" ) && value === undefined ) ) {

                                            返回 this.get( owner, key );
                                        }

                                        // 当键不是字符串，或者键和值都不是时
                                        // 使用以下任一方式指定、设置或扩展（现有对象）：
                                        //
                                        // 1. 一个属性对象
                                        // 2.一个键和值
                                        //
                                        this.set( 所有者, 键, 值);

                                        // 因为“set”路径可以有两个可能的入口点
                                        // 根据采用的路径返回预期数据[*]
                                        返回值 !== 未定义 ? 值：键；
                                    },
                                    删除：功能（所有者，密钥）{
                                        变量 i，
			缓存 = 所有者 [ this.expando ];

                                        如果（缓存 === 未定义）{
                                            返回;
                                        }

                                        如果（键！== 未定义）{

                                            // 支持数组或空格分隔的键串
                                            如果 ( Array.isArray( 键 ) ) {

                                                // 如果key是一个key数组...
                                                // 我们总是设置驼峰键，所以删除它。
                                                key = key.map(camelCase);
                                            } 别的 {
                                                键 = 驼峰式（键）；

                                                // 如果存在带空格的键，则使用它。
                                                // 否则，通过匹配非空白创建一个数组
                                                键 = 缓存中的键？
					[ 钥匙 ] ：
					( key.match( rnothtmlwhite ) || [] );
                                            }

                                            i = 密钥长度；

			当我 -  ） {
                                                删除缓存[key[i]];
                                            }
                                        }

                                        // 如果没有更多数据，则删除 expando
                                        if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

                                            // 支持：Chrome <=35 - 45
                                            // 删除属性时 Webkit 和 Blink 的性能会受到影响
                                            // 来自 DOM 节点，所以设置为 undefined
                                            // https://bugs.chromium.org/p/chromium/issues/detail?id=378607（错误受限）
                                            如果（所有者。节点类型）{
                                                所有者[ this.expando ] = 未定义；
                                            } 别的 {
                                                删除所有者[ this.expando ];
                                            }
                                        }
                                    },
                                    hasData：函数（所有者）{
                                        var cache = owner[ this.expando ];
                                        返回缓存 !== undefined && !jQuery.isEmptyObject( cache );
                                    }
                                };
                                    var dataPriv = new Data();

                                    var dataUser = new Data();



// 实现总结
//
// 1. 强制 API 表面和语义与 1.9.x 分支兼容
// 2.通过减少存储提高模块的可维护性
// 单一机制的路径。
// 3. 使用相同的单一机制来支持“私有”和“用户”数据。
// 4. _Never_ 向用户代码公开“私有”数据（TODO: Drop _data, _removeData）
// 5. 避免暴露用户对象的实现细节（例如 expando 属性）
// 6. 为2014年WeakMap实现升级提供清晰路径

                                    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                                        rmultiDash = /[AZ]/g;

                                    函数获取数据（数据）{
                                        如果（数据===“真”）{
                                            返回真；
                                        }

                                        如果（数据===“假”）{
                                            返回假；
                                        }

                                        如果（数据===“空”）{
                                            返回空；
                                        }

                                        // 只有在不改变字符串的情况下才转换为数字
                                        如果（数据=== +数据+“”）{
                                            返回+数据；
                                        }

                                        如果（rbrace.test（数据））{
                                            返回 JSON.parse( 数据 );
                                        }

                                        返回数据；
                                    }

                                    函数 dataAttr( elem, key, data ) {
                                        变量名；

                                        // 如果在内部没有找到任何东西，则尝试获取任何
                                        // 来自 HTML5 data-* 属性的数据
                                        if ( data === undefined && elem.nodeType === 1 ) {
                                            name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
                                            数据 = elem.getAttribute( 名称 );

                                            if ( typeof data === "string" ) {
                                                尝试 {
                                                    数据 = 获取数据（数据）；
                                                }赶上（e）{}

                                                // 确保我们设置了数据，以便以后不会更改
                                                dataUser.set( elem, key, data );
                                            } 别的 {
                                                数据 = 未定义；
                                            }
                                        }
                                        返回数据；
                                    }

                                    jQuery.extend({
                                        hasData：函数（元素）{
                                        返回 dataUser.hasData( elem ) || dataPriv.hasData( elem );
                                    },

                                    数据：函数（元素，名称，数据）{
                                        返回 dataUser.access( elem, name, data );
                                    },

                                    删除数据：函数（元素，名称）{
                                        dataUser.remove( elem, name );
                                    },

                                    // TODO: 现在所有对 _data 和 _removeData 的调用都已被替换
                                    // 直接调用 dataPriv 方法，这些可以被弃用。
                                    _data：函数（元素，名称，数据）{
                                        返回 dataPriv.access( elem, name, data );
                                    },

                                    _removeData：函数（元素，名称）{
                                        dataPriv.remove( elem, name );
                                    }
                                });

                                    jQuery.fn.extend({
                                        数据：函数（键，值）{
                                        var i, 名称, 数据,
                                            elem = this[0],
                                            attrs = elem && elem.attributes;

                                        // 获取所有值
                                        如果（键 === 未定义）{
                                            如果（this.length）{
                                                数据 = dataUser.get( elem );

                                                if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
                                                    i = attrs.length;
                                                    当我 -  ） {

                                                        // 支持：仅 IE 11
                                                        // attrs 元素可以为 null (#14894)
                                                        如果（属性[我]）{
                                                            name = attrs[ i ].name;
                                                            if ( name.indexOf( "data-" ) === 0 ) {
                                                                name = camelCase( name.slice( 5 ) );
                                                                dataAttr( elem, name, data[ name ] );
                                                            }
                                                        }
                                                    }
                                                    dataPriv.set( elem, "hasDataAttrs", true );
                                                }
                                            }

                                            返回数据；
                                        }

                                        // 设置多个值
                                        if ( typeof key === "object" ) {
                                            返回 this.each( function() {
                                                dataUser.set( this, key );
                                            });
                                        }

                                        返回访问（这个，函数（值）{
                                            无功数据；

                                            // 调用 jQuery 对象（元素匹配）不为空
                                            //（因此有一个元素出现在 this[0]）和
                                            // `value` 参数不是未定义的。一个空的 jQuery 对象
                                            // 将导致 elem = this[ 0 ] 的 `undefined` 这将
                                            // 如果尝试读取数据缓存，则抛出异常。
                                            if ( elem && value === undefined ) {

                                                // 尝试从缓存中获取数据
                                                // 键在数据中总是驼峰式的
                                                data = dataUser.get( elem, key );
                                                如果（数据！== 未定义）{
                                                    返回数据；
                                                }

                                                // 尝试“发现”数据
                                                // HTML5 自定义数据-* attrs
                                                data = dataAttr( elem, key );
                                                如果（数据！== 未定义）{
                                                    返回数据；
                                                }

                                                // 我们真的很努力，但数据不存在。
                                                返回;
                                            }

                                            // 设置数据...
                                            this.each(函数(){

                                                // 我们总是存储驼峰式键
                                                dataUser.set( this, key, value );
                                            });
                                        }, null, value, arguments.length > 1, null, true );
                                    },

                                    删除数据：函数（键）{
                                        返回 this.each( function() {
                                            dataUser.remove( this, key );
                                        });
                                    }
                                });


                                    jQuery.extend({
                                        队列：函数（元素，类型，数据）{
                                        无功队列；

		如果（元素）{
                                            type = ( type || "fx" ) + "queue";
                                            queue = dataPriv.get( elem, type );

                                            // 如果这只是一个查找，则通过快速退出来加速出队
                                            如果（数据）{
                                                if ( !queue || Array.isArray( data ) ) {
                                                    queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
                                                } 别的 {
                                                    queue.push(数据);
                                                }
                                            }
                                            返回队列 || [];
                                        }
                                    },

                                    出队：函数（元素，类型）{
                                        类型 = 类型 || "fx";

                                        var queue = jQuery.queue( elem, type ),
                                            startLength = queue.length,
                                            fn = queue.shift(),
                                            hooks = jQuery._queueHooks( elem, type ),
                                            下一个 = 函数（）{
                                            jQuery.dequeue( elem, type );
                                        };

                                        // 如果 fx 队列出队，总是移除进度哨兵
                                        if ( fn === "inprogress" ) {
                                            fn = queue.shift();
                                            起始长度--;
                                        }

                                        如果 ( fn ) {

                                            // 添加进度哨兵，防止fx队列被
                                            // 自动出队
                                            如果（类型 ===“fx”）{
                                                queue.unshift("进行中");
                                            }

                                            // 清除最后一个队列停止函数
                                            删除 hooks.stop;
                                            fn.call( elem, next, hooks );
                                        }

                                        如果 ( !startLength && 钩子 ) {
                                            hooks.empty.fire();
                                        }
                                    },

                                    // 不公开 - 生成一个 queueHooks 对象，或者返回当前的
                                    _queueHooks：函数（元素，类型）{
                                        var key = type + "queueHooks";
                                        返回 dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
                                            空：jQuery.Callbacks(“一次记忆”).add(function() {
                                            dataPriv.remove( elem, [ type + "queue", key ] );
                                        })
                                    });
                                    }
                                });

                                    jQuery.fn.extend({
                                        队列：函数（类型，数据）{
                                        var setter = 2;

                                        if ( typeof type !== "string" ) {
                                            数据 = 类型；
			类型 = "fx";
                                            二传手--;
                                        }

                                        if (arguments.length < setter ) {
                                            返回 jQuery.queue( this[ 0 ], type );
                                        }

                                        返回数据 === 未定义？
			这个 ：
			this.each(函数(){
                                            var queue = jQuery.queue( this, type, data );

                                            // 确保这个队列有一个钩子
                                            jQuery._queueHooks( this, type );

                                            if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
                                                jQuery.dequeue( this, type );
                                            }
                                        });
                                    },
                                    出队：函数（类型）{
                                        返回 this.each( function() {
                                            jQuery.dequeue( this, type );
                                        });
                                    },
                                    clearQueue：函数（类型）{
                                        return this.queue( type || "fx", [] );
                                    },

                                    // 在特定类型的队列中获得已解决的承诺
                                    // 被清空（fx 是默认类型）
                                    承诺：函数（类型，对象）{
                                        无功tmp，
			计数 = 1,
                defer = jQuery.Deferred(),
                元素 = 这个，
			i = this.length,
                解析 = 函数（）{
                                            如果 ( !( --count ) ) {
                                                defer.resolveWith(元素, [元素]);
                                            }
                                        };

                                        if ( typeof type !== "string" ) {
                                            对象 = 类型；
			类型 = 未定义；
                                        }
                                        类型 = 类型 || "fx";

                                        当我 -  ） {
                                            tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
                                            如果（tmp && tmp.empty）{
                                                计数++；
				tmp.empty.add( 解决);
                                            }
                                        }
                                        解决（）;
                                        返回 defer.promise( obj );
                                    }
                                });
                                    var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

                                    var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


                                    var cssExpand = [“上”、“右”、“下”、“左”];

                                    var documentElement = document.documentElement;



                                    var isAttached = function( elem ) {
                                            返回 jQuery.contains( elem.ownerDocument, elem );
                                        },
                                        组合 = { 组合：真 };

                                    // 支持: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
                                    // 在可能的情况下跨 shadow DOM 边界检查附件 (gh-3504)
                                    // 支持：仅 iOS 10.0-10.2
                                    // 早期的 iO​​S 10 版本支持 `attachShadow` 但不支持 `getRootNode`，
                                    // 导致错误。我们需要检查`getRootNode`。
                                    如果（documentElement.getRootNode）{
                                        isAttached = 函数（元素）{
                                            返回 jQuery.contains( elem.ownerDocument, elem ) ||
                                            elem.getRootNode( 组合) === elem.ownerDocument;
                                        };
                                    }
                                    var isHiddenWithinTree = function( elem, el ) {

                                        // isHiddenWithinTree 可能会被 jQuery#filter 函数调用；
                                        // 在这种情况下，元素将是第二个参数
                                        elem = el || 元素;

                                        // 内联样式胜过一切
                                        返回 elem.style.display === "none" ||
                                        elem.style.display === "" &&

                                        // 否则，检查计算样式
                                        // 支持：火狐 <=43 - 45
                                        // 断开的元素可以计算 display: none，所以首先确认 elem 是
                                        // 在文档中。
                                        isAttached( elem ) &&

                                        jQuery.css( elem, "display" ) === "none";
                                    };



                                    函数 adjustCSS( elem, prop, valueParts, tween ) {
                                        变量调整，规模，
		最大迭代次数 = 20，
		当前值 = 补间？
			功能（） {
                                            返回 tween.cur();
			：
			功能（） {
                                                返回 jQuery.css( elem, prop, "" );
                                            },
                                            初始 = currentValue(),
                                                unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

                                                // 潜在的单元不匹配需要计算起始值
                                                initialInUnit = elem.nodeType &&
                                                    ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
                                                    rcssNum.exec( jQuery.css( elem, prop ) );

                                            if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

                                                // 支持：火狐<=54
                                                // 将迭代目标值减半以防止受到 CSS 上限的干扰 (gh-2144)
                                                初始 = 初始 / 2;

                                                // jQuery.css 报告的信任单位
                                                单位 = 单位 || 初始单元[3];

                                                // 从非零起点迭代逼近
                                                initialInUnit = +initial || 1;

                                                while ( maxIterations-- ) {

                                                    // 评估并更新我们的最佳猜测（将猜测加倍为零）。
                                                    // 如果比例等于或穿过 1（使旧*新产品非正），则完成。
                                                    jQuery.style( elem, prop, initialInUnit + unit );
                                                    if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
                                                        最大迭代次数 = 0;
                                                    }
                                                    initialInUnit = initialInUnit / 比例；

                                                }

                                                initialInUnit = initialInUnit * 2;
                                                jQuery.style( elem, prop, initialInUnit + unit );

                                                // 确保我们稍后更新补间属性
                                                valueParts = valueParts || [];
                                            }

                                            如果（价值部分）{
                                                initialInUnit = +initialInUnit || +开头 || 0;

                                                // 如果指定，则应用相对偏移量 (+=/-=)
                                                调整 = valueParts[1] ?
                                                    initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] ：
			+valueParts[2];
                                                如果（补间）{
                                                    tween.unit = 单位；
			tween.start = initialInUnit;
                                                    tween.end = 调整；
                                                }
                                            }
                                            收益调整；
                                        }


                                        var defaultDisplayMap = {};

                                        函数 getDefaultDisplay( elem ) {
                                            变温，
		doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[ nodeName ];

                                            如果（显示）{
                                                返回显示；
                                            }

                                            temp = doc.body.appendChild(doc.createElement(nodeName));
                                            display = jQuery.css( temp, "display" );

                                            temp.parentNode.removeChild(temp);

                                            如果（显示===“无”）{
                                                显示=“块”；
                                            }
                                            defaultDisplayMap[ nodeName ] = 显示；

	返回显示；
                                        }

                                        功能显示隐藏（元素，显示）{
                                            无功显示，元素，
		值 = [],
            指数 = 0,
            长度 = 元素。长度；

                                            // 为需要改变的元素确定新的显示值
                                            for ( ; 索引 < 长度; 索引++ ) {
                                                elem = 元素[索引];
                                                如果（！elem.style）{
                                                    继续;
                                                }

                                                display = elem.style.display;
                                                如果（显示）{

                                                    // 由于我们强制对级联隐藏元素可见，因此立即（且缓慢）
                                                    // 在第一个循环中需要检查，除非我们有一个非空的显示值（或者
                                                    // 内联或即将恢复）
                                                    如果（显示===“无”）{
                                                        values[ index ] = dataPriv.get( elem, "display" ) || 空值;
                                                        如果（！值[索引]）{
                                                            elem.style.display = "";
                                                        }
                                                    }
                                                    if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
                                                        值[索引] = getDefaultDisplay( elem );
                                                    }
                                                } 别的 {
                                                    如果（显示！==“无”）{
                                                        值[索引] =“无”；

                                                        // 记住我们要覆盖的内容
                                                        dataPriv.set( elem, "display", display );
                                                    }
                                                }
                                            }

                                            // 在第二个循环中设置元素的显示以避免不断回流
                                            for ( index = 0; index < 长度; index++ ) {
                                                如果（值[索引]！=空）{
                                                    元素[索引].style.display =值[索引];
                                                }
                                            }

                                            返回元素；
                                        }

                                        jQuery.fn.extend({
                                            显示：函数（）{
                                            返回 showHide( this, true );
                                        },
                                        隐藏：函数（）{
                                            返回 showHide( this );
                                        },
                                        切换：功能（状态）{
                                            if ( typeof state === "boolean" ) {
                                                返回状态？this.show() : this.hide();
                                            }

                                            返回 this.each( function() {
                                                if ( isHiddenWithinTree( this ) ) {
                                                    jQuery( 这个).show();
                                                } 别的 {
                                                    jQuery( 这个).hide();
                                                }
                                            });
                                        }
                                    });
                                        var rcheckableType = ( /^(?:checkbox|radio)$/i );

                                        var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

                                        var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



（ 功能（） {
                                            var fragment = document.createDocumentFragment(),
                                                div = fragment.appendChild( document.createElement( "div" ) ),
                                                input = document.createElement("输入");

                                            //支持：搭载Android 4.0 - 4.3Ø NLY
                                            // 如果设置了名称，则检查状态丢失 (#11217)
                                            // 支持：Windows Web 应用程序 (WWA)
                                            // `name` 和 `type` 必须为 WWA 使用 .setAttribute (#14901)
                                            input.setAttribute( "type", "radio" );
                                            input.setAttribute("检查", "检查");
                                            input.setAttribute( "name", "t" );

                                            div.appendChild(输入);

                                            // 支持：仅 Android <=4.1
                                            // 较旧的 WebKit 不会在片段中正确克隆已检查状态
                                            support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

                                            // 支持：仅 IE <=11
                                            // 确保 textarea（和复选框）defaultValue 被正确克隆
                                            div.innerHTML = "<textarea>x</textarea>";
                                            support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

                                            // 支持：仅 IE <=9
                                            // IE <=9 将 <option> 标签插入到
                                            // 选择元素。
                                            div.innerHTML = "<option></option>";
                                            support.option = !!div.lastChild;
                                        })();


// 我们必须关闭这些标签以支持 XHTML (#13200)
                                        var wrapMap = {

                                            // XHTML 解析器不会神奇地在
                                            // 与标签汤解析器相同的方式。所以我们不能缩短
                                            // 这是通过省略 <tbody> 或其他必需元素来实现的。
                                            thead: [ 1, "<table>", "</table>" ],
                                            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                                            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                                            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

                                            _default: [ 0, "", "" ]
                                        };

                                        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                                        wrapMap.th = wrapMap.td;

// 支持：仅 IE <=9
                                        如果（！support.option）{
                                            wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
                                        }


                                        函数getAll（上下文，标签）{

                                            // 支持: IE <=9 - 11 only
                                            // 使用 typeof 避免在宿主对象上调用零参数方法 (#15151)
                                            var ret;

                                            if ( typeof context.getElementsByTagName !== "undefined" ) {
                                                ret = context.getElementsByTagName( tag || "*" );

                                            } else if ( typeof context.querySelectorAll !== "undefined" ) {
                                                ret = context.querySelectorAll( tag || "*" );

                                            } 别的 {
                                                ret = [];
                                            }

                                            if ( tag === undefined || tag && nodeName( context, tag ) ) {
                                                返回 jQuery.merge( [上下文], ret );
                                            }

                                            返回 ret;
                                        }


// 将脚本标记为已经评估过
                                        函数 setGlobalEval( elems, refElements ) {
                                            变量 i = 0,
                                                l = elems.length;

                                            for ( ; i < l; i++ ) {
                                                数据私有集（
			元素[我]，
			"全球评估",
            !refElements || dataPriv.get( refElements[ i ], "globalEval" )
                                            );
                                            }
                                        }


                                        var rhtml = /<|&#?\w+;/;

                                        函数 buildFragment（元素，上下文，脚本，选择，忽略）{
                                            var elem, tmp, tag, wrap, attach, j,
                                                fragment = context.createDocumentFragment(),
                                                节点 = [],
                                                我 = 0,
                                                l = elems.length;

                                            for ( ; i < l; i++ ) {
                                                elem = elems[i];

                                                if ( elem || elem === 0 ) {

                                                    // 直接添加节点
                                                    if ( toType( elem ) === "object" ) {

                                                        // 支持：仅 Android <=4.0，仅 PhantomJS 1
                                                        // push.apply(_, arraylike) 抛出古老的 WebKit
                                                        jQuery.merge( 节点, elem.nodeType ? [ elem ] : elem );

                                                        // 将非 html 转换为文本节点
                                                    } else if ( !rhtml.test( elem ) ) {
                                                        node.push( context.createTextNode( elem ) );

                                                        // 将 html 转换为 DOM 节点
                                                    } 别的 {
                                                        tmp = tmp || fragment.appendChild(context.createElement("div"));

                                                        // 反序列化一个标准表示
                                                        tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
                                                        wrap = wrapMap[ 标签 ] || wrapMap._default;
                                                        tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

                                                        // 通过包装器下降到正确的内容
                                                        j = 包裹[0];
                                                        而 ( j-- ) {
                                                            tmp = tmp.lastChild;
                                                        }

                                                        // 支持：仅 Android <=4.0，仅 PhantomJS 1
                                                        // push.apply(_, arraylike) 抛出古老的 WebKit
                                                        jQuery.merge( 节点, tmp.childNodes );

                                                        // 记住顶层容器
                                                        tmp = fragment.firstChild;

                                                        // 确保创建的节点是孤立的 (#12392)
                                                        tmp.textContent = "";
                                                    }
                                                }
                                            }

                                            // 从片段中移除包装器
                                            fragment.textContent = "";

                                            我 = 0;
                                            while ( ( elem = 节点 [ i++ ] ) ) {

                                                // 跳过上下文集合中已有的元素 (trac-4087)
                                                if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
                                                    如果（忽略）{
                                                        忽略.push( elem );
                                                    }
                                                    继续;
                                                }

                                                附加 = isAttached( elem );

                                                // 附加到片段
                                                tmp = getAll( fragment.appendChild( elem ), "script" );

                                                // 保存脚本评估历史
                                                如果（附加）{
                                                    setGlobalEval(tmp);
                                                }

                                                // 捕获可执行文件
                                                如果（脚本）{
                                                    j = 0;
                                                    while ( ( elem = tmp[ j++ ] ) ) {
                                                        if ( rscriptType.test( elem.type || "" ) ) {
                                                            脚本.push( elem );
                                                        }
                                                    }
                                                }
                                            }

                                            返回片段；
                                        }


                                        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

                                        函数 returnTrue() {
                                            返回真；
                                        }

                                        函数 returnFalse() {
                                            返回假；
                                        }

// 支持：IE <=9 - 11+
// focus() 和 blur() 是异步的，除非它们是无操作的。
// 所以当元素已经处于活动状态时，期望焦点是同步的，
// 当元素尚未激活时，模糊是同步的。
//（焦点和模糊在其他支持的浏览器中总是同步的，
// 这只是定义了我们何时可以指望它）。
                                        函数expectSync（元素，类型）{
                                            return ( elem === safeActiveElement() ) === ( type === "focus" );
                                        }

// 支持：仅 IE <=9
// 访问 document.activeElement 可能会意外抛出
// https://bugs.jquery.com/ticket/13393
                                        函数 safeActiveElement() {
                                            尝试 {
                                                返回 document.activeElement;
                                            }抓住（错误）{}
                                        }

                                        功能上（元素，类型，选择器，数据，fn，一）{
                                            var origFn，类型；

                                            // 类型可以是类型/处理程序的映射
                                            if ( typeof types === "object" ) {

                                                //（类型-对象、选择器、数据）
                                                if ( typeof 选择器 !== "string" ) {

                                                    //（类型-对象，数据）
                                                    数据 = 数据 || 选择器；
			选择器 = 未定义；
                                                }
                                                for（输入类型）{
                                                    on( elem, type, selector, data, types[ type ], one );
                                                }
                                                返回元素；
                                            }

                                            if ( 数据 == 空 && fn == 空 ) {

                                                //（类型，fn）
                                                fn = 选择器；
		数据 = 选择器 = 未定义；
                                            } else if ( fn == null ) {
                                                if ( typeof 选择器 === "string" ) {

                                                    //（类型，选择器，fn）
                                                    fn = 数据；
			数据 = 未定义；
                                                } 别的 {

                                                    //（类型，数据，fn）
                                                    fn = 数据；
			数据 = 选择器；
			选择器 = 未定义；
                                                }
                                            }
                                            如果（ fn === 假）{
                                                fn = returnFalse;
                                            }否则如果（！fn）{
                                                返回元素；
                                            }

                                            如果（一=== 1）{
                                                origFn = fn;
                                                fn = 函数（事件）{

                                                    // 可以使用空集，因为事件包含信息
                                                    jQuery().off(事件);
                                                    return origFn.apply( this, arguments );
                                                };

                                                // 使用相同的 guid 以便调用者可以使用 origFn 删除
                                                fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
                                            }
                                            返回 elem.each( 函数() {
                                                jQuery.event.add( this, types, fn, data, selector );
                                            });
                                        }

                                        /*
 * 用于管理事件的辅助函数——不是公共界面的一部分。
 * 对 Dean Edwards 的 addEvent 库的许多想法的支持。
 */
                                        jQuery.event = {

                                            全球的： {}，

	添加：函数（元素，类型，处理程序，数据，选择器）{

                                            var handleObjIn, eventHandle, tmp,
                                                事件，t，handleObj，
			特殊、处理程序、类型、命名空间、origType、
			elemData = dataPriv.get( elem );

                                            // 只将事件附加到接受数据的对象上
                                            如果 ( !acceptData( elem ) ) {
                                                返回;
                                            }

                                            // 调用者可以传入自定义数据的对象来代替处理程序
                                            如果（处理程序。处理程序）{
                                                handleObjIn = 处理程序；
			处理程序 = handleObjIn.handler;
                                                选择器 = handleObjIn.selector;
                                            }

                                            // 确保无效的选择器在附加时抛出异常
                                            // 如果 elem 是非元素节点（例如，文档），则针对 documentElement 进行评估
                                            如果（选择器）{
                                                jQuery.find.matchesSelector( documentElement, selector );
                                            }

                                            // 确保处理程序具有唯一 ID，用于稍后查找/删除它
                                            如果（！handler.guid）{
                                                handler.guid = jQuery.guid++;
                                            }

                                            // 初始化元素的事件结构和主处理程序，如果这是第一个
                                            如果（！（事件= elemData.events））{
                                                events = elemData.events = Object.create(null);
                                            }
                                            如果 ( !( eventHandle = elemData.handle ) ) {
                                                eventHandle = elemData.handle = function( e ) {

                                                    // 丢弃 jQuery.event.trigger() 的第二个事件和
                                                    // 在页面卸载后调用事件时
                                                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                                                        jQuery.event.dispatch.apply( elem, arguments ) ：未定义；
                                                };
                                            }

                                            // 处理多个以空格分隔的事件
                                            类型 = ( 类型 || "" ).match( rnothtmlwhite ) || [""];
                                            t = 类型.长度；
		而 ( t-- ) {
                                                tmp = rtypenamespace.exec(types[t]) || [];
                                                type = origType = tmp[1];
                                                命名空间 = ( tmp[ 2 ] || "" ).split( "." ).sort();

                                                // * 必须* 是一个类型，没有附加仅命名空间的处理程序
                                                如果（！类型）{
                                                    继续;
                                                }

                                                // 如果事件改变了它的类型，对改变的类型使用特殊的事件处理程序
                                                special = jQuery.event.special[ type ] || {};

                                                // 如果定义了选择器，则确定特殊事件 api 类型，否则给定类型
                                                type = ( selector ? special.delegateType : special.bindType ) || 类型;

                                                // 根据新重置的类型更新特殊
                                                special = jQuery.event.special[ type ] || {};

                                                // handleObj 传递给所有事件处理程序
                                                handleObj = jQuery.extend( {
                                                    类型：类型，
				origType: origType,
                    数据：数据，
				处理程序：处理程序，
				guid: handler.guid,
                    选择器：选择器，
				NeedContext: 选择器&& jQuery.expr.match.needsContext.test(选择器),
                    命名空间：namespaces.join(".")
                                            }, handleObjIn );

                                                // 如果我们是第一个，则初始化事件处理程序队列
                                                if ( !( handlers = events[ type ] ) ) {
                                                    处理程序 = 事件 [ 类型 ] = [];
                                                    handlers.delegateCount = 0;

                                                    // 只有在特殊事件处理程序返回 false 时才使用 addEventListener
                                                    如果 ( !special.setup ||
                                                        special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

                                                        如果（ elem.addEventListener ）{
                                                            elem.addEventListener( type, eventHandle );
                                                        }
                                                    }
                                                }

                                                如果（特殊。添加）{
                                                    special.add.call( elem, handleObj );

                                                    如果（！handleObj.handler.guid）{
                                                        handleObj.handler.guid = handler.guid;
                                                    }
                                                }

                                                // 添加到元素的处理程序列表中，委托在前面
                                                如果（选择器）{
                                                    handlers.splice( handlers.delegateCount++, 0, handleObj );
                                                } 别的 {
                                                    handlers.push(handleObj);
                                                }

                                                // 跟踪哪些事件曾经被使用过，用于事件优化
                                                jQuery.event.global[ type ] = true;
                                            }

                                        },

                                        // 从元素中分离一个事件或一组事件
                                        删除：函数（元素，类型，处理程序，选择器，映射类型）{

                                            var j, origCount, tmp,
                                                事件，t，handleObj，
			特殊、处理程序、类型、命名空间、origType、
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

                                            if ( !elemData || !( events = elemData.events ) ) {
                                                返回;
                                            }

                                            // 类型中的每个 type.namespace 一次；类型可以省略
                                            类型 = ( 类型 || "" ).match( rnothtmlwhite ) || [""];
                                            t = 类型.长度；
		而 ( t-- ) {
                                                tmp = rtypenamespace.exec(types[t]) || [];
                                                type = origType = tmp[1];
                                                命名空间 = ( tmp[ 2 ] || "" ).split( "." ).sort();

                                                // 取消绑定元素的所有事件（在此命名空间上，如果提供）
                                                如果（！类型）{
                                                    for（输入事件）{
                                                        jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                                                    }
                                                    继续;
                                                }

                                                special = jQuery.event.special[ type ] || {};
                                                type = ( selector ? special.delegateType : special.bindType ) || 类型;
                                                处理程序 = 事件[类型] || [];
                                                tmp = tmp[ 2 ] &&
                                                    new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

                                                // 移除匹配事件
                                                origCount = j = handlers.length;
                                                而 ( j-- ) {
                                                    handleObj = 处理程序[j];

                                                    if ( (mappedTypes || origType === handleObj.origType ) &&
                                                        ( !handler || handler.guid === handleObj.guid ) &&
                                                        ( !tmp || tmp.test( handleObj.namespace ) ) &&
                                                        ( !selector || selector === handleObj.selector ||
                                                            选择器 === "**" && handleObj.selector ) ) {
                                                        handlers.splice(j, 1);

                                                        如果（handleObj.selector）{
                                                            handlers.delegateCount--;
                                                        }
                                                        如果（特殊。删除）{
                                                            special.remove.call( elem, handleObj );
                                                        }
                                                    }
                                                }

                                                // 如果我们删除了一些东西并且没有更多的处理程序存在，则删除通用事件处理程序
                                                //（避免在删除特殊事件处理程序期间无限递归的可能性）
                                                if ( origCount && !handlers.length ) {
                                                    如果 ( !special.teardown ||
                                                        special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

                                                        jQuery.removeEvent( elem, type, elemData.handle );
                                                    }

                                                    删除事件[类型];
                                                }
                                            }

                                            // 如果不再使用，则删除数据和 expando
                                            如果（jQuery.isEmptyObject（事件））{
                                                dataPriv.remove( elem, "处理事件");
                                            }
                                        },

                                        调度：函数（本机事件）{

                                            var i、j、ret、匹配、handleObj、handlerQueue、
			args = new Array(arguments.length),

                // 从原生事件对象创建一个可写的 jQuery.Event
                event = jQuery.event.fix( nativeEvent ),

                处理程序 = (
                    dataPriv.get( this, "events" ) || Object.create( null )
                )[事件类型] || [],
                special = jQuery.event.special[event.type] || {};

                                            // 使用固定的 jQuery.Event 而不是（只读）本机事件
                                            args[0] = 事件；

		for ( i = 1; i < arguments.length; i++ ) {
            args[i] = 参数[i];
        }

                                            event.delegateTarget = this;

                                            // 调用映射类型的 preDispatch 钩子，如果需要，让它保释
                                            if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
                                                返回;
                                            }

                                            // 确定处理程序
                                            handlerQueue = jQuery.event.handlers.call( this, event, handlers );

                                            // 首先运行委托；他们可能想阻止我们下面的传播
                                            我 = 0;
                                            while ( ( 匹配 = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
                                                event.currentTarget = 匹配.elem;

                                                j = 0;
                                                while ( ( handleObj = 匹配的.handlers[ j++ ] ) &&
                                                !event.isImmediatePropagationStopped() ) {

                                                    // 如果事件是命名空间的，那么每个处理程序只有在它被调用时才被调用
                                                    // 特别通用或其命名空间是事件的超集。
                                                    if ( !event.rnamespace || handleObj.namespace === false ||
                                                        event.rnamespace.test(handleObj.namespace)){

                                                        event.handleObj = handleObj;
                                                        event.data = handleObj.data;

                                                        ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
                                                            handleObj.handler ).apply(matched.elem, args);

                                                        如果 ( ret !== 未定义 ) {
                                                            if ( ( event.result = ret ) === false ) {
                                                                event.preventDefault();
                                                                event.stopPropagation();
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            // 调用映射类型的 postDispatch 钩子
                                            如果（special.postDispatch）{
                                                special.postDispatch.call(this, event);
                                            }

                                            返回 event.result;
                                        },

                                        处理程序：函数（事件，处理程序）{
                                            var i、handleObj、sel、matchedHandlers、matchedSelectors、
			handlerQueue = [],
                delegateCount = handlers.delegateCount,
                Cur = event.target;

                                            // 查找委托处理程序
                                            如果 ( 委托计数 &&

                                                // 支持：IE <=9
                                                // 黑洞 SVG <use> 实例树 (trac-13180)
                                                cur.nodeType&&

                                                // 支持：火狐<=42
                                                // 禁止违反规范的点击指示非主指针按钮 (trac-3861)
                                                // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                                                // 支持：仅 IE 11
                                                // ...但不是无线电输入的箭头键“点击”，它可以有`button` -1 (gh-2343)
                                                !( event.type === "click" && event.button >= 1 ) ) {

                                                for ( ; cur !== this; cur = cur.parentNode || this ) {

                                                    // 不检查非元素 (#13208)
                                                    // 不处理对禁用元素的点击 (#6911, #8165, #11382, #11764)
                                                    if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
                                                        匹配处理程序 = [];
                                                        匹配选择器 = {};
                                                        for ( i = 0; i < delegateCount; i++ ) {
                                                            handleObj = 处理程序 [ i ];

                                                            // 不要与 Object.prototype 属性冲突 (#13203)
                                                            sel = handleObj.selector + " ";

                                                            如果（匹配选择器[sel] === 未定义）{
                                                                匹配选择器 [ sel ] = handleObj.needsContext ？
								jQuery( sel, this ).index( cur ) > -1 :
                                                                jQuery.find( sel, this, null, [ cur ] ).length;
                                                            }
                                                            如果（匹配选择器[sel]）{
                                                                匹配的Handlers.push(handleObj);
                                                            }
                                                        }
                                                        如果（matchedHandlers.length）{
                                                            handlerQueue.push( { elem: cur, handlers: matchingHandlers } );
                                                        }
                                                    }
                                                }
                                            }

                                            // 添加剩余的（直接绑定的）处理程序
                                            cur = 这个；
		if ( delegateCount < handlers.length ) {
            handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
        }

                                            返回处理程序队列；
                                        },

                                        addProp：函数（名称，钩子）{
                                            Object.defineProperty( jQuery.Event.prototype, 名称, {
                                                可枚举：真实，
			可配置：真，

			得到：isFunction（钩子）？
				功能（） {
                                                如果（this.originalEvent）{
                                                    返回钩子( this.originalEvent );
                                                }
				：
				功能（） {
                                                    如果（this.originalEvent）{
                                                        返回 this.originalEvent[name];
                                                    }
                                                },

                                                设置：函数（值）{
                                                    Object.defineProperty( this, name, {
                                                        可枚举：真实，
					可配置：真，
					可写：真实，
					价值：价值
                                                });
                                                }
                                            });
                                        },

                                            修复：函数（原始事件）{
                                                返回 originalEvent[ jQuery.expando ] ？
			原始事件：
			新的 jQuery.Event( originalEvent );
                                            },

                                            特别的： {
                                                加载： {

                                                    // 防止触发的 image.load 事件冒泡到 window.load
                                                    noBubble：真实
                                                },
                                                点击： {

                                                    // 利用本机事件来确保可检查输入的正确状态
                                                    设置：功能（数据）{

                                                        // 为了与 _default 相互压缩，用本地 var 替换 `this` 访问。
                                                        //`|| data` 是死代码，仅用于通过缩小保留变量。
                                                        var el = this || 数据;

                                                        // 声明第一个处理程序
                                                        if ( rcheckableType.test( el.type ) &&
                                                            el.click && nodeName( el, "input" ) ) {

                                                            // dataPriv.set( el, "click", ... )
                                                            杠杆原生( el, "click", returnTrue );
                                                        }

                                                        // 返回 false 以允许调用者进行正常处理
                                                        返回假；
                                                    },
                                                    触发器：函数（数据）{

                                                        // 为了与 _default 相互压缩，用本地 var 替换 `this` 访问。
                                                        //`|| data` 是死代码，仅用于通过缩小保留变量。
                                                        var el = this || 数据;

                                                        // 触发点击前强制设置
                                                        if ( rcheckableType.test( el.type ) &&
                                                            el.click && nodeName( el, "input" ) ) {

                                                            杠杆原生（el，“点击”）；
                                                        }

                                                        // 返回非 false 以允许正常的事件路径传播
                                                        返回真；
                                                    },

                                                    // 为了跨浏览器的一致性，在链接上禁止原生 .click()
                                                    // 如果我们当前在杠杆本机事件堆栈中，也要阻止它
                                                    _默认：函数（事件）{
                                                        var target = event.target;
                                                        返回 rcheckableType.test( target.type ) &&
                                                        target.click && nodeName( target, "input" ) &&
                                                        dataPriv.get( target, "click" ) ||
                                                        节点名称（目标，“a”）；
                                                    }
                                                },

                                                卸载前：{
                                                    postDispatch：函数（事件）{

                                                        // 支持：Firefox 20+
                                                        // 如果 returnValue 字段未设置，Firefox 不会发出警报。
                                                        if ( event.result !== undefined && event.originalEvent ) {
                                                            event.originalEvent.returnValue = event.result;
                                                        }
                                                    }
                                                }
                                            }
                                        };

// 确保存在处理手动触发的事件侦听器
// 通过中断进程直到重新调用来响应的合成事件
// 直接触发的 *native* 事件，确保状态更改具有
// 在调用其他侦听器之前已经发生。
                                        函数杠杆原生（el，类型，expectSync）{

                                            // 缺少expectSync 表示触发调用，必须通过jQuery.event.add 强制设置
                                            如果（！expectSync）{
                                                if ( dataPriv.get( el, type ) === undefined ) {
                                                    jQuery.event.add( el, type, returnTrue );
                                                }
                                                返回;
                                            }

                                            // 将控制器注册为所有事件命名空间的特殊通用处理程序
                                            dataPriv.set( el, type, false );
                                            jQuery.event.add( el, type, {
                                                命名空间：假，
		处理程序：函数（事件）{
                                                var notAsync，结果，
				保存 = dataPriv.get( this, type );

                                                if ( ( event.isTrigger & 1 ) && this[ type ] ) {

                                                    // 中断外部合成 .trigger()ed 事件的处理
                                                    // 在这种情况下，保存的数据应该是假的，但可能是一个剩余的捕获对象
                                                    // 来自异步本机处理程序 (gh-4350)
                                                    如果（！保存。长度）{

                                                        // 存储处理内部原生事件时使用的参数
                                                        // 总会有至少一个参数（一个事件对象），所以这个数组
                                                        // 不会与剩余的捕获对象混淆。
                                                        保存 = slice.call( 参数);
                                                        dataPriv.set( 这个, 类型, 保存);

                                                        // 触发原生事件并捕获其结果
                                                        // 支持：IE <=9 - 11+
                                                        // focus() 和 blur() 是异步的
                                                        notAsync = expectSync( this, type );
                                                        这个类型 ]（）;
                                                        结果 = dataPriv.get( this, type );
                                                        if ( 保存 !== 结果 || notAsync ) {
                                                            dataPriv.set( this, type, false );
                                                        } 别的 {
                                                            结果 = {};
                                                        }
                                                        如果（保存！== 结果）{

                                                            // 取消外部合成事件
                                                            event.stopImmediatePropagation();
                                                            event.preventDefault();

                                                            // 支持：Chrome 86+
                                                            // 在 Chrome 中，如果具有焦点处理程序的元素被
                                                            // 单击它的外部，它会同步调用处理程序。如果
                                                            // 该处理程序在元素上调用`.remove()`，数据被清除，
                                                            // 让 `result` 未定义。我们需要防范这种情况。
                                                            返回结果&& result.value;
                                                        }

                                                        // 如果这是带有冒泡代理的事件的内部合成事件
                                                        //（焦点或模糊），假设代理已经从触发
                                                        // 本机事件并防止在此处再次发生。
                                                        // 这在技术上将顺序错误写入`.trigger()`（其中
                                                        //冒泡代理*在*非冒泡基数之后传播），但这似乎
                                                        // 没有重复那么糟糕。
                                                    } else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
                                                        event.stopPropagation();
                                                    }

                                                    // 如果这是上面触发的原生事件，现在一切正常
                                                    // 使用原始参数触发内部合成事件
                                                } else if (saved.length) {

                                                    // ...并捕获结果
                                                    dataPriv.set( 这个, 类型, {
                                                        值：jQuery.event.trigger(

                                                        // 支持：IE <=9 - 11+
                                                        // 用原型扩展重置上面的stopImmediatePropagation()
                                                        jQuery.extend(saved[0], jQuery.Event.prototype),
                                                        保存的.slice( 1 ),
                                                        这个
                                                    )
                                                });

                                                    // 中止原生事件的处理
                                                    event.stopImmediatePropagation();
                                                }
                                            }
                                        });
                                        }

                                        jQuery.removeEvent = 函数（元素，类型，句柄）{

                                            // 普通对象需要这个“if”
                                            如果（ elem.removeEventListener ）{
                                                elem.removeEventListener( 类型, 句柄);
                                            }
                                        };

                                        jQuery.Event = 函数（源代码，道具）{

                                            // 允许实例化而不使用 'new' 关键字
                                            if ( !( this instanceof jQuery.Event ) ) {
                                                返回新的 jQuery.Event( src, props );
                                            }

                                            // 事件对象
                                            如果 ( src && src.type ) {
                                                this.originalEvent = src;
                                                this.type = src.type;

                                                // 冒泡文档的事件可能已被标记为已阻止
                                                // 通过一个处理程序降低树；反映正确的价值。
                                                this.isDefaultPrevented = src.defaultPrevented ||
                                                    src.defaultPrevented === undefined &&

                                                    // 支持：仅 Android <=2.3
                                                    src.returnValue === 假？
			返回真：
			返回假；

                                                // 创建目标属性
                                                // 支持：Safari <=6 - 7 only
                                                // 目标不应是文本节点 (#504, #13143)
                                                this.target = ( src.target && src.target.nodeType === 3 ) ？
			src.target.parentNode ：
			src.target;

                                                this.currentTarget = src.currentTarget;
                                                this.relatedTarget = src.relatedTarget;

                                                // 事件类型
                                            } 别的 {
                                                this.type = src;
                                            }

                                            // 将显式提供的属性放到事件对象上
                                            如果（道具）{
                                                jQuery.extend( this, props );
                                            }

                                            // 如果传入事件没有时间戳，则创建一个时间戳
                                            this.timeStamp = src && src.timeStamp || 日期.now();

                                            // 标记为固定
                                            这个[ jQuery.expando ] = true;
                                        };

// jQuery.Event 基于 ECMAScript 语言绑定指定的 DOM3 事件
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
                                        jQuery.Event.prototype = {
                                            构造函数：jQuery.Event，
	isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
                                            isImmediatePropagationStopped: returnFalse,
                                            isSimulated：假，

	防止默认：函数（）{
                                            var e = this.originalEvent;

                                            this.isDefaultPrevented = returnTrue;

                                            if ( e && !this.isSimulated ) {
                                                e.preventDefault();
                                            }
                                        },
                                        停止传播：函数（）{
                                            var e = this.originalEvent;

                                            this.isPropagationStopped = returnTrue;

                                            if ( e && !this.isSimulated ) {
                                                e.stopPropagation();
                                            }
                                        },
                                        停止立即传播：函数（）{
                                            var e = this.originalEvent;

                                            this.isImmediatePropagationStopped = returnTrue;

                                            if ( e && !this.isSimulated ) {
                                                e.stopImmediatePropagation();
                                            }

                                            this.stopPropagation();
                                        }
                                    };

// 包括所有常见的事件道具，包括 KeyEvent 和 MouseEvent 特定道具
                                        jQuery.each({
                                            altKey：真，
	气泡：真实，
	可取消：真，
	改变触摸：真实，
	ctrlKey: 真,
        细节：真实，
	事件阶段：真，
	元键：真，
	pageX：真实，
	pageY：真实，
	shiftKey：真，
	观点：真实，
                                    “字符”：真实，
	代码：真实，
	字符代码：真，
	关键：真的，
	键码：真，
	按钮：真实，
	按钮：真实，
	客户X：是的，
	客户：真的，
	offsetX：真，
	offsetY：真，
	指针 ID：真，
	指针类型：真，
	屏幕X：真实，
	screenY：真实，
	目标触摸：真，
	toElement: 真,
        触摸：真实，
	其中：真实
                                    }, jQuery.event.addProp );

                                        jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
                                            jQuery.event.special[ 类型 ] = {

                                                // 如果可能，使用原生事件，这样模糊/聚焦序列是正确的
                                                设置：函数（）{

                                                // 声明第一个处理程序
                                                // dataPriv.set( this, "focus", ... )
                                                // dataPriv.set( this, "blur", ... )
                                                杠杆原生（这个，类型，expectSync）；

                                                // 返回 false 以允许调用者进行正常处理
                                                返回假；
                                            },
                                            触发器：函数（）{

                                                // 触发前强制设置
                                                杠杆原生（这个，类型）；

                                                // 返回非 false 以允许正常的事件路径传播
                                                返回真；
                                            },

                                            // 抑制原生焦点或模糊，因为它已经被触发
                                            // 在杠杆原生中。
                                            _默认：函数（）{
                                                返回真；
                                            },

                                            委托类型：委托类型
                                        };
                                        });

// 使用鼠标悬停/退出和事件时间检查创建鼠标进入/离开事件
// 以便事件委托在 jQuery 中工作。
// 对 pointerenter/pointerleave 和 pointerover/pointerout 执行相同操作
//
// 支持：仅 Safari 7
// Safari 发送 mouseenter 过于频繁；看：
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// 用于错误的描述（它也存在于旧的 Chrome 版本中）。
                                        jQuery.each({
                                            mouseenter: "鼠标悬停",
                                            mouseleave: "mouseout",
                                            指针输入：“指针”，
	指针离开：“指针”
                                    }，功能（原点，修复）{
                                            jQuery.event.special[ 原点 ] = {
                                                委托类型：修复，
		绑定类型：修复，

		句柄：函数（事件）{
                                                无功，
				目标 = 这个，
				相关 = event.relatedTarget,
                    handleObj = event.handleObj;

                                                // 对于 mouseenter/leave，如果相关在目标之外，则调用处理程序。
                                                // 注意：如果鼠标离开/进入浏览器窗口，则没有相关目标
                                                if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
                                                    event.type = handleObj.origType;
                                                    ret = handleObj.handler.apply( this, arguments );
                                                    event.type = 修复；
                                                }
                                                返回 ret;
                                            }
                                        };
                                        });

                                        jQuery.fn.extend({

                                            上：函数（类型，选择器，数据，fn）{
                                            return on( this, types, selector, data, fn );
                                        },
                                        一：函数（类型，选择器，数据，fn）{
                                            return on( this, types, selector, data, fn, 1 );
                                        },
                                        关闭：功能（类型，选择器，fn）{
                                            var handleObj，类型；
		if ( types && types.preventDefault && types.handleObj ) {

            // ( 事件 ) 分派 jQuery.Event
            handleObj = types.handleObj;
            jQuery( types.delegateTarget ).off(
                handleObj.namespace ?
                    handleObj.origType + "." + handleObj.namespace ：
					handleObj.origType,
                        handleObj.selector,
                        handleObj.handler
        );
            返回这个；
        }
                                            if ( typeof types === "object" ) {

                                                // ( 类型对象 [, 选择器] )
                                                for（输入类型）{
                                                    this.off(类型，选择器，类型[类型]);
                                                }
                                                返回这个；
                                            }
                                            if ( 选择器 === false || typeof 选择器 === "函数" ) {

                                                // ( 类型 [, fn] )
                                                fn = 选择器；
			选择器 = 未定义；
                                            }
                                            如果（ fn === 假）{
                                                fn = returnFalse;
                                            }
                                            返回 this.each( function() {
                                                jQuery.event.remove( this, types, fn, selector );
                                            });
                                        }
                                    });


                                        无功

                                        // 支持: IE <=10 - 11, Edge 12 - 13 only
                                        // 在 IE/Edge 中使用正则表达式组会导致严重的减速。
                                        // 参见 https://connect.microsoft.com/IE/feedback/details/1736512/
                                        rnoInnerhtml = /<script|<style|<link/i,

                                            // 已检查=“已检查”或已检查
                                            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
                                            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// 优先使用 tbody 而非其父表来包含新行
                                        函数操作目标（元素，内容）{
                                            if ( nodeName( elem, "table" ) &&
                                                nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

                                                返回 jQuery( elem ).children( "tbody" )[ 0 ] || 元素;
                                            }

                                            返回元素；
                                        }

// 替换/恢复脚本元素的 type 属性以实现安全的 DOM 操作
                                        函数 disableScript( elem ) {
                                            elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
                                            返回元素；
                                        }
                                        功能恢复脚本（元素）{
                                            if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
                                                elem.type = elem.type.slice( 5 );
                                            } 别的 {
                                                elem.removeAttribute("类型");
                                            }

                                            返回元素；
                                        }

                                        函数 cloneCopyEvent( src, dest ) {
                                            var i、l、类型、pdataOld、udataOld、udataCur、事件；

	如果（dest.nodeType ！== 1）{
                                                返回;
                                            }

                                            // 1. 复制私有数据：事件、处理程序等。
                                            如果（dataPriv.hasData（src））{
                                                pdataOld = dataPriv.get(src);
                                                事件 = pdataOld.events;

                                                如果（事件）{
                                                    dataPriv.remove( dest, "处理事件" );

                                                    for（输入事件）{
                                                        for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                                                            jQuery.event.add( dest, type, events[ type ][ i ] );
                                                        }
                                                    }
                                                }
                                            }

                                            // 2. 复制用户数据
                                            如果（dataUser.hasData（src））{
                                                udataOld = dataUser.access(src);
                                                udataCur = jQuery.extend({}, udataOld);

                                                dataUser.set(dest, udataCur);
                                            }
                                        }

// 修复 IE 错误，参见支持测试
                                        功能修复输入（源，目标）{
                                            var nodeName = dest.nodeName.toLowerCase();

                                            // 无法保持克隆复选框或单选按钮的选中状态。
                                            if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
                                                dest.checked = src.checked;

                                                // 克隆选项时无法将选中的选项恢复到默认选中状态
                                            } else if ( nodeName === "input" || nodeName === "textarea" ) {
                                                dest.defaultValue = src.defaultValue;
                                            }
                                        }

                                        函数domManip（集合，参数，回调，忽略）{

                                            // 展平任何嵌套数组
                                            args = flat( args );

                                            var 片段，第一个，脚本，hasScripts，节点，文档，
		我 = 0,
            l = 集合.长度，
		iNoClone = l - 1,
            值 = args[0],
            valueIsFunction = isFunction( value );

                                            // 我们不能在 WebKit 中克隆包含已检查的节点片段
                                            if ( valueIsFunction ||
                                                ( l > 1 && typeof value === "string" &&
                                                    !support.checkClone && rchecked.test( value ) ) ) {
                                                return collection.each(函数(索引){
                                                    var self = collection.eq( index );
                                                    如果（值IsFunction）{
                                                        args[ 0 ] = value.call( this, index, self.html() );
                                                    }
                                                    domManip( self, args, callback, 忽略);
                                                });
                                            }

                                            如果 ( l ) {
                                                fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignore );
                                                第一个 = fragment.firstChild;

                                                if ( fragment.childNodes.length === 1 ) {
                                                    片段=第一个；
                                                }

                                                // 需要新内容或对被忽略元素感兴趣才能调用回调
                                                如果（第一个 || 忽略）{
                                                    脚本 = jQuery.map( getAll( fragment, "script" ), disableScript );
                                                    hasScripts = 脚本长度；

                                                    // 使用原始片段作为最后一项
                                                    // 而不是第一个，因为它可以结束
                                                    // 在某些情况下被错误地清空 (#8070)。
                                                    for ( ; i < l; i++ ) {
                                                        节点 = 片段；

				如果（我！== iNoClone）{
                                                            node = jQuery.clone( node, true, true );

                                                            // 保留对克隆脚本的引用以供以后恢复
                                                            if ( hasScripts ) {

                                                                // 支持：仅 Android <=4.0，仅 PhantomJS 1
                                                                // push.apply(_, arraylike) 抛出古老的 WebKit
                                                                jQuery.merge( scripts, getAll( node, "script" ) );
                                                            }
                                                        }

                                                        callback.call( collection[ i ], node, i );
                                                    }

                                                    if ( hasScripts ) {
                                                        doc = scripts[scripts.length - 1].ownerDocument;

                                                        // 重新启用脚本
                                                        jQuery.map( 脚本, restoreScript );

                                                        // 在第一次插入文档时评估可执行脚本
                                                        for ( i = 0; i < hasScripts; i++ ) {
                                                            节点 = 脚本[我];
                                                            if ( rscriptType.test( node.type || "" ) &&
                                                                !dataPriv.access( node, "globalEval" ) &&
                                                                jQuery.contains（文档，节点））{

                                                                if ( node.src && ( node.type || "" ).toLowerCase() !== "module" ) {

                                                                    // 可选的 AJAX 依赖项，但如果不存在则不会运行脚本
                                                                    如果 ( jQuery._evalUrl && !node.noModule ) {
                                                                        jQuery._evalUrl( node.src, {
                                                                            随机数：node.nonce || node.getAttribute("nonce")
                                                                    }, 文档 );
                                                                    }
                                                                } 别的 {
                                                                    DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            返回集合；
                                        }

                                        函数删除（元素，选择器，保持数据）{
                                            无功节点，
		节点 = 选择器？jQuery.filter( selector, elem ) : elem,
                                                我 = 0;

                                            for ( ; ( node = nodes[ i ] ) != null; i++ ) {
                                                if ( !keepData && node.nodeType === 1 ) {
                                                    jQuery.cleanData(getAll(node));
                                                }

                                                如果（节点。父节点）{
                                                    if ( keepData && isAttached( node ) ) {
                                                        setGlobalEval( getAll( node, "script" ) );
                                                    }
                                                    node.parentNode.removeChild( node );
                                                }
                                            }

                                            返回元素；
                                        }

                                        jQuery.extend({
                                            htmlPrefilter：函数（html）{
                                            返回html；
                                        },

                                        克隆：函数（元素，dataAndEvents，deepDataAndEvents）{
                                            var i, l, srcElements, destElements,
                                                clone = elem.cloneNode( true ),
                                                inPage = isAttached( elem );

                                            // 修复 IE 克隆问题
                                            if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
                                                !jQuery.isXMLDoc( elem ) ) {

                                                // 出于性能原因，我们在这里避开 Sizzle：https://jsperf.com/getall-vs-sizzle/2
                                                destElements = getAll(克隆);
                                                srcElements = getAll( elem );

                                                for ( i = 0, l = srcElements.length; i < l; i++ ) {
                                                    fixInput( srcElements[ i ], destElements[ i ] );
                                                }
                                            }

                                            // 将事件从原始复制到克隆
                                            如果（数据和事件）{
                                                如果（deepDataAndEvents）{
                                                    srcElements = srcElements || getAll( elem );
                                                    destElements = destElements || getAll(克隆);

                                                    for ( i = 0, l = srcElements.length; i < l; i++ ) {
                                                        cloneCopyEvent( srcElements[ i ], destElements[ i ] );
                                                    }
                                                } 别的 {
                                                    cloneCopyEvent( elem, clone );
                                                }
                                            }

                                            // 保存脚本评估历史
                                            destElements = getAll( clone, "script" );
                                            如果（destElements.length > 0）{
                                                setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
                                            }

                                            // 返回克隆集
                                            返回克隆；
                                        },

                                        清洁数据：函数（元素）{
                                            var 数据、元素、类型、
			special = jQuery.event.special,
                我 = 0;

                                            for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
                                                如果（接受数据（元素））{
                                                    如果（（数据= elem[dataPriv.expando]））{
                                                        如果（数据。事件）{
                                                            for（输入data.events）{
                                                                如果（特殊[类型]）{
                                                                    jQuery.event.remove( elem, type );

                                                                    // 这是避免 jQuery.event.remove 开销的捷径
                                                                } 别的 {
                                                                    jQuery.removeEvent( elem, type, data.handle );
                                                                }
                                                            }
                                                        }

                                                        // 支持：Chrome <=35 - 45+
                                                        // 分配 undefined 而不是使用 delete，参见 Data#remove
                                                        elem[ dataPriv.expando ] = 未定义；
                                                    }
                                                    if ( elem[ dataUser.expando ] ) {

                                                        // 支持：Chrome <=35 - 45+
                                                        // 分配 undefined 而不是使用 delete，参见 Data#remove
                                                        elem[ dataUser.expando ] = 未定义；
                                                    }
                                                }
                                            }
                                        }
                                    });

                                        jQuery.fn.extend({
                                            分离：功能（选择器）{
                                            返回删除（这个，选择器，真）；
                                        },

                                        删除：函数（选择器）{
                                            返回删除（这个，选择器）；
                                        },

                                        文本：函数（值）{
                                            返回访问（这个，函数（值）{
                                                返回值 === 未定义？
				jQuery.text( 这个 ) ：
				this.empty().each( function() {
                    if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                        this.textContent = 值；
                    }
                });
                                            }, null, value, arguments.length );
                                        },

                                        附加：函数（）{
                                            return domManip( this, arguments, function( elem ) {
                                                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                                                    var target = operationTarget( this, elem );
                                                    target.appendChild( elem );
                                                }
                                            });
                                        },

                                        前置：函数（）{
                                            return domManip( this, arguments, function( elem ) {
                                                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                                                    var target = operationTarget( this, elem );
                                                    target.insertBefore( elem, target.firstChild );
                                                }
                                            });
                                        },

                                        之前：函数（）{
                                            return domManip( this, arguments, function( elem ) {
                                                如果（this.parentNode）{
                                                    this.parentNode.insertBefore( elem, this );
                                                }
                                            });
                                        },

                                        之后：函数（）{
                                            return domManip( this, arguments, function( elem ) {
                                                如果（this.parentNode）{
                                                    this.parentNode.insertBefore( elem, this.nextSibling );
                                                }
                                            });
                                        },

                                        空：函数（）{
                                            变种元素，
			我 = 0;

                                            for ( ; ( elem = this[ i ] ) != null; i++ ) {
                                                如果（ elem.nodeType === 1 ）{

                                                    // 防止内存泄漏
                                                    jQuery.cleanData( getAll( elem, false ) );

                                                    // 删除所有剩余的节点
                                                    elem.textContent = "";
                                                }
                                            }

                                            返回这个；
                                        },

                                        克隆：函数（dataAndEvents，deepDataAndEvents）{
                                            dataAndEvents = dataAndEvents == null ？假：数据和事件；
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

                                            返回 this.map( function() {
                                                返回 jQuery.clone( this, dataAndEvents, deepDataAndEvents );
                                            });
                                        },

                                        html：函数（值）{
                                            返回访问（这个，函数（值）{
                                                var elem = this[ 0 ] || {}，
				我 = 0,
                    l = this.length;

                                                if ( value === undefined && elem.nodeType === 1 ) {
                                                    返回 elem.innerHTML;
                                                }

                                                // 看看我们是否可以走捷径，只使用innerHTML
                                                if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                                                    !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

                                                    value = jQuery.htmlPrefilter( value );

                                                    尝试 {
                                                        for ( ; i < l; i++ ) {
                                                            elem = this[ i ] || {};

                                                            // 删除元素节点，防止内存泄漏
                                                            如果（ elem.nodeType === 1 ）{
                                                                jQuery.cleanData( getAll( elem, false ) );
                                                                elem.innerHTML = 值；
                                                            }
                                                        }

                                                        元素 = 0;

                                                        // 如果使用innerHTML抛出异常，使用fallback方法
                                                    }赶上（e）{}
                                                }

                                                如果（元素）{
                                                    this.empty().append(value);
                                                }
                                            }, null, value, arguments.length );
                                        },

                                        替换：函数（）{
                                            var 忽略 = [];

                                            // 进行更改，用新内容替换每个未被忽略的上下文元素
                                            return domManip( this, arguments, function( elem ) {
                                                var parent = this.parentNode;

                                                if ( jQuery.inArray( this, 忽略 ) < 0 ) {
                                                    jQuery.cleanData(getAll(this));
                                                    如果（父母）{
                                                        parent.replaceChild( elem, this );
                                                    }
                                                }

                                                // 强制回调调用
                                            }, 忽略);
                                        }
                                    });

                                        jQuery.each({
                                            appendTo: "追加",
                                            prependTo: "前置",
                                            insertBefore: "之前",
                                            insertAfter: "之后",
                                            替换全部：“替换为”
                                    }, 函数（名称，原始）{
                                            jQuery.fn[ 名称 ] = 函数（选择器）{
                                                变种元素，
			ret = [],
                插入 = jQuery( 选择器),
                last = insert.length - 1,
                我 = 0;

                                                for ( ; i <= last; i++ ) {
                                                    elems = i === 最后？这：this.clone(真);
                                                    jQuery(插入[i])[原始](elems);

                                                    // 支持：仅 Android <=4.0，仅 PhantomJS 1
                                                    // .get() 因为 push.apply(_, arraylike) 抛出了古老的 WebKit
                                                    push.apply(ret, elems.get());
                                                }

                                                返回 this.pushStack( ret );
                                            };
                                        });
                                        var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

                                        var getStyles = function( elem ) {

                                            // 支持: IE <=11 only, Firefox <=30 (#15098, #14150)
                                            // IE 抛出在弹出窗口中创建的元素
                                            // FF 同时通过“defaultView.getComputedStyle”抛出框架元素
                                            var view = elem.ownerDocument.defaultView;

                                            如果 ( !view || !view.opener ) {
                                                视图 = 窗口；
                                            }

                                            返回 view.getComputedStyle( elem );
                                        };

                                        var 交换 = 函数（元素，选项，回调）{
                                            var ret, 名称,
                                                旧 = {};

                                            // 记住旧值，并插入新值
                                            for（选项中的名称）{
                                                旧[名称] = elem.style[名称];
                                                elem.style[名称] = 选项[名称];
                                            }

                                            ret = callback.call( elem );

                                            // 恢复旧值
                                            for（选项中的名称）{
                                                elem.style[name] = old[name];
                                            }

                                            返回 ret;
                                        };


                                        var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



（ 功能（） {

                                            // 执行 pixelPosition 和 boxSizingReliable 测试只需要一种布局
                                            // 所以它们同时执行以保存第二次计算。
                                            函数计算样式测试（）{

                                                // 这是一个单例，我们只需要执行一次
                                                如果（！div）{
                                                    返回;
                                                }

                                                container.style.cssText = "位置：绝对；左：-11111px；宽度：60px；" +
			“边距顶部：1px；填充：0；边框：0”；
		div.style.cssText =
			“位置：相对；显示：块；框大小：边框框；溢出：滚动；” +
			“边距：自动；边框：1px；填充：1px；” +
			“宽度：60%；顶部：1%”；
		documentElement.appendChild( container ).appendChild( div );

                                                var divStyle = window.getComputedStyle( div );
                                                pixelPositionVal = divStyle.top !== "1%";

                                                // 支持：仅 Android 4.0 - 4.3，Firefox <=3 - 44
                                                可靠MarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

                                                // 支持：仅 Android 4.0 - 4.3，Safari <=9.1 - 10.1，iOS <=7.0 - 9.3
                                                // 一些样式返回百分比值，即使它们不应该
                                                div.style.right = "60%";
                                                pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

                                                // 支持：仅 IE 9 - 11
                                                // 检测 box-sizing:border-box 元素的内容尺寸误报
                                                boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

                                                // 支持：仅 IE 9
                                                // 检测溢出：滚动扭曲（gh-3699）
                                                // 支持：Chrome <=64
                                                // 当缩放影响 offsetWidth (gh-4029) 时不要被欺骗
                                                div.style.position = "绝对";
                                                scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

                                                documentElement.removeChild(容器);

                                                // 将 div 置为空，这样它就不会被存储在内存中
                                                // 它也将是一个检查已经执行的标志
                                                div = 空；
                                            }

                                            函数roundPixelMeasures（测量）{
                                                返回 Math.round( parseFloat( measure ) );
                                            }

                                            var pixelPositionVal、boxSizingReliableVal、scrollboxSizeVal、pixelBoxStylesVal、
		可靠TrDimensionsVal，可靠MarginLeftVal，
		container = document.createElement( "div" ),
            div = document.createElement("div");

                                            // 在有限的（非浏览器）环境中尽早完成
                                            如果（！div.style）{
                                                返回;
                                            }

                                            // 支持: IE <=9 - 11 only
                                            // 克隆元素的样式影响克隆的源元素 (#8908)
                                            div.style.backgroundClip = "内容框";
                                            div.cloneNode( true ).style.backgroundClip = "";
                                            support.clearCloneStyle = div.style.backgroundClip === "content-box";

                                            jQuery.extend( 支持，{
                                                boxSizingReliable：函数（）{
                                                    计算样式测试（）；
			返回 boxSizingReliableVal;
                                                },
                                                像素框样式：函数（）{
                                                    计算样式测试（）；
			返回 pixelBoxStylesVal;
                                                },
                                                像素位置：函数（）{
                                                    计算样式测试（）；
			返回像素位置值；
                                                },
                                                可靠保证金左：功能（）{
                                                    计算样式测试（）；
			返回reliableMarginLeftVal；
                                                },
                                                滚动框大小：函数（）{
                                                    计算样式测试（）；
			返回滚动框大小值；
                                                },

                                                // 支持：IE 9 - 11+，Edge 15 - 18+
                                                // IE/Edge 错误报告具有宽度/高度的表格行的 `getComputedStyle`
                                                // 在 CSS 中设置，而 `offset*` 属性报告正确的值。
                                                // IE 9 中的行为比新版本更微妙并且通过
                                                // 此测试的一些版本；确保不要让它通过那里！
                                                //
                                                // 支持：Firefox 70+
                                                // 只有 Firefox 包含边框宽度
                                                // 在计算维度中。(gh-4529)
                                                可靠TrDimensions：函数（）{
                                                    var 表、tr、trChild、trStyle；
			如果（reliableTrDimensionsVal == null）{
                                                        table = document.createElement("table");
                                                        tr = document.createElement("tr");
                                                        trChild = document.createElement("div");

                                                        table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                                                        tr.style.cssText = "边框：1px 实心";

                                                        // 支持：Chrome 86+
                                                        // 通过 cssText 设置的高度没有得到应用。
                                                        // 计算出的高度然后返回为 0。
                                                        tr.style.height = "1px";
                                                        trChild.style.height = "9px";

                                                        // 支持：Android 8 Chrome 86+
                                                        // 在我们的 bodyBackground.html iframe 中，
                                                        // 所有 div 元素的显示设置为“内联”，
                                                        // 仅在 Android 8 Chrome 86 中会导致问题。
                                                        // 确保 div 是 display: block
                                                        // 解决了这个问题。
                                                        trChild.style.display = "块";

                                                        文档元素
                                                            .appendChild(表)
                                                            .appendChild(tr)
                                                            .appendChild(trChild);

                                                        trStyle = window.getComputedStyle(tr);
                                                        可靠TrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
                                                            parseInt( trStyle.borderTopWidth, 10 ) +
                                                            parseInt(trStyle.borderBottomWidth, 10)) === tr.offsetHeight;

                                                        documentElement.removeChild( table );
                                                    }
                                                    返回reliableTrDimensionsVal；
                                                }
                                            });
                                        })();


                                        函数 curCSS（元素，名称，计算）{
                                            var 宽度，minWidth，maxWidth，ret，

                                            // 支持：火狐 51+
                                            // 在以某种方式计算之前检索样式
                                            // 修复了获取错误值的问题
                                            // 在分离的元素上
                                            风格 = elem.style;

                                            计算 = 计算 || getStyles( elem );

                                            // 需要 getPropertyValue 用于：
                                            // .css('filter')（仅限 IE 9，#12537）
                                            // .css('--customProperty) (#3144)
                                            如果（计算）{
                                                ret = 计算.getPropertyValue( 名称 ) || 计算[名称];

                                                if ( ret === "" && !isAttached( elem ) ) {
                                                    ret = jQuery.style( elem, name );
                                                }

                                                // 向“Dean Edwards 的绝妙黑客”致敬
                                                // Android 浏览器返回某些值的百分比，
                                                // 但宽度似乎是可靠的像素。
                                                // 这违反了 CSSOM 草案规范：
                                                // https://drafts.c​​sswg.org/cssom/#resolved-values
                                                if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

                                                    // 记住原始值
                                                    宽度 = 样式.宽度；
			minWidth = style.minWidth;
                                                    maxWidth = style.maxWidth;

                                                    // 放入新值以获取计算值
                                                    style.minWidth = style.maxWidth = style.width = ret;
                                                    ret = 计算宽度；

                                                    // 恢复改变的值
                                                    style.width = 宽度；
			style.minWidth = minWidth;
                                                    style.maxWidth = maxWidth;
                                                }
                                            }

                                            返回 ret !== 未定义？

                                            // 支持: IE <=9 - 11 only
                                            // IE 以整数形式返回 zIndex 值。
                                            ret + "" :
                                            退；
                                        }


                                        函数 addGetHookIf( conditionFn, hookFn ) {

                                            // 定义钩子，我们将在第一次运行时检查它是否真的需要。
                                            返回 {
                                                得到：函数（）{
                                                    如果（条件Fn（））{

                                                        // 不需要钩子（或者由于它不能使用它
                                                        // 缺少依赖项），将其删除。
                                                        删除这个.get;
                                                        返回;
                                                    }

                                                    // 需要钩子；重新定义它，以便不再执行支持测试。
                                                    return ( this.get = hookFn ).apply( this, arguments );
                                                }
                                            };
                                        }


                                        var cssPrefixes = [ "Webkit", "Moz", "ms" ],
                                            emptyStyle = document.createElement( "div" ).style,
                                            供应商道具 = {};

// 返回一个以供应商为前缀的属性或未定义
                                        函数 vendorPropName( 名称 ) {

                                            // 检查供应商前缀名称
                                            var capName = name[0].toUpperCase() + name.slice(1),
                                                i = cssPrefixes.length;

                                            当我 -  ） {
                                                名称 = cssPrefixes[ i ] + capName;
                                                如果（空样式中的名称）{
                                                    返回名称；
                                                }
                                            }
                                        }

// 返回一个潜在映射的 jQuery.cssProps 或供应商前缀属性
                                        函数 finalPropName( 名称 ) {
                                            var final = jQuery.cssProps[名称] || 供应商道具[名称];

                                            如果（最终）{
                                                返回最终；
                                            }
                                            如果（空样式中的名称）{
                                                返回名称；
                                            }
                                            return vendorProps[ name ] = vendorPropName( name ) || 姓名;
                                        }


                                        无功

                                        // 如果 display 为 none 或以 table 开头，则可交换
                                        // 除了“table”、“table-cell”或“table-caption”
                                        // 在这里查看显示值：https://developer.mozilla.org/en-US/docs/CSS/display
                                        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
                                            rcustomProp = /^--/,
                                            cssShow = { 位置：“绝对”，可见性：“隐藏”，显示：“块”}，
	cssNormalTransform = {
        字母间距：“0”，
		字体重量：“400”
                                    };

                                        函数 setPositiveNumber( _elem, 值, 减法) {

                                            // 任何相对 (+/-) 值已经
                                            // 此时标准化
                                            var 匹配 = rcssNum.exec( value );
                                            返回匹配？

                                            // 防止未定义的“减法”，例如，当在 cssHooks 中使用时
                                            Math.max( 0, 匹配[ 2 ] - ( 减|| 0 ) ) + ( 匹配[ 3 ] || "px" ) :
                                            价值;
                                        }

                                        函数 boxModelAdjustment（元素，维度，框，isBorderBox，样式，计算值）{
                                            var i = 尺寸 === "宽度" ? 1 : 0,
                                                额外 = 0,
                                                增量 = 0;

                                            // 可能不需要调整
                                            如果（框===（isBorderBox？“边框”：“内容”））{
                                                返回0；
                                            }

                                            对于 ( ; i < 4; i += 2 ) {

                                                // 两种盒子模型都排除了边距
                                                如果（框===“边距”）{
                                                    delta += jQuery.css( elem, box + cssExpand[ i ], true, style );
                                                }

                                                // 如果我们使用内容框到达这里，我们正在寻找“填充”或“边框”或“边距”
                                                如果（！isBorderBox）{

                                                    // 添加填充
                                                    delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, 样式);

                                                    // 对于“边框”或“边距”，添加边框
                                                    如果（框！==“填充”）{
                                                        delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

                                                        // 但仍要跟踪它，否则
                                                    } 别的 {
                                                        extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                                                    }

                                                    // 如果我们使用边框框（内容 + 填充 + 边框）到达这里，我们正在寻找“内容”或
                                                    // “填充”或“边距”
                                                } 别的 {

                                                    // 对于“内容”，减去填充
                                                    如果（框===“内容”）{
                                                        delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, style );
                                                    }

                                                    // 对于“内容”或“填充”，减去边框
                                                    如果（框！==“边距”）{
                                                        delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                                                    }
                                                }
                                            }

                                            // 通过提供计算值在请求时考虑正内容框滚动条
                                            如果 ( !isBorderBox && 计算值 >= 0 ) {

                                                // offsetWidth/offsetHeight 是内容、内边距、滚动间距和边框的四舍五入总和
                                                // 假设为整数滚动槽，减去其余部分并向下舍入
                                                delta += Math.max( 0, Math.ceil(
                                                    elem[“偏移”+维度[0].toUpperCase()+维度.slice(1)]-
                                                    计算值 -
                                                增量 -
                                                额外的 -
                                                0.5

                                                // 如果 offsetWidth/offsetHeight 未知，那么我们就无法确定 content-box scroll gutter
                                                // 使用明确的零来避免 NaN (gh-3964)
                                            ) ) || 0;
                                            }

                                            返回增量；
                                        }

                                        函数getWidthOrHeight（元素，维度，额外）{

                                            // 从计算样式开始
                                            var 样式 = getStyles( elem ),

                                                // 为避免强制回流，仅在需要时才获取 boxSizing (gh-4322)。
                                                // 伪造内容框，直到我们知道它需要知道真正的值。
                                                boxSizingNeeded = !support.boxSizingReliable() || 额外的，
		isBorderBox = boxSizingNeeded &&
            jQuery.css( elem, "boxSizing", false, 样式) === "border-box",
            valueIsBorderBox = isBorderBox,

            val = curCSS( elem, 尺寸, 样式),
            offsetProp = "offset" + 维度[0].toUpperCase() +维度.slice(1);

                                            // 支持：火狐<=54
                                            // 返回一个混淆的非像素值或假装无知，视情况而定。
                                            如果（rnumnonpx.test（val））{
                                                如果（！额外）{
                                                    返回值；
                                                }
                                                val = "自动";
                                            }


                                            // 支持：仅 IE 9 - 11
                                            // 当框大小不可靠时使用 offsetWidth/offsetHeight。
                                            // 在这些情况下，可以相信计算出的值是边界框。
                                            if ( ( !support.boxSizingReliable() && isBorderBox ||

                                                    // 支持：IE 10 - 11+，Edge 15 - 18+
                                                    // IE/Edge 错误报告具有宽度/高度的表格行的 `getComputedStyle`
                                                    // 在 CSS 中设置，而 `offset*` 属性报告正确的值。
                                                    // 有趣的是，在某些情况下 IE 9 不会遇到这个问题。
                                                    !support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

                                                    // 当值为 "auto" 时回退到 offsetWidth/offsetHeight
                                                    // 这发生在没有显式设置的内联元素 (gh-3571)
                                                    val === "自动" ||

                                                    // 支持：仅 Android <=4.1 - 4.3
                                                    // 也对误报的内联尺寸使用 offsetWidth/offsetHeight (gh-3602)
                                                    !parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

                                                // 确保元素可见且已连接
                                                elem.getClientRects().length ) {

                                                isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

                                                // 在可用的情况下，offsetWidth/offsetHeight 近似边框尺寸。
                                                // 如果不可用（例如，SVG），假设不可靠的框大小并解释
                                                // 检索值作为内容框维度。
                                                valueIsBorderBox = elem 中的 offsetProp；
		如果（值IsBorderBox）{
                                                    val = elem[ offsetProp ];
                                                }
                                            }

                                            // 规范化 "" 和 auto
                                            val = parseFloat( val ) || 0;

                                            // 调整元素的盒子模型
                                            返回 ( val +
                                                boxModelAdjustment(
                                                    元素，
			尺寸，
			额外的 || （ isBorderBox ？“边框”：“内容”），
			值IsBorderBox，
			样式，

                                            // 提供当前计算的大小以请求滚动装订线计算 (gh-3589)
                                            值
                                        )
                                        ) + "像素";
                                        }

                                        jQuery.extend({

                                            // 添加样式属性挂钩以覆盖默认值
                                            // 获取和设置样式属性的行为
                                            cssHooks：{
                                            不透明度：{
                                                得到：函数（元素，计算）{
                                                    如果（计算）{

                                                        // 我们应该总是从不透明度中得到一个数字
                                                        var ret = curCSS( elem, "opacity" );
                                                        返回 ret === "" ? "1" : ret;
                                                    }
                                                }
                                            }
                                        },

                                        // 不要自动将“px”添加到这些可能无单位的属性中
                                        css编号：{
                                        “animationIterationCount”：真，
                                        “列数”：真，
                                        “fillOpacity”：真，
                                        “flexGrow”：真，
                                        “flexShrink”：真，
                                        “fontWeight”：真，
                                        “gridArea”：真，
                                        “网格列”：真，
                                        “gridColumnEnd”：真，
                                        “gridColumnStart”：真，
                                        “gridRow”：真，
                                        “gridRowEnd”：真，
                                        “gridRowStart”：真，
                                        “线高度”：真，
                                        “不透明度”：真实，
                                        “订单”：真实，
                                        “孤儿”：真的，
                                        “寡妇”：真的，
                                        “zIndex”：真，
                                        “缩放”：真
                                        },

                                        // 添加您希望之前修复其名称的属性
                                        // 设置或获取值
                                        cssProps: {},

                                        // 获取并设置 DOM 节点的 style 属性
                                        样式：函数（元素，名称，值，额外）{

                                            // 不要在文本和注释节点上设置样式
                                            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
                                                返回;
                                            }

                                            // 确保我们使用正确的名称
                                            var ret，类型，钩子，
			origName = camelCase( name ),
                isCustomProp = rcustomProp.test( 名称 ),
                风格 = elem.style;

                                            // 确保我们使用正确的名称。我们不
                                            // 想要查询该值是否为 CSS 自定义属性
                                            // 因为它们是用户定义的。
                                            如果（！isCustomProp）{
                                                name = finalPropName( origName );
                                            }

                                            // 获取带前缀版本的钩子，然后是不带前缀的版本
                                            钩子 = jQuery.cssHooks[ 名称 ] || jQuery.cssHooks[ origName ];

                                            // 检查我们是否设置了一个值
                                            如果（值！== 未定义）{
                                                类型 = 类型值；

                                                // 将 "+=" 或 "-=" 转换为相对数字 (#7345)
                                                if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
                                                    value = adjustCSS( elem, name, ret );

                                                    // 修复错误 #9237
                                                    类型=“数字”；
                                                }

                                                // 确保未设置 null 和 NaN 值 (#7116)
                                                if ( value == null || value !== value ) {
                                                    返回;
                                                }

                                                // 如果传入的是数字，则添加单位（某些 CSS 属性除外）
                                                // 当我们只自动追加时，可以在 jQuery 4.0 中删除 isCustomProp 检查
                                                // “px”到几个硬编码值。
                                                if ( type === "number" && !isCustomProp ) {
                                                    值 += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
                                                }

                                                // background-* props 影响原始克隆的值
                                                if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
                                                    风格[名称] =“继承”；
                                                }

                                                // 如果提供了钩子，则使用该值，否则只需设置指定值
                                                if ( !hooks || !( "set" in hooks ) ||
                                                    ( value = hooks.set( elem, value, extra ) ) !== undefined ) {

                                                    如果 ( isCustomProp ) {
                                                        style.setProperty( 名称, 值);
                                                    } 别的 {
                                                        样式[名称] = 值；
                                                    }
                                                }

                                            } 别的 {

                                                // 如果提供了钩子，则从那里获取非计算值
                                                if ( hooks && "get" in hooks &&
                                                    ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

                                                    返回 ret;
                                                }

                                                // 否则只从样式对象中获取值
                                                返回样式[名称];
                                            }
                                        },

                                        CSS：功能（元素，名称，额外的，样式）{
                                            var val, num, 钩子,
                                                origName = camelCase( name ),
                                                isCustomProp = rcustomProp.test( name );

                                            // 确保我们使用正确的名称。我们不
                                            // 如果是 CSS 自定义属性，要修改该值
                                            // 因为它们是用户定义的。
                                            如果（！isCustomProp）{
                                                name = finalPropName( origName );
                                            }

                                            // 尝试带前缀的名称后跟不带前缀的名称
                                            钩子 = jQuery.cssHooks[ 名称 ] || jQuery.cssHooks[ origName ];

                                            // 如果提供了钩子，则从那里获取计算值
                                            if ( hooks && "get" in hooks ) {
                                                val = hooks.get( elem, true, extra );
                                            }

                                            // 否则，如果存在获取计算值的方法，则使用该方法
                                            如果 ( val === 未定义 ) {
                                                val = curCSS( elem, 名称, 样式);
                                            }

                                            // 将“正常”转换为计算值
                                            if ( val === "normal" && cssNormalTransform 中的名称) {
                                                val = cssNormalTransform[名称];
                                            }

                                            // 如果强制或提供限定符并且 val 看起来是数字，则将其设为数字
                                            如果（额外的 === "" || 额外的）{
                                                num = parseFloat( val );
                                                返回额外的 === true || isFinite( num ) ? 数量 || 0：值；
                                            }

                                            返回值；
                                        }
                                    });

                                        jQuery.each( [ "height", "width" ], function( _i, 尺寸) {
                                            jQuery.cssHooks[维度] = {
                                                得到：函数（元素，计算，额外）{
                                                如果（计算）{

                                                    // 如果我们不可见地显示它们，某些元素可以具有尺寸信息
                                                    // 但它必须有一个有益的当前显示样式
                                                    返回 rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

                                                    // 支持：Safari 8+
                                                    // Safari 中的表列具有非零 offsetWidth 和零
                                                    // getBoundingClientRect().width 除非显示改变。
                                                    // 支持：仅 IE <=11
                                                    // 在断开连接的节点上运行 getBoundingClientRect
                                                    // 在 IE 中抛出错误。
                                                    ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
                                                        交换（元素，cssShow，函数（）{
                                                        返回 getWidthOrHeight( elem, 维度, 额外);
                                                    ) :
                                                        getWidthOrHeight( elem, 维度, 额外);
                                                    }
                                                },

                                                设置：功能（元素，价值，额外）{
                                                    var 匹配，
				样式 = getStyles( elem ),

                    // 如果测试有可能失败，则只读取styles.position
                    // 避免强制回流。
                    scrollboxSizeBuggy = !support.scrollboxSize() &&
                        style.position === "绝对",

                    // 为避免强制回流，仅在需要时才获取 boxSizing (gh-3991)
                    boxSizingNeeded = scrollboxSizeBuggy || 额外的，
				isBorderBox = boxSizingNeeded &&
                    jQuery.css( elem, "boxSizing", false, 样式) === "border-box",
                    减去 = 额外？
					boxModelAdjustment(
                        元素，
						尺寸，
						额外的，
						isBorderBox,
                            样式
                                                ) :
                                                    0;

                                                    // 通过将 offset* 与计算和
                                                    // 伪造内容框以获取边框和填充 (gh-3699)
                                                    if ( isBorderBox && scrollboxSizeBuggy ) {
                                                        减法 -= Math.ceil(
                                                            elem[“偏移”+维度[0].toUpperCase()+维度.slice(1)]-
                                                            parseFloat(styles[dimension]) -
                                                        boxModelAdjustment（元素，尺寸，“边框”，假，样式） -
                                                            0.5
                                                    );
                                                    }

                                                    // 如果需要调整值，则转换为像素
                                                    如果（减去&&（匹配= rcssNum.exec（值））&&
                                                    (matches[3] || "px" ) !== "px" ) {

                                                        elem.style[ 维度 ] = 值；
				value = jQuery.css( elem, 维度 );
                                                    }

                                                    返回 setPositiveNumber（元素，值，减去）；
                                                }
                                            };
                                        });

                                            jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
                                                函数（元素，计算）{
                                                如果（计算）{
                                                    return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
                                                        elem.getBoundingClientRect().left -
                                                        交换( elem, { marginLeft: 0 }, function() {
                                                            返回 elem.getBoundingClientRect().left;
                                                        })
                                                    ) + "像素";
                                                }
                                            }
                                        );

// 这些钩子被 animate 用来扩展属性
                                            jQuery.each({
                                                利润： ””，
	填充：“”，
	边框：“宽度”
                                        }, 函数（前缀，后缀）{
                                                jQuery.cssHooks[ 前缀 + 后缀 ] = {
                                                    展开：函数（值）{
                                                    变量 i = 0,
                                                        展开 = {},

                                                        // 如果不是字符串，则假定为单个数字
                                                        零件 = typeof value === "string" ? value.split(" ") : [值];

                                                    for ( ; i < 4; i++ ) {
                                                        扩展 [ 前缀 + cssExpand[ i ] + 后缀 ] =
                                                            部分[我] || 部分[ i - 2 ] || 零件[0];
                                                    }

                                                    回报扩大；
                                                }
                                            };

                                                如果（前缀！==“边距”）{
                                                    jQuery.cssHooks[前缀+后缀].set = setPositiveNumber;
                                                }
                                            });

                                            jQuery.fn.extend({
                                                CSS：函数（名称，值）{
                                                返回访问（这个，函数（元素，名称，值）{
                                                    var 样式，len，
				地图 = {},
                    我 = 0;

                                                    如果 ( Array.isArray( 名称 ) ) {
                                                        样式 = getStyles( elem );
                                                        len = 名称.长度；

				for ( ; i < len; i++ ) {
                    map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                }

                                                        返回地图；
                                                    }

                                                    返回值 !== 未定义 ?
                                                        jQuery.style( elem, name, value ) :
                                                        jQuery.css( elem, name );
                                                }, 名称, 值, 参数.length > 1 );
                                            }
                                        });


                                            函数吐温（元素，选项，道具，结束，缓动）{
                                                return new Tween.prototype.init( elem, options, prop, end, easing );
                                            }
                                            jQuery.Tween = 吐温；

Tween.prototype = {
    构造函数：吐温，
	初始化：函数（元素，选项，道具，结束，缓动，单位）{
                                                this.elem = elem;
                                                this.prop = 道具;
                                                this.easing = 缓动 || jQuery.easing._default;
                                                this.options = 选项；
		this.start = this.now = this.cur();
                                                this.end = 结束;
                                                this.unit = 单位 || ( jQuery.cssNumber[ prop ] ? "" : "px" );
                                            },
                                            当前：函数（）{
                                                var hooks = Tween.propHooks[ this.prop ];

                                                返回 hooks && hooks.get ？
			hooks.get( this ) :
                                                Tween.propHooks._default.get( this );
                                            },
                                            运行：函数（百分比）{
                                                变缓，
			hooks = Tween.propHooks[ this.prop ];

                                                如果（this.options.duration）{
                                                    this.pos =eased = jQuery.easing[this.easing](
                                                        百分比, this.options.duration * 百分比, 0, 1, this.options.duration
                                                    );
                                                } 别的 {
                                                    this.pos = 缓和 = 百分比；
                                                }
                                                this.now = ( this.end - this.start ) * 缓和 + this.start;

                                                如果（this.options.step）{
                                                    this.options.step.call( this.elem, this.now, this );
                                                }

                                                如果（钩子&&钩子.set）{
                                                    钩子.set(this);
                                                } 别的 {
                                                    Tween.propHooks._default.set( this );
                                                }
                                                返回这个；
                                            }
                                        };

                                            Tween.prototype.init.prototype = Tween.prototype;

                                            Tween.propHooks = {
                                                _默认： {
                                                得到：函数（补间）{
                                                    变量结果；

                                                    // 当元素不是 DOM 元素时，直接在元素上使用属性，
                                                    // 或者当不存在匹配的样式属性时。
                                                    if ( tween.elem.nodeType !== 1 ||
                                                        tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
                                                        返回 tween.elem[ tween.prop ];
                                                    }

                                                    // 将空字符串作为第三个参数传递给 .css 将自动
                                                    // 尝试 parseFloat 并在解析失败时回退到字符串。
                                                    // 诸如“10px”之类的简单值被解析为Float；
                                                    // 诸如“rotate(1rad)”之类的复杂值按原样返回。
                                                    结果 = jQuery.css( tween.elem, tween.prop, "" );

                                                    // 空字符串、null、undefined 和 "auto" 转换为 0。
                                                    返回！结果 || 结果 ===“自动”？0：结果；
                                                },
                                                设置：函数（补间）{

                                                    // 使用 step hook 进行反向兼容。
                                                    // 如果有 cssHook，则使用它。
                                                    // 如果可用，使用 .style 并在可用时使用普通属性。
                                                    如果（jQuery.fx.step[tween.prop]）{
                                                        jQuery.fx.step[ tween.prop ]( tween );
                                                    } else if ( tween.elem.nodeType === 1 && (
                                                        jQuery.cssHooks[ tween.prop ] ||
                                                        tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
                                                        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                                                    } 别的 {
                                                        tween.elem[ tween.prop ] = tween.now;
                                                    }
                                                }
                                            }
                                        };

// 支持：仅 IE <=9
// 在断开连接的节点上设置事物的基于恐慌的方法
                                            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                                                设置：函数（补间）{
                                                if ( tween.elem.nodeType && tween.elem.parentNode ) {
                                                    tween.elem[ tween.prop ] = tween.now;
                                                }
                                            }
                                        };

                                            jQuery.easing = {
                                                线性：函数（p）{
                                                返回 p;
                                            },
                                            摆动：函数（p）{
                                                返回 0.5 - Math.cos( p * Math.PI ) / 2;
                                            },
                                            _默认：“摆动”
                                        };

                                            jQuery.fx = Tween.prototype.init;

// 向后兼容 <1.8 扩展点
                                            jQuery.fx.step = {};




                                            无功
                                            fxNow，进行中，
	rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

                                            函数调度（）{
                                                如果（进行中）{
                                                    if ( document.hidden === false && window.requestAnimationFrame ) {
                                                        window.requestAnimationFrame( schedule );
                                                    } 别的 {
                                                        window.setTimeout( schedule, jQuery.fx.interval );
                                                    }

                                                    jQuery.fx.tick();
                                                }
                                            }

// 同步创建的动画将同步运行
                                            函数 createFxNow() {
                                                window.setTimeout（函数（）{
                                                    fxNow = 未定义；
                                                });
                                                返回 ( fxNow = Date.now() );
                                            }

// 生成参数以创建标准动画
                                            函数 genFx（类型，包含宽度）{
                                                var 其中，
		我 = 0,
            attrs = { 高度：类型 };

                                                // 如果我们包含宽度，则步长值为 1 以执行所有 cssExpand 值，
                                                // 否则 step 值为 2 以跳过 Left 和 Right
                                                包含宽度 = 包含宽度？1：0；
	for ( ; i < 4; i += 2 - includeWidth ) {
        which = cssExpand[ i ];
        attrs[“边距”+ which ] = attrs[“padding”+ which ] = type;
    }

                                                如果（包括宽度）{
                                                    attrs.opacity = attrs.width = 类型；
                                                }

                                                返回属性；
                                            }

                                            函数 createTween（值，道具，动画）{
                                                变量吐温，
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
            指数 = 0,
            长度 = 集合.长度；
	for ( ; 索引 < 长度; 索引++ ) {
        if ( ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

            // 我们完成了这个属性
            返回补间；
        }
    }
                                            }

                                            函数 defaultPrefilter( elem, props, opts ) {
                                                var prop、value、toggle、hook、oldfire、propTween、restoreDisplay、display、
		isBox = "width" in props || 道具中的“高度”，
		动画 = 这个，
		原点 = {},
            风格 = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree( elem ),
            dataShow = dataPriv.get( elem, "fxshow" );

                                                // 队列跳过动画劫持了 fx 钩子
                                                如果（！opts.queue）{
                                                    hooks = jQuery._queueHooks( elem, "fx" );
                                                    if ( hooks.unqueued == null ) {
                                                        hooks.unqueued = 0;
                                                        oldfire = hooks.empty.fire;
                                                        hooks.empty.fire = function() {
                                                            如果（！hooks.unqueued）{
                                                                旧火（）；
                                                            }
                                                        };
                                                    }
                                                    hooks.unqueued++;

                                                    动画。总是（功能（）{

                                                        // 确保在完成之前调用完整的处理程序
                                                        动画。总是（功能（）{
                                                            hooks.unqueued--;
                                                            如果 ( !jQuery.queue( elem, "fx" ).length ) {
                                                                hooks.empty.fire();
                                                            }
                                                        });
                                                    });
                                                }

                                                // 检测显示/隐藏动画
                                                for（道具中的道具）{
                                                    价值=道具[道具];
                                                    如果（rfxtypes.test（值））{
                                                        删除道具[道具];
                                                        切换 = 切换 || 值 ===“切换”；
			如果（值===（隐藏？“隐藏”：“显示”））{

                                                            // 如果这是一个“表演”，则假装是隐藏的
                                                            // 还有来自停止显示/隐藏的数据
                                                            if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
                                                                隐藏 = 真；

                                                                // 忽略所有其他无操作显示/隐藏数据
                                                            } 别的 {
                                                                继续;
                                                            }
                                                        }
                                                        orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
                                                    }
                                                }

                                                // 如果这是一个类似于 .hide().hide() 的无操作，则退出
                                                propTween = !jQuery.isEmptyObject( props );
                                                if ( !propTween && jQuery.isEmptyObject( orig ) ) {
                                                    返回;
                                                }

                                                // 在框动画期间限制“溢出”和“显示”样式
                                                if ( isBox && elem.nodeType === 1 ) {

                                                    // 支持：IE <=9 - 11, Edge 12 - 15
                                                    // 记录所有 3 个溢出属性，因为 IE 不会推断速记
                                                    // 从相同值的overflowX 和overflowY 和Edge 只是镜像
                                                    // 那里的 overflowX 值。
                                                    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

                                                    // 识别显示类型，在 CSS 级联上更喜欢旧的显示/隐藏数据
                                                    restoreDisplay = dataShow && dataShow.display;
                                                    如果（恢复显示==空）{
                                                        restoreDisplay = dataPriv.get( elem, "display" );
                                                    }
                                                    display = jQuery.css( elem, "display" );
                                                    如果（显示===“无”）{
                                                        如果（恢复显示）{
                                                            显示 = 恢复显示；
                                                        } 别的 {

                                                            // 通过临时强制可见性获取非空值
                                                            showHide( [ elem ], true );
                                                            restoreDisplay = elem.style.display || 恢复显示；
				display = jQuery.css( elem, "display" );
                                                            showHide( [ elem ] );
                                                        }
                                                    }

                                                    // 将内联元素动画化为内联块
                                                    if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
                                                        if ( jQuery.css( elem, "float" ) === "none" ) {

                                                            // 在纯显示/隐藏动画结束时恢复原始显示值
                                                            如果（！propTween）{
                                                                动画完成（功能（）{
                                                                    style.display = restoreDisplay;
                                                                });
                                                                如果（恢复显示==空）{
                                                                    display = style.display;
                                                                    restoreDisplay = display === "none" ? ““ ： 展示;
                                                                }
                                                            }
                                                            style.display = "inline-block";
                                                        }
                                                    }
                                                }

                                                如果（选择。溢出）{
                                                    style.overflow = "隐藏";
                                                    动画。总是（功能（）{
                                                        style.overflow = opts.overflow[ 0 ];
                                                        style.overflowX = opts.overflow[1];
                                                        style.overflowY = opts.overflow[2];
                                                    });
                                                }

                                                // 实现显示/隐藏动画
                                                propTween = 假；
	for ( prop in orig ) {

        // 此元素动画的一般显示/隐藏设置
        如果（！propTween）{
            如果（数据显示）{
                如果（数据显示中的“隐藏”）{
                    hidden = dataShow.hidden;
                }
            } 别的 {
                dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
            }

            // 为切换存储隐藏/可见，所以 `.stop().toggle()` “反转”
            如果（切换）{
                dataShow.hidden = !hidden;
            }

            // 在动画之前显示元素
            如果（隐藏）{
                showHide( [ elem ], true );
            }

            /* eslint-disable no-loop-func */

            动画完成（功能（）{

                /* eslint-enable no-loop-func */

                // “隐藏”动画的最后一步实际上是隐藏元素
                如果（！隐藏）{
                    showHide( [ elem ] );
                }
                dataPriv.remove( elem, "fxshow" );
                for ( prop in orig ) {
                    jQuery.style( elem, prop, orig[ prop ] );
                }
            });
        }

        // 每个属性设置
        propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
        如果（！（数据显示中的道具））{
            dataShow[ prop ] = propTween.start;
            如果（隐藏）{
                propTween.end = propTween.start;
                propTween.start = 0;
            }
        }
    }
                                            }

                                            函数 propFilter( props, specialEasing ) {
                                                var 索引、名称、缓动、值、钩子；

                                                // camelCase, specialEasing 和 expand cssHook pass
                                                for（道具中的索引）{
                                                    name = camelCase( index );
                                                    easing = specialEasing[名称];
                                                    价值=道具[索引];
                                                    如果（数组.isArray（值））{
                                                        缓动 = 值 [1];
                                                        价值=道具[索引]=价值[0]；
                                                    }

                                                    如果（索引！==名称）{
                                                        道具[名称] = 值；
			删除道具[索引]；
                                                    }

                                                    钩子 = jQuery.cssHooks[名称];
                                                    if ( hooks && "expand" in hooks ) {
                                                        value = hooks.expand( value );
                                                        删除道具[名称];

                                                        // 不完全是 $.extend，这不会覆盖现有的键。
                                                        // 重用“index”，因为我们有正确的“name”
                                                        for ( 索引值 ) {
                                                            如果（！（道具中的索引））{
                                                                道具[索引]=值[索引]；
					specialEasing[索引] = 缓动；
                                                            }
                                                        }
                                                    } 别的 {
                                                        specialEasing[名称] = 缓动；
                                                    }
                                                }
                                            }

                                            函数动画（元素，属性，选项）{
                                                变量结果，
		停了下来，
		指数 = 0,
            长度 = Animation.prefilters.length，
		deferred = jQuery.Deferred().always(function() {

            // 不匹配 :animated 选择器中的 elem
            删除tick.elem；
        }),
            滴答 = 函数（）{
                                                    如果（停止）{
                                                        返回假；
                                                    }
                                                    var currentTime = fxNow || createFxNow(),
                                                        剩余 = Math.max( 0, animation.startTime + animation.duration - currentTime ),

                                                        // 支持：仅 Android 2.3
                                                        // 古老的崩溃错误不允许我们使用 `1 - ( 0.5 || 0 )` (#12497)
                                                        温度 = 剩余 / 动画持续时间 || 0,
                                                        百分比 = 1 - 温度，
				指数 = 0,
                    长度 = animation.tweens.length;

                                                    for ( ; 索引 < 长度; 索引++ ) {
                                                        动画.补间[索引].运行（百分比）；
                                                    }

                                                    deferred.notifyWith( elem, [ 动画, 百分比, 剩余 ] );

                                                    // 如果还有更多事情要做，让步
                                                    如果（百分比 < 1 && 长度）{
                                                        返回剩余；
                                                    }

                                                    // 如果这是一个空动画，合成一个最终的进度通知
                                                    如果（！长度）{
                                                        deferred.notifyWith( elem, [ animation, 1, 0 ] );
                                                    }

                                                    // 解析动画并报告其结论
                                                    deferred.resolveWith( elem, [ animation ] );
                                                    返回假；
                                                },
                                                动画 = deferred.promise( {
                                                    elem: elem,
                                                    道具：jQuery.extend({}, 属性),
                                                    选项：jQuery.extend(真，{
                                                    特别缓动：{}，
				缓动：jQuery.easing._default
                                                }， 选项 ），
			原始属性：属性，
			原始选项：选项，
			开始时间：fxNow || createFxNow(),
                                                    持续时间：options.duration，
			补间：[],
                                                    createTween：函数（道具，结束）{
                                                    var tween = jQuery.Tween( elem, animation.opts, prop, end,
                                                        animation.opts.specialEasing[ prop ] || 动画.opts.easing);
                                                    动画.tweens.push( tween );
                                                    返回补间；
                                                },
                                                停止：函数（gotoEnd）{
                                                    无功指数 = 0,

                                                        // 如果我们要到最后，我们要运行所有的补间
                                                        // 否则我们跳过这部分
                                                        长度 = gotoEnd ? 动画.tweens.length : 0;
                                                    如果（停止）{
                                                        返回这个；
                                                    }
                                                    停止=真；
				for ( ; 索引 < 长度; 索引++ ) {
                    动画.补间[索引].run(1);
                }

                                                    // 解决我们播放最后一帧的时间；否则，拒绝
                                                    如果（转到结束）{
                                                        deferred.notifyWith( elem, [ animation, 1, 0 ] );
                                                        deferred.resolveWith( elem, [ animation, gotoEnd ] );
                                                    } 别的 {
                                                        deferred.rejectWith( elem, [ animation, gotoEnd ] );
                                                    }
                                                    返回这个；
                                                }
                                            }),
                                                props = animation.props;

                                                propFilter( props, animation.opts.specialEasing );

                                                for ( ; 索引 < 长度; 索引++ ) {
                                                    result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
                                                    如果（结果）{
                                                        if ( isFunction( result.stop ) ) {
                                                            jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
                                                                结果.stop.bind(结果);
                                                        }
                                                        返回结果；
                                                    }
                                                }

                                                jQuery.map( props, createTween, animation );

                                                if ( isFunction( animation.opts.start ) ) {
                                                    animation.opts.start.call( elem, animation );
                                                }

                                                // 从选项附加回调
                                                动画片
                                                    .progress( animation.opts.progress )
                                                    .done( animation.opts.done, animation.opts.complete )
                                                    .fail(animation.opts.fail)
                                                    .always(animation.opts.always);

                                                jQuery.fx.timer(
                                                    jQuery.extend( 打勾，{
                                                    elem: elem,
                                                        动画：动画，
			队列：animation.opts.queue
                                                })
                                            );

                                                返回动画；
                                            }

                                            jQuery.Animation = jQuery.extend( 动画，{

                                                补间：{
                                                “*”：[函数（道具，价值）{
                                                        var tween = this.createTween( prop, value );
                                                        adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
                                                        返回补间；
                                                    ]]
                                                    },

                                                    补间：函数（道具，回调）{
                                                        如果（isFunction（道具））{
                                                            回调 = 道具；
			道具 = [ "*" ];
                                                        } 别的 {
                                                            props = props.match( rnothtmlwhite );
                                                        }

                                                        var 道具，
			指数 = 0,
                长度 = props.length;

                                                        for ( ; 索引 < 长度; 索引++ ) {
                                                            prop = props[索引];
                                                            Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
                                                            Animation.tweeners[ prop ].unshift( callback );
                                                        }
                                                    },

                                                    预过滤器：[ defaultPrefilter ]，

	前置过滤器：函数（回调，前置）{
                                                        如果（前置）{
                                                            Animation.prefilters.unshift(回调);
                                                        } 别的 {
                                                            Animation.prefilters.push(回调);
                                                        }
                                                    }
                                                });

                                                jQuery.speed = 函数（速度，缓动，fn）{
                                                    var opt = speed && typeof speed === "object" ? jQuery.extend( {}, 速度) : {
                                                        完整： fn || !fn && 缓动 ||
                                                    isFunction( speed ) && speed,
                                                        持续时间：速度，
		缓动： fn && 缓动 || 缓动 && !isFunction( 缓动 ) && 缓动
                                                };

                                                    // 如果 fx 关闭，则转到结束状态
                                                    如果（jQuery.fx.off）{
                                                        opt.duration = 0;

                                                    } 别的 {
                                                        if ( typeof opt.duration !== "number" ) {
                                                            if ( jQuery.fx.speeds 中的 opt.duration ) {
                                                                opt.duration = jQuery.fx.speeds[ opt.duration ];

                                                            } 别的 {
                                                                opt.duration = jQuery.fx.speeds._default;
                                                            }
                                                        }
                                                    }

                                                    // 标准化 opt.queue - true/undefined/null -> "fx"
                                                    if ( opt.queue == null || opt.queue === true ) {
                                                        opt.queue = "fx";
                                                    }

                                                    // 排队
                                                    opt.old = opt.complete;

                                                    opt.complete = function() {
                                                        if ( isFunction( opt.old ) ) {
                                                            opt.old.call( 这个 );
                                                        }

                                                        如果（选择队列）{
                                                            jQuery.dequeue( 这个, opt.queue );
                                                        }
                                                    };

                                                    返回选择；
                                                };

                                                jQuery.fn.extend({
                                                    淡入淡出：功能（速度，到，缓动，回调）{

                                                    // 将不透明度设置为 0 后显示所有隐藏元素
                                                    返回 this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

                                                        // 动画到指定的值
                                                        .end().animate( { opacity: to }, speed, easing, callback );
                                                },
                                                动画：函数（道具，速度，缓动，回调）{
                                                    var empty = jQuery.isEmptyObject(prop),
                                                        optall = jQuery.speed（速度，缓动，回调），
			doAnimation = 函数（）{

                                                        // 操作 prop 的副本，这样每个属性的缓动不会丢失
                                                        var anim = Animation( this, jQuery.extend( {}, prop ), optall );

                                                        // 清空动画，或完成立即解决
                                                        if (empty || dataPriv.get( this, "finish" ) ) {
                                                            动画停止（真）；
                                                        }
                                                    };

                                                    doAnimation.finish = doAnimation;

                                                    返回空 || optall.queue === 假？
			this.each( doAnimation ) :
                                                    this.queue( optall.queue, doAnimation );
                                                },
                                                停止：函数（类型，clearQueue，gotoEnd）{
                                                    var stopQueue = 函数（钩子）{
                                                        var stop = hooks.stop;
                                                        删除 hooks.stop;
                                                        停止（转到结束）；
                                                    };

                                                    if ( typeof type !== "string" ) {
                                                        gotoEnd = clearQueue;
                                                        clearQueue = 类型；
			类型 = 未定义；
                                                    }
                                                    如果（清除队列）{
                                                        this.queue( type || "fx", [] );
                                                    }

                                                    返回 this.each( function() {
                                                        var dequeue = true,
                                                            index = type != null && type + "queueHooks",
                                                            计时器 = jQuery.timers,
                                                            数据 = dataPriv.get( this );

                                                        如果（索引）{
                                                            如果（数据[索引]&&数据[索引].停止）{
                                                                停止队列（数据[索引]）；
                                                            }
                                                        } 别的 {
                                                            for（数据中的索引）{
                                                                if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                                                                    停止队列（数据[索引]）；
                                                                }
                                                            }
                                                        }

                                                        for ( index = timers.length; index--; ) {
                                                            if ( timers[ index ].elem === this &&
                                                                ( type == null || timers[ index ].queue === type ) ) {

                                                                定时器[索引].anim.stop(gotoEnd);
                                                                出队=假；
					timers.splice( index, 1 );
                                                            }
                                                        }

                                                        // 如果最后一步不是强制的，则开始队列中的下一个。
                                                        // 计时器当前将调用它们的完整回调，即
                                                        // 将出列，但前提是它们是 gotoEnd。
                                                        如果（出队 || !gotoEnd ）{
                                                            jQuery.dequeue( this, type );
                                                        }
                                                    });
                                                },
                                                完成：功能（类型）{
                                                    如果（类型！==假）{
                                                        类型 = 类型 || "fx";
                                                    }
                                                    返回 this.each( function() {
                                                        变量索引，
				数据 = dataPriv.get( this ),
                    队列=数据[类型+“队列”]，
				钩子 = 数据 [ 类型 + "queueHooks" ],
                    计时器 = jQuery.timers,
                    长度 = 队列？队列长度：0；

                                                        // 在私有数据上启用完成标志
                                                        data.finish = true;

                                                        // 先清空队列
                                                        jQuery.queue( 这个, 类型, [] );

                                                        如果（钩子&& hooks.stop）{
                                                            hooks.stop.call( this, true );
                                                        }

                                                        // 寻找任何活动的动画，并完成它们
                                                        for ( index = timers.length; index--; ) {
                                                            if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                                                                定时器[索引].anim.stop(true);
                                                                timers.splice( index, 1 );
                                                            }
                                                        }

                                                        // 在旧队列中查找任何动画并完成它们
                                                        for ( index = 0; index < 长度; index++ ) {
                                                            如果（队列[索引]&&队列[索引].完成）{
                                                                队列[索引].finish.call(this);
                                                            }
                                                        }

                                                        //关闭完成标志
                                                        删除数据。完成；
                                                    });
                                                }
                                            });

                                                jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
                                                    var cssFn = jQuery.fn[名称];
                                                    jQuery.fn[ 名称 ] = 函数（速度，缓动，回调）{
                                                        返回速度 == 空 || typeof speed === "boolean" ?
                                                            cssFn.apply( this, arguments ) :
                                                            this.animate( genFx( name, true ), speed, easing, callback );
                                                    };
                                                });

// 生成自定义动画的快捷方式
                                                jQuery.each({
                                                    向下滑动：genFx（“显示”），
	幻灯片：genFx（“隐藏”），
	幻灯片切换：genFx（“切换”），
	淡入：{不透明度：“显示”}，
	淡出：{不透明度：“隐藏”}，
	淡入淡出：{不透明度：“切换”}
                                            }, 函数（名称，道具）{
                                                    jQuery.fn[ 名称 ] = 函数（速度，缓动，回调）{
                                                        返回 this.animate( props, speed, easing, callback );
                                                    };
                                                });

                                                jQuery.timers = [];
                                                jQuery.fx.tick = 函数（）{
                                                    无功定时器，
		我 = 0,
            定时器 = jQuery.timers;

                                                    fxNow = Date.now();

                                                    for ( ; i < timers.length; i++ ) {
                                                        计时器 = 计时器 [我];

                                                        // 运行计时器并在完成后安全地移除它（允许外部移除）
                                                        if ( !timer() && timers[ i ] === timer ) {
                                                            timers.splice( i--, 1 );
                                                        }
                                                    }

                                                    如果（！定时器。长度）{
                                                        jQuery.fx.stop();
                                                    }
                                                    fxNow = 未定义；
                                                };

                                                jQuery.fx.timer = 函数（定时器）{
                                                    jQuery.timers.push(定时器);
                                                    jQuery.fx.start();
                                                };

                                                jQuery.fx.interval = 13;
                                                jQuery.fx.start = 函数（）{
                                                    如果（进行中）{
                                                        返回;
                                                    }

                                                    进行中 = 真；
	日程（）;
                                                };

                                                jQuery.fx.stop = 函数（）{
                                                    进行中 = 空；
                                                };

                                                jQuery.fx.speeds = {
                                                    慢：600，
	快速：200，

                                                // 默认速度
                                                _默认值：400
                                            };


// 基于 Clint Helfers 的插件，经许可。
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
                                                jQuery.fn.delay = 函数（时间，类型）{
                                                    时间 = jQuery.fx ？jQuery.fx.speeds[ 时间 ] || 时间：时间；
	类型 = 类型 || "fx";

                                                    返回 this.queue（类型，函数（下一个，钩子）{
                                                        var timeout = window.setTimeout( next, time );
                                                        hooks.stop = function() {
                                                            window.clearTimeout(超时);
                                                        };
                                                    });
                                                };


（ 功能（） {
                                                    var input = document.createElement( "input" ),
                                                        select = document.createElement( "select" ),
                                                        opt = select.appendChild( document.createElement( "option" ) );

                                                    input.type = "复选框";

                                                    // 支持：仅 Android <=4.3
                                                    // 复选框的默认值应该是“on”
                                                    support.checkOn = input.value !== "";

                                                    // 支持：仅 IE <=11
                                                    // 必须访问 selectedIndex 才能选择默认选项
                                                    support.optSelected = opt.selected;

                                                    // 支持：仅 IE <=11
                                                    // 一个输入变成收音机后失去它的价值
                                                    input = document.createElement("输入");
                                                    input.value = "t";
                                                    input.type = "收音机";
                                                    support.radioValue = input.value === "t";
                                                })();


                                                var boolHook，
	attrHandle = jQuery.expr.attrHandle;

                                                jQuery.fn.extend({
                                                    属性：函数（名称，值）{
                                                    return access(this, jQuery.attr, name, value, arguments.length > 1 );
                                                },

                                                removeAttr：函数（名称）{
                                                    返回 this.each( function() {
                                                        jQuery.removeAttr( this, name );
                                                    });
                                                }
                                            });

                                                jQuery.extend({
                                                    属性：函数（元素，名称，值）{
                                                    var ret, 钩子,
                                                        nType = elem.nodeType;

                                                    // 不要在文本、注释和属性节点上获取/设置属性
                                                    if ( nType === 3 || nType === 8 || nType === 2 ) {
                                                        返回;
                                                    }

                                                    // 当不支持属性时回退到 prop
                                                    if ( typeof elem.getAttribute === "undefined" ) {
                                                        返回 jQuery.prop( elem, name, value );
                                                    }

                                                    // 属性钩子由小写版本决定
                                                    // 如果定义了钩子，则获取必要的钩子
                                                    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
                                                        hooks = jQuery.attrHooks[name.toLowerCase()] ||
                                                            ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
                                                    }

                                                    如果（值！== 未定义）{
                                                        如果（值 === 空）{
                                                            jQuery.removeAttr( elem, name );
                                                            返回;
                                                        }

                                                        if ( hooks && "set" in hooks &&
                                                            ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                                                            返回 ret;
                                                        }

                                                        elem.setAttribute( 名称, 值 + "" );
                                                        返回值；
                                                    }

                                                    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
                                                        返回 ret;
                                                    }

                                                    ret = jQuery.find.attr( elem, name );

                                                    // 不存在的属性返回null，我们归一化为undefined
                                                    返回 ret == null ？未定义 : ret;
                                                },

                                                攻击钩子：{
                                                    类型： {
                                                        设置：函数（元素，值）{
                                                            if ( !support.radioValue && value === "radio" &&
                                                                节点名称（元素，“输入”））{
                                                                var val = elem.value;
                                                                elem.setAttribute("类型", 值);
                                                                如果 ( val ) {
                                                                    elem.value = val;
                                                                }
                                                                返回值；
                                                            }
                                                        }
                                                    }
                                                },

                                                removeAttr：函数（元素，值）{
                                                    变量名，
			我 = 0,

                // 属性名称可以包含非 HTML 空白字符
                // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                attrNames = value && value.match( rnothtmlwhite );

                                                    if ( attrNames && elem.nodeType === 1 ) {
                                                        while ( ( name = attrNames[ i++ ] ) ) {
                                                            elem.removeAttribute( 名称 );
                                                        }
                                                    }
                                                }
                                            });

// 布尔属性的钩子
                                                boolHook = {
                                                    设置：函数（元素，值，名称）{
                                                    如果（值 === 假）{

                                                        // 设置为 false 时删除布尔属性
                                                        jQuery.removeAttr( elem, name );
                                                    } 别的 {
                                                        elem.setAttribute( 名称, 名称 );
                                                    }
                                                    返回名称；
                                                }
                                            };

                                                jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), 函数( _i, name ) {
                                                    var getter = attrHandle[名称] || jQuery.find.attr;

                                                    attrHandle[名称] = 函数（元素，名称，isXML）{
                                                        var ret, 句柄,
                                                            lowercaseName = name.toLowerCase();

                                                        如果（！isXML）{

                                                            // 通过从 getter 中临时删除此函数来避免无限循环
                                                            handle = attrHandle[小写名称];
                                                            attrHandle[小写名称] = ret;
                                                            ret = getter( elem, name, isXML ) != null ?
                                                                小写名称：
				空值;
                                                            attrHandle[小写名称] = 句柄；
                                                        }
                                                        返回 ret;
                                                    };
                                                });




                                                var rfocusable = /^(?:input|select|textarea|button)$/i,
                                                    rclickable = /^(?:a|area)$/i;

                                                jQuery.fn.extend({
                                                    道具：函数（名称，值）{
                                                    return access(this, jQuery.prop, name, value, arguments.length > 1 );
                                                },

                                                removeProp：函数（名称）{
                                                    返回 this.each( function() {
                                                        删除这个[ jQuery.propFix[名称] || 姓名 ];
                                                    });
                                                }
                                            });

                                                jQuery.extend({
                                                    道具：函数（元素，名称，值）{
                                                    var ret, 钩子,
                                                        nType = elem.nodeType;

                                                    // 不要在文本、注释和属性节点上获取/设置属性
                                                    if ( nType === 3 || nType === 8 || nType === 2 ) {
                                                        返回;
                                                    }

                                                    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

                                                        // 修复名称并附加钩子
                                                        名称 = jQuery.propFix[ 名称 ] || 姓名;
                                                        钩子 = jQuery.propHooks[名称];
                                                    }

                                                    如果（值！== 未定义）{
                                                        if ( hooks && "set" in hooks &&
                                                            ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
                                                            返回 ret;
                                                        }

                                                        返回（ elem[ 名称 ] = 值 ）；
                                                    }

                                                    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
                                                        返回 ret;
                                                    }

                                                    返回元素[名称];
                                                },

                                                道具钩子：{
                                                    标签索引：{
                                                        得到：函数（元素）{

                                                            // 支持: IE <=9 - 11 only
                                                            // elem.tabIndex 并不总是返回
                                                            // 未明确设置时的正确值
                                                            // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                                                            // 使用适当的属性检索(#12072)
                                                            var tabindex = jQuery.find.attr( elem, "tabindex" );

                                                            如果（标签索引）{
                                                                返回 parseInt( tabindex, 10 );
                                                            }

                                                            如果 （
					rfocusable.test( elem.nodeName ) ||
                    rclickable.test( elem.nodeName ) &&
                    elem.href
                                                        ){
                                                                返回0；
                                                            }

                                                            返回-1；
                                                        }
                                                    }
                                                },

                                                道具修正：{
                                                    "for": "htmlFor",
		“类”：“类名”
                                                }
                                            });

// 支持：仅 IE <=11
// 访问 selectedIndex 属性
// 强制浏览器尊重选择的设置
// 在选项上
// getter 确保选择了默认选项
// 当在 optgroup 中时
// 此代码禁用 eslint 规则“no-unused-expressions”
// 因为它考虑了这样的加入 noop
                                                如果（！support.optSelected）{
                                                    jQuery.propHooks.selected = {
                                                        得到：函数（元素）{

                                                        /* eslint no-unused-expressions: "off" */

                                                        var parent = elem.parentNode;
                                                        如果（父&& parent.parentNode）{
                                                            parent.parentNode.selectedIndex;
                                                        }
                                                        返回空；
                                                    },
                                                    设置：函数（元素）{

                                                        /* eslint no-unused-expressions: "off" */

                                                        var parent = elem.parentNode;
                                                        如果（父母）{
                                                            parent.selectedIndex;

                                                            如果（父节点。父节点）{
                                                                parent.parentNode.selectedIndex;
                                                            }
                                                        }
                                                    }
                                                };
                                                }

                                                jQuery.each( [
                                                    "标签索引",
	“只读”，
                                            “最长长度”，
	"单元格间距",
        "单元格填充",
        "行跨度",
        "colSpan",
        "使用地图",
	“框架边框”，
                                            “内容可编辑”
                                            ]， 功能（） {
                                                    jQuery.propFix[this.toLowerCase()] = this;
                                                });




                                                // 根据 HTML 规范去除和折叠空白
                                                // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
                                                函数 stripAndCollapse( 值 ) {
                                                    var 标记 = value.match( rnothtmlwhite ) || [];
                                                    返回tokens.join("");
                                                }


                                                函数 getClass( elem ) {
                                                    return elem.getAttribute && elem.getAttribute("class") || "";
                                                }

                                                函数 classesToArray( 值 ) {
                                                    如果（数组.isArray（值））{
                                                        返回值；
                                                    }
                                                    if ( typeof value === "string" ) {
                                                        返回值.match( rnothtmlwhite ) || [];
                                                    }
                                                    返回 [];
                                                }

                                                jQuery.fn.extend({
                                                    添加类：函数（值）{
                                                    var 类、elem、cur、curValue、clazz、j、finalValue、
			我 = 0;

                                                    如果 ( isFunction( 值 ) ) {
                                                        返回 this.each( 函数( j ) {
                                                            jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
                                                        });
                                                    }

                                                    classes = classesToArray( value );

                                                    如果（类。长度）{
                                                        while ( ( elem = this[ i++ ] ) ) {
                                                            curValue = getClass( elem );
                                                            cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

                                                            如果（当前）{
                                                                j = 0;
                                                                while ( ( clazz = classes[ j++ ] ) ) {
                                                                    if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                                                                        cur += clazz + " ";
                                                                    }
                                                                }

                                                                // 仅在不同时分配以避免不必要的渲染。
                                                                finalValue = stripAndCollapse(cur);
                                                                if ( curValue !== finalValue ) {
                                                                    elem.setAttribute( "class", finalValue );
                                                                }
                                                            }
                                                        }
                                                    }

                                                    返回这个；
                                                },

                                                移除类：函数（值）{
                                                    var 类、elem、cur、curValue、clazz、j、finalValue、
			我 = 0;

                                                    如果 ( isFunction( 值 ) ) {
                                                        返回 this.each( 函数( j ) {
                                                            jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
                                                        });
                                                    }

                                                    如果（！参数。长度）{
                                                        返回 this.attr( "class", "" );
                                                    }

                                                    classes = classesToArray( value );

                                                    如果（类。长度）{
                                                        while ( ( elem = this[ i++ ] ) ) {
                                                            curValue = getClass( elem );

                                                            // 这个表达式是为了更好的可压缩性（参见 addClass）
                                                            cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

                                                            如果（当前）{
                                                                j = 0;
                                                                while ( ( clazz = classes[ j++ ] ) ) {

                                                                    // 删除*所有*实例
                                                                    while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
                                                                        cur = cur.replace( " " + clazz + " ", " " );
                                                                    }
                                                                }

                                                                // 仅在不同时分配以避免不必要的渲染。
                                                                finalValue = stripAndCollapse(cur);
                                                                if ( curValue !== finalValue ) {
                                                                    elem.setAttribute( "class", finalValue );
                                                                }
                                                            }
                                                        }
                                                    }

                                                    返回这个；
                                                },

                                                切换类：函数（值，状态值）{
                                                    var type = typeof value,
                                                        isValidValue = type === "string" || Array.isArray(值);

                                                    if ( typeof stateVal === "boolean" && isValidValue ) {
                                                        返回状态值？this.addClass(value): this.removeClass(value);
                                                    }

                                                    如果 ( isFunction( 值 ) ) {
                                                        返回 this.each( 函数( i ) {
                                                            jQuery( 这个 ).toggleClass(
                                                                value.call( this, i, getClass( this ), stateVal ),
                                                                状态值
                                                            );
                                                        });
                                                    }

                                                    返回 this.each( function() {
                                                        var className, i, self, classNames;

                                                        如果 ( isValidValue ) {

                                                            // 切换单个类名
                                                            我 = 0;
                                                            self = jQuery( 这个);
                                                            classNames = classesToArray( value );

                                                            while ( ( ( className = classNames[ i++ ] ) ) {

                                                                // 检查每个给定的类名，空格分隔的列表
                                                                if ( self.hasClass( className ) ) {
                                                                    self.removeClass( className );
                                                                } 别的 {
                                                                    self.addClass( className );
                                                                }
                                                            }

                                                            // 切换整个类名
                                                        } else if ( value === undefined || type === "boolean" ) {
                                                            className = getClass( this );
                                                            如果（类名）{

                                                                // 如果设置，则存储类名
                                                                dataPriv.set( this, "__className__", className );
                                                            }

                                                            // 如果元素有一个类名或者如果我们传递了`false`，
                                                            // 然后删除整个类名（如果有，上面保存了它）。
                                                            // 否则带回之前保存的任何内容（如果有的话），
                                                            // 如果没有存储任何内容，则回退到空字符串。
                                                            如果（this.setAttribute）{
                                                                this.setAttribute("类",
                                                                    类名 || 价值 === 假？
							"" :
                                                                dataPriv.get( this, "__className__" ) || “”
                                                            );
                                                            }
                                                        }
                                                    });
                                                },

                                                hasClass：函数（选择器）{
                                                    var className, elem,
                                                        我 = 0;

                                                    className = " " + 选择器 + " ";
                                                    while ( ( elem = this[ i++ ] ) ) {
                                                        if ( elem.nodeType === 1 &&
                                                            ( " " + stripAndCollapse( getClass( elem ) ) + " ").indexOf( className ) > -1 ) {
                                                            返回真；
                                                        }
                                                    }

                                                    返回假；
                                                }
                                            });




                                                var rreturn = /\r/g;

                                                jQuery.fn.extend({
                                                    价值：功能（价值）{
                                                    var 钩子、ret、valueIsFunction、
			elem = this[0];

                                                    如果（！参数。长度）{
                                                        如果（元素）{
                                                            钩子 = jQuery.valHooks[ elem.type ] ||
                                                                jQuery.valHooks[elem.nodeName.toLowerCase()];

                                                            如果 ( 钩子 &&
                                                                钩子中的“获取”&&
                                                            ( ret = hooks.get( elem, "value" ) ) !== undefined
                                                        ){
                                                                返回 ret;
                                                            }

                                                            ret = elem.value;

                                                            // 处理最常见的字符串情况
                                                            if ( typeof ret === "string" ) {
                                                                返回 ret.replace( rreturn, "" );
                                                            }

                                                            // 处理值为 null/undef 或 number 的情况
                                                            返回 ret == null ？"" : ret;
                                                        }

                                                        返回;
                                                    }

                                                    valueIsFunction = isFunction( value );

                                                    返回 this.each( 函数( i ) {
                                                        变量值；

			if ( this.nodeType !== 1 ) {
                返回;
            }

                                                        如果（值IsFunction）{
                                                            val = value.call( this, i, jQuery( this ).val() );
                                                        } 别的 {
                                                            价值 = 价值；
                                                        }

                                                        // 将 null/undefined 视为 ""; 将数字转换为字符串
                                                        如果 ( val == null ) {
                                                            val = "";

                                                        } else if ( typeof val === "number" ) {
                                                            val + = "";

                                                        } else if ( Array.isArray( val ) ) {
                                                            val = jQuery.map( val, function( value ) {
                                                                返回值 == 空？"" : 值 + "";
                                                            });
                                                        }

                                                        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

                                                        // 如果 set 返回 undefined，则回退到正常设置
                                                        if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
                                                            this.value = val;
                                                        }
                                                    });
                                                }
                                            });

                                                jQuery.extend({
                                                    valHooks：{
                                                    选项： {
                                                        得到：函数（元素）{

                                                            var val = jQuery.find.attr( elem, "value" );
                                                            返回值 != null ?
                                                                价值：

                                                            // 支持: IE <=10 - 11 only
                                                            // option.text 抛出异常 (#14686, #14858)
                                                            // 去除和折叠空白
                                                            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                                                            stripAndCollapse( jQuery.text( elem ) );
                                                        }
                                                    },
                                                    选择： {
                                                        得到：函数（元素）{
                                                            var 值，选项，我，
					选项 = elem.options,
                        索引 = elem.selectedIndex,
                        one = elem.type === "select-one",
                        值 = 一？空值 ： []，
					最大 = 一？索引 + 1 : options.length;

                                                            如果（索引<0）{
                                                                我 = 最大值；

                                                            } 别的 {
                                                                我 = 一？指数：0；
                                                            }

                                                            // 遍历所有选中的选项
                                                            for ( ; i < 最大值; i++ ) {
                                                                选项=选项[我];

                                                                // 支持：仅 IE <=9
                                                                // IE8-9 在表单重置后不更新选择 (#2551)
                                                                if ( ( option.selected || i === index ) &&

                                                                    // 不要返回被禁用或在禁用的 optgroup 中的选项
                                                                    !option.disabled &&
                                                                    ( !option.parentNode.disabled ||
                                                                        !nodeName( option.parentNode, "optgroup" ) ) ) {

                                                                    // 获取选项的具体值
                                                                    值 = jQuery( 选项 ).val();

                                                                    // 我们不需要一个数组来进行一次选择
                                                                    如果一个 ） {
                                                                        返回值；
                                                                    }

                                                                    // 多选返回一个数组
                                                                    值.push(值);
                                                                }
                                                            }

                                                            返回值；
                                                        },

                                                        设置：函数（元素，值）{
                                                            var 选项集，选项，
					选项 = elem.options,
                        值 = jQuery.makeArray( 值),
                        i = options.length;

                                                            当我 -  ） {
                                                                选项=选项[我];

                                                                /* eslint-disable no-cond-assign */

                                                                如果（选项.selected =
                                                                    jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
                                                            ){
                                                                    选项集 = 真；
                                                                }

                                                                /* eslint-enable no-cond-assign */
                                                            }

                                                            // 当设置了不匹配的值时，强制浏览器行为一致
                                                            如果（！选项集）{
                                                                elem.selectedIndex = -1;
                                                            }
                                                            返回值；
                                                        }
                                                    }
                                                }
                                            });

// 收音机和复选框 getter/setter
                                                jQuery.each( [ "radio", "checkbox" ], function() {
                                                    jQuery.valHooks[ 这个 ] = {
                                                        设置：函数（元素，值）{
                                                        如果（数组.isArray（值））{
                                                            返回 ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
                                                        }
                                                    }
                                                };
                                                    如果（！support.checkOn）{
                                                        jQuery.valHooks[ this ].get = function( elem ) {
                                                            返回 elem.getAttribute( "value" ) === null ？"on" : elem.value;
                                                        };
                                                    }
                                                });




// 返回 jQuery 用于仅包含属性


                                                support.focusin = "onfocusin" 在窗口中；


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    stopPropagationCallback = function( e ) {
        e.stopPropagation();
    };

                                                jQuery.extend( jQuery.event, {

                                                    触发器：函数（事件，数据，元素，onlyHandlers）{

                                                    var i、cur、tmp、bubbleType、ontype、handle、special、lastElement、
			eventPath = [ elem || 文档 ]，
			type = hasOwn.call( event, "type" ) ? 事件类型：事件，
			namespaces = hasOwn.call( event, "namespace" ) ？event.namespace.split( "." ) : [];

                                                    cur = lastElement = tmp = elem = elem || 文档;

                                                    // 不要在文本和评论节点上做事件
                                                    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
                                                        返回;
                                                    }

                                                    // 焦点/模糊变形为焦点/焦点；确保我们现在不会解雇他们
                                                    如果（rfocusMorph.test（类型+ jQuery.event.triggered））{
                                                        返回;
                                                    }

                                                    if ( type.indexOf( "." ) > -1 ) {

                                                        // 命名空间触发器；创建正则表达式以匹配 handle() 中的事件类型
                                                        namespaces = type.split( "." );
                                                        type = namespaces.shift();
                                                        命名空间.sort();
                                                    }
                                                    ontype = type.indexOf( ":" ) < 0 && "on" + type;

                                                    // 调用者可以传入一个 jQuery.Event 对象、Object，或者只是一个事件类型字符串
                                                    事件=事件[jQuery.expando]？
			事件 ：
			new jQuery.Event( type, typeof event === "object" && event );

                                                    // 触发位掩码：& 1 用于本机处理程序；& 2 用于 jQuery（始终为真）
                                                    event.isTrigger = onlyHandlers ? 2 : 3;
                                                    event.namespace = namespaces.join(".");
                                                    event.rnamespace = event.namespace ?
                                                        new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
                                                        空值;

                                                    // 清除事件以防它被重用
                                                    event.result = 未定义；
		如果（！事件。目标）{
                                                        event.target = elem;
                                                    }

                                                    // 克隆任何传入的数据并添加事件，创建处理程序 arg 列表
                                                    数据 = 数据 == 空？
			[ 事件 ] ：
			jQuery.makeArray( 数据, [ 事件 ] );

                                                    // 允许特殊事件在线条外绘制
                                                    special = jQuery.event.special[ type ] || {};
                                                    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
                                                        返回;
                                                    }

                                                    // 根据 W3C 事件规范 (#9951)，提前确定事件传播路径
                                                    // 冒泡到文档，然后到窗口；注意全局 ownerDocument var (#9724)
                                                    if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

                                                        气泡类型 = special.delegateType || 类型;
                                                        如果（！rfocusMorph.test（气泡类型+类型））{
                                                            cur = cur.parentNode;
                                                        }
                                                        for ( ; cur; cur = cur.parentNode ) {
                                                            eventPath.push(cur);
                                                            tmp = 电流；
                                                        }

                                                        // 只有在我们需要文档时才添加窗口（例如，不是普通的 obj 或分离的 DOM）
                                                        if ( tmp === ( elem.ownerDocument || document ) ) {
                                                            eventPath.push( tmp.defaultView || tmp.parentWindow || window );
                                                        }
                                                    }

                                                    // 在事件路径上触发处理程序
                                                    我 = 0;
                                                    while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
                                                        lastElement = cur;
                                                        event.type = i > 1 ?
                                                            气泡类型：
				special.bindType || 类型;

                                                        // jQuery 处理程序
                                                        handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
                                                            dataPriv.get( cur, "handle" );
                                                        如果（句柄）{
                                                            handle.apply(cur, data);
                                                        }

                                                        // 本地处理程序
                                                        handle = ontype && cur[ ontype ];
                                                        if ( handle && handle.apply && acceptData( cur ) ) {
                                                            event.result = handle.apply(cur, data);
                                                            if ( event.result === false ) {
                                                                event.preventDefault();
                                                            }
                                                        }
                                                    }
                                                    event.type = 类型；

                                                    // 如果没有人阻止默认操作，请立即执行
                                                    if ( !onlyHandlers && !event.isDefaultPrevented() ) {

                                                        如果 ( ( !special._default ||
                                                                special._default.apply( eventPath.pop(), data ) === false ) &&
                                                            接受数据（元素））{

                                                            // 在目标上调用与事件同名的原生 DOM 方法。
                                                            // 不要在窗口上执行默认操作，这就是全局变量所在的位置 (#6170)
                                                            if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

                                                                // 当我们调用它的 FOO() 方法时不要重新触发 onFOO 事件
                                                                tmp = elem[ ontype ];

                                                                如果 ( tmp ) {
                                                                    elem[ ontype ] = null;
                                                                }

                                                                // 防止再次触发同一事件，因为我们已经在上面冒泡了
                                                                jQuery.event.triggered = 类型；

					if ( event.isPropagationStopped() ) {
                        lastElement.addEventListener( type, stopPropagationCallback );
                    }

                                                                元素[类型]();

                                                                if ( event.isPropagationStopped() ) {
                                                                    lastElement.removeEventListener( type, stopPropagationCallback );
                                                                }

                                                                jQuery.event.triggered = 未定义；

					如果 ( tmp ) {
                                                                    elem[ ontype ] = tmp;
                                                                }
                                                            }
                                                        }
                                                    }

                                                    返回 event.result;
                                                },

                                                // 搭载捐赠者事件以模拟不同的事件
                                                // 仅用于 `focus(in | out)` 事件
                                                模拟：函数（类型，元素，事件）{
                                                    var e = jQuery.extend(
                                                        新的 jQuery.Event(),
                                                        事件，
			{
                类型：类型，
				isSimulated: 真
            }
                                                );

                                                    jQuery.event.trigger( e, null, elem );
                                                }

                                            });

                                                jQuery.fn.extend({

                                                    触发器：函数（类型，数据）{
                                                    返回 this.each( function() {
                                                        jQuery.event.trigger( type, data, this );
                                                    });
                                                },
                                                触发器处理程序：函数（类型，数据）{
                                                    var elem = this[0];
                                                    如果（元素）{
                                                        返回 jQuery.event.trigger( type, data, elem, true );
                                                    }
                                                }
                                            });


// 支持：火狐<=44
// Firefox 没有 focus(in | out) 事件
// 相关票证 - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// 支持：Chrome <=48 - 49，Safari <=9.0 - 9.1
// focus(in | out) 事件在焦点和模糊事件之后触发，
// 这是规范违规 - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// 相关票证 - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
                                                如果（！support.focusin）{
                                                    jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

                                                        // 当有人想要 focusin/focusout 时，在文档上附加一个捕获处理程序
                                                        var 处理程序 = 函数（事件）{
                                                            jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
                                                        };

                                                        jQuery.event.special[修复] = {
                                                            设置：函数（）{

                                                            // 句柄：常规节点（通过`this.ownerDocument`），窗口
                                                            //（通过`this.document`）和文档（通过`this`）。
                                                            var doc = this.ownerDocument || this.document || 这个，
					附加 = dataPriv.access( 文档, 修复);

                                                            如果（！附加）{
                                                                doc.addEventListener( orig, handler, true );
                                                            }
                                                            dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
                                                        },
                                                        拆解：函数（）{
                                                            var doc = this.ownerDocument || this.document || 这个，
					附加 = dataPriv.access( doc, fix ) - 1;

                                                            如果（！附加）{
                                                                doc.removeEventListener( orig, handler, true );
                                                                dataPriv.remove( 文档, 修复);

                                                            } 别的 {
                                                                dataPriv.access（文档，修复，附加）；
                                                            }
                                                        }
                                                    };
                                                    });
                                                }
                                                var location = window.location;

                                                var nonce = { guid: Date.now() };

                                                var rquery = ( /\?/ );



// 跨浏览器xml解析
                                                jQuery.parseXML = 函数（数据）{
                                                    var xml, parserErrorElem;
                                                    if ( !data || typeof data !== "string" ) {
                                                        返回空；
                                                    }

                                                    // 支持：仅 IE 9 - 11
                                                    // IE 使用无效输入抛出 parseFromString。
                                                    尝试 {
                                                        xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
                                                    }赶上（e）{}

                                                    parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
                                                    如果 ( !xml || parserErrorElem ) {
                                                        jQuery.error( "无效的 XML：" + (
                                                            解析器错误元素？
				jQuery.map( parserErrorElem.childNodes, function( el ) {
                    返回 el.textContent;
                } ).join( "\n" ) :
                                                        数据
                                                    ) );
                                                    }
                                                    返回xml；
                                                };


                                                无功
                                                rbracket = /\[\]$/,
                                                    rCRLF = /\r?\n/g,
                                                    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
                                                    rsubmittable = /^(?:input|select|textarea|keygen)/i;

                                                函数buildParams（前缀，obj，传统，添加）{
                                                    变量名；

	如果 ( Array.isArray( obj ) ) {

                                                        // 序列化数组项。
                                                        jQuery.each( obj, function( i, v ) {
                                                            if ( 传统 || rbracket.test( prefix ) ) {

                                                                // 将每个数组项视为标量。
                                                                添加（前缀，v）；

                                                            } 别的 {

                                                                // 项目是非标量（数组或对象），编码其数字索引。
                                                                构建参数（
					前缀 + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
                        Ⅴ、
					传统的，
					添加
                                                            );
                                                            }
                                                        });

                                                    } else if ( !traditional && toType( obj ) === "object" ) {

                                                        // 序列化对象项。
                                                        for（对象中的名称）{
                                                            buildParams( prefix + "[" + name + "]", obj[ name ], 传统, 添加);
                                                        }

                                                    } 别的 {

                                                        // 序列化标量项。
                                                        添加（前缀，对象）；
                                                    }
                                                }

// 序列化一个表单元素数组或一组
// 键/值转换为查询字符串
                                                jQuery.param = function( a, 传统 ) {
                                                    var前缀，
		s = [],
            添加 = 函数（键，值或函数）{

                                                        // 如果 value 是一个函数，调用它并使用它的返回值
                                                        var value = isFunction( valueOrFunction ) ?
                                                            valueOrFunction() :
                                                            值或函数；

			s[ s.length ] = encodeURIComponent( key ) + "=" +
                encodeURIComponent( value == null ? "" : value );
                                                    };

                                                    if ( a == null ) {
                                                        返回 ””;
                                                    }

                                                    // 如果传入的是数组，则假定它是表单元素的数组。
                                                    if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

                                                        // 序列化表单元素
                                                        jQuery.each( a, function() {
                                                            添加（this.name，this.value）;
                                                        });

                                                    } 别的 {

                                                        // 如果是传统的，编码“旧”的方式（方式 1.3.2 或更旧
                                                        // 做到了），否则递归编码参数。
                                                        for ( a 中的前缀) {
                                                            buildParams（前缀，a[前缀]，传统，添加）；
                                                        }
                                                    }

                                                    // 返回结果序列化
                                                    return s.join("&");
                                                };

                                                jQuery.fn.extend({
                                                    序列化：函数（）{
                                                    返回 jQuery.param( this.serializeArray() );
                                                },
                                                序列化数组：函数（）{
                                                    返回 this.map( function() {

                                                        // 可以为“元素”添加 propHook 来过滤或添加表单元素
                                                        var element = jQuery.prop( this, "elements" );
                                                        返回元素 ? jQuery.makeArray(元素)：这个；
                                                    } ).过滤器(函数(){
                                                        var type = this.type;

                                                        // 使用 .is( ":disabled" ) 以便 fieldset[disabled] 工作
                                                        返回 this.name && !jQuery( this ).is( ":disabled" ) &&
                                                        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                                                        ( this.checked || !rcheckableType.test( type ) );
                                                    } ).map( 函数( _i, elem ) {
                                                        var val = jQuery( this ).val();

                                                        如果 ( val == null ) {
                                                            返回空；
                                                        }

                                                        如果 ( Array.isArray( val ) ) {
                                                            返回 jQuery.map( val, function( val ) {
                                                                返回 { 名称：elem.name，值：val.replace( rCRLF, "\r\n" ) };
                                                            });
                                                        }

                                                        返回 { 名称：elem.name，值：val.replace( rCRLF, "\r\n" ) };
                                                    } ）。得到（）;
                                                }
                                            });


                                                无功
                                                r20 = /%20/g，
	rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

        // #7653、#8125、#8152：本地协议检测
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,

        /* 预过滤器
	 * 1) 它们有助于引入自定义数据类型（参见 ajax/jsonp.js 示例）
	 * 2) 这些被称为：
	 * - 在要求交通工具之前
	 * - 参数序列化之后（如果 s.processData 为真，s.data 是一个字符串）
	 * 3) key 是数据类型
	 * 4) 可以使用包罗万象的符号“*”
	 * 5) 执行将从传输数据类型开始，然后根据需要继续向下到“*”
	 */
        前置过滤器 = {},

        /* 传输绑定
	 * 1) key 是数据类型
	 * 2) 可以使用包罗万象的符号“*”
	 * 3) 选择将从传输数据类型开始，然后根据需要转到“*”
	 */
        运输 = {},

        // 避免注释序言字符序列 (#10098); 必须安抚棉绒并避免压缩
        allTypes = "*/".concat("*"),

        // 用于解析文档来源的锚标签
        originAnchor = document.createElement("a");

                                                originAnchor.href = location.href;

// jQuery.ajaxPrefilter 和 jQuery.ajaxTransport 的基础“构造函数”
                                                函数 addToPrefiltersOrTransports( 结构 ) {

                                                    // dataTypeExpression 是可选的，默认为“*”
                                                    返回函数（数据类型表达式，函数）{

                                                        if ( typeof dataTypeExpression !== "string" ) {
                                                            func = dataTypeExpression;
                                                            数据类型表达式 = "*";
                                                        }

                                                        变量数据类型，
			我 = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

                                                        if ( isFunction( func ) ) {

                                                            // 对于 dataTypeExpression 中的每个数据类型
                                                            while ( ( dataType = dataTypes[ i++ ] ) ) {

                                                                // 如果请求则前置
                                                                if ( dataType[ 0 ] === "+" ) {
                                                                    dataType = dataType.slice(1) || "*";
                                                                    (结构[数据类型]=结构[数据类型]||[]).unshift(func);

                                                                    // 否则追加
                                                                } 别的 {
                                                                    (结构[数据类型]=结构[数据类型]||[]).push(func);
                                                                }
                                                            }
                                                        }
                                                    };
                                                }

// 预过滤器和传输的基本检查功能
                                                函数inspectPrefiltersOrTransports（结构，选项，原始选项，jqXHR）{

                                                    检查无功 = {},
                                                        seekTransport = ( 结构 === 运输 );

                                                    函数检查（数据类型）{
                                                        选择变量；
		检查 [ 数据类型 ] = 真；
		jQuery.each(结构[数据类型]||[],函数(_,prefilterOrFactory){
                                                            var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
                                                            if ( typeof dataTypeOrTransport === "string" &&
                                                                !seekingTransport && !inspected[ dataTypeOrTransport ] ) {

                                                                options.dataTypes.unshift( dataTypeOrTransport );
                                                                检查（数据类型或传输）；
				返回假；
                                                            } else if (seekingTransport) {
                                                                返回 !( selected = dataTypeOrTransport );
                                                            }
                                                        });
                                                        返回选择；
                                                    }

                                                    返回检查（ options.dataTypes[ 0 ] ） || !inspected[ "*" ] && 检查( "*" );
                                                }

// ajax 选项的特殊扩展
// 需要“平面”选项（不要深度扩展）
// 修复 #9887
                                                函数ajaxExtend（目标，src）{
                                                    var 键，深，
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

                                                    for ( src 中的键) {
                                                        if ( src[ 键 ] !== 未定义 ) {
                                                            ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
                                                        }
                                                    }
                                                    如果（深）{
                                                        jQuery.extend( true, target, deep );
                                                    }

                                                    返回目标；
                                                }

                                                /* 处理对 ajax 请求的响应：
 * - 找到正确的数据类型（在内容类型和预期数据类型之间进行调解）
 * - 返回相应的响应
 */
                                                函数ajaxHandleResponses（s，jqXHR，响应）{

                                                    var ct，类型，finalDataType，firstDataType，
		内容 = s.contents,
            数据类型 = s.dataTypes;

                                                    // 删除自动数据类型并在过程中获取内容类型
                                                    while ( dataTypes[ 0 ] === "*" ) {
                                                        dataTypes.shift();
                                                        如果（ct === 未定义）{
                                                            ct = s.mimeType || jqXHR.getResponseHeader("内容类型");
                                                        }
                                                    }

                                                    // 检查我们是否正在处理已知的内容类型
                                                    如果 ( ct ) {
                                                        for（输入内容）{
                                                            如果（内容[类型]&&内容[类型].测试（ct））{
                                                                dataTypes.unshift(类型);
                                                                休息;
                                                            }
                                                        }
                                                    }

                                                    // 检查我们是否有对预期数据类型的响应
                                                    如果（响应中的数据类型 [0]）{
                                                        finalDataType = dataTypes[0];
                                                    } 别的 {

                                                        // 尝试可转换的数据类型
                                                        for（输入回复）{
                                                            if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
                                                                finalDataType = 类型；
				休息;
                                                            }
                                                            如果（！firstDataType）{
                                                                firstDataType = 类型；
                                                            }
                                                        }

                                                        // 或者只使用第一个
                                                        finalDataType = finalDataType || 第一个数据类型；
                                                    }

                                                    // 如果我们找到了一个数据类型
                                                    // 如果需要，我们将 dataType 添加到列表中
                                                    // 并返回相应的响应
                                                    如果（最终数据类型）{
                                                        if ( finalDataType !== dataTypes[ 0 ] ) {
                                                            dataTypes.unshift(finalDataType);
                                                        }
                                                        返回响应[ finalDataType ];
                                                    }
                                                }

                                                /* 给定请求和原始响应的链式转换
 * 同时设置 jqXHR 实例上的 responseXXX 字段
 */
                                                功能ajaxConvert（s，响应，jqXHR，isSuccess）{
                                                    var conv2，当前，conv，tmp，prev，
		转换器 = {},

            // 使用 dataTypes 的副本，以防我们需要修改它以进行转换
            数据类型 = s.dataTypes.slice();

                                                    // 创建带有小写键的转换器映射
                                                    如果（数据类型[1]）{
                                                        for ( s.converters 中的 conv ) {
                                                            转换器[ conv.toLowerCase() ] = s.converters[ conv ];
                                                        }
                                                    }

                                                    当前 = dataTypes.shift();

                                                    // 转换为每个顺序数据类型
                                                    而（当前）{

                                                        如果（s.responseFields[当前]）{
                                                            jqXHR[ s.responseFields[ 当前 ] ] = 响应；
                                                        }

                                                        // 如果提供，则应用数据过滤器
                                                        if ( !prev && isSuccess && s.dataFilter ) {
                                                            response = s.dataFilter( response, s.dataType );
                                                        }

                                                        上一个 = 当前；
		当前 = dataTypes.shift();

                                                        如果（当前）{

                                                            // 只有在当前数据类型是非自动的情况下才有工作要做
                                                            如果（当前===“*”）{

                                                                当前 = 上一个；

                                                                // 如果 prev dataType 为非自动且与当前不同，则转换响应
                                                            } else if ( prev !== "*" && prev !== current ) {

                                                                // 寻找直接转换器
                                                                conv = 转换器[ prev + " " + current ] || 转换器[“*”+电流]；

                                                                // 如果没有找到，寻找一对
                                                                如果（！转换）{
                                                                    对于（转换器中的conv2）{

                                                                        // 如果 conv2 输出电流
                                                                        tmp = conv2.split("");
                                                                        if ( tmp[ 1 ] === 当前 ) {

                                                                            // 如果 prev 可以转换为接受的输入
                                                                            conv = 转换器[ prev + " " + tmp[ 0 ] ] ||
                                                                                转换器[“*”+tmp[0]]；
							如果（转换）{

                                                                                // 压缩等价转换器
                                                                                如果（转换 === 真）{
                                                                                    conv = 转换器[ conv2 ];

                                                                                    // 否则，插入中间数据类型
                                                                                } else if (转换器[ conv2 ] !== true ) {
                                                                                    当前 = tmp[0];
                                                                                    dataTypes.unshift(tmp[1]);
                                                                                }
                                                                                休息;
                                                                            }
                                                                        }
                                                                    }
                                                                }

                                                                // 应用转换器（如果不是等价的）
                                                                如果（转换！== 真）{

                                                                    // 除非允许错误冒泡，否则捕获并返回它们
                                                                    if ( conv && s.throws ) {
                                                                        响应 = 转换（响应）；
                                                                    } 别的 {
                                                                        尝试 {
                                                                            响应 = 转换（响应）；
                                                                        }赶上（e）{
                                                                            返回 {
                                                                                状态：“解析器错误”，
								错误：转换？e : "没有从 " + prev + " 到 " + current 的转换
                                                                            };
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }

                                                    返回{状态：“成功”，数据：响应}；
                                                }

                                                jQuery.extend({

                                                    // 用于保存活动查询数量的计数器
                                                    活跃：0，

                                                // 下一个请求的 Last-Modified 头缓存
                                                最后修改： {}，
	标签：{}，

	ajax设置：{
                                                    网址：location.href，
		类型：“获取”，
		isLocal: rlocalProtocol.test( location.protocol ),
            全球：真实，
		过程数据：真，
		异步：真，
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            /*
		超时：0，
		数据：空，
		数据类型：空，
		用户名：空，
		密码：空，
		缓存：空，
		抛出：假，
		传统：虚假，
		标头：{}，
		*/

            接受：{
                                                    “*“： 所有类型，
			文本：“文本/纯文本”，
			html: "文本/html",
                xml: "应用程序/xml, 文本/xml",
                                                            json：“应用程序/json，文本/javascript”
                                                    },

                                                    内容： {
                                                        xml: /\bxml\b/,
                                                            html: /\bhtml/,
                                                            json: /\bjson\b/
                                                    },

                                                    响应字段：{
                                                        xml: "responseXML",
                                                            文本：“响应文本”，
			json：“响应JSON”
                                                    },

                                                    // 数据转换器
                                                    // 键用一个空格分隔源（或笼统的“*”）和目标类型
                                                    转换器：{

                                                        // 将任何内容转换为文本
                                                    “* 文本”：字符串，

                                                        // 文本到 html (true = 无转换)
                                                    “文本 html”：真，

                                                        // 将文本评估为 json 表达式
                                                        "文本 json": JSON.parse,

                                                        // 将文本解析为 xml
                                                    “文本 xml”：jQuery.parseXML
                                                    },

                                                    // 对于不应深度扩展的选项：
                                                    // 您可以在此处添加您自己的自定义选项，如果
                                                    // 当你创建一个不应该的
                                                    // 深度扩展（参见 ajaxExtend）
                                                    平面选项：{
                                                        网址：真实，
			上下文：真实
                                                    }
                                                },

                                                // 在目标中创建一个完整的设置对象
                                                // ajaxSettings 和 settings 字段。
                                                // 如果省略目标，则写入 ajaxSettings。
                                                ajaxSetup：函数（目标，设置）{
                                                    返回设置 ?

                                                        // 构建设置对象
                                                        ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

                                                        // 扩展ajaxSettings
                                                        ajaxExtend( jQuery.ajaxSettings, target );
                                                },

                                                ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
                                                    ajaxTransport: addToPrefiltersOrTransports(transports),

                                                    // 主要方法
                                                    ajax：函数（网址，选项）{

                                                    // 如果 url 是一个对象，则模拟 pre-1.5 签名
                                                    if ( typeof url === "object" ) {
                                                        选项 = 网址；
			网址 = 未定义；
                                                    }

                                                    // 强制选项为对象
                                                    选项 = 选项 || {};

                                                    无功运输，

                                                    // 没有反缓存参数的 URL
                                                    缓存网址，

                                                    // 响应头
                                                    响应头字符串，
			响应头，

                                                    // 超时句柄
                                                    超时定时器，

                                                    // 网址清理变量
                                                    网址锚点，

                                                    // 请求状态（发送时变为假，完成时变为真）
                                                    完全的，

                                                    // 要知道是否要分派全局事件
                                                    fireGlobals，

                                                    // 循环变量
                                                    一世，

                                                    // 未缓存的 url 部分
                                                    未缓存，

                                                    // 创建最终的选项对象
                                                    s = jQuery.ajaxSetup( {}, options ),

                                                        // 回调上下文
                                                        callbackContext = s.context || ，

                                                    // 全局事件的上下文是 callbackContext 如果它是 DOM 节点或 jQuery 集合
                                                    globalEventContext = s.context &&
                                                        ( callbackContext.nodeType || callbackContext.jquery ) ？
				jQuery（回调上下文）：
				jQuery. 事件，

                                                    // 延迟
                                                    延期 = jQuery.Deferred(),
                                                        completeDeferred = jQuery.Callbacks("一次记忆"),

                                                        // 状态相关的回调
                                                        statusCode = s.statusCode || {}，

                                                    // 标题（它们一次发送）
                                                    requestHeaders = {},
                                                        requestHeadersNames = {},

                                                        // 默认中止消息
                                                        strAbort = "canceled",

                                                        // Fake xhr
                                                        jqXHR = {
                                                            readyState: 0,

                                                            // Builds headers hashtable if needed
                                                            getResponseHeader: function( key ) {
                                                                var match;
                                                                if ( completed ) {
                                                                    if ( !responseHeaders ) {
                                                                        responseHeaders = {};
                                                                        while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                                                                            responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
                                                                                ( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
                                                                                    .concat( match[ 2 ] );
                                                                        }
                                                                    }
                                                                    match = responseHeaders[ key.toLowerCase() + " " ];
                                                                }
                                                                return match == null ? null : match.join( ", " );
                                                            },

                                                            // Raw string
                                                            getAllResponseHeaders: function() {
                                                                return completed ? responseHeadersString : null;
                                                            },

                                                            // Caches the header
                                                            setRequestHeader: function( name, value ) {
                                                                if ( completed == null ) {
                                                                    name = requestHeadersNames[ name.toLowerCase() ] =
                                                                        requestHeadersNames[ name.toLowerCase() ] || name;
                                                                    requestHeaders[ name ] = value;
                                                                }
                                                                return this;
                                                            },

                                                            // Overrides response content-type header
                                                            overrideMimeType: function( type ) {
                                                                if ( completed == null ) {
                                                                    s.mimeType = type;
                                                                }
                                                                return this;
                                                            },

                                                            // Status-dependent callbacks
                                                            statusCode: function( map ) {
                                                                var code;
                                                                if ( map ) {
                                                                    if ( completed ) {

                                                                        // Execute the appropriate callbacks
                                                                        jqXHR.always( map[ jqXHR.status ] );
                                                                    } else {

                                                                        // Lazy-add the new callbacks in a way that preserves old ones
                                                                        for ( code in map ) {
                                                                            statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                                                                        }
                                                                    }
                                                                }
                                                                return this;
                                                            },

                                                            // Cancel the request
                                                            abort: function( statusText ) {
                                                                var finalText = statusText || strAbort;
                                                                if ( transport ) {
                                                                    transport.abort( finalText );
                                                                }
                                                                done( 0, finalText );
                                                                return this;
                                                            }
                                                        };

                                                    // Attach deferreds
                                                    deferred.promise( jqXHR );

                                                    // Add protocol if not provided (prefilters might expect it)
                                                    // Handle falsy url in the settings object (#10093: consistency with old signature)
                                                    // We also use the url parameter if available
                                                    s.url = ( ( url || s.url || location.href ) + "" )
                                                        .replace( rprotocol, location.protocol + "//" );

                                                    // Alias method option to type as per ticket #12004
                                                    s.type = options.method || options.type || s.method || s.type;

                                                    // Extract dataTypes list
                                                    s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

                                                    // A cross-domain request is in order when the origin doesn't match the current origin.
                                                    if ( s.crossDomain == null ) {
                                                        urlAnchor = document.createElement( "a" );

                                                        // Support: IE <=8 - 11, Edge 12 - 15
                                                        // IE throws exception on accessing the href property if url is malformed,
                                                        // e.g. http://example.com:80x/
                                                        try {
                                                            urlAnchor.href = s.url;

                                                            // Support: IE <=8 - 11 only
                                                            // Anchor's host property isn't correctly set when s.url is relative
                                                            urlAnchor.href = urlAnchor.href;
                                                            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                                                                urlAnchor.protocol + "//" + urlAnchor.host;
                                                        } catch ( e ) {

                                                            // If there is an error parsing the URL, assume it is crossDomain,
                                                            // it can be rejected by the transport if it is invalid
                                                            s.crossDomain = true;
                                                        }
                                                    }

                                                    // Convert data if not already a string
                                                    if ( s.data && s.processData && typeof s.data !== "string" ) {
                                                        s.data = jQuery.param( s.data, s.traditional );
                                                    }

                                                    // Apply prefilters
                                                    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

                                                    // If request was aborted inside a prefilter, stop there
                                                    if ( completed ) {
                                                        return jqXHR;
                                                    }

                                                    // We can fire global events as of now if asked to
                                                    // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
                                                    fireGlobals = jQuery.event && s.global;

                                                    // Watch for a new set of requests
                                                    if ( fireGlobals && jQuery.active++ === 0 ) {
                                                        jQuery.event.trigger( "ajaxStart" );
                                                    }

                                                    // Uppercase the type
                                                    s.type = s.type.toUpperCase();

                                                    // Determine if request has content
                                                    s.hasContent = !rnoContent.test( s.type );

                                                    // Save the URL in case we're toying with the If-Modified-Since
                                                    // and/or If-None-Match header later on
                                                    // Remove hash to simplify url manipulation
                                                    cacheURL = s.url.replace( rhash, "" );

                                                    // More options handling for requests with no content
                                                    if ( !s.hasContent ) {

                                                        // Remember the hash so we can put it back
                                                        uncached = s.url.slice( cacheURL.length );

                                                        // If data is available and should be processed, append data to url
                                                        if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
                                                            cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

                                                            // #9682: remove data so that it's not used in an eventual retry
                                                            delete s.data;
                                                        }

                                                        // Add or update anti-cache param if needed
                                                        if ( s.cache === false ) {
                                                            cacheURL = cacheURL.replace( rantiCache, "$1" );
                                                            uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
                                                                uncached;
                                                        }

                                                        // Put hash and anti-cache on the URL that will be requested (gh-1732)
                                                        s.url = cacheURL + uncached;

                                                        // Change '%20' to '+' if this is encoded form body content (gh-2658)
                                                    } else if ( s.data && s.processData &&
                                                        ( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
                                                        s.data = s.data.replace( r20, "+" );
                                                    }

                                                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                                                    if ( s.ifModified ) {
                                                        if ( jQuery.lastModified[ cacheURL ] ) {
                                                            jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
                                                        }
                                                        if ( jQuery.etag[ cacheURL ] ) {
                                                            jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
                                                        }
                                                    }

                                                    // Set the correct header, if data is being sent
                                                    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                                                        jqXHR.setRequestHeader( "Content-Type", s.contentType );
                                                    }

                                                    // Set the Accepts header for the server, depending on the dataType
                                                    jqXHR.setRequestHeader(
                                                        "Accept",
                                                        s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
                                                            s.accepts[ s.dataTypes[ 0 ] ] +
                                                            ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                                                            s.accepts[ "*" ]
                                                    );

                                                    // Check for headers option
                                                    for ( i in s.headers ) {
                                                        jqXHR.setRequestHeader( i, s.headers[ i ] );
                                                    }

                                                    // Allow custom headers/mimetypes and early abort
                                                    if ( s.beforeSend &&
                                                        ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

                                                        // Abort if not done already and return
                                                        return jqXHR.abort();
                                                    }

                                                    // Aborting is no longer a cancellation
                                                    strAbort = "abort";

                                                    // Install callbacks on deferreds
                                                    completeDeferred.add( s.complete );
                                                    jqXHR.done( s.success );
                                                    jqXHR.fail( s.error );

                                                    // Get transport
                                                    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

                                                    // If no transport, we auto-abort
                                                    if ( !transport ) {
                                                        done( -1, "No Transport" );
                                                    } else {
                                                        jqXHR.readyState = 1;

                                                        // Send global event
                                                        if ( fireGlobals ) {
                                                            globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                                                        }

                                                        // If request was aborted inside ajaxSend, stop there
                                                        if ( completed ) {
                                                            return jqXHR;
                                                        }

                                                        // Timeout
                                                        if ( s.async && s.timeout > 0 ) {
                                                            timeoutTimer = window.setTimeout( function() {
                                                                jqXHR.abort( "timeout" );
                                                            }, s.timeout );
                                                        }

                                                        try {
                                                            completed = false;
                                                            transport.send( requestHeaders, done );
                                                        } catch ( e ) {

                                                            // Rethrow post-completion exceptions
                                                            if ( completed ) {
                                                                throw e;
                                                            }

                                                            // Propagate others as results
                                                            done( -1, e );
                                                        }
                                                    }

                                                    // Callback for when everything is done
                                                    function done( status, nativeStatusText, responses, headers ) {
                                                        var isSuccess, success, error, response, modified,
                                                            statusText = nativeStatusText;

                                                        // Ignore repeat invocations
                                                        if ( completed ) {
                                                            return;
                                                        }

                                                        completed = true;

                                                        // Clear timeout if it exists
                                                        if ( timeoutTimer ) {
                                                            window.clearTimeout( timeoutTimer );
                                                        }

                                                        // Dereference transport for early garbage collection
                                                        // (no matter how long the jqXHR object will be used)
                                                        transport = undefined;

                                                        // Cache response headers
                                                        responseHeadersString = headers || "";

                                                        // Set readyState
                                                        jqXHR.readyState = status > 0 ? 4 : 0;

                                                        // Determine if successful
                                                        isSuccess = status >= 200 && status < 300 || status === 304;

                                                        // Get response data
                                                        if ( responses ) {
                                                            response = ajaxHandleResponses( s, jqXHR, responses );
                                                        }

                                                        // Use a noop converter for missing script but not if jsonp
                                                        if ( !isSuccess &&
                                                            jQuery.inArray( "script", s.dataTypes ) > -1 &&
                                                            jQuery.inArray( "json", s.dataTypes ) < 0 ) {
                                                            s.converters[ "text script" ] = function() {};
                                                        }

                                                        // Convert no matter what (that way responseXXX fields are always set)
                                                        response = ajaxConvert( s, response, jqXHR, isSuccess );

                                                        // If successful, handle type chaining
                                                        if ( isSuccess ) {

                                                            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                                                            if ( s.ifModified ) {
                                                                modified = jqXHR.getResponseHeader( "Last-Modified" );
                                                                if ( modified ) {
                                                                    jQuery.lastModified[ cacheURL ] = modified;
                                                                }
                                                                modified = jqXHR.getResponseHeader( "etag" );
                                                                if ( modified ) {
                                                                    jQuery.etag[ cacheURL ] = modified;
                                                                }
                                                            }

                                                            // if no content
                                                            if ( status === 204 || s.type === "HEAD" ) {
                                                                statusText = "nocontent";

                                                                // if not modified
                                                            } else if ( status === 304 ) {
                                                                statusText = "notmodified";

                                                                // If we have data, let's convert it
                                                            } else {
                                                                statusText = response.state;
                                                                success = response.data;
                                                                error = response.error;
                                                                isSuccess = !error;
                                                            }
                                                        } else {

                                                            // Extract error from statusText and normalize for non-aborts
                                                            error = statusText;
                                                            if ( status || !statusText ) {
                                                                statusText = "error";
                                                                if ( status < 0 ) {
                                                                    status = 0;
                                                                }
                                                            }
                                                        }

                                                        // Set data for the fake xhr object
                                                        jqXHR.status = status;
                                                        jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                                                        // Success/Error
                                                        if ( isSuccess ) {
                                                            deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                                                        } else {
                                                            deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                                                        }

                                                        // Status-dependent callbacks
                                                        jqXHR.statusCode( statusCode );
                                                        statusCode = undefined;

                                                        if ( fireGlobals ) {
                                                            globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                                                                [ jqXHR, s, isSuccess ? success : error ] );
                                                        }

                                                        // Complete
                                                        completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

                                                        if ( fireGlobals ) {
                                                            globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

                                                            // Handle the global AJAX counter
                                                            if ( !( --jQuery.active ) ) {
                                                                jQuery.event.trigger( "ajaxStop" );
                                                            }
                                                        }
                                                    }

                                                    return jqXHR;
                                                },

                                                getJSON: function( url, data, callback ) {
                                                    return jQuery.get( url, data, callback, "json" );
                                                },

                                                getScript: function( url, callback ) {
                                                    return jQuery.get( url, undefined, callback, "script" );
                                                }
                                            } );

                                                jQuery.each( [ "get", "post" ], function( _i, method ) {
                                                    jQuery[ method ] = function( url, data, callback, type ) {

                                                        // Shift arguments if data argument was omitted
                                                        if ( isFunction( data ) ) {
                                                            type = type || callback;
                                                            callback = data;
                                                            data = undefined;
                                                        }

                                                        // The url can be an options object (which then must have .url)
                                                        return jQuery.ajax( jQuery.extend( {
                                                            url: url,
                                                            type: method,
                                                            dataType: type,
                                                            data: data,
                                                            success: callback
                                                        }, jQuery.isPlainObject( url ) && url ) );
                                                    };
                                                } );

                                                jQuery.ajaxPrefilter( function( s ) {
                                                    var i;
                                                    for ( i in s.headers ) {
                                                        if ( i.toLowerCase() === "content-type" ) {
                                                            s.contentType = s.headers[ i ] || "";
                                                        }
                                                    }
                                                } );


                                                jQuery._evalUrl = function( url, options, doc ) {
                                                    return jQuery.ajax( {
                                                        url: url,

                                                        // Make this explicit, since user can override this through ajaxSetup (#11264)
                                                        type: "GET",
                                                        dataType: "script",
                                                        cache: true,
                                                        async: false,
                                                        global: false,

                                                        // Only evaluate the response if it is successful (gh-4126)
                                                        // dataFilter is not invoked for failure responses, so using it instead
                                                        // of the default converter is kludgy but it works.
                                                        converters: {
                                                            "text script": function() {}
                                                        },
                                                        dataFilter: function( response ) {
                                                            jQuery.globalEval( response, options, doc );
                                                        }
                                                    } );
                                                };


                                                jQuery.fn.extend( {
                                                    wrapAll: function( html ) {
                                                        var wrap;

                                                        if ( this[ 0 ] ) {
                                                            if ( isFunction( html ) ) {
                                                                html = html.call( this[ 0 ] );
                                                            }

                                                            // The elements to wrap the target around
                                                            wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

                                                            if ( this[ 0 ].parentNode ) {
                                                                wrap.insertBefore( this[ 0 ] );
                                                            }

                                                            wrap.map( function() {
                                                                var elem = this;

                                                                while ( elem.firstElementChild ) {
                                                                    elem = elem.firstElementChild;
                                                                }

                                                                return elem;
                                                            } ).append( this );
                                                        }

                                                        return this;
                                                    },

                                                    wrapInner: function( html ) {
                                                        if ( isFunction( html ) ) {
                                                            return this.each( function( i ) {
                                                                jQuery( this ).wrapInner( html.call( this, i ) );
                                                            } );
                                                        }

                                                        return this.each( function() {
                                                            var self = jQuery( this ),
                                                                contents = self.contents();

                                                            if ( contents.length ) {
                                                                contents.wrapAll( html );

                                                            } else {
                                                                self.append( html );
                                                            }
                                                        } );
                                                    },

                                                    wrap: function( html ) {
                                                        var htmlIsFunction = isFunction( html );

                                                        return this.each( function( i ) {
                                                            jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
                                                        } );
                                                    },

                                                    unwrap: function( selector ) {
                                                        this.parent( selector ).not( "body" ).each( function() {
                                                            jQuery( this ).replaceWith( this.childNodes );
                                                        } );
                                                        return this;
                                                    }
                                                } );


                                                jQuery.expr.pseudos.hidden = function( elem ) {
                                                    return !jQuery.expr.pseudos.visible( elem );
                                                };
                                                jQuery.expr.pseudos.visible = function( elem ) {
                                                    return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
                                                };




                                                jQuery.ajaxSettings.xhr = function() {
                                                    try {
                                                        return new window.XMLHttpRequest();
                                                    } catch ( e ) {}
                                                };

                                                var xhrSuccessStatus = {

                                                        // File protocol always yields status code 0, assume 200
                                                        0: 200,

                                                        // Support: IE <=9 only
                                                        // #1450: sometimes IE returns 1223 when it should be 204
                                                        1223: 204
                                                    },
                                                    xhrSupported = jQuery.ajaxSettings.xhr();

                                                support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
                                                support.ajax = xhrSupported = !!xhrSupported;

                                                jQuery.ajaxTransport( function( options ) {
                                                    var callback, errorCallback;

                                                    // Cross domain only allowed if supported through XMLHttpRequest
                                                    if ( support.cors || xhrSupported && !options.crossDomain ) {
                                                        return {
                                                            send: function( headers, complete ) {
                                                                var i,
                                                                    xhr = options.xhr();

                                                                xhr.open(
                                                                    options.type,
                                                                    options.url,
                                                                    options.async,
                                                                    options.username,
                                                                    options.password
                                                                );

                                                                // Apply custom fields if provided
                                                                if ( options.xhrFields ) {
                                                                    for ( i in options.xhrFields ) {
                                                                        xhr[ i ] = options.xhrFields[ i ];
                                                                    }
                                                                }

                                                                // Override mime type if needed
                                                                if ( options.mimeType && xhr.overrideMimeType ) {
                                                                    xhr.overrideMimeType( options.mimeType );
                                                                }

                                                                // X-Requested-With header
                                                                // For cross-domain requests, seeing as conditions for a preflight are
                                                                // akin to a jigsaw puzzle, we simply never set it to be sure.
                                                                // (it can always be set on a per-request basis or even using ajaxSetup)
                                                                // For same-domain requests, won't change header if already provided.
                                                                if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
                                                                    headers[ "X-Requested-With" ] = "XMLHttpRequest";
                                                                }

                                                                // Set headers
                                                                for ( i in headers ) {
                                                                    xhr.setRequestHeader( i, headers[ i ] );
                                                                }

                                                                // Callback
                                                                callback = function( type ) {
                                                                    return function() {
                                                                        if ( callback ) {
                                                                            callback = errorCallback = xhr.onload =
                                                                                xhr.onerror = xhr.onabort = xhr.ontimeout =
                                                                                    xhr.onreadystatechange = null;

                                                                            if ( type === "abort" ) {
                                                                                xhr.abort();
                                                                            } else if ( type === "error" ) {

                                                                                // Support: IE <=9 only
                                                                                // On a manual native abort, IE9 throws
                                                                                // errors on any property access that is not readyState
                                                                                if ( typeof xhr.status !== "number" ) {
                                                                                    complete( 0, "error" );
                                                                                } else {
                                                                                    complete(

                                                                                        // File: protocol always yields status 0; see #8605, #14207
                                                                                        xhr.status,
                                                                                        xhr.statusText
                                                                                    );
                                                                                }
                                                                            } else {
                                                                                complete(
                                                                                    xhrSuccessStatus[ xhr.status ] || xhr.status,
                                                                                    xhr.statusText,

                                                                                    // Support: IE <=9 only
                                                                                    // IE9 has no XHR2 but throws on binary (trac-11426)
                                                                                    // For XHR2 non-text, let the caller handle it (gh-2498)
                                                                                    ( xhr.responseType || "text" ) !== "text"  ||
                                                                                    typeof xhr.responseText !== "string" ?
                                                                                        { binary: xhr.response } :
                                                                                        { text: xhr.responseText },
                                                                                    xhr.getAllResponseHeaders()
                                                                                );
                                                                            }
                                                                        }
                                                                    };
                                                                };

                                                                // Listen to events
                                                                xhr.onload = callback();
                                                                errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

                                                                // Support: IE 9 only
                                                                // Use onreadystatechange to replace onabort
                                                                // to handle uncaught aborts
                                                                if ( xhr.onabort !== undefined ) {
                                                                    xhr.onabort = errorCallback;
                                                                } else {
                                                                    xhr.onreadystatechange = function() {

                                                                        // Check readyState before timeout as it changes
                                                                        if ( xhr.readyState === 4 ) {

                                                                            // Allow onerror to be called first,
                                                                            // but that will not handle a native abort
                                                                            // Also, save errorCallback to a variable
                                                                            // as xhr.onerror cannot be accessed
                                                                            window.setTimeout( function() {
                                                                                if ( callback ) {
                                                                                    errorCallback();
                                                                                }
                                                                            } );
                                                                        }
                                                                    };
                                                                }

                                                                // Create the abort callback
                                                                callback = callback( "abort" );

                                                                try {

                                                                    // Do send the request (this may raise an exception)
                                                                    xhr.send( options.hasContent && options.data || null );
                                                                } catch ( e ) {

                                                                    // #14683: Only rethrow if this hasn't been notified as an error yet
                                                                    if ( callback ) {
                                                                        throw e;
                                                                    }
                                                                }
                                                            },

                                                            abort: function() {
                                                                if ( callback ) {
                                                                    callback();
                                                                }
                                                            }
                                                        };
                                                    }
                                                } );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
                                                jQuery.ajaxPrefilter( function( s ) {
                                                    if ( s.crossDomain ) {
                                                        s.contents.script = false;
                                                    }
                                                } );

// Install script dataType
                                                jQuery.ajaxSetup( {
                                                    accepts: {
                                                        script: "text/javascript, application/javascript, " +
                                                            "application/ecmascript, application/x-ecmascript"
                                                    },
                                                    contents: {
                                                        script: /\b(?:java|ecma)script\b/
                                                    },
                                                    converters: {
                                                        "text script": function( text ) {
                                                            jQuery.globalEval( text );
                                                            return text;
                                                        }
                                                    }
                                                } );

// Handle cache's special case and crossDomain
                                                jQuery.ajaxPrefilter( "script", function( s ) {
                                                    if ( s.cache === undefined ) {
                                                        s.cache = false;
                                                    }
                                                    if ( s.crossDomain ) {
                                                        s.type = "GET";
                                                    }
                                                } );

// Bind script tag hack transport
                                                jQuery.ajaxTransport( "script", function( s ) {

                                                    // This transport only deals with cross domain or forced-by-attrs requests
                                                    if ( s.crossDomain || s.scriptAttrs ) {
                                                        var script, callback;
                                                        return {
                                                            send: function( _, complete ) {
                                                                script = jQuery( "<script>" )
                                                                    .attr( s.scriptAttrs || {} )
                                                                    .prop( { charset: s.scriptCharset, src: s.url } )
                                                                    .on( "load error", callback = function( evt ) {
                                                                        script.remove();
                                                                        callback = null;
                                                                        if ( evt ) {
                                                                            complete( evt.type === "error" ? 404 : 200, evt.type );
                                                                        }
                                                                    } );

                                                                // Use native DOM manipulation to avoid our domManip AJAX trickery
                                                                document.head.appendChild( script[ 0 ] );
                                                            },
                                                            abort: function() {
                                                                if ( callback ) {
                                                                    callback();
                                                                }
                                                            }
                                                        };
                                                    }
                                                } );




                                                var oldCallbacks = [],
                                                    rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
                                                jQuery.ajaxSetup( {
                                                    jsonp: "callback",
                                                    jsonpCallback: function() {
                                                        var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
                                                        this[ callback ] = true;
                                                        return callback;
                                                    }
                                                } );

// Detect, normalize options and install callbacks for jsonp requests
                                                jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

                                                    var callbackName, overwritten, responseContainer,
                                                        jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
                                                                "url" :
                                                                typeof s.data === "string" &&
                                                                ( s.contentType || "" )
                                                                    .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
                                                                rjsonp.test( s.data ) && "data"
                                                        );

                                                    // Handle iff the expected data type is "jsonp" or we have a parameter to set
                                                    if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

                                                        // Get callback name, remembering preexisting value associated with it
                                                        callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
                                                            s.jsonpCallback() :
                                                            s.jsonpCallback;

                                                        // Insert callback into url or form data
                                                        if ( jsonProp ) {
                                                            s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
                                                        } else if ( s.jsonp !== false ) {
                                                            s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
                                                        }

                                                        // Use data converter to retrieve json after script execution
                                                        s.converters[ "script json" ] = function() {
                                                            if ( !responseContainer ) {
                                                                jQuery.error( callbackName + " was not called" );
                                                            }
                                                            return responseContainer[ 0 ];
                                                        };

                                                        // Force json dataType
                                                        s.dataTypes[ 0 ] = "json";

                                                        // Install callback
                                                        overwritten = window[ callbackName ];
                                                        window[ callbackName ] = function() {
                                                            responseContainer = arguments;
                                                        };

                                                        // Clean-up function (fires after converters)
                                                        jqXHR.always( function() {

                                                            // If previous value didn't exist - remove it
                                                            if ( overwritten === undefined ) {
                                                                jQuery( window ).removeProp( callbackName );

                                                                // Otherwise restore preexisting value
                                                            } else {
                                                                window[ callbackName ] = overwritten;
                                                            }

                                                            // Save back as free
                                                            if ( s[ callbackName ] ) {

                                                                // Make sure that re-using the options doesn't screw things around
                                                                s.jsonpCallback = originalSettings.jsonpCallback;

                                                                // Save the callback name for future use
                                                                oldCallbacks.push( callbackName );
                                                            }

                                                            // Call if it was a function and we have a response
                                                            if ( responseContainer && isFunction( overwritten ) ) {
                                                                overwritten( responseContainer[ 0 ] );
                                                            }

                                                            responseContainer = overwritten = undefined;
                                                        } );

                                                        // Delegate to script
                                                        return "script";
                                                    }
                                                } );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
                                                support.createHTMLDocument = ( function() {
                                                    var body = document.implementation.createHTMLDocument( "" ).body;
                                                    body.innerHTML = "<form></form><form></form>";
                                                    return body.childNodes.length === 2;
                                                } )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
                                                jQuery.parseHTML = function( data, context, keepScripts ) {
                                                    if ( typeof data !== "string" ) {
                                                        return [];
                                                    }
                                                    if ( typeof context === "boolean" ) {
                                                        keepScripts = context;
                                                        context = false;
                                                    }

                                                    var base, parsed, scripts;

                                                    if ( !context ) {

                                                        // Stop scripts or inline event handlers from being executed immediately
                                                        // by using document.implementation
                                                        if ( support.createHTMLDocument ) {
                                                            context = document.implementation.createHTMLDocument( "" );

                                                            // Set the base href for the created document
                                                            // so any parsed elements with URLs
                                                            // are based on the document's URL (gh-2965)
                                                            base = context.createElement( "base" );
                                                            base.href = document.location.href;
                                                            context.head.appendChild( base );
                                                        } else {
                                                            context = document;
                                                        }
                                                    }

                                                    parsed = rsingleTag.exec( data );
                                                    scripts = !keepScripts && [];

                                                    // Single tag
                                                    if ( parsed ) {
                                                        return [ context.createElement( parsed[ 1 ] ) ];
                                                    }

                                                    parsed = buildFragment( [ data ], context, scripts );

                                                    if ( scripts && scripts.length ) {
                                                        jQuery( scripts ).remove();
                                                    }

                                                    return jQuery.merge( [], parsed.childNodes );
                                                };


                                                /**
                                                 * Load a url into a page
                                                 */
                                                jQuery.fn.load = function( url, params, callback ) {
                                                    var selector, type, response,
                                                        self = this,
                                                        off = url.indexOf( " " );

                                                    if ( off > -1 ) {
                                                        selector = stripAndCollapse( url.slice( off ) );
                                                        url = url.slice( 0, off );
                                                    }

                                                    // If it's a function
                                                    if ( isFunction( params ) ) {

                                                        // We assume that it's the callback
                                                        callback = params;
                                                        params = undefined;

                                                        // Otherwise, build a param string
                                                    } else if ( params && typeof params === "object" ) {
                                                        type = "POST";
                                                    }

                                                    // If we have elements to modify, make the request
                                                    if ( self.length > 0 ) {
                                                        jQuery.ajax( {
                                                            url: url,

                                                            // If "type" variable is undefined, then "GET" method will be used.
                                                            // Make value of this field explicit since
                                                            // user can override it through ajaxSetup method
                                                            type: type || "GET",
                                                            dataType: "html",
                                                            data: params
                                                        } ).done( function( responseText ) {

                                                            // Save response for use in complete callback
                                                            response = arguments;

                                                            self.html( selector ?

                                                                // If a selector was specified, locate the right elements in a dummy div
                                                                // Exclude scripts to avoid IE 'Permission Denied' errors
                                                                jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

                                                                // Otherwise use the full result
                                                                responseText );

                                                            // If the request succeeds, this function gets "data", "status", "jqXHR"
                                                            // but they are ignored because response was set above.
                                                            // If it fails, this function gets "jqXHR", "status", "error"
                                                        } ).always( callback && function( jqXHR, status ) {
                                                            self.each( function() {
                                                                callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
                                                            } );
                                                        } );
                                                    }

                                                    return this;
                                                };




                                                jQuery.expr.pseudos.animated = function( elem ) {
                                                    return jQuery.grep( jQuery.timers, function( fn ) {
                                                        return elem === fn.elem;
                                                    } ).length;
                                                };




                                                jQuery.offset = {
                                                    setOffset: function( elem, options, i ) {
                                                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                                                            position = jQuery.css( elem, "position" ),
                                                            curElem = jQuery( elem ),
                                                            props = {};

                                                        // Set position first, in-case top/left are set even on static elem
                                                        if ( position === "static" ) {
                                                            elem.style.position = "relative";
                                                        }

                                                        curOffset = curElem.offset();
                                                        curCSSTop = jQuery.css( elem, "top" );
                                                        curCSSLeft = jQuery.css( elem, "left" );
                                                        calculatePosition = ( position === "absolute" || position === "fixed" ) &&
                                                            ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

                                                        // Need to be able to calculate position if either
                                                        // top or left is auto and position is either absolute or fixed
                                                        if ( calculatePosition ) {
                                                            curPosition = curElem.position();
                                                            curTop = curPosition.top;
                                                            curLeft = curPosition.left;

                                                        } else {
                                                            curTop = parseFloat( curCSSTop ) || 0;
                                                            curLeft = parseFloat( curCSSLeft ) || 0;
                                                        }

                                                        if ( isFunction( options ) ) {

                                                            // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                                                            options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
                                                        }

                                                        if ( options.top != null ) {
                                                            props.top = ( options.top - curOffset.top ) + curTop;
                                                        }
                                                        if ( options.left != null ) {
                                                            props.left = ( options.left - curOffset.left ) + curLeft;
                                                        }

                                                        if ( "using" in options ) {
                                                            options.using.call( elem, props );

                                                        } else {
                                                            curElem.css( props );
                                                        }
                                                    }
                                                };

                                                jQuery.fn.extend( {

                                                    // offset() relates an element's border box to the document origin
                                                    offset: function( options ) {

                                                        // Preserve chaining for setter
                                                        if ( arguments.length ) {
                                                            return options === undefined ?
                                                                this :
                                                                this.each( function( i ) {
                                                                    jQuery.offset.setOffset( this, options, i );
                                                                } );
                                                        }

                                                        var rect, win,
                                                            elem = this[ 0 ];

                                                        if ( !elem ) {
                                                            return;
                                                        }

                                                        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
                                                        // Support: IE <=11 only
                                                        // Running getBoundingClientRect on a
                                                        // disconnected node in IE throws an error
                                                        if ( !elem.getClientRects().length ) {
                                                            return { top: 0, left: 0 };
                                                        }

                                                        // Get document-relative position by adding viewport scroll to viewport-relative gBCR
                                                        rect = elem.getBoundingClientRect();
                                                        win = elem.ownerDocument.defaultView;
                                                        return {
                                                            top: rect.top + win.pageYOffset,
                                                            left: rect.left + win.pageXOffset
                                                        };
                                                    },

                                                    // position() relates an element's margin box to its offset parent's padding box
                                                    // This corresponds to the behavior of CSS absolute positioning
                                                    position: function() {
                                                        if ( !this[ 0 ] ) {
                                                            return;
                                                        }

                                                        var offsetParent, offset, doc,
                                                            elem = this[ 0 ],
                                                            parentOffset = { top: 0, left: 0 };

                                                        // position:fixed elements are offset from the viewport, which itself always has zero offset
                                                        if ( jQuery.css( elem, "position" ) === "fixed" ) {

                                                            // Assume position:fixed implies availability of getBoundingClientRect
                                                            offset = elem.getBoundingClientRect();

                                                        } else {
                                                            offset = this.offset();

                                                            // Account for the *real* offset parent, which can be the document or its root element
                                                            // when a statically positioned element is identified
                                                            doc = elem.ownerDocument;
                                                            offsetParent = elem.offsetParent || doc.documentElement;
                                                            while ( offsetParent &&
                                                            ( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
                                                            jQuery.css( offsetParent, "position" ) === "static" ) {

                                                                offsetParent = offsetParent.parentNode;
                                                            }
                                                            if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

                                                                // Incorporate borders into its offset, since they are outside its content origin
                                                                parentOffset = jQuery( offsetParent ).offset();
                                                                parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
                                                                parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
                                                            }
                                                        }

                                                        // Subtract parent offsets and element margins
                                                        return {
                                                            top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
                                                            left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
                                                        };
                                                    },

                                                    // This method will return documentElement in the following cases:
                                                    // 1) For the element inside the iframe without offsetParent, this method will return
                                                    //    documentElement of the parent window
                                                    // 2) For the hidden or detached element
                                                    // 3) For body or html element, i.e. in case of the html node - it will return itself
                                                    //
                                                    // but those exceptions were never presented as a real life use-cases
                                                    // and might be considered as more preferable results.
                                                    //
                                                    // This logic, however, is not guaranteed and can change at any point in the future
                                                    offsetParent: function() {
                                                        return this.map( function() {
                                                            var offsetParent = this.offsetParent;

                                                            while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
                                                                offsetParent = offsetParent.offsetParent;
                                                            }

                                                            return offsetParent || documentElement;
                                                        } );
                                                    }
                                                } );

// Create scrollLeft and scrollTop methods
                                                jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
                                                    var top = "pageYOffset" === prop;

                                                    jQuery.fn[ method ] = function( val ) {
                                                        return access( this, function( elem, method, val ) {

                                                            // Coalesce documents and windows
                                                            var win;
                                                            if ( isWindow( elem ) ) {
                                                                win = elem;
                                                            } else if ( elem.nodeType === 9 ) {
                                                                win = elem.defaultView;
                                                            }

                                                            if ( val === undefined ) {
                                                                return win ? win[ prop ] : elem[ method ];
                                                            }

                                                            if ( win ) {
                                                                win.scrollTo(
                                                                    !top ? val : win.pageXOffset,
                                                                    top ? val : win.pageYOffset
                                                                );

                                                            } else {
                                                                elem[ method ] = val;
                                                            }
                                                        }, method, val, arguments.length );
                                                    };
                                                } );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
                                                jQuery.each( [ "top", "left" ], function( _i, prop ) {
                                                    jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
                                                        function( elem, computed ) {
                                                            if ( computed ) {
                                                                computed = curCSS( elem, prop );

                                                                // If curCSS returns percentage, fallback to offset
                                                                return rnumnonpx.test( computed ) ?
                                                                    jQuery( elem ).position()[ prop ] + "px" :
                                                                    computed;
                                                            }
                                                        }
                                                    );
                                                } );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
                                                jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
                                                    jQuery.each( {
                                                        padding: "inner" + name,
                                                        content: type,
                                                        "": "outer" + name
                                                    }, function( defaultExtra, funcName ) {

                                                        // Margin is only for outerHeight, outerWidth
                                                        jQuery.fn[ funcName ] = function( margin, value ) {
                                                            var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                                                                extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

                                                            return access( this, function( elem, type, value ) {
                                                                var doc;

                                                                if ( isWindow( elem ) ) {

                                                                    // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                                                                    return funcName.indexOf( "outer" ) === 0 ?
                                                                        elem[ "inner" + name ] :
                                                                        elem.document.documentElement[ "client" + name ];
                                                                }

                                                                // Get document width or height
                                                                if ( elem.nodeType === 9 ) {
                                                                    doc = elem.documentElement;

                                                                    // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                                                                    // whichever is greatest
                                                                    return Math.max(
                                                                        elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                                                                        elem.body[ "offset" + name ], doc[ "offset" + name ],
                                                                        doc[ "client" + name ]
                                                                    );
                                                                }

                                                                return value === undefined ?

                                                                    // Get width or height on the element, requesting but not forcing parseFloat
                                                                    jQuery.css( elem, type, extra ) :

                                                                    // Set width or height on the element
                                                                    jQuery.style( elem, type, value, extra );
                                                            }, type, chainable ? margin : undefined, chainable );
                                                        };
                                                    } );
                                                } );


                                                jQuery.each( [
                                                    "ajaxStart",
                                                    "ajaxStop",
                                                    "ajaxComplete",
                                                    "ajaxError",
                                                    "ajaxSuccess",
                                                    "ajaxSend"
                                                ], function( _i, type ) {
                                                    jQuery.fn[ type ] = function( fn ) {
                                                        return this.on( type, fn );
                                                    };
                                                } );




                                                jQuery.fn.extend( {

                                                    bind: function( types, data, fn ) {
                                                        return this.on( types, null, data, fn );
                                                    },
                                                    unbind: function( types, fn ) {
                                                        return this.off( types, null, fn );
                                                    },

                                                    delegate: function( selector, types, data, fn ) {
                                                        return this.on( types, selector, data, fn );
                                                    },
                                                    undelegate: function( selector, types, fn ) {

                                                        // ( namespace ) or ( selector, types [, fn] )
                                                        return arguments.length === 1 ?
                                                            this.off( selector, "**" ) :
                                                            this.off( types, selector || "**", fn );
                                                    },

                                                    hover: function( fnOver, fnOut ) {
                                                        return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
                                                    }
                                                } );

                                                jQuery.each(
                                                    ( "blur focus focusin focusout resize scroll click dblclick " +
                                                        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
                                                        "change select submit keydown keypress keyup contextmenu" ).split( " " ),
                                                    function( _i, name ) {

                                                        // Handle event binding
                                                        jQuery.fn[ name ] = function( data, fn ) {
                                                            return arguments.length > 0 ?
                                                                this.on( name, null, data, fn ) :
                                                                this.trigger( name );
                                                        };
                                                    }
                                                );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
                                                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
                                                jQuery.proxy = function( fn, context ) {
                                                    var tmp, args, proxy;

                                                    if ( typeof context === "string" ) {
                                                        tmp = fn[ context ];
                                                        context = fn;
                                                        fn = tmp;
                                                    }

                                                    // Quick check to determine if target is callable, in the spec
                                                    // this throws a TypeError, but we will just return undefined.
                                                    if ( !isFunction( fn ) ) {
                                                        return undefined;
                                                    }

                                                    // Simulated bind
                                                    args = slice.call( arguments, 2 );
                                                    proxy = function() {
                                                        return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
                                                    };

                                                    // Set the guid of unique handler to the same of original handler, so it can be removed
                                                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

                                                    return proxy;
                                                };

                                                jQuery.holdReady = function( hold ) {
                                                    if ( hold ) {
                                                        jQuery.readyWait++;
                                                    } else {
                                                        jQuery.ready( true );
                                                    }
                                                };
                                                jQuery.isArray = Array.isArray;
                                                jQuery.parseJSON = JSON.parse;
                                                jQuery.nodeName = nodeName;
                                                jQuery.isFunction = isFunction;
                                                jQuery.isWindow = isWindow;
                                                jQuery.camelCase = camelCase;
                                                jQuery.type = toType;

                                                jQuery.now = Date.now;

                                                jQuery.isNumeric = function( obj ) {

                                                    // As of jQuery 3.0, isNumeric is limited to
                                                    // strings and numbers (primitives or objects)
                                                    // that can be coerced to finite numbers (gh-2662)
                                                    var type = jQuery.type( obj );
                                                    return ( type === "number" || type === "string" ) &&

                                                        // parseFloat NaNs numeric-cast false positives ("")
                                                        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                                                        // subtraction forces infinities to NaN
                                                        !isNaN( obj - parseFloat( obj ) );
                                                };

                                                jQuery.trim = function( text ) {
                                                    return text == null ?
                                                        "" :
                                                        ( text + "" ).replace( rtrim, "" );
                                                };



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

                                                if ( typeof define === "function" && define.amd ) {
                                                    define( "jquery", [], function() {
                                                        return jQuery;
                                                    } );
                                                }




                                                var

                                                    // Map over jQuery in case of overwrite
                                                    _jQuery = window.jQuery,

                                                    // Map over the $ in case of overwrite
                                                    _$ = window.$;

                                                jQuery.noConflict = function( deep ) {
                                                    if ( window.$ === jQuery ) {
                                                        window.$ = _$;
                                                    }

                                                    if ( deep && window.jQuery === jQuery ) {
                                                        window.jQuery = _jQuery;
                                                    }

                                                    return jQuery;
                                                };

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
                                                if ( typeof noGlobal === "undefined" ) {
                                                    window.jQuery = window.$ = jQuery;
                                                }




                                                return jQuery;
                                            } );