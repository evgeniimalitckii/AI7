(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("27900fca-600e-40a6-a4a9-a084cb79c9d6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '27900fca-600e-40a6-a4a9-a084cb79c9d6' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"09fc5c62-ae60-4077-ac7b-3ef0ef75a3d8":{"roots":{"references":[{"attributes":{"formatter":{"id":"1288","type":"BasicTickFormatter"},"ticker":{"id":"1263","type":"BasicTicker"}},"id":"1262","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1267","type":"PanTool"},{"id":"1268","type":"WheelZoomTool"},{"id":"1269","type":"BoxZoomTool"},{"id":"1270","type":"SaveTool"},{"id":"1271","type":"ResetTool"},{"id":"1272","type":"HelpTool"}]},"id":"1273","type":"Toolbar"},{"attributes":{},"id":"1270","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1282","type":"Circle"},{"attributes":{"below":[{"id":"1257","type":"LinearAxis"}],"center":[{"id":"1261","type":"Grid"},{"id":"1266","type":"Grid"}],"left":[{"id":"1262","type":"LinearAxis"}],"renderers":[{"id":"1283","type":"GlyphRenderer"}],"title":{"id":"1286","type":"Title"},"toolbar":{"id":"1273","type":"Toolbar"},"x_range":{"id":"1249","type":"DataRange1d"},"x_scale":{"id":"1253","type":"LinearScale"},"y_range":{"id":"1251","type":"DataRange1d"},"y_scale":{"id":"1255","type":"LinearScale"}},"id":"1248","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1271","type":"ResetTool"},{"attributes":{"ticker":{"id":"1258","type":"BasicTicker"}},"id":"1261","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"1292","type":"Selection"},"selection_policy":{"id":"1293","type":"UnionRenderers"}},"id":"1280","type":"ColumnDataSource"},{"attributes":{},"id":"1258","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"1263","type":"BasicTicker"}},"id":"1266","type":"Grid"},{"attributes":{"source":{"id":"1280","type":"ColumnDataSource"}},"id":"1284","type":"CDSView"},{"attributes":{},"id":"1288","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1280","type":"ColumnDataSource"},"glyph":{"id":"1281","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1282","type":"Circle"},"selection_glyph":null,"view":{"id":"1284","type":"CDSView"}},"id":"1283","type":"GlyphRenderer"},{"attributes":{},"id":"1255","type":"LinearScale"},{"attributes":{},"id":"1253","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1291","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"1291","type":"BoxAnnotation"}},"id":"1269","type":"BoxZoomTool"},{"attributes":{},"id":"1290","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1290","type":"BasicTickFormatter"},"ticker":{"id":"1258","type":"BasicTicker"}},"id":"1257","type":"LinearAxis"},{"attributes":{},"id":"1292","type":"Selection"},{"attributes":{},"id":"1268","type":"WheelZoomTool"},{"attributes":{},"id":"1263","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1251","type":"DataRange1d"},{"attributes":{},"id":"1293","type":"UnionRenderers"},{"attributes":{},"id":"1267","type":"PanTool"},{"attributes":{"text":""},"id":"1286","type":"Title"},{"attributes":{"callback":null},"id":"1249","type":"DataRange1d"},{"attributes":{},"id":"1272","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1281","type":"Circle"}],"root_ids":["1248"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"09fc5c62-ae60-4077-ac7b-3ef0ef75a3d8","roots":{"1248":"27900fca-600e-40a6-a4a9-a084cb79c9d6"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();