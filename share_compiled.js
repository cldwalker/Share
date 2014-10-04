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
lt.plugins.share.text_input = (function text_input(m){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(m)], null)], null));var seq__7845_7864 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),((function (e__7755__auto__){
return (function (){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
,new cljs.core.Keyword(null,"blur","blur",1016931289),((function (e__7755__auto__){
return (function (){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"popup.input","popup.input",4788025210));
});})(e__7755__auto__))
], null)));var chunk__7846_7865 = null;var count__7847_7866 = 0;var i__7848_7867 = 0;while(true){
if((i__7848_7867 < count__7847_7866))
{var vec__7849_7868 = cljs.core._nth.call(null,chunk__7846_7865,i__7848_7867);var ev__7756__auto___7869 = cljs.core.nth.call(null,vec__7849_7868,0,null);var func__7757__auto___7870 = cljs.core.nth.call(null,vec__7849_7868,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7869,func__7757__auto___7870);
{
var G__7871 = seq__7845_7864;
var G__7872 = chunk__7846_7865;
var G__7873 = count__7847_7866;
var G__7874 = (i__7848_7867 + 1);
seq__7845_7864 = G__7871;
chunk__7846_7865 = G__7872;
count__7847_7866 = G__7873;
i__7848_7867 = G__7874;
continue;
}
} else
{var temp__4092__auto___7875 = cljs.core.seq.call(null,seq__7845_7864);if(temp__4092__auto___7875)
{var seq__7845_7876__$1 = temp__4092__auto___7875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7845_7876__$1))
{var c__7112__auto___7877 = cljs.core.chunk_first.call(null,seq__7845_7876__$1);{
var G__7878 = cljs.core.chunk_rest.call(null,seq__7845_7876__$1);
var G__7879 = c__7112__auto___7877;
var G__7880 = cljs.core.count.call(null,c__7112__auto___7877);
var G__7881 = 0;
seq__7845_7864 = G__7878;
chunk__7846_7865 = G__7879;
count__7847_7866 = G__7880;
i__7848_7867 = G__7881;
continue;
}
} else
{var vec__7850_7882 = cljs.core.first.call(null,seq__7845_7876__$1);var ev__7756__auto___7883 = cljs.core.nth.call(null,vec__7850_7882,0,null);var func__7757__auto___7884 = cljs.core.nth.call(null,vec__7850_7882,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7883,func__7757__auto___7884);
{
var G__7885 = cljs.core.next.call(null,seq__7845_7876__$1);
var G__7886 = null;
var G__7887 = 0;
var G__7888 = 0;
seq__7845_7864 = G__7885;
chunk__7846_7865 = G__7886;
count__7847_7866 = G__7887;
i__7848_7867 = G__7888;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
/**
* @param {...*} var_args
*/
lt.plugins.share.input = (function() { 
var input__delegate = function (action_fn,p__7851){var map__7853 = p__7851;var map__7853__$1 = ((cljs.core.seq_QMARK_.call(null,map__7853))?cljs.core.apply.call(null,cljs.core.hash_map,map__7853):map__7853);var opts = map__7853__$1;var input__$1 = lt.plugins.share.text_input.call(null,opts);var p = lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"header","header",4087600639).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "Enter value";
}
})(),new cljs.core.Keyword(null,"body","body",1016933652),input__$1,new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"Cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Submit",new cljs.core.Keyword(null,"action","action",3885920680),((function (input__$1,map__7853,map__7853__$1,opts){
return (function (){return action_fn.call(null,lt.util.dom.val.call(null,input__$1));
});})(input__$1,map__7853,map__7853__$1,opts))
], null)], null)], null));lt.util.dom.focus.call(null,input__$1);
return input__$1.setSelectionRange(1000,1000);
};
var input = function (action_fn,var_args){
var p__7851 = null;if (arguments.length > 1) {
  p__7851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return input__delegate.call(this,action_fn,p__7851);};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = (function (arglist__7889){
var action_fn = cljs.core.first(arglist__7889);
var p__7851 = cljs.core.rest(arglist__7889);
return input__delegate(action_fn,p__7851);
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"share.attach","share.attach",3989204646),new cljs.core.Keyword(null,"desc","desc",1016984067),"Share: Attach current tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var input_callback = ((function (ed){
return (function (ed__$1,input){lt.plugins.share.attach_cm.call(null,ed__$1,lt.plugins.share.attach_ref.call(null,input));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Attached to "),cljs.core.str(cljs.core.pr_str.call(null,input))].join(''));
});})(ed))
;return lt.plugins.share.input.call(null,cljs.core.partial.call(null,input_callback,ed),new cljs.core.Keyword(null,"header","header",4087600639),"Enter ID");
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"share.share","share.share",4312718466),new cljs.core.Keyword(null,"desc","desc",1016984067),"Share: Share current tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var ref = lt.plugins.share.share_ref.call(null);var id = ref.name();lt.plugins.share.attach_cm.call(null,ed,ref);
lt.objs.platform.copy.call(null,id);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Shared to "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
})], null));
}

//# sourceMappingURL=share_compiled.js.map