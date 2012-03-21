YUI.add("button",function(e){var c=e.ButtonCore.CLASS_NAMES,b=e.ButtonCore.ARIA_STATES,f=e.ButtonCore.ARIA_ROLES;function a(g){a.superclass.constructor.apply(this,arguments);}e.extend(a,e.Widget,{BOUNDING_TEMPLATE:e.ButtonCore.prototype.TEMPLATE,CONTENT_TEMPLATE:null,initializer:function(g){this._host=this.get("boundingBox");},bindUI:function(){var g=this;g.after("labelChange",g._afterLabelChange);g.after("disabledChange",g._afterDisabledChange);},syncUI:function(){var g=this;g._uiSetLabel(g.get("label"));g._uiSetDisabled(g.get("disabled"));},_afterLabelChange:function(g){this._uiSetLabel(g.newVal);},_afterDisabledChange:function(g){this._uiSetDisabled(g.newVal);}},{NAME:"button",ATTRS:{label:{value:e.ButtonCore.ATTRS.label.value},disabled:{value:false}},HTML_PARSER:{label:function(g){this._host=g;return this._getLabel();},disabled:function(g){return g.getDOMNode().disabled;}},CLASS_NAMES:c});e.mix(a.prototype,e.ButtonCore.prototype);function d(g){a.superclass.constructor.apply(this,arguments);}e.extend(d,a,{trigger:"click",selectedAttrName:"",initializer:function(g){var i=this,j=i.get("type"),k=(j==="checkbox"?"checked":"pressed"),h=g[k]||false;i.addAttr(k,{value:h});i.selectedAttrName=k;},destructor:function(){delete this.selectedAttrName;},bindUI:function(){var h=this,g=h.get("contentBox");d.superclass.bindUI.call(h);g.on(h.trigger,h.toggle,h);h.after(h.selectedAttrName+"Change",h._afterSelectedChange);},syncUI:function(){var h=this,g=h.get("contentBox"),j=h.get("type"),i=d.ARIA_ROLES,l=(j==="checkbox"?i.CHECKBOX:i.TOGGLE),k=h.selectedAttrName;d.superclass.syncUI.call(h);g.set("role",l);h._uiSetSelected(h.get(k));},_afterSelectedChange:function(g){this._uiSetSelected(g.newVal);},_uiSetSelected:function(l){var i=this,g=i.get("contentBox"),h=d.ARIA_STATES,j=i.get("type"),k=(j==="checkbox"?h.CHECKED:h.PRESSED);g.toggleClass(a.CLASS_NAMES.SELECTED,l);g.set(k,l);},toggle:function(){var g=this;g._set(g.selectedAttrName,!g.get(g.selectedAttrName));}},{NAME:"toggleButton",ATTRS:{type:{value:"toggle",writeOnce:"initOnly"}},HTML_PARSER:{checked:function(g){return g.hasClass(c.SELECTED);},pressed:function(g){return g.hasClass(c.SELECTED);}},ARIA_STATES:b,ARIA_ROLES:f,CLASS_NAMES:c});e.Button=a;e.ToggleButton=d;},"@VERSION@",{requires:["button-core","cssbutton","widget"]});