(ns catalog.events
  (:require [day8.re-frame.http-fx]
            [ajax.core :as ajax]
            [re-frame.core :refer [reg-event-fx reg-event-db]]
            [catalog.db :as db]))

(reg-event-fx
 ::init-db
 (fn [_ _]
   {:db (assoc db/default-db :loding? true)
    :http-xhrio {:method          :get
                 :uri             "/api/article"
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success]
                 :on-failure      [::failure]}}))

(reg-event-db
 ::failure
 (fn [_ _]))

(reg-event-db
 ::success
 (fn [db [_ result]]
   (-> db
       (assoc :loding? false)
       (assoc :articles result))))
