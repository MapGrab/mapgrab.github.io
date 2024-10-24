<!-- # Playwright usage!

## Installing dependencies

```bash
npm install --save @mapgrab/playwright
```

## Map Locator

MapLocators are the central piece of MapGrab Playwright auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the map at any moment. A locator can be created in two ways.

:blue_book: [Learn more about creating locator selectors](docs/selector.md)

```ts
import { mapLocator, MapLocator } from '@mapgrab/playwright';

test('check element exists on map', ({ page }) => {
  // Using a constructor
  const bestCityLocator = new MapLocator(page, 'map[id=mainMap] layer[id=city-symbols] filter["==", ["get", "id"], 123]');
  // Using a function factory
  const bestCityLocator = mapLocator(page, 'map[id=mainMap] layer[id=city-symbols] filter["==", ["get", "id"], 123]');
});
```

## Locator methods

| Method                                                                          | Description                                                       |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| .count(): Promise\<number>                                                      | Return number of elements exists on map                           |
| .click(options): Promise\<void>                                                 | Click element on map                                              |
| .dbclick(options): Promise\<void>                                               | Double Click element on map                                       |
| .hover(): Promise\<void>                                                        | Hover element on map                                              |
| .boundingBox(): Promise\<{x: number; y: number; width: number; height: number}> | Return element bounding box on map                                |
| .screenshot(options): Promise\<Buffer>                                          | Return element screenshot buffer based on bounding box of element |

## Supported assertions

| Assertion           | Description                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| .toHaveCount()      | List has exact number of elements exists on map                                                    |
| .toBeVisible()      | Element is visible on map                                                                          |
| .toBeHidden()       | Element is not visible on map                                                                      |
| .first()            | Returns locator to the first matching element.                                                     |
| .last()             | Returns locator to the last matching element.                                                      |
| .nth(index: number) | Returns locator to the n-th matching element. It's zero based, `nth(0)` selects the first element. |

## Creating and using MapLocator

### 1. Using locator in assertions

```ts
import { mapLocator } from '@mapgrab/playwright';
import { expect, test } from '@playwright/test';

test('Place label should be visible', ({ page }) => {
  const placeLocator = mapLocator(page, 'map[id=mainMap] layer[id=places-label]').first();

  expect(placeLocator).toBeVisible();
});
```

### 2. Using locator methods

:warning: All locator methods automatically waiting until the map stops moving and animating before executing.

```ts
import { mapLocator, MapController } from '@mapgrab/playwright';
import { test, expect } from '@playwright/test'

test("Place label should be clickable", ({ page }) => {
   const placeLocator = mapLocator(page, "map[id=mainMap] layer[id=places-label]").first();

   await placeLocator.click();

   // or get bounding box and click in custom place
   const { x, y, width, height } = await placeLocator.getBoundingBox();
   // Click on bottom right corner of element
   await page.click(x + width, y + height);
});
```

## Map Controller

Map Controller is a helper to manipulate map

### Supported methods

| Method                                                                | Description                                              |
| --------------------------------------------------------------------- | -------------------------------------------------------- |
| .setView({ center?: number[], zoom?: number }): Promise<void>         | Set map view, center is in LngLat notation               |
| .setViewAbsolute({ center?: number[], zoom?: number }): Promise<void> | Set map view, center is in absolute x, y screen notation |
| .fitToBoundingBoxAbsolute(bbox: BBox, options?): Promise<void>        | Fit map to bounding box                                  |
| .waitToMapStable(): Promise<void>                                     | Wait until map is stable.                                |
| .waitToMapLoaded(): Promise<void>                                     | Wait until map and it's style is loaded                  |

### 2. Using controller methods

```ts
import { mapLocator, MapController } from '@mapgrab/playwright';
import { test, expect } from '@playwright/test'

test("Check polygon is correct display", ({ page }) => {
   const mapController = new MapController(page, 'mainMap');
   const polygonLocator = mapLocator(page, "map[id=mainMap] layer[id=polygons]").first();

   const bbox = await polygonLocator.getBoundingBox();
   await mapController.fitToBoundingBoxAbsolute(bbox);

   await mapController.setView({ zoom: 2 });
});
``` -->
