(ns catalog.module.api
  (:require [integrant.core :as ig]))

(defrecord Boundary [spec])

(defmethod ig/init-key :catalog.module/api [_ spec]
  (->Boundary spec))
