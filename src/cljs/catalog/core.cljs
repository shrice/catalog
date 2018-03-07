(ns catalog.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [catalog.views :as views]))

(defn render!
  []
  (rf/clear-subscription-cache!)
  (r/render [(views/pages :home)]
            (js/document.getElementById "app")))

(defn ^:export init
  []
  (render!))
