(ns catalog.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 ::loding?
 (fn [db _]
   (:loding? db)))

(reg-sub
 ::articles
 (fn [db _]
   (:articles db)))
