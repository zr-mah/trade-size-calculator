(window["webpackJsonpreact-trade-size-calculator"]=window["webpackJsonpreact-trade-size-calculator"]||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(8),s=(a(27),a(28),a(29),a(1)),i=a(15),u=a(16),m=a(17),d=a(20),v=a(18),p=a(21),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).copyToClipboard=function(e){var t="document.querySelectorAll('[value=".concat(a.state.positionMode,"]')[0].click();\n              var nativeInputValueSetter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;\n              var inputEvent = new Event('input', { bubbles: true});\n              var entryPrice = document.querySelectorAll('[name=price]')[0];\n              entryPrice.dispatchEvent(new Event('focus', { bubbles: true}));\n              nativeInputValueSetter.call(entryPrice, '").concat(a.state.entryPrice,"');\n              entryPrice.dispatchEvent(inputEvent);\n              var leverage = document.querySelector('[name=leverage]');\n              nativeInputValueSetter.call(leverage, '").concat(a.state.leverage,"');\n              leverage.dispatchEvent(inputEvent);\n              var contractSize = document.querySelector('[name=sum]');\n              nativeInputValueSetter.call(contractSize, '").concat(a.state.contracts,"');\n              contractSize.dispatchEvent(inputEvent);\n              var stopLossPrice = document.querySelectorAll('[name=price]')[1];\n              nativeInputValueSetter.call(stopLossPrice, '").concat(a.state.stopLoss,"');\n              stopLossPrice.dispatchEvent(inputEvent);\n              var takeProfitPrice = document.querySelector('[name=orders\\\\.0\\\\.price]');\n              nativeInputValueSetter.call(takeProfitPrice, '").concat(a.state.targetPrice,"');\n              takeProfitPrice.dispatchEvent(inputEvent);\n            ");a.textArea.value=t,a.textArea.select(),a.textArea.setSelectionRange(0,99999);var n=document.execCommand("copy");a.setState({copySuccess:n?"Copied!":"Unable to copy"})},a.state={accountSize:0,maxLoss:0,entryPrice:0,targetPrice:0,stopLoss:0,copySuccess:"",rewardToRisk:"",riskInDollars:"",profitAndLoss:"",leverage:"",contracts:"",units:"",tradeStatus:"",positionMode:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e,t){var a=this;this.setState(Object(i.a)({},e,t.target.value),(function(){a.doCalculations(a)}))}},{key:"copyText",value:function(){var e=document.getElementById("consoleScript");e.style.display="block",e.select();try{document.execCommand("Copy")?console.log("Copied"):console.log("Cannot copy text")}catch(t){console.log("Cannot copy text")}e.style.display="none"}},{key:"getRewardToRisk",value:function(e){var t=Math.abs((e.state.entryPrice-e.state.targetPrice)/e.state.entryPrice)/Math.abs((e.state.entryPrice-e.state.stopLoss)/e.state.entryPrice);Number.isNaN(t)||void 0===t||e.setState({rewardToRisk:t.toFixed(2),tradeStatus:t<1?"short":""})}},{key:"getRiskInDollars",value:function(e){var t=this.getPercentageValue(e.state.maxLoss)*e.state.accountSize;Number.isNaN(t)||void 0===t||e.setState({riskInDollars:t})}},{key:"getProfitAndLoss",value:function(e){var t=Math.abs((e.state.entryPrice-e.state.targetPrice)/e.state.entryPrice)*e.state.contracts,a=this.state.entryPrice<this.state.targetPrice?"long":"short";Number.isNaN(t)||void 0===t||e.setState({profitAndLoss:t.toFixed(4),positionMode:a})}},{key:"getLeverage",value:function(e){var t=e.state.entryPrice,a=e.state.targetPrice,n=e.state.stopLoss,r=n/100,c=0;c=t<a?(n-r)/(t-(n-.99*r)):(n+r)/(1.01*(n+r)-t),Number.isNaN(c)||void 0===c||e.setState({leverage:Math.abs(Math.trunc(c))})}},{key:"getContracts",value:function(e,t){var a=e.state.accountSize*this.getPercentageValue(e.state.maxLoss)/((e.state.entryPrice-e.state.stopLoss)/e.state.entryPrice);Number.isNaN(a)||void 0===a||e.setState({contracts:Math.abs(a.toFixed(4))},(function(){t()}))}},{key:"getUnits",value:function(e){var t=e.state.contracts/e.state.entryPrice;Number.isNaN(t)||void 0===t||e.setState({units:t.toFixed(3)})}},{key:"doCalculations",value:function(e){var t=this;this.getContracts(e,(function(){t.getUnits(e),t.getProfitAndLoss(e)})),this.getRewardToRisk(e),this.getRiskInDollars(e),this.getLeverage(e)}},{key:"getPercentageValue",value:function(e){return e/100}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Calculator"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Account Size"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Account Size",onChange:function(t){return e.handleChange("accountSize",t)}}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Reward:Risk"),r.a.createElement("input",{type:"text",className:"form-control ".concat(this.state.tradeStatus),disabled:!0,value:this.state.rewardToRisk})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Max Loss %"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Max Loss %",step:".01",onChange:function(t){return e.handleChange("maxLoss",t)}}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Risk in $"),r.a.createElement("input",{type:"text",className:"form-control",disabled:!0,value:this.state.riskInDollars})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Entry Price"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Entry Price",onChange:function(t){return e.handleChange("entryPrice",t)}}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Profit And Loss"),r.a.createElement("input",{type:"text",className:"form-control ".concat(this.state.positionMode),disabled:!0,value:this.state.profitAndLoss})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Target Price"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Target Price",onChange:function(t){return e.handleChange("targetPrice",t)}}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Leverage"),r.a.createElement("input",{type:"text",className:"form-control",disabled:!0,value:this.state.leverage})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Stop Loss Price"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Enter Stop Loss Price",onChange:function(t){return e.handleChange("stopLoss",t)}}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Contracts"),r.a.createElement("input",{type:"text",className:"form-control",disabled:!0,value:this.state.contracts})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{readOnly:"readonly",className:"form-control",id:"consoleScript",ref:function(t){return e.textArea=t}}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Units"),r.a.createElement("input",{disabled:!0,type:"text",className:"form-control",value:this.state.units})))),r.a.createElement("button",{className:"btn btn-dark btn-lg btn-block",onClick:function(){return e.copyToClipboard()}},"Copy Code"),r.a.createElement("p",null,this.state.copySuccess))}}]),t}(n.Component);var g=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"outer"},r.a.createElement("div",{className:"inner"},r.a.createElement(s.a,{exact:!0,path:"/",component:E})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.92132e93.chunk.js.map