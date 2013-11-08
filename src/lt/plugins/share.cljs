(ns lt.plugins.share
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]))

(def ed (pool/last-active))

(defn get-ref []
  (let [ref (js/Firebase. "https://firepad.firebaseio-demo.com")
        ref (.push ref)]
    ref))

(def ref (get-ref))

(.name ref)

(defn attach [ed ref]
  #_(editor/select-all ed)
  (editor/set-selection ed
                 {:line 0 :ch 0}
                 {:line (editor/last-line ed)})
  (let [text (editor/selection ed)]
    (editor/replace-selection ed "")
    (js/Firepad.fromCodeMirror ref (editor/->cm-ed ed))
    (editor/replace-selection ed text)))

(attach ed ref)
