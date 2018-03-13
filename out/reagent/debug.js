// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__65903__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__65903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65904__i = 0, G__65904__a = new Array(arguments.length -  0);
while (G__65904__i < G__65904__a.length) {G__65904__a[G__65904__i] = arguments[G__65904__i + 0]; ++G__65904__i;}
  args = new cljs.core.IndexedSeq(G__65904__a,0,null);
} 
return G__65903__delegate.call(this,args);};
G__65903.cljs$lang$maxFixedArity = 0;
G__65903.cljs$lang$applyTo = (function (arglist__65905){
var args = cljs.core.seq(arglist__65905);
return G__65903__delegate(args);
});
G__65903.cljs$core$IFn$_invoke$arity$variadic = G__65903__delegate;
return G__65903;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__65906__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__65906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65907__i = 0, G__65907__a = new Array(arguments.length -  0);
while (G__65907__i < G__65907__a.length) {G__65907__a[G__65907__i] = arguments[G__65907__i + 0]; ++G__65907__i;}
  args = new cljs.core.IndexedSeq(G__65907__a,0,null);
} 
return G__65906__delegate.call(this,args);};
G__65906.cljs$lang$maxFixedArity = 0;
G__65906.cljs$lang$applyTo = (function (arglist__65908){
var args = cljs.core.seq(arglist__65908);
return G__65906__delegate(args);
});
G__65906.cljs$core$IFn$_invoke$arity$variadic = G__65906__delegate;
return G__65906;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
