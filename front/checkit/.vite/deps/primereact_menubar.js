import {
  IconBase
} from "./chunk-OYDETGFK.js";
import {
  PrimeReact,
  useEventListener,
  useMountEffect,
  useUnmountEffect,
  useUpdateEffect
} from "./chunk-ZFVKBAG3.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  ZIndexUtils,
  classNames
} from "./chunk-X5JUNQCX.js";
import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/primereact/menubar/menubar.esm.js
var React5 = __toESM(require_react());

// node_modules/primereact/ripple/ripple.esm.js
var React = __toESM(require_react());
var Ripple = React.memo(React.forwardRef(function() {
  var inkRef = React.useRef(null);
  var targetRef = React.useRef(null);
  var getTarget = function getTarget2() {
    return inkRef.current && inkRef.current.parentElement;
  };
  var bindEvents = function bindEvents2() {
    if (targetRef.current) {
      targetRef.current.addEventListener("mousedown", onMouseDown);
      DomHandler.isTouchDevice() && targetRef.current.addEventListener("touchstart", onTouchStart);
    }
  };
  var unbindEvents = function unbindEvents2() {
    if (targetRef.current) {
      targetRef.current.removeEventListener("mousedown", onMouseDown);
      DomHandler.isTouchDevice() && targetRef.current.removeEventListener("touchstart", onTouchStart);
    }
  };
  var onTouchStart = function onTouchStart2(event) {
    var offset = DomHandler.getOffset(targetRef.current);
    var offsetX = event.targetTouches[0].pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
    var offsetY = event.targetTouches[0].pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;
    activateRipple(offsetX, offsetY);
  };
  var onMouseDown = function onMouseDown2(event) {
    if (DomHandler.isTouchDevice()) {
      return;
    }
    var offset = DomHandler.getOffset(targetRef.current);
    var offsetX = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(inkRef.current) / 2;
    var offsetY = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(inkRef.current) / 2;
    activateRipple(offsetX, offsetY);
  };
  var activateRipple = function activateRipple2(offsetX, offsetY) {
    if (!inkRef.current || getComputedStyle(inkRef.current, null).display === "none") {
      return;
    }
    DomHandler.removeClass(inkRef.current, "p-ink-active");
    setDimensions();
    inkRef.current.style.top = offsetY + "px";
    inkRef.current.style.left = offsetX + "px";
    DomHandler.addClass(inkRef.current, "p-ink-active");
  };
  var onAnimationEnd = function onAnimationEnd2(event) {
    DomHandler.removeClass(event.currentTarget, "p-ink-active");
  };
  var setDimensions = function setDimensions2() {
    if (inkRef.current && !DomHandler.getHeight(inkRef.current) && !DomHandler.getWidth(inkRef.current)) {
      var d = Math.max(DomHandler.getOuterWidth(targetRef.current), DomHandler.getOuterHeight(targetRef.current));
      inkRef.current.style.height = d + "px";
      inkRef.current.style.width = d + "px";
    }
  };
  useMountEffect(function() {
    if (inkRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  });
  useUpdateEffect(function() {
    if (inkRef.current && !targetRef.current) {
      targetRef.current = getTarget();
      setDimensions();
      bindEvents();
    }
  });
  useUnmountEffect(function() {
    if (inkRef.current) {
      targetRef.current = null;
      unbindEvents();
    }
  });
  return PrimeReact.ripple ? React.createElement("span", {
    role: "presentation",
    ref: inkRef,
    className: "p-ink",
    onAnimationEnd
  }) : null;
}));
Ripple.displayName = "Ripple";

// node_modules/primereact/icons/angleright/index.esm.js
var React2 = __toESM(require_react());
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var AngleRightIcon = React2.memo(React2.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React2.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React2.createElement("path", {
    d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
    fill: "currentColor"
  }));
}));
AngleRightIcon.displayName = "AngleRightIcon";

// node_modules/primereact/icons/angledown/index.esm.js
var React3 = __toESM(require_react());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var AngleDownIcon = React3.memo(React3.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React3.createElement("svg", _extends2({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React3.createElement("path", {
    d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
    fill: "currentColor"
  }));
}));
AngleDownIcon.displayName = "AngleDownIcon";

// node_modules/primereact/icons/bars/index.esm.js
var React4 = __toESM(require_react());
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var BarsIcon = React4.memo(React4.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React4.createElement("svg", _extends3({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React4.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
    fill: "currentColor"
  }));
}));
BarsIcon.displayName = "BarsIcon";

// node_modules/primereact/menubar/menubar.esm.js
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var MenubarBase = {
  defaultProps: {
    __TYPE: "Menubar",
    id: null,
    model: null,
    style: null,
    className: null,
    start: null,
    submenuIcon: null,
    menuIcon: null,
    end: null,
    children: void 0
  },
  getProps: function getProps(props) {
    return ObjectUtils.getMergedProps(props, MenubarBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return ObjectUtils.getDiffProps(props, MenubarBase.defaultProps);
  }
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var MenubarSub = React5.memo(React5.forwardRef(function(props, ref) {
  var _React$useState = React5.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), activeItemState = _React$useState2[0], setActiveItemState = _React$useState2[1];
  var _useEventListener = useEventListener({
    type: "click",
    listener: function listener(event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        setActiveItemState(null);
      }
    }
  }), _useEventListener2 = _slicedToArray(_useEventListener, 1), bindDocumentClickListener = _useEventListener2[0];
  var onItemMouseEnter = function onItemMouseEnter2(event, item) {
    if (item.disabled || props.mobileActive) {
      event.preventDefault();
      return;
    }
    if (props.root) {
      if (activeItemState || props.popup) {
        setActiveItemState(item);
      }
    } else {
      setActiveItemState(item);
    }
  };
  var onItemClick = function onItemClick2(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (item.items)
      activeItemState && item === activeItemState ? setActiveItemState(null) : setActiveItemState(item);
    else
      onLeafClick();
  };
  var onItemKeyDown = function onItemKeyDown2(event, item) {
    var listItem = event.currentTarget.parentElement;
    switch (event.which) {
      case 40:
        if (props.root)
          item.items && expandSubmenu(item, listItem);
        else
          navigateToNextItem(listItem);
        event.preventDefault();
        break;
      case 38:
        !props.root && navigateToPrevItem(listItem);
        event.preventDefault();
        break;
      case 39:
        if (props.root) {
          var nextItem = findNextItem(listItem);
          nextItem && nextItem.children[0].focus();
        } else {
          item.items && expandSubmenu(item, listItem);
        }
        event.preventDefault();
        break;
      case 37:
        props.root && navigateToPrevItem(listItem);
        event.preventDefault();
        break;
    }
    props.onKeyDown && props.onKeyDown(event, listItem);
  };
  var onChildItemKeyDown = function onChildItemKeyDown2(event, childListItem) {
    if (props.root) {
      if (event.which === 38 && childListItem.previousElementSibling == null) {
        collapseMenu(childListItem);
      }
    } else {
      if (event.which === 37) {
        collapseMenu(childListItem);
      }
    }
  };
  var expandSubmenu = function expandSubmenu2(item, listItem) {
    setActiveItemState(item);
    setTimeout(function() {
      listItem.children[1].children[0].children[0].focus();
    }, 50);
  };
  var collapseMenu = function collapseMenu2(listItem) {
    setActiveItemState(null);
    listItem.parentElement.previousElementSibling.focus();
  };
  var navigateToNextItem = function navigateToNextItem2(listItem) {
    var nextItem = findNextItem(listItem);
    nextItem && nextItem.children[0].focus();
  };
  var navigateToPrevItem = function navigateToPrevItem2(listItem) {
    var prevItem = findPrevItem(listItem);
    prevItem && prevItem.children[0].focus();
  };
  var findNextItem = function findNextItem2(item) {
    var nextItem = item.nextElementSibling;
    return nextItem ? DomHandler.hasClass(nextItem, "p-disabled") || !DomHandler.hasClass(nextItem, "p-menuitem") ? findNextItem2(nextItem) : nextItem : null;
  };
  var findPrevItem = function findPrevItem2(item) {
    var prevItem = item.previousElementSibling;
    return prevItem ? DomHandler.hasClass(prevItem, "p-disabled") || !DomHandler.hasClass(prevItem, "p-menuitem") ? findPrevItem2(prevItem) : prevItem : null;
  };
  var onLeafClick = function onLeafClick2() {
    setActiveItemState(null);
    props.onLeafClick && props.onLeafClick();
  };
  useMountEffect(function() {
    bindDocumentClickListener();
  });
  useUpdateEffect(function() {
    !props.parentActive && setActiveItemState(null);
  }, [props.parentActive]);
  var createSeparator = function createSeparator2(index) {
    var key = "separator_" + index;
    return React5.createElement("li", {
      key,
      className: "p-menu-separator",
      role: "separator"
    });
  };
  var createSubmenu = function createSubmenu2(item) {
    if (item.items) {
      return React5.createElement(MenubarSub, {
        menuProps: props.menuProps,
        model: item.items,
        mobileActive: props.mobileActive,
        onLeafClick,
        onKeyDown: onChildItemKeyDown,
        parentActive: item === activeItemState,
        submenuIcon: props.submenuIcon
      });
    }
    return null;
  };
  var createMenuitem = function createMenuitem2(item, index) {
    if (item.visible === false) {
      return null;
    }
    var key = item.label + "_" + index;
    var className2 = classNames("p-menuitem", {
      "p-menuitem-active": activeItemState === item
    }, item.className);
    var linkClassName = classNames("p-menuitem-link", {
      "p-disabled": item.disabled
    });
    var iconClassName = classNames("p-menuitem-icon", item.icon);
    var icon = IconUtils.getJSXIcon(item.icon, {
      className: "p-menuitem-icon"
    }, {
      props: props.menuProps
    });
    var label = item.label && React5.createElement("span", {
      className: "p-menuitem-text"
    }, item.label);
    var submenuIconClassName = "p-submenu-icon";
    var submenuIcon = item.items && IconUtils.getJSXIcon(!props.root ? props.submenuIcon || React5.createElement(AngleRightIcon, {
      className: submenuIconClassName
    }) : props.submenuIcon || React5.createElement(AngleDownIcon, {
      className: submenuIconClassName
    }), {
      className: submenuIconClassName
    }, {
      props: _objectSpread({
        menuProps: props.menuProps
      }, props)
    });
    var submenu2 = createSubmenu(item);
    var content = React5.createElement("a", {
      href: item.url || "#",
      role: "menuitem",
      className: linkClassName,
      target: item.target,
      "aria-haspopup": item.items != null,
      onClick: function onClick(event) {
        return onItemClick(event, item);
      },
      onKeyDown: function onKeyDown(event) {
        return onItemKeyDown(event, item);
      }
    }, icon, label, submenuIcon, React5.createElement(Ripple, null));
    if (item.template) {
      var defaultContentOptions = {
        onClick: function onClick(event) {
          return onItemClick(event, item);
        },
        onKeyDown: function onKeyDown(event) {
          return onItemKeyDown(event, item);
        },
        className: linkClassName,
        labelClassName: "p-menuitem-text",
        iconClassName,
        submenuIconClassName,
        element: content,
        props
      };
      content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
    }
    return React5.createElement("li", {
      key,
      role: "none",
      id: item.id,
      className: className2,
      style: item.style,
      onMouseEnter: function onMouseEnter(event) {
        return onItemMouseEnter(event, item);
      }
    }, content, submenu2);
  };
  var createItem = function createItem2(item, index) {
    return item.separator ? createSeparator(index) : createMenuitem(item, index);
  };
  var createMenu = function createMenu2() {
    return props.model ? props.model.map(createItem) : null;
  };
  var role = props.root ? "menubar" : "menu";
  var className = classNames({
    "p-submenu-list": !props.root,
    "p-menubar-root-list": props.root
  });
  var submenu = createMenu();
  return React5.createElement("ul", {
    ref,
    className,
    role
  }, submenu);
}));
MenubarSub.displayName = "MenubarSub";
var Menubar = React5.memo(React5.forwardRef(function(inProps, ref) {
  var props = MenubarBase.getProps(inProps);
  var _React$useState = React5.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobileActiveState = _React$useState2[0], setMobileActiveState = _React$useState2[1];
  var elementRef = React5.useRef(null);
  var rootMenuRef = React5.useRef(null);
  var menuButtonRef = React5.useRef(null);
  var _useEventListener = useEventListener({
    type: "click",
    listener: function listener(event) {
      if (mobileActiveState && isOutsideClicked(event)) {
        setMobileActiveState(false);
      }
    }
  }), _useEventListener2 = _slicedToArray(_useEventListener, 2), bindDocumentClickListener = _useEventListener2[0], unbindDocumentClickListener = _useEventListener2[1];
  var toggle = function toggle2(event) {
    event.preventDefault();
    setMobileActiveState(function(prevMobileActive) {
      return !prevMobileActive;
    });
  };
  var onLeafClick = function onLeafClick2() {
    setMobileActiveState(false);
  };
  var isOutsideClicked = function isOutsideClicked2(event) {
    return rootMenuRef.current !== event.target && !rootMenuRef.current.contains(event.target) && menuButtonRef.current !== event.target && !menuButtonRef.current.contains(event.target);
  };
  useUpdateEffect(function() {
    if (mobileActiveState) {
      ZIndexUtils.set("menu", rootMenuRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex["menu"]);
      bindDocumentClickListener();
    } else {
      unbindDocumentClickListener();
      ZIndexUtils.clear(rootMenuRef.current);
    }
  }, [mobileActiveState]);
  useUnmountEffect(function() {
    ZIndexUtils.clear(rootMenuRef.current);
  });
  React5.useImperativeHandle(ref, function() {
    return {
      props,
      toggle,
      useCustomContent,
      getElement: function getElement() {
        return elementRef.current;
      },
      getRootMenu: function getRootMenu() {
        return rootMenuRef.current;
      },
      getMenuButton: function getMenuButton() {
        return menuButtonRef.current;
      }
    };
  });
  var createStartContent = function createStartContent2() {
    if (props.start) {
      var _start = ObjectUtils.getJSXElement(props.start, props);
      return React5.createElement("div", {
        className: "p-menubar-start"
      }, _start);
    }
    return null;
  };
  var createEndContent = function createEndContent2() {
    if (props.end) {
      var _end = ObjectUtils.getJSXElement(props.end, props);
      return React5.createElement("div", {
        className: "p-menubar-end"
      }, _end);
    }
    return null;
  };
  var createMenuButton = function createMenuButton2() {
    if (props.model && props.model.length < 1) {
      return null;
    }
    var icon = props.menuIcon || React5.createElement(BarsIcon, null);
    var menuIcon = IconUtils.getJSXIcon(icon, void 0, {
      props
    });
    var button = React5.createElement("a", {
      ref: menuButtonRef,
      href: "#",
      role: "button",
      tabIndex: 0,
      className: "p-menubar-button",
      onClick: toggle
    }, menuIcon);
    return button;
  };
  var otherProps = MenubarBase.getOtherProps(props);
  var className = classNames("p-menubar p-component", {
    "p-menubar-mobile-active": mobileActiveState
  }, props.className);
  var start = createStartContent();
  var end = createEndContent();
  var menuButton = createMenuButton();
  var submenu = React5.createElement(MenubarSub, {
    ref: rootMenuRef,
    menuProps: props,
    model: props.model,
    root: true,
    mobileActive: mobileActiveState,
    onLeafClick,
    submenuIcon: props.submenuIcon
  });
  return React5.createElement("div", _extends4({
    id: props.id,
    className,
    style: props.style
  }, otherProps), start, menuButton, submenu, end);
}));
Menubar.displayName = "Menubar";
export {
  Menubar
};
//# sourceMappingURL=primereact_menubar.js.map
