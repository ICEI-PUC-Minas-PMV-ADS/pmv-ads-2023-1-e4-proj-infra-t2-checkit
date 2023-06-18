import {
  ComponentBase
} from "./chunk-RCDTQEAW.js";
import {
  classNames,
  mergeProps
} from "./chunk-X5JUNQCX.js";
import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/primereact/progressbar/progressbar.esm.js
var React = __toESM(require_react());
var ProgressBarBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "ProgressBar",
    id: null,
    value: null,
    showValue: true,
    unit: "%",
    style: null,
    className: null,
    mode: "determinate",
    displayValueTemplate: null,
    color: null,
    children: void 0
  }
});
var ProgressBar = React.memo(React.forwardRef(function(inProps, ref) {
  var props = ProgressBarBase.getProps(inProps);
  var _ProgressBarBase$setM = ProgressBarBase.setMetaData({
    props
  }), ptm = _ProgressBarBase$setM.ptm;
  var elementRef = React.useRef(null);
  var createLabel = function createLabel2() {
    if (props.showValue && props.value != null) {
      var label = props.displayValueTemplate ? props.displayValueTemplate(props.value) : props.value + props.unit;
      return label;
    }
    return null;
  };
  var createDeterminate = function createDeterminate2() {
    var className = classNames("p-progressbar p-component p-progressbar-determinate", props.className);
    var label = createLabel();
    var rootProps = mergeProps({
      id: props.id,
      ref: elementRef,
      className,
      style: props.style,
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuenow": props.value,
      "aria-valuemax": "100"
    }, ProgressBarBase.getOtherProps(props), ptm("root"));
    var valueProps = mergeProps({
      className: "p-progressbar-value p-progressbar-value-animate",
      style: {
        width: props.value + "%",
        display: "flex",
        backgroundColor: props.color
      }
    }, ptm("value"));
    var labelProps = mergeProps({
      className: "p-progressbar-label"
    }, ptm("label"));
    return React.createElement("div", rootProps, React.createElement("div", valueProps, props.value != null && props.value !== 0 && props.showValue && React.createElement("div", labelProps, label)));
  };
  var createIndeterminate = function createIndeterminate2() {
    var className = classNames("p-progressbar p-component p-progressbar-indeterminate", props.className);
    var rootProps = mergeProps({
      id: props.id,
      ref: elementRef,
      className,
      style: props.style,
      role: "progressbar"
    }, ProgressBarBase.getOtherProps(props), ptm("root"));
    var indeterminateContainerProps = mergeProps({
      className: "p-progressbar-indeterminate-container"
    }, ptm("indeterminateContainer"));
    var valueProps = mergeProps({
      className: "p-progressbar-value p-progressbar-value-animate",
      style: {
        backgroundColor: props.color
      }
    }, ptm("value"));
    return React.createElement("div", rootProps, React.createElement("div", indeterminateContainerProps, React.createElement("div", valueProps)));
  };
  React.useImperativeHandle(ref, function() {
    return {
      props,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  if (props.mode === "determinate")
    return createDeterminate();
  else if (props.mode === "indeterminate")
    return createIndeterminate();
  else
    throw new Error(props.mode + " is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'");
}));
ProgressBar.displayName = "ProgressBar";
export {
  ProgressBar
};
//# sourceMappingURL=primereact_progressbar.js.map
