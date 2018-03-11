(ns catalog.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [catalog.views :as views]
            [catalog.events :as events]))

(defn render!
  []
  (rf/clear-subscription-cache!)
  (rf/dispatch [::events/init-db])
  (r/render [(views/page)]
            (js/document.getElementById "app")))

(defn ^:export init
  []
  (render!))
