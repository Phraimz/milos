// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: material_dusk milos.ggsk
// Generated 2026-09-23T01:18:53

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_youtube_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_vimeo_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_file_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_url_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('hide_lottie_index', 1, 0, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_3d_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_3d_preview_1', 2, true, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_languages') == false)) && 
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._safe_area_title_phone=document.createElement('div');
		el.ggId="safe_area_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_title_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_title_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title_phone=document.createElement('div');
		els=me._node_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 65px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title_phone.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player._(player.getNodeUserdata('_master').title) == ""))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title_phone.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title_phone.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title_phone.style.transition='right 0s, top 0s';
				if (me._node_title_phone.ggCurrentLogicStatePosition == 0) {
					me._node_title_phone.style.right='20px';
					me._node_title_phone.style.top='20px';
				}
				else {
					me._node_title_phone.style.right='20px';
					me._node_title_phone.style.top='65px';
				}
			}
		}
		me._node_title_phone.logicBlock_position();
		me._node_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title_phone.style.transition='right 0s, top 0s';
				if (me._node_title_phone.ggCurrentLogicStateVisible == 0) {
					me._node_title_phone.style.visibility=(Number(me._node_title_phone.style.opacity)>0||!me._node_title_phone.style.opacity)?'inherit':'hidden';
					me._node_title_phone.ggVisible=true;
				}
				else {
					me._node_title_phone.style.visibility="hidden";
					me._node_title_phone.ggVisible=false;
				}
			}
		}
		me._node_title_phone.logicBlock_visible();
		me._node_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_title_phone.appendChild(me._node_title_phone);
		el=me._project_title_phone=document.createElement('div');
		els=me._project_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 28px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._project_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title_phone.style.transition='';
				if (me._project_title_phone.ggCurrentLogicStateVisible == 0) {
					me._project_title_phone.style.visibility=(Number(me._project_title_phone.style.opacity)>0||!me._project_title_phone.style.opacity)?'inherit':'hidden';
					me._project_title_phone.ggVisible=true;
				}
				else {
					me._project_title_phone.style.visibility="hidden";
					me._project_title_phone.ggVisible=false;
				}
			}
		}
		me._project_title_phone.logicBlock_visible();
		me._project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_title_phone.appendChild(me._project_title_phone);
		me.divSkin.appendChild(me._safe_area_title_phone);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 130px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 35px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
				else {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
			}
		}
		me._node_title.logicBlock_visible();
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._node_title);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 130px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 60px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.logicBlock_visible();
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._project_title);
		el=me._thumbnail_menu=document.createElement('div');
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 170px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='max-width: 1225px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_scroller=document.createElement('div');
		els=me._thumbnail_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 224px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosX = (me._thumbnail_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
			me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller.ggScrollPosX >= me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller.ggScrollPosX <= 0)) {
					me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosY = (me._thumbnail_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
			me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller.ggScrollPosY >= me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller.ggScrollPosY <= 0)) {
					me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
				me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller__content.onmouseup = null;
			me._thumbnail_scroller__content.onmousemove = null;
			me._thumbnail_scroller__content.ontouchend = null;
			me._thumbnail_scroller__content.ontouchmove = null;
			me._thumbnail_scroller__content.onpointerup = null;
			me._thumbnail_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller.ggDragStartY) > 10) me._thumbnail_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller.ggDragLastX) * me._thumbnail_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller.ggDragLastY) * me._thumbnail_scroller.ggVPercentVisible;
			me._thumbnail_scroller.ggDragInertiaX = -diffX;
			me._thumbnail_scroller.ggDragInertiaY = -diffY;
			me._thumbnail_scroller.ggDragLastX = eventX;
			me._thumbnail_scroller.ggDragLastY = eventY;
			me._thumbnail_scroller.ggScrollByX(-diffX);
			me._thumbnail_scroller.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = me._thumbnail_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller.ggDragLastY = me._thumbnail_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller__content.onmouseup = me._thumbnail_scroller__content.mousetouchend;
			me._thumbnail_scroller__content.ontouchend = me._thumbnail_scroller__content.mousetouchend;
			me._thumbnail_scroller__content.onmousemove = me._thumbnail_scroller__content.mousetouchmove;
			me._thumbnail_scroller__content.ontouchmove = me._thumbnail_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller__content.onpointerup = me._thumbnail_scroller__content.ontouchend;
				me._thumbnail_scroller__content.onpointermove = me._thumbnail_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnail_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 804px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 804px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_scroller.ggScrollPosX = 0;
		me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_scroller.ggScrollByXSmooth(30 * me._thumbnail_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._thumbnail_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 160px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 160px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller.ggScrollPosY = 0;
		me._thumbnail_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller.ggDragLastY;
				me._thumbnail_scroller.ggDragInertiaY = diffY;
				me._thumbnail_scroller.ggDragLastY = e.clientY;
				me._thumbnail_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller.ggDragLastY;
				me._thumbnail_scroller.ggDragInertiaY = diffY;
				me._thumbnail_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller.ggScrollByYSmooth(30 * me._thumbnail_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 160px;';
		hs+='left : 50px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._thumbnail_scroller.ggScrollPosX / me._thumbnail_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller.ggScrollPosY / me._thumbnail_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller.ggHorScrollVisible = false;
				}
				if ((me._thumbnail_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._thumbnail_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller.ggVertScrollVisible = true;
					if (!me._thumbnail_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._thumbnail_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._thumbnail_scroller__horScrollBg.style.visibility = 'inherit';
						me._thumbnail_scroller__horScrollFg.style.visibility = 'inherit';
						me._thumbnail_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._thumbnail_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller.ggHorScrollVisible) {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight - 5;
					if (me._thumbnail_scroller.ggVertScrollVisible) {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth - 5;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width - me._thumbnail_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width;
					}
					me._thumbnail_scroller__horScrollBg.style.width = me._thumbnail_scroller.ggAvailableWidth + 'px';
					me._thumbnail_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_scroller.ggHPercentVisible > 1.0) me._thumbnail_scroller.ggHPercentVisible = 1.0;
					me._thumbnail_scroller.ggScrollWidth = Math.round(me._thumbnail_scroller__horScrollBg.offsetWidth * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller__horScrollFg.style.width = me._thumbnail_scroller.ggScrollWidth + 'px';
					me._thumbnail_scroller.ggScrollPosX = me._thumbnail_scroller.ggScrollPosXPercent * me._thumbnail_scroller.ggAvailableWidth;
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
					if (me._thumbnail_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
						me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight;
					me._thumbnail_scroller.ggScrollPosX = 0;
					me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
					me._thumbnail_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._thumbnail_scroller.ggVertScrollVisible) {
					me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth - 5;
					if (me._thumbnail_scroller.ggHorScrollVisible) {
						me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight - 5;
						me._thumbnail_scroller.ggAvailableHeightWithScale = me._thumbnail_scroller.getBoundingClientRect().height - me._thumbnail_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight;
						me._thumbnail_scroller.ggAvailableHeightWithScale = me._thumbnail_scroller.getBoundingClientRect().height;
						me._thumbnail_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller__vertScrollBg.style.height = me._thumbnail_scroller.ggAvailableHeight + 'px';
					me._thumbnail_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller.ggVPercentVisible > 1.0) me._thumbnail_scroller.ggVPercentVisible = 1.0;
					me._thumbnail_scroller.ggScrollHeight =  Math.round(me._thumbnail_scroller__vertScrollBg.offsetHeight * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller__vertScrollFg.style.height = me._thumbnail_scroller.ggScrollHeight + 'px';
					me._thumbnail_scroller.ggScrollPosY = me._thumbnail_scroller.ggScrollPosYPercent * me._thumbnail_scroller.ggAvailableHeight;
					me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
					me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
					if (me._thumbnail_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
						me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth;
					me._thumbnail_scroller.ggScrollPosY = 0;
					me._thumbnail_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller);
					me._thumbnail_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 225;
		el.ggHeight = 150;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 150px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_scroller__content.appendChild(me._thumbnail_cloner);
		me._thumbnail_menu.appendChild(me._thumbnail_scroller);
		el=me._thumbnail_scroller_fwd=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail_scroller_fwd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_fwd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_fwd.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_fwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_fwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_fwd_icon_active.style.opacity='1';
			me._thumbnail_scroller_fwd_icon_active.style.visibility=me._thumbnail_scroller_fwd_icon_active.ggVisible?'inherit':'hidden';
			me.elementMouseOver['thumbnail_scroller_fwd']=true;
		}
		me._thumbnail_scroller_fwd.onmousedown=function (e) {
			me.elementMouseDown['thumbnail_scroller_fwd']=true;
		}
		me._thumbnail_scroller_fwd.onmouseup=function (e) {
			me.elementMouseDown['thumbnail_scroller_fwd']=false;
		}
		me._thumbnail_scroller_fwd.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_fwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_fwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_fwd_icon_active.style.opacity='0';
			me._thumbnail_scroller_fwd_icon_active.style.visibility='hidden';
			me.elementMouseDown['thumbnail_scroller_fwd']=false;
			me.elementMouseOver['thumbnail_scroller_fwd']=false;
		}
		me._thumbnail_scroller_fwd.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['thumbnail_scroller_fwd']) {
				skin.findElements('thumbnail_scroller')[0].ggScrollByXSmooth(15);
			}
		}
		me._thumbnail_scroller_fwd.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_scroller_fwd_icon=document.createElement('div');
		els=me._thumbnail_scroller_fwd_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTEwIDE3bDUtNS01LTV2MTB6Ii8+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAyNFYwaDI0djI0SDB6Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_scroller_fwd_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_fwd_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_fwd_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_fwd_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_fwd.appendChild(me._thumbnail_scroller_fwd_icon);
		el=me._thumbnail_scroller_fwd_icon_active=document.createElement('div');
		els=me._thumbnail_scroller_fwd_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjNGZiNWMyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGQ9Ik0xMCAxN2w1LTUtNS01djEweiIvPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMjRWMGgyNHYyNEgweiIvPgo8L3N2Zz4K';
		me._thumbnail_scroller_fwd_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_fwd_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_fwd_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_fwd_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_fwd.appendChild(me._thumbnail_scroller_fwd_icon_active);
		me._thumbnail_menu.appendChild(me._thumbnail_scroller_fwd);
		el=me._thumbnail_scroller_bwd=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail_scroller_bwd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_bwd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_bwd.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_bwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_bwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_bwd_icon_active.style.opacity='1';
			me._thumbnail_scroller_bwd_icon_active.style.visibility=me._thumbnail_scroller_bwd_icon_active.ggVisible?'inherit':'hidden';
			me.elementMouseOver['thumbnail_scroller_bwd']=true;
		}
		me._thumbnail_scroller_bwd.onmousedown=function (e) {
			me.elementMouseDown['thumbnail_scroller_bwd']=true;
		}
		me._thumbnail_scroller_bwd.onmouseup=function (e) {
			me.elementMouseDown['thumbnail_scroller_bwd']=false;
		}
		me._thumbnail_scroller_bwd.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_bwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_bwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_bwd_icon_active.style.opacity='0';
			me._thumbnail_scroller_bwd_icon_active.style.visibility='hidden';
			me.elementMouseDown['thumbnail_scroller_bwd']=false;
			me.elementMouseOver['thumbnail_scroller_bwd']=false;
		}
		me._thumbnail_scroller_bwd.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['thumbnail_scroller_bwd']) {
				skin.findElements('thumbnail_scroller')[0].ggScrollByXSmooth(-15);
			}
		}
		me._thumbnail_scroller_bwd.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_scroller_bwd_icon=document.createElement('div');
		els=me._thumbnail_scroller_bwd_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZD0iTTE0IDdsLTUgNSA1IDVWN3oiLz4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0yNCAwdjI0SDBWMGgyNHoiLz4KPC9zdmc+Cg==';
		me._thumbnail_scroller_bwd_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_bwd_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_bwd_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_bwd_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_bwd.appendChild(me._thumbnail_scroller_bwd_icon);
		el=me._thumbnail_scroller_bwd_icon_active=document.createElement('div');
		els=me._thumbnail_scroller_bwd_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjNGZiNWMyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGQ9Ik0xNCA3bC01IDUgNSA1Vjd6Ii8+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMjQgMHYyNEgwVjBoMjR6Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_scroller_bwd_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_bwd_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_bwd_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_bwd_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_bwd.appendChild(me._thumbnail_scroller_bwd_icon_active);
		me._thumbnail_menu.appendChild(me._thumbnail_scroller_bwd);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._thumbnail_menu_toggle_phone=document.createElement('div');
		el.ggId="thumbnail_menu_toggle_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_toggle_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_toggle_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu_toggle_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu_toggle_phone.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu_toggle_phone.style.visibility=(Number(me._thumbnail_menu_toggle_phone.style.opacity)>0||!me._thumbnail_menu_toggle_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu_toggle_phone.ggVisible=true;
				}
				else {
					me._thumbnail_menu_toggle_phone.style.visibility="hidden";
					me._thumbnail_menu_toggle_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu_toggle_phone.logicBlock_visible();
		me._thumbnail_menu_toggle_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_toggle_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_toggle_phone.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_toggle_phone.style.visibility=me._thumbnail_menu_toggle_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_toggle_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_toggle_phone.style.opacity == 0.0) { me._thumbnail_menu_toggle_phone.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu_toggle_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_toggle_phone.logicBlock_alpha();
		me._thumbnail_menu_toggle_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', true);
			me._node_cloner_phone.ggText="";
			me._node_cloner_phone.ggUpdate([]);
			skin.updateSize(skin.divSkin);
		}
		me._thumbnail_menu_toggle_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_menu_toggle_btn=document.createElement('div');
		els=me._thumbnail_menu_toggle_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KIDxwYXRoIGQ9Ik02IDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS02IDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yeiIvPgo8L3N2Zz4K';
		me._thumbnail_menu_toggle_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_menu_toggle_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDcuNUMzLjcsNy41LDMsOC4yLDMsOXMwLjcsMS41LDEuNSwxLjVTNiw5LjgsNiw5UzUuMyw3LjUsNC41LDcuNXogTTEzLjUsNy41QzEyLjcsNy41LDEyLDguMiwxMiw5JiN4ZDsmI3hhOyYjeDk7czAuNywxLjUsMS41LDEuNVMxNSw5LjgsMTUsOVMxNC4zLDcuNSwxMy41LDcuNXogTTksNy41QzguMiw3LjUsNy41'+
			'LDguMiw3LjUsOXMwLjcsMS41LDEuNSwxLjVzMS41LTAuNywxLjUtMS41UzkuOCw3LjUsOSw3LjV6Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_menu_toggle_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_menu_toggle_btn";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_toggle_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu_toggle_btn.onmouseenter=function (e) {
			me._thumbnail_menu_toggle_btn__img.style.visibility='hidden';
			me._thumbnail_menu_toggle_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_menu_toggle_btn']=true;
		}
		me._thumbnail_menu_toggle_btn.onmouseleave=function (e) {
			me._thumbnail_menu_toggle_btn__img.style.visibility='inherit';
			me._thumbnail_menu_toggle_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_menu_toggle_btn']=false;
		}
		me._thumbnail_menu_toggle_btn.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu_toggle_phone.appendChild(me._thumbnail_menu_toggle_btn);
		me.divSkin.appendChild(me._thumbnail_menu_toggle_phone);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.logicBlock_visible();
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_languages', false);
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._screen_tint_bg=document.createElement('div');
		el.ggId="screen_tint_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screen_tint_bg.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_bg);
		el=me._screen_tint_close=document.createElement('div');
		els=me._screen_tint_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._screen_tint_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="screen_tint_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screen_tint_close.onmouseenter=function (e) {
			me._screen_tint_close__img.style.visibility='hidden';
			me._screen_tint_close__imgo.style.visibility='inherit';
			me.elementMouseOver['screen_tint_close']=true;
		}
		me._screen_tint_close.onmouseleave=function (e) {
			me._screen_tint_close__img.style.visibility='inherit';
			me._screen_tint_close__imgo.style.visibility='hidden';
			me.elementMouseOver['screen_tint_close']=false;
		}
		me._screen_tint_close.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_close);
		me.divSkin.appendChild(me._screen_tint);
		el=me._languages_popup=document.createElement('div');
		els=me._languages_popup__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 194px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_popup.ggScrollByX = function(diffX) {
			if(!me._languages_popup.ggHorScrollVisible || diffX == 0 || me._languages_popup.ggHPercentVisible >= 1.0) return;
			me._languages_popup.ggScrollPosX = (me._languages_popup__horScrollFg.offsetLeft + diffX);
			me._languages_popup.ggScrollPosX = Math.max(me._languages_popup.ggScrollPosX, 0);
			me._languages_popup.ggScrollPosX = Math.min(me._languages_popup.ggScrollPosX, me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
			me._languages_popup__horScrollFg.style.left = me._languages_popup.ggScrollPosX + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosX / (me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
			me._languages_popup__content.style.left = -(Math.round((me._languages_popup.ggContentWidth * (1.0 - me._languages_popup.ggHPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentLeftOffset + 'px';
			me._languages_popup.ggScrollPosXPercent = (me._languages_popup__horScrollFg.offsetLeft / me._languages_popup__horScrollBg.offsetWidth);
		}
		me._languages_popup.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_popup.ggHorScrollVisible || diffX == 0 || me._languages_popup.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_popup.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_popup.ggScrollPosX >= me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth)) {
					me._languages_popup.ggScrollPosX = Math.min(me._languages_popup.ggScrollPosX, me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_popup.ggScrollPosX <= 0)) {
					me._languages_popup.ggScrollPosX = Math.max(me._languages_popup.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_popup__horScrollFg.style.left = me._languages_popup.ggScrollPosX + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosX / (me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
			me._languages_popup__content.style.left = -(Math.round((me._languages_popup.ggContentWidth * (1.0 - me._languages_popup.ggHPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentLeftOffset + 'px';
			me._languages_popup.ggScrollPosXPercent = (me._languages_popup__horScrollFg.offsetLeft / me._languages_popup__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_popup.ggScrollByY = function(diffY) {
			if(!me._languages_popup.ggVertScrollVisible || diffY == 0 || me._languages_popup.ggVPercentVisible >= 1.0) return;
			me._languages_popup.ggScrollPosY = (me._languages_popup__vertScrollFg.offsetTop + diffY);
			me._languages_popup.ggScrollPosY = Math.max(me._languages_popup.ggScrollPosY, 0);
			me._languages_popup.ggScrollPosY = Math.min(me._languages_popup.ggScrollPosY, me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
			me._languages_popup__vertScrollFg.style.top = me._languages_popup.ggScrollPosY + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosY / (me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
			me._languages_popup__content.style.top = -(Math.round((me._languages_popup.ggContentHeight * (1.0 - me._languages_popup.ggVPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentTopOffset + 'px';
			me._languages_popup.ggScrollPosYPercent = (me._languages_popup__vertScrollFg.offsetTop / me._languages_popup__vertScrollBg.offsetHeight);
		}
		me._languages_popup.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_popup.ggVertScrollVisible || diffY == 0 || me._languages_popup.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_popup.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_popup.ggScrollPosY >= me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight)) {
					me._languages_popup.ggScrollPosY = Math.min(me._languages_popup.ggScrollPosY, me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_popup.ggScrollPosY <= 0)) {
					me._languages_popup.ggScrollPosY = Math.max(me._languages_popup.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_popup__vertScrollFg.style.top = me._languages_popup.ggScrollPosY + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosY / (me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
			me._languages_popup__content.style.top = -(Math.round((me._languages_popup.ggContentHeight * (1.0 - me._languages_popup.ggVPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentTopOffset + 'px';
			me._languages_popup.ggScrollPosYPercent = (me._languages_popup__vertScrollFg.offsetTop / me._languages_popup__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_popup.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_popup.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_popup.ggHPercentVisible);
					me._languages_popup.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_popup.clientWidth - (me._languages_popup.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_popup.clientWidth - (me._languages_popup.ggVertScrollVisible ? 5 : 0))) * me._languages_popup.ggHPercentVisible);
					me._languages_popup.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_popup.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_popup.ggVPercentVisible);
					me._languages_popup.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_popup.clientHeight - (me._languages_popup.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_popup.clientHeight - (me._languages_popup.ggHorScrollVisible ? 5 : 0))) * me._languages_popup.ggVPercentVisible);
					me._languages_popup.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_popup__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_popup.ggDragInertiaX *= 0.96;
				me._languages_popup.ggDragInertiaY *= 0.96;
				me._languages_popup.ggScrollByX(me._languages_popup.ggDragInertiaX);
				me._languages_popup.ggScrollByY(me._languages_popup.ggDragInertiaY);
				if (Math.abs(me._languages_popup.ggDragInertiaX) < 1.0 && Math.abs(me._languages_popup.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_popup__content.onmouseup = null;
			me._languages_popup__content.onmousemove = null;
			me._languages_popup__content.ontouchend = null;
			me._languages_popup__content.ontouchmove = null;
			me._languages_popup__content.onpointerup = null;
			me._languages_popup__content.onpointermove = null;
			setTimeout(function() { me._languages_popup.ggIsDragging = false; }, 100);
		}
		me._languages_popup__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_popup.ggDragStartX) > 10 || Math.abs(eventY - me._languages_popup.ggDragStartY) > 10) me._languages_popup.ggIsDragging = true;
			var diffX = (eventX - me._languages_popup.ggDragLastX) * me._languages_popup.ggHPercentVisible;
			var diffY = (eventY - me._languages_popup.ggDragLastY) * me._languages_popup.ggVPercentVisible;
			me._languages_popup.ggDragInertiaX = -diffX;
			me._languages_popup.ggDragInertiaY = -diffY;
			me._languages_popup.ggDragLastX = eventX;
			me._languages_popup.ggDragLastY = eventY;
			me._languages_popup.ggScrollByX(-diffX);
			me._languages_popup.ggScrollByY(-diffY);
		}
		me._languages_popup__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_popup.ggDragLastX = me._languages_popup.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_popup.ggDragLastY = me._languages_popup.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_popup__content.onmouseup = me._languages_popup__content.mousetouchend;
			me._languages_popup__content.ontouchend = me._languages_popup__content.mousetouchend;
			me._languages_popup__content.onmousemove = me._languages_popup__content.mousetouchmove;
			me._languages_popup__content.ontouchmove = me._languages_popup__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._languages_popup__content.onpointerup = me._languages_popup__content.ontouchend;
				me._languages_popup__content.onpointermove = me._languages_popup__content.ontouchmove;
			}
		}
		els.onmousedown = me._languages_popup__content.mousetouchstart;
		els.ontouchstart = me._languages_popup__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_popup__content.mousetouchstart;
		}
		elVertScrollBg = me._languages_popup__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 240px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_popup__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 240px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_popup.ggScrollPosY = 0;
		me._languages_popup.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_popup.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_popup.ggDragInertiaY *= 0.96;
					me._languages_popup.ggScrollByY(me._languages_popup.ggDragInertiaY);
					if (Math.abs(me._languages_popup.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_popup.ggDragLastY;
				me._languages_popup.ggDragInertiaY = diffY;
				me._languages_popup.ggDragLastY = e.clientY;
				me._languages_popup.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_popup.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_popup.ggDragInertiaY *= 0.96;
					me._languages_popup.ggScrollByY(me._languages_popup.ggDragInertiaY);
					if (Math.abs(me._languages_popup.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_popup.ggDragLastY;
				me._languages_popup.ggDragInertiaY = diffY;
				me._languages_popup.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_popup.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_popup.ggScrollHeight;
			if (e.offsetY < me._languages_popup.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_popup.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_popup__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_popup.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_popup.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_popup.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_popup.ggScrollByYSmooth(30 * me._languages_popup.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_popup__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 240px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_popup.style.transition='';
				if (me._languages_popup.ggCurrentLogicStateVisible == 0) {
					me._languages_popup.style.visibility=(Number(me._languages_popup.style.opacity)>0||!me._languages_popup.style.opacity)?'inherit':'hidden';
					me._languages_popup.ggVisible=true;
				}
				else {
					me._languages_popup.style.visibility="hidden";
					me._languages_popup.ggVisible=false;
				}
			}
		}
		me._languages_popup.logicBlock_visible();
		me._languages_popup.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._languages_popup.ggScrollPosY / me._languages_popup.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._languages_popup.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._languages_popup.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_popup__vertScrollBg.style.visibility = 'inherit';
					me._languages_popup__vertScrollFg.style.visibility = 'inherit';
					me._languages_popup.ggVertScrollVisible = true;
				} else {
					me._languages_popup__vertScrollBg.style.visibility = 'hidden';
					me._languages_popup__vertScrollFg.style.visibility = 'hidden';
					me._languages_popup.ggVertScrollVisible = false;
				}
				if(me._languages_popup.ggVertScrollVisible) {
					me._languages_popup.ggAvailableWidth = me._languages_popup.clientWidth - 5;
					if (me._languages_popup.ggHorScrollVisible) {
						me._languages_popup.ggAvailableHeight = me._languages_popup.clientHeight - 5;
						me._languages_popup.ggAvailableHeightWithScale = me._languages_popup.getBoundingClientRect().height - me._languages_popup__vertScrollBg.getBoundingClientRect().width;
						me._languages_popup__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_popup.ggAvailableHeight = me._languages_popup.clientHeight;
						me._languages_popup.ggAvailableHeightWithScale = me._languages_popup.getBoundingClientRect().height;
						me._languages_popup__cornerBg.style.visibility = 'hidden';
					}
					me._languages_popup__vertScrollBg.style.height = me._languages_popup.ggAvailableHeight + 'px';
					me._languages_popup.ggVPercentVisible = contentHeight != 0 ? me._languages_popup.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_popup.ggVPercentVisible > 1.0) me._languages_popup.ggVPercentVisible = 1.0;
					me._languages_popup.ggScrollHeight =  Math.round(me._languages_popup__vertScrollBg.offsetHeight * me._languages_popup.ggVPercentVisible);
					me._languages_popup__vertScrollFg.style.height = me._languages_popup.ggScrollHeight + 'px';
					me._languages_popup.ggScrollPosY = me._languages_popup.ggScrollPosYPercent * me._languages_popup.ggAvailableHeight;
					me._languages_popup.ggScrollPosY = Math.min(me._languages_popup.ggScrollPosY, me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
					me._languages_popup__vertScrollFg.style.top = me._languages_popup.ggScrollPosY + 'px';
					if (me._languages_popup.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_popup.ggScrollPosY / (me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
						me._languages_popup__content.style.top = -(Math.round((me._languages_popup.ggContentHeight * (1.0 - me._languages_popup.ggVPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_popup.ggAvailableWidth = me._languages_popup.clientWidth;
					me._languages_popup.ggScrollPosY = 0;
					me._languages_popup.ggScrollPosYPercent = 0.0;
					me._languages_popup__content.style.top = this.ggContentTopOffset + 'px';
					me._languages_popup__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_popup.ggHorScrollVisible || vertScrollWasVisible != me._languages_popup.ggVertScrollVisible) {
					skin.updateSize(me._languages_popup);
					me._languages_popup.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 195;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_popup__content.appendChild(me._languages_cloner);
		me.divSkin.appendChild(me._languages_popup);
		el=me._pdf_popup=document.createElement('div');
		el.ggId="pdf_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup.style.transition='';
				if (me._pdf_popup.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup.style.visibility=(Number(me._pdf_popup.style.opacity)>0||!me._pdf_popup.style.opacity)?'inherit':'hidden';
					me._pdf_popup.ggVisible=true;
				}
				else {
					me._pdf_popup.style.visibility="hidden";
					me._pdf_popup.ggVisible=false;
				}
			}
		}
		me._pdf_popup.logicBlock_visible();
		me._pdf_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_popup_title=document.createElement('div');
		els=me._pdf_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._pdf_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_title);
		el=me._pdf_popup_pdf=document.createElement('div');
		els=me._pdf_popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_pdf__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_pdf__pdf.setAttribute('width', '100%');
		me._pdf_popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_pdf.ggPdfSource == file) return;
				me._pdf_popup_pdf.pdfNotLoaded = false;
				me._pdf_popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_pdf.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_pdf.ggPdfSource.startsWith('/') || me._pdf_popup_pdf.ggPdfSource.startsWith('./')) ? me._pdf_popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_pdf.ggPdfSource;
				me._pdf_popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_pdf__pdf.style.display = 'block';
			} else {
				me._pdf_popup_pdf__pdf.setAttribute('src', '');
				me._pdf_popup_pdf__pdf.style.display = 'none';
				me._pdf_popup_pdf.pdfNotLoaded = true;
				me._pdf_popup_pdf.ggPdfSource = '';
			}
		}
		me._pdf_popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_pdf.ggInitPdf('');
		el.ggId="pdf_popup_pdf";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_popup.appendChild(me._pdf_popup_pdf);
		me.divSkin.appendChild(me._pdf_popup);
		el=me._url_popup=document.createElement('div');
		el.ggId="url_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_popup.style.transition='';
				if (me._url_popup.ggCurrentLogicStateVisible == 0) {
					me._url_popup.style.visibility=(Number(me._url_popup.style.opacity)>0||!me._url_popup.style.opacity)?'inherit':'hidden';
					me._url_popup.ggVisible=true;
				}
				else {
					me._url_popup.style.visibility="hidden";
					me._url_popup.ggVisible=false;
				}
			}
		}
		me._url_popup.logicBlock_visible();
		me._url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_popup_title=document.createElement('div');
		els=me._url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_title);
		el=me._url_popup_iframe=document.createElement('div');
		els=me._url_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_popup_iframe";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_popup.appendChild(me._url_popup_iframe);
		me.divSkin.appendChild(me._url_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IHdpZHRoPSIyNCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiM0ZmI1YzI7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZjMC0yLjktMS44LTUuMy00'+
			'LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiAgICB2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjIgICAgbDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNy'+
			'AgICBjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IHdpZHRoPSIyNCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiM0ZmI1YzI7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMgICAgQzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBNMTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDEx'+
			'LjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYgICAgYzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zICAgIFMxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) - 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_phone.style.transition='';
				if (me._screentint_phone.ggCurrentLogicStateVisible == 0) {
					me._screentint_phone.style.visibility=(Number(me._screentint_phone.style.opacity)>0||!me._screentint_phone.style.opacity)?'inherit':'hidden';
					me._screentint_phone.ggVisible=true;
				}
				else {
					me._screentint_phone.style.visibility="hidden";
					me._screentint_phone.ggVisible=false;
				}
			}
		}
		me._screentint_phone.logicBlock_visible();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 109px;';
		hs+='left : 50%;';
		hs+='margin-left : -91.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 183px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 110;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 110px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._safe_area_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text noto_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_image', false);
		}
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._safe_area_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = 'rgba(0,0,0,0)';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-9px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggActivate=function () {
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggDeactivate=function () {
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		el=me._video_controller_button_pause_phone=document.createElement('div');
		els=me._video_controller_button_pause_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_pause_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_pause_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_controller_button_pause_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_pause_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_pause_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_button_pause_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_file_popup_phone");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_url_popup_phone");
				}
			}
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
		}
		me._video_controller_button_pause_phone.onmouseenter=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='hidden';
			me._video_controller_button_pause_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_pause_phone']=true;
		}
		me._video_controller_button_pause_phone.onmouseleave=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='inherit';
			me._video_controller_button_pause_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_pause_phone']=false;
		}
		me._video_controller_button_pause_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_pause_phone);
		el=me._video_controller_button_play_phone=document.createElement('div');
		els=me._video_controller_button_play_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_play_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_play_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_controller_button_play_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_play_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_play_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_button_play_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_file_popup_phone","1");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_url_popup_phone","1");
				}
			}
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
		}
		me._video_controller_button_play_phone.onmouseenter=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='hidden';
			me._video_controller_button_play_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_play_phone']=true;
		}
		me._video_controller_button_play_phone.onmouseleave=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='inherit';
			me._video_controller_button_play_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_play_phone']=false;
		}
		me._video_controller_button_play_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_play_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone__vid.id = 'youtube-video';
			me._youtube_popup_phone.ggYoutubeApiReady = function() {
				me._youtube_popup_phone.ggApiPlayerType = 'youtube';
				me._youtube_popup_phone.ggApiPlayerReady = false;
				me._youtube_popup_phone.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._youtube_popup_phone.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._youtube_popup_phone.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._youtube_popup_phone.ggMediaEnded) {
								me._youtube_popup_phone.ggMediaEnded();
							}
							if (event.data == 1 && me._youtube_popup_phone.ggActivate) {
								me._youtube_popup_phone.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._youtube_popup_phone.ggDeactivate) {
								me._youtube_popup_phone.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._youtube_popup_phone.ggApiPlayer.unMute();
						if (args.state == 1) skin._youtube_popup_phone.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._youtube_popup_phone.ggApiPlayer.isMuted()) skin._youtube_popup_phone.ggApiPlayer.unMute(); else skin._youtube_popup_phone.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_main') {
						if (args.type == 'set') skin._youtube_popup_phone.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._youtube_popup_phone.ggApiPlayer.setVolume(skin._youtube_popup_phone.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggApiPlayerType = 'vimeo';
			me._vimeo_popup_phone.ggApiPlayer = new Vimeo.Player(me._vimeo_popup_phone__vid);
			if (player.getPlayerMuted()) me._vimeo_popup_phone.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._vimeo_popup_phone.ggApiPlayer.getVolume() > 0.0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0); else skin._vimeo_popup_phone.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_main') {
					if (args.type == 'set') skin._vimeo_popup_phone.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._vimeo_popup_phone.ggApiPlayer.getVolume().then(function(volume) { skin._vimeo_popup_phone.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_file_popup_phone);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 155px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._video_url_popup_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._safe_area_main=document.createElement('div');
		el.ggId="safe_area_main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_main.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_bg_safe_area=document.createElement('div');
		el.ggId="menu_bg_safe_area";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : -200px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_bg_safe_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_bg_safe_area.logicBlock_size = function() {
			var newConditionsTrueSize = [];
			var deltaW = 0;
			var deltaH = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTrueSize.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTrueSize.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTrueSize.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTrueSize.push(3);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTrueSize.push(4);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTrueSize.push(5);
			}
			if (JSON.stringify(me._menu_bg_safe_area.ggConditionsTrueSize) != JSON.stringify(newConditionsTrueSize)) {
				me._menu_bg_safe_area.ggConditionsTrueSize = newConditionsTrueSize;
				me._menu_bg_safe_area.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(0)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(1)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(2)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(3)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(4)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(5)) {
					deltaW += 0;
					deltaH += 48;
				}
					me._menu_bg_safe_area.style.width=(200+deltaW) + 'px';
					me._menu_bg_safe_area.style.height=(16+deltaH) + 'px';
					setTimeout(function() {skin.updateSize(me._menu_bg_safe_area);}, 550);
			}
		}
		me._menu_bg_safe_area.logicBlock_size();
		me._menu_bg_safe_area.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_bg_safe_area.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_bg_safe_area.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_bg_safe_area.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_bg_safe_area.ggCurrentLogicStateVisible == 0) {
					me._menu_bg_safe_area.style.visibility=(Number(me._menu_bg_safe_area.style.opacity)>0||!me._menu_bg_safe_area.style.opacity)?'inherit':'hidden';
					me._menu_bg_safe_area.ggVisible=true;
				}
				else {
					me._menu_bg_safe_area.style.visibility="hidden";
					me._menu_bg_safe_area.ggVisible=false;
				}
			}
		}
		me._menu_bg_safe_area.logicBlock_visible();
		me._menu_bg_safe_area.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_bg_safe_area.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_bg_safe_area.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_bg_safe_area.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_bg_safe_area.ggCurrentLogicStateAlpha == 0) {
					me._menu_bg_safe_area.style.visibility=me._menu_bg_safe_area.ggVisible?'inherit':'hidden';
					me._menu_bg_safe_area.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_bg_safe_area.style.opacity == 0.0) { me._menu_bg_safe_area.style.visibility="hidden"; } }, 505);
					me._menu_bg_safe_area.style.opacity=0;
				}
			}
		}
		me._menu_bg_safe_area.logicBlock_alpha();
		me._menu_bg_safe_area.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_main.appendChild(me._menu_bg_safe_area);
		el=me._menu=document.createElement('div');
		el.ggId="menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu.logicBlock_size = function() {
			var newConditionsTrueSize = [];
			var deltaW = 0;
			var deltaH = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTrueSize.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTrueSize.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTrueSize.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTrueSize.push(3);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTrueSize.push(4);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTrueSize.push(5);
			}
			if (JSON.stringify(me._menu.ggConditionsTrueSize) != JSON.stringify(newConditionsTrueSize)) {
				me._menu.ggConditionsTrueSize = newConditionsTrueSize;
				me._menu.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu.ggConditionsTrueSize.includes(0)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(1)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(2)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(3)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(4)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(5)) {
					deltaW += 0;
					deltaH += 48;
				}
					me._menu.style.width=(72+deltaW) + 'px';
					me._menu.style.height=(16+deltaH) + 'px';
					setTimeout(function() {skin.updateSize(me._menu);}, 550);
			}
		}
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateVisible == 0) {
					me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
					me._menu.ggVisible=true;
				}
				else {
					me._menu.style.visibility="hidden";
					me._menu.ggVisible=false;
				}
			}
		}
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateAlpha == 0) {
					me._menu.style.visibility=me._menu.ggVisible?'inherit':'hidden';
					me._menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu.style.opacity == 0.0) { me._menu.style.visibility="hidden"; } }, 505);
					me._menu.style.opacity=0;
				}
			}
		}
		me._menu.logicBlock_alpha();
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages=document.createElement('div');
		els=me._languages__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._languages__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._languages__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._languages__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._languages.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._languages.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._languages.ggConditionsTruePosition = newConditionsTruePosition;
				me._languages.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._languages.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._languages.style.right=(20+deltaX) + 'px';
					me._languages.style.top=(16+deltaY) + 'px';
			}
		}
		me._languages.logicBlock_position();
		me._languages.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._languages.ggCurrentLogicStateAlpha == 0) {
					me._languages.style.visibility=me._languages.ggVisible?'inherit':'hidden';
					me._languages.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages.style.opacity == 0.0) { me._languages.style.visibility="hidden"; } }, 505);
					me._languages.style.opacity=0;
				}
			}
		}
		me._languages.logicBlock_alpha();
		me._languages.onclick=function (e) {
			player.setVariableValue('vis_languages', true);
		}
		me._languages.onmouseenter=function (e) {
			me._languages__img.style.visibility='hidden';
			me._languages__imgo.style.visibility='inherit';
			me.elementMouseOver['languages']=true;
		}
		me._languages.onmouseleave=function (e) {
			me._languages__img.style.visibility='inherit';
			me._languages__imgo.style.visibility='hidden';
			me.elementMouseOver['languages']=false;
		}
		me._languages.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._languages);
		el=me._hotspots_toggle=document.createElement('div');
		el.ggId="hotspots_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_toggle.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._hotspots_toggle.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._hotspots_toggle.ggConditionsTruePosition = newConditionsTruePosition;
				me._hotspots_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._hotspots_toggle.style.right=(20+deltaX) + 'px';
					me._hotspots_toggle.style.top=(16+deltaY) + 'px';
			}
		}
		me._hotspots_toggle.logicBlock_position();
		me._hotspots_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspots_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspots_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspots_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hotspots_toggle.ggCurrentLogicStateAlpha == 0) {
					me._hotspots_toggle.style.visibility=me._hotspots_toggle.ggVisible?'inherit':'hidden';
					me._hotspots_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hotspots_toggle.style.opacity == 0.0) { me._hotspots_toggle.style.visibility="hidden"; } }, 505);
					me._hotspots_toggle.style.opacity=0;
				}
			}
		}
		me._hotspots_toggle.logicBlock_alpha();
		me._hotspots_toggle.onclick=function (e) {
			player.setVariableValue('vis_hotspots', !player.getVariableValue('vis_hotspots'));
		}
		me._hotspots_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_on=document.createElement('div');
		els=me._hotspots_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KIDxwYXRoIGQ9Ik0xMiA0QzcgNCAyLjczIDcuMTEgMSAxMS41IDIuNzMgMTUuODkgNyAxOSAxMiAxOXM5LjI3LTMuMTEgMTEtNy41QzIxLjI3IDcuMTEgMTcgNCAxMiA0em0wIDEyLjVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLThjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy'+
			'0xLjM0IDMtMy0xLjM0LTMtMy0zeiIvPgo8L3N2Zz4K';
		me._hotspots_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzQzUuMiwzLDIsNS4zLDAuOCw4LjZDMiwxMS45LDUuMiwxNC4yLDksMTQuMnM3LTIuMyw4LjItNS42QzE2LDUuMywxMi44LDMsOSwzeiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhTNi45LDQuOSw5LDQuOXMzLjgsMS43LDMuOCwzLjhTMTEuMSwxMi40LDksMTIuNHogTTksNi40'+
			'Yy0xLjIsMC0yLjIsMS0yLjIsMi4yczEsMi4yLDIuMiwyLjJzMi4yLTEsMi4yLTIuMiYjeGQ7JiN4YTsmI3g5O1MxMC4yLDYuNCw5LDYuNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_on.style.transition='';
				if (me._hotspots_on.ggCurrentLogicStateVisible == 0) {
					me._hotspots_on.style.visibility=(Number(me._hotspots_on.style.opacity)>0||!me._hotspots_on.style.opacity)?'inherit':'hidden';
					me._hotspots_on.ggVisible=true;
				}
				else {
					me._hotspots_on.style.visibility="hidden";
					me._hotspots_on.ggVisible=false;
				}
			}
		}
		me._hotspots_on.logicBlock_visible();
		me._hotspots_on.onmouseenter=function (e) {
			me._hotspots_on__img.style.visibility='hidden';
			me._hotspots_on__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_on']=true;
		}
		me._hotspots_on.onmouseleave=function (e) {
			me._hotspots_on__img.style.visibility='inherit';
			me._hotspots_on__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_on']=false;
		}
		me._hotspots_on.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_toggle.appendChild(me._hotspots_on);
		el=me._hotspots_off=document.createElement('div');
		els=me._hotspots_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiLz4KIDxwYXRoIGQ9Ik0xMiA2LjVjMi43NiAwIDUgMi4yNCA1IDUgMCAuNTEtLjEgMS0uMjQgMS40NmwzLjA2IDMuMDZjMS4zOS0xLjIzIDIuNDktMi43NyAzLjE4LTQuNTNDMjEuMjcgNy4xMSAxNyA0IDEyIDRjLTEuMjcgMC0yLjQ5LjItMy42NC41N2wyLjE3IDIuMT'+
			'djLjQ3LS4xNC45Ni0uMjQgMS40Ny0uMjR6TTIuNzEgMy4xNmMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWwxLjk3IDEuOTdDMy4wNiA3LjgzIDEuNzcgOS41MyAxIDExLjUgMi43MyAxNS44OSA3IDE5IDEyIDE5YzEuNTIgMCAyLjk3LS4zIDQuMzEtLjgybDIuNzIgMi43MmMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUw0LjEzIDMuMTZjLS4zOS0uMzktMS4wMy0uMzktMS40MiAwek0xMiAxNi41Yy0yLjc2IDAtNS0yLjI0LTUtNSAwLS43Ny4xOC0xLjUuNDktMi4xNGwxLjU3IDEuNTdjLS4wMy4xOC0uMDYuMzctLjA2LjU3IDAgMS42NiAxLjM0IDMgMyAzIC4yIDAg'+
			'LjM4LS4wMy41Ny0uMDdMMTQuMTQgMTZjLS42NS4zMi0xLjM3LjUtMi4xNC41em0yLjk3LTUuMzNjLS4xNS0xLjQtMS4yNS0yLjQ5LTIuNjQtMi42NGwyLjY0IDIuNjR6Ii8+Cjwvc3ZnPgo=';
		me._hotspots_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6IE0wLDBoMTh2MThIMFYweiBNMCwwaDE4djE4SDBWMHogTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw0LjljMi4xLDAsMy44LDEuNywzLjgsMy44YzAsMC40LTAuMSwwLjgtMC4yLDEuMWwyLjMsMi4zYzEtMC45LDEuOS0yLjEsMi40LTMuNEMxNiw1LjMsMTIuOCwzLDksMyYjeGQ7JiN4YTsmI3g5O0M4LDMsNy4xLDMuMSw2LjMsMy40'+
			'bDEuNiwxLjZDOC4yLDUsOC42LDQuOSw5LDQuOXogTTIsMi40QzEuNywyLjcsMS43LDMuMSwyLDMuNGwxLjUsMS41Yy0xLjIsMS0yLjIsMi4yLTIuOCwzLjcmI3hkOyYjeGE7JiN4OTtDMiwxMS45LDUuMiwxNC4yLDksMTQuMmMxLjEsMCwyLjItMC4yLDMuMi0wLjZsMiwyYzAuMywwLjMsMC44LDAuMywxLjEsMHMwLjMtMC44LDAtMS4xTDMuMSwyLjRDMi44LDIuMSwyLjMsMi4xLDIsMi40eiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhDNS4yLDgsNS40LDcuNSw1LjYsN2wxLjIsMS4yYzAsMC4xLDAsMC4zLDAsMC40YzAsMS4yLDEsMi4yLDIuMiwyLjJjMC4yLD'+
			'AsMC4zLDAsMC40LTAuMWwxLjIsMS4yJiN4ZDsmI3hhOyYjeDk7QzEwLjEsMTIuMiw5LjYsMTIuNCw5LDEyLjR6IE0xMS4yLDguNGMtMC4xLTEuMS0wLjktMS45LTItMkwxMS4yLDguNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hotspots_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_off.style.transition='';
				if (me._hotspots_off.ggCurrentLogicStateVisible == 0) {
					me._hotspots_off.style.visibility="hidden";
					me._hotspots_off.ggVisible=false;
				}
				else {
					me._hotspots_off.style.visibility=(Number(me._hotspots_off.style.opacity)>0||!me._hotspots_off.style.opacity)?'inherit':'hidden';
					me._hotspots_off.ggVisible=true;
				}
			}
		}
		me._hotspots_off.logicBlock_visible();
		me._hotspots_off.onmouseenter=function (e) {
			me._hotspots_off__img.style.visibility='hidden';
			me._hotspots_off__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_off']=true;
		}
		me._hotspots_off.onmouseleave=function (e) {
			me._hotspots_off__img.style.visibility='inherit';
			me._hotspots_off__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_off']=false;
		}
		me._hotspots_off.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_toggle.appendChild(me._hotspots_off);
		me._menu.appendChild(me._hotspots_toggle);
		el=me._gyro_toggle=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="gyro_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_toggle.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._gyro_toggle.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._gyro_toggle.ggConditionsTruePosition = newConditionsTruePosition;
				me._gyro_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gyro_toggle.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._gyro_toggle.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._gyro_toggle.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._gyro_toggle.style.right=(20+deltaX) + 'px';
					me._gyro_toggle.style.top=(16+deltaY) + 'px';
			}
		}
		me._gyro_toggle.logicBlock_position();
		me._gyro_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gyro_toggle.ggCurrentLogicStateAlpha == 0) {
					me._gyro_toggle.style.visibility=me._gyro_toggle.ggVisible?'inherit':'hidden';
					me._gyro_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_toggle.style.opacity == 0.0) { me._gyro_toggle.style.visibility="hidden"; } }, 505);
					me._gyro_toggle.style.opacity=0;
				}
			}
		}
		me._gyro_toggle.logicBlock_alpha();
		me._gyro_toggle.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzFfY29weSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2'+
			'lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzFfY29weSIgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2'+
			'lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_on.style.transition='';
				if (me._gyro_on.ggCurrentLogicStateVisible == 0) {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.ggVisible=false;
				}
				else {
					me._gyro_on.style.visibility=(Number(me._gyro_on.style.opacity)>0||!me._gyro_on.style.opacity)?'inherit':'hidden';
					me._gyro_on.ggVisible=true;
				}
			}
		}
		me._gyro_on.logicBlock_visible();
		me._gyro_on.onmouseenter=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseleave=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_off.style.transition='';
				if (me._gyro_off.ggCurrentLogicStateVisible == 0) {
					me._gyro_off.style.visibility=(Number(me._gyro_off.style.opacity)>0||!me._gyro_off.style.opacity)?'inherit':'hidden';
					me._gyro_off.ggVisible=true;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.ggVisible=false;
				}
			}
		}
		me._gyro_off.logicBlock_visible();
		me._gyro_off.onmouseenter=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseleave=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_off);
		me._menu.appendChild(me._gyro_toggle);
		el=me._vr=document.createElement('div');
		els=me._vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vr.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._vr.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._vr.ggConditionsTruePosition = newConditionsTruePosition;
				me._vr.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._vr.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._vr.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._vr.style.right=(20+deltaX) + 'px';
					me._vr.style.top=(16+deltaY) + 'px';
			}
		}
		me._vr.logicBlock_position();
		me._vr.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vr.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vr.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vr.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._vr.ggCurrentLogicStateAlpha == 0) {
					me._vr.style.visibility=me._vr.ggVisible?'inherit':'hidden';
					me._vr.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vr.style.opacity == 0.0) { me._vr.style.visibility="hidden"; } }, 505);
					me._vr.style.opacity=0;
				}
			}
		}
		me._vr.logicBlock_alpha();
		me._vr.onclick=function (e) {
			player.enterVR();
		}
		me._vr.onmouseenter=function (e) {
			me._vr__img.style.visibility='hidden';
			me._vr__imgo.style.visibility='inherit';
			me.elementMouseOver['vr']=true;
		}
		me._vr.onmouseleave=function (e) {
			me._vr__img.style.visibility='inherit';
			me._vr__imgo.style.visibility='hidden';
			me.elementMouseOver['vr']=false;
		}
		me._vr.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._vr);
		el=me._audio_toggle=document.createElement('div');
		el.ggId="audio_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_toggle.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._audio_toggle.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._audio_toggle.ggConditionsTruePosition = newConditionsTruePosition;
				me._audio_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._audio_toggle.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._audio_toggle.style.right=(20+deltaX) + 'px';
					me._audio_toggle.style.top=(16+deltaY) + 'px';
			}
		}
		me._audio_toggle.logicBlock_position();
		me._audio_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._audio_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._audio_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._audio_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._audio_toggle.ggCurrentLogicStateAlpha == 0) {
					me._audio_toggle.style.visibility=me._audio_toggle.ggVisible?'inherit':'hidden';
					me._audio_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._audio_toggle.style.opacity == 0.0) { me._audio_toggle.style.visibility="hidden"; } }, 505);
					me._audio_toggle.style.opacity=0;
				}
			}
		}
		me._audio_toggle.logicBlock_alpha();
		me._audio_toggle.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
		}
		me._audio_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._audio_on=document.createElement('div');
		els=me._audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IHdpZHRoPSIyNCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBN'+
			'MTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDExLjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._audio_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_on.style.transition='';
				if (me._audio_on.ggCurrentLogicStateVisible == 0) {
					me._audio_on.style.visibility=(Number(me._audio_on.style.opacity)>0||!me._audio_on.style.opacity)?'inherit':'hidden';
					me._audio_on.ggVisible=true;
				}
				else {
					me._audio_on.style.visibility="hidden";
					me._audio_on.ggVisible=false;
				}
			}
		}
		me._audio_on.logicBlock_visible();
		me._audio_on.onmouseenter=function (e) {
			me._audio_on__img.style.visibility='hidden';
			me._audio_on__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_on']=true;
		}
		me._audio_on.onmouseleave=function (e) {
			me._audio_on__img.style.visibility='inherit';
			me._audio_on__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_on']=false;
		}
		me._audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_on);
		el=me._audio_off=document.createElement('div');
		els=me._audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxyZWN0IHdpZHRoPSIyNCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjE4IiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZj'+
			'MC0yLjktMS44LTUuMy00LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi'+
			'0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._audio_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_off.style.transition='';
				if (me._audio_off.ggCurrentLogicStateVisible == 0) {
					me._audio_off.style.visibility="hidden";
					me._audio_off.ggVisible=false;
				}
				else {
					me._audio_off.style.visibility=(Number(me._audio_off.style.opacity)>0||!me._audio_off.style.opacity)?'inherit':'hidden';
					me._audio_off.ggVisible=true;
				}
			}
		}
		me._audio_off.logicBlock_visible();
		me._audio_off.onmouseenter=function (e) {
			me._audio_off__img.style.visibility='hidden';
			me._audio_off__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_off']=true;
		}
		me._audio_off.onmouseleave=function (e) {
			me._audio_off__img.style.visibility='inherit';
			me._audio_off__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_off']=false;
		}
		me._audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_off);
		me._menu.appendChild(me._audio_toggle);
		el=me._fullscreen_toggle=document.createElement('div');
		el.ggId="fullscreen_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_toggle.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen_toggle.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_toggle.style.visibility=me._fullscreen_toggle.ggVisible?'inherit':'hidden';
					me._fullscreen_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_toggle.style.opacity == 0.0) { me._fullscreen_toggle.style.visibility="hidden"; } }, 505);
					me._fullscreen_toggle.style.opacity=0;
				}
			}
		}
		me._fullscreen_toggle.logicBlock_alpha();
		me._fullscreen_toggle.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTZoMnYyYzAsMC41NSwwLjQ1LDEsMSwxbDAsMGMwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMUg2Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDNSwxNS41NSw1LjQ1LDE2LDYsMTYgei'+
			'BNOCw4SDZDNS40NSw4LDUsOC40NSw1LDlsMCwwYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFWNmMwLTAuNTUtMC40NS0xLTEtMWwwLDBDOC40NSw1LDgsNS40NSw4LDZWOHogTTE1LDE5IEwxNSwxOWMwLjU1LDAsMS0wLjQ1LDEtMXYtMmgyYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMWgtM2MtMC41NSwwLTEsMC40NS0xLDF2M0MxNCwxOC41NSwxNC40NSwxOSwxNSwxOXogTTE2LDggVjZjMC0wLjU1LTAuNDUtMS0xLTFsMCwwYy0wLjU1LDAtMSwwLjQ1LTEsMXYzYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41'+
			'NS0wLjQ1LTEtMS0xSDE2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEySDZ2MS41YzAsMC40LDAuMywwLjgsMC44LDAuOGwwLDBjMC40LDAsMC44LTAuMywwLjgtMC44di0yLjJjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAs'+
			'MEMzLjgsMTEuNyw0LjEsMTIsNC41LDEyeiBNNiw2SDQuNUM0LjEsNiwzLjgsNi4zLDMuOCw2LjhsMCwwYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMywwLjgtMC44VjQuNWMwLTAuNC0wLjMtMC44LTAuOC0wLjhsMCwwQzYuMywzLjgsNiw0LjEsNiw0LjVWNnogTTExLjIsMTQuMkwxMS4yLDE0LjJjMC40LDAsMC44LTAuMywwLjgtMC44VjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aDEuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yYy0wLjQsMC0wLjgsMC'+
			'4zLTAuOCwwLjh2Mi4yQzEwLjUsMTMuOSwxMC44LDE0LjIsMTEuMiwxNC4yeiBNMTIsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1Y0LjVjMC0wLjQtMC4zLTAuOC0wLjgtMC44bDAsMGMtMC40LDAtMC44LDAuMy0wLjgsMC44djIuMmMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDEyeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_exit.style.transition='';
				if (me._fullscreen_exit.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
					me._fullscreen_exit.ggVisible=true;
				}
				else {
					me._fullscreen_exit.style.visibility="hidden";
					me._fullscreen_exit.ggVisible=false;
				}
			}
		}
		me._fullscreen_exit.logicBlock_visible();
		me._fullscreen_exit.onmouseenter=function (e) {
			me._fullscreen_exit__img.style.visibility='hidden';
			me._fullscreen_exit__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_exit']=true;
		}
		me._fullscreen_exit.onmouseleave=function (e) {
			me._fullscreen_exit__img.style.visibility='inherit';
			me._fullscreen_exit__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_exit']=false;
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSIxOHB4Ij4KIDxnPgogIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBoMjR2MjRIMFYweiIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTRMNiwxNGMtMC41NSwwLTEsMC40NS0xLDF2M2MwLDAuNTUsMC40NSwxLDEsMWgzYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg3di0yIEM3LDE0LjQ1LDYuNTUsMTQsNiwxNH'+
			'ogTTYsMTBMNiwxMGMwLjU1LDAsMS0wLjQ1LDEtMVY3aDJjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDZDNS40NSw1LDUsNS40NSw1LDZ2MyBDNSw5LjU1LDUuNDUsMTAsNiwxMHogTTE3LDE3aC0yYy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBjMCwwLjU1LDAuNDUsMSwxLDFoM2MwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMWwwLDAgYy0wLjU1LDAtMSwwLjQ1LTEsMVYxN3ogTTE0LDZMMTQsNmMwLDAuNTUsMC40NSwxLDEsMWgydjJjMCwwLjU1LDAuNDUsMSwxLDFsMCwwYzAuNTUsMCwxLTAuNDUsMS0xVjZjMC0wLjU1LTAuNDUtMS0xLTFoLTMgQzE0'+
			'LjQ1LDUsMTQsNS40NSwxNCw2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEwLjVMNC41LDEwLjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDIuMmMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjgtMC44LTAu'+
			'OEg1LjJ2LTEuNUM1LjIsMTAuOCw0LjksMTAuNSw0LjUsMTAuNXogTTQuNSw3LjVMNC41LDcuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNS4yaDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEg0LjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJDMy44LDcuMiw0LjEsNy41LDQuNSw3LjV6IE0xMi44LDEyLjhoLTEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAsMGMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LT'+
			'AuOHYtMi4yYzAtMC40LTAuMy0wLjgtMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNCwwLTAuOCwwLjMtMC44LDAuOFYxMi44eiBNMTAuNSw0LjVMMTAuNSw0LjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDEuNXYxLjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNC41YzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yQzEwLjgsMy44LDEwLjUsNC4xLDEwLjUsNC41eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_enter.style.transition='';
				if (me._fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_enter.style.visibility="hidden";
					me._fullscreen_enter.ggVisible=false;
				}
				else {
					me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._fullscreen_enter.logicBlock_visible();
		me._fullscreen_enter.onmouseenter=function (e) {
			me._fullscreen_enter__img.style.visibility='hidden';
			me._fullscreen_enter__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_enter']=true;
		}
		me._fullscreen_enter.onmouseleave=function (e) {
			me._fullscreen_enter__img.style.visibility='inherit';
			me._fullscreen_enter__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_enter']=false;
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_enter);
		me._menu.appendChild(me._fullscreen_toggle);
		me._safe_area_main.appendChild(me._menu);
		el=me._menu_toggle_bg=document.createElement('div');
		el.ggId="menu_toggle_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_bg.style.transition='';
				if (me._menu_toggle_bg.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_bg.style.visibility=(Number(me._menu_toggle_bg.style.opacity)>0||!me._menu_toggle_bg.style.opacity)?'inherit':'hidden';
					me._menu_toggle_bg.ggVisible=true;
				}
				else {
					me._menu_toggle_bg.style.visibility="hidden";
					me._menu_toggle_bg.ggVisible=false;
				}
			}
		}
		me._menu_toggle_bg.logicBlock_visible();
		me._menu_toggle_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle=document.createElement('div');
		el.ggId="menu_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/menu_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'none'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._menu_close_anim.ggLottie.goToAndStop(me._menu_close_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="menu_close_anim";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_close_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_close_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', false);
			me._menu_close_anim.ggLottie.loop = 0;
			me._menu_close_anim.ggLottie.play();
			me._menu_open_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("2.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.4") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['menu_close_anim']=true;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._menu_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['menu_close_anim']=false;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._menu_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_off_active=document.createElement('div');
		els=me._menu_toggle_off_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjNGZiNWMyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._menu_toggle_off_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_off_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_off_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_off_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_off_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_off_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_off_active.style.transition='';
				if (me._menu_toggle_off_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_off_active.style.visibility=(Number(me._menu_toggle_off_active.style.opacity)>0||!me._menu_toggle_off_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_off_active.ggVisible=true;
				}
				else {
					me._menu_toggle_off_active.style.visibility="hidden";
					me._menu_toggle_off_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_off_active.logicBlock_visible();
		me._menu_toggle_off_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_close_anim.appendChild(me._menu_toggle_off_active);
		me._menu_toggle.appendChild(me._menu_close_anim);
		el=me._menu_open_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/menu_open_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="menu_open_anim";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_open_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_open_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', true);
			me._menu_open_anim.ggLottie.loop = 0;
			me._menu_open_anim.ggLottie.play();
			me._menu_close_anim.ggLottie.goToAndStop(me._menu_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("1.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.4") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_open_anim.onmouseenter=function (e) {
			me.elementMouseOver['menu_open_anim']=true;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_open_anim.onmouseleave=function (e) {
			me.elementMouseOver['menu_open_anim']=false;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_open_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_on_active=document.createElement('div');
		els=me._menu_toggle_on_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjNGZiNWMyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGwtb3BhY2l0eT0iMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8Zz4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCwwaDI0djI0SDBWMHoiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik00LDE4aDE2YzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxNy41NSwzLjQ1LDE4LDQsMTh6IE00LD'+
			'EzaDE2IGMwLjU1LDAsMS0wLjQ1LDEtMWwwLDBjMC0wLjU1LTAuNDUtMS0xLTFINGMtMC41NSwwLTEsMC40NS0xLDFsMCwwQzMsMTIuNTUsMy40NSwxMyw0LDEzeiBNMyw3TDMsN2MwLDAuNTUsMC40NSwxLDEsMWgxNiBjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDRDMy40NSw2LDMsNi40NSwzLDd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._menu_toggle_on_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_on_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_on_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_on_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_open_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_on_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_on_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_on_active.style.transition='';
				if (me._menu_toggle_on_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_on_active.style.visibility=(Number(me._menu_toggle_on_active.style.opacity)>0||!me._menu_toggle_on_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_on_active.ggVisible=true;
				}
				else {
					me._menu_toggle_on_active.style.visibility="hidden";
					me._menu_toggle_on_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_on_active.onclick=function (e) {
			player.setVariableValue('vis_menu', true);
			me._menu_open_anim.ggLottie.loop = 0;
			me._menu_open_anim.ggLottie.play();
			me._menu_close_anim.ggLottie.goToAndStop(me._menu_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("1.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_toggle_on_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_open_anim.appendChild(me._menu_toggle_on_active);
		me._menu_toggle.appendChild(me._menu_open_anim);
		el=me._menu_toggle_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="menu_toggle_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_timer.ggIsActive=function() {
			return (me._menu_toggle_timer.ggTimestamp + me._menu_toggle_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._menu_toggle_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_timer.style.transition='';
				if (me._menu_toggle_timer.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_timer.style.visibility="hidden";
					me._menu_toggle_timer.ggVisible=false;
				}
				else {
					me._menu_toggle_timer.style.visibility=(Number(me._menu_toggle_timer.style.opacity)>0||!me._menu_toggle_timer.style.opacity)?'inherit':'hidden';
					me._menu_toggle_timer.ggVisible=true;
				}
			}
		}
		me._menu_toggle_timer.logicBlock_visible();
		me._menu_toggle_timer.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._menu_close_anim.style.transition='none';
				me._menu_close_anim.style.visibility=(Number(me._menu_close_anim.style.opacity)>0||!me._menu_close_anim.style.opacity)?'inherit':'hidden';
				me._menu_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._menu_open_anim.style.transition='none';
				me._menu_open_anim.style.visibility='hidden';
				me._menu_open_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._menu_open_anim.style.transition='none';
				me._menu_open_anim.style.visibility=(Number(me._menu_open_anim.style.opacity)>0||!me._menu_open_anim.style.opacity)?'inherit':'hidden';
				me._menu_open_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._menu_close_anim.style.transition='none';
				me._menu_close_anim.style.visibility='hidden';
				me._menu_close_anim.ggVisible=false;
			}
		}
		me._menu_toggle_timer.ggCurrentLogicStateVisible = -1;
		me._menu_toggle_timer.ggUpdateConditionTimer=function () {
			me._menu_toggle_timer.logicBlock_visible();
		}
		me._menu_toggle_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._menu_toggle_timer);
		me._menu_toggle_bg.appendChild(me._menu_toggle);
		me._safe_area_main.appendChild(me._menu_toggle_bg);
		el=me._menu_toggle_bg_safe_area=document.createElement('div');
		el.ggId="menu_toggle_bg_safe_area";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : -200px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_bg_safe_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_toggle_bg_safe_area.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_bg_safe_area.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_bg_safe_area.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_bg_safe_area.style.transition='';
				if (me._menu_toggle_bg_safe_area.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_bg_safe_area.style.visibility=(Number(me._menu_toggle_bg_safe_area.style.opacity)>0||!me._menu_toggle_bg_safe_area.style.opacity)?'inherit':'hidden';
					me._menu_toggle_bg_safe_area.ggVisible=true;
				}
				else {
					me._menu_toggle_bg_safe_area.style.visibility="hidden";
					me._menu_toggle_bg_safe_area.ggVisible=false;
				}
			}
		}
		me._menu_toggle_bg_safe_area.logicBlock_visible();
		me._menu_toggle_bg_safe_area.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_main.appendChild(me._menu_toggle_bg_safe_area);
		me.divSkin.appendChild(me._safe_area_main);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 400px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 220px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width < 500))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_1.style.transition='transform 0s';
				if (me._container_1.ggCurrentLogicStateScaling == 0) {
					me._container_1.ggParameter.sx = 0.7;
					me._container_1.ggParameter.sy = 0.85;
					me._container_1.style.transform=parameterToTransform(me._container_1.ggParameter);
					skin.updateSize(me._container_1);
				}
				else {
					me._container_1.ggParameter.sx = 1;
					me._container_1.ggParameter.sy = 1;
					me._container_1.style.transform=parameterToTransform(me._container_1.ggParameter);
					skin.updateSize(me._container_1);
				}
			}
		}
		me._container_1.logicBlock_scaling();
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 30px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 400px;';
		hs+='left : calc(50% - ((400px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_node2=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 351px;';
		hs+='position : absolute;';
		hs+='top : 346px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node2.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_node2.onmouseenter=function (e) {
			me.elementMouseOver['marker_node2']=true;
			me._marker_title16.logicBlock_visible();
		}
		me._marker_node2.onmouseleave=function (e) {
			me.elementMouseOver['marker_node2']=false;
			me._marker_title16.logicBlock_visible();
		}
		me._marker_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title16=document.createElement('div');
		els=me._marker_title16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title16.ggUpdateText=function() {
			var params = [];
			var hs = player._("Entrance", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title16.ggUpdateText();
		el.appendChild(els);
		me._marker_title16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title16.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title16.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title16.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title16.style.transition='left 0s, top 0s';
				if (me._marker_title16.ggCurrentLogicStatePosition == 0) {
					me._marker_title16.style.left='-35px';
					me._marker_title16.style.top='-25px';
				}
				else {
					me._marker_title16.style.left='-35px';
					me._marker_title16.style.top='35px';
				}
			}
		}
		me._marker_title16.logicBlock_position();
		me._marker_title16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node2'] == true)) || 
				((me.elementMouseOver['marker_title16'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title16.style.transition='left 0s, top 0s';
				if (me._marker_title16.ggCurrentLogicStateVisible == 0) {
					me._marker_title16.style.visibility=(Number(me._marker_title16.style.opacity)>0||!me._marker_title16.style.opacity)?'inherit':'hidden';
					me._marker_title16.ggVisible=true;
				}
				else {
					me._marker_title16.style.visibility="hidden";
					me._marker_title16.ggVisible=false;
				}
			}
		}
		me._marker_title16.logicBlock_visible();
		me._marker_title16.onmouseenter=function (e) {
			me.elementMouseOver['marker_title16']=true;
			me._marker_title16.logicBlock_visible();
		}
		me._marker_title16.onmouseleave=function (e) {
			me.elementMouseOver['marker_title16']=false;
			me._marker_title16.logicBlock_visible();
		}
		me._marker_title16.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node2.appendChild(me._marker_title16);
		me._image_1.appendChild(me._marker_node2);
		el=me._marker_node3=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 343px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node3.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._marker_node3.onmouseenter=function (e) {
			me.elementMouseOver['marker_node3']=true;
			me._marker_title15.logicBlock_visible();
		}
		me._marker_node3.onmouseleave=function (e) {
			me.elementMouseOver['marker_node3']=false;
			me._marker_title15.logicBlock_visible();
		}
		me._marker_node3.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title15=document.createElement('div');
		els=me._marker_title15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title15.ggUpdateText=function() {
			var params = [];
			var hs = player._("KItchen Area", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title15.ggUpdateText();
		el.appendChild(els);
		me._marker_title15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title15.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title15.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title15.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title15.style.transition='left 0s, top 0s';
				if (me._marker_title15.ggCurrentLogicStatePosition == 0) {
					me._marker_title15.style.left='-35px';
					me._marker_title15.style.top='-25px';
				}
				else {
					me._marker_title15.style.left='-35px';
					me._marker_title15.style.top='33px';
				}
			}
		}
		me._marker_title15.logicBlock_position();
		me._marker_title15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node3'] == true)) || 
				((me.elementMouseOver['marker_title15'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title15.style.transition='left 0s, top 0s';
				if (me._marker_title15.ggCurrentLogicStateVisible == 0) {
					me._marker_title15.style.visibility=(Number(me._marker_title15.style.opacity)>0||!me._marker_title15.style.opacity)?'inherit':'hidden';
					me._marker_title15.ggVisible=true;
				}
				else {
					me._marker_title15.style.visibility="hidden";
					me._marker_title15.ggVisible=false;
				}
			}
		}
		me._marker_title15.logicBlock_visible();
		me._marker_title15.onmouseenter=function (e) {
			me.elementMouseOver['marker_title15']=true;
			me._marker_title15.logicBlock_visible();
		}
		me._marker_title15.onmouseleave=function (e) {
			me.elementMouseOver['marker_title15']=false;
			me._marker_title15.logicBlock_visible();
		}
		me._marker_title15.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node3.appendChild(me._marker_title15);
		me._image_1.appendChild(me._marker_node3);
		el=me._marker_node7=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 226px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node7.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._marker_node7.onmouseenter=function (e) {
			me.elementMouseOver['marker_node7']=true;
			me._marker_title14.logicBlock_visible();
		}
		me._marker_node7.onmouseleave=function (e) {
			me.elementMouseOver['marker_node7']=false;
			me._marker_title14.logicBlock_visible();
		}
		me._marker_node7.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title14=document.createElement('div');
		els=me._marker_title14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title14.ggUpdateText=function() {
			var params = [];
			var hs = player._("Living Room", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title14.ggUpdateText();
		el.appendChild(els);
		me._marker_title14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title14.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title14.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title14.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title14.style.transition='left 0s, top 0s';
				if (me._marker_title14.ggCurrentLogicStatePosition == 0) {
					me._marker_title14.style.left='-35px';
					me._marker_title14.style.top='-25px';
				}
				else {
					me._marker_title14.style.left='-35px';
					me._marker_title14.style.top='35px';
				}
			}
		}
		me._marker_title14.logicBlock_position();
		me._marker_title14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node7'] == true)) || 
				((me.elementMouseOver['marker_title14'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title14.style.transition='left 0s, top 0s';
				if (me._marker_title14.ggCurrentLogicStateVisible == 0) {
					me._marker_title14.style.visibility=(Number(me._marker_title14.style.opacity)>0||!me._marker_title14.style.opacity)?'inherit':'hidden';
					me._marker_title14.ggVisible=true;
				}
				else {
					me._marker_title14.style.visibility="hidden";
					me._marker_title14.ggVisible=false;
				}
			}
		}
		me._marker_title14.logicBlock_visible();
		me._marker_title14.onmouseenter=function (e) {
			me.elementMouseOver['marker_title14']=true;
			me._marker_title14.logicBlock_visible();
		}
		me._marker_title14.onmouseleave=function (e) {
			me.elementMouseOver['marker_title14']=false;
			me._marker_title14.logicBlock_visible();
		}
		me._marker_title14.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node7.appendChild(me._marker_title14);
		me._image_1.appendChild(me._marker_node7);
		el=me._marker_node8=document.createElement('div');
		el.ggMarkerNodeId='{node8}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 314px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node8.onclick=function (e) {
			player.openNext('{node8}');
		}
		me._marker_node8.onmouseenter=function (e) {
			me.elementMouseOver['marker_node8']=true;
			me._marker_title13.logicBlock_visible();
		}
		me._marker_node8.onmouseleave=function (e) {
			me.elementMouseOver['marker_node8']=false;
			me._marker_title13.logicBlock_visible();
		}
		me._marker_node8.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title13=document.createElement('div');
		els=me._marker_title13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title13.ggUpdateText=function() {
			var params = [];
			var hs = player._("Living Room", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title13.ggUpdateText();
		el.appendChild(els);
		me._marker_title13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title13.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title13.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title13.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title13.style.transition='left 0s, top 0s';
				if (me._marker_title13.ggCurrentLogicStatePosition == 0) {
					me._marker_title13.style.left='-35px';
					me._marker_title13.style.top='-25px';
				}
				else {
					me._marker_title13.style.left='-35px';
					me._marker_title13.style.top='35px';
				}
			}
		}
		me._marker_title13.logicBlock_position();
		me._marker_title13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node8'] == true)) || 
				((me.elementMouseOver['marker_title13'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title13.style.transition='left 0s, top 0s';
				if (me._marker_title13.ggCurrentLogicStateVisible == 0) {
					me._marker_title13.style.visibility=(Number(me._marker_title13.style.opacity)>0||!me._marker_title13.style.opacity)?'inherit':'hidden';
					me._marker_title13.ggVisible=true;
				}
				else {
					me._marker_title13.style.visibility="hidden";
					me._marker_title13.ggVisible=false;
				}
			}
		}
		me._marker_title13.logicBlock_visible();
		me._marker_title13.onmouseenter=function (e) {
			me.elementMouseOver['marker_title13']=true;
			me._marker_title13.logicBlock_visible();
		}
		me._marker_title13.onmouseleave=function (e) {
			me.elementMouseOver['marker_title13']=false;
			me._marker_title13.logicBlock_visible();
		}
		me._marker_title13.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node8.appendChild(me._marker_title13);
		me._image_1.appendChild(me._marker_node8);
		el=me._marker_node4=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 242px;';
		hs+='position : absolute;';
		hs+='top : 204px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node4.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._marker_node4.onmouseenter=function (e) {
			me.elementMouseOver['marker_node4']=true;
			me._marker_title12.logicBlock_visible();
		}
		me._marker_node4.onmouseleave=function (e) {
			me.elementMouseOver['marker_node4']=false;
			me._marker_title12.logicBlock_visible();
		}
		me._marker_node4.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title12=document.createElement('div');
		els=me._marker_title12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title12.ggUpdateText=function() {
			var params = [];
			var hs = player._("Lobby", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title12.ggUpdateText();
		el.appendChild(els);
		me._marker_title12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title12.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title12.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title12.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title12.style.transition='left 0s, top 0s';
				if (me._marker_title12.ggCurrentLogicStatePosition == 0) {
					me._marker_title12.style.left='-35px';
					me._marker_title12.style.top='-25px';
				}
				else {
					me._marker_title12.style.left='-35px';
					me._marker_title12.style.top='35px';
				}
			}
		}
		me._marker_title12.logicBlock_position();
		me._marker_title12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node4'] == true)) || 
				((me.elementMouseOver['marker_title12'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title12.style.transition='left 0s, top 0s';
				if (me._marker_title12.ggCurrentLogicStateVisible == 0) {
					me._marker_title12.style.visibility=(Number(me._marker_title12.style.opacity)>0||!me._marker_title12.style.opacity)?'inherit':'hidden';
					me._marker_title12.ggVisible=true;
				}
				else {
					me._marker_title12.style.visibility="hidden";
					me._marker_title12.ggVisible=false;
				}
			}
		}
		me._marker_title12.logicBlock_visible();
		me._marker_title12.onmouseenter=function (e) {
			me.elementMouseOver['marker_title12']=true;
			me._marker_title12.logicBlock_visible();
		}
		me._marker_title12.onmouseleave=function (e) {
			me.elementMouseOver['marker_title12']=false;
			me._marker_title12.logicBlock_visible();
		}
		me._marker_title12.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node4.appendChild(me._marker_title12);
		me._image_1.appendChild(me._marker_node4);
		el=me._marker_node18=document.createElement('div');
		el.ggMarkerNodeId='{node18}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 307px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node18.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node18.onclick=function (e) {
			player.openNext('{node18}');
		}
		me._marker_node18.onmouseenter=function (e) {
			me.elementMouseOver['marker_node18']=true;
			me._marker_title11.logicBlock_visible();
		}
		me._marker_node18.onmouseleave=function (e) {
			me.elementMouseOver['marker_node18']=false;
			me._marker_title11.logicBlock_visible();
		}
		me._marker_node18.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title11=document.createElement('div');
		els=me._marker_title11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title11.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bedroom 2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title11.ggUpdateText();
		el.appendChild(els);
		me._marker_title11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title11.style.transition='left 0s, top 0s';
				if (me._marker_title11.ggCurrentLogicStatePosition == 0) {
					me._marker_title11.style.left='-35px';
					me._marker_title11.style.top='-25px';
				}
				else {
					me._marker_title11.style.left='-35px';
					me._marker_title11.style.top='35px';
				}
			}
		}
		me._marker_title11.logicBlock_position();
		me._marker_title11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node18'] == true)) || 
				((me.elementMouseOver['marker_title11'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title11.style.transition='left 0s, top 0s';
				if (me._marker_title11.ggCurrentLogicStateVisible == 0) {
					me._marker_title11.style.visibility=(Number(me._marker_title11.style.opacity)>0||!me._marker_title11.style.opacity)?'inherit':'hidden';
					me._marker_title11.ggVisible=true;
				}
				else {
					me._marker_title11.style.visibility="hidden";
					me._marker_title11.ggVisible=false;
				}
			}
		}
		me._marker_title11.logicBlock_visible();
		me._marker_title11.onmouseenter=function (e) {
			me.elementMouseOver['marker_title11']=true;
			me._marker_title11.logicBlock_visible();
		}
		me._marker_title11.onmouseleave=function (e) {
			me.elementMouseOver['marker_title11']=false;
			me._marker_title11.logicBlock_visible();
		}
		me._marker_title11.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node18.appendChild(me._marker_title11);
		me._image_1.appendChild(me._marker_node18);
		el=me._marker_node5=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 238px;';
		hs+='position : absolute;';
		hs+='top : 138px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node5.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._marker_node5.onmouseenter=function (e) {
			me.elementMouseOver['marker_node5']=true;
			me._marker_title10.logicBlock_visible();
		}
		me._marker_node5.onmouseleave=function (e) {
			me.elementMouseOver['marker_node5']=false;
			me._marker_title10.logicBlock_visible();
		}
		me._marker_node5.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title10=document.createElement('div');
		els=me._marker_title10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title10.ggUpdateText=function() {
			var params = [];
			var hs = player._("Powder Room", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title10.ggUpdateText();
		el.appendChild(els);
		me._marker_title10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title10.style.transition='left 0s, top 0s';
				if (me._marker_title10.ggCurrentLogicStatePosition == 0) {
					me._marker_title10.style.left='-35px';
					me._marker_title10.style.top='-25px';
				}
				else {
					me._marker_title10.style.left='-35px';
					me._marker_title10.style.top='35px';
				}
			}
		}
		me._marker_title10.logicBlock_position();
		me._marker_title10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node5'] == true)) || 
				((me.elementMouseOver['marker_title10'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title10.style.transition='left 0s, top 0s';
				if (me._marker_title10.ggCurrentLogicStateVisible == 0) {
					me._marker_title10.style.visibility=(Number(me._marker_title10.style.opacity)>0||!me._marker_title10.style.opacity)?'inherit':'hidden';
					me._marker_title10.ggVisible=true;
				}
				else {
					me._marker_title10.style.visibility="hidden";
					me._marker_title10.ggVisible=false;
				}
			}
		}
		me._marker_title10.logicBlock_visible();
		me._marker_title10.onmouseenter=function (e) {
			me.elementMouseOver['marker_title10']=true;
			me._marker_title10.logicBlock_visible();
		}
		me._marker_title10.onmouseleave=function (e) {
			me.elementMouseOver['marker_title10']=false;
			me._marker_title10.logicBlock_visible();
		}
		me._marker_title10.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node5.appendChild(me._marker_title10);
		me._image_1.appendChild(me._marker_node5);
		el=me._marker_node13=document.createElement('div');
		el.ggMarkerNodeId='{node13}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node13.onclick=function (e) {
			player.openNext('{node13}');
		}
		me._marker_node13.onmouseenter=function (e) {
			me.elementMouseOver['marker_node13']=true;
			me._marker_title9.logicBlock_visible();
		}
		me._marker_node13.onmouseleave=function (e) {
			me.elementMouseOver['marker_node13']=false;
			me._marker_title9.logicBlock_visible();
		}
		me._marker_node13.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title9=document.createElement('div');
		els=me._marker_title9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title9.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bathroom 1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title9.ggUpdateText();
		el.appendChild(els);
		me._marker_title9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title9.style.transition='left 0s, top 0s';
				if (me._marker_title9.ggCurrentLogicStatePosition == 0) {
					me._marker_title9.style.left='-35px';
					me._marker_title9.style.top='-25px';
				}
				else {
					me._marker_title9.style.left='-35px';
					me._marker_title9.style.top='35px';
				}
			}
		}
		me._marker_title9.logicBlock_position();
		me._marker_title9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node13'] == true)) || 
				((me.elementMouseOver['marker_title9'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title9.style.transition='left 0s, top 0s';
				if (me._marker_title9.ggCurrentLogicStateVisible == 0) {
					me._marker_title9.style.visibility=(Number(me._marker_title9.style.opacity)>0||!me._marker_title9.style.opacity)?'inherit':'hidden';
					me._marker_title9.ggVisible=true;
				}
				else {
					me._marker_title9.style.visibility="hidden";
					me._marker_title9.ggVisible=false;
				}
			}
		}
		me._marker_title9.logicBlock_visible();
		me._marker_title9.onmouseenter=function (e) {
			me.elementMouseOver['marker_title9']=true;
			me._marker_title9.logicBlock_visible();
		}
		me._marker_title9.onmouseleave=function (e) {
			me.elementMouseOver['marker_title9']=false;
			me._marker_title9.logicBlock_visible();
		}
		me._marker_title9.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node13.appendChild(me._marker_title9);
		me._image_1.appendChild(me._marker_node13);
		el=me._marker_node11=document.createElement('div');
		el.ggMarkerNodeId='{node11}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 193px;';
		hs+='position : absolute;';
		hs+='top : 142px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node11.onclick=function (e) {
			player.openNext('{node11}');
		}
		me._marker_node11.onmouseenter=function (e) {
			me.elementMouseOver['marker_node11']=true;
			me._marker_title8.logicBlock_visible();
		}
		me._marker_node11.onmouseleave=function (e) {
			me.elementMouseOver['marker_node11']=false;
			me._marker_title8.logicBlock_visible();
		}
		me._marker_node11.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title8=document.createElement('div');
		els=me._marker_title8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title8.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bedroom 1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title8.ggUpdateText();
		el.appendChild(els);
		me._marker_title8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title8.style.transition='left 0s, top 0s';
				if (me._marker_title8.ggCurrentLogicStatePosition == 0) {
					me._marker_title8.style.left='-35px';
					me._marker_title8.style.top='-25px';
				}
				else {
					me._marker_title8.style.left='-35px';
					me._marker_title8.style.top='35px';
				}
			}
		}
		me._marker_title8.logicBlock_position();
		me._marker_title8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node11'] == true)) || 
				((me.elementMouseOver['marker_title8'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title8.style.transition='left 0s, top 0s';
				if (me._marker_title8.ggCurrentLogicStateVisible == 0) {
					me._marker_title8.style.visibility=(Number(me._marker_title8.style.opacity)>0||!me._marker_title8.style.opacity)?'inherit':'hidden';
					me._marker_title8.ggVisible=true;
				}
				else {
					me._marker_title8.style.visibility="hidden";
					me._marker_title8.ggVisible=false;
				}
			}
		}
		me._marker_title8.logicBlock_visible();
		me._marker_title8.onmouseenter=function (e) {
			me.elementMouseOver['marker_title8']=true;
			me._marker_title8.logicBlock_visible();
		}
		me._marker_title8.onmouseleave=function (e) {
			me.elementMouseOver['marker_title8']=false;
			me._marker_title8.logicBlock_visible();
		}
		me._marker_title8.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node11.appendChild(me._marker_title8);
		me._image_1.appendChild(me._marker_node11);
		el=me._marker_node12=document.createElement('div');
		el.ggMarkerNodeId='{node12}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node12.onclick=function (e) {
			player.openNext('{node12}');
		}
		me._marker_node12.onmouseenter=function (e) {
			me.elementMouseOver['marker_node12']=true;
			me._marker_title7.logicBlock_visible();
		}
		me._marker_node12.onmouseleave=function (e) {
			me.elementMouseOver['marker_node12']=false;
			me._marker_title7.logicBlock_visible();
		}
		me._marker_node12.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title7=document.createElement('div');
		els=me._marker_title7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title7.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bedroom 1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title7.ggUpdateText();
		el.appendChild(els);
		me._marker_title7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title7.style.transition='left 0s, top 0s';
				if (me._marker_title7.ggCurrentLogicStatePosition == 0) {
					me._marker_title7.style.left='-35px';
					me._marker_title7.style.top='-25px';
				}
				else {
					me._marker_title7.style.left='-35px';
					me._marker_title7.style.top='35px';
				}
			}
		}
		me._marker_title7.logicBlock_position();
		me._marker_title7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node12'] == true)) || 
				((me.elementMouseOver['marker_title7'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title7.style.transition='left 0s, top 0s';
				if (me._marker_title7.ggCurrentLogicStateVisible == 0) {
					me._marker_title7.style.visibility=(Number(me._marker_title7.style.opacity)>0||!me._marker_title7.style.opacity)?'inherit':'hidden';
					me._marker_title7.ggVisible=true;
				}
				else {
					me._marker_title7.style.visibility="hidden";
					me._marker_title7.ggVisible=false;
				}
			}
		}
		me._marker_title7.logicBlock_visible();
		me._marker_title7.onmouseenter=function (e) {
			me.elementMouseOver['marker_title7']=true;
			me._marker_title7.logicBlock_visible();
		}
		me._marker_title7.onmouseleave=function (e) {
			me.elementMouseOver['marker_title7']=false;
			me._marker_title7.logicBlock_visible();
		}
		me._marker_title7.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node12.appendChild(me._marker_title7);
		me._image_1.appendChild(me._marker_node12);
		el=me._marker_node15=document.createElement('div');
		el.ggMarkerNodeId='{node15}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 337px;';
		hs+='position : absolute;';
		hs+='top : 195px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node15.onclick=function (e) {
			player.openNext('{node15}');
		}
		me._marker_node15.onmouseenter=function (e) {
			me.elementMouseOver['marker_node15']=true;
			me._marker_title6.logicBlock_visible();
		}
		me._marker_node15.onmouseleave=function (e) {
			me.elementMouseOver['marker_node15']=false;
			me._marker_title6.logicBlock_visible();
		}
		me._marker_node15.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title6=document.createElement('div');
		els=me._marker_title6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title6.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bathroom 2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title6.ggUpdateText();
		el.appendChild(els);
		me._marker_title6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title6.style.transition='left 0s, top 0s';
				if (me._marker_title6.ggCurrentLogicStatePosition == 0) {
					me._marker_title6.style.left='-35px';
					me._marker_title6.style.top='-25px';
				}
				else {
					me._marker_title6.style.left='-35px';
					me._marker_title6.style.top='35px';
				}
			}
		}
		me._marker_title6.logicBlock_position();
		me._marker_title6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node15'] == true)) || 
				((me.elementMouseOver['marker_title6'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title6.style.transition='left 0s, top 0s';
				if (me._marker_title6.ggCurrentLogicStateVisible == 0) {
					me._marker_title6.style.visibility=(Number(me._marker_title6.style.opacity)>0||!me._marker_title6.style.opacity)?'inherit':'hidden';
					me._marker_title6.ggVisible=true;
				}
				else {
					me._marker_title6.style.visibility="hidden";
					me._marker_title6.ggVisible=false;
				}
			}
		}
		me._marker_title6.logicBlock_visible();
		me._marker_title6.onmouseenter=function (e) {
			me.elementMouseOver['marker_title6']=true;
			me._marker_title6.logicBlock_visible();
		}
		me._marker_title6.onmouseleave=function (e) {
			me.elementMouseOver['marker_title6']=false;
			me._marker_title6.logicBlock_visible();
		}
		me._marker_title6.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node15.appendChild(me._marker_title6);
		me._image_1.appendChild(me._marker_node15);
		el=me._marker_node17=document.createElement('div');
		el.ggMarkerNodeId='{node17}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 314px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node17.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node17.onclick=function (e) {
			player.openNext('{node17}');
		}
		me._marker_node17.onmouseenter=function (e) {
			me.elementMouseOver['marker_node17']=true;
			me._marker_title5.logicBlock_visible();
		}
		me._marker_node17.onmouseleave=function (e) {
			me.elementMouseOver['marker_node17']=false;
			me._marker_title5.logicBlock_visible();
		}
		me._marker_node17.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title5=document.createElement('div');
		els=me._marker_title5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title5.ggUpdateText=function() {
			var params = [];
			var hs = player._("Bedroom 2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title5.ggUpdateText();
		el.appendChild(els);
		me._marker_title5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title5.style.transition='left 0s, top 0s';
				if (me._marker_title5.ggCurrentLogicStatePosition == 0) {
					me._marker_title5.style.left='-35px';
					me._marker_title5.style.top='-25px';
				}
				else {
					me._marker_title5.style.left='-35px';
					me._marker_title5.style.top='35px';
				}
			}
		}
		me._marker_title5.logicBlock_position();
		me._marker_title5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node17'] == true)) || 
				((me.elementMouseOver['marker_title5'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title5.style.transition='left 0s, top 0s';
				if (me._marker_title5.ggCurrentLogicStateVisible == 0) {
					me._marker_title5.style.visibility=(Number(me._marker_title5.style.opacity)>0||!me._marker_title5.style.opacity)?'inherit':'hidden';
					me._marker_title5.ggVisible=true;
				}
				else {
					me._marker_title5.style.visibility="hidden";
					me._marker_title5.ggVisible=false;
				}
			}
		}
		me._marker_title5.logicBlock_visible();
		me._marker_title5.onmouseenter=function (e) {
			me.elementMouseOver['marker_title5']=true;
			me._marker_title5.logicBlock_visible();
		}
		me._marker_title5.onmouseleave=function (e) {
			me.elementMouseOver['marker_title5']=false;
			me._marker_title5.logicBlock_visible();
		}
		me._marker_title5.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node17.appendChild(me._marker_title5);
		me._image_1.appendChild(me._marker_node17);
		el=me._marker_node25=document.createElement('div');
		el.ggMarkerNodeId='{node25}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node25";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 46px;';
		hs+='position : absolute;';
		hs+='top : 308px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node25.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node25.onclick=function (e) {
			player.openNext('{node25}');
		}
		me._marker_node25.onmouseenter=function (e) {
			me.elementMouseOver['marker_node25']=true;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_node25.onmouseleave=function (e) {
			me.elementMouseOver['marker_node25']=false;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_node25.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title4=document.createElement('div');
		els=me._marker_title4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title4.ggUpdateText=function() {
			var params = [];
			var hs = player._("Balcony Area", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title4.ggUpdateText();
		el.appendChild(els);
		me._marker_title4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title4.style.transition='left 0s, top 0s';
				if (me._marker_title4.ggCurrentLogicStatePosition == 0) {
					me._marker_title4.style.left='-35px';
					me._marker_title4.style.top='-25px';
				}
				else {
					me._marker_title4.style.left='-35px';
					me._marker_title4.style.top='35px';
				}
			}
		}
		me._marker_title4.logicBlock_position();
		me._marker_title4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node25'] == true)) || 
				((me.elementMouseOver['marker_title4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title4.style.transition='left 0s, top 0s';
				if (me._marker_title4.ggCurrentLogicStateVisible == 0) {
					me._marker_title4.style.visibility=(Number(me._marker_title4.style.opacity)>0||!me._marker_title4.style.opacity)?'inherit':'hidden';
					me._marker_title4.ggVisible=true;
				}
				else {
					me._marker_title4.style.visibility="hidden";
					me._marker_title4.ggVisible=false;
				}
			}
		}
		me._marker_title4.logicBlock_visible();
		me._marker_title4.onmouseenter=function (e) {
			me.elementMouseOver['marker_title4']=true;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_title4.onmouseleave=function (e) {
			me.elementMouseOver['marker_title4']=false;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_title4.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node25.appendChild(me._marker_title4);
		me._image_1.appendChild(me._marker_node25);
		el=me._marker_node21=document.createElement('div');
		el.ggMarkerNodeId='{node21}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='top : 169px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node21.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node21.onclick=function (e) {
			player.openNext('{node21}');
		}
		me._marker_node21.onmouseenter=function (e) {
			me.elementMouseOver['marker_node21']=true;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_node21.onmouseleave=function (e) {
			me.elementMouseOver['marker_node21']=false;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_node21.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title3=document.createElement('div');
		els=me._marker_title3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title3.ggUpdateText=function() {
			var params = [];
			var hs = player._("Balcony Area", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title3.ggUpdateText();
		el.appendChild(els);
		me._marker_title3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title3.style.transition='left 0s, top 0s';
				if (me._marker_title3.ggCurrentLogicStatePosition == 0) {
					me._marker_title3.style.left='-35px';
					me._marker_title3.style.top='-25px';
				}
				else {
					me._marker_title3.style.left='-35px';
					me._marker_title3.style.top='35px';
				}
			}
		}
		me._marker_title3.logicBlock_position();
		me._marker_title3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node21'] == true)) || 
				((me.elementMouseOver['marker_title3'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title3.style.transition='left 0s, top 0s';
				if (me._marker_title3.ggCurrentLogicStateVisible == 0) {
					me._marker_title3.style.visibility=(Number(me._marker_title3.style.opacity)>0||!me._marker_title3.style.opacity)?'inherit':'hidden';
					me._marker_title3.ggVisible=true;
				}
				else {
					me._marker_title3.style.visibility="hidden";
					me._marker_title3.ggVisible=false;
				}
			}
		}
		me._marker_title3.logicBlock_visible();
		me._marker_title3.onmouseenter=function (e) {
			me.elementMouseOver['marker_title3']=true;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_title3.onmouseleave=function (e) {
			me.elementMouseOver['marker_title3']=false;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_title3.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node21.appendChild(me._marker_title3);
		me._image_1.appendChild(me._marker_node21);
		el=me._marker_node24=document.createElement('div');
		el.ggMarkerNodeId='{node24}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node24";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 331px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node24.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node24.onclick=function (e) {
			player.openNext('{node24}');
		}
		me._marker_node24.onmouseenter=function (e) {
			me.elementMouseOver['marker_node24']=true;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_node24.onmouseleave=function (e) {
			me.elementMouseOver['marker_node24']=false;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_node24.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title2=document.createElement('div');
		els=me._marker_title2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Balcony Area", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title2.ggUpdateText();
		el.appendChild(els);
		me._marker_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node24'] == true)) || 
				((me.elementMouseOver['marker_title2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title2.style.transition='';
				if (me._marker_title2.ggCurrentLogicStateVisible == 0) {
					me._marker_title2.style.visibility=(Number(me._marker_title2.style.opacity)>0||!me._marker_title2.style.opacity)?'inherit':'hidden';
					me._marker_title2.ggVisible=true;
				}
				else {
					me._marker_title2.style.visibility="hidden";
					me._marker_title2.ggVisible=false;
				}
			}
		}
		me._marker_title2.logicBlock_visible();
		me._marker_title2.onmouseenter=function (e) {
			me.elementMouseOver['marker_title2']=true;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_title2.onmouseleave=function (e) {
			me.elementMouseOver['marker_title2']=false;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_title2.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node24.appendChild(me._marker_title2);
		me._image_1.appendChild(me._marker_node24);
		el=me._marker_node22=document.createElement('div');
		el.ggMarkerNodeId='{node22}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node22";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 69px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node22.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node22.onclick=function (e) {
			player.openNext('{node22}');
		}
		me._marker_node22.onmouseenter=function (e) {
			me.elementMouseOver['marker_node22']=true;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_node22.onmouseleave=function (e) {
			me.elementMouseOver['marker_node22']=false;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_node22.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title1=document.createElement('div');
		els=me._marker_title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Balcony Area", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title1.ggUpdateText();
		el.appendChild(els);
		me._marker_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title1.style.transition='left 0s, top 0s';
				if (me._marker_title1.ggCurrentLogicStatePosition == 0) {
					me._marker_title1.style.left='-35px';
					me._marker_title1.style.top='-25px';
				}
				else {
					me._marker_title1.style.left='-35px';
					me._marker_title1.style.top='35px';
				}
			}
		}
		me._marker_title1.logicBlock_position();
		me._marker_title1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node22'] == true)) || 
				((me.elementMouseOver['marker_title1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title1.style.transition='left 0s, top 0s';
				if (me._marker_title1.ggCurrentLogicStateVisible == 0) {
					me._marker_title1.style.visibility=(Number(me._marker_title1.style.opacity)>0||!me._marker_title1.style.opacity)?'inherit':'hidden';
					me._marker_title1.ggVisible=true;
				}
				else {
					me._marker_title1.style.visibility="hidden";
					me._marker_title1.ggVisible=false;
				}
			}
		}
		me._marker_title1.logicBlock_visible();
		me._marker_title1.onmouseenter=function (e) {
			me.elementMouseOver['marker_title1']=true;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_title1.onmouseleave=function (e) {
			me.elementMouseOver['marker_title1']=false;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_title1.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node22.appendChild(me._marker_title1);
		me._image_1.appendChild(me._marker_node22);
		el=me._marker_node23=document.createElement('div');
		el.ggMarkerNodeId='{node23}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node23";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 146px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_node23.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node23.onclick=function (e) {
			player.openNext('{node23}');
		}
		me._marker_node23.onmouseenter=function (e) {
			me.elementMouseOver['marker_node23']=true;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_node23.onmouseleave=function (e) {
			me.elementMouseOver['marker_node23']=false;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_node23.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title0=document.createElement('div');
		els=me._marker_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Balcony Area", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title0.ggUpdateText();
		el.appendChild(els);
		me._marker_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title0.style.transition='left 0s, top 0s';
				if (me._marker_title0.ggCurrentLogicStatePosition == 0) {
					me._marker_title0.style.left='-35px';
					me._marker_title0.style.top='-25px';
				}
				else {
					me._marker_title0.style.left='-35px';
					me._marker_title0.style.top='35px';
				}
			}
		}
		me._marker_title0.logicBlock_position();
		me._marker_title0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node23'] == true)) || 
				((me.elementMouseOver['marker_title0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title0.style.transition='left 0s, top 0s';
				if (me._marker_title0.ggCurrentLogicStateVisible == 0) {
					me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
					me._marker_title0.ggVisible=true;
				}
				else {
					me._marker_title0.style.visibility="hidden";
					me._marker_title0.ggVisible=false;
				}
			}
		}
		me._marker_title0.logicBlock_visible();
		me._marker_title0.onmouseenter=function (e) {
			me.elementMouseOver['marker_title0']=true;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_title0.onmouseleave=function (e) {
			me.elementMouseOver['marker_title0']=false;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_title0.ggUpdatePosition=function (useTransition) {
		}
		me._marker_node23.appendChild(me._marker_title0);
		me._image_1.appendChild(me._marker_node23);
		me._container_1.appendChild(me._image_1);
		me.divSkin.appendChild(me._container_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 30px;';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Toggle floor plan\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseDown['text_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1.style.transition='transform 300ms ease 0ms, opacity 0s';
				if (me._text_1.ggCurrentLogicStateScaling == 0) {
					me._text_1.ggParameter.sx = 1.2;
					me._text_1.ggParameter.sy = 1.2;
					me._text_1.style.transform=parameterToTransform(me._text_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1);}, 350);
				}
				else {
					me._text_1.ggParameter.sx = 1;
					me._text_1.ggParameter.sy = 1;
					me._text_1.style.transform=parameterToTransform(me._text_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._text_1);}, 350);
				}
			}
		}
		me._text_1.logicBlock_scaling();
		me._text_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['text_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1.style.transition='transform 300ms ease 0ms, opacity 0s';
				if (me._text_1.ggCurrentLogicStateAlpha == 0) {
					me._text_1.style.visibility=me._text_1.ggVisible?'inherit':'hidden';
					me._text_1.style.opacity=1;
				}
				else {
					me._text_1.style.visibility=me._text_1.ggVisible?'inherit':'hidden';
					me._text_1.style.opacity=0.6;
				}
			}
		}
		me._text_1.logicBlock_alpha();
		me._text_1.onclick=function (e) {
			var flag=me._container_1.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._container_1.style.transition='none';
			} else {
				me._container_1.style.transition='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._container_1.style.opacity='0';
				me._container_1.style.visibility='hidden';
			} else {
				me._container_1.style.opacity='0.7';
				me._container_1.style.visibility=me._container_1.ggVisible?'inherit':'hidden';
			}
			me._container_1.ggOpacitiyActive=!flag;
		}
		me._text_1.onmouseenter=function (e) {
			me.elementMouseOver['text_1']=true;
			me._text_1.logicBlock_alpha();
		}
		me._text_1.onmousedown=function (e) {
			me.elementMouseDown['text_1']=true;
			me._text_1.logicBlock_scaling();
		}
		me._text_1.onmouseup=function (e) {
			me.elementMouseDown['text_1']=false;
			me._text_1.logicBlock_scaling();
		}
		me._text_1.onmouseleave=function (e) {
			me.elementMouseDown['text_1']=false;
			me.elementMouseOver['text_1']=false;
			me._text_1.logicBlock_scaling();
			me._text_1.logicBlock_alpha();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		el=me._hide_template=document.createElement('div');
		el.ggId="hide_template";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_template.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_template.onmouseenter=function (e) {
			me.elementMouseOver['hide_template']=true;
			me._marker_normal.logicBlock_scaling();
			me._marker_active.logicBlock_scaling();
		}
		me._hide_template.onmouseleave=function (e) {
			me.elementMouseOver['hide_template']=false;
			me._marker_normal.logicBlock_scaling();
			me._marker_active.logicBlock_scaling();
		}
		me._hide_template.ggUpdatePosition=function (useTransition) {
		}
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.onmouseenter=function (e) {
			me.elementMouseOver['markertemplate']=true;
			me._marker_title.logicBlock_visible();
		}
		me._markertemplate.onmouseleave=function (e) {
			me.elementMouseOver['markertemplate']=false;
			me._marker_title.logicBlock_visible();
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title=document.createElement('div');
		els=me._marker_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_title.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title.style.transition='left 0s, top 0s';
				if (me._marker_title.ggCurrentLogicStatePosition == 0) {
					me._marker_title.style.left='-35px';
					me._marker_title.style.top='-25px';
				}
				else {
					me._marker_title.style.left='-35px';
					me._marker_title.style.top='35px';
				}
			}
		}
		me._marker_title.logicBlock_position();
		me._marker_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['markertemplate'] == true)) || 
				((me.elementMouseOver['marker_title'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title.style.transition='left 0s, top 0s';
				if (me._marker_title.ggCurrentLogicStateVisible == 0) {
					me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
					me._marker_title.ggVisible=true;
				}
				else {
					me._marker_title.style.visibility="hidden";
					me._marker_title.ggVisible=false;
				}
			}
		}
		me._marker_title.logicBlock_visible();
		me._marker_title.onmouseenter=function (e) {
			me.elementMouseOver['marker_title']=true;
			me._marker_title.logicBlock_visible();
		}
		me._marker_title.onmouseleave=function (e) {
			me.elementMouseOver['marker_title']=false;
			me._marker_title.logicBlock_visible();
		}
		me._marker_title.ggUpdatePosition=function (useTransition) {
		}
		me._markertemplate.appendChild(me._marker_title);
		me._hide_template.appendChild(me._markertemplate);
		me.divSkin.appendChild(me._hide_template);
		me._node_title_phone.logicBlock_position();
		me._node_title_phone.logicBlock_visible();
		me._project_title_phone.logicBlock_visible();
		me._node_title.logicBlock_visible();
		me._project_title.logicBlock_visible();
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha();
		me.elementMouseOver['thumbnail_scroller_fwd']=false;
		me.elementMouseOver['thumbnail_scroller_bwd']=false;
		me._thumbnail_menu_toggle_phone.logicBlock_visible();
		me._thumbnail_menu_toggle_phone.logicBlock_alpha();
		me.elementMouseOver['thumbnail_menu_toggle_btn']=false;
		me._screen_tint.logicBlock_visible();
		me.elementMouseOver['screen_tint_close']=false;
		me._languages_popup.logicBlock_visible();
		me._pdf_popup.logicBlock_visible();
		me._url_popup.logicBlock_visible();
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me._screentint_phone.logicBlock_visible();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._info_popup_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me.elementMouseOver['video_controller_button_pause_phone']=false;
		me.elementMouseOver['video_controller_button_play_phone']=false;
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		el = me._local_fonts;
		;
		me._menu_bg_safe_area.logicBlock_size();
		me._menu_bg_safe_area.logicBlock_visible();
		me._menu_bg_safe_area.logicBlock_alpha();
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha();
		me._languages.logicBlock_position();
		me._languages.logicBlock_alpha();
		me.elementMouseOver['languages']=false;
		me._hotspots_toggle.logicBlock_position();
		me._hotspots_toggle.logicBlock_alpha();
		me._hotspots_on.logicBlock_visible();
		me.elementMouseOver['hotspots_on']=false;
		me._hotspots_off.logicBlock_visible();
		me.elementMouseOver['hotspots_off']=false;
		me._gyro_toggle.logicBlock_position();
		me._gyro_toggle.logicBlock_alpha();
		me._gyro_on.logicBlock_visible();
		me.elementMouseOver['gyro_on']=false;
		me._gyro_off.logicBlock_visible();
		me.elementMouseOver['gyro_off']=false;
		me._vr.logicBlock_position();
		me._vr.logicBlock_alpha();
		me.elementMouseOver['vr']=false;
		me._audio_toggle.logicBlock_position();
		me._audio_toggle.logicBlock_alpha();
		me._audio_on.logicBlock_visible();
		me.elementMouseOver['audio_on']=false;
		me._audio_off.logicBlock_visible();
		me.elementMouseOver['audio_off']=false;
		me._fullscreen_toggle.logicBlock_alpha();
		me._fullscreen_exit.logicBlock_visible();
		me.elementMouseOver['fullscreen_exit']=false;
		me._fullscreen_enter.logicBlock_visible();
		me.elementMouseOver['fullscreen_enter']=false;
		me._menu_toggle_bg.logicBlock_visible();
		me.elementMouseOver['menu_close_anim']=false;
		me._menu_toggle_off_active.logicBlock_visible();
		me.elementMouseOver['menu_open_anim']=false;
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_timer.logicBlock_visible();
		me._menu_toggle_bg_safe_area.logicBlock_visible();
		me._container_1.logicBlock_scaling();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node2);
		me._marker_node2__normal = clonedNormalElement._marker_normal;
		me._marker_node2__normalInst = clonedNormalElement;
		me._marker_node2__normal.style.visibility='inherit';
		me._marker_node2__normal.style.left='0px';
		me._marker_node2__normal.style.top='0px';
		me._marker_node2.ggMarkerNormal=me._marker_node2__normal;
		me._marker_node2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node2);
		me._marker_node2__active = clonedActiveElement._marker_active;
		me._marker_node2__activeInst = clonedActiveElement;
		me._marker_node2__active.style.visibility='hidden';
		me._marker_node2__active.style.left='0px';
		me._marker_node2__active.style.top='0px';
		me._marker_node2.ggMarkerActive=me._marker_node2__active;
		me._marker_node2.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node2.firstChild) {
			me._marker_node2.insertBefore(me._marker_node2__active,me._marker_node2.firstChild);
		} else {
			me._marker_node2.appendChild(me._marker_node2__active);
		}
		if (me._marker_node2.firstChild) {
			me._marker_node2.insertBefore(me._marker_node2__normal,me._marker_node2.firstChild);
		} else {
			me._marker_node2.appendChild(me._marker_node2__normal);
		}
		for (var i = 0; i < me._marker_node2.childNodes.length; i++) {
			me._marker_node2.ggMarkerInstances.push(me._marker_node2.childNodes[i]);
		}
		me.elementMouseOver['marker_node2']=false;
		me._marker_title16.logicBlock_position();
		me._marker_title16.logicBlock_visible();
		me.elementMouseOver['marker_title16']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node3);
		me._marker_node3__normal = clonedNormalElement._marker_normal;
		me._marker_node3__normalInst = clonedNormalElement;
		me._marker_node3__normal.style.visibility='inherit';
		me._marker_node3__normal.style.left='0px';
		me._marker_node3__normal.style.top='0px';
		me._marker_node3.ggMarkerNormal=me._marker_node3__normal;
		me._marker_node3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node3);
		me._marker_node3__active = clonedActiveElement._marker_active;
		me._marker_node3__activeInst = clonedActiveElement;
		me._marker_node3__active.style.visibility='hidden';
		me._marker_node3__active.style.left='0px';
		me._marker_node3__active.style.top='0px';
		me._marker_node3.ggMarkerActive=me._marker_node3__active;
		me._marker_node3.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__active,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__active);
		}
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__normal,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__normal);
		}
		for (var i = 0; i < me._marker_node3.childNodes.length; i++) {
			me._marker_node3.ggMarkerInstances.push(me._marker_node3.childNodes[i]);
		}
		me.elementMouseOver['marker_node3']=false;
		me._marker_title15.logicBlock_position();
		me._marker_title15.logicBlock_visible();
		me.elementMouseOver['marker_title15']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node7);
		me._marker_node7__normal = clonedNormalElement._marker_normal;
		me._marker_node7__normalInst = clonedNormalElement;
		me._marker_node7__normal.style.visibility='inherit';
		me._marker_node7__normal.style.left='0px';
		me._marker_node7__normal.style.top='0px';
		me._marker_node7.ggMarkerNormal=me._marker_node7__normal;
		me._marker_node7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node7);
		me._marker_node7__active = clonedActiveElement._marker_active;
		me._marker_node7__activeInst = clonedActiveElement;
		me._marker_node7__active.style.visibility='hidden';
		me._marker_node7__active.style.left='0px';
		me._marker_node7__active.style.top='0px';
		me._marker_node7.ggMarkerActive=me._marker_node7__active;
		me._marker_node7.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__active,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__active);
		}
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__normal,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__normal);
		}
		for (var i = 0; i < me._marker_node7.childNodes.length; i++) {
			me._marker_node7.ggMarkerInstances.push(me._marker_node7.childNodes[i]);
		}
		me.elementMouseOver['marker_node7']=false;
		me._marker_title14.logicBlock_position();
		me._marker_title14.logicBlock_visible();
		me.elementMouseOver['marker_title14']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node8);
		me._marker_node8__normal = clonedNormalElement._marker_normal;
		me._marker_node8__normalInst = clonedNormalElement;
		me._marker_node8__normal.style.visibility='inherit';
		me._marker_node8__normal.style.left='0px';
		me._marker_node8__normal.style.top='0px';
		me._marker_node8.ggMarkerNormal=me._marker_node8__normal;
		me._marker_node8.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node8);
		me._marker_node8__active = clonedActiveElement._marker_active;
		me._marker_node8__activeInst = clonedActiveElement;
		me._marker_node8__active.style.visibility='hidden';
		me._marker_node8__active.style.left='0px';
		me._marker_node8__active.style.top='0px';
		me._marker_node8.ggMarkerActive=me._marker_node8__active;
		me._marker_node8.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node8.firstChild) {
			me._marker_node8.insertBefore(me._marker_node8__active,me._marker_node8.firstChild);
		} else {
			me._marker_node8.appendChild(me._marker_node8__active);
		}
		if (me._marker_node8.firstChild) {
			me._marker_node8.insertBefore(me._marker_node8__normal,me._marker_node8.firstChild);
		} else {
			me._marker_node8.appendChild(me._marker_node8__normal);
		}
		for (var i = 0; i < me._marker_node8.childNodes.length; i++) {
			me._marker_node8.ggMarkerInstances.push(me._marker_node8.childNodes[i]);
		}
		me.elementMouseOver['marker_node8']=false;
		me._marker_title13.logicBlock_position();
		me._marker_title13.logicBlock_visible();
		me.elementMouseOver['marker_title13']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node4);
		me._marker_node4__normal = clonedNormalElement._marker_normal;
		me._marker_node4__normalInst = clonedNormalElement;
		me._marker_node4__normal.style.visibility='inherit';
		me._marker_node4__normal.style.left='0px';
		me._marker_node4__normal.style.top='0px';
		me._marker_node4.ggMarkerNormal=me._marker_node4__normal;
		me._marker_node4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node4);
		me._marker_node4__active = clonedActiveElement._marker_active;
		me._marker_node4__activeInst = clonedActiveElement;
		me._marker_node4__active.style.visibility='hidden';
		me._marker_node4__active.style.left='0px';
		me._marker_node4__active.style.top='0px';
		me._marker_node4.ggMarkerActive=me._marker_node4__active;
		me._marker_node4.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__active,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__active);
		}
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__normal,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__normal);
		}
		for (var i = 0; i < me._marker_node4.childNodes.length; i++) {
			me._marker_node4.ggMarkerInstances.push(me._marker_node4.childNodes[i]);
		}
		me.elementMouseOver['marker_node4']=false;
		me._marker_title12.logicBlock_position();
		me._marker_title12.logicBlock_visible();
		me.elementMouseOver['marker_title12']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node18);
		me._marker_node18__normal = clonedNormalElement._marker_normal;
		me._marker_node18__normalInst = clonedNormalElement;
		me._marker_node18__normal.style.visibility='inherit';
		me._marker_node18__normal.style.left='0px';
		me._marker_node18__normal.style.top='0px';
		me._marker_node18.ggMarkerNormal=me._marker_node18__normal;
		me._marker_node18.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node18);
		me._marker_node18__active = clonedActiveElement._marker_active;
		me._marker_node18__activeInst = clonedActiveElement;
		me._marker_node18__active.style.visibility='hidden';
		me._marker_node18__active.style.left='0px';
		me._marker_node18__active.style.top='0px';
		me._marker_node18.ggMarkerActive=me._marker_node18__active;
		me._marker_node18.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node18.firstChild) {
			me._marker_node18.insertBefore(me._marker_node18__active,me._marker_node18.firstChild);
		} else {
			me._marker_node18.appendChild(me._marker_node18__active);
		}
		if (me._marker_node18.firstChild) {
			me._marker_node18.insertBefore(me._marker_node18__normal,me._marker_node18.firstChild);
		} else {
			me._marker_node18.appendChild(me._marker_node18__normal);
		}
		for (var i = 0; i < me._marker_node18.childNodes.length; i++) {
			me._marker_node18.ggMarkerInstances.push(me._marker_node18.childNodes[i]);
		}
		me.elementMouseOver['marker_node18']=false;
		me._marker_title11.logicBlock_position();
		me._marker_title11.logicBlock_visible();
		me.elementMouseOver['marker_title11']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node5);
		me._marker_node5__normal = clonedNormalElement._marker_normal;
		me._marker_node5__normalInst = clonedNormalElement;
		me._marker_node5__normal.style.visibility='inherit';
		me._marker_node5__normal.style.left='0px';
		me._marker_node5__normal.style.top='0px';
		me._marker_node5.ggMarkerNormal=me._marker_node5__normal;
		me._marker_node5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node5);
		me._marker_node5__active = clonedActiveElement._marker_active;
		me._marker_node5__activeInst = clonedActiveElement;
		me._marker_node5__active.style.visibility='hidden';
		me._marker_node5__active.style.left='0px';
		me._marker_node5__active.style.top='0px';
		me._marker_node5.ggMarkerActive=me._marker_node5__active;
		me._marker_node5.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__active,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__active);
		}
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__normal,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__normal);
		}
		for (var i = 0; i < me._marker_node5.childNodes.length; i++) {
			me._marker_node5.ggMarkerInstances.push(me._marker_node5.childNodes[i]);
		}
		me.elementMouseOver['marker_node5']=false;
		me._marker_title10.logicBlock_position();
		me._marker_title10.logicBlock_visible();
		me.elementMouseOver['marker_title10']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node13);
		me._marker_node13__normal = clonedNormalElement._marker_normal;
		me._marker_node13__normalInst = clonedNormalElement;
		me._marker_node13__normal.style.visibility='inherit';
		me._marker_node13__normal.style.left='0px';
		me._marker_node13__normal.style.top='0px';
		me._marker_node13.ggMarkerNormal=me._marker_node13__normal;
		me._marker_node13.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node13);
		me._marker_node13__active = clonedActiveElement._marker_active;
		me._marker_node13__activeInst = clonedActiveElement;
		me._marker_node13__active.style.visibility='hidden';
		me._marker_node13__active.style.left='0px';
		me._marker_node13__active.style.top='0px';
		me._marker_node13.ggMarkerActive=me._marker_node13__active;
		me._marker_node13.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node13.firstChild) {
			me._marker_node13.insertBefore(me._marker_node13__active,me._marker_node13.firstChild);
		} else {
			me._marker_node13.appendChild(me._marker_node13__active);
		}
		if (me._marker_node13.firstChild) {
			me._marker_node13.insertBefore(me._marker_node13__normal,me._marker_node13.firstChild);
		} else {
			me._marker_node13.appendChild(me._marker_node13__normal);
		}
		for (var i = 0; i < me._marker_node13.childNodes.length; i++) {
			me._marker_node13.ggMarkerInstances.push(me._marker_node13.childNodes[i]);
		}
		me.elementMouseOver['marker_node13']=false;
		me._marker_title9.logicBlock_position();
		me._marker_title9.logicBlock_visible();
		me.elementMouseOver['marker_title9']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node11);
		me._marker_node11__normal = clonedNormalElement._marker_normal;
		me._marker_node11__normalInst = clonedNormalElement;
		me._marker_node11__normal.style.visibility='inherit';
		me._marker_node11__normal.style.left='0px';
		me._marker_node11__normal.style.top='0px';
		me._marker_node11.ggMarkerNormal=me._marker_node11__normal;
		me._marker_node11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node11);
		me._marker_node11__active = clonedActiveElement._marker_active;
		me._marker_node11__activeInst = clonedActiveElement;
		me._marker_node11__active.style.visibility='hidden';
		me._marker_node11__active.style.left='0px';
		me._marker_node11__active.style.top='0px';
		me._marker_node11.ggMarkerActive=me._marker_node11__active;
		me._marker_node11.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node11.firstChild) {
			me._marker_node11.insertBefore(me._marker_node11__active,me._marker_node11.firstChild);
		} else {
			me._marker_node11.appendChild(me._marker_node11__active);
		}
		if (me._marker_node11.firstChild) {
			me._marker_node11.insertBefore(me._marker_node11__normal,me._marker_node11.firstChild);
		} else {
			me._marker_node11.appendChild(me._marker_node11__normal);
		}
		for (var i = 0; i < me._marker_node11.childNodes.length; i++) {
			me._marker_node11.ggMarkerInstances.push(me._marker_node11.childNodes[i]);
		}
		me.elementMouseOver['marker_node11']=false;
		me._marker_title8.logicBlock_position();
		me._marker_title8.logicBlock_visible();
		me.elementMouseOver['marker_title8']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node12);
		me._marker_node12__normal = clonedNormalElement._marker_normal;
		me._marker_node12__normalInst = clonedNormalElement;
		me._marker_node12__normal.style.visibility='inherit';
		me._marker_node12__normal.style.left='0px';
		me._marker_node12__normal.style.top='0px';
		me._marker_node12.ggMarkerNormal=me._marker_node12__normal;
		me._marker_node12.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node12);
		me._marker_node12__active = clonedActiveElement._marker_active;
		me._marker_node12__activeInst = clonedActiveElement;
		me._marker_node12__active.style.visibility='hidden';
		me._marker_node12__active.style.left='0px';
		me._marker_node12__active.style.top='0px';
		me._marker_node12.ggMarkerActive=me._marker_node12__active;
		me._marker_node12.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node12.firstChild) {
			me._marker_node12.insertBefore(me._marker_node12__active,me._marker_node12.firstChild);
		} else {
			me._marker_node12.appendChild(me._marker_node12__active);
		}
		if (me._marker_node12.firstChild) {
			me._marker_node12.insertBefore(me._marker_node12__normal,me._marker_node12.firstChild);
		} else {
			me._marker_node12.appendChild(me._marker_node12__normal);
		}
		for (var i = 0; i < me._marker_node12.childNodes.length; i++) {
			me._marker_node12.ggMarkerInstances.push(me._marker_node12.childNodes[i]);
		}
		me.elementMouseOver['marker_node12']=false;
		me._marker_title7.logicBlock_position();
		me._marker_title7.logicBlock_visible();
		me.elementMouseOver['marker_title7']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node15);
		me._marker_node15__normal = clonedNormalElement._marker_normal;
		me._marker_node15__normalInst = clonedNormalElement;
		me._marker_node15__normal.style.visibility='inherit';
		me._marker_node15__normal.style.left='0px';
		me._marker_node15__normal.style.top='0px';
		me._marker_node15.ggMarkerNormal=me._marker_node15__normal;
		me._marker_node15.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node15);
		me._marker_node15__active = clonedActiveElement._marker_active;
		me._marker_node15__activeInst = clonedActiveElement;
		me._marker_node15__active.style.visibility='hidden';
		me._marker_node15__active.style.left='0px';
		me._marker_node15__active.style.top='0px';
		me._marker_node15.ggMarkerActive=me._marker_node15__active;
		me._marker_node15.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node15.firstChild) {
			me._marker_node15.insertBefore(me._marker_node15__active,me._marker_node15.firstChild);
		} else {
			me._marker_node15.appendChild(me._marker_node15__active);
		}
		if (me._marker_node15.firstChild) {
			me._marker_node15.insertBefore(me._marker_node15__normal,me._marker_node15.firstChild);
		} else {
			me._marker_node15.appendChild(me._marker_node15__normal);
		}
		for (var i = 0; i < me._marker_node15.childNodes.length; i++) {
			me._marker_node15.ggMarkerInstances.push(me._marker_node15.childNodes[i]);
		}
		me.elementMouseOver['marker_node15']=false;
		me._marker_title6.logicBlock_position();
		me._marker_title6.logicBlock_visible();
		me.elementMouseOver['marker_title6']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node17);
		me._marker_node17__normal = clonedNormalElement._marker_normal;
		me._marker_node17__normalInst = clonedNormalElement;
		me._marker_node17__normal.style.visibility='inherit';
		me._marker_node17__normal.style.left='0px';
		me._marker_node17__normal.style.top='0px';
		me._marker_node17.ggMarkerNormal=me._marker_node17__normal;
		me._marker_node17.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node17);
		me._marker_node17__active = clonedActiveElement._marker_active;
		me._marker_node17__activeInst = clonedActiveElement;
		me._marker_node17__active.style.visibility='hidden';
		me._marker_node17__active.style.left='0px';
		me._marker_node17__active.style.top='0px';
		me._marker_node17.ggMarkerActive=me._marker_node17__active;
		me._marker_node17.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node17.firstChild) {
			me._marker_node17.insertBefore(me._marker_node17__active,me._marker_node17.firstChild);
		} else {
			me._marker_node17.appendChild(me._marker_node17__active);
		}
		if (me._marker_node17.firstChild) {
			me._marker_node17.insertBefore(me._marker_node17__normal,me._marker_node17.firstChild);
		} else {
			me._marker_node17.appendChild(me._marker_node17__normal);
		}
		for (var i = 0; i < me._marker_node17.childNodes.length; i++) {
			me._marker_node17.ggMarkerInstances.push(me._marker_node17.childNodes[i]);
		}
		me.elementMouseOver['marker_node17']=false;
		me._marker_title5.logicBlock_position();
		me._marker_title5.logicBlock_visible();
		me.elementMouseOver['marker_title5']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node25);
		me._marker_node25__normal = clonedNormalElement._marker_normal;
		me._marker_node25__normalInst = clonedNormalElement;
		me._marker_node25__normal.style.visibility='inherit';
		me._marker_node25__normal.style.left='0px';
		me._marker_node25__normal.style.top='0px';
		me._marker_node25.ggMarkerNormal=me._marker_node25__normal;
		me._marker_node25.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node25);
		me._marker_node25__active = clonedActiveElement._marker_active;
		me._marker_node25__activeInst = clonedActiveElement;
		me._marker_node25__active.style.visibility='hidden';
		me._marker_node25__active.style.left='0px';
		me._marker_node25__active.style.top='0px';
		me._marker_node25.ggMarkerActive=me._marker_node25__active;
		me._marker_node25.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node25.firstChild) {
			me._marker_node25.insertBefore(me._marker_node25__active,me._marker_node25.firstChild);
		} else {
			me._marker_node25.appendChild(me._marker_node25__active);
		}
		if (me._marker_node25.firstChild) {
			me._marker_node25.insertBefore(me._marker_node25__normal,me._marker_node25.firstChild);
		} else {
			me._marker_node25.appendChild(me._marker_node25__normal);
		}
		for (var i = 0; i < me._marker_node25.childNodes.length; i++) {
			me._marker_node25.ggMarkerInstances.push(me._marker_node25.childNodes[i]);
		}
		me.elementMouseOver['marker_node25']=false;
		me._marker_title4.logicBlock_position();
		me._marker_title4.logicBlock_visible();
		me.elementMouseOver['marker_title4']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node21);
		me._marker_node21__normal = clonedNormalElement._marker_normal;
		me._marker_node21__normalInst = clonedNormalElement;
		me._marker_node21__normal.style.visibility='inherit';
		me._marker_node21__normal.style.left='0px';
		me._marker_node21__normal.style.top='0px';
		me._marker_node21.ggMarkerNormal=me._marker_node21__normal;
		me._marker_node21.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node21);
		me._marker_node21__active = clonedActiveElement._marker_active;
		me._marker_node21__activeInst = clonedActiveElement;
		me._marker_node21__active.style.visibility='hidden';
		me._marker_node21__active.style.left='0px';
		me._marker_node21__active.style.top='0px';
		me._marker_node21.ggMarkerActive=me._marker_node21__active;
		me._marker_node21.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node21.firstChild) {
			me._marker_node21.insertBefore(me._marker_node21__active,me._marker_node21.firstChild);
		} else {
			me._marker_node21.appendChild(me._marker_node21__active);
		}
		if (me._marker_node21.firstChild) {
			me._marker_node21.insertBefore(me._marker_node21__normal,me._marker_node21.firstChild);
		} else {
			me._marker_node21.appendChild(me._marker_node21__normal);
		}
		for (var i = 0; i < me._marker_node21.childNodes.length; i++) {
			me._marker_node21.ggMarkerInstances.push(me._marker_node21.childNodes[i]);
		}
		me.elementMouseOver['marker_node21']=false;
		me._marker_title3.logicBlock_position();
		me._marker_title3.logicBlock_visible();
		me.elementMouseOver['marker_title3']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node24);
		me._marker_node24__normal = clonedNormalElement._marker_normal;
		me._marker_node24__normalInst = clonedNormalElement;
		me._marker_node24__normal.style.visibility='inherit';
		me._marker_node24__normal.style.left='0px';
		me._marker_node24__normal.style.top='0px';
		me._marker_node24.ggMarkerNormal=me._marker_node24__normal;
		me._marker_node24.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node24);
		me._marker_node24__active = clonedActiveElement._marker_active;
		me._marker_node24__activeInst = clonedActiveElement;
		me._marker_node24__active.style.visibility='hidden';
		me._marker_node24__active.style.left='0px';
		me._marker_node24__active.style.top='0px';
		me._marker_node24.ggMarkerActive=me._marker_node24__active;
		me._marker_node24.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node24.firstChild) {
			me._marker_node24.insertBefore(me._marker_node24__active,me._marker_node24.firstChild);
		} else {
			me._marker_node24.appendChild(me._marker_node24__active);
		}
		if (me._marker_node24.firstChild) {
			me._marker_node24.insertBefore(me._marker_node24__normal,me._marker_node24.firstChild);
		} else {
			me._marker_node24.appendChild(me._marker_node24__normal);
		}
		for (var i = 0; i < me._marker_node24.childNodes.length; i++) {
			me._marker_node24.ggMarkerInstances.push(me._marker_node24.childNodes[i]);
		}
		me.elementMouseOver['marker_node24']=false;
		me._marker_title2.logicBlock_visible();
		me.elementMouseOver['marker_title2']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node22);
		me._marker_node22__normal = clonedNormalElement._marker_normal;
		me._marker_node22__normalInst = clonedNormalElement;
		me._marker_node22__normal.style.visibility='inherit';
		me._marker_node22__normal.style.left='0px';
		me._marker_node22__normal.style.top='0px';
		me._marker_node22.ggMarkerNormal=me._marker_node22__normal;
		me._marker_node22.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node22);
		me._marker_node22__active = clonedActiveElement._marker_active;
		me._marker_node22__activeInst = clonedActiveElement;
		me._marker_node22__active.style.visibility='hidden';
		me._marker_node22__active.style.left='0px';
		me._marker_node22__active.style.top='0px';
		me._marker_node22.ggMarkerActive=me._marker_node22__active;
		me._marker_node22.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node22.firstChild) {
			me._marker_node22.insertBefore(me._marker_node22__active,me._marker_node22.firstChild);
		} else {
			me._marker_node22.appendChild(me._marker_node22__active);
		}
		if (me._marker_node22.firstChild) {
			me._marker_node22.insertBefore(me._marker_node22__normal,me._marker_node22.firstChild);
		} else {
			me._marker_node22.appendChild(me._marker_node22__normal);
		}
		for (var i = 0; i < me._marker_node22.childNodes.length; i++) {
			me._marker_node22.ggMarkerInstances.push(me._marker_node22.childNodes[i]);
		}
		me.elementMouseOver['marker_node22']=false;
		me._marker_title1.logicBlock_position();
		me._marker_title1.logicBlock_visible();
		me.elementMouseOver['marker_title1']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node23);
		me._marker_node23__normal = clonedNormalElement._marker_normal;
		me._marker_node23__normalInst = clonedNormalElement;
		me._marker_node23__normal.style.visibility='inherit';
		me._marker_node23__normal.style.left='0px';
		me._marker_node23__normal.style.top='0px';
		me._marker_node23.ggMarkerNormal=me._marker_node23__normal;
		me._marker_node23.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node23);
		me._marker_node23__active = clonedActiveElement._marker_active;
		me._marker_node23__activeInst = clonedActiveElement;
		me._marker_node23__active.style.visibility='hidden';
		me._marker_node23__active.style.left='0px';
		me._marker_node23__active.style.top='0px';
		me._marker_node23.ggMarkerActive=me._marker_node23__active;
		me._marker_node23.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node23.firstChild) {
			me._marker_node23.insertBefore(me._marker_node23__active,me._marker_node23.firstChild);
		} else {
			me._marker_node23.appendChild(me._marker_node23__active);
		}
		if (me._marker_node23.firstChild) {
			me._marker_node23.insertBefore(me._marker_node23__normal,me._marker_node23.firstChild);
		} else {
			me._marker_node23.appendChild(me._marker_node23__normal);
		}
		for (var i = 0; i < me._marker_node23.childNodes.length; i++) {
			me._marker_node23.ggMarkerInstances.push(me._marker_node23.childNodes[i]);
		}
		me.elementMouseOver['marker_node23']=false;
		me._marker_title0.logicBlock_position();
		me._marker_title0.logicBlock_visible();
		me.elementMouseOver['marker_title0']=false;
		me._text_1.logicBlock_scaling();
		me._text_1.logicBlock_alpha();
		me.elementMouseOver['text_1']=false;
		me.elementMouseOver['hide_template']=false;
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._marker_normal;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='0px';
		me._markertemplate__normal.style.top='0px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._marker_active;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='0px';
		me._markertemplate__active.style.top='0px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.elementMouseOver['markertemplate']=false;
		me._marker_title.logicBlock_position();
		me._marker_title.logicBlock_visible();
		me.elementMouseOver['marker_title']=false;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._node_title_phone.logicBlock_position();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._node_title_phone.logicBlock_position();
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._thumbnail_menu_toggle_phone.logicBlock_visible();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._languages_popup.logicBlock_visible();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._pdf_popup.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._menu_bg_safe_area.logicBlock_size();
			me._menu_bg_safe_area.logicBlock_visible();
			me._menu_bg_safe_area.logicBlock_alpha();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._hotspots_toggle.logicBlock_alpha();
			me._hotspots_on.logicBlock_visible();
			me._hotspots_off.logicBlock_visible();
			me._gyro_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._menu_toggle_timer.logicBlock_visible();
			me._menu_toggle_bg_safe_area.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._node_title_phone.logicBlock_position();
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_scroller.ggUpdatePosition();
			me._thumbnail_menu_toggle_phone.logicBlock_visible();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._languages_popup.ggUpdatePosition();
			me._languages_popup.logicBlock_visible();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._pdf_popup.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._menu_bg_safe_area.logicBlock_size();
			me._menu_bg_safe_area.logicBlock_visible();
			me._menu_bg_safe_area.logicBlock_alpha();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
			me._hotspots_toggle.logicBlock_position();
			me._hotspots_toggle.logicBlock_alpha();
			me._hotspots_on.logicBlock_visible();
			me._hotspots_off.logicBlock_visible();
			me._gyro_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._audio_toggle.logicBlock_alpha();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._menu_toggle_bg_safe_area.logicBlock_visible();
			me._marker_title16.logicBlock_position();
			me._marker_title15.logicBlock_position();
			me._marker_title14.logicBlock_position();
			me._marker_title13.logicBlock_position();
			me._marker_title12.logicBlock_position();
			me._marker_title11.logicBlock_position();
			me._marker_title10.logicBlock_position();
			me._marker_title9.logicBlock_position();
			me._marker_title8.logicBlock_position();
			me._marker_title7.logicBlock_position();
			me._marker_title6.logicBlock_position();
			me._marker_title5.logicBlock_position();
			me._marker_title4.logicBlock_position();
			me._marker_title3.logicBlock_position();
			me._marker_title1.logicBlock_position();
			me._marker_title0.logicBlock_position();
			me._marker_title.logicBlock_position();
		});
		player.addListener('fullscreenenter', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			me._marker_title16.logicBlock_position();
			me._marker_title15.logicBlock_position();
			me._marker_title14.logicBlock_position();
			me._marker_title13.logicBlock_position();
			me._marker_title12.logicBlock_position();
			me._marker_title11.logicBlock_position();
			me._marker_title10.logicBlock_position();
			me._marker_title9.logicBlock_position();
			me._marker_title8.logicBlock_position();
			me._marker_title7.logicBlock_position();
			me._marker_title6.logicBlock_position();
			me._marker_title5.logicBlock_position();
			me._marker_title4.logicBlock_position();
			me._marker_title3.logicBlock_position();
			me._marker_title1.logicBlock_position();
			me._marker_title0.logicBlock_position();
			me._marker_title.logicBlock_position();
		});
		player.addListener('hsproxyout', function(event) {
			if (event.url=='{node2}') {
				me._marker_title16.onmouseleave();
			}
			if (event.url=='{node3}') {
				me._marker_title15.onmouseleave();
			}
			if (event.url=='{node7}') {
				me._marker_title14.onmouseleave();
			}
			if (event.url=='{node8}') {
				me._marker_title13.onmouseleave();
			}
			if (event.url=='{node4}') {
				me._marker_title12.onmouseleave();
			}
			if (event.url=='{node18}') {
				me._marker_title11.onmouseleave();
			}
			if (event.url=='{node5}') {
				me._marker_title10.onmouseleave();
			}
			if (event.url=='{node13}') {
				me._marker_title9.onmouseleave();
			}
			if (event.url=='{node11}') {
				me._marker_title8.onmouseleave();
			}
			if (event.url=='{node12}') {
				me._marker_title7.onmouseleave();
			}
			if (event.url=='{node15}') {
				me._marker_title6.onmouseleave();
			}
			if (event.url=='{node17}') {
				me._marker_title5.onmouseleave();
			}
			if (event.url=='{node25}') {
				me._marker_title4.onmouseleave();
			}
			if (event.url=='{node21}') {
				me._marker_title3.onmouseleave();
			}
			if (event.url=='{node24}') {
				me._marker_title2.onmouseleave();
			}
			if (event.url=='{node22}') {
				me._marker_title1.onmouseleave();
			}
			if (event.url=='{node23}') {
				me._marker_title0.onmouseleave();
			}
			if (event.url=='{}') {
				me._marker_title.onmouseleave();
			}
		});
		player.addListener('hsproxyover', function(event) {
			if (event.url=='{node2}') {
				me._marker_title16.onmouseenter();
			}
			if (event.url=='{node3}') {
				me._marker_title15.onmouseenter();
			}
			if (event.url=='{node7}') {
				me._marker_title14.onmouseenter();
			}
			if (event.url=='{node8}') {
				me._marker_title13.onmouseenter();
			}
			if (event.url=='{node4}') {
				me._marker_title12.onmouseenter();
			}
			if (event.url=='{node18}') {
				me._marker_title11.onmouseenter();
			}
			if (event.url=='{node5}') {
				me._marker_title10.onmouseenter();
			}
			if (event.url=='{node13}') {
				me._marker_title9.onmouseenter();
			}
			if (event.url=='{node11}') {
				me._marker_title8.onmouseenter();
			}
			if (event.url=='{node12}') {
				me._marker_title7.onmouseenter();
			}
			if (event.url=='{node15}') {
				me._marker_title6.onmouseenter();
			}
			if (event.url=='{node17}') {
				me._marker_title5.onmouseenter();
			}
			if (event.url=='{node25}') {
				me._marker_title4.onmouseenter();
			}
			if (event.url=='{node21}') {
				me._marker_title3.onmouseenter();
			}
			if (event.url=='{node24}') {
				me._marker_title2.onmouseenter();
			}
			if (event.url=='{node22}') {
				me._marker_title1.onmouseenter();
			}
			if (event.url=='{node23}') {
				me._marker_title0.onmouseenter();
			}
			if (event.url=='{}') {
				me._marker_title.onmouseenter();
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
			me._container_1.logicBlock_scaling();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_position();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._fullscreen_toggle.logicBlock_alpha();
		});
		player.addListener('varchanged_hide_lottie_index', function(event) {
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
		});
		player.addListener('varchanged_open_image_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_open_image_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_info_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_open_info_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_file_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_open_video_file_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_url_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_open_video_url_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_vimeo_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_open_video_vimeo_hotspots();
				}
			}
		});
		player.addListener('varchanged_open_video_youtube_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_open_video_youtube_hotspots();
				}
			}
		});
		player.addListener('varchanged_opt_3d_preview_1', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_3d_preview_1();
				}
			}
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_position();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._fullscreen_toggle.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			me._hotspots_on.logicBlock_visible();
			me._hotspots_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._languages_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu', function(event) {
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
			me._menu_bg_safe_area.logicBlock_alpha();
			me._menu.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._pdf_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu_toggle_phone.logicBlock_visible();
			me._menu_bg_safe_area.logicBlock_visible();
			me._menu.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg_safe_area.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._url_popup.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_popup') == false))
				)
			) {
					me._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._url_popup_iframe.ggUpdateText();
				me._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
			me._languages_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_position();
			me._vr.logicBlock_alpha();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title_phone);
		el=me._thumbnail_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggDx=0;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.64,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 115px;';
		hs+='left : calc(50% - ((220px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((115px + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone.onclick=function (e) {
			if (me._thumbnail_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_thumbs', false);
		}
		me._thumbnail_image_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image_phone);
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumb_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 6px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 5px 0px 5px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title.ggUpdateText();
		el.appendChild(els);
		me._thumb_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumb_title);
		el=me._thumb_img=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img.onclick=function (e) {
			if (me._thumb_img.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumb_img.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumb_img);
	};
	function SkinElement_marker_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_active=document.createElement('div');
		els=me._marker_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGhlaWdodD0iMzBweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm'+
			'91bmQ9Im5ldyAwIDAgMzAgMzAiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzBweCIgdmlld0JveD0iMCAwIDMwIDMwIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2Utb3BhY2l0eT0iMSIgcj0iMTAuOTk0IiBjeT0iMTQuOTg3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIGN4PSIxNC45ODEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzFfY29weSI+CiAgPGNpcmNsZSBzdHJva2Utd2lkdGg9IjMiIGN5PSIxNC45ODciIHI9IjEw'+
			'Ljk5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBjeD0iMTQuOTgxIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8zIiBkaXNwbGF5PSJub25lIj4KICA8Y2lyY2xlIGN5PSIzLjk5NCIgc3Ryb2tlPSIjZWUxZDNhIiBkaXNwbGF5PSJpbmxpbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwIiByPSIyLjExNyIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiBjeD0iMTQuOTgiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIiBkaXNwbGF5PSJub25lIj4KICA8Y2lyY2xlIGN5PSIxNC'+
			'45ODciIHN0cm9rZT0iIzAwMDAwMCIgZGlzcGxheT0iaW5saW5lIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHI9IjEwLjk5NCIgZmlsbD0ibm9uZSIgY3g9IjE0Ljk4MSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzFfY29weSIgZGlzcGxheT0ibm9uZSI+CiAgPGNpcmNsZSBzdHJva2Utd2lkdGg9IjMiIGN5PSIxNC45ODciIHI9IjEwLjk5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBjeD0iMTQuOTgxIiBkaXNwbGF5PSJpbmxpbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzMiPgog'+
			'IDxjaXJjbGUgY3k9IjMuOTk0IiBzdHJva2U9IiNlZTFkM2EiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwIiByPSIyLjExNyIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIiBjeD0iMTQuOTgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._marker_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._marker_active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['marker_active'] == true)) || 
				((me.elementMouseOver['hide_template'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._marker_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._marker_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._marker_active.style.transition='transform 500ms ease 0ms';
				if (me._marker_active.ggCurrentLogicStateScaling == 0) {
					me._marker_active.ggParameter.sx = 1.2;
					me._marker_active.ggParameter.sy = 1.2;
					me._marker_active.style.transform=parameterToTransform(me._marker_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._marker_active);}, 550);
				}
				else {
					me._marker_active.ggParameter.sx = 0.8;
					me._marker_active.ggParameter.sy = 0.8;
					me._marker_active.style.transform=parameterToTransform(me._marker_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._marker_active);}, 550);
				}
			}
		}
		me._marker_active.logicBlock_scaling();
		me._marker_active.onmouseenter=function (e) {
			me.elementMouseOver['marker_active']=true;
			me._marker_active.logicBlock_scaling();
		}
		me._marker_active.onmouseleave=function (e) {
			me.elementMouseOver['marker_active']=false;
			me._marker_active.logicBlock_scaling();
		}
		me._marker_active.ggUpdatePosition=function (useTransition) {
		}
		me._marker_active.logicBlock_scaling();
		me.elementMouseOver['marker_active']=false;
	player.addListener('timer', function() { var hs='';
if (me._marker_active.ggParameter) {
	hs+=parameterToTransform(me._marker_active.ggParameter) + ' ';
}
hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
me._marker_active.style.transform=hs; });
	};
	function SkinElement_marker_normal_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_normal=document.createElement('div');
		els=me._marker_normal__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZW5hYmxlLWJhY2tncm'+
			'91bmQ9Im5ldyAwIDAgMzAgMzAiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzBweCIgdmlld0JveD0iMCAwIDMwIDMwIiBoZWlnaHQ9IjMwcHgiPgogPGcgaWQ9IkxheWVyXzEiIGRpc3BsYXk9Im5vbmUiPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTk5OTk5IiBkPSJNMTkuNzU0LDIuOTE1ICAgYy0wLjM1MywyLjE1My0xLjkzOSw0LjA2Ni00Ljc2LDQuMDY2Yy0yLjgyNSwwLTQuNDEyLTEuOTE5LTQuNzYyLTQuMDc2Yy00LjgyOSwxLjg5OS04LjI1Nyw2LjU4LTguMjU3LDEyLjA4MyAgIGMwLDcuMTgzLDUu'+
			'ODIzLDEzLjAwNywxMy4wMDYsMTMuMDA3YzcuMTg0LDAsMTMuMDA3LTUuODI0LDEzLjAwNy0xMy4wMDdDMjcuOTg3LDkuNDk0LDI0LjU3LDQuODIxLDE5Ljc1NCwyLjkxNXoiIGRpc3BsYXk9ImlubGluZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMV9jb3B5IiBkaXNwbGF5PSJub25lIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTE5Ljc1NCwyLjkxNSAgIGMtMC4zNTMsMi4xNTMtMS45MzksNC4wNjYtNC43Niw0LjA2NmMtMi44MjUsMC00LjQxMi0xLjkxOS00Ljc2Mi00LjA3NmMtNC44MjksMS'+
			'44OTktOC4yNTcsNi41OC04LjI1NywxMi4wODMgICBjMCw3LjE4Myw1LjgyMywxMy4wMDcsMTMuMDA2LDEzLjAwN2M3LjE4NCwwLDEzLjAwNy01LjgyNCwxMy4wMDctMTMuMDA3QzI3Ljk4Nyw5LjQ5NCwyNC41Nyw0LjgyMSwxOS43NTQsMi45MTV6IiBkaXNwbGF5PSJpbmxpbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzMiPgogIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIzIiBjeT0iMTUiIHI9IjguMDUzIiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTk5OTkiIGN4PSIxNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfM19j'+
			'b3B5Ij4KICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMiIgY3k9IjE1IiByPSI4LjA1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBjeD0iMTUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzUiIGRpc3BsYXk9Im5vbmUiPgogIDxjaXJjbGUgY3k9IjIuMDA3IiByPSIyLjA1MyIgZmlsbD0iI0VFMUQzQSIgY3g9IjE1IiBkaXNwbGF5PSJpbmxpbmUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._marker_normal__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._marker_normal.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['marker_normal'] == true)) || 
				((me.elementMouseOver['hide_template'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._marker_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._marker_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._marker_normal.style.transition='transform 500ms ease 0ms';
				if (me._marker_normal.ggCurrentLogicStateScaling == 0) {
					me._marker_normal.ggParameter.sx = 1;
					me._marker_normal.ggParameter.sy = 1;
					me._marker_normal.style.transform=parameterToTransform(me._marker_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._marker_normal);}, 550);
				}
				else {
					me._marker_normal.ggParameter.sx = 0.5;
					me._marker_normal.ggParameter.sy = 0.5;
					me._marker_normal.style.transform=parameterToTransform(me._marker_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._marker_normal);}, 550);
				}
			}
		}
		me._marker_normal.logicBlock_scaling();
		me._marker_normal.onmouseenter=function (e) {
			me.elementMouseOver['marker_normal']=true;
			me._marker_normal.logicBlock_scaling();
		}
		me._marker_normal.onmouseleave=function (e) {
			me.elementMouseOver['marker_normal']=false;
			me._marker_normal.logicBlock_scaling();
		}
		me._marker_normal.ggUpdatePosition=function (useTransition) {
		}
		me._marker_normal.logicBlock_scaling();
		me.elementMouseOver['marker_normal']=false;
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(79,181,194,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.logicBlock_textcolor();
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me._language_title.logicBlock_textcolor();
		me.elementMouseOver['language_title']=false;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -500px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcgICBjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -500px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.logicBlock_alpha();
		me._chevron_black.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdm'+
			'Vyc2lvbj0iMS4wIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEgICBjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAgICBTMS43LDQ3MywzNC45LDQzOS43eiIvPgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -500px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style.transition='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.logicBlock_alpha();
		me._chevron_white.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style.transition='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.logicBlock_alpha();
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hs_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hs_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._hs_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style.transition='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_visible();
		me._hs_tt.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwID'+
			'EzMCIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSAgIEMtMTE5LjYsMzQyLjctMTIwLjcsMzQxLjUtMTIyLjEsMzQxLjV6IE0tMTMyLjgsMzgxLjdsLTUwLjgsNTAuOGMtMC4zLDAu'+
			'My0wLjgsMC41LTEuMiwwLjVjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNWwtMzEuNy0zMS44ICAgYy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMTIuNS0xMi41YzAuNy0wLjcsMS43LTAuNywyLjQsMGwxOCwxOGwzNy4xLTM3LjFjMC43LTAuNywxLjctMC43LDIuNCwwbDEyLjUsMTIuNSAgIEMtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44ICAgYzAuMywwLjMsMC44LD'+
			'AuNSwxLjMsMC41YzAuNCwwLDAuOS0wLjIsMS4yLTAuNWw1MC44LTUwLjljMC43LTAuNywwLjctMS43LDAtMi40bC0xMi41LTEyLjVDLTE0NS45LDM2Ni4xLTE0NywzNjYuMS0xNDcuNywzNjYuOHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style.transition='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.logicBlock_visible();
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_3d.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_3d.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_3d.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style.transition='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_visible();
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me.__3d_code=document.createElement('div');
		el.ggId="_3d_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3d_code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3d_code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__3d_code);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		me.elementMouseOver['ht_node']=false;
		me._chevron_white_lower.logicBlock_visible();
		me._chevron_white_lower.logicBlock_alpha();
		me._chevron_black.logicBlock_visible();
		me._chevron_black.logicBlock_alpha();
		me._chevron_white.logicBlock_visible();
		me._chevron_white.logicBlock_alpha();
		me._hs_preview_image.logicBlock_alpha();
		me._hs_tt.logicBlock_visible();
		me._hs_visited.logicBlock_visible();
		me._tt_ht_3d.logicBlock_visible();
		el = me.__3d_code;
		javascript:"";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._hs_visited.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._hs_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._chevron_white_lower.logicBlock_visible();
				me._chevron_black.logicBlock_visible();
				me._chevron_white.logicBlock_visible();
				me._hs_preview_image.logicBlock_alpha();
				me._hs_tt.logicBlock_visible();
				me._tt_ht_3d.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
			};
			me.ggEvent_varchanged_opt_3d_preview_1=function() {
				me._hs_preview_image.logicBlock_alpha();
				me._tt_ht_3d.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_title.ggUpdateText();
				skin._url_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_popup_iframe.ggUpdateText();
				skin._url_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._ht_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_tooltip=document.createElement('div');
		els=me._ht_url_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_url_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_url_tooltip.style.visibility=me._ht_url_tooltip.ggVisible?'inherit':'hidden';
					me._ht_url_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_url_tooltip.style.opacity == 0.0) { me._ht_url_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_url_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_tooltip);
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LDRDOC41LDQsNCw4LjUsNCwxNHM0LjUsMTAsMTAsMTBzMTAtNC41LDEwLTEwUzE5LjUsNCwxNCw0eiBNMjAuOSwxMEgxOGMtMC4zLTEuMi0wLjgtMi40LTEuNC0zLjYmI3hhOyYjeDk7JiN4OTtDMTguNCw3LjEsMjAsOC4zLDIwLjksMTB6IE0xNCw2YzAuOCwxLjIsMS41LDIuNSwxLjksNGgtMy44QzEyLjUsOC42LDEzLjIsNy4yLDE0LDZ6IE02LjMsMTZDNi4x'+
			'LDE1LjQsNiwxNC43LDYsMTRzMC4xLTEuNCwwLjMtMiYjeGE7JiN4OTsmI3g5O2gzLjRjLTAuMSwwLjctMC4xLDEuMy0wLjEsMnMwLjEsMS4zLDAuMSwySDYuM3ogTTcuMSwxOGgzYzAuMywxLjMsMC44LDIuNSwxLjQsMy42QzkuNiwyMC45LDgsMTkuNyw3LjEsMTh6IE0xMCwxMEg3JiN4YTsmI3g5OyYjeDk7YzEtMS43LDIuNS0yLjksNC4zLTMuNkMxMC44LDcuNSwxMC40LDguNywxMCwxMHogTTE0LDIyYy0wLjgtMS4yLTEuNS0yLjUtMS45LTRoMy44QzE1LjUsMTkuNCwxNC44LDIwLjgsMTQsMjJ6IE0xNi4zLDE2aC00LjYmI3hhOyYjeDk7JiN4OTtjLTAuMS0wLjctMC4yLTEuMy0wLjItMnMwLj'+
			'EtMS40LDAuMi0yaDQuN2MwLjEsMC42LDAuMiwxLjMsMC4yLDJTMTYuNCwxNS4zLDE2LjMsMTZ6IE0xNi42LDIxLjZjMC42LTEuMSwxLjEtMi4zLDEuNC0zLjZoMi45JiN4YTsmI3g5OyYjeDk7QzIwLDE5LjYsMTguNCwyMC45LDE2LjYsMjEuNnogTTE4LjQsMTZjMC4xLTAuNywwLjEtMS4zLDAuMS0ycy0wLjEtMS4zLTAuMS0yaDMuNGMwLjIsMC42LDAuMywxLjMsMC4zLDJzLTAuMSwxLjQtMC4zLDJIMTguNHoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0LDRjNS41LDAsMTAsNC41LDEwLDEwcy00LjUsMTAtMTAsMTBTNCwxOS41LDQsMTRTOC41LDQsMTQs'+
			'NCBNMTIuMSwxMGgzLjhjLTAuNC0xLjQtMS4xLTIuOC0xLjktNCYjeGE7JiN4OTsmI3g5OyYjeDk7QzEzLjIsNy4yLDEyLjUsOC42LDEyLjEsMTAgTTE4LDEwaDIuOWMtMS0xLjYtMi41LTIuOS00LjMtMy42QzE3LjIsNy41LDE3LjYsOC44LDE4LDEwIE03LjEsMTBIMTBjMC4zLTEuMiwwLjgtMi41LDEuNC0zLjYmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjYsNy4xLDgsOC4zLDcuMSwxMCBNMTguNCwxNmgzLjRjMC4yLTAuNiwwLjMtMS4zLDAuMy0ycy0wLjEtMS40LTAuMy0yaC0zLjRjMC4xLDAuNywwLjEsMS4zLDAuMSwyUzE4LjQsMTUuMywxOC40LDE2IE0xMS43LDE2JiN4YTsmI3g5OyYjeDk7Ji'+
			'N4OTtoNC43YzAuMS0wLjcsMC4yLTEuMywwLjItMnMtMC4xLTEuNC0wLjItMmgtNC43Yy0wLjEsMC42LTAuMiwxLjMtMC4yLDJTMTEuNiwxNS4zLDExLjcsMTYgTTYuMywxNmgzLjRjLTAuMS0wLjctMC4xLTEuMy0wLjEtMiYjeGE7JiN4OTsmI3g5OyYjeDk7czAuMS0xLjMsMC4xLTJINi4zQzYuMSwxMi42LDYsMTMuMyw2LDE0UzYuMSwxNS40LDYuMywxNiBNMTYuNiwyMS42YzEuOC0wLjYsMy40LTEuOSw0LjMtMy42SDE4QzE3LjYsMTkuMiwxNy4yLDIwLjQsMTYuNiwyMS42JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE0LDIyYzAuOC0xLjIsMS41LTIuNSwxLjktNGgtMy44QzEyLjUsMTkuNCwxMy4y'+
			'LDIwLjgsMTQsMjIgTTExLjQsMjEuNmMtMC42LTEuMi0xLTIuNC0xLjQtMy42SDcuMUM4LDE5LjcsOS42LDIwLjksMTEuNCwyMS42JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE0LDEuOEM3LjMsMS44LDEuOCw3LjMsMS44LDE0UzcuMywyNi4yLDE0LDI2LjJTMjYuMiwyMC43LDI2LjIsMTRTMjAuNywxLjgsMTQsMS44TDE0LDEuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LDRDOC41LDQsNCw4LjUsNCwxNHM0LjUsMTAsMTAsMTBzMTAtNC41LDEwLTEwUzE5LjUsNCwxNCw0eiBNMjAuOSwxMEgxOGMtMC4zLTEuMi0wLjgtMi40LTEuNC0zLjYmI3hhOyYjeDk7JiN4OTtDMTguNCw3LjEsMjAsOC4zLDIwLjksMTB6IE0xNCw2YzAuOCwxLjIsMS41LDIuNSwxLjksNGgtMy44QzEyLjUsOC42LDEzLjIsNy4yLDE0LDZ6IE02LjMsMTZDNi4x'+
			'LDE1LjQsNiwxNC43LDYsMTRzMC4xLTEuNCwwLjMtMiYjeGE7JiN4OTsmI3g5O2gzLjRjLTAuMSwwLjctMC4xLDEuMy0wLjEsMnMwLjEsMS4zLDAuMSwySDYuM3ogTTcuMSwxOGgzYzAuMywxLjMsMC44LDIuNSwxLjQsMy42QzkuNiwyMC45LDgsMTkuNyw3LjEsMTh6IE0xMCwxMEg3JiN4YTsmI3g5OyYjeDk7YzEtMS43LDIuNS0yLjksNC4zLTMuNkMxMC44LDcuNSwxMC40LDguNywxMCwxMHogTTE0LDIyYy0wLjgtMS4yLTEuNS0yLjUtMS45LTRoMy44QzE1LjUsMTkuNCwxNC44LDIwLjgsMTQsMjJ6IE0xNi4zLDE2aC00LjYmI3hhOyYjeDk7JiN4OTtjLTAuMS0wLjctMC4yLTEuMy0wLjItMnMwLj'+
			'EtMS40LDAuMi0yaDQuN2MwLjEsMC42LDAuMiwxLjMsMC4yLDJTMTYuNCwxNS4zLDE2LjMsMTZ6IE0xNi42LDIxLjZjMC42LTEuMSwxLjEtMi4zLDEuNC0zLjZoMi45JiN4YTsmI3g5OyYjeDk7QzIwLDE5LjYsMTguNCwyMC45LDE2LjYsMjEuNnogTTE4LjQsMTZjMC4xLTAuNywwLjEtMS4zLDAuMS0ycy0wLjEtMS4zLTAuMS0yaDMuNGMwLjIsMC42LDAuMywxLjMsMC4zLDJzLTAuMSwxLjQtMC4zLDJIMTguNHoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTE0LDRjNS41LDAsMTAsNC41LDEwLDEwcy00LjUsMTAtMTAsMTBTNCwxOS41LDQsMTRTOC41LDQsMTQs'+
			'NCBNMTIuMSwxMGgzLjhjLTAuNC0xLjQtMS4xLTIuOC0xLjktNCYjeGE7JiN4OTsmI3g5OyYjeDk7QzEzLjIsNy4yLDEyLjUsOC42LDEyLjEsMTAgTTE4LDEwaDIuOWMtMS0xLjYtMi41LTIuOS00LjMtMy42QzE3LjIsNy41LDE3LjYsOC44LDE4LDEwIE03LjEsMTBIMTBjMC4zLTEuMiwwLjgtMi41LDEuNC0zLjYmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjYsNy4xLDgsOC4zLDcuMSwxMCBNMTguNCwxNmgzLjRjMC4yLTAuNiwwLjMtMS4zLDAuMy0ycy0wLjEtMS40LTAuMy0yaC0zLjRjMC4xLDAuNywwLjEsMS4zLDAuMSwyUzE4LjQsMTUuMywxOC40LDE2IE0xMS43LDE2JiN4YTsmI3g5OyYjeDk7Ji'+
			'N4OTtoNC43YzAuMS0wLjcsMC4yLTEuMywwLjItMnMtMC4xLTEuNC0wLjItMmgtNC43Yy0wLjEsMC42LTAuMiwxLjMtMC4yLDJTMTEuNiwxNS4zLDExLjcsMTYgTTYuMywxNmgzLjRjLTAuMS0wLjctMC4xLTEuMy0wLjEtMiYjeGE7JiN4OTsmI3g5OyYjeDk7czAuMS0xLjMsMC4xLTJINi4zQzYuMSwxMi42LDYsMTMuMyw2LDE0UzYuMSwxNS40LDYuMywxNiBNMTYuNiwyMS42YzEuOC0wLjYsMy40LTEuOSw0LjMtMy42SDE4QzE3LjYsMTkuMiwxNy4yLDIwLjQsMTYuNiwyMS42JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE0LDIyYzAuOC0xLjIsMS41LTIuNSwxLjktNGgtMy44QzEyLjUsMTkuNCwxMy4y'+
			'LDIwLjgsMTQsMjIgTTExLjQsMjEuNmMtMC42LTEuMi0xLTIuNC0xLjQtMy42SDcuMUM4LDE5LjcsOS42LDIwLjksMTEuNCwyMS42JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE0LDEuOEM3LjMsMS44LDEuOCw3LjMsMS44LDE0UzcuMywyNi4yLDE0LDI2LjJTMjYuMiwyMC43LDI2LjIsMTRTMjAuNywxLjgsMTQsMS44TDE0LDEuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_icon.style.transition='';
				if (me._ht_url_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_url_icon.style.visibility="hidden";
					me._ht_url_icon.ggVisible=false;
				}
				else {
					me._ht_url_icon.style.visibility=(Number(me._ht_url_icon.style.opacity)>0||!me._ht_url_icon.style.opacity)?'inherit':'hidden';
					me._ht_url_icon.ggVisible=true;
				}
			}
		}
		me._ht_url_icon.logicBlock_visible();
		me._ht_url_icon.onmouseenter=function (e) {
			me._ht_url_icon__img.style.visibility='hidden';
			me._ht_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_url_icon']=true;
		}
		me._ht_url_icon.onmouseleave=function (e) {
			me._ht_url_icon__img.style.visibility='inherit';
			me._ht_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_url_icon']=false;
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_icon);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.logicBlock_visible();
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me._ht_url.logicBlock_visible();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_tooltip.logicBlock_alpha();
		me._ht_url_icon.logicBlock_visible();
		me.elementMouseOver['ht_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_tooltip.logicBlock_alpha();
				me._ht_url_icon.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._ht_image_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup=document.createElement('div');
		el.ggId="ht_image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_image_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateSize == 0) {
					me._ht_image_popup.style.width='600px';
					me._ht_image_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
				else {
					me._ht_image_popup.style.width='60px';
					me._ht_image_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_image_popup);}, 550);
				}
			}
		}
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_image_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup.style.visibility=me._ht_image_popup.ggVisible?'inherit':'hidden';
					me._ht_image_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup.style.opacity == 0.0) { me._ht_image_popup.style.visibility="hidden"; } }, 405);
					me._ht_image_popup.style.opacity=0;
				}
			}
		}
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_popup_title=document.createElement('div');
		els=me._ht_image_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_image_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_title);
		el=me._ht_image_popup_img=document.createElement('div');
		els=me._ht_image_popup_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_popup_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_popup_img.ggSubElement.setAttribute('alt', player._(me._ht_image_popup_img.ggAltText));
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		}
		el.ggSetImage = function(img) {
			me._ht_image_popup_img.ggText_untranslated = img;
			me._ht_image_popup_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_popup_img.ggSubElement.style.width = '0px';
			me._ht_image_popup_img.ggSubElement.style.height = '0px';
			me._ht_image_popup_img.ggSubElement.src='';
			me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_popup_img.ggText != player._(me._ht_image_popup_img.ggText_untranslated)) {
				me._ht_image_popup_img.ggText = player._(me._ht_image_popup_img.ggText_untranslated);
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		player.addListener('changenode', function() {
			me._ht_image_popup_img.ggUpdateImagePlaceholder();
		});
		el.ggUpdateImagePlaceholder = function() {
			if (me._ht_image_popup_img.ggText != ""+player.getBasePath()+""+player._(me.hotspot.url)+"") {
				me._ht_image_popup_img.ggText=""+player.getBasePath()+""+player._(me.hotspot.url)+"";
				me._ht_image_popup_img.ggUpdateImage()
			}
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_popup_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_popup_img.clientWidth;
			var parentHeight = me._ht_image_popup_img.clientHeight;
			var img = me._ht_image_popup_img__img;
			var aspectRatioDiv = me._ht_image_popup_img.clientWidth / me._ht_image_popup_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._ht_image_popup_img.ggScrollbars || currentWidth < me._ht_image_popup_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_popup_img.scrollLeft=currentWidth / 2 - me._ht_image_popup_img.clientWidth / 2;
			}
			if (!me._ht_image_popup_img.ggScrollbars || currentHeight < me._ht_image_popup_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_popup_img.scrollTop=currentHeight / 2 - me._ht_image_popup_img.clientHeight / 2;
			}
		}
		me._ht_image_popup.appendChild(me._ht_image_popup_img);
		me._ht_image.appendChild(me._ht_image_popup);
		el=me._ht_image_popup_close=document.createElement('div');
		els=me._ht_image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTguMyA1LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2MtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy'+
			'4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6Ii8+Cjwvc3ZnPgo=';
		me._ht_image_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjNGZiNWMyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._ht_image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_popup_close.style.visibility=me._ht_image_popup_close.ggVisible?'inherit':'hidden';
					me._ht_image_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_popup_close.style.opacity == 0.0) { me._ht_image_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_image_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_image_popup_close.logicBlock_alpha();
		me._ht_image_popup_close.onclick=function (e) {
			player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_image_popup_img.style.transition='none';
			} else {
				me._ht_image_popup_img.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_img.style.opacity='0';
			me._ht_image_popup_img.style.visibility='hidden';
			me._ht_image_popup_img.ggSubElement.src='';
			if (player.transitionsDisabled) {
				me._ht_image_popup_title.style.transition='none';
			} else {
				me._ht_image_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_image_popup_title.style.opacity='0';
			me._ht_image_popup_title.style.visibility='hidden';
			me._ht_image.style.zIndex='-1';
		}
		me._ht_image_popup_close.onmouseenter=function (e) {
			me._ht_image_popup_close__img.style.visibility='hidden';
			me._ht_image_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_popup_close']=true;
		}
		me._ht_image_popup_close.onmouseleave=function (e) {
			me._ht_image_popup_close__img.style.visibility='inherit';
			me._ht_image_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_popup_close']=false;
		}
		me._ht_image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_popup_close);
		el=me._ht_image_tooltip=document.createElement('div');
		els=me._ht_image_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_image_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_tooltip.style.visibility=me._ht_image_tooltip.ggVisible?'inherit':'hidden';
					me._ht_image_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_image_tooltip.style.opacity == 0.0) { me._ht_image_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_image_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_tooltip);
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQoJLnN0M3tmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLDZoLTMuMmwtMS4yLTEuM0MxNy4yLDQuMiwxNi43LDQsMTYuMSw0aC00LjJjLTAuNiwwLTEuMSwwLjItMS41LDAuNkw5LjIsNkg2QzQuOSw2LDQsNi45LDQsOHYxMiYjeGE7JiN4OTsmI3g5O2MwLDEuMSwwLjksMiwyLDJoMTZjMS4xLDAsMi0wLjksMi0yVjhDMjQsNi45LDIzLjEsNiwyMiw2eiBNMTQsMTljLTIuOCwwLTUt'+
			'Mi4yLTUtNXMyLjItNSw1LTVzNSwyLjIsNSw1UzE2LjgsMTksMTQsMTl6Ii8+CiAgPGcgY2xhc3M9InN0MSI+CiAgIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNi4xLDRjMC42LDAsMS4xLDAuMiwxLjUsMC42TDE4LjgsNkgyMmMxLjEsMCwyLDAuOSwyLDJ2MTJjMCwxLjEtMC45LDItMiwySDZjLTEuMSwwLTItMC45LTItMlY4JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjEsMC45LTIsMi0yaDMuMmwxLjItMS40QzEwLjgsNC4yLDExLjMsNCwxMS45LDRIMTYuMSBNMTQsMTljMi44LDAsNS0yLjIsNS01cy0yLjItNS01LTVzLTUsMi4yLTUsNVMxMS4yLDE5LDE0LDE5IE0xNi4xLDEuOCYjeGE7JiN4OT'+
			'smI3g5OyYjeDk7aC00LjJjLTEuMiwwLTIuMywwLjUtMy4xLDEuNEw4LjIsMy44SDZDMy43LDMuOCwxLjgsNS43LDEuOCw4djEyYzAsMi4zLDEuOSw0LjIsNC4yLDQuMmgxNmMyLjMsMCw0LjItMS45LDQuMi00LjJWOCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMi4zLTEuOS00LjItNC4yLTQuMmgtMi4ybC0wLjYtMC42QzE4LjQsMi4zLDE3LjMsMS44LDE2LjEsMS44TDE2LjEsMS44eiBNMTQsMTYuOGMtMS41LDAtMi44LTEuMy0yLjgtMi44czEuMy0yLjgsMi44LTIuOCYjeGE7JiN4OTsmI3g5OyYjeDk7czIuOCwxLjMsMi44LDIuOFMxNS41LDE2LjgsMTQsMTYuOEwxNCwxNi44eiIvPgogIDwvZz4K'+
			'IDwvZz4KIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNCwxNi44Yy0xLjUsMC0yLjgtMS4zLTIuOC0yLjhzMS4zLTIuOCwyLjgtMi44czIuOCwxLjMsMi44LDIuOFMxNS41LDE2LjgsMTQsMTYuOEwxNCwxNi44eiIvPgo8L3N2Zz4K';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQoJLnN0M3tmaWxsOiM0ZmI1YzI7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLDZoLTMuMmwtMS4yLTEuM0MxNy4yLDQuMiwxNi43LDQsMTYuMSw0aC00LjJjLTAuNiwwLTEuMSwwLjItMS41LDAuNkw5LjIsNkg2QzQuOSw2LDQsNi45LDQsOHYxMiYjeGE7JiN4OTsmI3g5O2MwLDEuMSwwLjksMiwyLDJoMTZjMS4xLDAsMi0wLjksMi0yVjhDMjQsNi45LDIzLjEsNiwyMiw2eiBNMTQsMTljLTIuOCwwLTUt'+
			'Mi4yLTUtNXMyLjItNSw1LTVzNSwyLjIsNSw1UzE2LjgsMTksMTQsMTl6Ii8+CiAgPGcgY2xhc3M9InN0MSI+CiAgIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNi4xLDRjMC42LDAsMS4xLDAuMiwxLjUsMC42TDE4LjgsNkgyMmMxLjEsMCwyLDAuOSwyLDJ2MTJjMCwxLjEtMC45LDItMiwySDZjLTEuMSwwLTItMC45LTItMlY4JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjEsMC45LTIsMi0yaDMuMmwxLjItMS40QzEwLjgsNC4yLDExLjMsNCwxMS45LDRIMTYuMSBNMTQsMTljMi44LDAsNS0yLjIsNS01cy0yLjItNS01LTVzLTUsMi4yLTUsNVMxMS4yLDE5LDE0LDE5IE0xNi4xLDEuOCYjeGE7JiN4OT'+
			'smI3g5OyYjeDk7aC00LjJjLTEuMiwwLTIuMywwLjUtMy4xLDEuNEw4LjIsMy44SDZDMy43LDMuOCwxLjgsNS43LDEuOCw4djEyYzAsMi4zLDEuOSw0LjIsNC4yLDQuMmgxNmMyLjMsMCw0LjItMS45LDQuMi00LjJWOCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMi4zLTEuOS00LjItNC4yLTQuMmgtMi4ybC0wLjYtMC42QzE4LjQsMi4zLDE3LjMsMS44LDE2LjEsMS44TDE2LjEsMS44eiBNMTQsMTYuOGMtMS41LDAtMi44LTEuMy0yLjgtMi44czEuMy0yLjgsMi44LTIuOCYjeGE7JiN4OTsmI3g5OyYjeDk7czIuOCwxLjMsMi44LDIuOFMxNS41LDE2LjgsMTQsMTYuOEwxNCwxNi44eiIvPgogIDwvZz4K'+
			'IDwvZz4KIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xNCwxNi44Yy0xLjUsMC0yLjgtMS4zLTIuOC0yLjhzMS4zLTIuOCwyLjgtMi44czIuOCwxLjMsMi44LDIuOFMxNS41LDE2LjgsMTQsMTYuOEwxNCwxNi44eiIvPgo8L3N2Zz4K';
		me._ht_image_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_image_hotspots') !== null) && (player.getVariableValue('open_image_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_icon.style.transition='opacity 300ms ease 0ms';
				if (me._ht_image_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_image_icon.style.opacity == 0.0) { me._ht_image_icon.style.visibility="hidden"; } }, 305);
					me._ht_image_icon.style.opacity=0;
				}
				else {
					me._ht_image_icon.style.visibility=me._ht_image_icon.ggVisible?'inherit':'hidden';
					me._ht_image_icon.style.opacity=1;
				}
			}
		}
		me._ht_image_icon.logicBlock_alpha();
		me._ht_image_icon.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_image_hotspots', player.getVariableValue('open_image_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_img.style.transition='none';
				} else {
					me._ht_image_popup_img.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_img.style.opacity='1';
				me._ht_image_popup_img.style.visibility=me._ht_image_popup_img.ggVisible?'inherit':'hidden';
				me._ht_image_popup_img.ggSubElement.src=me._ht_image_popup_img.ggText;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_image_popup_title.style.transition='none';
				} else {
					me._ht_image_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_image_popup_title.style.opacity='1';
				me._ht_image_popup_title.style.visibility=me._ht_image_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
			}
		}
		me._ht_image_icon.onmouseenter=function (e) {
			me._ht_image_icon__img.style.visibility='hidden';
			me._ht_image_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon']=true;
		}
		me._ht_image_icon.onmouseleave=function (e) {
			me._ht_image_icon__img.style.visibility='inherit';
			me._ht_image_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon']=false;
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_icon);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		me._ht_image_popup.logicBlock_size();
		me._ht_image_popup.logicBlock_alpha();
		me._ht_image_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_image_popup_close']=false;
		me._ht_image_tooltip.logicBlock_alpha();
		me._ht_image_icon.logicBlock_alpha();
		me.elementMouseOver['ht_image_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_icon.logicBlock_alpha();
				player.setVariableValue('open_image_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_open_image_hotspots=function() {
				me._ht_image_popup.logicBlock_size();
				me._ht_image_popup.logicBlock_alpha();
				me._ht_image_popup_close.logicBlock_alpha();
				me._ht_image_tooltip.logicBlock_alpha();
				me._ht_image_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._ht_info_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._ht_info_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup=document.createElement('div');
		el.ggId="ht_info_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_info_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_info_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_info_popup.ggCurrentLogicStateSize == 0) {
					me._ht_info_popup.style.width='600px';
					me._ht_info_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_info_popup);}, 550);
				}
				else {
					me._ht_info_popup.style.width='60px';
					me._ht_info_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_info_popup);}, 550);
				}
			}
		}
		me._ht_info_popup.logicBlock_size();
		me._ht_info_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_info_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_popup.style.visibility=me._ht_info_popup.ggVisible?'inherit':'hidden';
					me._ht_info_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_popup.style.opacity == 0.0) { me._ht_info_popup.style.visibility="hidden"; } }, 405);
					me._ht_info_popup.style.opacity=0;
				}
			}
		}
		me._ht_info_popup.logicBlock_alpha();
		me._ht_info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup_text=document.createElement('div');
		el.ggId="ht_info_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 90px);';
		hs+='left : 30px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 60px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_popup_text_body=document.createElement('div');
		els=me._ht_info_popup_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_popup_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text noto_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height: 1.4';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._ht_info_popup_text_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_popup_text_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_popup_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_popup_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup_text.appendChild(me._ht_info_popup_text_body);
		el=me._ht_info_popup_text_headline=document.createElement('div');
		els=me._ht_info_popup_text_headline__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_popup_text_headline";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 26px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_info_popup_text_headline.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_popup_text_headline.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_popup_text_headline.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_popup_text_headline.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_text_headline.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_popup_text.appendChild(me._ht_info_popup_text_headline);
		me._ht_info_popup.appendChild(me._ht_info_popup_text);
		me._ht_info.appendChild(me._ht_info_popup);
		el=me._ht_info_popup_close=document.createElement('div');
		els=me._ht_info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTguMyA1LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2MtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDAtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy'+
			'4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6Ii8+Cjwvc3ZnPgo=';
		me._ht_info_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjNGZiNWMyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxOHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._ht_info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_popup_close.style.visibility=me._ht_info_popup_close.ggVisible?'inherit':'hidden';
					me._ht_info_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_popup_close.style.opacity == 0.0) { me._ht_info_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_info_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_info_popup_close.logicBlock_alpha();
		me._ht_info_popup_close.onclick=function (e) {
			player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_info_popup_text.style.transition='none';
			} else {
				me._ht_info_popup_text.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_info_popup_text.style.opacity='0';
			me._ht_info_popup_text.style.visibility='hidden';
			me._ht_info.style.zIndex='-1';
		}
		me._ht_info_popup_close.onmouseenter=function (e) {
			me._ht_info_popup_close__img.style.visibility='hidden';
			me._ht_info_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_popup_close']=true;
		}
		me._ht_info_popup_close.onmouseleave=function (e) {
			me._ht_info_popup_close__img.style.visibility='inherit';
			me._ht_info_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_popup_close']=false;
		}
		me._ht_info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_popup_close);
		el=me._ht_info_tooltip=document.createElement('div');
		els=me._ht_info_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_info_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_tooltip.style.visibility=me._ht_info_tooltip.ggVisible?'inherit':'hidden';
					me._ht_info_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_tooltip.style.opacity == 0.0) { me._ht_info_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_info_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_info_tooltip.logicBlock_alpha();
		me._ht_info_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_tooltip);
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LDRDOC41LDQsNCw4LjUsNCwxNHM0LjUsMTAsMTAsMTBzMTAtNC41LDEwLTEwUzE5LjUsNCwxNCw0eiBNMTQsMTljLTAuNiwwLTEtMC41LTEtMXYtNGMwLTAuNiwwLjQtMSwxLTEmI3hhOyYjeDk7JiN4OTtzMSwwLjQsMSwxdjRDMTUsMTguNSwxNC42LDE5LDE0LDE5eiBNMTUsMTFoLTJWOWgyVjExeiIvPgogIDxnIGNsYXNzPSJzdDEiPgogICA8cGF0aCBjbGFz'+
			'cz0ic3QyIiBkPSJNMTQsNGM1LjUsMCwxMCw0LjUsMTAsMTBzLTQuNSwxMC0xMCwxMFM0LDE5LjUsNCwxNFM4LjUsNCwxNCw0IE0xMywxMWgyVjloLTJWMTEgTTE0LDE5YzAuNiwwLDEtMC41LDEtMXYtNCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC42LTAuNC0xLTEtMXMtMSwwLjQtMSwxdjRDMTMsMTguNSwxMy40LDE5LDE0LDE5IE0xNCwxLjhDNy4zLDEuOCwxLjgsNy4zLDEuOCwxNFM3LjMsMjYuMiwxNCwyNi4yUzI2LjIsMjAuNywyNi4yLDE0JiN4YTsmI3g5OyYjeDk7JiN4OTtTMjAuNywxLjgsMTQsMS44TDE0LDEuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LDRDOC41LDQsNCw4LjUsNCwxNHM0LjUsMTAsMTAsMTBzMTAtNC41LDEwLTEwUzE5LjUsNCwxNCw0eiBNMTQsMTljLTAuNiwwLTEtMC41LTEtMXYtNGMwLTAuNiwwLjQtMSwxLTEmI3hhOyYjeDk7JiN4OTtzMSwwLjQsMSwxdjRDMTUsMTguNSwxNC42LDE5LDE0LDE5eiBNMTUsMTFoLTJWOWgyVjExeiIvPgogIDxnIGNsYXNzPSJzdDEiPgogICA8cGF0aCBjbGFz'+
			'cz0ic3QyIiBkPSJNMTQsNGM1LjUsMCwxMCw0LjUsMTAsMTBzLTQuNSwxMC0xMCwxMFM0LDE5LjUsNCwxNFM4LjUsNCwxNCw0IE0xMywxMWgyVjloLTJWMTEgTTE0LDE5YzAuNiwwLDEtMC41LDEtMXYtNCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC42LTAuNC0xLTEtMXMtMSwwLjQtMSwxdjRDMTMsMTguNSwxMy40LDE5LDE0LDE5IE0xNCwxLjhDNy4zLDEuOCwxLjgsNy4zLDEuOCwxNFM3LjMsMjYuMiwxNCwyNi4yUzI2LjIsMjAuNywyNi4yLDE0JiN4YTsmI3g5OyYjeDk7JiN4OTtTMjAuNywxLjgsMTQsMS44TDE0LDEuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_info_hotspots') !== null) && (player.getVariableValue('open_info_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_icon.style.transition='opacity 300ms ease 0ms';
				if (me._ht_info_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_info_icon.style.opacity == 0.0) { me._ht_info_icon.style.visibility="hidden"; } }, 305);
					me._ht_info_icon.style.opacity=0;
				}
				else {
					me._ht_info_icon.style.visibility=me._ht_info_icon.ggVisible?'inherit':'hidden';
					me._ht_info_icon.style.opacity=1;
				}
			}
		}
		me._ht_info_icon.logicBlock_alpha();
		me._ht_info_icon.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_info_hotspots', player.getVariableValue('open_info_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_info_popup_text.style.transition='none';
				} else {
					me._ht_info_popup_text.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_info_popup_text.style.opacity='1';
				me._ht_info_popup_text.style.visibility=me._ht_info_popup_text.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
		}
		me._ht_info_icon.onmouseenter=function (e) {
			me._ht_info_icon__img.style.visibility='hidden';
			me._ht_info_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_icon']=true;
		}
		me._ht_info_icon.onmouseleave=function (e) {
			me._ht_info_icon__img.style.visibility='inherit';
			me._ht_info_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_icon']=false;
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_icon);
		me._ht_info.logicBlock_visible();
		me.elementMouseOver['ht_info']=false;
		me._ht_info_popup.logicBlock_size();
		me._ht_info_popup.logicBlock_alpha();
		me._ht_info_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_info_popup_close']=false;
		me._ht_info_tooltip.logicBlock_alpha();
		me._ht_info_icon.logicBlock_alpha();
		me.elementMouseOver['ht_info_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_icon.logicBlock_alpha();
				player.setVariableValue('open_info_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_open_info_hotspots=function() {
				me._ht_info_popup.logicBlock_size();
				me._ht_info_popup.logicBlock_alpha();
				me._ht_info_popup_close.logicBlock_alpha();
				me._ht_info_tooltip.logicBlock_alpha();
				me._ht_info_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_info.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._pdf_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._pdf_popup_title.ggUpdateText();
				skin._pdf_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._pdf_popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_161 = setInterval(() => {
					if (skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_161);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_162 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_162);
					}
				}, 50);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._ht_pdf_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pdf']=false;
			me._ht_pdf_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_tooltip=document.createElement('div');
		els=me._ht_pdf_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_pdf_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_pdf_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_pdf_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_pdf_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_pdf_tooltip.style.visibility=me._ht_pdf_tooltip.ggVisible?'inherit':'hidden';
					me._ht_pdf_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_pdf_tooltip.style.opacity == 0.0) { me._ht_pdf_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_pdf_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_pdf_tooltip.logicBlock_alpha();
		me._ht_pdf_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_tooltip);
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LjYsNC42QzE2LjIsNC4yLDE1LjcsNCwxNS4yLDRIOEM2LjksNCw2LDQuOSw2LDZ2MTZjMCwxLjEsMC45LDIsMiwyaDEyYzEuMSwwLDItMC45LDItMlYxMC44JiN4YTsmI3g5OyYjeDk7YzAtMC41LTAuMi0xLTAuNi0xLjRMMTYuNiw0LjZ6IE0xNywyMGgtNmMtMC42LDAtMS0wLjUtMS0xczAuNC0xLDEtMWg2YzAuNiwwLDEsMC41LDEsMVMxNy42LDIwLDE3LDIweiBNMTcsMTZoLTYmI3hhOyYjeDk7'+
			'JiN4OTtjLTAuNiwwLTEtMC40LTEtMXMwLjQtMSwxLTFoNmMwLjYsMCwxLDAuNCwxLDFTMTcuNiwxNiwxNywxNnogTTE1LDEwVjUuNWw1LjUsNS41SDE2QzE1LjQsMTEsMTUsMTAuNSwxNSwxMHoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggZD0iTTE1LjIsNGMwLjUsMCwxLDAuMiwxLjQsMC42bDQuOCw0LjhjMC40LDAuNCwwLjYsMC45LDAuNiwxLjRWMjJjMCwxLjEtMC45LDItMiwySDhjLTEuMSwwLTItMC45LTItMlY2YzAtMS4xLDAuOS0yLDItMiYjeGE7JiN4OTsmI3g5OyYjeDk7SDE1LjIgTTE2LDExaDQuNUwxNSw1LjVWMTBDMTUsMTAuNiwxNS40LDExLDE2LDExIE0xMSwxNmg2Yz'+
			'AuNiwwLDEtMC40LDEtMXMtMC40LTEtMS0xaC02Yy0wLjYsMC0xLDAuNC0xLDFTMTAuNCwxNiwxMSwxNiBNMTEsMjAmI3hhOyYjeDk7JiN4OTsmI3g5O2g2YzAuNiwwLDEtMC41LDEtMWMwLTAuNi0wLjQtMS0xLTFoLTZjLTAuNiwwLTEsMC40LTEsMUMxMCwxOS41LDEwLjQsMjAsMTEsMjAgTTE1LjIsMS44SDhDNS43LDEuOCwzLjgsMy43LDMuOCw2djE2JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDEyYzIuMywwLDQuMi0xLjksNC4yLTQuMlYxMC44YzAtMS4xLTAuNS0yLjItMS4zLTNMMTguMSwzQzE3LjMsMi4yLDE2LjMsMS44LDE1LjIsMS44TDE1LjIsMS44eiIv'+
			'PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_pdf_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LjYsNC42QzE2LjIsNC4yLDE1LjcsNCwxNS4yLDRIOEM2LjksNCw2LDQuOSw2LDZ2MTZjMCwxLjEsMC45LDIsMiwyaDEyYzEuMSwwLDItMC45LDItMlYxMC44JiN4YTsmI3g5OyYjeDk7YzAtMC41LTAuMi0xLTAuNi0xLjRMMTYuNiw0LjZ6IE0xNywyMGgtNmMtMC42LDAtMS0wLjUtMS0xczAuNC0xLDEtMWg2YzAuNiwwLDEsMC41LDEsMVMxNy42LDIwLDE3LDIweiBNMTcsMTZoLTYmI3hhOyYjeDk7'+
			'JiN4OTtjLTAuNiwwLTEtMC40LTEtMXMwLjQtMSwxLTFoNmMwLjYsMCwxLDAuNCwxLDFTMTcuNiwxNiwxNywxNnogTTE1LDEwVjUuNWw1LjUsNS41SDE2QzE1LjQsMTEsMTUsMTAuNSwxNSwxMHoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggZD0iTTE1LjIsNGMwLjUsMCwxLDAuMiwxLjQsMC42bDQuOCw0LjhjMC40LDAuNCwwLjYsMC45LDAuNiwxLjRWMjJjMCwxLjEtMC45LDItMiwySDhjLTEuMSwwLTItMC45LTItMlY2YzAtMS4xLDAuOS0yLDItMiYjeGE7JiN4OTsmI3g5OyYjeDk7SDE1LjIgTTE2LDExaDQuNUwxNSw1LjVWMTBDMTUsMTAuNiwxNS40LDExLDE2LDExIE0xMSwxNmg2Yz'+
			'AuNiwwLDEtMC40LDEtMXMtMC40LTEtMS0xaC02Yy0wLjYsMC0xLDAuNC0xLDFTMTAuNCwxNiwxMSwxNiBNMTEsMjAmI3hhOyYjeDk7JiN4OTsmI3g5O2g2YzAuNiwwLDEtMC41LDEtMWMwLTAuNi0wLjQtMS0xLTFoLTZjLTAuNiwwLTEsMC40LTEsMUMxMCwxOS41LDEwLjQsMjAsMTEsMjAgTTE1LjIsMS44SDhDNS43LDEuOCwzLjgsMy43LDMuOCw2djE2JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDEyYzIuMywwLDQuMi0xLjksNC4yLTQuMlYxMC44YzAtMS4xLTAuNS0yLjItMS4zLTNMMTguMSwzQzE3LjMsMi4yLDE2LjMsMS44LDE1LjIsMS44TDE1LjIsMS44eiIv'+
			'PgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_pdf_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_icon.style.transition='';
				if (me._ht_pdf_icon.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_icon.style.visibility="hidden";
					me._ht_pdf_icon.ggVisible=false;
				}
				else {
					me._ht_pdf_icon.style.visibility=(Number(me._ht_pdf_icon.style.opacity)>0||!me._ht_pdf_icon.style.opacity)?'inherit':'hidden';
					me._ht_pdf_icon.ggVisible=true;
				}
			}
		}
		me._ht_pdf_icon.logicBlock_visible();
		me._ht_pdf_icon.onmouseenter=function (e) {
			me._ht_pdf_icon__img.style.visibility='hidden';
			me._ht_pdf_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_pdf_icon']=true;
		}
		me._ht_pdf_icon.onmouseleave=function (e) {
			me._ht_pdf_icon__img.style.visibility='inherit';
			me._ht_pdf_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_pdf_icon']=false;
		}
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_icon);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_tooltip.logicBlock_alpha();
		me._ht_pdf_icon.logicBlock_visible();
		me.elementMouseOver['ht_pdf_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_tooltip.logicBlock_alpha();
				me._ht_pdf_icon.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_pdf.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_popup=document.createElement('div');
		el.ggId="ht_video_file_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_file_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_file_popup.style.width='600px';
					me._ht_video_file_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
				else {
					me._ht_video_file_popup.style.width='60px';
					me._ht_video_file_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_file_popup);}, 550);
				}
			}
		}
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_file_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup.style.visibility=me._ht_video_file_popup.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup.style.opacity == 0.0) { me._ht_video_file_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_file_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup.logicBlock_alpha();
		me._ht_video_file_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller=document.createElement('div');
		el.ggId="video_file_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_file_controller_seekbar=document.createElement('div');
		me._video_file_controller_seekbar__playhead=document.createElement('div');
		me._video_file_controller_seekbar.mediaEl = null;
		me._video_file_controller_seekbar.fromBufferSource = false;
		me._video_file_controller_seekbar.ggMediaId = 'ht_video_file_popup_video';
		el.ggId="video_file_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_file_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_file_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_file_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_file_controller_seekbar || e.target == me._video_file_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_file_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_file_controller_seekbar.clientWidth) * me._video_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_file_controller_seekbar.onmousedown = me._video_file_controller_seekbar.ontouchstart = me._video_file_controller_seekbar.mouseTouchHandling;
		me._video_file_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_file_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_file_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_file_controller_seekbar.ggConnected = false;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.removeEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.removeEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_file_controller_seekbar.mediaEl = player.getMediaObject(me._video_file_controller_seekbar.ggMediaId);
			if (me._video_file_controller_seekbar.mediaEl) {
				me._video_file_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_file_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('ht_video_file_popup_video');
				me._video_file_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_file_controller_seekbar.mediaEl != null) {
				me._video_file_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_file_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_file_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_file_controller_seekbar.mediaEl.id) me._video_file_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_file_controller_seekbar.mediaEl.addEventListener('progress', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('canplay', me._video_file_controller_seekbar.updatePlayback);
					me._video_file_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_file_controller_seekbar.updatePlayback);
					if (me._video_file_controller_seekbar.ggActivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('play', me._video_file_controller_seekbar.ggActivate);
					}
					if (me._video_file_controller_seekbar.ggDeactivate) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggDeactivate);
						me._video_file_controller_seekbar.mediaEl.addEventListener('pause', me._video_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_file_controller_seekbar.ggMediaEnded) {
						me._video_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_file_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_file_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_file_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_file_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_file_controller_seekbar.ggConnected) return;
			if (me._video_file_controller_seekbar.mediaEl != null) {
				if (me._video_file_controller_seekbar.mediaEl.readyState || (me._video_file_controller_seekbar.fromBufferSource && args && args['id'] == me._video_file_controller_seekbar.mediaEl.id)) {
					if (me._video_file_controller_seekbar.fromBufferSource) {
						var percent = me._video_file_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_file_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_file_controller_seekbar.mediaEl.currentTime / me._video_file_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_file_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_file_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_file_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_file_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_file_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_file_controller_seekbar.mediaEl.buffered.start(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_file_controller_seekbar.mediaEl.buffered.end(i) / me._video_file_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_file_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_file_controller_seekbar.appendChild(me._video_file_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_file_controller_seekbar.setAttribute('style', hs);
		me._video_file_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_file_controller_seekbar.ggIsActive=function() {
			if (me._video_file_controller_seekbar.mediaEl != null) {
				return (me._video_file_controller_seekbar.mediaEl.paused == false && me._video_file_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_seekbar.ggActivate=function () {
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggDeactivate=function () {
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
		}
		me._video_file_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_file_controller_seekbar.updatePlayback();
		}
		me._video_file_controller.appendChild(me._video_file_controller_seekbar);
		el=me._video_file_controller_button_pause=document.createElement('div');
		els=me._video_file_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_file_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_pause.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("ht_video_file_popup_video");
			}
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility='hidden';
			me._video_file_controller_button_pause.ggVisible=false;
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility=(Number(me._video_file_controller_button_play.style.opacity)>0||!me._video_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_play.ggVisible=true;
		}
		me._video_file_controller_button_pause.onmouseenter=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='hidden';
			me._video_file_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_pause']=true;
		}
		me._video_file_controller_button_pause.onmouseleave=function (e) {
			me._video_file_controller_button_pause__img.style.visibility='inherit';
			me._video_file_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_pause']=false;
		}
		me._video_file_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_pause);
		el=me._video_file_controller_button_play=document.createElement('div');
		els=me._video_file_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_file_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_file_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_file_controller_button_play.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_file_popup_video.ggApiPlayer.playVideo();
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_file_popup_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_file_popup_video","1");
			}
			me._video_file_controller_button_play.style.transition='none';
			me._video_file_controller_button_play.style.visibility='hidden';
			me._video_file_controller_button_play.ggVisible=false;
			me._video_file_controller_button_pause.style.transition='none';
			me._video_file_controller_button_pause.style.visibility=(Number(me._video_file_controller_button_pause.style.opacity)>0||!me._video_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_file_controller_button_pause.ggVisible=true;
		}
		me._video_file_controller_button_play.onmouseenter=function (e) {
			me._video_file_controller_button_play__img.style.visibility='hidden';
			me._video_file_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_controller_button_play']=true;
		}
		me._video_file_controller_button_play.onmouseleave=function (e) {
			me._video_file_controller_button_play__img.style.visibility='inherit';
			me._video_file_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_controller_button_play']=false;
		}
		me._video_file_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_file_controller.appendChild(me._video_file_controller_button_play);
		me._ht_video_file_popup.appendChild(me._video_file_controller);
		el=me._ht_video_file_popup_title=document.createElement('div');
		els=me._ht_video_file_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_file_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_title);
		el=me._ht_video_file_popup_video=document.createElement('div');
		me._ht_video_file_popup_video.seekbars = [];
		me._ht_video_file_popup_video.seekbars.push('video_file_controller_seekbar');
		me._ht_video_file_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_file_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_file_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_file_popup_video.hasChildNodes()) {
				me._ht_video_file_popup_video.removeChild(me._ht_video_file_popup_video.lastChild);
			}
			if (me._ht_video_file_popup_video__vid) {
				me._ht_video_file_popup_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_file_popup_video.ggVideoNotLoaded == false && me._ht_video_file_popup_video.ggDeactivate && player.isPlaying('ht_video_file_popup_video')) { me._ht_video_file_popup_video.ggDeactivate(); }
				me._ht_video_file_popup_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_file_popup_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_file_popup_video.ggVideoNotLoaded = false;
			me._ht_video_file_popup_video__vid=document.createElement('video');
			me._ht_video_file_popup_video__vid.className='ggskin ggskin_video';
			me._ht_video_file_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_file_popup_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_file_popup_video__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_file_popup_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_file_popup_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_file_popup_video__vid.setAttribute('autoplay', '');
			me._ht_video_file_popup_video__source=document.createElement('source');
			me._ht_video_file_popup_video__source.setAttribute('src', media);
			me._ht_video_file_popup_video__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_file_popup_video__vid.setAttribute('style', ';');
			me._ht_video_file_popup_video__vid.style.outline = 'none';
			me._ht_video_file_popup_video__vid.appendChild(me._ht_video_file_popup_video__source);
			me._ht_video_file_popup_video.appendChild(me._ht_video_file_popup_video__vid);
			var videoEl = player.registerVideoElement('ht_video_file_popup_video', me._ht_video_file_popup_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_file_popup_video', 0.0);
			notifySeekbars();
			me._ht_video_file_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_file_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_video.ggIsActive=function() {
			if (me._ht_video_file_popup_video__vid != null) {
				return (me._ht_video_file_popup_video__vid.paused == false && me._ht_video_file_popup_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_popup_video.style.transition='';
				if (me._ht_video_file_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_popup_video.style.visibility=(Number(me._ht_video_file_popup_video.style.opacity)>0||!me._ht_video_file_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
						me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
					}
					me._ht_video_file_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_file_popup_video.style.visibility="hidden";
					me._ht_video_file_popup_video.ggInitMedia('');
					me._ht_video_file_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.onclick=function (e) {
			if (me._ht_video_file_popup_video.ggApiPlayer) {
				if (me._ht_video_file_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_file_popup_video.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_file_popup_video.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_file_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_file_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_file_popup_video.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_file_popup_video.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_file_popup_video.ggApiPlayer.play();
						} else {
							me._ht_video_file_popup_video.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_file_popup_video","1");
			}
		}
		me._ht_video_file_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_popup.appendChild(me._ht_video_file_popup_video);
		me._ht_video_file.appendChild(me._ht_video_file_popup);
		el=me._ht_video_file_popup_close=document.createElement('div');
		els=me._ht_video_file_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_file_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_popup_close.style.visibility=me._ht_video_file_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_file_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_popup_close.style.opacity == 0.0) { me._ht_video_file_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_file_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_file_popup_close.logicBlock_alpha();
		me._ht_video_file_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_video.style.transition='none';
			} else {
				me._ht_video_file_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_video.style.opacity='0';
			me._ht_video_file_popup_video.style.visibility='hidden';
			me._ht_video_file_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_file_popup_title.style.transition='none';
			} else {
				me._ht_video_file_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_file_popup_title.style.opacity='0';
			me._ht_video_file_popup_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_file_controller.style.transition='none';
			} else {
				me._video_file_controller.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_controller.style.opacity='0';
			me._video_file_controller.style.visibility='hidden';
			me._ht_video_file.style.zIndex='-1';
		}
		me._ht_video_file_popup_close.onmouseenter=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='hidden';
			me._ht_video_file_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_popup_close']=true;
		}
		me._ht_video_file_popup_close.onmouseleave=function (e) {
			me._ht_video_file_popup_close__img.style.visibility='inherit';
			me._ht_video_file_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_popup_close']=false;
		}
		me._ht_video_file_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_popup_close);
		el=me._ht_video_file_tooltip=document.createElement('div');
		els=me._ht_video_file_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_file_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_file_tooltip.style.visibility=me._ht_video_file_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_file_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_file_tooltip.style.opacity == 0.0) { me._ht_video_file_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_file_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_tooltip);
		el=me._ht_video_file_icon=document.createElement('div');
		els=me._ht_video_file_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_file_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_file_hotspots') !== null) && (player.getVariableValue('open_video_file_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_file_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_file_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_file_icon.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_file_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_file_icon.style.opacity == 0.0) { me._ht_video_file_icon.style.visibility="hidden"; } }, 305);
					me._ht_video_file_icon.style.opacity=0;
				}
				else {
					me._ht_video_file_icon.style.visibility=me._ht_video_file_icon.ggVisible?'inherit':'hidden';
					me._ht_video_file_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_file_icon.logicBlock_alpha();
		me._ht_video_file_icon.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_file_hotspots', player.getVariableValue('open_video_file_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_video.style.transition='none';
				} else {
					me._ht_video_file_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_video.style.opacity='1';
				me._ht_video_file_popup_video.style.visibility=me._ht_video_file_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_file_popup_video.ggVideoNotLoaded) {
					me._ht_video_file_popup_video.ggInitMedia(me._ht_video_file_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_file_popup_title.style.transition='none';
				} else {
					me._ht_video_file_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_file_popup_title.style.opacity='1';
				me._ht_video_file_popup_title.style.visibility=me._ht_video_file_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._video_file_controller.style.transition='none';
				} else {
					me._video_file_controller.style.transition='all 200ms ease-out 500ms';
				}
				me._video_file_controller.style.opacity='1';
				me._video_file_controller.style.visibility=me._video_file_controller.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file_popup_video.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_file.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
		}
		me._ht_video_file_icon.onmouseenter=function (e) {
			me._ht_video_file_icon__img.style.visibility='hidden';
			me._ht_video_file_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_icon']=true;
		}
		me._ht_video_file_icon.onmouseleave=function (e) {
			me._ht_video_file_icon__img.style.visibility='inherit';
			me._ht_video_file_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_icon']=false;
		}
		me._ht_video_file_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_icon);
		me._ht_video_file.logicBlock_visible();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_popup.logicBlock_size();
		me._ht_video_file_popup.logicBlock_alpha();
		me.elementMouseOver['video_file_controller_button_pause']=false;
		me.elementMouseOver['video_file_controller_button_play']=false;
		me._ht_video_file_popup_video.logicBlock_visible();
		me._ht_video_file_popup_video.ggVideoSource = 'media/';
		me._ht_video_file_popup_video.ggVideoNotLoaded = true;
		me._ht_video_file_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_popup_close']=false;
		me._ht_video_file_tooltip.logicBlock_alpha();
		me._ht_video_file_icon.logicBlock_alpha();
		me.elementMouseOver['ht_video_file_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._video_file_controller_seekbar.ggConnectToMediaEl();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_icon.logicBlock_alpha();
				player.setVariableValue('open_video_file_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_open_video_file_hotspots=function() {
				me._ht_video_file_popup.logicBlock_size();
				me._ht_video_file_popup.logicBlock_alpha();
				me._ht_video_file_popup_video.logicBlock_visible();
				me._ht_video_file_popup_close.logicBlock_alpha();
				me._ht_video_file_tooltip.logicBlock_alpha();
				me._ht_video_file_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._ht_video_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._ht_video_url_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_popup=document.createElement('div');
		el.ggId="ht_video_url_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_url_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_url_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_url_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_url_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_url_popup.style.width='600px';
					me._ht_video_url_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_popup);}, 550);
				}
				else {
					me._ht_video_url_popup.style.width='60px';
					me._ht_video_url_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_url_popup);}, 550);
				}
			}
		}
		me._ht_video_url_popup.logicBlock_size();
		me._ht_video_url_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_url_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_popup.style.visibility=me._ht_video_url_popup.ggVisible?'inherit':'hidden';
					me._ht_video_url_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_popup.style.opacity == 0.0) { me._ht_video_url_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_url_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_url_popup.logicBlock_alpha();
		me._ht_video_url_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_controller=document.createElement('div');
		el.ggId="video_url_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_url_controller_seekbar=document.createElement('div');
		me._video_url_controller_seekbar__playhead=document.createElement('div');
		me._video_url_controller_seekbar.mediaEl = null;
		me._video_url_controller_seekbar.fromBufferSource = false;
		me._video_url_controller_seekbar.ggMediaId = 'ht_video_url_popup_video';
		el.ggId="video_url_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_url_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_url_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_url_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_url_controller_seekbar || e.target == me._video_url_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_url_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_url_controller_seekbar.clientWidth) * me._video_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_url_controller_seekbar.onmousedown = me._video_url_controller_seekbar.ontouchstart = me._video_url_controller_seekbar.mouseTouchHandling;
		me._video_url_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_url_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_url_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_url_controller_seekbar.ggConnected = false;
			}
			if (me._video_url_controller_seekbar.mediaEl != null) {
				if (me._video_url_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_url_controller_seekbar.mediaEl.removeEventListener('progress', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('play', me._video_url_controller_seekbar.ggActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_url_controller_seekbar.ggDeactivate);
						me._video_url_controller_seekbar.mediaEl.removeEventListener('pause', me._video_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_url_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_url_controller_seekbar.mediaEl = player.getMediaObject(me._video_url_controller_seekbar.ggMediaId);
			if (me._video_url_controller_seekbar.mediaEl) {
				me._video_url_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_url_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('ht_video_url_popup_video');
				me._video_url_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_url_controller_seekbar.mediaEl != null) {
				me._video_url_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_url_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_url_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_url_controller_seekbar.mediaEl.id) me._video_url_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_url_controller_seekbar.mediaEl.addEventListener('progress', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.addEventListener('canplay', me._video_url_controller_seekbar.updatePlayback);
					me._video_url_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_url_controller_seekbar.updatePlayback);
					if (me._video_url_controller_seekbar.ggActivate) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('play', me._video_url_controller_seekbar.ggActivate);
					}
					if (me._video_url_controller_seekbar.ggDeactivate) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_url_controller_seekbar.ggDeactivate);
						me._video_url_controller_seekbar.mediaEl.addEventListener('pause', me._video_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_url_controller_seekbar.ggMediaEnded) {
						me._video_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_url_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_url_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_url_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_url_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_url_controller_seekbar.ggConnected) return;
			if (me._video_url_controller_seekbar.mediaEl != null) {
				if (me._video_url_controller_seekbar.mediaEl.readyState || (me._video_url_controller_seekbar.fromBufferSource && args && args['id'] == me._video_url_controller_seekbar.mediaEl.id)) {
					if (me._video_url_controller_seekbar.fromBufferSource) {
						var percent = me._video_url_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_url_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_url_controller_seekbar.mediaEl.currentTime / me._video_url_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_url_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_url_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_url_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_url_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_url_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_url_controller_seekbar.mediaEl.buffered.start(i) / me._video_url_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_url_controller_seekbar.mediaEl.buffered.end(i) / me._video_url_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_url_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_url_controller_seekbar.appendChild(me._video_url_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_url_controller_seekbar.setAttribute('style', hs);
		me._video_url_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_url_controller_seekbar.ggIsActive=function() {
			if (me._video_url_controller_seekbar.mediaEl != null) {
				return (me._video_url_controller_seekbar.mediaEl.paused == false && me._video_url_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_seekbar.ggActivate=function () {
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility=(Number(me._video_url_controller_button_pause.style.opacity)>0||!me._video_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_pause.ggVisible=true;
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility='hidden';
			me._video_url_controller_button_play.ggVisible=false;
		}
		me._video_url_controller_seekbar.ggDeactivate=function () {
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility=(Number(me._video_url_controller_button_play.style.opacity)>0||!me._video_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_play.ggVisible=true;
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility='hidden';
			me._video_url_controller_button_pause.ggVisible=false;
		}
		me._video_url_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_url_controller_seekbar.updatePlayback();
		}
		me._video_url_controller.appendChild(me._video_url_controller_seekbar);
		el=me._video_url_controller_button_pause=document.createElement('div');
		els=me._video_url_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_url_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_url_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_button_pause.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_url_popup_video.ggApiPlayer.pauseVideo();
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_url_popup_video.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("ht_video_url_popup_video");
			}
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility='hidden';
			me._video_url_controller_button_pause.ggVisible=false;
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility=(Number(me._video_url_controller_button_play.style.opacity)>0||!me._video_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_play.ggVisible=true;
		}
		me._video_url_controller_button_pause.onmouseenter=function (e) {
			me._video_url_controller_button_pause__img.style.visibility='hidden';
			me._video_url_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_controller_button_pause']=true;
		}
		me._video_url_controller_button_pause.onmouseleave=function (e) {
			me._video_url_controller_button_pause__img.style.visibility='inherit';
			me._video_url_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_controller_button_pause']=false;
		}
		me._video_url_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_controller.appendChild(me._video_url_controller_button_pause);
		el=me._video_url_controller_button_play=document.createElement('div');
		els=me._video_url_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMThweCI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_url_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRmYjVjMjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_url_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._video_url_controller_button_play.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._ht_video_url_popup_video.ggApiPlayer.playVideo();
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					me._ht_video_url_popup_video.ggApiPlayer.play();
				}
			} else {
				player.playSound("ht_video_url_popup_video","1");
			}
			me._video_url_controller_button_play.style.transition='none';
			me._video_url_controller_button_play.style.visibility='hidden';
			me._video_url_controller_button_play.ggVisible=false;
			me._video_url_controller_button_pause.style.transition='none';
			me._video_url_controller_button_pause.style.visibility=(Number(me._video_url_controller_button_pause.style.opacity)>0||!me._video_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_url_controller_button_pause.ggVisible=true;
		}
		me._video_url_controller_button_play.onmouseenter=function (e) {
			me._video_url_controller_button_play__img.style.visibility='hidden';
			me._video_url_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_controller_button_play']=true;
		}
		me._video_url_controller_button_play.onmouseleave=function (e) {
			me._video_url_controller_button_play__img.style.visibility='inherit';
			me._video_url_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_controller_button_play']=false;
		}
		me._video_url_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_url_controller.appendChild(me._video_url_controller_button_play);
		me._ht_video_url_popup.appendChild(me._video_url_controller);
		el=me._ht_video_url_popup_title=document.createElement('div');
		els=me._ht_video_url_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_url_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_popup.appendChild(me._ht_video_url_popup_title);
		el=me._ht_video_url_popup_video=document.createElement('div');
		me._ht_video_url_popup_video.seekbars = [];
		me._ht_video_url_popup_video.seekbars.push('video_url_controller_seekbar');
		me._ht_video_url_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_url_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_url_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_url_popup_video.hasChildNodes()) {
				me._ht_video_url_popup_video.removeChild(me._ht_video_url_popup_video.lastChild);
			}
			if (me._ht_video_url_popup_video__vid) {
				me._ht_video_url_popup_video__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_url_popup_video.ggVideoNotLoaded == false && me._ht_video_url_popup_video.ggDeactivate && player.isPlaying('ht_video_url_popup_video')) { me._ht_video_url_popup_video.ggDeactivate(); }
				me._ht_video_url_popup_video.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('ht_video_url_popup_video');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._ht_video_url_popup_video.ggVideoNotLoaded = false;
			me._ht_video_url_popup_video__vid=document.createElement('video');
			me._ht_video_url_popup_video__vid.className='ggskin ggskin_video';
			me._ht_video_url_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_url_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_url_popup_video__vid.setAttribute('crossOrigin', 'anonymous');
			me._ht_video_url_popup_video__vid.setAttribute('controlsList', 'nodownload');
			me._ht_video_url_popup_video__vid.setAttribute('disablepictureinpicture', 'true');
			me._ht_video_url_popup_video__vid.setAttribute('oncontextmenu', 'return false;');
			me._ht_video_url_popup_video__vid.setAttribute('autoplay', '');
			me._ht_video_url_popup_video__source=document.createElement('source');
			me._ht_video_url_popup_video__source.setAttribute('src', media);
			me._ht_video_url_popup_video__vid.setAttribute('playsinline', 'playsinline');
			me._ht_video_url_popup_video__vid.setAttribute('style', ';');
			me._ht_video_url_popup_video__vid.style.outline = 'none';
			me._ht_video_url_popup_video__vid.appendChild(me._ht_video_url_popup_video__source);
			me._ht_video_url_popup_video.appendChild(me._ht_video_url_popup_video__vid);
			var videoEl = player.registerVideoElement('ht_video_url_popup_video', me._ht_video_url_popup_video__vid);
			videoEl.autoplay = true;
			player.changeVolume('ht_video_url_popup_video', 0.0);
			notifySeekbars();
			me._ht_video_url_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_url_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup_video.ggIsActive=function() {
			if (me._ht_video_url_popup_video__vid != null) {
				return (me._ht_video_url_popup_video__vid.paused == false && me._ht_video_url_popup_video__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_popup_video.style.transition='';
				if (me._ht_video_url_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_popup_video.style.visibility=(Number(me._ht_video_url_popup_video.style.opacity)>0||!me._ht_video_url_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_url_popup_video.ggVideoNotLoaded) {
						me._ht_video_url_popup_video.ggInitMedia(me._ht_video_url_popup_video.ggVideoSource);
					}
					me._ht_video_url_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_url_popup_video.style.visibility="hidden";
					me._ht_video_url_popup_video.ggInitMedia('');
					me._ht_video_url_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_url_popup_video.logicBlock_visible();
		me._ht_video_url_popup_video.onclick=function (e) {
			if (me._ht_video_url_popup_video.ggApiPlayer) {
				if (me._ht_video_url_popup_video.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._ht_video_url_popup_video.ggApiPlayer.getPlayerState() == 1) {
							me._ht_video_url_popup_video.ggApiPlayer.pauseVideo();
						} else {
							me._ht_video_url_popup_video.ggApiPlayer.playVideo();
						}
					};
					if (me._ht_video_url_popup_video.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._ht_video_url_popup_video.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._ht_video_url_popup_video.ggApiPlayerType == 'vimeo') {
					var promise = me._ht_video_url_popup_video.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._ht_video_url_popup_video.ggApiPlayer.play();
						} else {
							me._ht_video_url_popup_video.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("ht_video_url_popup_video","1");
			}
		}
		me._ht_video_url_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_popup.appendChild(me._ht_video_url_popup_video);
		me._ht_video_url.appendChild(me._ht_video_url_popup);
		el=me._ht_video_url_popup_close=document.createElement('div');
		els=me._ht_video_url_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_url_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_url_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_url_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_popup_close.style.visibility=me._ht_video_url_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_url_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_popup_close.style.opacity == 0.0) { me._ht_video_url_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_url_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_url_popup_close.logicBlock_alpha();
		me._ht_video_url_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_url_hotspots', player.getVariableValue('open_video_url_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_url_popup_video.style.transition='none';
			} else {
				me._ht_video_url_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_url_popup_video.style.opacity='0';
			me._ht_video_url_popup_video.style.visibility='hidden';
			me._ht_video_url_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_url_popup_title.style.transition='none';
			} else {
				me._ht_video_url_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_url_popup_title.style.opacity='0';
			me._ht_video_url_popup_title.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._video_url_controller.style.transition='none';
			} else {
				me._video_url_controller.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_controller.style.opacity='0';
			me._video_url_controller.style.visibility='hidden';
			me._ht_video_url.style.zIndex='-1';
		}
		me._ht_video_url_popup_close.onmouseenter=function (e) {
			me._ht_video_url_popup_close__img.style.visibility='hidden';
			me._ht_video_url_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_popup_close']=true;
		}
		me._ht_video_url_popup_close.onmouseleave=function (e) {
			me._ht_video_url_popup_close__img.style.visibility='inherit';
			me._ht_video_url_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_popup_close']=false;
		}
		me._ht_video_url_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_popup_close);
		el=me._ht_video_url_tooltip=document.createElement('div');
		els=me._ht_video_url_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_url_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_url_tooltip.style.visibility=me._ht_video_url_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_url_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_url_tooltip.style.opacity == 0.0) { me._ht_video_url_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_url_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_url_tooltip.logicBlock_alpha();
		me._ht_video_url_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_tooltip);
		el=me._ht_video_url_icon=document.createElement('div');
		els=me._ht_video_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_url_hotspots') !== null) && (player.getVariableValue('open_video_url_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_url_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_url_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_url_icon.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_url_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_url_icon.style.opacity == 0.0) { me._ht_video_url_icon.style.visibility="hidden"; } }, 305);
					me._ht_video_url_icon.style.opacity=0;
				}
				else {
					me._ht_video_url_icon.style.visibility=me._ht_video_url_icon.ggVisible?'inherit':'hidden';
					me._ht_video_url_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_url_icon.logicBlock_alpha();
		me._ht_video_url_icon.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_url_hotspots', player.getVariableValue('open_video_url_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_url_popup_video.style.transition='none';
				} else {
					me._ht_video_url_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_url_popup_video.style.opacity='1';
				me._ht_video_url_popup_video.style.visibility=me._ht_video_url_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_url_popup_video.ggVideoNotLoaded) {
					me._ht_video_url_popup_video.ggInitMedia(me._ht_video_url_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_url_popup_title.style.transition='none';
				} else {
					me._ht_video_url_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_url_popup_title.style.opacity='1';
				me._ht_video_url_popup_title.style.visibility=me._ht_video_url_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._video_url_controller.style.transition='none';
				} else {
					me._video_url_controller.style.transition='all 200ms ease-out 500ms';
				}
				me._video_url_controller.style.opacity='1';
				me._video_url_controller.style.visibility=me._video_url_controller.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_url_popup_video.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_url.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
		}
		me._ht_video_url_icon.onmouseenter=function (e) {
			me._ht_video_url_icon__img.style.visibility='hidden';
			me._ht_video_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_icon']=true;
		}
		me._ht_video_url_icon.onmouseleave=function (e) {
			me._ht_video_url_icon__img.style.visibility='inherit';
			me._ht_video_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_icon']=false;
		}
		me._ht_video_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_icon);
		me._ht_video_url.logicBlock_visible();
		me.elementMouseOver['ht_video_url']=false;
		me._ht_video_url_popup.logicBlock_size();
		me._ht_video_url_popup.logicBlock_alpha();
		me.elementMouseOver['video_url_controller_button_pause']=false;
		me.elementMouseOver['video_url_controller_button_play']=false;
		me._ht_video_url_popup_video.logicBlock_visible();
		me._ht_video_url_popup_video.ggVideoSource = '';
		me._ht_video_url_popup_video.ggVideoNotLoaded = true;
		me._ht_video_url_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_url_popup_close']=false;
		me._ht_video_url_tooltip.logicBlock_alpha();
		me._ht_video_url_icon.logicBlock_alpha();
		me.elementMouseOver['ht_video_url_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._video_url_controller_seekbar.ggConnectToMediaEl();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_icon.logicBlock_alpha();
				player.setVariableValue('open_video_url_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_open_video_url_hotspots=function() {
				me._ht_video_url_popup.logicBlock_size();
				me._ht_video_url_popup.logicBlock_alpha();
				me._ht_video_url_popup_video.logicBlock_visible();
				me._ht_video_url_popup_close.logicBlock_alpha();
				me._ht_video_url_tooltip.logicBlock_alpha();
				me._ht_video_url_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._ht_video_vimeo_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._ht_video_vimeo_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_popup=document.createElement('div');
		el.ggId="ht_video_vimeo_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_vimeo_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_vimeo_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_vimeo_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_vimeo_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_vimeo_popup.style.width='600px';
					me._ht_video_vimeo_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_popup);}, 550);
				}
				else {
					me._ht_video_vimeo_popup.style.width='60px';
					me._ht_video_vimeo_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_vimeo_popup);}, 550);
				}
			}
		}
		me._ht_video_vimeo_popup.logicBlock_size();
		me._ht_video_vimeo_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_vimeo_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_popup.style.visibility=me._ht_video_vimeo_popup.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_popup.style.opacity == 0.0) { me._ht_video_vimeo_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_vimeo_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_popup.logicBlock_alpha();
		me._ht_video_vimeo_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_popup_title=document.createElement('div');
		els=me._ht_video_vimeo_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_popup.appendChild(me._ht_video_vimeo_popup_title);
		el=me._ht_video_vimeo_popup_video=document.createElement('div');
		me._ht_video_vimeo_popup_video.seekbars = [];
		me._ht_video_vimeo_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_vimeo_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_vimeo_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_vimeo_popup_video.hasChildNodes()) {
				me._ht_video_vimeo_popup_video.removeChild(me._ht_video_vimeo_popup_video.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded == false && me._ht_video_vimeo_popup_video.ggDeactivate && player.isPlaying('ht_video_vimeo_popup_video')) { me._ht_video_vimeo_popup_video.ggDeactivate(); }
				me._ht_video_vimeo_popup_video.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_vimeo_popup_video.ggVideoNotLoaded = false;
			me._ht_video_vimeo_popup_video__vid=document.createElement('iframe');
			me._ht_video_vimeo_popup_video__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._ht_video_vimeo_popup_video__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_vimeo_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_vimeo_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_vimeo_popup_video__vid.setAttribute('allow', 'autoplay');
			me._ht_video_vimeo_popup_video__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_vimeo_popup_video__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_vimeo_popup_video.appendChild(me._ht_video_vimeo_popup_video__vid);
			me._ht_video_vimeo_popup_video.ggApiPlayerType = 'vimeo';
			me._ht_video_vimeo_popup_video.ggApiPlayer = new Vimeo.Player(me._ht_video_vimeo_popup_video__vid);
			if (player.getPlayerMuted()) me._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'ht_video_vimeo_popup_video' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._ht_video_vimeo_popup_video.ggApiPlayer.getVolume() > 0.0) skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(0); else skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'ht_video_vimeo_popup_video' || args.id == '_main') {
					if (args.type == 'set') skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._ht_video_vimeo_popup_video.ggApiPlayer.getVolume().then(function(volume) { skin._ht_video_vimeo_popup_video.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._ht_video_vimeo_popup_video.ggVideoSource = media;
		}
		el.ggId="ht_video_vimeo_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_popup_video.style.transition='';
				if (me._ht_video_vimeo_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_popup_video.style.visibility=(Number(me._ht_video_vimeo_popup_video.style.opacity)>0||!me._ht_video_vimeo_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded) {
						me._ht_video_vimeo_popup_video.ggInitMedia(me._ht_video_vimeo_popup_video.ggVideoSource);
					}
					me._ht_video_vimeo_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_popup_video.style.visibility="hidden";
					me._ht_video_vimeo_popup_video.ggInitMedia('');
					me._ht_video_vimeo_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_popup_video.logicBlock_visible();
		me._ht_video_vimeo_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_popup.appendChild(me._ht_video_vimeo_popup_video);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_popup);
		el=me._ht_video_vimeo_popup_close=document.createElement('div');
		els=me._ht_video_vimeo_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_popup_close.style.visibility=me._ht_video_vimeo_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_popup_close.style.opacity == 0.0) { me._ht_video_vimeo_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_vimeo_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_popup_close.logicBlock_alpha();
		me._ht_video_vimeo_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_vimeo_hotspots', player.getVariableValue('open_video_vimeo_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_vimeo_popup_video.style.transition='none';
			} else {
				me._ht_video_vimeo_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_vimeo_popup_video.style.opacity='0';
			me._ht_video_vimeo_popup_video.style.visibility='hidden';
			me._ht_video_vimeo_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_vimeo_popup_title.style.transition='none';
			} else {
				me._ht_video_vimeo_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_vimeo_popup_title.style.opacity='0';
			me._ht_video_vimeo_popup_title.style.visibility='hidden';
			me._ht_video_vimeo.style.zIndex='-1';
		}
		me._ht_video_vimeo_popup_close.onmouseenter=function (e) {
			me._ht_video_vimeo_popup_close__img.style.visibility='hidden';
			me._ht_video_vimeo_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_popup_close']=true;
		}
		me._ht_video_vimeo_popup_close.onmouseleave=function (e) {
			me._ht_video_vimeo_popup_close__img.style.visibility='inherit';
			me._ht_video_vimeo_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_popup_close']=false;
		}
		me._ht_video_vimeo_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_popup_close);
		el=me._ht_video_vimeo_tooltip=document.createElement('div');
		els=me._ht_video_vimeo_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_vimeo_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_vimeo_tooltip.style.visibility=me._ht_video_vimeo_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_vimeo_tooltip.style.opacity == 0.0) { me._ht_video_vimeo_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_vimeo_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_vimeo_tooltip.logicBlock_alpha();
		me._ht_video_vimeo_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_tooltip);
		el=me._ht_video_vimeo_icon=document.createElement('div');
		els=me._ht_video_vimeo_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_vimeo_hotspots') !== null) && (player.getVariableValue('open_video_vimeo_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_vimeo_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_vimeo_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_vimeo_icon.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_vimeo_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_vimeo_icon.style.opacity == 0.0) { me._ht_video_vimeo_icon.style.visibility="hidden"; } }, 305);
					me._ht_video_vimeo_icon.style.opacity=0;
				}
				else {
					me._ht_video_vimeo_icon.style.visibility=me._ht_video_vimeo_icon.ggVisible?'inherit':'hidden';
					me._ht_video_vimeo_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_vimeo_icon.logicBlock_alpha();
		me._ht_video_vimeo_icon.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_vimeo_hotspots', player.getVariableValue('open_video_vimeo_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_vimeo_popup_video.style.transition='none';
				} else {
					me._ht_video_vimeo_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_vimeo_popup_video.style.opacity='1';
				me._ht_video_vimeo_popup_video.style.visibility=me._ht_video_vimeo_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_vimeo_popup_video.ggVideoNotLoaded) {
					me._ht_video_vimeo_popup_video.ggInitMedia(me._ht_video_vimeo_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_vimeo_popup_title.style.transition='none';
				} else {
					me._ht_video_vimeo_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_vimeo_popup_title.style.opacity='1';
				me._ht_video_vimeo_popup_title.style.visibility=me._ht_video_vimeo_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_vimeo_popup_video.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_vimeo.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			player.setVariableValue('open_video_vimeo_hotspots', "");
		}
		me._ht_video_vimeo_icon.onmouseenter=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='hidden';
			me._ht_video_vimeo_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_icon']=true;
		}
		me._ht_video_vimeo_icon.onmouseleave=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='inherit';
			me._ht_video_vimeo_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_icon']=false;
		}
		me._ht_video_vimeo_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_icon);
		me._ht_video_vimeo.logicBlock_visible();
		me.elementMouseOver['ht_video_vimeo']=false;
		me._ht_video_vimeo_popup.logicBlock_size();
		me._ht_video_vimeo_popup.logicBlock_alpha();
		me._ht_video_vimeo_popup_video.logicBlock_visible();
		me._ht_video_vimeo_popup_video.ggVideoSource = '';
		me._ht_video_vimeo_popup_video.ggVideoNotLoaded = true;
		me._ht_video_vimeo_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo_popup_close']=false;
		me._ht_video_vimeo_tooltip.logicBlock_alpha();
		me._ht_video_vimeo_icon.logicBlock_alpha();
		me.elementMouseOver['ht_video_vimeo_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_icon.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_open_video_vimeo_hotspots=function() {
				me._ht_video_vimeo_popup.logicBlock_size();
				me._ht_video_vimeo_popup.logicBlock_alpha();
				me._ht_video_vimeo_popup_video.logicBlock_visible();
				me._ht_video_vimeo_popup_close.logicBlock_alpha();
				me._ht_video_vimeo_tooltip.logicBlock_alpha();
				me._ht_video_vimeo_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._ht_video_youtube_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._ht_video_youtube_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_popup=document.createElement('div');
		el.ggId="ht_video_youtube_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : -40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_video_youtube_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_video_youtube_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_video_youtube_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_youtube_popup.ggCurrentLogicStateSize == 0) {
					me._ht_video_youtube_popup.style.width='600px';
					me._ht_video_youtube_popup.style.height='375px';
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_popup);}, 550);
				}
				else {
					me._ht_video_youtube_popup.style.width='60px';
					me._ht_video_youtube_popup.style.height='60px';
					setTimeout(function() {skin.updateSize(me._ht_video_youtube_popup);}, 550);
				}
			}
		}
		me._ht_video_youtube_popup.logicBlock_size();
		me._ht_video_youtube_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_popup.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 400ms ease 0ms';
				if (me._ht_video_youtube_popup.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_popup.style.visibility=me._ht_video_youtube_popup.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_popup.style.opacity == 0.0) { me._ht_video_youtube_popup.style.visibility="hidden"; } }, 405);
					me._ht_video_youtube_popup.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_popup.logicBlock_alpha();
		me._ht_video_youtube_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_popup_title=document.createElement('div');
		els=me._ht_video_youtube_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 24px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_popup.appendChild(me._ht_video_youtube_popup_title);
		el=me._ht_video_youtube_popup_video=document.createElement('div');
		me._ht_video_youtube_popup_video.seekbars = [];
			me._ht_video_youtube_popup_video.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._ht_video_youtube_popup_video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._ht_video_youtube_popup_video.seekbars.length; i++) {
					var seekbar = me.findElements(me._ht_video_youtube_popup_video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._ht_video_youtube_popup_video.hasChildNodes()) {
				me._ht_video_youtube_popup_video.removeChild(me._ht_video_youtube_popup_video.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._ht_video_youtube_popup_video.ggVideoNotLoaded == false && me._ht_video_youtube_popup_video.ggDeactivate && player.isPlaying('ht_video_youtube_popup_video')) { me._ht_video_youtube_popup_video.ggDeactivate(); }
				me._ht_video_youtube_popup_video.ggVideoNotLoaded = true;
				return;
			}
			me._ht_video_youtube_popup_video.ggVideoNotLoaded = false;
			me._ht_video_youtube_popup_video__vid=document.createElement('iframe');
			me._ht_video_youtube_popup_video__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._ht_video_youtube_popup_video__vid.setAttribute('src', ggVideoUrl);
			me._ht_video_youtube_popup_video__vid.setAttribute('width', '100%');
			me._ht_video_youtube_popup_video__vid.setAttribute('height', '100%');
			me._ht_video_youtube_popup_video__vid.setAttribute('allow', 'autoplay');
			me._ht_video_youtube_popup_video__vid.setAttribute('allowfullscreen', 'true');
			me._ht_video_youtube_popup_video__vid.setAttribute('style', 'border:none; ; ;');
			me._ht_video_youtube_popup_video.appendChild(me._ht_video_youtube_popup_video__vid);
			me._ht_video_youtube_popup_video__vid.id = 'youtube-video';
			me._ht_video_youtube_popup_video.ggYoutubeApiReady = function() {
				me._ht_video_youtube_popup_video.ggApiPlayerType = 'youtube';
				me._ht_video_youtube_popup_video.ggApiPlayerReady = false;
				me._ht_video_youtube_popup_video.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._ht_video_youtube_popup_video.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._ht_video_youtube_popup_video.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._ht_video_youtube_popup_video.ggMediaEnded) {
								me._ht_video_youtube_popup_video.ggMediaEnded();
							}
							if (event.data == 1 && me._ht_video_youtube_popup_video.ggActivate) {
								me._ht_video_youtube_popup_video.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._ht_video_youtube_popup_video.ggDeactivate) {
								me._ht_video_youtube_popup_video.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'ht_video_youtube_popup_video' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._ht_video_youtube_popup_video.ggApiPlayer.unMute();
						if (args.state == 1) skin._ht_video_youtube_popup_video.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._ht_video_youtube_popup_video.ggApiPlayer.isMuted()) skin._ht_video_youtube_popup_video.ggApiPlayer.unMute(); else skin._ht_video_youtube_popup_video.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'ht_video_youtube_popup_video' || args.id == '_main') {
						if (args.type == 'set') skin._ht_video_youtube_popup_video.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._ht_video_youtube_popup_video.ggApiPlayer.setVolume(skin._ht_video_youtube_popup_video.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._ht_video_youtube_popup_video.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._ht_video_youtube_popup_video.ggYoutubeApiReady();}
		}
		el.ggId="ht_video_youtube_popup_video";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_video.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_popup_video.style.transition='';
				if (me._ht_video_youtube_popup_video.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_popup_video.style.visibility=(Number(me._ht_video_youtube_popup_video.style.opacity)>0||!me._ht_video_youtube_popup_video.style.opacity)?'inherit':'hidden';
					if (me._ht_video_youtube_popup_video.ggVideoNotLoaded) {
						me._ht_video_youtube_popup_video.ggInitMedia(me._ht_video_youtube_popup_video.ggVideoSource);
					}
					me._ht_video_youtube_popup_video.ggVisible=true;
				}
				else {
					me._ht_video_youtube_popup_video.style.visibility="hidden";
					me._ht_video_youtube_popup_video.ggInitMedia('');
					me._ht_video_youtube_popup_video.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_popup_video.logicBlock_visible();
		me._ht_video_youtube_popup_video.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_popup.appendChild(me._ht_video_youtube_popup_video);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_popup);
		el=me._ht_video_youtube_popup_close=document.createElement('div');
		els=me._ht_video_youtube_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOHB4IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjE4cHgiPgogPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_youtube_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojNGZiNWMyO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._ht_video_youtube_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_popup_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(2px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_popup_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_popup_close.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_youtube_popup_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_popup_close.style.visibility=me._ht_video_youtube_popup_close.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_popup_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_popup_close.style.opacity == 0.0) { me._ht_video_youtube_popup_close.style.visibility="hidden"; } }, 305);
					me._ht_video_youtube_popup_close.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_popup_close.logicBlock_alpha();
		me._ht_video_youtube_popup_close.onclick=function (e) {
			player.setVariableValue('open_video_youtube_hotspots', player.getVariableValue('open_video_youtube_hotspots').replace("<"+me.hotspot.id+">", ''));
			if (player.transitionsDisabled) {
				me._ht_video_youtube_popup_video.style.transition='none';
			} else {
				me._ht_video_youtube_popup_video.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_youtube_popup_video.style.opacity='0';
			me._ht_video_youtube_popup_video.style.visibility='hidden';
			me._ht_video_youtube_popup_video.ggInitMedia('');
			if (player.transitionsDisabled) {
				me._ht_video_youtube_popup_title.style.transition='none';
			} else {
				me._ht_video_youtube_popup_title.style.transition='all 200ms ease-out 0ms';
			}
			me._ht_video_youtube_popup_title.style.opacity='0';
			me._ht_video_youtube_popup_title.style.visibility='hidden';
			me._ht_video_youtube.style.zIndex='-1';
		}
		me._ht_video_youtube_popup_close.onmouseenter=function (e) {
			me._ht_video_youtube_popup_close__img.style.visibility='hidden';
			me._ht_video_youtube_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_popup_close']=true;
		}
		me._ht_video_youtube_popup_close.onmouseleave=function (e) {
			me._ht_video_youtube_popup_close__img.style.visibility='inherit';
			me._ht_video_youtube_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_popup_close']=false;
		}
		me._ht_video_youtube_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_popup_close);
		el=me._ht_video_youtube_tooltip=document.createElement('div');
		els=me._ht_video_youtube_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_tooltip";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") == -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_video_youtube_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_youtube_tooltip.style.visibility=me._ht_video_youtube_tooltip.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_video_youtube_tooltip.style.opacity == 0.0) { me._ht_video_youtube_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_video_youtube_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_video_youtube_tooltip.logicBlock_alpha();
		me._ht_video_youtube_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_tooltip);
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRUZFRkU7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4IDI4OyIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQoJLnN0MXtvcGFjaXR5OjAuNjY7fQoJLnN0MntmaWxsOiMwMTAxMDE7fQo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LDEyLjVWOWMwLTAuNi0wLjUtMS0xLTFINkM1LjUsOCw1LDguNCw1LDl2MTBjMCwwLjUsMC41LDEsMSwxaDEyYzAuNSwwLDEtMC41LDEtMXYtMy41bDIuMywyLjMmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwxLjcsMC4yLDEuNy0wLjd2LTYuMmMwLTAuOS0xLjEtMS4zLTEuNy0wLjdMMTksMTIuNXoiLz4KICA8ZyBjbGFzcz0ic3QxIj4KICAgPHBhdGggY2xhc3M9'+
			'InN0MiIgZD0iTTE4LDhjMC41LDAsMSwwLjUsMSwxdjMuNWwyLjMtMi4zYzAuMi0wLjIsMC40LTAuMywwLjctMC4zYzAuNSwwLDEsMC40LDEsMXY2LjJjMCwwLjYtMC41LDEtMSwxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuNS0wLjEtMC43LTAuM0wxOSwxNS41VjE5YzAsMC41LTAuNSwxLTEsMUg2Yy0wLjUsMC0xLTAuNS0xLTFWOWMwLTAuNSwwLjUtMSwxLTFIMTggTTE4LDUuOEg2QzQuMiw1LjgsMi44LDcuMiwyLjgsOXYxMCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMS44LDEuNCwzLjIsMy4yLDMuMmgxMmMxLjQsMCwyLjUtMC45LDMtMi4xYzAuMywwLjEsMC43LDAuMiwxLDAuMmMxLj'+
			'gsMCwzLjItMS40LDMuMi0zLjJ2LTYuMmMwLTEuOC0xLjQtMy4yLTMuMi0zLjImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zLDAtMC43LDAuMS0xLDAuMkMyMC41LDYuNywxOS40LDUuOCwxOCw1LjhMMTgsNS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg outline";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(((player.getVariableValue('open_video_youtube_hotspots') !== null) && (player.getVariableValue('open_video_youtube_hotspots')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_youtube_icon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_youtube_icon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_youtube_icon.style.transition='opacity 300ms ease 0ms';
				if (me._ht_video_youtube_icon.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_video_youtube_icon.style.opacity == 0.0) { me._ht_video_youtube_icon.style.visibility="hidden"; } }, 305);
					me._ht_video_youtube_icon.style.opacity=0;
				}
				else {
					me._ht_video_youtube_icon.style.visibility=me._ht_video_youtube_icon.ggVisible?'inherit':'hidden';
					me._ht_video_youtube_icon.style.opacity=1;
				}
			}
		}
		me._ht_video_youtube_icon.logicBlock_alpha();
		me._ht_video_youtube_icon.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('open_video_youtube_hotspots', player.getVariableValue('open_video_youtube_hotspots') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_youtube_popup_video.style.transition='none';
				} else {
					me._ht_video_youtube_popup_video.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_youtube_popup_video.style.opacity='1';
				me._ht_video_youtube_popup_video.style.visibility=me._ht_video_youtube_popup_video.ggVisible?'inherit':'hidden';
				if (me._ht_video_youtube_popup_video.ggVideoNotLoaded) {
					me._ht_video_youtube_popup_video.ggInitMedia(me._ht_video_youtube_popup_video.ggVideoSource);
				}
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._ht_video_youtube_popup_title.style.transition='none';
				} else {
					me._ht_video_youtube_popup_title.style.transition='all 200ms ease-out 500ms';
				}
				me._ht_video_youtube_popup_title.style.opacity='1';
				me._ht_video_youtube_popup_title.style.visibility=me._ht_video_youtube_popup_title.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_youtube_popup_video.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_video_youtube.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
		}
		me._ht_video_youtube_icon.onmouseenter=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='hidden';
			me._ht_video_youtube_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_icon']=true;
		}
		me._ht_video_youtube_icon.onmouseleave=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='inherit';
			me._ht_video_youtube_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_icon']=false;
		}
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_icon);
		me._ht_video_youtube.logicBlock_visible();
		me.elementMouseOver['ht_video_youtube']=false;
		me._ht_video_youtube_popup.logicBlock_size();
		me._ht_video_youtube_popup.logicBlock_alpha();
		me._ht_video_youtube_popup_video.logicBlock_visible();
		me._ht_video_youtube_popup_video.ggVideoSource = '';
		me._ht_video_youtube_popup_video.ggVideoNotLoaded = true;
		me._ht_video_youtube_popup_close.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube_popup_close']=false;
		me._ht_video_youtube_tooltip.logicBlock_alpha();
		me._ht_video_youtube_icon.logicBlock_alpha();
		me.elementMouseOver['ht_video_youtube_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_icon.logicBlock_alpha();
				player.setVariableValue('open_video_youtube_hotspots', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_open_video_youtube_hotspots=function() {
				me._ht_video_youtube_popup.logicBlock_size();
				me._ht_video_youtube_popup.logicBlock_alpha();
				me._ht_video_youtube_popup_video.logicBlock_visible();
				me._ht_video_youtube_popup_close.logicBlock_alpha();
				me._ht_video_youtube_tooltip.logicBlock_alpha();
				me._ht_video_youtube_icon.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._thumbnail_scroller_fwd.ggUpdateConditionTimer();
		me._thumbnail_scroller_bwd.ggUpdateConditionTimer();
		me._menu_toggle_timer.ggUpdateConditionTimer();
		if (me._menu_toggle_timer.ggLastIsActive!=me._menu_toggle_timer.ggIsActive()) {
			me._menu_toggle_timer.ggLastIsActive=me._menu_toggle_timer.ggIsActive();
			if (me._menu_toggle_timer.ggLastIsActive) {
			} else {
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._menu_close_anim.style.transition='none';
					me._menu_close_anim.style.visibility=(Number(me._menu_close_anim.style.opacity)>0||!me._menu_close_anim.style.opacity)?'inherit':'hidden';
					me._menu_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._menu_open_anim.style.transition='none';
					me._menu_open_anim.style.visibility='hidden';
					me._menu_open_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._menu_open_anim.style.transition='none';
					me._menu_open_anim.style.visibility=(Number(me._menu_open_anim.style.opacity)>0||!me._menu_open_anim.style.opacity)?'inherit':'hidden';
					me._menu_open_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._menu_close_anim.style.transition='none';
					me._menu_close_anim.style.visibility='hidden';
					me._menu_close_anim.ggVisible=false;
				}
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #aaa; } .ggdefaulthotspot { font-family: "Varela Round", sans-serif; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .title_shadow { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); } .noto_sans { font-family: "Noto Sans", sans-serif; } .varela { font-family: "Varela Round", sans-serif; } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Varela Round"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/varela-round-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Noto Sans"; font-style: normal; font-weight: 300; src: local(""), url("$(skinbase)fonts/noto-sans-latin-300.woff2") format("woff2"); } @font-face { font-family: "Noto Sans"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/noto-sans-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}