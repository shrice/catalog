// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_66434 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__66435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__66436 = null;
var count__66437 = (0);
var i__66438 = (0);
while(true){
if((i__66438 < count__66437)){
var vec__66439 = cljs.core._nth.call(null,chunk__66436,i__66438);
var effect_key = cljs.core.nth.call(null,vec__66439,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66439,(1),null);
var temp__5455__auto___66455 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___66455)){
var effect_fn_66456 = temp__5455__auto___66455;
effect_fn_66456.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__66457 = seq__66435;
var G__66458 = chunk__66436;
var G__66459 = count__66437;
var G__66460 = (i__66438 + (1));
seq__66435 = G__66457;
chunk__66436 = G__66458;
count__66437 = G__66459;
i__66438 = G__66460;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66435);
if(temp__5457__auto__){
var seq__66435__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66435__$1)){
var c__21312__auto__ = cljs.core.chunk_first.call(null,seq__66435__$1);
var G__66461 = cljs.core.chunk_rest.call(null,seq__66435__$1);
var G__66462 = c__21312__auto__;
var G__66463 = cljs.core.count.call(null,c__21312__auto__);
var G__66464 = (0);
seq__66435 = G__66461;
chunk__66436 = G__66462;
count__66437 = G__66463;
i__66438 = G__66464;
continue;
} else {
var vec__66442 = cljs.core.first.call(null,seq__66435__$1);
var effect_key = cljs.core.nth.call(null,vec__66442,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66442,(1),null);
var temp__5455__auto___66465 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___66465)){
var effect_fn_66466 = temp__5455__auto___66465;
effect_fn_66466.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__66467 = cljs.core.next.call(null,seq__66435__$1);
var G__66468 = null;
var G__66469 = (0);
var G__66470 = (0);
seq__66435 = G__66467;
chunk__66436 = G__66468;
count__66437 = G__66469;
i__66438 = G__66470;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__59284__auto___66471 = re_frame.interop.now.call(null);
var duration__59285__auto___66472 = (end__59284__auto___66471 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__59285__auto___66472,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__59284__auto___66471);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_66434;
}} else {
var seq__66445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__66446 = null;
var count__66447 = (0);
var i__66448 = (0);
while(true){
if((i__66448 < count__66447)){
var vec__66449 = cljs.core._nth.call(null,chunk__66446,i__66448);
var effect_key = cljs.core.nth.call(null,vec__66449,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66449,(1),null);
var temp__5455__auto___66473 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___66473)){
var effect_fn_66474 = temp__5455__auto___66473;
effect_fn_66474.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__66475 = seq__66445;
var G__66476 = chunk__66446;
var G__66477 = count__66447;
var G__66478 = (i__66448 + (1));
seq__66445 = G__66475;
chunk__66446 = G__66476;
count__66447 = G__66477;
i__66448 = G__66478;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66445);
if(temp__5457__auto__){
var seq__66445__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66445__$1)){
var c__21312__auto__ = cljs.core.chunk_first.call(null,seq__66445__$1);
var G__66479 = cljs.core.chunk_rest.call(null,seq__66445__$1);
var G__66480 = c__21312__auto__;
var G__66481 = cljs.core.count.call(null,c__21312__auto__);
var G__66482 = (0);
seq__66445 = G__66479;
chunk__66446 = G__66480;
count__66447 = G__66481;
i__66448 = G__66482;
continue;
} else {
var vec__66452 = cljs.core.first.call(null,seq__66445__$1);
var effect_key = cljs.core.nth.call(null,vec__66452,(0),null);
var effect_value = cljs.core.nth.call(null,vec__66452,(1),null);
var temp__5455__auto___66483 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___66483)){
var effect_fn_66484 = temp__5455__auto___66483;
effect_fn_66484.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__66485 = cljs.core.next.call(null,seq__66445__$1);
var G__66486 = null;
var G__66487 = (0);
var G__66488 = (0);
seq__66445 = G__66485;
chunk__66446 = G__66486;
count__66447 = G__66487;
i__66448 = G__66488;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__66489 = cljs.core.seq.call(null,value);
var chunk__66490 = null;
var count__66491 = (0);
var i__66492 = (0);
while(true){
if((i__66492 < count__66491)){
var map__66493 = cljs.core._nth.call(null,chunk__66490,i__66492);
var map__66493__$1 = ((((!((map__66493 == null)))?((((map__66493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66493):map__66493);
var effect = map__66493__$1;
var ms = cljs.core.get.call(null,map__66493__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__66493__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__66489,chunk__66490,count__66491,i__66492,map__66493,map__66493__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__66489,chunk__66490,count__66491,i__66492,map__66493,map__66493__$1,effect,ms,dispatch))
,ms);
}

var G__66497 = seq__66489;
var G__66498 = chunk__66490;
var G__66499 = count__66491;
var G__66500 = (i__66492 + (1));
seq__66489 = G__66497;
chunk__66490 = G__66498;
count__66491 = G__66499;
i__66492 = G__66500;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66489);
if(temp__5457__auto__){
var seq__66489__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66489__$1)){
var c__21312__auto__ = cljs.core.chunk_first.call(null,seq__66489__$1);
var G__66501 = cljs.core.chunk_rest.call(null,seq__66489__$1);
var G__66502 = c__21312__auto__;
var G__66503 = cljs.core.count.call(null,c__21312__auto__);
var G__66504 = (0);
seq__66489 = G__66501;
chunk__66490 = G__66502;
count__66491 = G__66503;
i__66492 = G__66504;
continue;
} else {
var map__66495 = cljs.core.first.call(null,seq__66489__$1);
var map__66495__$1 = ((((!((map__66495 == null)))?((((map__66495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66495):map__66495);
var effect = map__66495__$1;
var ms = cljs.core.get.call(null,map__66495__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__66495__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__66489,chunk__66490,count__66491,i__66492,map__66495,map__66495__$1,effect,ms,dispatch,seq__66489__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__66489,chunk__66490,count__66491,i__66492,map__66495,map__66495__$1,effect,ms,dispatch,seq__66489__$1,temp__5457__auto__))
,ms);
}

var G__66505 = cljs.core.next.call(null,seq__66489__$1);
var G__66506 = null;
var G__66507 = (0);
var G__66508 = (0);
seq__66489 = G__66505;
chunk__66490 = G__66506;
count__66491 = G__66507;
i__66492 = G__66508;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__66509 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__66510 = null;
var count__66511 = (0);
var i__66512 = (0);
while(true){
if((i__66512 < count__66511)){
var event = cljs.core._nth.call(null,chunk__66510,i__66512);
re_frame.router.dispatch.call(null,event);

var G__66513 = seq__66509;
var G__66514 = chunk__66510;
var G__66515 = count__66511;
var G__66516 = (i__66512 + (1));
seq__66509 = G__66513;
chunk__66510 = G__66514;
count__66511 = G__66515;
i__66512 = G__66516;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66509);
if(temp__5457__auto__){
var seq__66509__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66509__$1)){
var c__21312__auto__ = cljs.core.chunk_first.call(null,seq__66509__$1);
var G__66517 = cljs.core.chunk_rest.call(null,seq__66509__$1);
var G__66518 = c__21312__auto__;
var G__66519 = cljs.core.count.call(null,c__21312__auto__);
var G__66520 = (0);
seq__66509 = G__66517;
chunk__66510 = G__66518;
count__66511 = G__66519;
i__66512 = G__66520;
continue;
} else {
var event = cljs.core.first.call(null,seq__66509__$1);
re_frame.router.dispatch.call(null,event);

var G__66521 = cljs.core.next.call(null,seq__66509__$1);
var G__66522 = null;
var G__66523 = (0);
var G__66524 = (0);
seq__66509 = G__66521;
chunk__66510 = G__66522;
count__66511 = G__66523;
i__66512 = G__66524;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__66525 = cljs.core.seq.call(null,value);
var chunk__66526 = null;
var count__66527 = (0);
var i__66528 = (0);
while(true){
if((i__66528 < count__66527)){
var event = cljs.core._nth.call(null,chunk__66526,i__66528);
clear_event.call(null,event);

var G__66529 = seq__66525;
var G__66530 = chunk__66526;
var G__66531 = count__66527;
var G__66532 = (i__66528 + (1));
seq__66525 = G__66529;
chunk__66526 = G__66530;
count__66527 = G__66531;
i__66528 = G__66532;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66525);
if(temp__5457__auto__){
var seq__66525__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66525__$1)){
var c__21312__auto__ = cljs.core.chunk_first.call(null,seq__66525__$1);
var G__66533 = cljs.core.chunk_rest.call(null,seq__66525__$1);
var G__66534 = c__21312__auto__;
var G__66535 = cljs.core.count.call(null,c__21312__auto__);
var G__66536 = (0);
seq__66525 = G__66533;
chunk__66526 = G__66534;
count__66527 = G__66535;
i__66528 = G__66536;
continue;
} else {
var event = cljs.core.first.call(null,seq__66525__$1);
clear_event.call(null,event);

var G__66537 = cljs.core.next.call(null,seq__66525__$1);
var G__66538 = null;
var G__66539 = (0);
var G__66540 = (0);
seq__66525 = G__66537;
chunk__66526 = G__66538;
count__66527 = G__66539;
i__66528 = G__66540;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
