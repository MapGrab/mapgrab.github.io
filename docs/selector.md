## MapGrab Selector

Selector MapGrab is a specific format representing a reference to elements on the map. The syntax is similar to CSS selectors.

##### The selector allows you to indicate the origin of an element. You can indicate which map, which layer the element should come from. In addition, you can specify a filter parameter after the properties of the element from the map.

Let's consider the following selector

```bash
map[id=mainMap] layer[id=cities-label] filter["==", ["get", "id"], "123"]
```

This selector points to the element that is in the map with the identifier **mainMap**, located on the layer with the identifier **cities-label**. It was additionally specified a parameter that from the available set of elements will filter out those elements that contain an identifier with id "123". The filter section is exactly the same as the filter passed in the Map library styles. You can learn more in the map library documentation([MapLibre](https://maplibre.org/maplibre-style-spec/expressions/), [MapBox](https://docs.mapbox.com/style-spec/reference/expressions/)).

:warning: The **map**, **layer** and **filter** section in selector is optional, but at least one of them must be given.

### Other examples of selectors

#### When no specify map id

```bash
layer[id=cities-label]
```

This Example get all elements of all maps, on layer with id **cities-label**

#### When no specify layer

```bash
map[id=mainMap]
```

This Example get all elements of map with id **mainMap**

#### When provided only filter

```bash
filter["==", ["get", "id"], "123"]
```

This Example get all elements of which contain property **id** = "123"

## Matchers

For map and layer properties, you can pass the type of matching.

```bash
map[id*=mainMap] layer[id*=cities-label]
```

This locator find elements on map which id contains text "**mainMap**" and on layers which id contains text "**cities-label**"
