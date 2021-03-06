(defproject catalog "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [duct/core "0.6.2"]
                 [duct/module.logging "0.3.1"]
                 [duct/module.web "0.6.4"]
                 [duct/module.ataraxy "0.2.0"]
                 [http-kit "2.2.0"]
                 [hickory "0.7.1"]

                 [re-frame "0.10.5"]
                 [reagent "0.8.0-alpha2"]
                 [day8.re-frame/http-fx "0.1.5"]

                 [org.clojure/clojurescript "1.9.946"]
                 [binaryage/devtools "0.9.7"]
                 [duct/compiler.cljs "0.2.0"]
                 [duct/server.figwheel "0.2.1"]]

  :plugins [[duct/lein-duct "0.10.6"]]
  :source-paths ["src/clj" "src/cljc"]
  :main ^:skip-aot catalog.main
  :resource-paths ["resources" "target/resources"]
  :prep-tasks     ["javac" "compile" ["run" ":duct/compiler"]]
  :uberjar-name "catalog-standalone.jar"
  :profiles
  {:dev  [:project/dev :profiles/dev]
   :repl {:prep-tasks   ^:replace ["javac" "compile"]
          :repl-options {:init-ns user
                         :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}
   :uberjar {:aot :all}
   :profiles/dev {}
   :project/dev  {:source-paths   ["dev/src"]
                  :resource-paths ["dev/resources"]
                  :dependencies   [[integrant/repl "0.2.0"]
                                   [eftest "0.4.1"]
                                   [kerodon "0.9.0"]
                                   [binaryage/devtools "0.9.7"]]}})
