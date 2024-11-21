# Deprecated

This repository is no longer maintained and is deprecated. Please be aware that it may not work with the latest versions of its dependencies.

---

# Leaflet.singleclick



This plugin extends `L.Evented` to fire the `singleclick` event. A `singleclick` happens when clicking on something but not double-clicking for 500msec.

The timeout can be configured by setting the `singleClickTimeout` option on the relevant `L.Evented`, like so:

```js
marker.options.singleClickTimeout = 250;
marker.on('singleclick', function(ev){ ... } );
```

Works with Leaflet 1.0.0-beta1 and greater. Does **not** work with 0.7.x.

## Live example

http://mazemap.github.io/Leaflet.singleclick/
