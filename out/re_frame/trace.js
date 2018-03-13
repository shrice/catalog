// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__66296){
var map__66297 = p__66296;
var map__66297__$1 = ((((!((map__66297 == null)))?((((map__66297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66297):map__66297);
var operation = cljs.core.get.call(null,map__66297__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__66297__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__66297__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__66297__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__19323__auto__ = child_of;
if(cljs.core.truth_(or__19323__auto__)){
return or__19323__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__66299_66311 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__66300_66312 = null;
var count__66301_66313 = (0);
var i__66302_66314 = (0);
while(true){
if((i__66302_66314 < count__66301_66313)){
var vec__66303_66315 = cljs.core._nth.call(null,chunk__66300_66312,i__66302_66314);
var k_66316 = cljs.core.nth.call(null,vec__66303_66315,(0),null);
var cb_66317 = cljs.core.nth.call(null,vec__66303_66315,(1),null);
try{cb_66317.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e66306){var e_66318 = e66306;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_66316,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_66318);
}
var G__66319 = seq__66299_66311;
var G__66320 = chunk__66300_66312;
var G__66321 = count__66301_66313;
var G__66322 = (i__66302_66314 + (1));
seq__66299_66311 = G__66319;
chunk__66300_66312 = G__66320;
count__66301_66313 = G__66321;
i__66302_66314 = G__66322;
continue;
} else {
var temp__5457__auto___66323 = cljs.core.seq.call(null,seq__66299_66311);
if(temp__5457__auto___66323){
var seq__66299_66324__$1 = temp__5457__auto___66323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66299_66324__$1)){
var c__21312__auto___66325 = cljs.core.chunk_first.call(null,seq__66299_66324__$1);
var G__66326 = cljs.core.chunk_rest.call(null,seq__66299_66324__$1);
var G__66327 = c__21312__auto___66325;
var G__66328 = cljs.core.count.call(null,c__21312__auto___66325);
var G__66329 = (0);
seq__66299_66311 = G__66326;
chunk__66300_66312 = G__66327;
count__66301_66313 = G__66328;
i__66302_66314 = G__66329;
continue;
} else {
var vec__66307_66330 = cljs.core.first.call(null,seq__66299_66324__$1);
var k_66331 = cljs.core.nth.call(null,vec__66307_66330,(0),null);
var cb_66332 = cljs.core.nth.call(null,vec__66307_66330,(1),null);
try{cb_66332.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e66310){var e_66333 = e66310;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_66331,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_66333);
}
var G__66334 = cljs.core.next.call(null,seq__66299_66324__$1);
var G__66335 = null;
var G__66336 = (0);
var G__66337 = (0);
seq__66299_66311 = G__66334;
chunk__66300_66312 = G__66335;
count__66301_66313 = G__66336;
i__66302_66314 = G__66337;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
