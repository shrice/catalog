(ns catalog.client.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

(defn main
  []
  [:div
   [:h1 "reformated catalog!"]])

(defn ^:export init
  []
  (r/render [main]
            (js/document.getElementById "app")))
