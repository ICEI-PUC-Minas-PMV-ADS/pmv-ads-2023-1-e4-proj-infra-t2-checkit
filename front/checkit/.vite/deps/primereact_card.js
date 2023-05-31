import {
  ComponentBase
} from "./chunk-RCDTQEAW.js";
import {
  ObjectUtils,
  classNames,
  mergeProps
} from "./chunk-X5JUNQCX.js";
import {
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/primereact/card/card.esm.js
var React = __toESM(require_react());
var CardBase = ComponentBase.extend({
  defaultProps: {
    __TYPE: "Card",
    id: null,
    header: null,
    footer: null,
    title: null,
    subTitle: null,
    style: null,
    className: null,
    children: void 0
  }
});
var Card = React.forwardRef(function(inProps, ref) {
  var props = CardBase.getProps(inProps);
  var elementRef = React.useRef(ref);
  var _CardBase$setMetaData = CardBase.setMetaData({
    props
  }), ptm = _CardBase$setMetaData.ptm;
  var createHeader = function createHeader2() {
    var headerProps = mergeProps({
      className: "p-card-header"
    }, ptm("header"));
    if (props.header) {
      return React.createElement("div", headerProps, ObjectUtils.getJSXElement(props.header, props));
    }
    return null;
  };
  var createBody = function createBody2() {
    var titleProps = mergeProps({
      className: "p-card-title"
    }, ptm("title"));
    var title = props.title && React.createElement("div", titleProps, ObjectUtils.getJSXElement(props.title, props));
    var subTitleProps = mergeProps({
      className: "p-card-subtitle"
    }, ptm("subTitle"));
    var subTitle = props.subTitle && React.createElement("div", subTitleProps, ObjectUtils.getJSXElement(props.subTitle, props));
    var contentProps = mergeProps({
      className: "p-card-content"
    }, ptm("content"));
    var children = props.children && React.createElement("div", contentProps, props.children);
    var footerProps = mergeProps({
      className: "p-card-footer"
    }, ptm("footer"));
    var footer = props.footer && React.createElement("div", footerProps, ObjectUtils.getJSXElement(props.footer, props));
    var bodyProps = mergeProps({
      className: "p-card-body"
    }, ptm("body"));
    return React.createElement("div", bodyProps, title, subTitle, children, footer);
  };
  React.useEffect(function() {
    ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  var rootProps = mergeProps({
    id: props.id,
    ref: elementRef,
    style: props.style,
    className: classNames("p-card p-component", props.className)
  }, CardBase.getOtherProps(props), ptm("root"));
  var header = createHeader();
  var body = createBody();
  return React.createElement("div", rootProps, header, body);
});
Card.displayName = "Card";
export {
  Card
};
//# sourceMappingURL=primereact_card.js.map
