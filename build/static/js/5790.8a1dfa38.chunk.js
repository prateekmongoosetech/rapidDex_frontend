"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5790,2011],{25543:(e,i,o)=>{o.r(i),o.d(i,{default:()=>k});var t=o(92936),n=o(5985);const r=o.p+"static/media/404-page-dark.f24684e761633ae99402.png",a=o.p+"static/media/404-page-light.c448d3fd36de14609aba.png";var l=o(3115),s=o(75603),d=o(36664),c=o(43454),u=o(56363),p=o(74534),h=o(48313),v=o(97994);const x=d.ZP.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,m=d.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=(0,d.ZP)(m)`
  gap: 30px;
`,g=(0,d.ZP)(m)`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function k({title:e,subtitle:i,actionButton:o}){const d=(0,p.Gv)(),k=(0,s.d)(),y=k?u.T.LargeHeader:u.T.Hero,j=k?u.T.HeadlineMedium:u.T.HeadlineLarge;return(0,t.jsx)(g,{children:(0,t.jsxs)(h.default,{logImpression:!0,page:n.yJ.NOT_FOUND,children:[(0,t.jsxs)(f,{children:[(0,t.jsxs)(m,{children:[e??(0,t.jsx)(y,{children:"404"}),i??(0,t.jsx)(j,{color:"neutral2",children:(0,t.jsx)(v.Trans,{i18nKey:"common.pageNotFound"})})]}),(0,t.jsx)(x,{src:d?r:a,alt:"Liluni"})]}),o??(0,t.jsx)(l.Hm,{as:c.Link,to:"/",children:(0,t.jsx)(v.Trans,{i18nKey:"notFound.oops"})})]})})}},65042:(e,i,o)=>{o.r(i),o.d(i,{default:()=>Dt});var t=o(92936),n=o(5985),r=o(76078),a=o(89878),l=o(85976),s=o(17466),d=o(77287),c=o(54842);class u{_data=null;_options;constructor(e){this._options=e,this._options.hoveredTick=e.activeTick}draw(e,i){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,i)))}update(e,i){this._data=e,this._options={...this._options,...i}}_drawImpl(e,i){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;const o=e.context,t=this._data.bars.map((e=>({x:e.x,y:i(e.originalData.liquidity)??0,tick:e.originalData.tick})));(0,d.XV)(t,this._data.barSpacing,e.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const n=i(0)??0;o.fillStyle=this._options.tokenAColor;for(let r=this._data.visibleRange.from;r<this._data.visibleRange.to;r++){const i=t[r],a=i.column,l=this._options.activeTick===i.tick,s=this._options.hoveredTick===i.tick;if(!a)return;const u=Math.min(Math.max(e.horizontalPixelRatio,a.right-a.left),this._data.barSpacing*e.horizontalPixelRatio),p=.3*u,h=u-2*p,v=(0,d.n1)(n,i.y,e.verticalPixelRatio);if(s){const e=.3*o.canvas.height,i=o.canvas.height-e;o.fillStyle=this._options.highlightColor,(0,c.Dk)(o,a.left+p,e,h,i,8),o.globalAlpha=1}else o.globalAlpha=.4;if(l?o.fillStyle=this._options.tokenBColor:void 0===this._options.activeTick?o.fillStyle=this._options.color??"white":this._options.activeTick>i.tick?o.fillStyle=this._options.tokenBColor:this._options.activeTick<i.tick&&(o.fillStyle=this._options.tokenAColor),(0,c.Dk)(o,a.left+p,v.position,h,v.length,8),o.globalAlpha=1,l&&this._options.activeTickProgress){o.globalCompositeOperation="source-atop";const e=v.length*this._options.activeTickProgress,i=v.position+(v.length-e);o.fillStyle=this._options.tokenAColor,o.beginPath(),o.fillRect(a.left,i,u,e),o.globalCompositeOperation="source-over"}}}}var p=o(69632);class h{_renderer;_tokenAColor;_tokenBColor;_highlightColor;constructor(e){this._tokenAColor=e.tokenAColor,this._renderer=new u(e),this._tokenBColor=e.tokenBColor,this._highlightColor=e.highlightColor}priceValueBuilder(e){return[0,e.liquidity]}isWhitespace(e){return!e.liquidity}renderer(){return this._renderer}update(e,i){this._renderer.update(e,i)}defaultOptions(){return{...p.Qb,tokenAColor:this._tokenAColor,tokenBColor:this._tokenBColor,highlightColor:this._highlightColor}}}var v=o(68707),x=o(76531),m=o(61592),f=o.n(m),g=o(45779),k=o(64972);function y(e,i,o,t,n,r,a){try{var l=e[r](a),s=l.value}catch(d){return void o(d)}l.done?i(s):Promise.resolve(s).then(t,n)}function j(e){return function(){var i=this,o=arguments;return new Promise((function(t,n){var r=e.apply(i,o);function a(e){y(r,t,n,a,l,"next",e)}function l(e){y(r,t,n,a,l,"throw",e)}a(void 0)}))}}class b extends s.BH{series;activeTick;constructor(e,i){super(e,i),this.series=this.api.addCustomSeries(new h(i)),this.series.setData(this.data),this.updateOptions(i),this.fitContent()}updateOptions(e){super.updateOptions(e,{localization:{locale:e.locale},rightPriceScale:{visible:!1,borderVisible:!1,scaleMargins:{top:.35,bottom:0},autoScale:!0},timeScale:{visible:!1,fixLeftEdge:!0,fixRightEdge:!0,borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}}});const{data:i,activeTick:o}=e;this.activeTick=o,this.data!==i&&(this.data=i,this.series.setData(i),this.fitContent()),this.series.applyOptions({priceFormat:{type:"volume"},priceLineVisible:!1,lastValueVisible:!1}),this.series.applyOptions(e)}onSeriesHover(e){var i;super.onSeriesHover(e);const o={hoveredTick:(null===(i=e)||void 0===i?void 0:i.item.tick)??this.activeTick};this.series.applyOptions(o)}activeTickIndex(){return this.data.findIndex((e=>e.tick===this.activeTick))}fitContent(){const e=this.data.length,i=this.data.findIndex((e=>e.tick===this.activeTick)),o=-1!==i?i:e/2;this.api.timeScale().setVisibleLogicalRange({from:Math.max(o-50,0),to:Math.min(o+50,this.data.length)})}}const P=v.BigNumber.from(2).pow(128).sub(1);function T(e){return r.CurrencyAmount.fromRawAmount(e,P.toString())}function w(){return(w=j((function*(e,i,o,t,n){if(n.currentTick&&n.sqrtPriceX96&&n.liquidity)try{const r=f().greaterThan(t.liquidityNet,f().BigInt(0))?t.liquidityNet:f().multiply(t.liquidityNet,f().BigInt("-1")),l=[{index:t.tick,liquidityGross:r,liquidityNet:f().multiply(t.liquidityNet,f().BigInt("-1"))},{index:t.tick+a.TICK_SPACINGS[o],liquidityGross:r,liquidityNet:t.liquidityNet}],s=new a.Pool(e,i,o,n.sqrtPriceX96,t.liquidityActive,n.currentTick,l),d=a.TickMath.getSqrtRatioAtTick(l[0].index),c=(yield s.getOutputAmount(T(e),d))[0],u=parseFloat(t.sdkPrice.invert().quote(c).toExact()),p=a.TickMath.getSqrtRatioAtTick(l[1].index),h=(yield s.getOutputAmount(T(i),p))[0];return{amount0Locked:u,amount1Locked:parseFloat(t.sdkPrice.quote(h).toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function $(e,i,o,t){return C.apply(this,arguments)}function C(){return(C=j((function*(e,i,o,t){try{const n=a.TICK_SPACINGS[o],l=f().greaterThan(t.liquidityNet,f().BigInt(0))?t.liquidityNet:f().multiply(t.liquidityNet,f().BigInt("-1")),s=a.TickMath.getSqrtRatioAtTick(t.tick),d=[{index:t.tick,liquidityGross:l,liquidityNet:f().multiply(t.liquidityNet,f().BigInt("-1"))},{index:t.tick+a.TICK_SPACINGS[o],liquidityGross:l,liquidityNet:t.liquidityNet}],c=new a.Pool(e,i,Number(o),s,t.liquidityActive,t.tick,d),u=a.TickMath.getSqrtRatioAtTick(t.tick-n),p=r.CurrencyAmount.fromRawAmount(e,P.toString()),h=(yield c.getOutputAmount(p,u))[0],v=parseFloat(t.sdkPrice.invert().quote(h).toExact());return{amount0Locked:v,amount1Locked:parseFloat(h.toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function I({tokenA:e,tokenB:i,feeTier:o,isReversed:t,chainId:n}){const{formatNumber:r,formatPrice:l}=(0,k.Gb)(),s=(0,x.K)(e,i,o,n),[d,c]=(0,g.useState)();return(0,g.useEffect)((()=>{function n(){return n=j((function*(){var n;const r=s.data;if(!r)return;let d,u;const p=[];for(let c=0;c<r.length;c++){const n=r[c],h=t?1e3*c:1e3*(r.length-c),v=s.activeTick===n.tick;let x=n.sdkPrice,m=n.sdkPrice.invert();v&&s.activeTick&&s.currentTick&&(u=c,d=(s.currentTick-n.tick)/a.TICK_SPACINGS[o],x=(0,a.tickToPrice)(e,i,n.tick),m=x.invert());const{amount0Locked:f,amount1Locked:g}=yield $(e,i,o,n);p.push({tick:n.tick,liquidity:parseFloat(n.liquidityActive.toString()),price0:l({price:x,type:k.sw.SwapDetailsAmount}),price1:l({price:m,type:k.sw.SwapDetailsAmount}),time:h,amount0Locked:f,amount1Locked:g})}null===(n=p)||void 0===n||n.map(((e,i)=>{i>0&&(p[i-1].amount0Locked=e.amount0Locked,p[i-1].amount1Locked=e.amount1Locked)}));const h=void 0!==u?p[u]:void 0;if(void 0!==u&&h){const t=yield function(e,i,o,t,n){return w.apply(this,arguments)}(e,i,o,r[u],s);p[u]={...h,...t}}t||p.reverse(),c({barData:p.filter((e=>e.liquidity>0)),activeRangeData:h,activeRangePercentage:d})})),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[s,e,i,r,l,t,o]),{tickData:d,activeTick:s.activeTick,loading:s.isLoading||!d}}var S=o(6878),L=o(60654),A=o(17006),Z=o(61825),D=o(2122),V=o(70854);var E=o(15007),R=o(27165),B=o(33569),M=o(77807),_=o(61190),O=o(87075),F=o(64505),N=o(36664),q=o(61152),U=o(56363),z=o(77134),H=o(45003),K=o(58832),Q=o(36625),G=o(9450),W=o(97994);const X=356,Y=[c.oX.VOLUME,c.oX.PRICE,c.oX.LIQUIDITY],J=N.ZP.div`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,ee=N.ZP.div`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,ie=({chartType:e,onChartTypeChange:i,disabledOption:o})=>(0,t.jsx)(ee,{children:(0,t.jsx)(R.W,{options:Y,currentChartType:e,onSelectOption:i,disabledOption:o})});function oe(e,i,o,t,n,r){var a;const[l,s]=(0,g.useState)(_.XH.DAY),[d,u]=(0,g.useState)(c.oX.VOLUME),p=r===V.ProtocolVersion.V2,h=r===V.ProtocolVersion.V3,v=r===V.ProtocolVersion.V4,x={addressOrId:(null===(a=e)||void 0===a?void 0:a.idOrAddress)??"",chain:n,duration:(0,_.uw)(l),isV4:v,isV3:h,isV2:p},m=function(e,i,o,t,n,r){var a,l;return(0,D.u)(e,o,t,r,(null===(l=i)||void 0===l||null===(a=l.token0)||void 0===a?void 0:a.address)??"",n)}(x,e,i,o,t,r),f=function(e){var i,o;const{data:t,loading:n}=(0,V.usePoolVolumeHistoryQuery)({variables:e});return(0,g.useMemo)((()=>{var i,o,r;const{historicalVolume:a}=(null===(i=t)||void 0===i?void 0:i.v2Pair)??(null===(o=t)||void 0===o?void 0:o.v3Pool)??{},l=(null===(r=a)||void 0===r?void 0:r.filter((e=>null!==e)).map(Z.Yz))??[],s=(0,Z.q6)(l,c.oX.VOLUME,e.duration);return{chartType:c.oX.VOLUME,entries:l,loading:n,dataQuality:s}}),[null===(i=t)||void 0===i?void 0:i.v2Pair,null===(o=t)||void 0===o?void 0:o.v3Pool,n,e.duration])}(x);return(0,g.useMemo)((()=>{const e=(()=>{switch(d){case c.oX.PRICE:return m;case c.oX.VOLUME:return f;case c.oX.LIQUIDITY:return{chartType:c.oX.LIQUIDITY,entries:[],loading:!1,dataQuality:Z.x1.VALID}}})();return{timePeriod:l,setTimePeriod:s,setChartType:u,activeQuery:e}}),[d,f,m,l])}function te(e){var i,o,n,r,a,l,d;const{defaultChainId:u}=(0,Q.useEnabledChains)(),[p,h]=[(null===(i=e.poolData)||void 0===i?void 0:i.token0)&&(0,_.Pc)(e.poolData.token0),(null===(o=e.poolData)||void 0===o?void 0:o.token1)&&(0,_.Pc)(e.poolData.token1)],{setChartType:v,timePeriod:x,setTimePeriod:m,activeQuery:f}=oe(e.poolData,null===(n=p)||void 0===n?void 0:n.wrapped,null===(r=h)||void 0===r?void 0:r.wrapped,e.isReversed,e.chain??V.Chain.Ethereum,(null===(a=e.poolData)||void 0===a?void 0:a.protocolVersion)??V.ProtocolVersion.V3),k=(0,F.Dv)(s.N),y=e.loading||f.chartType!==c.oX.LIQUIDITY&&(null===(l=f)||void 0===l?void 0:l.loading),j=(()=>{if(!p||!h||!e.poolData||!e.chain)return(0,t.jsx)(S.M,{type:f.chartType,height:X});const i={...e,feeTier:Number(e.poolData.feeTier),height:X,timePeriod:x,tokenA:p.wrapped,tokenB:h.wrapped,chainId:(0,G.fromGraphQLChain)(e.chain)??u};if(f.chartType===c.oX.LIQUIDITY)return(0,t.jsx)(ce,{...i});if(f.dataQuality===Z.x1.INVALID||!p||!h){const e=y?void 0:(0,t.jsx)(W.Trans,{i18nKey:"chart.error.pools"});return(0,t.jsx)(S.M,{type:f.chartType,height:X,errorText:e})}const o=f.dataQuality===Z.x1.STALE;switch(f.chartType){case c.oX.PRICE:return(0,t.jsx)(ae,{...i,data:f.entries,stale:o});case c.oX.VOLUME:return(0,t.jsx)(A.x,{...i,data:f.entries,stale:o})}})(),b=(0,g.useMemo)((()=>{if(f.chartType===c.oX.PRICE){const e=E.Bz.filter((e=>e.value!==M._u.HOUR));return x===_.XH.HOUR&&m(_.XH.DAY),{options:e,selected:M.rD[x]}}return{options:E.Bz,selected:M.rD[x]}}),[f.chartType,x,m]),P=(null===(d=e.poolData)||void 0===d?void 0:d.protocolVersion)===V.ProtocolVersion.V2?c.oX.LIQUIDITY:void 0;return(0,t.jsxs)("div",{"data-testid":"pdp-chart-container",children:[j,(0,t.jsxs)(E.Os,{children:[(0,t.jsx)(ie,{chartType:f.chartType,onChartTypeChange:v,disabledOption:P}),f.chartType!==c.oX.LIQUIDITY&&(0,t.jsx)(J,{children:(0,t.jsx)(K.s,{options:b.options,selectedOption:b.selected,onSelectOption:e=>{const i=(0,M.Wz)(e);var o;i===x?null===(o=k)||void 0===o||o():m(i)}})})]})]})}const ne=N.ZP.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,re=(0,N.ZP)(U.T.HeadlineMedium)`
  ${z.cw}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function ae({tokenA:e,tokenB:i,isReversed:o,data:n,stale:a}){const{formatCurrencyAmount:d,formatPrice:u}=(0,k.Gb)(),[p,h]=o?[i,e]:[e,i],v=(0,g.useMemo)((()=>({data:n,stale:a,type:c.E4.LINE})),[n,a]),{price:x}=(0,O.ZP)(p),m=n[n.length-1];return(0,t.jsx)(s.kL,{height:X,Model:L.r4,params:v,children:e=>{var i;const o=e??m,a=Math.floor((o.value??o.close)*10**h.decimals),s=(0,t.jsxs)(ne,{children:[(0,t.jsx)(re,{children:`1 ${p.symbol} = ${d({amount:r.CurrencyAmount.fromRawAmount(h,a)})} \n            ${h.symbol}`}),(0,t.jsx)(re,{color:"neutral2",children:x?"("+u({price:x})+")":""})]});return(0,t.jsx)(l._,{value:s,additionalFields:(0,t.jsx)(L.Tg,{startingPrice:n[0],endingPrice:o}),valueFormatterType:k.sw.FiatTokenPrice,time:null===(i=e)||void 0===i?void 0:i.time})}})}const le=(0,N.ZP)(U.T.H1Medium)`
  ${H.Sj};
  line-height: 32px;
`,se=(0,N.ZP)(U.T.SubHeader)`
  ${H.Sj}
`;function de({data:e,tokenADescriptor:i,tokenBDescriptor:o,currentTick:n}){const{formatNumber:r}=(0,k.Gb)();if(!n)return null;const a=e.tick>=n?r({input:e.amount0Locked,type:k.sw.TokenQuantityStats}):0,l=e.tick<=n?r({input:e.amount1Locked,type:k.sw.TokenQuantityStats}):0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U.T.BodySmall,{children:(0,W.t)("liquidityPool.chart.tooltip.amount",{token:i,amount:a})}),(0,t.jsx)(U.T.BodySmall,{children:(0,W.t)("liquidityPool.chart.tooltip.amount",{token:o,amount:l})})]})}function ce({tokenA:e,tokenB:i,feeTier:o,isReversed:n,chainId:r}){const d=e.symbol??e.name??(0,W.t)("common.tokenA"),c=i.symbol??i.name??(0,W.t)("common.tokenB"),{tickData:u,activeTick:p,loading:h}=I({tokenA:e,tokenB:i,feeTier:o,isReversed:n,chainId:r}),v=(0,q.useTheme)(),x=(0,g.useMemo)((()=>{var e,i;return{data:(null===(e=u)||void 0===e?void 0:e.barData)??[],tokenAColor:n?v.token1:v.token0,tokenBColor:n?v.token0:v.token1,highlightColor:v.surface3,activeTick:p,activeTickProgress:null===(i=u)||void 0===i?void 0:i.activeRangePercentage}}),[p,n,v,u]);return h?(0,t.jsx)(B.sT,{}):(0,t.jsx)(s.kL,{height:X,Model:b,params:x,TooltipBody:o!==a.FeeAmount.LOWEST?({data:e})=>{var i,o;return(0,t.jsx)(de,{data:e,tokenADescriptor:d,tokenBDescriptor:c,currentTick:null===(o=u)||void 0===o||null===(i=o.activeRangeData)||void 0===i?void 0:i.tick})}:void 0,children:e=>{var i,o,n;const r=e??(null===(i=u)||void 0===i?void 0:i.activeRangeData),a=(0,t.jsxs)("div",{children:[(0,t.jsx)(le,{children:`1 ${d} = ${null===(o=r)||void 0===o?void 0:o.price0} ${c}`}),(0,t.jsx)(le,{children:`1 ${c} = ${null===(n=r)||void 0===n?void 0:n.price1} ${d}`}),r&&r.tick===p&&(0,t.jsx)(se,{color:"neutral2",paddingTop:"4px",children:(0,t.jsx)(W.Trans,{i18nKey:"pool.activeRange"})})]});return(0,t.jsx)(l._,{value:a})}})}var ue=o(48836),pe=o(99454),he=o(96857),ve=o(66203),xe=o(58543),me=o(23652),fe=o(52529);const ge=(0,N.ZP)(fe.X)`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,ke=(0,N.ZP)(fe.X)`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`;var ye=o(20837),je=o(70789),be=o(36710),Pe=o(55478),Te=o(83792),we=o(12799),$e=o(93465),Ce=o(51578),Ie=o(67656),Se=o(43454),Le=o(11947),Ae=o(80224),Ze=o(79403),De=o(54872),Ve=o(92139),Ee=o(30754),Re=o(92457);const Be=(0,N.ZP)(z.dL)`
  &:hover {
    // Override hover behavior from ExternalLink
    opacity: 1;
  }
`,Me=N.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: 'flex-start';
  width: 100%;
  ${H.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,_e=(0,N.ZP)(fe.X)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function Oe({chainId:e,poolAddress:i,token0:o,token1:n,loading:r}){var a,l;const{defaultChainId:s}=(0,Q.useEnabledChains)(),d=(0,G.toGraphQLChain)(e??s),c=`/explore/${d.toLowerCase()}`,u=`/explore/pools/${d.toLowerCase()}`;return(0,t.jsxs)(ue.zG,{"aria-label":"breadcrumb-nav",children:[(0,t.jsxs)(ue.yY,{to:c,children:[(0,t.jsx)(W.Trans,{i18nKey:"common.explore"})," ",(0,t.jsx)(Ce.Z,{size:14})]}),(0,t.jsxs)(ue.yY,{to:u,children:[(0,t.jsx)(W.Trans,{i18nKey:"common.pools"})," ",(0,t.jsx)(Ce.Z,{size:14})]}),r||!i?(0,t.jsx)(ge,{$width:200}):(0,t.jsx)(ue.f3,{address:i,poolName:`${null===(a=o)||void 0===a?void 0:a.symbol} / ${null===(l=n)||void 0===l?void 0:l.symbol}`})]})}const Fe=N.ZP.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: max-content;
  align-items: center;
`,Ne=(0,N.ZP)(U.T.HeadlineMedium)`
  font-size: 24px !important;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
`,qe=({token0:e,token1:i,chainId:o,feeTier:n,protocolVersion:a,toggleReversed:l,hookAddress:s})=>{var d,c,u,p,h;const{formatPercent:v}=(0,k.Gb)(),{defaultChainId:x}=(0,Q.useEnabledChains)(),m=(0,G.toGraphQLChain)(o??x),f=n&&v(new r.Percent(n,100*De.BIPS_BASE));return(0,t.jsxs)(Fe,{children:[(0,t.jsx)("div",{children:(0,t.jsxs)(Ne,{children:[(0,t.jsx)(Qe,{to:(0,_.dG)({address:null===(d=e)||void 0===d?void 0:d.address,chain:m}),children:null===(c=e)||void 0===c?void 0:c.symbol}),"\xa0/\xa0",(0,t.jsx)(Qe,{to:(0,_.dG)({address:null===(u=i)||void 0===u?void 0:u.address,chain:m}),children:null===(p=i)||void 0===p?void 0:p.symbol})]})}),(0,t.jsxs)(Le.k,{row:!0,gap:"$gap4",alignItems:"center",children:[(0,t.jsx)(ye.MS,{variant:"body3",$position:"left",children:null===(h=a)||void 0===h?void 0:h.toLowerCase()}),s&&(0,t.jsx)(z.dL,{href:(0,Ee.getExplorerLink)(o??x,s,Ee.ExplorerDataType.ADDRESS),children:(0,t.jsx)(ye.MS,{variant:"body3",...z.it,children:(0,Re.shortenAddress)(s,0)})}),!!f&&(0,t.jsx)(ye.MS,{variant:"body3",$position:"right",children:f})]}),(0,t.jsx)(Ae.Z,{hoverStyle:{opacity:.8},onPress:l,children:(0,t.jsx)(Ze.O,{...z.GG,size:"$icon.20",testID:"toggle-tokens-reverse-arrows",rotate:"90deg",color:"$neutral2"})})]})},Ue=(0,N.ZP)(Te.ZP)`
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  ${z.cw}
  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,ze=({address:e,chainId:i,tokens:o})=>{var n;const r=(0,q.useTheme)(),a=o[0]&&(0,_.Pc)(o[0]),l=2===o.length,s=l&&o[1]?[a,(0,_.Pc)(o[1])]:[a],d=e===we.d,c=i&&e&&(0,Ee.getExplorerLink)(i,e,d?Ee.ExplorerDataType.NATIVE:l?Ee.ExplorerDataType.ADDRESS:Ee.ExplorerDataType.TOKEN);return i&&c?(0,t.jsx)(Be,{href:c,children:(0,t.jsxs)(Ue,{children:[(0,t.jsxs)(Te.ZP,{gap:"sm",children:[l?(0,t.jsx)(me.io,{chainId:i,currencies:s,size:24}):(0,t.jsx)(xe.Z,{currency:a,size:24}),(0,t.jsx)(U.T.BodyPrimary,{children:l?(0,t.jsx)(W.Trans,{i18nKey:"common.pool"}):null===(n=o[0])||void 0===n?void 0:n.symbol}),(0,t.jsx)(U.T.BodySecondary,{children:(0,Re.shortenAddress)(e)})]}),(0,t.jsx)(Ie.Z,{size:"16px",stroke:r.neutral2})]})}):(0,t.jsx)(Ue,{children:(0,t.jsx)(ge,{$width:117})})},He={...be.jF,minWidth:235,borderRadius:"$rounded16"},Ke=({chainId:e,poolAddress:i,poolName:o,token0:n,token1:r})=>{var a,l;const s=(0,q.useTheme)(),[d,c]=(0,g.useState)(!1);return(0,t.jsxs)(Te.ZP,{width:"max-content",justify:"flex-end",gap:"sm",children:[(0,t.jsx)(pe.u,{isOpen:d,toggleOpen:c,menuLabel:e===Ve.UniverseChainId.Mainnet?(0,t.jsx)(he.P,{width:"18px",height:"18px",fill:s.neutral1}):(0,t.jsx)(ve.J,{width:"18px",height:"18px",fill:s.neutral1}),internalMenuItems:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ze,{address:i,chainId:e,tokens:[n,r]}),(0,t.jsx)(ze,{address:null===(a=n)||void 0===a?void 0:a.address,chainId:e,tokens:[n]}),(0,t.jsx)(ze,{address:null===(l=r)||void 0===l?void 0:l.address,chainId:e,tokens:[r]})]}),tooltipText:(0,W.t)("pool.explorers"),hideChevron:!0,buttonStyle:be.TX,dropdownStyle:He,adaptToSheet:!1}),(0,t.jsx)(je.Z,{name:o,utmSource:"share-pool"})]})},Qe=(0,N.ZP)(Se.Link)`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${z.iV}
`;function Ge({chainId:e,poolAddress:i,token0:o,token1:n,feeTier:r,protocolVersion:a,hookAddress:l,toggleReversed:s,loading:d}){var c,u;const p=!(0,$e.e)().sm,h=`${null===(c=o)||void 0===c?void 0:c.symbol} / ${null===(u=n)||void 0===u?void 0:u.symbol}`,v=(0,g.useMemo)((()=>o&&n?[(0,_.Pc)(o),(0,_.Pc)(n)]:[]),[o,n]);return d?(0,t.jsx)(Me,{"data-testid":"pdp-header-loading-skeleton",children:p?(0,t.jsxs)(Pe.ZP,{gap:"sm",style:{width:"100%"},children:[(0,t.jsx)(_e,{}),(0,t.jsx)(ge,{$height:40,$width:137})]}):(0,t.jsxs)(Te.ZP,{gap:"sm",children:[(0,t.jsx)(_e,{}),(0,t.jsx)(ge,{$height:40,$width:137})]})}):(0,t.jsx)(Me,{children:p?(0,t.jsxs)(Pe.ZP,{gap:"sm",style:{width:"100%"},children:[(0,t.jsxs)(Te.ZP,{gap:"md",justify:"space-between",children:[e&&(0,t.jsx)(me.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,t.jsx)(Ke,{chainId:e,poolAddress:i,poolName:h,token0:o,token1:n})]}),(0,t.jsx)(qe,{token0:o,token1:n,chainId:e,feeTier:r,protocolVersion:a,toggleReversed:s})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Te.ZP,{gap:"md",children:[e&&(0,t.jsx)(me.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,t.jsx)(qe,{token0:o,token1:n,chainId:e,feeTier:r,protocolVersion:a,toggleReversed:s,hookAddress:l})]}),(0,t.jsx)(Ke,{chainId:e,poolAddress:i,poolName:h,token0:o,token1:n})]})})}var We=o(75985),Xe=o(74689),Ye=o(94191),Je=o(6282),ei=o(43969);const ii=(0,N.ZP)(U.T.BodyPrimary)`
  display: none;

  @media (max-width: ${ei.j$.lg}px) and (min-width: ${ei.j$.xs}px) {
    display: block;
  }
  ${z.cw}
`,oi=(0,N.ZP)(Te.ZP)`
  gap: 8px;
  margin-right: 12px;
  ${z.cw}
  ${({isClickable:e})=>e&&z.iV}
`,ti=(0,N.ZP)(U.T.BodyPrimary)`
  flex-shrink: 0;

  @media (max-width: ${ei.j$.lg}px) and (min-width: ${ei.j$.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,ni=(0,N.ZP)(Te.ZP)`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${z.iV}
`,ri=(0,N.ZP)(Ye.Z)`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,ai=N.ZP.div`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${z.iV}
`,li=(0,N.ZP)(Te.ZP)`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function si({address:e,chainId:i,tokens:o,loading:n}){var r,a,l,s,d,c,u;const p=(0,q.useTheme)(),h=e===we.d,v=o[0]&&(0,_.Pc)(o[0]),[x,m]=(0,Xe.Z)(),f=(0,g.useCallback)((()=>{const i=(0,Re.isAddress)(e);i&&m(i)}),[e,m]),k=2===o.length,y=k&&o[1]?[v,(0,_.Pc)(o[1])]:[v],j=e&&i&&(0,Ee.getExplorerLink)(i,e,h?Ee.ExplorerDataType.NATIVE:k?Ee.ExplorerDataType.ADDRESS:Ee.ExplorerDataType.TOKEN),b=(0,Je.s0)(),{defaultChainId:P}=(0,Q.useEnabledChains)(),T=(0,G.toGraphQLChain)(i??P),w=(0,g.useCallback)((()=>{var e;k||b((0,_.dG)({address:null===(e=o[0])||void 0===e?void 0:e.address,chain:T}))}),[b,o,k,T]),[$,C]=(0,g.useState)(!1),I=(0,g.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&C((e=>e?"both":"start"))}}),[$]);return!n&&e&&i?(0,t.jsxs)(Te.ZP,{align:"space-between",children:[(0,t.jsxs)(oi,{"data-testid":k?`pdp-pool-logo-${null===(r=o[0])||void 0===r?void 0:r.symbol}-${null===(a=o[1])||void 0===a?void 0:a.symbol}`:`pdp-token-logo-${null===(l=o[0])||void 0===l?void 0:l.symbol}`,isClickable:!k,onClick:w,ref:I,children:[k?(0,t.jsx)(me.io,{chainId:i,currencies:y,size:20}):(0,t.jsx)(xe.Z,{currency:v,size:20}),(0,t.jsx)(ii,{children:k?(0,t.jsx)(W.Trans,{i18nKey:"common.pool"}):null===(s=o[0])||void 0===s?void 0:s.name}),(0,t.jsx)(ti,{children:k?`${null===(d=o[0])||void 0===d?void 0:d.symbol} / ${null===(c=o[1])||void 0===c?void 0:c.symbol}`:(0,t.jsxs)(Te.ZP,{gap:"4px",children:[null===(u=o[0])||void 0===u?void 0:u.symbol," ",(0,t.jsx)(Ce.Z,{size:16,color:p.neutral2})]})})]}),(0,t.jsxs)(li,{children:[!h&&(0,t.jsx)(We.ZP,{placement:"bottom",size:We.Oz.Max,show:x,text:(0,W.t)("common.copied"),children:(0,t.jsxs)(ni,{"data-testid":`copy-address-${e}`,onClick:f,children:[(0,Re.shortenAddress)(e,$?2:void 0,"both"===$?2:void 0),(0,t.jsx)(ri,{})]})}),j&&(0,t.jsx)(z.dL,{href:j,"data-testid":`explorer-url-${j}`,children:(0,t.jsx)(ai,{children:i===Ve.UniverseChainId.Mainnet?(0,t.jsx)(he.P,{width:"16px",height:"16px",fill:p.neutral1}):(0,t.jsx)(ve.J,{width:"16px",height:"16px",fill:p.neutral1})})})]})]}):(0,t.jsxs)(Te.ZP,{gap:"8px",padding:"6px 0px",children:[(0,t.jsx)(ke,{}),(0,t.jsx)(ge,{$width:117})]})}var di=o(1890),ci=o(97704),ui=o(22953),pi=o(40834);const hi=(0,N.ZP)(ui.xv)`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${ei.j$.lg}px) {
    width: 100%;
  }
`,vi=(0,N.ZP)(Pe.ZP)`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${ei.j$.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,xi=(0,N.ZP)(Pe.ZP)`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${ei.j$.sm}px) {
    min-width: 150px;
  }
`,mi=(0,N.ZP)(Te.ZP)`
  justify-content: space-between;

  @media (max-width: ${ei.j$.lg}px) {
    flex-direction: column;
  }
`,fi=(0,N.ZP)(Te.ZP)`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${ei.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,gi=(0,N.ZP)(Se.Link)`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${z.iV}
`,ki=q.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,yi=q.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,ji=N.ZP.div`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?ki:yi}
`,bi=(0,N.ZP)(fe.X)`
  width: 180px;
  height: 40px;
`,Pi=(0,N.ZP)(fe.X)`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,Ti=({token:e,chainId:i})=>{var o;const n=(0,$e.e)().lg,{formatNumber:r}=(0,k.Gb)(),a=i?(0,_.vR)(i,e):e,l=(null===(o=a)||void 0===o?void 0:o.address)===we.d&&i?(0,pi.nativeOnChain)(i):e.currency,{defaultChainId:s}=(0,Q.useEnabledChains)();return(0,t.jsxs)(fi,{children:[!n&&(0,t.jsx)(xe.Z,{currency:l,size:20,style:{marginRight:"8px"}}),r({input:e.tvl,type:k.sw.TokenQuantityStats}),"\xa0",(0,t.jsxs)(gi,{to:(0,_.dG)({address:a.address,chain:(0,G.toGraphQLChain)(i??s)}),children:[n&&(0,t.jsx)(xe.Z,{currency:l,size:16,style:{marginRight:"4px",marginLeft:"4px"}}),a.symbol]})]})};function wi({poolData:e,isReversed:i,chainId:o,loading:n}){var r,a,l,s,d,c,u,p;const h=(0,$e.e)().lg,v=(0,q.useTheme)(),x=(0,ci.U8)(null===(a=e)||void 0===a||null===(r=a.token0)||void 0===r?void 0:r.address,o),m=(0,ci.U8)(null===(s=e)||void 0===s||null===(l=s.token1)||void 0===l?void 0:l.address,o),[f,k]=(0,g.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var o,t,n,r,a,l,s,d,c,u,p,h,v,f;const g=(null===(o=e)||void 0===o?void 0:o.tvlToken0)*(null===(t=e)||void 0===t?void 0:t.token0Price)+(null===(n=e)||void 0===n?void 0:n.tvlToken1)*(null===(r=e)||void 0===r?void 0:r.token1Price),k={...null===(a=e)||void 0===a?void 0:a.token0,price:null===(l=e)||void 0===l?void 0:l.token0Price,tvl:null===(s=e)||void 0===s?void 0:s.tvlToken0,percent:(null===(d=e)||void 0===d?void 0:d.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/g,currency:x},y={...null===(u=e)||void 0===u?void 0:u.token1,price:null===(p=e)||void 0===p?void 0:p.token1Price,tvl:null===(h=e)||void 0===h?void 0:h.tvlToken1,percent:(null===(v=e)||void 0===v?void 0:v.tvlToken1)*(null===(f=e)||void 0===f?void 0:f.token1Price)/g,currency:m};return i?[y,k]:[k,y]}return[void 0,void 0]}),[x,m,i,e]);return!n&&f&&k&&e?(0,t.jsxs)(vi,{loaded:!0,children:[(0,t.jsx)(hi,{children:(0,t.jsx)(W.Trans,{i18nKey:"common.stats"})}),(0,t.jsxs)(xi,{children:[(0,t.jsx)(U.T.BodySecondary,{children:(0,t.jsx)(W.Trans,{i18nKey:"pool.balances"})}),(0,t.jsxs)(mi,{children:[(0,t.jsx)(Ti,{token:f,chainId:o}),(0,t.jsx)(Ti,{token:k,chainId:o})]}),h&&(0,t.jsxs)(Te.ZP,{"data-testid":"pool-balance-chart",children:[(0,t.jsx)(ji,{percent:f.percent,$color:v.token0,isLeft:!0}),(0,t.jsx)(ji,{percent:k.percent,$color:v.token1,isLeft:!1})]})]}),(null===(d=e)||void 0===d?void 0:d.tvlUSD)&&(0,t.jsx)(Ii,{title:(0,t.jsx)(W.Trans,{i18nKey:"common.totalValueLocked"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(c=e)||void 0===c?void 0:c.volumeUSD24H)&&(0,t.jsx)(Ii,{title:(0,t.jsx)(W.Trans,{i18nKey:"stats.24volume"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(u=e)||void 0===u?void 0:u.volumeUSD24H)&&void 0!==(null===(p=e)||void 0===p?void 0:p.feeTier)&&(0,t.jsx)(Ii,{title:(0,t.jsx)(W.Trans,{i18nKey:"stats.24fees"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,t.jsxs)(vi,{children:[(0,t.jsx)(hi,{children:(0,t.jsx)(Pi,{})}),Array.from({length:4}).map(((e,i)=>(0,t.jsxs)(Pe.ZP,{gap:"md",children:[(0,t.jsx)(ge,{}),(0,t.jsx)(bi,{})]},`loading-info-row-${i}`)))]})}const $i=(0,N.ZP)(Te.ZP)`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${ei.j$.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,Ci=(0,N.ZP)(ui.xv)`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${ei.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function Ii({title:e,value:i,delta:o}){const{formatNumber:n,formatDelta:r}=(0,k.Gb)();return(0,t.jsxs)(xi,{children:[(0,t.jsx)(U.T.BodySecondary,{children:e}),(0,t.jsxs)($i,{children:[(0,t.jsx)(Ci,{children:n({input:i,type:k.sw.FiatTokenStats})}),!!o&&(0,t.jsxs)(Te.ZP,{width:"max-content",padding:"4px 0px",children:[(0,t.jsx)(di.Kx,{delta:o}),(0,t.jsx)(U.T.BodySecondary,{children:r(o)})]})]})]})}var Si=o(54920),Li=o(65541),Ai=o(87270),Zi=o(80182),Di=o(22286),Vi=o(25105);const Ei=18;var Ri=o(44179);function Bi(e,i,o,t,n,r,a){try{var l=e[r](a),s=l.value}catch(d){return void o(d)}l.done?i(s):Promise.resolve(s).then(t,n)}function Mi(e){return function(){var i=this,o=arguments;return new Promise((function(t,n){var r=e.apply(i,o);function a(e){Bi(r,t,n,a,l,"next",e)}function l(e){Bi(r,t,n,a,l,"throw",e)}a(void 0)}))}}const _i=1e6,Oi=new Zi.Interface(Di),Fi=new Zi.Interface(Di);function Ni(e,i){return qi.apply(this,arguments)}function qi(){return(qi=Mi((function*(e,i){try{return(yield e.callStatic.multicall(i)).returnData}catch(t){var o;if((-32603===t.code||-1!==(null===(o=t.message)||void 0===o?void 0:o.indexOf("execution ran out of gas")))&&i.length>1){const o=Math.floor(i.length/2);return Promise.all([Ni(e,i.slice(0,o)),Ni(e,i.slice(o,i.length))]).then((([e,i])=>[...e,...i]))}throw Vi.logger.debug("getTokensAsync","fetchChunk","Error fetching chunk",{error:t,extra:{chunk:i}}),t}}))).apply(this,arguments)}function Ui(e,i,o){return function(e,i){if(e.length%i!==0)throw new Error("Input array length must be a multiple of desired output size");return Array.from({length:Math.floor(e.length/i)},((o,t)=>e.slice(t*i,t*i+i)))}(o,5).reduce(((o,t,n)=>{const a=function(e,i,o){try{const[t,n,a,l,s]=o,d=t.success?Oi.decodeFunctionResult("name",t.returnData)[0]:l.success?Fi.decodeFunctionResult("name",l.returnData)[0]:void 0,c=n.success?Oi.decodeFunctionResult("symbol",n.returnData)[0]:s.success?Fi.decodeFunctionResult("symbol",s.returnData)[0]:void 0,u=a.success?parseInt(a.returnData):Ei;return new r.Token(i,e,u,c,d)}catch(t){return void Vi.logger.debug("getTokensAsync","tryParseToken","Failed to parse token",{error:t,address:e,chainId:i})}}(e[n],i,t);return a&&(o[a.address]=a),o}),{})}const zi=(e,i)=>i.map((i=>({target:e,callData:i,gasLimit:_i})));const Hi={};function Ki(){return(Ki=Mi((function*(e,i,o){if(0===e.length)return{};const t=[],n=[],r=[];e.forEach((e=>{const o=(0,Ri.mn)(i,e),a=Hi[o];if(void 0!==a)r.push(a);else{const i=(0,Re.isAddress)(e);if(!i)return;t.push(i),n.push(...(l=i,zi(l,[Oi.encodeFunctionData("name"),Oi.encodeFunctionData("symbol"),Oi.encodeFunctionData("decimals"),Fi.encodeFunctionData("name"),Fi.encodeFunctionData("symbol")])))}var l}));const a=Ni(o,n).then((o=>Ui(e,i,o)));t.forEach((e=>Hi[(0,Ri.mn)(i,e)]=a.then((i=>i[e]))));const l=yield a;return(yield Promise.all(r)).forEach((e=>e&&(l[(0,Ri.x7)(e)]=e))),l}))).apply(this,arguments)}var Qi=o(55777),Gi=o(68177),Wi=o(63490),Xi=o.n(Wi),Yi=o(15841);function Ji(e,i,o,t,n,r,a){try{var l=e[r](a),s=l.value}catch(d){return void o(d)}l.done?i(s):Promise.resolve(s).then(t,n)}function eo(e){return function(){var i=this,o=arguments;return new Promise((function(t,n){var r=e.apply(i,o);function a(e){Ji(r,t,n,a,l,"next",e)}function l(e){Ji(r,t,n,a,l,"throw",e)}a(void 0)}))}}const io=Xi()("1m"),oo=(0,Gi.cn)({});const to=(e,i)=>`${i}-${e.token0}-${e.token1}-${e.fee}`,no=(0,F.O4)("poolCache",{});const ro=(0,F.O4)("cachedAsyncTokens",{});function ao(e){const i=(0,Qi.Vr)(e),o=function(){const[e,i]=(0,Gi.KO)(ro);return{get:(0,g.useCallback)(((i,o)=>{const t=e[(0,Ri.mn)(i,o)];return t?(0,Yi.deserializeToken)(t):void 0}),[e]),set:(0,g.useCallback)((e=>{e&&i((i=>({...i,[(0,Ri.x7)(e)]:(0,Yi.serializeToken)(e)})))}),[i])}}(),t=(0,g.useCallback)(function(){var e=eo((function*(e,t){const n=yield function(e,i,o){return Ki.apply(this,arguments)}(e,t,i[t]);return Object.values(n).forEach(o.set),n}));return function(i,o){return e.apply(this,arguments)}}(),[i,o]),n=(0,g.useCallback)(function(){var e=eo((function*(e,i){const n={},r=new Set;e.forEach((e=>{const t=o.get(i,e);t?n[e]=t:r.add(e)}));const a=yield t([...r],i);return{...n,...a}}));return function(i,o){return e.apply(this,arguments)}}(),[t,o]);return n}var lo=o(33127);function so(e,i,o,t,n,r,a){try{var l=e[r](a),s=l.value}catch(d){return void o(d)}l.done?i(s):Promise.resolve(s).then(t,n)}function co(e){return function(){var i=this,o=arguments;return new Promise((function(t,n){var r=e.apply(i,o);function a(e){so(r,t,n,a,l,"next",e)}function l(e){so(r,t,n,a,l,"throw",e)}a(void 0)}))}}const uo=v.BigNumber.from(2).pow(128).sub(1);function po(e){var i,o,t;const{chains:n}=(0,Q.useEnabledChains)(),l=(0,Qi.g4)(n),s=(0,Qi.Vr)(n),d=ao(n),c=function(){const[e,i]=(0,Gi.KO)(no);return{get:(0,g.useCallback)(((i,o)=>e[to(i,o)]),[e]),set:(0,g.useCallback)(((e,o,t)=>i((i=>({...i,[to(e,o)]:t})))),[i])}}(),[u,p]=function(e){const[i,o]=(0,Gi.KO)(oo),t=(0,g.useCallback)((i=>{o((o=>({...o,[e]:{result:i,stale:!1}}))),setTimeout((()=>o((o=>{var t;return i===(null===(t=o[e])||void 0===t?void 0:t.result)?{...o,[e]:{result:i,stale:!0}}:o}))),io)}),[e,o]);return[i[e],t]}(e),h=null===(i=u)||void 0===i?void 0:i.result,x=(0,g.useRef)(!1),m=!(null===(o=u)||void 0===o?void 0:o.result)&&x.current,[f,k]=(0,g.useState)({}),{priceMap:y,pricesLoading:j}=(0,Qi.Hn)(h),b=(0,g.useCallback)(function(){var i=co((function*(i,o,t){const n=o.map((o=>i.interface.encodeFunctionData("collect",[{tokenId:o,recipient:e,amount0Max:uo,amount1Max:uo}]))),r=(yield i.callStatic.multicall(n)).reduce(((e,n,r)=>(e[t.toString()+o[r]]=i.interface.decodeFunctionResult("collect",n),e)),{});k((e=>({...e,...r})))}));return function(e,o,t){return i.apply(this,arguments)}}(),[e]),P=(0,g.useCallback)(function(){var i=co((function*(i,o){const t=Array.from({length:o.toNumber()},((o,t)=>i.interface.encodeFunctionData("tokenOfOwnerByIndex",[e,t])));return(yield i.callStatic.multicall(t)).map((e=>v.BigNumber.from(e)))}));return function(e,o){return i.apply(this,arguments)}}(),[e]),T=(0,g.useCallback)(function(){var e=co((function*(e,i){const o=i.map((i=>e.interface.encodeFunctionData("positions",[i])));return(yield e.callStatic.multicall(o)).map(((o,t)=>({...e.interface.decodeFunctionResult("positions",o),tokenId:i[t]})))}));return function(i,o){return e.apply(this,arguments)}}(),[]),w=(0,g.useCallback)(function(){var i=co((function*(i,o,t){const n=new Zi.Interface(Ai.Mt),l=yield d(i.flatMap((e=>[e.token0,e.token1])),o),s=[],u=[];return i.forEach((e=>{const i=l[e.token0]??new r.Token(o,e.token0,Ei),t=l[e.token1]??new r.Token(o,e.token1,Ei);let d=c.get(e,o);if(!d){const n=(0,Li.NM)(o,r.V3_CORE_FACTORY_ADDRESSES[o]);if(!n)return;d=(0,a.computePoolAddress)({factoryAddress:n,tokenA:i,tokenB:t,fee:e.fee,chainId:(0,lo.getChainInfo)(o).sdkId}),c.set(e,o,d)}u.push([i,t]),s.push({target:d,callData:n.encodeFunctionData("slot0"),gasLimit:_i})}),[]),(yield t.callStatic.multicall(s)).returnData.reduce(((t,r,l)=>{if(r.success){const s=n.decodeFunctionResult("slot0",r.returnData);t.push(function(e,i,o,t,n,r){const l=new a.Pool(n,r,o.fee,t.sqrtPriceX96.toString(),0,t.tick),s=new a.Position({pool:l,liquidity:o.liquidity.toString(),tickLower:o.tickLower,tickUpper:o.tickUpper}),d=t.tick>=o.tickLower&&t.tick<o.tickUpper,c=o.liquidity.eq(0);return{owner:e,chainId:i,pool:l,position:s,details:o,inRange:d,closed:c}}(e,o,i[l],s,...u[l]))}else Vi.logger.debug("useMultiChainPositions","fetchPositionInfo","slot0 fetch errored",r);return t}),[])}));return function(e,o,t){return i.apply(this,arguments)}}(),[e,c,d]),$=(0,g.useCallback)(function(){var i=co((function*(i){if(!e||0===e.length)return[];try{var o;const t=l[i],n=s[i],r=yield null===(o=t)||void 0===o?void 0:o.balanceOf(e);if(!t||!n||r.lt(1))return[];const a=yield P(t,r);b(t,a,i);const d=yield T(t,a);return w(d,i,n)}catch(t){const e=new Error("Failed to fetch positions for chain",{cause:t});return Vi.logger.debug("useMultiChainPositions","fetchPositionsForChain",e.message,{error:e,chainId:i}),[]}}));return function(e){return i.apply(this,arguments)}}(),[e,T,b,P,w,l,s]),C=(0,g.useCallback)(co((function*(){x.current=!0;const e=(yield Promise.all(n.map($))).flat();x.current=!1,p(e)})),[n,$,p]);(0,g.useEffect)((()=>{var e;if(!x.current&&!1!==(null===(e=u)||void 0===e?void 0:e.stale)){if(!document.hasFocus()){const e=()=>{C(),window.removeEventListener("focus",e)};return window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}}C()}}),[C,x,null===(t=u)||void 0===t?void 0:t.stale]);return{positions:(0,g.useMemo)((()=>{var e;return null===(e=h)||void 0===e?void 0:e.map((e=>{var i,o;const t=e.chainId.toString()+e.details.tokenId,n=f[t]?[parseFloat(r.CurrencyAmount.fromRawAmount(e.pool.token0,null===(i=f[t])||void 0===i?void 0:i[0].toString()).toExact()),parseFloat(r.CurrencyAmount.fromRawAmount(e.pool.token1,null===(o=f[t])||void 0===o?void 0:o[1].toString()).toExact())]:void 0,a=[y[(0,Ri.x7)(e.pool.token0)],y[(0,Ri.x7)(e.pool.token1)]];return{...e,fees:n,prices:a}}))}),[f,h,y]),loading:j||m}}var ho=o(97456),vo=o(61808),xo=o(31320),mo=o(10849),fo=o(96238),go=o(22722),ko=o(37891),yo=o(15303),jo=o(63194),bo=o(57809),Po=o(41248),To=o(54884),wo=o(95625),$o=o(39063),Co=o(1679),Io=o(66355),So=o(73721),Lo=o(3304);function Ao(e,i,o,t,n,r,a){try{var l=e[r](a),s=l.value}catch(d){return void o(d)}l.done?i(s):Promise.resolve(s).then(t,n)}const Zo=(0,N.ZP)(Te.ZP)`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${ei.j$.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${To.k.sticky};
  }
  @media (max-width: ${ei.j$.md}px) {
    bottom: 56px;
  }
`,Do=N.ZP.button`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({$open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,$open:i})=>i?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:i})=>i?e.surface1:(0,Po.jb)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:i})=>i&&`1px solid ${e.surface3}`};
  ${z.iV}
  @media (max-width: ${ei.j$.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  }
  @media (max-width: ${ei.j$.sm}px) {
    display: ${({$hideOnMobile:e})=>e&&"none"};
    width: ${({$fixedWidth:e})=>!e&&"100%"};
  }
`,Vo=(0,N.ZP)(fe.X)`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,Eo=(0,N.ZP)(Pe.ZP)`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${vo.R0} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${ho.Vt} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${ei.j$.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${To.k.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`,Ro=(0,N.ZP)(Pe.ZP)`
  gap: 2px;
  display: none;
  @media (max-width: ${ei.j$.lg}px) {
    display: flex;
  }
`;function Bo({chainId:e,token0:i,token1:o,feeTier:n,loading:r}){var a,l,s,d,c,u,p,h,v,x;const m=(0,go.m)(),{positions:f}=po(m.address??""),y=f&&function(e,i,o,t){var n;return null===(n=e)||void 0===n?void 0:n.find((e=>{var n,r,a,l,s,d,c,u,p;return((null===(n=e)||void 0===n?void 0:n.details.token0.toLowerCase())===(null===(r=i)||void 0===r?void 0:r.address)||(null===(a=e)||void 0===a?void 0:a.details.token0.toLowerCase())===(null===(l=o)||void 0===l?void 0:l.address))&&((null===(s=e)||void 0===s?void 0:s.details.token1.toLowerCase())===(null===(d=i)||void 0===d?void 0:d.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(u=o)||void 0===u?void 0:u.address))&&(null===(p=e)||void 0===p?void 0:p.details.fee)==t&&!e.closed}))}(f,i,o,n),j=null===(a=y)||void 0===a?void 0:a.details.tokenId,b=(0,ko.o)(),{defaultChainId:P}=(0,Q.useEnabledChains)(),T=(0,Je.s0)(),w=(0,Je.TH)(),$=i&&(0,_.Pc)(i),C=o&&(0,_.Pc)(o),I=(0,So.useCurrencyInfo)($&&(0,Lo.currencyId)($)),S=(0,So.useCurrencyInfo)(C&&(0,Lo.currencyId)(C)),{data:L}=(0,fo.vv)(),{balance0:A,balance1:Z,balance0Fiat:D,balance1Fiat:V}=(0,g.useMemo)((()=>{var t,n,r,a,l,s,d,c,u,p,h,v;const x=null===(a=L)||void 0===a||null===(r=a.portfolios)||void 0===r||null===(n=r[0])||void 0===n||null===(t=n.tokenBalances)||void 0===t?void 0:t.filter((i=>{var o,t;return(null===(t=i)||void 0===t||null===(o=t.token)||void 0===o?void 0:o.chain)===(0,G.toGraphQLChain)(e??P)})),m=null===(l=x)||void 0===l?void 0:l.find((e=>{var o,t,n;return(null===(t=e)||void 0===t||null===(o=t.token)||void 0===o?void 0:o.address)===(null===(n=i)||void 0===n?void 0:n.address)})),f=null===(s=x)||void 0===s?void 0:s.find((e=>{var i,t,n;return(null===(t=e)||void 0===t||null===(i=t.token)||void 0===i?void 0:i.address)===(null===(n=o)||void 0===n?void 0:n.address)}));return{balance0:(null===(d=m)||void 0===d?void 0:d.quantity)??0,balance1:(null===(c=f)||void 0===c?void 0:c.quantity)??0,balance0Fiat:(null===(p=m)||void 0===p||null===(u=p.denominatedValue)||void 0===u?void 0:u.value)??0,balance1Fiat:(null===(v=f)||void 0===v||null===(h=v.denominatedValue)||void 0===h?void 0:h.value)??0}}),[null===(l=L)||void 0===l?void 0:l.portfolios,e,P,null===(s=i)||void 0===s?void 0:s.address,null===(d=o)||void 0===d?void 0:d.address]),{formatNumber:E}=(0,k.Gb)(),R=E({input:A,type:k.sw.TokenNonTx}),B=E({input:Z,type:k.sw.TokenNonTx}),M=D+V,O=E({input:M,type:k.sw.PortfolioBalance}),F=function(){var i,o=(i=function*(){if($&&C){m.chainId!==e&&e&&(yield b(e));const i=$.isNative?we.d:$.address,o=C.isNative?we.d:C.address;T(`/add/${i}/${o}/${n}${j?`/${j}`:""}`,{state:{from:w.pathname}})}},function(){var e=this,o=arguments;return new Promise((function(t,n){var r=i.apply(e,o);function a(e){Ao(r,t,n,a,l,"next",e)}function l(e){Ao(r,t,n,a,l,"throw",e)}a(void 0)}))});return function(){return o.apply(this,arguments)}}(),[N,q]=(0,g.useReducer)((e=>!e),!1),z=(0,$e.e)(),H=z.lg,K=!z.sm,X=(0,mo.Xp)(null===(c=i)||void 0===c?void 0:c.address,e),Y=(0,mo.Xp)(null===(u=o)||void 0===u?void 0:u.address,e),J=(0,mo.em)(X,Y),ee=(0,$o.useFeatureFlag)(wo.FeatureFlags.TokenProtection),[ie,oe]=(0,g.useState)(!1),te=(0,g.useCallback)((()=>oe(!1)),[]),[ne,re]=(0,g.useState)(),ae=(0,g.useCallback)((e=>{re(e),oe(!0)}),[]);return!r&&$&&C?(0,t.jsxs)(Pe.ZP,{gap:"lg",children:[(0,t.jsxs)(Zo,{children:[m.address&&(0,t.jsxs)(Ro,{children:[(0,t.jsx)(U.T.SubHeaderSmall,{children:(0,t.jsx)(W.Trans,{i18nKey:"pool.yourBalances"})}),(0,t.jsxs)(Te.ZP,{gap:"8px",children:[(0,t.jsxs)(U.T.HeadlineSmall,{children:[R," ",$.symbol]}),(0,t.jsx)(U.T.HeadlineSmall,{color:"neutral3",children:"|"}),(0,t.jsxs)(U.T.HeadlineSmall,{children:[B," ",C.symbol]}),Boolean(M)&&!K&&(0,t.jsxs)(U.T.Caption,{children:["(",O,")"]})]})]}),(0,t.jsx)(Do,{onClick:q,$open:N,$fixedWidth:Boolean(m.address),"data-testid":`pool-details-${N?"close":"swap"}-button`,children:N?(0,t.jsxs)(t.Fragment,{children:[H&&(0,t.jsx)(jo.Z,{size:20}),(0,t.jsx)(U.T.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,t.jsx)(W.Trans,{i18nKey:"common.close"})})]}):(0,t.jsxs)(t.Fragment,{children:[H&&(0,t.jsx)(Ze.O,{color:"$accent1",size:"$icon.20"}),(0,t.jsx)(U.T.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,t.jsx)(W.Trans,{i18nKey:"common.swap"})})]})}),(0,t.jsxs)(Do,{onClick:F,"data-testid":"pool-details-add-liquidity-button",$fixedWidth:Boolean(m.address),$hideOnMobile:!0,children:[H&&(0,t.jsx)(bo.Z,{size:20}),(0,t.jsx)(U.T.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,t.jsx)(W.Trans,{i18nKey:"common.addLiquidity"})})]})]}),(0,t.jsxs)(Eo,{open:N,"data-testid":"pool-details-swap-modal",children:[(0,t.jsx)(yo.HY,{syncTabToUrl:!1,chainId:e,initialInputCurrency:$,initialOutputCurrency:C,compact:!0,disableTokenInputs:e!==m.chainId}),ee?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Co.TokenWarningCard,{currencyInfo:I,onPress:()=>ae(I)}),(0,t.jsx)(Co.TokenWarningCard,{currencyInfo:S,onPress:()=>ae(S)}),ne&&(0,t.jsx)(Io.default,{currencyInfo0:ne,isInfoOnlyWarning:!0,isVisible:ie,closeModalOnly:te,onAcknowledge:te})]}):Boolean(J)&&(0,t.jsx)(xo.Z,{tokenAddress:(J===X?null===(p=i)||void 0===p?void 0:p.address:null===(h=o)||void 0===h?void 0:h.address)??"",warning:J??mo.Jf,plural:Boolean(X&&Y),tokenSymbol:J===X?null===(v=i)||void 0===v?void 0:v.symbol:null===(x=o)||void 0===x?void 0:x.symbol})]}),(0,t.jsx)(Si.ZM,{$open:N&&!H,$maxWidth:ei.j$.lg,$zIndex:To.k.sticky,onClick:q})]}):(0,t.jsxs)(Zo,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,t.jsx)(Ro,{children:(0,t.jsx)(Vo,{})}),(0,t.jsx)(Vo,{}),(0,t.jsx)(Vo,{})]})}var Mo=o(13422),_o=o(44913),Oo=o(82618);const Fo=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,t.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,t.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,t.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var No=o(83123),qo=o(57221);function Uo(e,i,o,t,n,r,a){try{var l=e[r](a),s=l.value}catch(d){return void o(d)}l.done?i(s):Promise.resolve(s).then(t,n)}function zo(e){return function(){var i=this,o=arguments;return new Promise((function(t,n){var r=e.apply(i,o);function a(e){Uo(r,t,n,a,l,"next",e)}function l(e){Uo(r,t,n,a,l,"throw",e)}a(void 0)}))}}const Ho=(0,N.ZP)(Pe.ZP)`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,Ko=(0,N.ZP)(Pe.ZP)`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${z.iV}
  padding: 16px;
`,Qo=(0,N.ZP)(U.T.LabelMicro)`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,Go=(0,N.ZP)(Te.ZP)`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color: ${({theme:e,status:i})=>i===_o.H6.IN_RANGE?e.success:i===_o.H6.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,Wo=(0,N.ZP)(Te.ZP)`
  gap: 10px;

  @media screen and (max-width: ${ei.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,Xo=(0,N.ZP)((e=>(0,t.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})})))`
  @media screen and (max-width: ${ei.j$.sm}px) {
    display: none;
  }
`,Yo=(0,N.ZP)(U.T.Caption)`
  width: max-content;
  white-space: nowrap;
`,Jo=N.ZP.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;function et({positionInfo:e}){var i,o,n,r;const{t:a}=(0,W.useTranslation)(),l=e.version===_o.Qe.V2?e.pair:e.pool,s=[(0,ci.U8)(null===(i=l)||void 0===i?void 0:i.token0.wrapped.address,e.chainId),(0,ci.U8)(null===(o=l)||void 0===o?void 0:o.token1.wrapped.address,e.chainId)],d=(0,go.m)(),c=(0,Je.s0)(),u=(0,ko.o)(),p=(0,q.useTheme)(),h=(0,g.useCallback)(zo((function*(){d.chainId!==e.chainId&&(yield u(e.chainId)),c((0,Mo.$B)(e))})),[d.chainId,e,c,u]),v=e.status,x=e.version===_o.Qe.V2?No.y9:"string"===typeof e.feeTier?parseFloat(e.feeTier):e.feeTier??0,{priceOrdering:m}=(0,Oo.v_)(e),{maxPrice:f,minPrice:k,tokenASymbol:y,tokenBSymbol:j}=(0,Oo.To)({priceOrdering:m,feeTier:x.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper,pricesInverted:!1});return(0,t.jsxs)(Ko,{onClick:h,children:[(0,t.jsxs)(Te.ZP,{gap:"8px",children:[(0,t.jsx)(me.ge,{currencies:s,size:16}),(0,t.jsxs)(U.T.SubHeader,{children:[null===(n=l)||void 0===n?void 0:n.token0.symbol,"/",null===(r=l)||void 0===r?void 0:r.token1.symbol]}),(0,t.jsxs)(Qo,{children:[x/De.BIPS_BASE,"%"]}),(0,t.jsxs)(Go,{status:v,children:[(0,t.jsx)(U.T.Caption,{color:"inherit",children:(0,Mo.Qr)(v,a)}),v===_o.H6.IN_RANGE&&(0,t.jsx)(Jo,{}),v===_o.H6.OUT_OF_RANGE&&(0,t.jsx)(qo.Z,{size:12,color:p.deprecated_accentWarning}),v===_o.H6.CLOSED&&(0,t.jsx)(Fo,{})]})]}),e.version!==_o.Qe.V2&&(0,t.jsxs)(Wo,{children:[(0,t.jsxs)(Yo,{"data-testid":`position-min-${k}`,children:[(0,t.jsx)(W.Trans,{i18nKey:"pool.min.label"}),"\xa0",a("liquidityPool.positions.price",{amountWithSymbol:`${k} ${y}`,outputToken:j})]}),(0,t.jsx)(Xo,{}),(0,t.jsxs)(Yo,{"data-testid":`position-max-${f}`,children:[(0,t.jsx)(W.Trans,{i18nKey:"pool.max.label"}),"\xa0",a("liquidityPool.positions.price",{amountWithSymbol:`${f} ${y}`,outputToken:j})]})]})]})}function it({positions:e}){var i;return(0,t.jsx)(Ho,{children:null===(i=e)||void 0===i?void 0:i.map(((e,i)=>(0,t.jsx)(et,{positionInfo:e},`pool-position-${i}`)))})}var ot=o(73705),tt=o(36365),nt=o(90184),rt=o(88339),at=o(39650),lt=(e=>(e.BUY="Buy",e.SELL="Sell",e.REMOVE="Remove",e.ADD="Add",e))(lt||{});const st=25;var dt=o(11367),ct=o(29936);const ut=(0,N.ZP)(z.dL)`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,pt=N.ZP.div`
  min-height: 256px;
`;const ht={0:120,1:144,2:100,3:125,4:125,5:125};function vt(e,i){var o,t,n;if((null===(o=i)||void 0===o?void 0:o.address)===we.d){var r;const o=(0,_.Tz)(i.chain);return o&&e.id.toLowerCase()===(null===(r=pi.WRAPPED_NATIVE_CURRENCY[o])||void 0===r?void 0:r.address.toLowerCase())}return e.id.toLowerCase()===(null===(n=i)||void 0===n||null===(t=n.address)||void 0===t?void 0:t.toLowerCase())}function xt({poolAddress:e,token0:i,token1:o,protocolVersion:n}){var r;const a=(0,ct._4)()??Ve.UniverseChainId.Mainnet,l=(0,dt.useAppFiatCurrency)(),{formatNumber:s,formatFiatPrice:d}=(0,k.Gb)(),[c,u]=(0,g.useReducer)((e=>!e),!1),p=(0,g.useRef)(null),[h,v]=(0,g.useState)([lt.BUY,lt.SELL,lt.REMOVE,lt.ADD]),{transactions:x,loading:m,loadMore:f,error:y}=function(e,i,o=["Buy","Sell","Remove","Add"],t,n=V.ProtocolVersion.V3,r=st){var a,l,s,d,c,u,p;const{defaultChainId:h}=(0,Q.useEnabledChains)(),v={first:r,chain:(0,G.toGraphQLChain)(i??h)},x=(0,$o.useFeatureFlag)(wo.FeatureFlags.V4Everywhere),{loading:m,error:f,data:k,fetchMore:y}=(0,V.useV4PoolTransactionsQuery)({variables:{...v,poolId:e},skip:!x||n!==V.ProtocolVersion.V4}),{loading:j,error:b,data:P,fetchMore:T}=(0,V.useV3PoolTransactionsQuery)({variables:{...v,address:e},skip:n!==V.ProtocolVersion.V3}),{loading:w,error:$,data:C,fetchMore:I}=(0,V.useV2PairTransactionsQuery)({variables:{...v,address:e},skip:!i||n!==V.ProtocolVersion.V2}),S=(0,g.useRef)(!1),{transactions:L,loading:A,fetchMore:Z,error:D}=n===V.ProtocolVersion.V4?{transactions:null===(l=k)||void 0===l||null===(a=l.v4Pool)||void 0===a?void 0:a.transactions,loading:m,fetchMore:y,error:f}:n===V.ProtocolVersion.V3?{transactions:null===(d=P)||void 0===d||null===(s=d.v3Pool)||void 0===s?void 0:s.transactions,loading:j,fetchMore:T,error:b}:{transactions:null===(u=C)||void 0===u||null===(c=u.v2Pair)||void 0===c?void 0:c.transactions,loading:w,fetchMore:I,error:$},E=(0,g.useCallback)((({onComplete:e})=>{var i,o;S.current||(S.current=!0,Z({variables:{cursor:null===(o=L)||void 0===o||null===(i=o[L.length-1])||void 0===i?void 0:i.timestamp},updateQuery:(i,{fetchMoreResult:o})=>{var t,r,a,l;if(!o)return i;null===(t=e)||void 0===t||t();const s=n===V.ProtocolVersion.V4?{v4Pool:{...o.v4Pool,transactions:[...(null===(r=i.v4Pool)||void 0===r?void 0:r.transactions)??[],...o.v4Pool.transactions]}}:n===V.ProtocolVersion.V3?{v3Pool:{...o.v3Pool,transactions:[...(null===(a=i.v3Pool)||void 0===a?void 0:a.transactions)??[],...o.v3Pool.transactions]}}:{v2Pair:{...o.v2Pair,transactions:[...(null===(l=i.v2Pair)||void 0===l?void 0:l.transactions)??[],...o.v2Pair.transactions]}};return S.current=!1,s}}))}),[Z,L,n]),R=(0,g.useMemo)((()=>{var e;return null===(e=L??[])||void 0===e?void 0:e.map((e=>{var n,r,a,l,s,d;if(!e)return;const c=parseFloat(e.token0Quantity)>0?e.token0:e.token1,u=(null===(n=t)||void 0===n?void 0:n.address)===we.d?null===(r=pi.WRAPPED_NATIVE_CURRENCY[i??Ve.UniverseChainId.Mainnet])||void 0===r?void 0:r.address:null===(a=t)||void 0===a?void 0:a.address,p=(null===(s=c)||void 0===s||null===(l=s.address)||void 0===l?void 0:l.toLowerCase())===(null===(d=u)||void 0===d?void 0:d.toLowerCase()),h=e.type===V.PoolTransactionType.Swap?p?"Sell":"Buy":e.type===V.PoolTransactionType.Remove?"Remove":"Add";return o.includes(h)?{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:h}:void 0})).filter((e=>void 0!==e))}),[L,null===(p=t)||void 0===p?void 0:p.address,i,o]);return(0,g.useMemo)((()=>({transactions:R,loading:A,loadMore:E,error:D})),[R,A,E,D])}(e,a,h,i,n),j=m||!!y,b=(0,g.useMemo)((()=>{const e=(0,ot.Cl)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,t.jsx)(nt.b,{minWidth:ht[0],justifyContent:"flex-start",children:(0,t.jsxs)(Te.ZP,{gap:"4px",children:[(0,t.jsx)(at.iX,{direction:_.N9.Desc}),(0,t.jsx)(at.Hu,{active:!0,children:(0,t.jsx)(W.Trans,{i18nKey:"common.time"})})]})}),cell:e=>{var i,o,n,r;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[0],justifyContent:"flex-start",children:(0,t.jsx)(at._q,{timestamp:Number(null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o).timestamp),link:(0,Ee.getExplorerLink)(a,null===(n=(r=e).getValue)||void 0===n?void 0:n.call(r).transaction,Ee.ExplorerDataType.TRANSACTION)})})}}),e.accessor((e=>{let o,n;var r;if(e.type===lt.BUY)o="success",n=(0,t.jsxs)("span",{children:[(0,t.jsx)(W.Trans,{i18nKey:"common.buy.label"}),"\xa0",null===(r=i)||void 0===r?void 0:r.symbol]});else if(e.type===lt.SELL){var a;o="critical",n=(0,t.jsxs)("span",{children:[(0,t.jsx)(W.Trans,{i18nKey:"common.sell.label"}),"\xa0",null===(a=i)||void 0===a?void 0:a.symbol]})}else o=e.type===lt.ADD?"success":"critical",n=e.type===lt.ADD?(0,t.jsx)(W.Trans,{i18nKey:"common.add.label"}):(0,t.jsx)(W.Trans,{i18nKey:"common.remove.label"});return(0,t.jsx)(U.T.BodyPrimary,{color:o,children:n})}),{id:"swap-type",header:()=>(0,t.jsx)(nt.b,{minWidth:ht[1],justifyContent:"flex-start",children:(0,t.jsxs)(at.j4,{clickable:c,onPress:()=>u(),ref:p,children:[(0,t.jsx)(rt.w,{allFilters:Object.values(lt),activeFilter:h,setFilters:v,isOpen:c,toggleFilterModal:u,anchorRef:p}),(0,t.jsx)(U.T.BodySecondary,{children:(0,t.jsx)(W.Trans,{i18nKey:"common.type.label"})})]})}),cell:e=>{var i,o;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[1],justifyContent:"flex-start",children:null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,t.jsx)(nt.b,{minWidth:ht[3],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(U.T.BodySecondary,{children:l})}),cell:e=>{var i,o;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[3],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(U.T.BodyPrimary,{children:d({price:null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o)})})})}}),e.accessor((e=>vt(e.pool.token0,i)?e.amount0:e.amount1),{id:"input-amount",header:()=>{var e;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[4],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(U.T.BodySecondary,{children:null===(e=i)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,o;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[4],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(U.T.BodyPrimary,{children:s({input:Math.abs((null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o))??0),type:k.sw.TokenTx})})})}}),e.accessor((e=>vt(e.pool.token0,i)?e.amount1:e.amount0),{id:"output-amount",header:()=>{var e;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[5],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(U.T.BodySecondary,{children:null===(e=o)||void 0===e?void 0:e.symbol})})},cell:e=>{var i,o;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[5],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(U.T.BodyPrimary,{children:s({input:Math.abs((null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o))??0),type:k.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,t.jsx)(nt.b,{minWidth:ht[2],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(U.T.BodySecondary,{children:(0,t.jsx)(W.Trans,{i18nKey:"common.wallet.label"})})}),cell:e=>{var i,o,n,r;return(0,t.jsx)(nt.b,{loading:j,minWidth:ht[2],justifyContent:"flex-end",grow:!0,children:(0,t.jsx)(ut,{href:(0,Ee.getExplorerLink)(a,null===(i=(o=e).getValue)||void 0===i?void 0:i.call(o),Ee.ExplorerDataType.ADDRESS),children:(0,t.jsx)(U.T.BodyPrimary,{children:(0,Re.shortenAddress)(null===(n=(r=e).getValue)||void 0===n?void 0:n.call(r),0)})})})}})]}),[l,a,h,c,d,s,j,i,null===(r=o)||void 0===r?void 0:r.symbol]);return(0,t.jsx)(pt,{"data-testid":"pool-details-transactions-table",children:(0,t.jsx)(tt.i,{columns:b,data:x,loading:m,error:y,loadMore:f,maxHeight:600})})}var mt=o(15720);const ft=(0,N.ZP)(U.T.HeadlineMedium)`
  color: ${({theme:e,active:i})=>!i&&e.neutral2};
  ${({disabled:e})=>!e&&z.iV}
  user-select: none;
`;function gt({poolAddress:e,token0:i,token1:o,protocolVersion:n}){var r,a,l,s;const[d,c]=(0,g.useState)("transactions"),u=(0,go.m)(),{data:p}=(0,mt.Y)({address:u.address,poolId:e}),h=(0,g.useMemo)((()=>{var e;return null===(e=p)||void 0===e?void 0:e.positions.map((e=>(0,Mo.tS)(e))).filter((e=>void 0!==e))}),[null===(r=p)||void 0===r?void 0:r.positions]);return(0,t.jsxs)(Pe.ZP,{gap:"lg",children:[(0,t.jsxs)(Te.ZP,{gap:"16px",children:[(0,t.jsx)(ft,{active:"transactions"===d,onClick:()=>c("transactions"),disabled:!(null===(a=h)||void 0===a?void 0:a.length),children:(0,t.jsx)(W.Trans,{i18nKey:"common.transactions"})}),Boolean(null===(l=h)||void 0===l?void 0:l.length)&&(0,t.jsxs)(ft,{active:"positions"===d,onClick:()=>c("positions"),children:[(0,t.jsx)(W.Trans,{i18nKey:"pool.positions"}),` (${null===(s=h)||void 0===s?void 0:s.length})`]})]}),"transactions"===d?(0,t.jsx)(xt,{poolAddress:e,token0:i,token1:o,protocolVersion:n}):(0,t.jsx)(it,{positions:h})]})}function kt(e){if(!e)return;const i=(new Date).getTime(),o=(i-Xi()("1d"))/1e3,t=(i-Xi()("2d"))/1e3,n=e.filter((e=>{var i;return void 0!==(null===(i=e)||void 0===i?void 0:i.timestamp)&&e.timestamp>=o})).reduce(((e,i)=>e+i.value),0),r=e.filter((e=>{var i;return void 0!==(null===(i=e)||void 0===i?void 0:i.timestamp)&&e.timestamp>=t&&e.timestamp<o})).reduce(((e,i)=>e+i.value),0);return(n-r)/r*100}var yt=o(54971),jt=o(25543);const bt=e=>{var i,o;const t=null===(i=e)||void 0===i?void 0:i.token0.symbol,n=null===(o=e)||void 0===o?void 0:o.token1.symbol,r=(0,W.t)("common.buyAndSell");return t&&n?`${t}/${n}: ${r}`:r};var Pt=o(80438),Tt=o(437),wt=o(48313);const $t=(0,N.ZP)(Te.ZP)`
  padding: 0 20px 52px;
  justify-content: center;
  width: 100%;
  gap: 80px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 40px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`,Ct=(0,N.ZP)(Pe.ZP)`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${ei.j$.lg}px) {
    max-width: unset;
  }
`,It=N.ZP.hr`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,St=(0,N.ZP)(Pe.ZP)`
  gap: 24px;
  width: 360px;

  @media (max-width: ${ei.j$.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,Lt=(0,N.ZP)(Pe.ZP)`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${ei.j$.lg}px) and (min-width: ${ei.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${ei.j$.sm}px) {
    padding: unset;
  }
`,At=(0,N.ZP)(ui.xv)`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,Zt=(0,N.ZP)(Pe.ZP)`
  gap: 16px;
  width: 100%;
`;function Dt(){var e,i,o,r,a,l,s,d,c,u,p,h,v,x,m,f,k,y,j,b,P,T,w,$,C,I,S,L,A,Z,D;const{poolAddress:E}=(0,Je.UO)(),R=(0,ct._4)(),B=R?(0,lo.getChainInfo)(R):void 0,{data:M,loading:O}=function(e,i){var o,t,n;const{defaultChainId:r}=(0,Q.useEnabledChains)(),a=(0,G.toGraphQLChain)(i??r),l=(0,$o.useFeatureFlag)(wo.FeatureFlags.V4Everywhere),{loading:s,error:d,data:c}=(0,V.useV4PoolQuery)({variables:{chain:a,poolId:e},errorPolicy:"all",skip:!l}),{loading:u,error:p,data:h}=(0,V.useV3PoolQuery)({variables:{chain:a,address:e},errorPolicy:"all"}),{loading:v,error:x,data:m}=(0,V.useV2PairQuery)({variables:{chain:a,address:e},skip:!i,errorPolicy:"all"});return(0,g.useMemo)((()=>{var i,o,t,n,r,a,l,f,g,k,y,j,b,P,T,w,$,C,I,S,L,A,Z,D,V,E,R,B,M;const _=Boolean(d||p||x),O=Boolean(s||u||v),F=(null===(i=c)||void 0===i?void 0:i.v4Pool)??(null===(o=h)||void 0===o?void 0:o.v3Pool)??(null===(t=m)||void 0===t?void 0:t.v2Pair)??void 0,N=(null===(r=c)||void 0===r||null===(n=r.v4Pool)||void 0===n?void 0:n.feeTier)??(null===(l=h)||void 0===l||null===(a=l.v3Pool)||void 0===a?void 0:a.feeTier)??No.y9,q=(null===(g=c)||void 0===g||null===(f=g.v4Pool)||void 0===f?void 0:f.id)??(null===(y=h)||void 0===y||null===(k=y.v3Pool)||void 0===k?void 0:k.address)??(null===(b=m)||void 0===b||null===(j=b.v2Pair)||void 0===j?void 0:j.address)??e;return{data:F?{idOrAddress:q,txCount:F.txCount,protocolVersion:F.protocolVersion,token0:F.token0,tvlToken0:F.token0Supply,token0Price:null===(C=F.token0)||void 0===C||null===($=C.project)||void 0===$||null===(w=$.markets)||void 0===w||null===(T=w[0])||void 0===T||null===(P=T.price)||void 0===P?void 0:P.value,token1:F.token1,tvlToken1:F.token1Supply,token1Price:null===(Z=F.token1)||void 0===Z||null===(A=Z.project)||void 0===A||null===(L=A.markets)||void 0===L||null===(S=L[0])||void 0===S||null===(I=S.price)||void 0===I?void 0:I.value,feeTier:N,volumeUSD24H:null===(D=F.volume24h)||void 0===D?void 0:D.value,volumeUSD24HChange:kt(null===(V=F.historicalVolume)||void 0===V?void 0:V.concat()),tvlUSD:null===(E=F.totalLiquidity)||void 0===E?void 0:E.value,tvlUSDChange:null===(R=F.totalLiquidityPercentChange24h)||void 0===R?void 0:R.value,hookAddress:"hook"in F?null===(M=F)||void 0===M||null===(B=M.hook)||void 0===B?void 0:B.address:void 0}:void 0,error:_,loading:O}}),[null===(o=m)||void 0===o?void 0:o.v2Pair,null===(t=h)||void 0===t?void 0:t.v3Pool,null===(n=c)||void 0===n?void 0:n.v4Pool,x,p,d,v,u,s,e])}((null===(e=E)||void 0===e?void 0:e.toLowerCase())??"",null===(i=B)||void 0===i?void 0:i.id),[F,N]=(0,g.useReducer)((e=>!e),!1),U=function(e,i){var o,t,n,r;return(null===(o=e)||void 0===o?void 0:o.token0)&&(null===(t=e)||void 0===t?void 0:t.token1)&&i?[(0,_.vR)(i,null===(n=e)||void 0===n?void 0:n.token0),(0,_.vR)(i,null===(r=e)||void 0===r?void 0:r.token1)]:[void 0,void 0]}(M,null===(o=B)||void 0===o?void 0:o.id),[z,H]=F?[null===(r=U)||void 0===r?void 0:r[1],null===(a=U)||void 0===a?void 0:a[0]]:U,{darkMode:K,surface2:X,accent1:Y}=(0,q.useTheme)(),J=(0,yt.r)(z&&(0,_.Pc)(z),{backgroundColor:X,darkMode:K}),ee=(0,yt.r)(H&&(0,_.Pc)(H),{backgroundColor:X,darkMode:K}),ie=!O&&!M||(!E||!B),oe=(0,g.useMemo)((()=>{var e,i,o;const t=`${null===(e=M)||void 0===e?void 0:e.token0.symbol}/${null===(i=M)||void 0===i?void 0:i.token1.symbol}`,n=(null===(o=B)||void 0===o?void 0:o.label)??"Ethereum";return{title:t,url:window.location.href,description:`Swap ${t} on ${n}. Trade tokens and provide liquidity. Real-time prices, charts, transaction data, and more.`}}),[null===(l=B)||void 0===l?void 0:l.label,null===(s=M)||void 0===s?void 0:s.token0.symbol,null===(d=M)||void 0===d?void 0:d.token1.symbol]),ne=(0,Pt.X)(oe);return ie?(0,t.jsx)(jt.default,{}):(0,t.jsxs)(ei.f6,{token0:J!==Y?J:void 0,token1:ee!==Y?ee:void 0,children:[(0,t.jsxs)(Tt.Helmet,{children:[(0,t.jsx)("title",{children:bt(M)}),ne.map(((e,i)=>(0,t.jsx)("meta",{...e},i)))]}),(0,t.jsx)(wt.default,{logImpression:!O,page:n.yJ.POOL_DETAILS_PAGE,properties:{poolAddress:E,chainId:null===(c=B)||void 0===c?void 0:c.id,feeTier:null===(u=M)||void 0===u?void 0:u.feeTier,token0Address:null===(p=M)||void 0===p?void 0:p.token0.address,token1Address:null===(h=M)||void 0===h?void 0:h.token1.address,token0Symbol:null===(v=M)||void 0===v?void 0:v.token0.symbol,token1Symbol:null===(x=M)||void 0===x?void 0:x.token1.symbol,token0Name:null===(m=M)||void 0===m?void 0:m.token0.name,token1Name:null===(f=M)||void 0===f?void 0:f.token1.name},children:(0,t.jsxs)($t,{children:[(0,t.jsxs)(Ct,{children:[(0,t.jsxs)(Pe.ZP,{gap:"20px",children:[(0,t.jsxs)(Pe.ZP,{children:[(0,t.jsx)(Oe,{chainId:null===(k=B)||void 0===k?void 0:k.id,poolAddress:E,token0:z,token1:H,loading:O}),(0,t.jsx)(Ge,{chainId:null===(y=B)||void 0===y?void 0:y.id,poolAddress:E,token0:z,token1:H,feeTier:null===(j=M)||void 0===j?void 0:j.feeTier,hookAddress:null===(b=M)||void 0===b?void 0:b.hookAddress,protocolVersion:null===(P=M)||void 0===P?void 0:P.protocolVersion,toggleReversed:N,loading:O})]}),(0,t.jsx)(te,{poolData:M,loading:O,isReversed:F,chain:null===(T=B)||void 0===T?void 0:T.backendChain.chain})]}),(0,t.jsx)(It,{}),(0,t.jsx)(gt,{poolAddress:E,token0:z,token1:H,protocolVersion:null===(w=M)||void 0===w?void 0:w.protocolVersion})]}),(0,t.jsxs)(St,{children:[(0,t.jsx)(Bo,{chainId:null===($=B)||void 0===$?void 0:$.id,token0:z,token1:H,feeTier:null===(C=M)||void 0===C?void 0:C.feeTier,loading:O}),(0,t.jsx)(wi,{poolData:M,isReversed:F,chainId:null===(I=B)||void 0===I?void 0:I.id,loading:O}),(0,t.jsxs)(Lt,{children:[(0,t.jsx)(At,{children:(0,t.jsx)(W.Trans,{i18nKey:"common.links"})}),(0,t.jsxs)(Zt,{children:[(0,t.jsx)(si,{address:E,chainId:null===(S=B)||void 0===S?void 0:S.id,tokens:[z,H],loading:O}),(0,t.jsx)(si,{address:null===(L=z)||void 0===L?void 0:L.address,chainId:null===(A=B)||void 0===A?void 0:A.id,tokens:[z],loading:O}),(0,t.jsx)(si,{address:null===(Z=H)||void 0===Z?void 0:Z.address,chainId:null===(D=B)||void 0===D?void 0:D.id,tokens:[H],loading:O})]})]})]})]})})]})}}}]);
//# sourceMappingURL=5790.8a1dfa38.chunk.js.map