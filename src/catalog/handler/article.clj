(ns catalog.handler.article
  (:require [ataraxy.response :as response]
            [integrant.core :as ig]
            [catalog.boundary.article :as api]
            [catalog.crawler.core :as c]))

(defmethod ig/init-key ::list [_ {:keys [uri]}]
  (fn [_] [::response/ok (-> (api/get-article uri) c/re-formatting)]))
