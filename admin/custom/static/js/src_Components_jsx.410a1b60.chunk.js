"use strict";(self.webpackChunkiobroker_admin_component_backitup=self.webpackChunkiobroker_admin_component_backitup||[]).push([["src_Components_jsx"],{20507:(M,v,s)=>{s.r(v),s.d(v,{default:()=>F});var g=s(1810),m=s(98360),y=s(86207),u=s(37451),D=s(35665),C=s(95520),I=s(15780),A=s(32149),B=s(56714),S=s(95973),o=s.n(S),r=s(37449),O=s(85903),b=Object.getPrototypeOf,x=Reflect.get,j=(c,e,t)=>x(b(c),t,e),k=(c,e,t)=>new Promise((n,i)=>{var d=a=>{try{p(t.next(a))}catch(f){i(f)}},h=a=>{try{p(t.throw(a))}catch(f){i(f)}},p=a=>a.done?n(a.value):Promise.resolve(a.value).then(d,h);p((t=t.apply(c,e)).next())});class l extends O.A{constructor(e){super(e),this.storedAlive=this.props.alive,this.storedChecked=!1}checkConfiguration(){console.log("Check Config"),this.props.alive&&!this.storedChecked&&(this.storedChecked=!0,this.props.socket.sendTo(`${this.props.adapterName}.${this.props.instance}`,"getFileSystemInfo",null).then(e=>{e!=null&&e.diskState&&e.storage&&e.diskFree&&(e.diskState==="warn"&&e.storage==="local"?this.showMessage(r.I18n.t("On the host only %s MB free space is available! Please check your system!",e.diskFree),r.I18n.t("BackItUp Information!")):e.diskState==="error"&&e.storage==="local"&&this.showMessage(r.I18n.t(`On the host only %s MB free space is available! Local backups are currently not possible. 

Please check your system!`,e.diskFree),r.I18n.t("BackItUp Information!"),"warning"))}),this.props.socket.sendTo(`${this.props.adapterName}.${this.props.instance}`,"getSystemInfo",null).then(e=>k(this,null,function*(){let t=!1;(e==null?void 0:e.systemOS)==="docker"&&e.dockerDB===!1?(this.props.data._isDockerDB=!1,this.props.data.influxDBEnabled=!1,this.props.data.mySqlEnabled=!1,this.props.data.sqliteEnabled=!1,this.props.data.pgSqlEnabled=!1,this.props.data.startAllRestore=!1,this.props.data.redisType!=="remote"&&this.props.data.redisEnabled&&(this.props.data.redisType="remote",console.log("isDocker: "+this.props.data._isDockerDB),t=!0)):(e==null?void 0:e.systemOS)==="docker"&&e.dockerDB===!0?(this.props.data._isDockerDB=!0,console.log("isDocker: "+this.props.data._isDockerDB),t=!0):(e==null?void 0:e.systemOS)!=="docker"&&(this.props.data._isDockerDB=!0,console.log("isDocker: "+this.props.data._isDockerDB),t=!0),(e==null?void 0:e.systemOS)==="docker"?(t=!0,this.props.data._restoreIfWait=1e4):(e==null?void 0:e.systemOS)==="win"&&(t=!0,this.props.data._restoreIfWait=18e3);const n=["ccu","mySql","sqlite","pgSql","influxDB","history"];for(let i=0;i<n.length;i++)if(!this.isConfigFilled(n[i])){const d=yield this.fetchConfig(n[i],this.props.data).catch(h=>this.showError(h));t=t||d.changed}})))}componentDidMount(){return k(this,null,function*(){j(l.prototype,this,"componentDidMount").call(this),this.checkConfiguration()})}renderItem(){return this.storedAlive!==this.props.alive&&(this.storedAlive=this.props.alive,this.storedAlive&&this.checkConfiguration()),this.renderMessage()}}l.propTypes={socket:o().object.isRequired,themeType:o().string,themeName:o().string,style:o().object,className:o().string,data:o().object.isRequired,attr:o().string,schema:o().object,onError:o().func,onChange:o().func};const E=l,F={AdapterExist:g.A,BackupNow:m.A,DetectConfig:y.A,GoogleDrive:D.A,Onedrive:C.A,Dropbox:I.A,CheckConfigInvisible:u.A,Instance:A.A,RestoreBackup:B.A,CheckAllConfigInvisible:E}}}]);

//# sourceMappingURL=src_Components_jsx.410a1b60.chunk.js.map