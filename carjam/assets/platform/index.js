System.register("chunks:///_virtual/platform",["./RecordTemp.ts","./RewardedVideoTemp.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/RecordTemp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CoreImport.ts"],(function(t){var e,o,n,i,s,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy},function(t){n=t.ccclass,i=t.winSize,s=t.Times,r=t.BaseComponent2}],execute:function(){var c;o._RF.push({},"8fead3vpRJCebltsTfegXF2","RecordTemp",void 0);t("RecordTemp",n("RecordTemp")(c=function(t){function o(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this)._startTime=-1,e.duration=-1,e._onStartRecord=null,e._onStopRecord=null,e.isUpdate=!1,e}e(o,t);var n=o.prototype;return n.onLoad=function(){this.setPositionY(i().height,!0)},n.startRecord=function(t){var e=this;this.duration=t,this._startTime=s.second(),this.isUpdate=!0,this.getCountDownByLabel("开始"),this.scheduleOnce((function(){e._onStartRecord&&e._onStartRecord()}),1)},n.pauseRecord=function(){this.isUpdate=!1,this.getCountDownByLabel("暂停")},n.resumeRecord=function(){this.isUpdate=!0},n.stopRecord=function(){var t=this;this.isUpdate=!1,this.Label.string="停止",this.scheduleOnce((function(){t._onStopRecord&&t._onStopRecord()}),1)},n.update=function(){this.isUpdate&&(this.getCountDownByLabel("进行中")||this.stopRecord())},n.getCountDownByLabel=function(t){var e=this.getCountDown();return-1!=e&&e>=0&&(this.Label.string=t+s.numMinute(1e3*e),!0)},n.getCountDown=function(){return-1==this._startTime?-1:this._startTime+this.duration-s.second()},n.onStartRecord=function(t){this._onStartRecord=t},n.onStopRecord=function(t){this._onStopRecord=t},o}(r))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/RewardedVideoTemp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CoreImport.ts"],(function(e){var i,t,n,o,l,r;return{setters:[function(e){i=e.inheritsLoose},function(e){t=e.cclegacy},function(e){n=e.ccclass,o=e.winSize,l=e._timer,r=e.BaseComponent2}],execute:function(){var s;t._RF.push({},"51e35+FBKhL05Ae9ZXXM/rW","RewardedVideoTemp",void 0);e("RewardedVideoTemp",n("RewardedVideoTemp")(s=function(e){function t(){for(var i,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(i=e.call.apply(e,[this].concat(n))||this).cLabelTime=null,i.onCloseCallBack=null,i}i(t,e);var n=t.prototype;return n.onLoad=function(){this.autoMember(),this.setSize(o())},n.onEnable=function(){l.clearUpdateAddTime(this.uuid+"test"),this.SwitchChildrenCC.index=1},n.update=function(e){if(0!=this.SwitchChildrenCC.index){var i=l.updateAddTime(this.uuid+"test");this.cLabelTime.string=Math.floor(.5-i)+"秒",i>=.5&&(this.SwitchChildrenCC.index=0)}},n.onClickClose=function(){this.onCloseCallBack&&(0==this.SwitchChildrenCC.index?this.onCloseCallBack(!0):this.onCloseCallBack(!1))},t}(r))||s);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/platform', 'chunks:///_virtual/platform'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});