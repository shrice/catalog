(ns catalog.crawler.core
  (:require [org.httpkit.client :as http]
            [hickory.core :as p]
            [hickory.select :as s]
            [clojure.string :as string]))

(defrecord Element [name id img])

(defn- site-htree [body]
  (-> body p/parse p/as-hickory))

(defn- select-item-list [tree]
  (s/select (s/child
             (s/class "catalog__itemlist")
             (s/tag :section)
             (s/tag :ul)
             (s/tag :li))
            tree))

(defn- first-content [item]
  (first (:content item)))

(defn- create-attr
  [f selector items]
   (let [col (s/select selector items)]
     (reduce f nil col)))

(def ^:private create-attr-join-by-break
  (partial create-attr
           (fn [pre cur]
             (if (nil? pre)
               (first-content cur)
               (str pre "\n" (first-content cur))))))

(def ^:private create-attr-put-into-col
  (partial create-attr
           (fn [pre cur]
             (if (nil? pre)
               [(first-content cur)]
               (conj pre (first-content cur))))))

(def ^:private create-name
  (partial create-attr-put-into-col (s/class "catalog__itemlist__name")))

(def ^:private create-id
  (partial create-attr-join-by-break (s/class "catalog__itemlist__id")))

(defn- get-context [uri]
  (loop [uri (string/split uri #"/")
         context nil]
    (if (or (empty? uri) (= (count uri) 1))
      (str context "/")
      (recur (rest uri) (if (nil? context) (first uri) (str context "/" (first uri)))))))

(defn- create-img [uri item]
  (let [imgs (s/select (s/child (s/tag :img)) item)
        img (first imgs)]
    (str (get-context uri)
         (-> img :attrs :src))))

(defn- hickory->Element [uri item]
  (->Element
   (create-name item)
   (create-id item)
   (create-img uri item)))

(defn- group-by-name [col]
  (group-by #(-> % :name first) col))

(defn- sort-by-name [col]
  (sort-by #(-> % first first) col))

(defn re-formatting [uri]
  (let [res (http/get uri)
        tree (site-htree (:body @res))]
    (->
     (map (partial hickory->Element uri) (select-item-list tree))
     group-by-name
     sort-by-name)))
