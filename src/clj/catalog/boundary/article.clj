(ns catalog.boundary.article
  (:require catalog.module.api))

(defprotocol Article
  (get-article [spec]))

(extend-protocol Article
  catalog.module.api.Boundary
  (get-article [{uri :spec}]
    (:target-uri uri)))
