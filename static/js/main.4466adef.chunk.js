(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(2),o=n.n(s),c=(n(12),n(3)),l=n(4),i=n(6),u=n(5),p=(n(13),n(14),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleFileRead=function(e){var t=r.state.fileReader.result,n=r.readFile(t),a=document.createElement("a"),s=new Blob([r.state.excelOutput],{type:"text/plain"});a.href=URL.createObjectURL(s),a.download="myFile.csv",document.body.appendChild(a),a.click(),r.setState({JSONoutput:n})},r.handleCreateReverse=function(e){var t=r.reverseRead(r.state.textAreaValue),n=document.createElement("a"),a=new Blob([t],{type:"text/plain"});n.href=URL.createObjectURL(a),n.download="myFile.csv",document.body.appendChild(n),n.click()},r.handleFileChosen=function(e){r.state.fileReader=new FileReader,r.state.fileReader.onloadend=r.handleFileRead,r.state.fileReader.readAsText(e)},r.getNumSpaces=function(e){for(var t=0,n=0;n<e.length;n++){if("-"!=e.substring(n,n+1))return 16*t+"px";t+=1}return 16*t+"px"},r.removeLeading=function(e){for(var t=0,n=0;n<e.length;n++){if("-"!=e.substring(n,n+1))return e.substring(t);t+=1}return e.substring(t)},r.handleChange=function(e){r.setState({textAreaValue:e.target.value})},r.state={JSONoutput:[],fileReader:"",data:"",excelOutput:"",textAreaValue:"",finalMatrix:[[]],displayMatrix:[]},r}return Object(l.a)(n,[{key:"reverseRead",value:function(e){for(var t=JSON.parse(e),n={},r=0;r<t.length;r++){n[t[r].conceptId]=r}for(var a=[],s=[],o=[],c=0;c<t.length;c++)for(var l=t[c],i=Object.keys(l),u=0;u<i.length;u++){var p=l[i[u]];if(i[u].includes("Source")&&(s.includes(c)||(s.push(c),o.push(c))),Array.isArray(p)){for(var d=[],h=0;h<p.length;h++){var f=p[h];if(null!=f.match(/[0-9]{9}.json/)){var g=f.substring(0,9);d.push(t[n[g]]),a.includes(n[g])||a.push(n[g])}}d.length>0&&(l[i[u]]=d)}else if("string"==typeof p){if(null!=p.match(/[0-9]{9}.json/)){var v=p.substring(0,9);l[i[u]]=t[n[v]],a.includes(n[v])||a.push(n[v])}}else{for(var I=Object.keys(p),m={},y=0;y<I.length;y++)if(I[y].match(/[0-9]{9}.json/)){var b=I[y].substring(0,9);m[p[I[y]]]=t[n[b]],a.includes(n[b])||a.push(n[b])}Object.keys(p).length>0&&(l[i[u]]=m)}}for(var O=[],w=0;w<a.length;w++)O.includes(t[a[w]].conceptId)||O.push(t[a[w]].conceptId);for(var x=0;x<t.length;x++)O.includes(t[x].conceptId)||s.includes(x)||s.push(x);for(var R=[],j=0;j<s.length;j++)R.push(t[s[j]].conceptId);this.setState({finalMatrix:R});for(var S=[],k=[],N=[],C=[],E=0;E<s.length;E++){var V=[t[s[E]].conceptId],P={};this.recurseRead(t[s[E]],P,"",V),S.push(P);for(var U=Object.keys(P),A=0,J=0;J<U.length;J++)k.includes(U[J])||N.includes(U[J])||(U[J].includes("conceptId")?N.push(U[J]):U[J].includes("subcollection")||U[J].includes("subcollections")||k.push(U[J])),P[U[J]].length>A&&(A=P[U[J]].length);C.push(A)}for(var F=!1,M=0;M<k.length;M++){for(var T=!1,D=0;D<N.length;D++)N[D].includes(k[M])&&(k.splice(M,0,N[D]),M+=1,D=N.length,T=!0);0==T&&0==F&&(k.splice(M,0,"conceptId"),M+=1,F=!0)}var L="";L+=k.map((function(e){return-1!=e.indexOf("conceptId")?"conceptId":-1!=e.indexOf(",")?'"'+e+'"':"0"==e?"":e})).join(",");for(var B=0;B<S.length;B++){for(var W=C[B],q=[],z=S[B],$=0;$<W;$++){for(var G=[],H=0;H<k.length;H++)G.push("");q.push(G)}for(var K=0;K<k.length;K++){var Q=k[K];if(z.hasOwnProperty(Q)){var X=z[Q];if("0"!=Q)for(var Y=0;Y<X.length;Y++)q[Y][K]=X[Y]}}for(var Z=0;Z<q.length;Z++)L+="\n",L+=q[Z].map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(",")}return L}},{key:"recurseRead",value:function(e,t,n,r,a){var s=Object.keys(e);if(e.hasOwnProperty("conceptId")&&""!=n){var o=e.conceptId;if("subcollections"==n||"subcollection"==n){for(var c=-1,l=-1,i=0;i<s.length;i++)t.hasOwnProperty("conceptId"+s[i])&&""!=s[i]&&"subcollections"!=s[i]&&"subcollection"!=s[i]&&-1==c&&(c=i),s[i].includes("conceptId")||-1!=l||"subcollections"==s[i]||"subcollection"==s[i]||(l=i);var u="";u=-1==c?s[l]:s[c],t.hasOwnProperty("conceptId"+u)?t["conceptId"+u].includes(o)||t["conceptId"+u].push(o):t["conceptId"+u]=[o]}else t.hasOwnProperty("conceptId"+n)?t["conceptId"+n].includes(o)||t["conceptId"+n].push(o):t["conceptId"+n]=[o]}for(var p=0;p<s.length;p++){var d=e[s[p]];if(Array.isArray(d)){for(var h=[],f=0;f<d.length;f++)if("string"!=typeof d[f]&&!r.includes(d[f].conceptId)&&(r.push(d.conceptId),!n.includes("Source"))){var g=this.recurseRead(d[f],t,s[p],r);h.push(g)}}else if("string"==typeof d)"conceptId"!=s[p]&&"conceptId"!=n?""==n||"subcollection"==n?t.hasOwnProperty(s[p])?t[s[p]].includes(d)||t[s[p]].push(d):t[s[p]]=[d]:t.hasOwnProperty(n)?t[n].includes(d)||t[n].push(d):t[n]=[d]:"conceptId"==s[p]&&""==n&&(t.hasOwnProperty("conceptId"+n)?t["conceptId"+n].includes(d)||t["conceptId"+n].push(d):t["conceptId"+n]=[d]);else if(!d.hasOwnProperty("conceptId")||!r.includes(d.conceptId))if(d.hasOwnProperty("conceptId"))r.push(d.conceptId),this.recurseRead(d,t,s[p],r);else for(var v=Object.keys(d),I=0;I<v.length;I++)d[v[I]].hasOwnProperty("Variable Name")&&!d[v[I]]["Variable Name"].includes("=")&&(d[v[I]]["Variable Name"]=v[I]+"="+d[v[I]]["Variable Name"]),this.recurseRead(d[v[I]],t,s[p],r)}}},{key:"generateNine",value:function(){for(var e="",t=0;t<9;t++){e+=Math.floor(10*Math.random())}return e}},{key:"generateRandomUUID",value:function(e){for(var t=this.generateNine();!e.includes(t);){return this.generateNine()}}},{key:"processCluster",value:function(e,t,n,r,a,s,o,c){for(var l=[],i=Object.keys(s),u=[],p={},d=0;d<i.length;d++)u.push(parseInt(i[d])),p[s[i[d]]]=parseInt(i[d]);for(var h=1;h<e.length;h++)for(var f=e[h],g=0;g<f.length;g++)""==f[g].trim()||u.includes(g)||l.includes(g)||l.push(g);for(var v={},I=e[0],m=0;m<I.length;m++)u.includes(m)&&"thisRowId"==s[m]&&m,(""!=I[m]&&!l.includes(m)||u.includes(m)&&"thisRowId"==s[m])&&(v[t[m]]=I[m]);v.hasOwnProperty("conceptId")&&""!=v.conceptId||(n.hasOwnProperty(I[r])?(v.conceptId=n[I[r]],a.includes(v.conceptId)||a.push(v.conceptId)):(v.conceptId=this.generateRandomUUID(a),a.push(v.conceptId),n[I[r]]=v.conceptId)),I[p.thisRowId]=v.conceptId;for(var y=Object.keys(p),b=0;b<y.length;b++)if(-1!=y[b].indexOf("Source")){var O=I[p[y[b]]],w=I[p[y[b]]+1];""==O&&n.hasOwnProperty(w)&&(O=n[w]);for(var x=-1,R=0;R<o.length;R++){var j=o[R];""!=O&&j.conceptId==O?(x=b,j.subcollections.includes(v.conceptId+".json")||j.subcollections.push(v.conceptId+".json"),R=o.length):""==O&&w==j["Variable Name"]&&(x=b,O=j.conceptId,j.subcollections.includes(v.conceptId+".json")||j.subcollections.push(v.conceptId+".json"),R=o.length)}if(-1==x){var S={};""==O&&(O=this.generateRandomUUID(a)),S.conceptId=O,S["Variable Name"]=w,S.subcollections=[v.conceptId+".json"],o.push(S)}n[w]=O,a.includes(O)||a.push(O),v[t[p[y[b]]+1]]=O+".json",I[p[y[b]]]=O}for(var k=[],N=[],C=[],E=-1,V={},P=0;P<e.length;P++){for(var U={},A="",J=e[P],F=0;F<l.length;F++){var M=l[F],T=J[M];if(-1!=T.indexOf("=")){A=T,E=M,C.push(T);var D=A.split("=")[1].trim(),L=A.split("=")[0].trim(),B=this.generateRandomUUID(a);n.hasOwnProperty(D)&&(B=n[D]),""!=J[E-1]&&(B=J[E-1]),c.push({conceptId:B,"Variable Name":D}),n[D]=B,a.includes(B)||a.push(B),V[B+".json"]=L,J[E-1]=B}else""!=J[M]&&(U[t[M]]=J[M])}if(p.hasOwnProperty("leftMostId")&&""!=J[p.leftMostId]&&(U.conceptId=J[p.leftMostId]),0!=Object.keys(U).length){for(var W=this.generateRandomUUID(a),q=Object.keys(U),z=0;z<q.length;z++){var $=q[z];n.hasOwnProperty(U[$])&&(W=n[U[$]])}U.hasOwnProperty("conceptId")&&(W=U.conceptId),a.includes(W)||a.push(W),U.conceptId=W,N.push(W+".json");for(var G=0;G<q.length;G++){n[U[q[G]]]=W}k.push(U),e[P][p.leftMostId]=W}}if(0==k.length&&C.length>0)v[t[E]]=V;else{0!=N.length&&(v.subcollection=N);for(var H=0;H<k.length;H++){var K=k[H];K[t[E]]=V,c.push(K)}}return""==e[0][p.thisRowId]?(v.conceptId=this.generateRandomUUID(a),n.hasOwnProperty(v[t[r]])&&(v.conceptId=n[v[t[r]]]),e[0][p.thisRowId]=v.conceptId,n[v[t[r]]]=v.conceptId):(v.conceptId=e[0][p.thisRowId],n[v[t[r]]]=v.conceptId),c.push(v),e}},{key:"CSVToArray",value:function(e){e=e.trim();for(var t=[];-1!=e.indexOf(",");){var n="";'"'==e.substring(0,1)?(n=(e=e.substring(1)).substring(0,e.indexOf('"')),e=(e=e.substring(e.indexOf('"')+1)).substring(e.indexOf(",")+1)):(n=e.substring(0,e.indexOf(",")),e=e.substring(e.indexOf(",")+1)),t.push(n)}return t.push(e),t}},{key:"lookForConcepts",value:function(e,t,n,r){for(var a=-1,s=[],o=1;o<e.length;o++)for(var c=e[o],l=0;l<c.length;l++)""!=c[l]&&(s.includes(l)||s.push(l),-1!=c[l].indexOf("=")&&(n.includes(l)||n.push(l),a=l));for(var i=0;i<s.length;i++)s[i]!=a&&s[i]<r[0]&&"conceptId"!=t[s[i]]&&(r[0]=s[i],r[1]=t[s[i]])}},{key:"getConceptIds",value:function(e){for(var t=0,n=[],r=!0,a=!1,s=[],o=[],c=[],l=[],i=[],u=-1,p=-1,d=e.split("\n"),h=0;h<d.length;h++){var f=d[h],g=this.CSVToArray(f,",");if(r){s=g,r=!1;for(var v=0;v<g.length;v++)"Variable Name"==g[v]&&(t=v),-1!=g[v].indexOf("Source")?o.push(v):-1!=g[v].indexOf("conceptId")?(l.push(v),c.push(g[v])):-1==p&&""!=g[v]&&(o.push(v),p=v);u=g.length,i.push(g.length),i.push("")}else a?""==g[t]?n.push(g):this.lookForConcepts(n,s,o,i):(n.push(g),a=!0)}this.lookForConcepts(n,s,o,i),o.includes(i[0])||i[0]==u||o.push(i[0]);for(var I=[],m=0;m<o.length;m++){for(var y=!1,b=0;b<l.length;b++)o[m]==l[b]+1&&(y=!0);0==y&&I.push(o[m])}I.sort((function(e,t){return t-e}));var O="";r=!0;var w={};d=e.split("\n");for(var x=0;x<d.length;x++){var R=d[x],j=this.CSVToArray(R);if(1==r){for(var S=j[p],k=0;k<I.length;k++)j.splice(I[k],0,"conceptId");O+=j.map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(","),r=!1;for(var N=0;N<j.length;N++)j[N].includes("conceptId")&&N!=j.length-1&&(j[N+1]==S?w[N]="thisRowId":j[N+1]==i[1]?w[N]="leftMostId":w[N]=j[N+1])}else{for(var C=0;C<I.length;C++)j.splice(I[C],0,"");O+="\n",O+=j.map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(",")}}return this.state.data=O,w}},{key:"readFile",value:function(e){for(var t=[],n=[],r=JSON.parse("[]"),a=0,s=[],o=this.getConceptIds(e),c=[],l=!0,i=!1,u=[],p=JSON.parse("{}"),d=this.state.data.split("\n"),h=0;h<d.length;h++){var f=d[h],g=this.CSVToArray(f,",");if(l){u=g,l=!1;for(var v=0;v<g.length;v++)"Variable Name"==g[v]&&(a=v);c.push([g])}else if(i)if(""==g[a])s.push(g);else{var I=this.processCluster(s,u,p,a,r,o,n,t);c.push(I),s=[g],i=!0}else s.push(g),i=!0}var m=this.processCluster(s,u,p,a,r,o,n,t);c.push(m);for(var y=0;y<n.length;y++)t.push(n[y]);for(var b="",O=0;O<c.length;O++)for(var w=c[O],x=0;x<w.length;x++){w[x];b+=w[x].map((function(e){return-1!=e.indexOf(",")?'"'+e+'"':e})).join(","),O==c.length-1&&x==w.length-1||(b+="\n")}this.setState({excelOutput:b});for(var R=0;R<t.length;R++)JSON.stringify(t[R],null,"    ")+"\n";return t}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App",style:{"text-align":"left"}},a.a.createElement("header",{className:"App-header",style:{"font-size":"16px","padding-top":"50px","padding-bottom":"50px"}},a.a.createElement("h2",null,"CSV to JSONS"),a.a.createElement("input",{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(t){return e.handleFileChosen(t.target.files[0])}}),a.a.createElement("div",{style:{"text-align":"center"}},a.a.createElement("p",null,"CSV Rules:"),a.a.createElement("p",null,"There must be a Variable Name field in every full row"),a.a.createElement("p",null,"The leaf nodes (final unit of response) is the only row that is allowed to have an equals sign")),a.a.createElement("div",{style:{"padding-left":"50px","padding-right":"50px"}},JSON.stringify(this.state.JSONoutput)),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("h2",null,"JSONS to CSV"),a.a.createElement("p",null,"Enter a list of JSONS, and we will generate a csv file for it"),a.a.createElement("div",null,a.a.createElement("textarea",{value:this.state.textAreaValue,onChange:this.handleChange,rows:10,cols:50})),a.a.createElement("button",{type:"button",onClick:this.handleCreateReverse},"Convert!"),a.a.createElement("div",{style:{"word-wrap":"break-word","padding-left":"50px","padding-right":"50px"}},a.a.createElement("p",null,JSON.stringify(this.state.finalMatrix)))))}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4466adef.chunk.js.map