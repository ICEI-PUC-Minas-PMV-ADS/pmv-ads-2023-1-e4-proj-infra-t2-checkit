import {
  IconBase
} from "./chunk-OYDETGFK.js";
import {
  Tooltip
} from "./chunk-QH6FZKZP.js";
import "./chunk-SRAQOA3L.js";
import {
  useUpdateEffect
} from "./chunk-ZFVKBAG3.js";
import "./chunk-RCDTQEAW.js";
import {
  DomHandler,
  IconUtils,
  ObjectUtils,
  classNames
} from "./chunk-X5JUNQCX.js";
import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/primereact/checkbox/checkbox.esm.js
var React2 = __toESM(require_react());

// node_modules/primereact/icons/check/index.esm.js
var React = __toESM(require_react());
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
var CheckIcon = React.memo(React.forwardRef(function(inProps, ref) {
  var pti = IconBase.getPTI(inProps);
  return React.createElement("svg", _extends({
    ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), React.createElement("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }));
}));
CheckIcon.displayName = "CheckIcon";

// node_modules/primereact/checkbox/checkbox.esm.js
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
var CheckboxBase = {
  defaultProps: {
    __TYPE: "Checkbox",
    id: null,
    inputRef: null,
    inputId: null,
    value: null,
    name: null,
    checked: false,
    trueValue: true,
    falseValue: false,
    style: null,
    className: null,
    disabled: false,
    required: false,
    readOnly: false,
    tabIndex: null,
    icon: null,
    tooltip: null,
    tooltipOptions: null,
    onChange: null,
    onClick: null,
    onMouseDown: null,
    onContextMenu: null,
    children: void 0
  },
  getProps: function getProps(props) {
    return ObjectUtils.getMergedProps(props, CheckboxBase.defaultProps);
  },
  getOtherProps: function getOtherProps(props) {
    return ObjectUtils.getDiffProps(props, CheckboxBase.defaultProps);
  }
};
var Checkbox = React2.memo(React2.forwardRef(function(inProps, ref) {
  var props = CheckboxBase.getProps(inProps);
  var _React$useState = React2.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focusedState = _React$useState2[0], setFocusedState = _React$useState2[1];
  var elementRef = React2.useRef(null);
  var inputRef = React2.useRef(props.inputRef);
  var onClick = function onClick2(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (props.onChange || props.onClick) {
      var _checked = isChecked();
      var checkboxClicked = event.target instanceof HTMLDivElement || event.target instanceof HTMLSpanElement || event.target instanceof Object;
      var isInputToggled = event.target === inputRef.current;
      var isCheckboxToggled = checkboxClicked && event.target.checked !== _checked;
      if (isInputToggled || isCheckboxToggled) {
        var value = _checked ? props.falseValue : props.trueValue;
        var eventData = {
          originalEvent: event,
          value: props.value,
          checked: value,
          stopPropagation: function stopPropagation() {
            event.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.preventDefault();
          },
          target: {
            type: "checkbox",
            name: props.name,
            id: props.id,
            value: props.value,
            checked: value
          }
        };
        props.onClick && props.onClick(eventData);
        if (event.defaultPrevented) {
          return;
        }
        props.onChange && props.onChange(eventData);
      }
      DomHandler.focus(inputRef.current);
      event.preventDefault();
    }
  };
  var onFocus = function onFocus2() {
    setFocusedState(true);
  };
  var onBlur = function onBlur2() {
    setFocusedState(false);
  };
  var onKeyDown = function onKeyDown2(event) {
    if (event.code === "Space" || event.key === " ") {
      onClick(event);
    }
  };
  var isChecked = function isChecked2() {
    return props.checked === props.trueValue;
  };
  React2.useImperativeHandle(ref, function() {
    return {
      props,
      focus: function focus() {
        return DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  React2.useEffect(function() {
    ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  useUpdateEffect(function() {
    inputRef.current.checked = isChecked();
  }, [props.checked, props.trueValue]);
  var checked = isChecked();
  var hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = CheckboxBase.getOtherProps(props);
  var ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
  var className = classNames("p-checkbox p-component", {
    "p-checkbox-checked": checked,
    "p-checkbox-disabled": props.disabled,
    "p-checkbox-focused": focusedState
  }, props.className);
  var boxClass = classNames("p-checkbox-box", {
    "p-highlight": checked,
    "p-disabled": props.disabled,
    "p-focus": focusedState
  });
  var iconClassName = "p-checkbox-icon p-c";
  var icon = checked ? props.icon || React2.createElement(CheckIcon, {
    className: iconClassName
  }) : null;
  var checkboxIcon = IconUtils.getJSXIcon(icon, {
    className: iconClassName
  }, {
    props,
    checked
  });
  return React2.createElement(React2.Fragment, null, React2.createElement("div", _extends2({
    ref: elementRef,
    id: props.id,
    className,
    style: props.style
  }, otherProps, {
    onPointerUp: onClick,
    onContextMenu: props.onContextMenu,
    onMouseDown: props.onMouseDown
  }), React2.createElement("div", {
    className: "p-hidden-accessible"
  }, React2.createElement("input", _extends2({
    ref: inputRef,
    type: "checkbox",
    id: props.inputId,
    name: props.name,
    tabIndex: props.tabIndex,
    defaultChecked: checked,
    onFocus,
    onBlur,
    onKeyDown,
    disabled: props.disabled,
    readOnly: props.readOnly,
    required: props.required
  }, ariaProps))), React2.createElement("div", {
    className: boxClass
  }, checkboxIcon)), hasTooltip && React2.createElement(Tooltip, _extends2({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions)));
}));
Checkbox.displayName = "Checkbox";
export {
  Checkbox
};
//# sourceMappingURL=primereact_checkbox.js.map
