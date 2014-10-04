(ns lt.plugins.share
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.popup :as popup]
            [lt.util.dom :as dom]
            [lt.objs.platform :as platform]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.objs.context :as ctx])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui text-input [m]
  [:input {:type "text" :placeholder (:placeholder m)}]
  :focus (fn []
           (ctx/in! :popup.input))
  :blur (fn []
          (ctx/out! :popup.input)))

(defn input [action-fn & {:as opts}]
  (let [input (text-input opts)
        p (popup/popup! {:header  (or (:header opts) "Enter value")
                         :body input
                         :buttons [{:label "Cancel"}
                                   {:label "Submit"
                                    :action (fn []
                                              (action-fn (dom/val input)))}]})]
    (dom/focus input)
    (.setSelectionRange input 1000 1000)))


;; Url used by older examples
;; e.g. http://htmlpreview.github.io/?https://github.com/firebase/firepad/blob/master/examples/code.html
;; (def firepad-url "https://firepad.firebaseio-demo.com")
;; Url used by http://demo.firepad.io/
(def firepad-url "https://firepad.firebaseio.com/demo")

(defn share-ref []
  (let [ref (js/Firebase. firepad-url)
        ref (.push ref)]
    ref))

(defn attach-ref [id]
  (let [ref (js/Firebase. firepad-url)
        ref (.child ref id)]
    ref))

(defn attach-cm [ed ref]
  (editor/set-selection ed
                 {:line 0 :ch 0}
                 {:line (editor/last-line ed)})
  (let [text (editor/selection ed)]
    (editor/replace-selection ed "")
    (js/Firepad.fromCodeMirror ref (editor/->cm-ed ed))
    (editor/replace-selection ed text)))

(cmd/command {:command :share.attach
              :desc "Share: Attach current tab"
              :exec (fn []
                      (let [ed (pool/last-active)
                            input-callback (fn [ed input]
                                             (attach-cm ed (attach-ref input))
                                             (notifos/set-msg! (str "Attached to " (pr-str input))))
                            ]
                        (input (partial input-callback ed) :header "Enter ID")))})

(cmd/command {:command :share.share
              :desc "Share: Share current tab"
              :exec (fn []
                      (let [ed (pool/last-active)
                            ref (share-ref)
                            id (.name ref)]
                        (attach-cm ed ref)
                        (platform/copy id)
                        (notifos/set-msg! (str "Shared to " (pr-str id)))))})
