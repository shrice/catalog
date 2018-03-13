(ns catalog.views
  (:require [re-frame.core :as rf]
            [catalog.subs :as subs]
            [clojure.string :as string]))

(defn- ->CSSName
  [^:String name]
  (-> name
      string/trim
      string/lower-case
      (string/replace #"(\+|\(|\)|)" "")
      (string/split #" ")
      (#(string/join "_" %))))

(defn- detail
  [{:keys [name id img]}]
  ^{:key img} [:li
               [:img {:src img}]
               [:p.itemlist__id id]
               (for [nm name] ^{:key nm} [:p.itemlist__name nm])])

(defn- article
  [[gpnm items]]
  ^{:key gpnm} [:section {:id (->CSSName gpnm)}
                [:h1 gpnm]
                [:ul (for [item items] (detail item))]])

(defn- navbar
  [[gpnm _]]
  (let [id (->CSSName gpnm)]
    ^{:key id} [:li
                [:a {:href (str "#" id)} gpnm]]))

(defn- articles
  []
  (let [items @(rf/subscribe [::subs/articles])]
    [:div.container
     [:nav.wrapper__navbar
      [:div.navbar
       [:ul (for [item items] (navbar item))]]]
     [:div.itemlist (for [item items] (article item))]]))

(defn- now-loding
  []
  [:h1 "now loding..."])

(defn- main
  []
  (let [loding? (rf/subscribe [::subs/loding?])]
    (fn []
      (if @loding?
        (now-loding)
        (articles)))))

(def ^:private pages
  {:home #'main})

(defn page
  []
  (:home pages))
