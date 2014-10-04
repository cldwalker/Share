if(!lt.util.load.provided_QMARK_('lt.plugins.share')) {
goog.provide('lt.plugins.share');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.context');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.share.text_input = (function text_input(m){var e__7765__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(m)], null)], null));var seq__9127_9136 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7765__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7765__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7765__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7765__auto__))
], null)));var chunk__9128_9137 = null;var count__9129_9138 = 0;var i__9130_9139 = 0;while(true){
if((i__9130_9139 < count__9129_9138))
{var vec__9131_9140 = cljs.core._nth.call(null,chunk__9128_9137,i__9130_9139);var ev__7766__auto___9141 = cljs.core.nth.call(null,vec__9131_9140,0,null);var func__7767__auto___9142 = cljs.core.nth.call(null,vec__9131_9140,1,null);lt.util.dom.on.call(null,e__7765__auto__,ev__7766__auto___9141,func__7767__auto___9142);
{
var G__9143 = seq__9127_9136;
var G__9144 = chunk__9128_9137;
var G__9145 = count__9129_9138;
var G__9146 = (i__9130_9139 + 1);
seq__9127_9136 = G__9143;
chunk__9128_9137 = G__9144;
count__9129_9138 = G__9145;
i__9130_9139 = G__9146;
continue;
}
} else
{var temp__4092__auto___9147 = cljs.core.seq.call(null,seq__9127_9136);if(temp__4092__auto___9147)
{var seq__9127_9148__$1 = temp__4092__auto___9147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9127_9148__$1))
{var c__7112__auto___9149 = cljs.core.chunk_first.call(null,seq__9127_9148__$1);{
var G__9150 = cljs.core.chunk_rest.call(null,seq__9127_9148__$1);
var G__9151 = c__7112__auto___9149;
var G__9152 = cljs.core.count.call(null,c__7112__auto___9149);
var G__9153 = 0;
seq__9127_9136 = G__9150;
chunk__9128_9137 = G__9151;
count__9129_9138 = G__9152;
i__9130_9139 = G__9153;
continue;
}
} else
{var vec__9132_9154 = cljs.core.first.call(null,seq__9127_9148__$1);var ev__7766__auto___9155 = cljs.core.nth.call(null,vec__9132_9154,0,null);var func__7767__auto___9156 = cljs.core.nth.call(null,vec__9132_9154,1,null);lt.util.dom.on.call(null,e__7765__auto__,ev__7766__auto___9155,func__7767__auto___9156);
{
var G__9157 = cljs.core.next.call(null,seq__9127_9148__$1);
var G__9158 = null;
var G__9159 = 0;
var G__9160 = 0;
seq__9127_9136 = G__9157;
chunk__9128_9137 = G__9158;
count__9129_9138 = G__9159;
i__9130_9139 = G__9160;
continue;
}
}
} else
{}
}
break;
}
return e__7765__auto__;
});
/**
* @param {...*} var_args
*/
lt.plugins.share.input = (function() { 
var input__delegate = function (action_fn,p__9133){var map__9135 = p__9133;var map__9135__$1 = ((cljs.core.seq_QMARK_.call(null,map__9135))?cljs.core.apply.call(null,cljs.core.hash_map,map__9135):map__9135);var opts = map__9135__$1;var input__$1 = lt.plugins.share.text_input.call(null,opts);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "Enter value";
}
})(),new cljs.core.Keyword(null,"body","body",1016933652),input__$1,new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Submit",new cljs.core.Keyword(null,"action","action",3885920680),((function (input__$1,map__9135,map__9135__$1,opts){
return (function (){return action_fn.call(null,lt.util.dom.val.call(null,input__$1));
});})(input__$1,map__9135,map__9135__$1,opts))
], null)], null)], null));lt.util.dom.focus.call(null,input__$1);
return input__$1.setSelectionRange(1000,1000);
};
var input = function (action_fn,var_args){
var p__9133 = null;if (arguments.length > 1) {
  p__9133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,action_fn,p__9133);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__9161){
var action_fn = cljs.core.first(arglist__9161);
var p__9133 = cljs.core.rest(arglist__9161);
return input__delegate(action_fn,p__9133);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
lt.plugins.share.firepad_url = "https://firepad.firebaseio.com/demo";
lt.plugins.share.share_ref = (function share_ref(){var ref = (new Firebase(lt.plugins.share.firepad_url));var ref__$1 = ref.push();return ref__$1;
});
lt.plugins.share.attach_ref = (function attach_ref(id){var ref = (new Firebase(lt.plugins.share.firepad_url));var ref__$1 = ref.child(id);return ref__$1;
});
lt.plugins.share.attach_cm = (function attach_cm(ed,ref){lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),0,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),lt.objs.editor.last_line.call(null,ed)], null));
var text = lt.objs.editor.selection.call(null,ed);lt.objs.editor.replace_selection.call(null,ed,"");
Firepad.fromCodeMirror(ref,lt.objs.editor.__GT_cm_ed.call(null,ed));
return lt.objs.editor.replace_selection.call(null,ed,text);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"share.attach","share.attach",3989204646),new cljs.core.Keyword(null,"desc","desc",1016984067),"Share: Attaches current tab to given ID",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var input_callback = ((function (ed){
return (function (ed__$1,input){lt.plugins.share.attach_cm.call(null,ed__$1,lt.plugins.share.attach_ref.call(null,input));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Attached to "),cljs.core.str(cljs.core.pr_str.call(null,input))].join(''));
});})(ed))
;return lt.plugins.share.input.call(null,cljs.core.partial.call(null,input_callback,ed),new cljs.core.Keyword(null,"header","header",4087600639),"Enter ID");
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"share.share","share.share",4312718466),new cljs.core.Keyword(null,"desc","desc",1016984067),"Share: Shares current tab and copies id to clipboard",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var ref = lt.plugins.share.share_ref.call(null);var id = ref.name();lt.plugins.share.attach_cm.call(null,ed,ref);
lt.objs.platform.copy.call(null,id);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Shared to "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
})], null));
}

//# sourceMappingURL=share_compiled.js.map