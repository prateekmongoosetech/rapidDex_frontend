"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1414],{20879:(e,t,n)=>{n.r(t),n.d(t,{default:()=>sr});var i=n(92936),s=n(5985),r=n(66142),o=n(3115),a=n(69532),l=n(22722),d=n(45389),c=n(36664),p=n(97125),x=n(55478),h=n(83792),u=n(75603),m=n(74015),g=n(87075),f=n(44958),v=n(39499),P=n(61152),j=n(24358),y=n(14666),w=n(63194),b=n(57221),S=n(43969),k=n(56363),T=n(54884),$=n(97994),E=n(64972);const Z=(0,c.ZP)(x.ZP)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${T.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${S.j$.sm}px) {
    width: 100%;
  }
`,I=c.ZP.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,C=(0,c.ZP)(w.Z)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,A=c.ZP.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,N=(0,c.ZP)(o.DF)`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,R=c.ZP.span`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,O=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const{t:s}=(0,$.useTranslation)(),r=(0,P.useTheme)(),{formatDelta:o}=(0,E.Gb)(),a=o(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)));return(0,i.jsxs)(j.h,{children:[(0,i.jsxs)(Z,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(C,{width:24,height:24,onClick:t})," "]}),(0,i.jsx)(A,{children:(0,i.jsx)(b.Z,{height:90,width:90,color:r.critical})}),(0,i.jsx)(k.T.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,i.jsx)($.Trans,{i18nKey:"nft.lowPrice"})}),(0,i.jsx)(k.T.BodyPrimary,{textAlign:"center",children:s("nft.listedSignificantly",{count:e.length,percentage:a})}),(0,i.jsx)(N,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,i.jsx)($.Trans,{i18nKey:"common.button.continue"})}),(0,i.jsx)(R,{onClick:t,children:(0,i.jsx)($.Trans,{i18nKey:"nft.editListings"})})]}),(0,i.jsx)(y.a,{onClick:t})]})};var L=n(35797),_=n(63490),F=n.n(_);const M=c.ZP.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,D=(0,c.ZP)(h.ZP)`
  justify-content: space-between;
  margin-bottom: 8px;
`;var G=(e=>(e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM",e))(G||{}),H=(e=>(e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE",e))(H||{}),B=n(26239),z=n(52431),K=n(47832),V=n(92532);const X=(0,n(92490).F)()((0,K.mW)(((e,t)=>({looksRareNonce:0,listings:[],collectionsRequiringApproval:[],setLooksRareNonce:t=>e((()=>({looksRareNonce:t}))),getLooksRareNonce:()=>t().looksRareNonce,setListings:n=>e((()=>({listings:n.map((e=>{var n,i;const s=t().listings.find((t=>t.asset.asset_contract.address===e.asset.asset_contract.address&&t.asset.tokenId===e.asset.tokenId&&t.marketplace.name===e.marketplace.name&&t.price===e.price)),r=null===(n=s)||void 0===n?void 0:n.status,o=null===(i=s)||void 0===i?void 0:i.callback;return{...e,status:(()=>{switch(r){case z.S.APPROVED:return z.S.APPROVED;case z.S.FAILED:return e.status===z.S.SIGNING?z.S.SIGNING:z.S.FAILED;case z.S.REJECTED:return e.status===z.S.SIGNING?z.S.SIGNING:z.S.REJECTED;default:return e.status}})(),callback:o??e.callback}}))}))),setCollectionsRequiringApproval:n=>e((()=>({collectionsRequiringApproval:n.map((e=>{var n,i;const s=t().collectionsRequiringApproval.find((t=>t.collectionAddress===e.collectionAddress&&t.marketplace.name===e.marketplace.name)),r=null===(n=s)||void 0===n?void 0:n.status,o=null===(i=s)||void 0===i?void 0:i.callback;return{...e,status:(()=>{switch(r){case z.S.APPROVED:return z.S.APPROVED;case z.S.FAILED:return e.status===z.S.SIGNING?z.S.SIGNING:z.S.FAILED;case z.S.REJECTED:return e.status===z.S.SIGNING?z.S.SIGNING:z.S.REJECTED;default:return e.status}})(),callback:o??e.callback}}))}))),setListingStatusAndCallback:(t,n,i)=>e((({listings:e})=>{const s=[...e],r=s.findIndex((e=>e.name===t.name&&e.price===t.price&&e.marketplace.name===t.marketplace.name));if(r>-1){const t={...e[r],status:n,callback:i??e[r].callback};s.splice(r,1,t)}return{listings:s}})),setCollectionStatusAndCallback:(t,n,i)=>e((({collectionsRequiringApproval:e})=>{const s=[...e],r=s.findIndex((e=>e.name===t.name&&e.marketplace.name===t.marketplace.name));if(r>-1){const e={...s[r],status:n,callback:i??s[r].callback};s.splice(r,1,e)}return{collectionsRequiringApproval:s}}))}))),V.X),W="0x59728544B08AB483533076417FbBB2fD0B17CE3a",q="0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051",Y="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",J="0x1e0049783f008a0085193e00003d00cd54003c71",U="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",Q={[Y]:J},ee=1e4;function te(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){te(r,i,s,o,a,"next",e)}function a(e){te(r,i,s,o,a,"throw",e)}o(void 0)}))}}const ie="0xf849de01b080adc3a814fabe1e2087475cf2e354",se="0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779",re=function(){var e=ne((function*(e){const t=JSON.stringify(e),n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),s=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(r){return!1}finally{clearTimeout(s)}}));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=ne((function*(e,t){var n,i,s,r;const o=`https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,a=yield fetch(o,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(r=yield a.json())||void 0===r||null===(s=r.data)||void 0===s||null===(i=s.data)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ae=n(11604),le=n(7937),de=n(66284),ce=n(5540),pe=n(56079),xe=n(22407);function he(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}const ue=function(){var e,t=(e=function*(e){const t=yield fetch("https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){he(r,i,s,o,a,"next",e)}function a(e){he(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();function me(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}function ge(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),s=setTimeout((()=>n.abort()),F()("60s"));try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(r){return!1}finally{clearTimeout(s)}},ge=function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){me(r,i,s,o,a,"next",e)}function a(e){me(r,i,s,o,a,"throw",e)}o(void 0)}))},ge.apply(this,arguments)}var fe=n(31042),ve=n(46854),Pe=n(73116),je=n(6412),ye=n(30012),we=n(70854);function be(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}const Se="tuple(uint256 price, bytes data)",ke=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${Se}[]`],Te=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${Se}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,$e=function(){var e,t=(e=function*(e,t){const n=fe.$.encode(ke,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),i=(0,je.keccak256)(n),s=yield e.send("personal_sign",[i,t.user]);t.r=`0x${s.slice(2,66)}`,t.s=`0x${s.slice(66,130)}`,t.v=parseInt(s.slice(130,132),16),Ee(t)},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){be(r,i,s,o,a,"next",e)}function a(e){be(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Ee=e=>{e.v<27&&(e.v=e.v+27)},Ze=e=>fe.$.encode([Te],[e]),Ie=(e,t,n,i=we.NftStandard.Erc721)=>({salt:(()=>{const e=ae.O$.from((0,ye.O)(16)).toHexString();return(0,ve.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:i===we.NftStandard.Erc721?1:2,deadline:t,currency:Pe.d,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,fe.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});var Ce=n(23399),Ae=n(98282);function Ne(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}function Re(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Ne(r,i,s,o,a,"next",e)}function a(e){Ne(r,i,s,o,a,"throw",e)}o(void 0)}))}}const Oe=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],Le=(e,t)=>({amount:e,recipient:t}),_e=(e,t,n)=>{var i,s,r,o;const a=(null===(i=e)||void 0===i?void 0:i.basisPoints)??0,l=100*((null===(s=Oe.find((e=>"OpenSea"===e.name)))||void 0===s?void 0:s.fee)??0),d=ee-a-l,c=t.mul(ae.O$.from(a)).div(ae.O$.from(ee)).toString(),p=t.mul(ae.O$.from(d)).div(ae.O$.from(ee)).toString(),x=t.mul(ae.O$.from(l)).div(ae.O$.from(ee)).toString();return{sellerFee:Le(p,n),creatorFee:a>0?Le(c,(null===(o=e)||void 0===o||null===(r=o.asset_contract)||void 0===r?void 0:r.payout_address)??""):void 0,openSeaFee:l?Le(x,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};function Fe(){return(Fe=Re((function*(e,t,n,i,s=we.NftStandard.Erc721){const r=new le.Contract(t,s===we.NftStandard.Erc721?Ae:Ce,n),o=yield n.getAddress();try{if(yield r.isApprovedForAll(o,e))return void i(z.S.APPROVED);i(z.S.SIGNING);const t=yield r.setApprovalForAll(e,!0);i(z.S.PENDING);1===(yield t.wait()).status?i(z.S.APPROVED):i(z.S.FAILED)}catch(a){4001===a.code?i(z.S.REJECTED):i(z.S.FAILED)}}))).apply(this,arguments)}function Me(){return Me=Re((function*(e,t,n,i,s=0,r){var o,a;const l=new ce.A(i,{conduitKeyToConduit:Q,overrides:{defaultConduitKey:Y},seaportVersion:"1.5"}),d=yield n.getAddress(),c=null===(a=t.newListings)||void 0===a||null===(o=a.find((t=>t.marketplace.name===e.name)))||void 0===o?void 0:o.price;if(!c||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,de.parseEther)(`${c}`),{sellerFee:n,creatorFee:i,openSeaFee:s}=_e(t,e,d),o=[n,i,s].filter((e=>void 0!==e)),{executeAllActions:a}=yield l.createOrder({offer:[{itemType:t.asset_contract.tokenType===we.NftStandard.Erc721?pe.ItemType.ERC721:pe.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:o,endTime:t.expirationTime.toString(),zone:xe.r_,allowPartialFills:!0},d),p={...yield a(),protocol_address:U};r(z.S.PENDING);const x=yield function(e){return ge.apply(this,arguments)}(p);return r(x?z.S.APPROVED:z.S.FAILED),x}catch(p){return 4001===p.code?r(z.S.REJECTED):r(z.S.FAILED),!1}case"LooksRare":{const e=L.Xg[L.HL.MAINNET],i=Math.round(Date.now()/1e3),o={isOrderAsk:!0,signer:d,collection:t.asset_contract.address,price:(0,de.parseEther)(c.toString()),tokenId:ae.O$.from(t.tokenId),amount:ae.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:ae.O$.from(s),startTime:ae.O$.from(i),endTime:ae.O$.from(t.expirationTime),minPercentageToAsk:ae.O$.from(1e4).sub(ae.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const a=yield(0,L.tI)(n,L.HL.MAINNET,o,W);r(z.S.PENDING);const l={signature:a,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:d,isOrderAsk:!0,nonce:s,amount:1,price:(0,de.parseEther)(c.toString()).toString(),startTime:i,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=yield ue(l);return r(p?z.S.APPROVED:z.S.FAILED),p}catch(p){return 4001===p.code?r(z.S.REJECTED):r(z.S.FAILED),!1}}case"X2Y2":{const e={price:(0,de.parseEther)(c.toString()),tokens:[{token:t.asset_contract.address,tokenId:ae.O$.from(t.tokenId),amount:1}]},n=Ie(d,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield oe(t.asset_contract.address,t.tokenId);yield $e(i,n);const s={order:Ze(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};r(z.S.PENDING);const o=yield re(s);return r(o?z.S.APPROVED:z.S.FAILED),o}catch(p){return 4001===p.code?r(z.S.REJECTED):r(z.S.FAILED),!1}}default:return!1}})),Me.apply(this,arguments)}var De=n(45779);function Ge(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}function He(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Ge(r,i,s,o,a,"next",e)}function a(e){Ge(r,i,s,o,a,"throw",e)}o(void 0)}))}}function Be(e,t,n){return ze.apply(this,arguments)}function ze(){return ze=He((function*(e,t,n){const i=()=>Be(e,t,n);n(e,z.S.SIGNING,i);const{marketplace:s,collectionAddress:r,nftStandard:o}=e,a=L.Xg[L.HL.MAINNET],l="OpenSea"===s.name?J:"LooksRare"===s.name?e.nftStandard===we.NftStandard.Erc721?W:q:"X2Y2"===s.name?e.nftStandard===we.NftStandard.Erc721?ie:se:a.TRANSFER_MANAGER_ERC721;r&&(yield function(e,t,n,i){return Fe.apply(this,arguments)}(l,r,t,(t=>n(e,t,i)),o))})),ze.apply(this,arguments)}function Ke(e,t,n,i,s,r){return Ve.apply(this,arguments)}function Ve(){return Ve=He((function*(e,t,n,i,s,r){const o=i(),a=()=>Ke(e,t,n,i,s,r);r(e,z.S.SIGNING,a);const{asset:l,marketplace:d}=e,c=yield function(e,t,n,i){return Me.apply(this,arguments)}(d,l,t,n,o,(t=>r(e,t,a)));c&&"LooksRare"===e.marketplace.name&&s(o+1)})),Ve.apply(this,arguments)}const Xe=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var i;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),s=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(i=t)||void 0===i?void 0:i.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(s/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function We(){const e=(0,B.P)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=X((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,De.useEffect)((()=>{const[i,s]=(e=>{const t=[],n=[];return e.forEach((e=>{var i;null===(i=e.marketplaces)||void 0===i||i.forEach((i=>{var s,r;const o={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:z.S.DEFINED,asset:e,marketplace:i,price:null===(r=e.newListings)||void 0===r||null===(s=r.find((e=>e.marketplace.name===i.name)))||void 0===s?void 0:s.price};if(n.push(o),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===i.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:z.S.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:i,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(s),n(i)}),[e,n,t])}const qe=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),Ye=(0,c.ZP)(o.Yd)`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${S.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Je=({onClick:e})=>{const{sellAssets:t,showResolveIssues:n,toggleShowResolveIssues:s,issues:r,setIssues:o}=(0,B.P)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:s})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:s}))),[a,l]=(0,De.useState)(!1),d=(0,u.d)(),[c,p]=(0,De.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:i,listingsMissingPrice:r,listingsBelowFloor:a,listingsAboveSellOrderFloor:l}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<F()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>F()("180d"))),i=[],s=[],r=[];for(const a of e)if(a.newListings)for(const e of a.newListings){var o;e.price?e.price<.8*((null===(o=a)||void 0===o?void 0:o.floorPrice)??0)&&!e.overrideFloorPrice?s.push([a,e]):a.floor_sell_order_price&&e.price>=a.floor_sell_order_price&&a.asset_contract.tokenType!==we.NftStandard.Erc1155&&r.push([a,e]):i.push([a,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:i,listingsBelowFloor:s,listingsAboveSellOrderFloor:r}})(t),d=Number(e)+Number(i)+r.length+l.length;return o(d),!d&&n&&s(),(e||i||l.length)&&!n&&s(),[r,a]}),[t,o,n,s]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ye,{onClick:()=>{r?!n&&s():p.length?l(!0):e()},missingPrices:!!c.length,showResolveIssues:n,children:n?(0,i.jsx)($.Plural,{value:1!==r?2:1,one:(0,$.t)("common.resolveIssue"),other:(0,$.t)("common.resolveIssues",{issues:r})}):c.length&&!d?(0,i.jsx)($.Trans,{i18nKey:"nft.setPrices"}):(0,i.jsx)($.Trans,{i18nKey:"nft.startListing"})}),a&&(0,i.jsx)(O,{listingsBelowFloor:p,closeModal:()=>l(!1),startListing:e})]})};var Ue=n(65258),Qe=n(42277),et=n(75985),tt=n(52801),nt=n(87710),it=n(73335),st=n(7797),rt=n(50901),ot=n(41248);const at=(0,c.ZP)(x.ZP)`
  background-color: ${({theme:e,failed:t})=>t&&(0,ot.jb)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,lt=(0,c.ZP)(h.ZP)`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,dt=c.ZP.img`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,ct=c.ZP.img`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,pt=c.ZP.div`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,xt=(0,c.ZP)(k.T.SubHeaderSmall)`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,ht=c.ZP.span`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,ut=c.ZP.span`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,mt=(0,c.ZP)(tt.SA)`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,gt=c.ZP.div`
  margin-left: auto;
  margin-right: 0px;
`,ft=(0,c.ZP)(h.ZP)`
  padding: 0px 16px;
  justify-content: space-between;
`,vt=P.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,Pt=c.ZP.button`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${vt}
`,jt=c.ZP.button`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${vt}
`,yt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const s=(0,P.useTheme)(),r=(0,De.useRef)(),o=e.status===z.S.FAILED||e.status===z.S.REJECTED;return(0,De.useEffect)((()=>{var t;e.status===z.S.SIGNING&&(null===(t=r.current)||void 0===t||t.scroll)}),[e.status]),(0,i.jsxs)(at,{failed:o,children:[(0,i.jsxs)(lt,{active:e.status===z.S.SIGNING||e.status===z.S.APPROVED,failed:o,ref:r,children:[t?(0,i.jsx)(dt,{src:e.image}):(0,i.jsx)(ct,{src:e.image}),(0,i.jsx)(pt,{children:(0,it.Dp)(e.marketplace.name,"24")}),(0,i.jsx)(xt,{children:e.name}),t&&e.isVerified&&(0,i.jsx)(mt,{}),(0,i.jsx)(gt,{children:e.status===z.S.DEFINED||e.status===z.S.PENDING?(0,i.jsx)(nt.ZP,{height:"14px",width:"14px",stroke:e.status===z.S.PENDING?s.accent1:s.neutral3}):e.status===z.S.SIGNING?(0,i.jsx)(ht,{children:(0,i.jsx)($.Trans,{i18nKey:"common.proceedInWallet.short"})}):e.status===z.S.APPROVED?(0,i.jsx)(st.Z,{height:"20",width:"20",stroke:s.success}):o&&(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(rt.Z,{height:"20",width:"20",color:s.critical}),(0,i.jsx)(ut,{children:e.status===z.S.FAILED?(0,i.jsx)($.Trans,{i18nKey:"common.failed.error"}):(0,i.jsx)($.Trans,{i18nKey:"common.rejected"})})]})})]}),o&&(0,i.jsxs)(ft,{justify:"space-between",children:[(0,i.jsx)(Pt,{onClick:()=>n(e),children:(0,i.jsx)($.Trans,{i18nKey:"common.remove.label"})}),(0,i.jsx)(jt,{onClick:e.callback,children:(0,i.jsx)($.Trans,{i18nKey:"common.button.retry"})})]})]})};var wt=n(81205),bt=n(75762),St=n(45003);const kt=(0,c.ZP)(h.ZP)`
  justify-content: space-between;
`,Tt=(0,c.ZP)(k.T.SubHeader)`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,$t=(0,c.ZP)(tt.g8)`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${St.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,Et=(0,c.ZP)(x.ZP)`
  border-left: 1.5px solid ${bt.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Qe.Z}
`,Zt=(0,c.ZP)(wt.Z)`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,It=(0,c.ZP)(x.ZP)`
  gap: 8px;
  scroll-behavior: smooth;
`;var Ct=(e=>(e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN",e))(Ct||{});const At=({sectionType:e,active:t,content:n,toggleSection:s})=>{const{t:r}=(0,$.useTranslation)(),o=(0,P.useTheme)(),a=(0,B.P)((e=>e.sellAssets)),l=(0,B.P)((e=>e.removeAssetMarketplace)),d=(0,De.useMemo)((()=>!n.some((e=>e.status!==z.S.APPROVED))),[n]),c=0===e,p=(0,De.useMemo)((()=>{if(c){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,c]),u=e=>{if(c){const t=e;for(const e of a)e.asset_contract.address===t.collectionAddress&&l(e,t.marketplace)}else{const t=e;l(t.asset,t.marketplace)}};return(0,i.jsxs)(x.ZP,{children:[(0,i.jsxs)(kt,{children:[(0,i.jsxs)(h.ZP,{children:[t||d?(0,i.jsx)(tt.bT,{fill:d?o.success:o.accent1}):(0,i.jsx)(tt.rD,{}),(0,i.jsx)(Tt,{active:t,marginLeft:"12px",approved:d,children:c?r("nfts.collection.action.approve",{count:p??1}):r("nfts.collection.action.sign",{count:n.length})})]}),(0,i.jsx)($t,{active:t,secondaryColor:t?o.neutral1:o.neutral2,onClick:s})]}),t&&(0,i.jsxs)(Et,{children:[c&&(0,i.jsxs)(h.ZP,{height:"16px",marginBottom:"16px",children:[(0,i.jsx)(k.T.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,i.jsx)($.Trans,{i18nKey:"nft.whyTransaction"})}),(0,i.jsx)(et.ud,{text:(0,i.jsx)($.Trans,{i18nKey:"nft.whyTransaction.reason"}),children:(0,i.jsx)(Zt,{})})]}),(0,i.jsx)(It,{children:n.map((e=>{var t;return(0,i.jsx)(yt,{row:e,removeRow:u,isCollectionApprovalSection:c},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var Nt=n(23882),Rt=n(81339);const Ot=c.ZP.img`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,Lt=(0,c.ZP)(h.ZP)`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Qe.Z}
`,_t=(0,c.ZP)(x.ZP)`
  text-align: right;
`,Ft=P.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${S.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,Mt=c.ZP.button`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Ft}
`,Dt=c.ZP.a`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Ft}
`,Gt=(0,c.ZP)(h.ZP)`
  justify-content: center;
  gap: 4px;
`,Ht=({overlayClick:e})=>{const t=(0,P.useTheme)(),{formatNumberOrString:n}=(0,E.Gb)(),s=(0,B.P)((e=>e.sellAssets)),{chainId:r}=(0,l.m)(),o=(0,f.Z)(r),{formatCurrencyAmount:a}=(0,E.Gb)(),d=(0,De.useMemo)((()=>Xe(s)),[s]),c=(0,v.Z)(d.toString(),o),p=(0,g.sq)(c);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D,{children:[(0,i.jsxs)(k.T.HeadlineSmall,{lineHeight:"28px",children:[(0,i.jsx)($.Trans,{i18nKey:"nft.successListed"}),"\xa0",s.length>1?` ${s.length} `:"","NFT",(0,Nt._)(s.length),"!"]}),(0,i.jsx)(w.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,i.jsx)(Lt,{children:s.map((e=>{var t,n,r;return(0,i.jsx)(Ot,{src:e.imageUrl,numImages:s.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(r=e)||void 0===r?void 0:r.tokenId))}))}),(0,i.jsxs)(h.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,i.jsx)(k.T.SubHeader,{children:(0,i.jsx)($.Trans,{i18nKey:"nft.proceedsIfSold"})}),(0,i.jsxs)(_t,{children:[(0,i.jsxs)(k.T.SubHeader,{children:[n({input:d,type:E.sw.NFTToken})," ETH"]}),p&&(0,i.jsx)(k.T.BodySmall,{lineHeight:"20px",color:"neutral2",children:a({amount:p,type:E.sw.FiatTokenPrice})})]})]}),(0,i.jsxs)(h.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,i.jsx)(Mt,{onClick:()=>window.location.reload(),children:(0,i.jsx)($.Trans,{i18nKey:"nft.returnToMy"})}),(0,i.jsx)(Dt,{href:(0,it.FX)(s),target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(Gt,{children:[(0,i.jsx)(Rt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,i.jsx)($.Trans,{i18nKey:"common.share.twitter"})]})})]})]})};var Bt=n(48313),zt=n(45878),Kt=n(89081);function Vt(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}const Xt=c.ZP.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${T.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${S.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Wt=({overlayClick:e})=>{var t;const n=(0,l.m)(),r=(0,Ue.nL)(),o=null===(t=r)||void 0===t?void 0:t.getSigner(),a=(0,Kt.useTrace)({modal:s.KO.NFT_LISTING}),{formatCurrencyAmount:d}=(0,E.Gb)(),c=(0,B.P)((e=>e.sellAssets)),{setListingStatusAndCallback:p,setLooksRareNonce:x,getLooksRareNonce:h,collectionsRequiringApproval:u,listings:m}=X((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:s})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:s}))),P=(0,De.useMemo)((()=>Xe(c)),[c]),[b,S]=(0,De.useReducer)((e=>e===Ct.APPROVE?Ct.SIGN:Ct.APPROVE),Ct.APPROVE),T=(0,f.Z)(n.chainId),Z=(0,v.Z)(P.toString(),T),I=d({amount:(0,g.sq)(Z),type:E.sw.FiatTokenPrice}),C=(0,De.useMemo)((()=>u.every((e=>e.status===z.S.APPROVED))),[u]),A=(0,De.useMemo)((()=>m.every((e=>e.status===z.S.APPROVED))),[m]),N=function(){var e,t=(e=function*(){if(o&&r){for(const e of m)yield Ke(e,o,r,h,x,p);(0,zt.sendAnalyticsEvent)(s.Yz.NFT_LISTING_COMPLETED,{signatures_approved:m.filter((e=>e.status===z.S.APPROVED)),list_quantity:m.length,usd_value:I,...a})}},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Vt(r,i,s,o,a,"next",e)}function a(e){Vt(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,De.useEffect)((()=>{C&&(N(),b===Ct.APPROVE&&S())}),[C]);const R=(0,De.useCallback)((()=>{A?window.location.reload():e()}),[A,e]);return(0,De.useEffect)((()=>{!m.length&&R()}),[m,R]),(0,i.jsxs)(j.h,{children:[(0,i.jsx)(Bt.default,{modal:s.KO.NFT_LISTING,children:(0,i.jsx)(Xt,{children:A?(0,i.jsx)(Ht,{overlayClick:R}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(k.T.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)($.Trans,{i18nKey:"nft.list.title"})}),(0,i.jsx)(w.Z,{size:24,cursor:"pointer",onClick:R})]}),(0,i.jsx)(At,{sectionType:Ct.APPROVE,active:b===Ct.APPROVE,content:u,toggleSection:S}),(0,i.jsx)(At,{sectionType:Ct.SIGN,active:b===Ct.SIGN,content:m,toggleSection:S})]})})}),(0,i.jsx)(y.a,{onClick:R})]})};var qt=n(48444);const Yt=(0,c.ZP)(x.ZP)`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,Jt=(0,c.ZP)(h.ZP)`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Ut=({dropDownOptions:e,width:t})=>{const n=(0,P.useTheme)();return(0,i.jsx)(Yt,{$width:t,children:e.map((e=>(0,i.jsxs)(Jt,{onClick:e.onClick,children:[(0,i.jsx)(k.T.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,i.jsx)(st.Z,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var Qt=n(57689),en=n(56059),tn=n(52694),nn=n(78052),sn=n(37246);const rn=(0,c.ZP)(x.ZP)`
  gap: 12px;
  position: relative;
`,on=(0,c.ZP)(h.ZP)`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,an=c.ZP.div`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,ln=c.ZP.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,dn=(0,c.ZP)(h.ZP)`
  gap: 4px;
`,cn=(0,c.ZP)(h.ZP)`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${S.j$.md}px) {
    right: unset;
  }
`,pn=c.ZP.div`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,xn=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:s,globalOverride:r,asset:o})=>{const{t:a}=(0,$.useTranslation)(),{formatNumberOrString:l,formatDelta:d}=(0,E.Gb)(),[c,p]=(0,De.useState)(H.NONE),x=(0,B.P)((e=>e.removeSellAsset)),h=(0,B.P)((e=>e.showResolveIssues)),u=(0,De.useRef)(),m=(0,P.useTheme)(),g=100*(1-(e??0)/(o.floorPrice??0)),f=h&&!e||c===H.ALREADY_LISTED||c===H.BELOW_FLOOR&&g>=20?bt.O9.red400:c===H.BELOW_FLOOR?m.deprecated_accentWarning:n||e?m.accent1:m.neutral2;let v="";switch(c){case H.BELOW_FLOOR:v=a("nft.profile.priceInput.warning.belowFloor",{percentage:d(g)});break;case H.ALREADY_LISTED:var j;v=a("nft.profile.priceInput.warning.alreadyListed",{tokenAmountWithSymbol:`${l({input:(null===(j=o)||void 0===j?void 0:j.floor_sell_order_price)??0,type:E.sw.NFTToken})} ETH`})}return function(e,t,n,i){var s;(0,De.useEffect)((()=>{var s;e(H.NONE);const r=i??0;t.current.value=`${r}`,r<((null===(s=n)||void 0===s?void 0:s.floorPrice)??0)&&r>0?e(H.BELOW_FLOOR):n.floor_sell_order_price&&r>=n.floor_sell_order_price&&n.asset_contract.tokenType!==we.NftStandard.Erc1155&&e(H.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(s=n)||void 0===s?void 0:s.floorPrice,n.floor_sell_order_price,t,i,e])}(p,u,o,e),(0,i.jsxs)(rn,{children:[(0,i.jsxs)(on,{borderColor:f,children:[(0,i.jsx)(tn.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:nn.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:u,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const i=parseFloat(n.target.value);t(isNaN(i)?void 0:i)}}),(0,i.jsx)(an,{listPrice:e,children:"\xa0ETH"}),(n||r)&&(0,i.jsx)(ln,{onClick:()=>s(!r),children:r?(0,i.jsx)(tt.We,{}):(0,i.jsx)(sn.Z,{size:20,color:f})})]}),(0,i.jsx)(cn,{$color:f,children:c!==H.NONE&&(0,i.jsxs)(dn,{children:[(0,i.jsx)(b.Z,{height:16,width:16,color:f}),(0,i.jsx)("span",{children:v}),(0,i.jsx)(pn,{onClick:()=>{c===H.ALREADY_LISTED&&x(o),p(H.NONE)},children:c===H.BELOW_FLOOR?(0,i.jsx)($.Trans,{i18nKey:"common.dismiss"}):(0,i.jsx)($.Trans,{i18nKey:"common.removeItem"})})]})})]})},hn=(0,c.ZP)(h.ZP)`
  margin-bottom: 4px;
  justify-content: space-between;
`,un=(0,c.ZP)(x.ZP)`
  gap: 12px;
  padding: 4px 0px;
`,mn=P.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,gn=c.ZP.div`
  border-radius: 4px;
  ${mn}
`,fn=c.ZP.img`
  object-fit: cover;
  border-radius: 50%;
  ${mn}
`,vn=(0,c.ZP)(k.T.BodySmall)`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,Pn=(0,c.ZP)(h.ZP)`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,jn=({selectedMarkets:e,asset:t,fees:n})=>{var s;const{t:r}=(0,$.useTranslation)(),{formatNumberOrString:o,formatDelta:a}=(0,E.Gb)(),l=Math.max(...e.map((e=>qe(e,t)??0)));return(0,i.jsxs)(un,{children:[e.map((e=>{var n;return(0,i.jsxs)(hn,{children:[(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(gn,{children:(0,it.Dp)(e.name,"16")}),(0,i.jsx)(k.T.BodySmall,{lineHeight:"16px",marginRight:"12px",children:r("nft.marketplace.royalty.header",{marketName:e.name})})]}),(0,i.jsx)(vn,{children:a(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,i.jsxs)(hn,{children:[(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(fn,{src:null===(s=t.collection)||void 0===s?void 0:s.imageUrl}),(0,i.jsx)(k.T.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,i.jsx)($.Trans,{i18nKey:"nft.maxRoyalties"})})]}),(0,i.jsxs)(vn,{children:[l,"%"]})]}),(0,i.jsxs)(Pn,{children:[(0,i.jsx)(k.T.BodySmall,{lineHeight:"16px",children:(0,i.jsx)($.Trans,{i18nKey:"nft.maxFees"})}),(0,i.jsxs)(k.T.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?o({input:n,type:E.sw.NFTToken}):"-"," ETH"]})]})]})};var yn=n(74623);const wn=(0,c.ZP)(x.ZP)`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${S.j$.lg}px) {
    display: flex;
  }
`,bn=(0,c.ZP)(x.ZP)`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${S.j$.md}px) {
    display: flex;
  }
`,Sn=(0,c.ZP)(M)`
  top: 8px;
  left: 16px;
  z-index: 3;
`,kn=(0,c.ZP)(h.ZP)`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${S.j$.sm}px) {
    display: none;
  }
`,Tn=(0,c.ZP)(x.ZP)`
  position: relative;
  cursor: pointer;
`,$n=c.ZP.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,En=c.ZP.div`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${S.j$.sm}px) {
    display: none;
  }
`,Zn=(0,c.ZP)(x.ZP)`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${S.j$.md}px) {
    display: flex;
  }
`,In=c.ZP.div`
  width: min-content;
  white-space: nowrap;
`,Cn=(0,c.ZP)(x.ZP)`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${S.j$.md}px) {
    display: flex;
  }
`,An=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:s,removeMarket:r,asset:o,expandMarketplaceRows:a,toggleExpandMarketplaceRows:l,rowHovered:d})=>{const{formatNumberOrString:c,formatDelta:p}=(0,E.Gb)(),x=(0,B.P)((e=>e.setAssetListPrice)),u=(0,B.P)((e=>e.removeAssetMarketplace)),[m,g]=(0,De.useReducer)((e=>!e),!1),[f,v]=(0,De.useReducer)((e=>!e),!1),[P,j]=(0,De.useState)((()=>{var e,t;return null===(t=o.newListings)||void 0===t||null===(e=t.find((e=>{var t;return a?e.marketplace.name===(null===(t=s)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[y,w]=(0,De.useState)(!1),b=e===G.SAME_PRICE&&!y,S=b?t:P,T=(0,De.useCallback)((e=>{b?n(e):j(e);for(const t of s)x(o,e,t)}),[o,s,x,n,b]),Z=(0,De.useMemo)((()=>{let e=0;for(const t of s){const n=qe(t,o)+t.fee;e=Math.max(n,e)}return e}),[o,s]),I=p(Z),C=s.length>1?(0,$.t)("nfts.marketplace.fees.deltaMax",{percentChanged:I}):I,A=S&&S*Z/100,N=S&&A&&S-A;return function(e,t,n,i,s){(0,De.useEffect)((()=>{let r;e?(i||t(s),r=s):r=i,n(r)}),[e])}(y,j,T,P,t),function(e,t,n,i,s,r,o){(0,De.useEffect)((()=>{var a;o===G.FLOOR_PRICE?(t(null===(a=e)||void 0===a?void 0:a.floorPrice),n(e.floorPrice)):o===G.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):o===G.SAME_PRICE&&(s&&!r?n(s):t(r)),i(!1)}),[o])}(o,j,n,w,P,t,e),(0,De.useEffect)((()=>{b&&T(t)}),[t]),(0,i.jsxs)(h.ZP,{onMouseEnter:v,onMouseLeave:v,children:[(0,i.jsx)(bn,{children:(0,i.jsx)(k.T.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:c({input:o.floorPrice,type:E.sw.NFTToken})+o.floorPrice?" ETH":""})}),(0,i.jsx)(wn,{children:(0,i.jsx)(k.T.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:o.lastPrice?`${c({input:o.lastPrice,type:E.sw.NFTToken})} ETH`:"-"})}),(0,i.jsxs)(h.ZP,{flex:"2",children:[(a||s.length>1)&&(0,i.jsx)(kn,{onMouseEnter:g,onMouseLeave:g,children:s.map(((e,t)=>{var n;return(0,i.jsxs)(Tn,{onClick:t=>{t.stopPropagation(),u(o,e),r&&r()},children:[(0,i.jsx)($n,{index:t,children:(0,it.Dp)(e.name,"20")}),(0,i.jsx)(Sn,{hovered:m&&(a??!1),children:(0,i.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=o.collection)||void 0===n?void 0:n.address)+o.tokenId)}))}),(0,i.jsx)(xn,{listPrice:S,setListPrice:T,isGlobalPrice:b,setGlobalOverride:w,globalOverride:y,asset:o}),d&&(a&&f||s.length>1)&&(0,i.jsx)(En,{onClick:l,children:a?(0,i.jsx)(en.Q,{}):(0,i.jsx)(Qt.f,{})})]}),(0,i.jsx)(Zn,{children:(0,i.jsx)(et.ud,{text:(0,i.jsx)(jn,{selectedMarkets:s,asset:o,fees:A}),placement:"left",children:(0,i.jsx)(In,{children:(0,i.jsx)(k.T.BodyPrimary,{color:"neutral2",children:Z>0?C:"--%"})})})}),(0,i.jsx)(Cn,{children:(0,i.jsx)(Nn,{ethPrice:N})})]})},Nn=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,E.Gb)(),n=(0,yn.$)();return(0,i.jsx)(h.ZP,{width:"100%",justify:"flex-end",children:(0,i.jsx)(k.T.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,i.jsxs)(x.ZP,{children:[(0,i.jsxs)("span",{children:[t({input:e,type:E.sw.NFTToken})," ETH"]}),(0,i.jsx)(k.T.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:E.sw.FiatNFTToken})})]}):"- ETH"})})};var Rn=n(95684);const On=(0,c.ZP)(h.ZP)`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Ln=c.ZP.div`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${S.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,_n=(0,c.ZP)(h.ZP)`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${S.j$.md}px) {
    flex: 1.5;
  }
`,Fn=c.ZP.img`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Mn=P.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Dn=(0,c.ZP)(x.ZP)`
  margin-right: 8px;
  min-width: 0px;
`,Gn=c.ZP.div`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Mn}
`,Hn=(0,c.ZP)(k.T.BodySmall)`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Mn};
`,Bn=(0,c.ZP)(x.ZP)`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${S.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${S.j$.md}px) {
    flex: 3;
  }
`,zn=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:s,selectedMarkets:r})=>{var o;const[a,l]=(0,De.useReducer)((e=>!e),!1),d=(0,B.P)((e=>e.removeSellAsset)),[c,p]=(0,De.useState)([]),[x,h]=(0,De.useReducer)((e=>!e),!1),u=(0,P.useTheme)();return(0,De.useEffect)((()=>{p(JSON.parse(JSON.stringify(r)))}),[r]),(0,i.jsxs)(On,{onMouseEnter:()=>{!x&&h()},onMouseLeave:()=>{x&&h()},children:[(0,i.jsx)(Ln,{children:x&&(0,i.jsx)(Rn.Z,{size:20,color:u.neutral2,cursor:"pointer",onClick:()=>{d(e)}})}),(0,i.jsxs)(_n,{children:[(0,i.jsx)(Fn,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,i.jsxs)(Dn,{children:[(0,i.jsx)(Gn,{children:e.name?e.name:`#${e.tokenId}`}),(0,i.jsxs)(Hn,{children:[null===(o=e.collection)||void 0===o?void 0:o.name,e.collectionIsVerified&&(0,i.jsx)(tt.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,i.jsx)(Bn,{children:a&&c.length>1?c.map((r=>(0,i.jsx)(An,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:s,selectedMarkets:[r],removeMarket:()=>p(c.filter((e=>e.name!==r.name))),asset:e,expandMarketplaceRows:a,rowHovered:x,toggleExpandMarketplaceRows:l},e.name+r.name))):(0,i.jsx)(An,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:s,selectedMarkets:c,asset:e,rowHovered:x,toggleExpandMarketplaceRows:l})})]})};var Kn=n(86082);const Vn=c.ZP.div`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${S.j$.sm}px) {
    padding-left: 48px;
  }
`,Xn=c.ZP.div`
  flex: 2;

  @media screen and (min-width: ${S.j$.md}px) {
    flex: 1.5;
  }
`,Wn=(0,c.ZP)(h.ZP)`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${S.j$.md}px) {
    flex: 3;
  }
`,qn=c.ZP.div`
  display: none;
  flex: 1;

  @media screen and (min-width: ${S.j$.lg}px) {
    display: flex;
  }
`,Yn=c.ZP.div`
  display: none;
  flex: 1;

  @media screen and (min-width: ${S.j$.md}px) {
    display: flex;
  }
`,Jn=(0,c.ZP)(h.ZP)`
  flex: 2;
  gap: 4px;
`,Un=(0,c.ZP)(x.ZP)`
  position: relative;
  @media screen and (max-width: ${S.j$.sm}px) {
    display: none;
  }
`,Qn=(0,c.ZP)(h.ZP)`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,ei=(0,c.ZP)(Kn.Z)`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,ti=c.ZP.div`
  position: absolute;
  top: 36px;
  right: 0px;
`,ni=P.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${S.j$.md}px) {
    display: flex;
  }
`,ii=c.ZP.div`
  flex: 1;
  ${ni}
`,si=c.ZP.div`
  flex: 1.5;
  ${ni}
`,ri=c.ZP.hr`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,oi=({selectedMarkets:e})=>{const t=(0,B.P)((e=>e.sellAssets)),[n,s]=(0,De.useState)(G.CUSTOM),[r,o]=(0,De.useState)(),[a,l]=(0,De.useReducer)((e=>!e),!1),d=(0,De.useRef)(null);(0,qt.t)(d,a?l:void 0);const c=(0,De.useMemo)((()=>[{displayText:"Custom",isSelected:n===G.CUSTOM,onClick:()=>{s(G.CUSTOM),l()}},{displayText:"Floor price",isSelected:n===G.FLOOR_PRICE,onClick:()=>{s(G.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:n===G.LAST_PRICE,onClick:()=>{s(G.LAST_PRICE),l()}},{displayText:"Same price",isSelected:n===G.SAME_PRICE,onClick:()=>{s(G.SAME_PRICE),l()}}]),[n]);let p;switch(n){case G.CUSTOM:p=(0,i.jsx)($.Trans,{i18nKey:"common.custom"});break;case G.FLOOR_PRICE:p=(0,i.jsx)($.Trans,{i18nKey:"common.floorPrice"});break;case G.LAST_PRICE:p=(0,i.jsx)($.Trans,{i18nKey:"common.lastPrice"});break;case G.SAME_PRICE:p=(0,i.jsx)($.Trans,{i18nKey:"common.samePrice"})}return(0,i.jsxs)(x.ZP,{children:[(0,i.jsxs)(Vn,{children:[(0,i.jsx)(Xn,{children:"NFT"}),(0,i.jsxs)(Wn,{children:[(0,i.jsx)(Yn,{children:(0,i.jsx)($.Trans,{i18nKey:"common.floor"})}),(0,i.jsx)(qn,{children:(0,i.jsx)($.Trans,{i18nKey:"nft.list.header.lastPrice"})}),(0,i.jsxs)(Jn,{ref:d,children:[(0,i.jsx)($.Trans,{i18nKey:"common.price"}),(0,i.jsxs)(Un,{children:[(0,i.jsxs)(Qn,{onClick:l,children:[p," ",(0,i.jsx)(ei,{isOpen:a})]}),a&&(0,i.jsx)(ti,{children:(0,i.jsx)(Ut,{dropDownOptions:c,width:200})})]})]}),(0,i.jsx)(ii,{children:(0,i.jsx)($.Trans,{i18nKey:"common.fees"})}),(0,i.jsx)(si,{children:(0,i.jsx)($.Trans,{i18nKey:"common.youRecieve"})})]})]}),t.map((s=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zn,{asset:s,globalPriceMethod:n,globalPrice:r,setGlobalPrice:o,selectedMarkets:e}),t.indexOf(s)<t.length-1&&(0,i.jsx)(ri,{})]})))]})};var ai=n(65866),li=n(49108),di=n(67762),ci=n(82205);const pi=(0,c.ZP)(li.X2)`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,xi=c.ZP.div`
  color: ${({theme:e})=>e.neutral2};
`,hi=(0,c.ZP)(li.X2)`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${ai.T1}) {
    width: 220px;
  }
`,ui=c.ZP.div`
  display: flex;
`,mi=c.ZP.div`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,gi=(0,c.ZP)(tt.g8)`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,fi=c.ZP.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,vi=(0,c.ZP)(li.sg)`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${T.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,Pi=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,s]=(0,De.useReducer)((e=>!e),!1),r=(0,De.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),o=(0,De.useRef)(null);return(0,qt.t)(o,(()=>n&&s())),(0,i.jsxs)(fi,{ref:o,children:[(0,i.jsxs)(hi,{className:nn.km,onClick:s,children:[(0,i.jsxs)(ui,{children:[t.map(((e,n)=>(0,i.jsx)(mi,{totalSelected:t.length,index:n,children:(0,it.Dp)(e.name,"20")},n))),r]}),(0,i.jsx)(gi,{isOpen:n,secondaryColor:di.Z4.colors.neutral1})]}),(0,i.jsx)(vi,{isOpen:n,children:Oe.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const s=n.includes(e),r=()=>{1===n.length&&s||t(s?n.filter((t=>t!==e)):[...n,e])};return(0,i.jsxs)(pi,{onClick:r,children:[(0,i.jsxs)(li.X2,{gap:"12",onClick:r,children:[(0,it.Dp)(e.name,"24"),(0,i.jsxs)(li.sg,{children:[(0,i.jsx)(k.T.BodyPrimary,{children:e.name}),(0,i.jsxs)(xi,{className:nn.VJ,children:[e.fee,"% fee"]})]})]}),(0,i.jsx)(ci.X,{checked:s,onPress:r,variant:"branded"})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},ji=(0,c.ZP)(li.sg)`
  gap: 4px;
  position: relative;
`,yi=(0,c.ZP)(li.X2)`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,wi=(0,c.ZP)(li.X2)`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,bi=(0,c.ZP)(Kn.Z)`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Si=c.ZP.div`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${T.k.dropdown};
`,ki=(0,c.ZP)(li.X2)`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,Ti=(0,c.ZP)(b.Z)`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;const $i=()=>{const{t:e}=(0,$.useTranslation)(),[t,n]=(0,De.useState)("day"),[s,r]=(0,De.useState)("7"),[o,a]=(0,De.useState)(0),l=(0,B.P)((e=>e.setGlobalExpiration)),[d,c]=(0,De.useReducer)((e=>!e),!1),p=(0,De.useRef)(null);(0,qt.t)(p,d?c:void 0);const x=(0,De.useMemo)((()=>[{displayText:e("common.time.hours"),isSelected:"hour"===t,onClick:()=>{n("hour"),c()}},{displayText:e("common.time.days"),isSelected:"day"===t,onClick:()=>{n("day"),c()}},{displayText:e("common.time.weeks"),isSelected:"week"===t,onClick:()=>{n("week"),c()}},{displayText:e("common.time.months"),isSelected:"month"===t,onClick:()=>{n("month"),c()}}]),[t,e]);let h;switch(t){case"hour":h=(0,i.jsx)($.Plural,{value:+s,one:e("common.time.hour"),other:e("common.time.hours")});break;case"day":h=(0,i.jsx)($.Plural,{value:+s,one:e("common.time.day"),other:e("common.time.days")});break;case"week":h=(0,i.jsx)($.Plural,{value:+s,one:e("common.time.week"),other:e("common.time.weeks")});break;case"month":h=(0,i.jsx)($.Plural,{value:+s,one:e("common.time.month"),other:e("common.time.months")})}return(0,De.useEffect)((()=>{const e=Ei(parseFloat(s),t);1e3*e-Date.now()<F()("60s")||isNaN(e)?a(1):1e3*e-Date.now()>F()("180d")?a(2):a(0),l(e)}),[s,t,l]),(0,i.jsxs)(ji,{ref:p,children:[(0,i.jsxs)(yi,{isInvalid:0!==o,children:[(0,i.jsx)(tn.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:nn.d1,color:{placeholder:"neutral2",default:"neutral1"},value:s,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{r(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,i.jsxs)(wi,{onClick:c,children:[h," ",(0,i.jsx)(bi,{isOpen:d})]}),d&&(0,i.jsx)(Si,{children:(0,i.jsx)(Ut,{dropDownOptions:x,width:125})})]}),0!==o&&(0,i.jsxs)(ki,{className:nn.VJ,children:[" ",(0,i.jsx)(Ti,{})," ",2===o?"Maximum 6 months":"Set duration"]})]})},Ei=(e,t)=>Math.round((Date.now()+F()("1h")*(()=>{switch(t){case"hour":return 1;case"day":return 24;case"week":return 168;default:return 720}})()*e)/1e3);var Zi=n(88609);var Ii=n(21926);function Ci(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}const Ai=(0,c.ZP)(x.ZP)`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${S.j$.xs}px) {
    gap: 4px;
  }
`,Ni=c.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${S.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Ri=(0,c.ZP)(Ii.Z)`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${S.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,Oi=(0,c.ZP)(h.ZP)`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${S.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,Li=(0,c.ZP)(h.ZP)`
  gap: 12px;
  width: min-content;
`,_i=c.ZP.section`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,Fi=(0,c.ZP)(h.ZP)`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${S.j$.sm}px) {
    padding-left: 40px;
  }
`,Mi=c.ZP.div`
  margin-top: 24px;
  margin-bottom: 48px;
`,Di=(0,c.ZP)(h.ZP)`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  z-index: ${T.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${S.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${S.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,Gi=c.ZP.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Hi=(0,c.ZP)(k.T.SubHeader)`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${S.j$.lg}px) {
    display: flex;
  }
`,Bi=(0,c.ZP)(h.ZP)`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${S.j$.sm}px) {
    gap: 20px;
  }
`,zi=(0,c.ZP)(h.ZP)`
  width: min-content;
  gap: 16px;
`,Ki=c.ZP.span`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${S.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Vi=()=>{const{formatNumberOrString:e}=(0,E.Gb)(),{setProfilePageState:t}=(0,Zi.a)(),n=(0,l.m)(),r=(0,m.z)(),o=(0,u.d)(),a=(0,Kt.useTrace)({modal:s.KO.NFT_LISTING}),{formatCurrencyAmount:d}=(0,E.Gb)(),{setGlobalMarketplaces:c,sellAssets:p,issues:P}=(0,B.P)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:j,collectionsRequiringApproval:y,setCollectionStatusAndCallback:w}=X((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),b=(0,De.useMemo)((()=>Xe(p)),[p]),S=(0,f.Z)(n.chainId),T=(0,v.Z)(b.toString(),S),Z=(0,g.sq)(T),I=d({amount:Z,type:E.sw.FiatTokenPrice}),[C,A]=(0,De.useReducer)((e=>!e),!1),[N,R]=(0,De.useState)([Oe[0]]);We(),(0,De.useEffect)((()=>{c(N)}),[N,c]);const O={collection_addresses:p.map((e=>e.asset_contract.address)),token_ids:p.map((e=>e.tokenId)),marketplaces:Array.from(new Set(j.map((e=>e.marketplace.name)))),list_quantity:j.length,usd_value:I,...a},L=function(){var e,t=(e=function*(){if(r){(0,zt.sendAnalyticsEvent)(s.Yz.NFT_SELL_START_LISTING,{...O});for(const t of y)(e=t.status)!==z.S.PAUSED&&e!==z.S.APPROVED&&(o?yield Be(t,r,w):Be(t,r,w));var e}},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Ci(r,i,s,o,a,"next",e)}function a(e){Ci(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),_=o?(0,i.jsx)(k.T.SubHeader,{children:(0,i.jsx)($.Trans,{i18nKey:"common.receive"})}):(0,i.jsx)(k.T.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)($.Trans,{i18nKey:"common.youRecieve"})});return(0,i.jsxs)(x.ZP,{children:[(0,i.jsxs)(_i,{children:[(0,i.jsxs)(Ai,{children:[(0,i.jsxs)(h.ZP,{children:[(0,i.jsx)(Ni,{children:(0,i.jsx)(Ri,{onClick:()=>t(z.H.VIEWING)})}),(0,i.jsx)(k.T.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,i.jsx)($.Trans,{i18nKey:"nfts.my"})})]}),(0,i.jsxs)(Fi,{children:[(0,i.jsx)(Oi,{children:(0,i.jsx)($.Trans,{i18nKey:"nfts.sell"})}),(0,i.jsxs)(Li,{children:[(0,i.jsx)(Pi,{setSelectedMarkets:R,selectedMarkets:N}),(0,i.jsx)($i,{})]})]})]}),(0,i.jsx)(Mi,{children:(0,i.jsx)(oi,{selectedMarkets:N})})]}),(0,i.jsxs)(Di,{issues:!!P,children:[_,(0,i.jsxs)(Bi,{children:[(0,i.jsxs)(zi,{children:[(0,i.jsxs)(Ki,{totalEthListingValue:!!b,children:[b>0?e({input:b,type:E.sw.NFTToken}):"-"," ","ETH"]}),!!Z&&(0,i.jsx)(Hi,{children:I})]}),(0,i.jsx)(Je,{onClick:()=>{A(),L()}})]})]}),(0,i.jsx)(Gi,{}),C&&(0,i.jsx)(Wt,{overlayClick:A})]})};var Xi=n(86277),Wi=n(52843),qi=n(35587),Yi=n(49513),Ji=n(92720),Ui=n(69201),Qi=n(83024),es=n(99866),ts=n(52529),ns=(n(21422),n(25040)),is=n(62390),ss=n(76907),rs=n(1285),os=n(67544),as=n(84820),ls=n(17955),ds=n(62500);const cs=(0,c.ZP)(li.sg)`
  ${Qe.Z}
  height: 100vh;
`,ps=(0,c.ZP)(ts.X)`
  min-height: 15px;
  width: 75%;
`,xs=(0,c.ZP)(ts.X)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,hs=(0,c.ZP)(li.X2)`
  justify-content: space-between;
  padding-bottom: 8px;
`,us=({style:e})=>(0,i.jsxs)(li.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,i.jsxs)(li.X2,{display:"flex",flex:"1",children:[(0,i.jsx)(xs,{}),(0,i.jsx)(ps,{})]}),(0,i.jsx)(Wi.n,{as:"span",borderColor:"surface3","aria-hidden":"true"})]}),ms=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:s})=>{const r=(0,ns.P)((e=>e.collectionFilters)),o=(0,ns.P)((e=>e.setCollectionFilters)),[a,l]=(0,is.w)(),d=(0,u.d)(),{sidebarX:c}=(0,ss.q_)({sidebarX:a?0:-360,config:{duration:St.Kd.medium,easing:ss.Z5.easeOutSine}}),p=(0,De.useMemo)((()=>{var e;return s&&(null===(e=s)||void 0===e?void 0:e.length)>=Vs||n}),[s,n]);return(0,i.jsx)(Wi.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:a?"flex":"none",style:{transform:d?void 0:c.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,i.jsxs)(Wi.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[d&&(0,i.jsxs)(hs,{children:[(0,i.jsx)(k.T.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(tt.DX,{height:28,width:28,fill:di.Z4.colors.neutral1,onClick:()=>l(!1)})]}),(0,i.jsx)(gs,{collections:s,collectionFilters:r,setCollectionFilters:o,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:p})]})})},gs=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:s,hasNextPage:r,isFetchingNextPage:o,hideSearch:a})=>{const[l,d]=(0,De.useState)(""),[c,p]=(0,De.useState)(e);(0,De.useEffect)((()=>{if(l){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(l.toLowerCase())}));p(t)}else p(e)}),[l,e]);const x=(0,De.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),h=r?c.length+1:c.length,u=o?ds.default:s,m=(0,De.useCallback)((e=>!r||e<c.length),[c.length,r]),g=(0,De.useCallback)((({index:e,style:s})=>!(!!c&&c[e])||o?(0,i.jsx)(us,{style:s},e):(0,i.jsx)(vs,{style:s,collection:c[e],collectionFilters:t,setCollectionFilters:n},x(e,c))),[c,o,x,t,n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Wi.n,{className:nn.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,i.jsx)(Wi.n,{paddingBottom:"12",borderRadius:"8",children:(0,i.jsxs)(li.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!a&&(0,i.jsx)(fs,{collectionSearchText:l,setCollectionSearchText:d}),(0,i.jsx)(cs,{children:(0,i.jsx)(rs.default,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(as.Z,{isItemLoaded:m,itemCount:h,loadMoreItems:u,children:({onItemsRendered:t,ref:n})=>(0,i.jsx)(os.FixedSizeList,{height:e,width:"100%",itemCount:h,itemSize:44,onItemsRendered:t,itemKey:x,ref:n,children:g})})})})]})})]})},fs=({collectionSearchText:e,setCollectionSearchText:t})=>(0,i.jsx)(tn.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),vs=({collection:e,collectionFilters:t,setCollectionFilters:n,style:s})=>{const[r,o]=(0,De.useState)(!1),a=(0,De.useCallback)((e=>t.some((t=>t===e))),[t]),l=()=>{o(!r),n(e.address)};return(0,i.jsxs)(li.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...s},maxHeight:"44",as:"li",onClick:l,children:[(0,i.jsxs)(li.X2,{children:[(0,i.jsx)(Wi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsxs)(Wi.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,i.jsx)(ls.f,{checked:a(e.address),onCheckPressed:l,text:String(e.count)})]})};var Ps=n(41420);const js=c.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,ys=c.ZP.div`
  display: flex;
  flex-direct: row;
  width: 100%;
`,ws=(0,c.ZP)(ys)`
  gap: 12px;
  margin-bottom: 30px;
`,bs=c.ZP.div`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,Ss=(0,c.ZP)(ys)`
  justify-content: space-between;
`,ks=c.ZP.div`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,Ts=c.ZP.div`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,$s=c.ZP.div`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,Es=()=>(0,i.jsx)(Wi.n,{width:"full",className:Ji.P,children:Array.from(Array(Ks),((e,t)=>(0,i.jsx)($s,{className:Ps.S},t)))}),Zs=()=>(0,i.jsxs)(js,{children:[(0,i.jsx)(ws,{children:(0,i.jsx)(bs,{className:Ps.S})}),(0,i.jsxs)(Ss,{children:[(0,i.jsx)(ks,{className:Ps.S}),(0,i.jsx)(Ts,{className:Ps.S})]}),(0,i.jsx)(Es,{})]});var Is=n(32040),Cs=n(81786),As=n(99251),Ns=n(6282);const Rs=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:r})=>{const o=(0,B.P)((e=>e.sellAssets)),a=(0,B.P)((e=>e.selectSellAsset)),l=(0,B.P)((e=>e.removeSellAsset)),d=(0,As.c)((e=>e.bagExpanded)),c=(0,As.c)((e=>e.toggleBag)),p=(0,u.d)(),x=(0,Ns.s0)(),h=(0,De.useMemo)((()=>o.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,o]),m=(0,Kt.useTrace)(),g=t=>{t?l(e):(a(e),(0,zt.sendAnalyticsEvent)(s.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...m})),d||o.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||p||c()},f=e.susFlag,v=(0,De.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,i.jsx)(tt.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,i.jsx)($.Trans,{i18nKey:"nft.removeFromBag"}),notSelectedInfo:(0,i.jsx)($.Trans,{i18nKey:"nft.listForSale"}),disabledInfo:(0,i.jsx)($.Trans,{i18nKey:"nft.unavailableToList"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,i.jsx)(Is.y,{asset:e,display:v,isSelected:h,isDisabled:Boolean(f),selectAsset:()=>g(!1),unselectAsset:()=>g(!0),onButtonClick:()=>g(h),onCardClick:()=>{r||x((0,Cs.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})};var Os=n(95894),Ls=n(61049),_s=(e=>(e[e.SHORT=5e3]="SHORT",e[e.MEDIUM=15e3]="MEDIUM",e[e.LONG=6e4]="LONG",e))(_s||{});function Fs(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(d){return void n(d)}a.done?t(l):Promise.resolve(l).then(i,s)}function Ms(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Fs(r,i,s,o,a,"next",e)}function a(e){Fs(r,i,s,o,a,"throw",e)}o(void 0)}))}}const Ds=function(){var e=Ms((function*({params:e}){let t=!1;if(!e)return[];for(const s of Object.values(e))void 0===s&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),i=yield n.json();return i?i.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]}));return function(t){return e.apply(this,arguments)}}();var Gs=n(10581);const Hs=(0,c.ZP)(li.sg)`
  ${Os.bc}
`,Bs=c.ZP.div`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,zs=c.ZP.div`
  margin-top: 164px;
`,Ks=25,Vs=300,Xs=()=>{const e=(0,l.m)(),t=(0,ns.P)((e=>e.walletCollections)),n=(0,ns.P)((e=>e.setWalletCollections)),{resetSellAssets:s}=(0,B.P)((({reset:e})=>({resetSellAssets:e}))),r=(0,B.P)((e=>e.sellAssets)),o=(0,As.c)((e=>e.toggleBag)),[a,d]=(0,is.w)(),c=(0,u.d)(),{data:p,fetchNextPage:x,hasNextPage:h,isFetchingNextPage:m,isSuccess:g}=(0,Xi.N)((f=e.address??"",(0,Ls.t)({queryKey:["ownerCollections",{address:f}],queryFn:function(){var e=Ms((function*({pageParam:e}){const t={asset_owner:f,offset:""+e*Vs,limit:`${Vs}`};return{data:yield Ds(t),nextPage:e+1}}));return function(t){return e.apply(this,arguments)}}(),initialPageParam:0,getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:_s.MEDIUM})));var f;const v=(0,De.useMemo)((()=>{var e;return g?null===(e=p)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[g,p]);return(0,De.useEffect)((()=>{v&&n(v)}),[v,n]),(0,i.jsxs)(Hs,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Bs,{children:"My NFTs"}),(0,i.jsxs)(li.X2,{alignItems:"flex-start",position:"relative",children:[(0,i.jsx)(ms,{fetchNextPage:x,hasNextPage:h,isFetchingNextPage:m,walletCollections:t}),(!c||!a)&&(0,i.jsx)(De.Suspense,{fallback:(0,i.jsx)(Zs,{}),children:(0,i.jsx)(Ws,{walletCollections:t,isFiltersExpanded:a,setFiltersExpanded:d})})]})]}),r.length>0&&(0,i.jsxs)(li.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:nn.v4,children:[r.length," NFT",1===r.length?"":"s",(0,i.jsx)(Wi.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:s,lineHeight:"16",children:"Clear"}),(0,i.jsx)(Wi.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:o,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},Ws=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var s,r,o,a,d;const c=(0,l.m)(),p=(0,ns.P)((e=>e.setCollectionFilters)),x=(0,ns.P)((e=>e.collectionFilters)),h=(0,ns.P)((e=>e.clearCollectionFilters)),m=(0,As.c)((e=>e.bagExpanded)),[g,f]=(0,De.useState)(),v=(0,u.d)(),P=(0,B.P)((e=>e.sellAssets)),{walletAssets:j,loading:y,hasNext:w,loadMore:b}=(0,qi.b)({ownerAddress:c.address??"",collectionFilters:x,first:Ks}),{gridX:S}=(0,ss.q_)({gridX:t?300:-16,config:{duration:250,easing:ss.Z5.easeOutSine}});return y?(0,i.jsx)(Zs,{}):(0,i.jsx)(li.sg,{width:"full",children:0===(null===(s=j)||void 0===s?void 0:s.length)?(0,i.jsx)(zs,{children:(0,i.jsx)(es.f,{})}):(0,i.jsxs)(Wi.x,{flexShrink:"0",position:v&&m?"fixed":"static",style:{transform:S.to((e=>`translate(${Number(e)-(!v&&t?300:-16)}px)`))},paddingY:"20",children:[(0,i.jsx)(li.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,i.jsx)(Ui.L,{isMobile:v,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,i.jsx)(li.X2,{children:(0,i.jsx)(qs,{collections:e,collectionFilters:x,setCollectionFilters:p,clearCollectionFilters:h})}),(0,i.jsx)(Gs.Z,{next:b,hasMore:w??!1,loader:Boolean(w&&(null===(r=j)||void 0===r?void 0:r.length))&&(0,i.jsx)(Yi.p,{count:Ks}),dataLength:(null===(o=j)||void 0===o?void 0:o.length)??0,className:(null===(a=j)||void 0===a?void 0:a.length)?Ji.P:void 0,style:{overflow:"unset"},children:(null===(d=j)||void 0===d?void 0:d.length)?j.map(((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(Rs,{asset:e,mediaShouldBePlaying:e.tokenId===g,setCurrentTokenPlayingMedia:f,hideDetails:P.length>0})},t))):null})]})})},qs=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:s})=>{var r,o;const a=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},l=(0,De.useCallback)((()=>s()),[s]);return(0,i.jsxs)(li.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(r=t)||void 0===r?void 0:r.length)&&t.map(((e,t)=>(0,i.jsx)(Ys,{collection:a(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(o=t)||void 0===o?void 0:o.length)&&(0,i.jsx)(Qi.v,{onClick:l,children:"Clear all"})]})},Ys=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,i.jsxs)(li.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,i.jsx)(Wi.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsx)(Wi.n,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,i.jsx)(Wi.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,i.jsx)(tt.aM,{})})]}):null};var Js=n(437),Us=n(92457);const Qs=c.ZP.div`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${S.j$.lg}px) {
    height: auto;
  }
`,er=c.ZP.div`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?p.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${S.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,tr=c.ZP.div`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,nr=(0,c.ZP)(o.DF)`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function ir(e,t){return e?t?(0,$.t)("nft.authorsCollectionOnUni",{name:t}):(0,$.t)("nft.collectonOnAddress",{address:(0,Us.shortenAddress)(e)}):(0,$.t)("nft.collectionOnUni")}function sr(){const e=(0,Zi.a)((e=>e.state)),t=(0,Zi.a)((e=>e.setProfilePageState)),n=(0,B.P)((e=>e.reset)),o=(0,ns.P)((e=>e.clearCollectionFilters)),c=(0,l.m)(),{ENSName:p}=(0,d.Z)(c.address),x=(0,De.useRef)(c.address),h=(0,r.Q)();(0,De.useEffect)((()=>{x.current!==c.address&&(x.current=c.address,n(),t(z.H.VIEWING),o())}),[c.address,n,t,o]);const u=(0,As.c)((e=>e.bagExpanded)),m=e===z.H.LISTING;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Js.Helmet,{children:(0,i.jsx)("title",{children:ir(c.address,p)})}),(0,i.jsx)(Bt.default,{logImpression:!0,page:s.yJ.NFT_PROFILE_PAGE,children:(0,i.jsx)(Qs,{children:c.isConnected?(0,i.jsx)(er,{cartExpanded:u,isListingNfts:m,children:m?(0,i.jsx)(Vi,{}):(0,i.jsx)(Xs,{})}):(0,i.jsxs)(tr,{children:[(0,i.jsx)(k.T.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,i.jsx)($.Trans,{i18nKey:"nft.noItems"})}),(0,i.jsx)(nr,{onClick:h.open,children:(0,i.jsx)(k.T.SubHeader,{color:"white",lineHeight:"20px",children:(0,i.jsx)(a.T,{})})})]})})})]})}}}]);
//# sourceMappingURL=1414.8620d759.chunk.js.map