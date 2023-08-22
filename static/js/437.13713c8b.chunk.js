"use strict";(self.webpackChunktranslango=self.webpackChunktranslango||[]).push([[437],{4758:function(e,o,n){n.d(o,{Z:function(){return S}});var a=n(4942),t=n(3366),r=n(7462),l=n(7313),c=n(3061),i=n(1921),d=n(7551),s=n(7423),u=n(4750),p=n(6417),m=(0,u.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),f=(0,u.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=(0,u.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=n(1615),v=n(9394),Z=n(8564),g=n(7430),k=n(2298);function x(e){return(0,k.Z)("MuiCheckbox",e)}var y=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),P=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=(0,Z.ZP)(s.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,n.indeterminate&&o.indeterminate,"default"!==n.color&&o["color".concat((0,h.Z)(n.color))]]}})((function(e){var o,n=e.theme,t=e.ownerState;return(0,r.Z)({color:(n.vars||n).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===t.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,d.Fq)("default"===t.color?n.palette.action.active:n.palette[t.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(o={},(0,a.Z)(o,"&.".concat(y.checked,", &.").concat(y.indeterminate),{color:(n.vars||n).palette[t.color].main}),(0,a.Z)(o,"&.".concat(y.disabled),{color:(n.vars||n).palette.action.disabled}),o))})),R=(0,p.jsx)(f,{}),w=(0,p.jsx)(m,{}),F=(0,p.jsx)(b,{}),S=l.forwardRef((function(e,o){var n,a,d=(0,v.Z)({props:e,name:"MuiCheckbox"}),s=d.checkedIcon,u=void 0===s?R:s,m=d.color,f=void 0===m?"primary":m,b=d.icon,Z=void 0===b?w:b,g=d.indeterminate,k=void 0!==g&&g,y=d.indeterminateIcon,S=void 0===y?F:y,z=d.inputProps,B=d.size,I=void 0===B?"medium":B,N=d.className,j=(0,t.Z)(d,P),L=k?S:Z,M=k?S:u,O=(0,r.Z)({},d,{color:f,indeterminate:k,size:I}),E=function(e){var o=e.classes,n=e.indeterminate,a=e.color,t={root:["root",n&&"indeterminate","color".concat((0,h.Z)(a))]},l=(0,i.Z)(t,x,o);return(0,r.Z)({},o,l)}(O);return(0,p.jsx)(C,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":k},z),icon:l.cloneElement(L,{fontSize:null!=(n=L.props.fontSize)?n:I}),checkedIcon:l.cloneElement(M,{fontSize:null!=(a=M.props.fontSize)?a:I}),ownerState:O,ref:o,className:(0,c.Z)(E.root,N)},j,{classes:E}))}))},3929:function(e,o,n){n.d(o,{Z:function(){return y}});var a=n(4942),t=n(3366),r=n(7462),l=n(7313),c=n(3061),i=n(1921),d=n(9008),s=n(1113),u=n(1615),p=n(8564),m=n(9394),f=n(7430),b=n(2298);function h(e){return(0,b.Z)("MuiFormControlLabel",e)}var v=(0,f.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),Z=n(300),g=n(6417),k=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],x=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[(0,a.Z)({},"& .".concat(v.label),o.label),o.root,o["labelPlacement".concat((0,u.Z)(n.labelPlacement))]]}})((function(e){var o=e.theme,n=e.ownerState;return(0,r.Z)((0,a.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(v.disabled),{cursor:"default"}),"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,a.Z)({},"& .".concat(v.label),(0,a.Z)({},"&.".concat(v.disabled),{color:(o.vars||o).palette.text.disabled})))})),y=l.forwardRef((function(e,o){var n,a=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),p=a.className,f=a.componentsProps,b=void 0===f?{}:f,v=a.control,y=a.disabled,P=a.disableTypography,C=a.label,R=a.labelPlacement,w=void 0===R?"end":R,F=a.slotProps,S=void 0===F?{}:F,z=(0,t.Z)(a,k),B=(0,d.Z)(),I=y;"undefined"===typeof I&&"undefined"!==typeof v.props.disabled&&(I=v.props.disabled),"undefined"===typeof I&&B&&(I=B.disabled);var N={disabled:I};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof v.props[e]&&"undefined"!==typeof a[e]&&(N[e]=a[e])}));var j=(0,Z.Z)({props:a,muiFormControl:B,states:["error"]}),L=(0,r.Z)({},a,{disabled:I,labelPlacement:w,error:j.error}),M=function(e){var o=e.classes,n=e.disabled,a=e.labelPlacement,t=e.error,r={root:["root",n&&"disabled","labelPlacement".concat((0,u.Z)(a)),t&&"error"],label:["label",n&&"disabled"]};return(0,i.Z)(r,h,o)}(L),O=null!=(n=S.typography)?n:b.typography,E=C;return null==E||E.type===s.Z||P||(E=(0,g.jsx)(s.Z,(0,r.Z)({component:"span"},O,{className:(0,c.Z)(M.label,null==O?void 0:O.className),children:E}))),(0,g.jsxs)(x,(0,r.Z)({className:(0,c.Z)(M.root,p),ownerState:L,ref:o},z,{children:[l.cloneElement(v,N),E]}))}))},7423:function(e,o,n){n.d(o,{Z:function(){return x}});var a=n(9439),t=n(3366),r=n(7462),l=n(7313),c=n(3061),i=n(1921),d=n(1615),s=n(8564),u=n(522),p=n(9008),m=n(7999),f=n(7430),b=n(2298);function h(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=n(6417),Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,s.ZP)(m.Z)((function(e){var o=e.ownerState;return(0,r.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),k=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=l.forwardRef((function(e,o){var n=e.autoFocus,l=e.checked,s=e.checkedIcon,m=e.className,f=e.defaultChecked,b=e.disabled,x=e.disableFocusRipple,y=void 0!==x&&x,P=e.edge,C=void 0!==P&&P,R=e.icon,w=e.id,F=e.inputProps,S=e.inputRef,z=e.name,B=e.onBlur,I=e.onChange,N=e.onFocus,j=e.readOnly,L=e.required,M=e.tabIndex,O=e.type,E=e.value,H=(0,t.Z)(e,Z),q=(0,u.Z)({controlled:l,default:Boolean(f),name:"SwitchBase",state:"checked"}),T=(0,a.Z)(q,2),V=T[0],D=T[1],A=(0,p.Z)(),W=b;A&&"undefined"===typeof W&&(W=A.disabled);var G="checkbox"===O||"radio"===O,J=(0,r.Z)({},e,{checked:V,disabled:W,disableFocusRipple:y,edge:C}),K=function(e){var o=e.classes,n=e.checked,a=e.disabled,t=e.edge,r={root:["root",n&&"checked",a&&"disabled",t&&"edge".concat((0,d.Z)(t))],input:["input"]};return(0,i.Z)(r,h,o)}(J);return(0,v.jsxs)(g,(0,r.Z)({component:"span",className:(0,c.Z)(K.root,m),centerRipple:!0,focusRipple:!y,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){B&&B(e),A&&A.onBlur&&A.onBlur(e)},ownerState:J,ref:o},H,{children:[(0,v.jsx)(k,(0,r.Z)({autoFocus:n,checked:l,defaultChecked:f,className:K.input,disabled:W,id:G&&w,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;D(o),I&&I(e,o)}},readOnly:j,ref:S,required:L,ownerState:J,tabIndex:M,type:O},"checkbox"===O&&void 0===E?{}:{value:E},F)),V?s:R]}))}))}}]);