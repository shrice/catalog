(ns catalog.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

(defn main
  []
  [:div
   [:h1 "reformated catalog!"]
   [:div "content"]])

(defn ^:export init
  []
  (r/render [main]
            (js/document.getElementById "app")))
